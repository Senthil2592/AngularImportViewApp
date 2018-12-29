import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router' 
import { AppComponent } from './app.component';
import { FileUtil }                     from './file.utils';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]) 
  ],
  providers: [FileUtil],
  bootstrap: [AppComponent]
})
export class AppModule { }
