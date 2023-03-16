import { Observable } from 'rxjs';

const observable$ = new Observable((subscriber) => {
  console.log('Observable executed');
});

console.log('before subscribe');
observable$.subscribe();
console.log('after subscribe');
