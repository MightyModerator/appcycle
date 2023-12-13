import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  appCyclePoints: { name: string, address: string }[] = [
    { name: 'AppCycle Point 1', address: 'Adresse 1' },
    { name: 'AppCycle Point 2', address: 'Adresse 2' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}