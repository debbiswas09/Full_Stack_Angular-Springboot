import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  id:number =0;
  todo:Todo = new Todo(this.id,'',false,new Date());

  constructor(
    private todoService : TodoDataService,
    private route: ActivatedRoute
  ){}

  ngOnInit(){
    this.id=this.route.snapshot.params['id'];
    this.todo = new Todo(this.id,'',false,new Date());
    this.todoService.retriveTodo('deb',this.id).subscribe(
          data=>this.todo=data
    )
  }

  saveTodo(){
    this.todoService.updateTodo('deb',this.id,this.todo).subscribe(
        data=> console.log(data)
    )
  }

}
