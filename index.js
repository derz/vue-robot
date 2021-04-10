import { shallowRef, Ref } from 'vue';
import { interpret } from 'robot3';

export function useMachine(machine, initialContext) {
	const state = shallowRef('');

	const service = interpret(machine, service => {
		state.value = service.machine.state;
		state.value = service.machine.state;
	}, initialContext);

	const initialState = machine.state;

	state.value = initialState;

	return {
		currentState,
		send: service.send,
		service
	};
}
