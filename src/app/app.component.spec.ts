import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let appComponent : AppComponent;

  beforeEach(async(() => {
    appComponent = new AppComponent();
  //   TestBed.configureTestingModule({
  //     declarations: [
  //       AppComponent
  //     ],
  //   }).compileComponents();
  }));

  it('should create the app', async(() => {
    // const fixture = TestBed.createComponent(AppComponent);
    // const app = fixture.debugElement.componentInstance;
    expect(appComponent).toBeTruthy();
  }));

  it(`should have as title 'Angular: Getting Started'`, async(() => {
    // const fixture = TestBed.createComponent(AppComponent);
    // const app = fixture.debugElement.componentInstance;
    expect(appComponent.pageTitle).toEqual("Acme Product Management");
  }));

  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to Angular: Getting Started!!');
  // }));
});
