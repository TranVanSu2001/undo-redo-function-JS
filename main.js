// undo, redo Functions

class UndoStack {
  constructor() {
    this.items = [];
  }

  getContents() {
    let content = [];
    let i = 0;
    for( i = 0; i < undoStack.items.length; i++) {
      content.push(undoStack.items[i])
    }

    console.log(content)
  }

  push(value) {
    this.items.push(value);
  }

  pop() {
    if(this.items.length === 0) {
      console.log('This is empty')
    } else {
      this.items.pop();
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
    this.items.pop();
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
  undoItem = undoStack.items[undoStack.items.length - 1]
  redoStack.push(undoItem)
  undoStack.pop()
}

function redo() { //REDO FUNCTION
  if(redoStack.items.length >= 1) { //chưa undo thì k thể redo
    redoItem = redoStack.items[redoStack.items.length - 1]
    undoStack.push(redoItem)
    redoStack.pop()
  } else {
    console.log('Cannot redo')
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
undo()


//REDO
redo()
redo()
// redo()

undoStack.getContents()
