import { Observable } from 'rxjs';

const observable$ = new Observable((subscriber) => {
  console.log('Observable executed');
  subscriber.next('Alice');
  subscriber.next('Ben')
  setTimeout(()=> {
    subscriber.next('Charlie')
    subscriber.complete();
  }, 2000);

  // teardown logic
  return () => {
    console.log('Teardown');
  }
});

console.log('before subscribe');
observable$.subscribe({
  next: value => console.log(value),
  complete: ()=> console.log('Completed')
});
console.log('after subscribe');
