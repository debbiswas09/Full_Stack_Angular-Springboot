import { Component } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

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
todos: Todo[]=[];

message: String=''


constructor(
  private todoDataService:TodoDataService
){};

ngOnInit(){
  this.refreshTodos()
}
refreshTodos(){
  this.todoDataService.retriveAllTodos('deb').subscribe(
    response =>{
      console.log(response);
      this.todos=response;
    }
  )
}

deleteTodo(id:number){
  console.log(`delete todo ${id}`)
  this.todoDataService.deleteTodo('deb',id).subscribe(
    response => {
      console.log(response);
      this.message=`Deleted ${id} Successfully`
      this.refreshTodos();
    }
  )
}

}
