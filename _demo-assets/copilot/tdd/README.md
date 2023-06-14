# Demo for TDD with Copilot


Write the follow code in a file called `model.tests.js`:

```javascript
import './model.js'
import { deepEqual } from 'assert';

if ('should return and empty array by defult', () => {
    const model = new Model();
    deepEqual(model.get(), []);
});

if ('should add double the number to the list', () => {
    const model = new Model();
    model.add(8);
    deepEqual(model.get(), [16]);
});
```

Create a new file model.js and write the following code:

```javascript
export default class Model {}
```

copilot will generate the body of the class with the doubling logic.
