import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from '../../services/todo.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.page.html',
  styleUrls: ['./todo-details.page.scss'],
})
export class TodoDetailsPage implements OnInit {

  todo: Todo = {
    task: 'Task Name',
    createdAt: new Date().getTime(),
    priority: 1
  }

  todoId = null;

  constructor(private todoService: TodoService, private route: ActivatedRoute, 
    private loadingController: LoadingController, private nav: NavController) { }

  ngOnInit() {
    this.todoId = this.route.snapshot.params['id'];
    if (this.todoId) {
      this.loadTodo();
    }
  }

  async loadTodo(){
    const loading = await this.loadingController.create({
      message: 'Loading Todo..'
    });
    await loading.present();

    this.todoService.getTodo(this.todoId).subscribe(res => {
      loading.dismiss();
      this.todo = res;
    });
  }
  
  async saveTodo(){
    const loading = await this.loadingController.create({
      message: 'Saving Todo'
    });
    if (this.todoId){
      this.todoService.updateTodo(this.todo, this.todoId).then(() => {
        loading.dismiss();
        //this.nav.goBack('./home');
      });
    } else {
      this.todoService.addTodo(this.todo).then(() => {
        loading.dismiss();
        //this.nav.goBack('./home');
      });
    }
  }
}
