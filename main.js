// undo, redo Functions

class UndoStack {
  constructor() {
    this.items = [];
  }

  getContents() {
    let content = [];
    for(let i in undoStack.items) {
      content.push(undoStack.items[i])
    }

    return content;
  }

  push(value) {
    this.items.push(value);
  }

  pop() {
    if(this.items.length === 0) {
      console.log('This is empty')
    } else {
      return this.items.pop();
    }
  } 

  peek() {
    return this.items[this.items.length - 1]
  }

  isEmpty() {
    return this.items.length === 0;
  }

  length() {
    return this.items.length;
  }
};

class RedoStack {
  constructor() {
    this.items = [];
  }

  push(value) {
    this.items.push(value);
  }

  pop() {
    if(this.items.length === 0) {
      console.log('This is empty')
    } else {
      return this.items.pop();
    }
  } 

  peek() {
    return this.items[this.items.length - 1]
  }

  isEmpty() {
    return this.items.length === 0;
  }

  length() {
    return this.items.length;
  }
};

function undo() { //UNDO FUNCTION
  if(undoStack.length() >= 1) {
    undoItem = undoStack.pop()
    redoStack.push(undoItem)
  } else {
    alert('Cannot undo')
  }
}

function redo() { //REDO FUNCTION
  if(redoStack.length() >= 1) { //chưa undo thì k thể redo
    redoItem = redoStack.pop()
    undoStack.push(redoItem)
  } else {
    alert('Cannot redo')
  }
}

let undoStack = new UndoStack();
let redoStack = new RedoStack();

//add item
undoStack.push('case 1')
undoStack.push('case 2')
undoStack.push('case 3')
undoStack.push('case 4')
undoStack.push('case 5')
undoStack.push('case 6')

//UNDO 
undo()
undo()
// undo()
// undo()

//REDO
// redo()
// redo()
// redo()

console.log(undoStack.getContents())

