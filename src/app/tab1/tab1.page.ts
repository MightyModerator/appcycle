import {Component} from '@angular/core';
import {PhotoService} from "../services/photo.service";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private photoService: PhotoService) {

  }

  getProfileImage(){
    return localStorage.getItem('photo') ?? '';
  }

  async addPhoto() {
    console.log('adding photo');
    await this.photoService.takePicture().then((photo) => {
      photo.subscribe(async (photo) => {
        console.log(photo?.dataUrl);
        localStorage.setItem('photo', photo?.dataUrl ?? '');
      });
    });
  }
}
