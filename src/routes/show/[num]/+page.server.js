import { error, redirect } from '@sveltejs/kit';

export async function load({ fetch, params, setHeaders, locals }) {
	console.log('locals', locals.user);

	//if (!locals?.user?.id) throw redirect(307, '/');

	// make requests
	const res = await fetch(`https://syntax.fm/api/shows/${params.num}`);

	// define data
	const data = await res.json();

	// handle errors
	if (data.message) {
		throw error(404, {
			message: data.message
		});
	}

	setHeaders({
		'Cache-Control': 'max-age=3600'
	});

	return {
		episode: data,
		user: locals.user
	};
}
