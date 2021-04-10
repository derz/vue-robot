<template lang="pug">
button(
	type="button"
	:click="send('toggle')"
)
	| {{ state.name }}
</template>

<script setup>
import { useMachine } from '../src';
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
