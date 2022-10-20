import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AppRoutingModule } from '../app-routing.module';

import { StudentComponent } from './student.component';
import { StudentService } from './student.service';

describe('StudentComponent', () => {
  let component: StudentComponent;
  let fixture: ComponentFixture<StudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentComponent],
      providers: [StudentService],
      imports: [AppRoutingModule, HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(StudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('saveData should call calculate()', () => {
    spyOn(component, 'calculate');
    component.saveData();
    expect(component.calculate).toHaveBeenCalled();
  });

  it('calculate should return expected value', () => {
    spyOn(component, 'calculate').and.returnValue(11);
    const result: number = component.calculate(6, 5);
    expect(result).toEqual(11);
  });

  it('studentResult should return fail', () => {
    // spyOn(component, 'calculate').and.returnValues(40,20) // What it does it that calls all methods with some fake
    // spyOn(component, 'studentResult').and.returnValue('fail');
    expect(component.studentResult()).toEqual('fail');
  });

  it('saveDetails method from service should populate this.result', () => {
    let studentService = fixture.debugElement.injector.get(StudentService);
    spyOn(studentService, 'saveDetails').and.callFake(() => {
      return of({
        result: 200,
      });
    });
    spyOn(component, 'printInConsole').and.stub();
    component.saveData();
    expect(component.result).toEqual({
      result: 200,
    });
  });
});
