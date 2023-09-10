import { fail } from '@sveltejs/kit';

export const actions = {
	default: async ({ locals, request }) => {
		if (!locals?.user?.roles?.includes('admin')) {
			return fail(401, {
				error_message: 'You must be an admin to do that, dork.'
			});
		}
		const data = await request.formData();
		const name = data.get('name');
		const email = data.get('email');
		const message = data.get('message');
		console.log(name, email, message);
		return {
			message: `Thanks for your message, ${name}! We'll be in touch.`
		};
	}
};
