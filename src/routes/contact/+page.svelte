<script>
	import { enhance } from '$app/forms';
	export let form;
</script>

{#if form?.error_message}
	<p>
		{form.error_message}
	</p>
{/if}

{#if form?.message}
	<p>
		{form.message}
	</p>
{:else}
	<form use:enhance method="POST">
		<label>
			Name: <input type="text" required id="name" name="name" />
		</label>
		<label>
			Email: <input type="email" required id="email" name="email" />
		</label>
		<label>
			Message: <input required id="message" name="message" />
		</label>
		<button type="submit">Submit</button>
	</form>
{/if}

<style>
	label {
		display: block;
		margin-bottom: 1em;
	}

	form {
		display: flex;
		flex-direction: column;
		width: 50%;
		margin: 0 auto;
	}
</style>
