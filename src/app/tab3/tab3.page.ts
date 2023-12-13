import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  scannedBarcodes: string[] = [];
  showCamera: boolean = false;

  scanBarcode() {
       const scannedBarcode: string = "Scanned Barcode";
    this.scannedBarcodes.push(scannedBarcode);
  }

}