# Jest: Flush Promises and Timers with Snapshot Tests

I got a warning error which looked like:

```error
Warning: It looks like you're using the wrong act() around your test interactions.
Be sure to use the matching version of act() corresponding to your renderer:

// for react-dom:
import {act} from 'react-dom/test-utils';
// ...
act(() => ...);

// for react-test-renderer:
import TestRenderer from 'react-test-renderer';
const {act} = TestRenderer;
// ...
act(() => ...);
```

that has also been documented [here](https://github.com/testing-library/react-hooks-testing-library/issues/516). I was able to fix this by adding a similar function `flushPromisesAndTimersForSnapshot()` and the error messages went away.

```typescript
import { act } from '@testing-library/react';
import renderer from 'react-test-renderer';

export function flushPromisesAndTimers() {
  return act(
    () =>
      new Promise((resolve) => {
        setTimeout(resolve, 500);
        jest.runAllTimers();
      })
  );
}

export function flushPromisesAndTimersForSnapshot() {
  return renderer.act(
    () =>
      new Promise((resolve) => {
        setTimeout(resolve, 500);
        jest.runAllTimers();
      })
  );
}
```