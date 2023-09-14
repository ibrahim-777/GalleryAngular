import { Routes } from "@angular/router";
import { GalleryComponent } from "./app/gallery/gallery.component";
import { ImageDetailsComponent } from "./app/image-details/image-details.component";
export const  appRoutes:Routes =[
    {path:"gallery",component: GalleryComponent},
    {path:"image/:id",component: ImageDetailsComponent},
    {path:"" , redirectTo:"/gallery" , pathMatch:'full'},
]