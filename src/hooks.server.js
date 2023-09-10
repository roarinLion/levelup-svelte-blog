import { auth } from '$db/fakeAuth';
import { sequence } from '@sveltejs/kit/hooks';

async function logger({ event, resolve }) {
	const response = await resolve(event);
	return response;
}

function authorize({ event, resolve }) {
	const user = auth();
	event.locals.user = user;
	return resolve(event);
}

export const handle = sequence(logger, authorize);

export function handleErrors({ error, event }) {
	console.log('error', error, event);
	return {
		message: 'hook interceptor!!',
		code: error.code
	};
}
