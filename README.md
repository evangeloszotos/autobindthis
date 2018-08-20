# autobindthis
> Binds methods to their class instance automagically

## Install

```
$ npm install autobindthis
```


## Usage

```js
const autobind = require('autobindthis');

class Bat {
	constructor(name) {
		this.name = name;
		autobind(this);
	}

	ultrasonic() {
		return `${this.name} comes closer!`;
	}
}

const bat = new Bat('Quasel');

// Reference the method off the class instance
const ultrasonic = bat.ultrasonic;

// 'this' still refers to the class instance
ultrasonic();
//=> 'Quasel comes closer!'

// Without `autobind(this)`, the above would have resulted in
ultrasonic();
//=> Error: Cannot read property 'name' of undefined
```


## API

### autobind(self, [options])

Binds methods in `self` to their class instance.

#### self

Type: `Object`

Object with methods to bind.

#### options

Type: `Object`

##### exclude

Type: `Array<string>`

Given methods are excluded from binding

### autobind.react(self, [options])

Same as `autobind`, uses predefined set of method names to exclude the default [React component methods](https://reactjs.org/docs/react-component.html).

```js
class Robot extends React.Component {
	constructor(props) {
		super(props);
		autobind.react(this);
	}

	// …
}
```

## License

MIT 