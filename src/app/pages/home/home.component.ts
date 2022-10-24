import { Component, OnInit } from '@angular/core';
import { smallCardsFake } from 'src/app/data/dataFake';

type smallCard = {
  id: string;
  photoCover: string;
  cardTitle: string;
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  smallCardsArray: smallCard[] = smallCardsFake;

  constructor() {}

  ngOnInit(): void {}
}
