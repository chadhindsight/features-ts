import 'reflect-metadata';

const plane = { color: 'red' }

Reflect.defineMetadata('note', 'hi', plane);
Reflect.defineMetadata('height', 11, plane);

const note = Reflect.getMetadata("note", plane, 'color')

