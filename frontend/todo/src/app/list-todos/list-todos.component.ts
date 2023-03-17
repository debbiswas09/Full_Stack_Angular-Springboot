import { Component } from '@angular/core';

export class Todo{
  constructor(
      public id: number,
      public description: string,
      public done : boolean,
      public targetDate: Date
  ){}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent {
todos=[
  new Todo(1,'Learn to Dance',false,new Date()),
  new Todo(2,'Finish a game',false,new Date()),
  new Todo(2,'Workout',false,new Date())
  // {id : 1,description: 'Learn to Dance'},
  // {id : 2,description: 'Finish a game'},
  // {id : 3,description: 'Workout'}
]
// todo={
//       id : 1,
//       description: 'Learn to Dance'

// }

}
