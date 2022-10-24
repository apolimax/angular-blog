import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  photoCover: string = 'https://via.placeholder.com/400x300';
  contentTitle: string = 'Title';
  contentDescription: string = 'bla bla bla';
  private id: string | null = '0';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => (this.id = value.get('id')));

    if (this.id) this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string) {
    const result = dataFake.filter((article) => article.id === id)[0];

    console.log({ result });

    this.contentTitle = result.title;
    this.contentDescription = result.description;
    this.photoCover = result.photoCover;
  }
}
