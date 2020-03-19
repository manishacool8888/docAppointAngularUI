import { Component, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {
  constructor(public id : number,
              public description : string,
              public done : boolean,
              public targetDate : Date){
  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})

export class ListTodosComponent implements OnInit {

  message : string
  todoItems: Todo[]
  // = [
  //   new Todo(1,'Learn to dance',false,new Date()),
  //   new Todo(2,'Go skuba Diving',false,new Date()),
  //   new Todo(3,'Visit Laddakh',false,new Date())
  //   // {id:1,description:'Learn to dance'},
  //   // {id:2,description:'Go skuba Diving'},
  //   // {id:3,description:'Visit Laddakh'},
  // ]

  constructor(
    private todoService :TodoDataService,
    private router : Router
  ) { }

  ngOnInit() {
     this.refreshTodos();
  }

  refreshTodos(){
    this.todoService.retrieveAllTodos('prnjn').subscribe(
      response => {
        this.todoItems = response
      }
    )
  }

  deleteTodo(id){
    console.log(`delete todo ${id}`)
    this.todoService.deleteTodo('prnjn',id).subscribe(
      response => {
        console.log(response)
        this.message= `Delete of Todo ${id} Successful !`

        this.refreshTodos();
      } 
    )
  }

  updateTodo(id){
    console.log(`update ${id}`)
    this.router.navigate(['todos',id])
  }

}
