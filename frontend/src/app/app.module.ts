import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModuleDecorator({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}


function NgModuleDecorator(arg0: { declarations: (typeof AppComponent)[]; imports: (typeof FormsModule | typeof BrowserModule)[]; providers: never[]; bootstrap: (typeof AppComponent)[]; }): (target: typeof AppModule) => void | typeof AppModule {
  throw new Error('Function not implemented.');
}

