import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { CommonModule } from '@angular/common';

//feature Module photos, todos os components relacionados a photos serão declarados e exportados por aqui
@NgModule({
    declarations:[ PhotoComponent, PhotoListComponent ], // declara os componente do módulo para que os mesmo se enxerguem
    imports:[ HttpClientModule, CommonModule ]
})
export class PhotosModule{

}