import { of, merge } from 'rxjs';
import { mapTo, delay } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/utility/delay
// Example 2: Delay for increasing durations

//emit one item
const example = of(null);
//delay output of each by an extra second
const message = merge(
  example.pipe(mapTo('Hello')),
  example.pipe(
    mapTo('World!'),
    delay(1000)
  ),
  example.pipe(
    mapTo('Goodbye'),
    delay(2000)
  ),
  example.pipe(
    mapTo('World!'),
    delay(3000)
  )
);
//output: 'Hello'...'World!'...'Goodbye'...'World!'
const subscribe = message.subscribe(val => console.log(val));