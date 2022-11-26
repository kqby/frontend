import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  title="todo"
  show = ''

  filter:   'all'  | 'active' |'done'  = 'all';

  allItems = [
    { description: 'eat', done: true },
    { description: 'sleep', done: false },
    { description: 'play', done: false },
    { description: 'laugh', done: false },
  ];
  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter((item) => this.filter === 'done' ? item.done : !item.done);
  }
  AddItem(description:string){
    this.allItems.unshift({
      description,done:false


    });
  }
  DeleteItem(index:number){

    if(index !== -1){
      delete this.allItems[index]

    }

  }
  constructor() { }

  ngOnInit(): void {
  }
}
