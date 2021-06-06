export class Model {
  user: any;
  items: any;

  constructor() {
    this.user = 'Ricardo';
    this.items = [
      new TodoItem('Breakfast', false),
      new TodoItem('Spor', true),
      new TodoItem('Home Work', false),
      new TodoItem('Cinema', false),
    ];
  }
}

export class TodoItem {
  description: any;
  action: any;

  constructor(description: any, action: any) {
    this.description = description;
    this.action = action;
  }
}
