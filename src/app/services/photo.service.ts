import {Injectable} from '@angular/core';
import {Camera, CameraPhoto, CameraResultType, CameraSource, Photo} from "@capacitor/camera";
import {Observable, of, switchMap} from "rxjs";
import {fromPromise} from "rxjs/internal/observable/innerFrom";

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor() {
  }

  public async takePicture() {
    return fromPromise(Camera.checkPermissions()).pipe(
      switchMap(permissionStatus => {
        if (permissionStatus.camera === 'granted') {
          const capturedPhoto = Camera.getPhoto({
            resultType: CameraResultType.DataUrl,
            source: CameraSource.Camera,
            quality: 80
          });

          return fromPromise(capturedPhoto).pipe();
        } else {
          console.log('Permission not granted');
          return of(null);
        }
      })
    );


  }


}

