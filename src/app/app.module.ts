import { PhotosModule } from './photos/photos.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

//modulo root
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [ // importa os feature modules desejados 
    PhotosModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
