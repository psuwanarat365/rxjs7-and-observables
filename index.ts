import { Observable } from 'rxjs';

const observable$ = new Observable((subscriber) => {
  console.log('Observable executed');
  subscriber.next('Alice');
  subscriber.next('Ben')
  setTimeout(()=> {
    subscriber.next('Charlie')
    // subscriber.complete();
  }, 2000);
  setTimeout(()=> subscriber.error(new Error('Failure')),4000);

  // teardown logic
  return () => {
    console.log('Teardown');
  }
});

console.log('before subscribe');
observable$.subscribe({
  next: value => console.log(value),
  error: err => console.log(err.message),
  complete: ()=> console.log('Completed')
});
console.log('after subscribe');
