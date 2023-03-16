import { Observable } from 'rxjs';

const observable$ = new Observable((subscriber) => {
  console.log('Observable executed');
  subscriber.next('Alice');
});

console.log('before subscribe');
observable$.subscribe( value => console.log(value));
console.log('after subscribe');
