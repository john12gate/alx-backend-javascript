export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;
  if (trueOrFalse) {
    let task = true; // Use 'let' to declare a block-scoped variable
    let task2 = false; // Use 'let' to declare a block-scoped variable
  }
  return [task, task2];
}
