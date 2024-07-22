<script>
	import Footer from './Footer.svelte';
	import '../app.css';
</script>

<div class="app">

	<main>
		<slot />
	</main>

	<Footer/>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100%;
		min-width: 100vw;
		background: #171717;
		background: #171717;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100vw;
		max-width: 100vw;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
