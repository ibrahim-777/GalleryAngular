import { Component, Input, OnChanges } from '@angular/core';
import { ImageService } from '../shared/Image';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnChanges {
  @Input()  filterBy?:any = 'all'
  visibleImages :any[]=[]
constructor (public imageService:ImageService){
  this.visibleImages = this.imageService.getImages()
}
ngOnChanges(){
  this.visibleImages = this.imageService.getImages()
}
}
