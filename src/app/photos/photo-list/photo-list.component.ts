import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

 
  photos:Object[] = []; //Array de photos que será exibido no template do component

  constructor(private photoservice: PhotoService ){ //constructor instancia o HttpClient para que a requisição da API seja realizada
  }
  
  ngOnInit():void{

    this.photoservice.listFromUser('flavio')
      .subscribe(photos=>{ this.photos = photos })
  }
}

