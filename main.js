// undo, redo Functions

class UndoArray {
  constructor() {
    this.items = [];
    this.lastItem = 0;
  }

  push(value) {
    this.items.push(value);
  }

  undo() {
    this.lastItem = this.items[this.items.length - 1]
    redoArray.push(this.lastItem)
    this.items.pop()
  }

  redo() { 
    if(redoArray.length >= 1) { //chưa undo lần nào thì không redo được
      this.items.push(this.lastItem)
      redoArray.pop()
      this.lastItem = redoArray[redoArray.length - 1];
    }  else {
      console.log('Cannot redo this array')
    }
  }
};

function  undo() {
  this.lastItem = this.items[this.items.length - 1]
  redoArray.push(this.lastItem)
  this.items.pop()
}

var redoArray = [];
let undoArray = new UndoArray();

//add item
undoArray.push('case 1')
undoArray.push('case 2')
undoArray.push('case 3')
undoArray.push('case 4')
undoArray.push('case 5')
undoArray.push('case 6')

// undo array
undoArray.undo();
undoArray.undo();
undoArray.undo();

// redo array
undoArray.redo();
undoArray.redo();

console.log( 'redoArray:',redoArray);

// console.log(redoStack)
console.log(undoArray);
