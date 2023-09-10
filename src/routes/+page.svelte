<script>
	export let data;

	$: ({ latest_episode } = data);
</script>

<div class="container">
	<h2>Welcome to the blog!</h2>

	<div class="latest-card">
		<h3>Latest Episode!</h3>
		<a href={`/show/${latest_episode.number}`}>{latest_episode.title}</a>
	</div>
</div>

<style>
	.container {
		padding: 0 1rem;
	}
	.latest-card {
		padding: 1rem;
	}
	h3 {
		margin: 1rem 0;
	}
</style>
