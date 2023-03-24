import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  private todoDataService:TodoDataService,
  private route:Router
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

updateTodo(id:number){
  console.log(`update todo ${id}`)
  this.route.navigate(['todos',id])

}

addTodo(){
  this.route.navigate(['todos',-1])
}

}
