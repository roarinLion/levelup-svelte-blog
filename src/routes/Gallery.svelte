<script>
	export let data;

	$: ({ all_episodes } = data);
</script>

<div class="container">
	{#each all_episodes as episode}
		<div class="card-container">
			<div class="card">
				<a href={`/show/${episode.number}`}>{episode.title}</a>

				<p class="card-footer-text">Posted on {episode.displayDate}</p>
			</div>
		</div>
	{/each}
</div>

<style>
	.card-footer-text {
		font-size: 0.8rem;
	}

	.card-container {
		padding: 0.5rem;
	}

	.card {
		padding: 1rem;
		margin-bottom: 2rem;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
		width: 300px;
		border-radius: 12px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
</style>
