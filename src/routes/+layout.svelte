<script>
	import Footer from './Footer.svelte';
	import Gallery from './Gallery.svelte';
	import Header from './Header.svelte';
	import Nav from './Nav.svelte';
	import './style.css';

	export let data;
	$: ({ all_episodes } = data);
</script>

<Header />
<Nav />
<main>
	<div class="main">
		<slot />
	</div>

	<aside>
		<Gallery {data} />
	</aside>
</main>

<Footer />

<style>
	main {
		display: grid;
		grid-template-columns: 1fr 3fr;
	}

	aside {
		padding: 0 1rem;
		order: -1;
	}
</style>
