import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  visibleImages :any[]=[]
IMAGE:[]=[]
  constructor() { }
  IMAGES = [
    {"id":1,"category":"boats","caption":"view from boats","url":"assets/img/boat_01.jpg"},
    {"id":2,"category":"boats","caption":"another Boat","url":"assets/img/boat_02.jpg"},
    {"id":3,"category":"boats","caption":"Boats on the sea","url":"assets/img/boat_03.jpg"},
    {"id":4,"category":"boats","caption":"expensive Boat","url":"assets/img/boat_04.jpg"},
    {"id":5,"category":"camping","caption":"view from camping","url":"assets/img/camping_01.jpg"},
    {"id":6,"category":"camping","caption":"capming near the lack","url":"assets/img/camping_02.jpg"},
    {"id":7,"category":"camping","caption":"camping on the montain","url":"assets/img/camping_03.jpg"},
    {"id":8,"category":"library","caption":"view from library","url":"assets/img/library_01.jpg"},
    {"id":9,"category":"library","caption":"fullside of library","url":"assets/img/library_02.jpg"},
    {"id":10,"category":"library","caption":"suitable place ever","url":"assets/img/library_03.jpg"},
  ]
  getImages(){
    return this.visibleImages = this.IMAGES.slice(0)   /// remove id
    
    }
    getImage(id:number) {
      return this.IMAGES.slice(0).find((image:any) => image.id == id)
    }
}
 