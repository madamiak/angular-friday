import {async, ComponentFixture, fakeAsync, flushMicrotasks, TestBed, tick} from '@angular/core/testing';

import {S02AsyncComponent} from './s02-async.component';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

describe('S02AsyncComponent', () => {
  let component: S02AsyncComponent;
  let fixture: ComponentFixture<S02AsyncComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [S02AsyncComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S02AsyncComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  fit('should display title', fakeAsync(() => {
    Observable.of(Promise.resolve(true)).subscribe(() => {
      setTimeout(() => {
        debugElement
          .query(By.css('.set-title'))
          .triggerEventHandler('click', null);
      }, 1000)
    });

    tick(1000);
    fixture.detectChanges();
    const value = debugElement.query(By.css('h1')).nativeElement.innerText;
    expect(value).toEqual('One crazy app!');
  }));
});
