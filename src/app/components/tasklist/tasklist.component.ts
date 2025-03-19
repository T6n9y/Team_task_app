import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasklist',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css'],
})
export class TasklistComponent {
  tasks: string[] = [
    'BUY GROCERIES',
    'DO LAUNDRY',
    'COMPLETE ASSIGNMENT',
    'GO FOR A WALK',
  ];
  newTask: string = '';
  filterText: string = '';

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push(this.newTask.toUpperCase());
      this.newTask = '';
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }

  getFilteredTasks() {
    return this.tasks.filter((task) =>
      task.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }
}
