import { TestBed, async } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from "@angular/core";

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let appComponent : AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Angular: Getting Started'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.pageTitle).toEqual("Acme Product Management");
  }));

  it('should render title in anchor tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('a').textContent).toContain('Acme Product Management');
  }));
});
