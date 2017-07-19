import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {S02AsyncComponent} from './s02-async.component';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

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

  fit('should display title', () => {
    debugElement
      .query(By.css('.set-title'))
      .triggerEventHandler('click', null);

    setTimeout(() => {
      fixture.detectChanges();
      const value = debugElement.query(By.css('h1')).nativeElement.innerText;
      expect(value).toEqual('One crazy app!');
    }, 50);
  });
});
