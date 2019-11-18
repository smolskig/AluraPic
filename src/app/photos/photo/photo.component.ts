import { Component, Input } from "@angular/core";

@Component({
    selector: 'ap-photo',
    templateUrl:'photo.component.html',
})

export class PhotoComponent {

    //@Input Permite que o componente receba valores externos quando usado na forma declarativa no template de outros componentes.
    @Input() description ='';
    @Input() url ='';

}