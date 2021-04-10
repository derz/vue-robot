# Vue Robot

Vue wrapper for [Robot](https://github.com/matthewp/robot)

## Example

```vue
<template lang="pug">
button(
	type="button"
	:click="send('toggle')"
)
	| {{ state.name }}
</template>

<script setup>
import { useMachine } from 'vue-robot';
import { createMachine } from 'robot3';

const toggleMachine = createMachine({
	on: state(
		transition('toggle', 'off')
	),
	off: state(
		transition('toggle', 'on')
	)
});

const { currentState, send } = useMachine(toggleMachine);
</script>
```

## API

### `useMachine(machine, initialContext?)`

...

**Arguments**

- `machine` 
- `initialContext`

**Returns** `{ currentState, send, service}`:

- `currentState` 
- `send` 
- `service` 
