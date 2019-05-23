import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'flask',
    'beer',
    'paper-plane',
    'american-football',
    'boat',
    'build'
  ];
  
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor() {
    const subjects  = ['calculo', 'datawarehouse', 'videojuegos', 'moviles'];
    const it = subjects.map( subject => ({
      title: subject,
      note: "unipahu",
      icon: this.icons[Math.floor(Math.random() * this.icons.length)]
    }));
    this.items = it;
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
