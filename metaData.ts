import 'reflect-metadata';

const plane = { color: 'red' }

Reflect.defineMetadata('note', 'hi', plane);

const note = Reflect.getMetadata("note", plane)
console.log(note)