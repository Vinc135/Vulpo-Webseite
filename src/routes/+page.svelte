<script>
    import Typewriter from 'svelte-typewriter';
  import Embed from './Embed.svelte';
</script>


<svelte:head>
	<title>Vulpo - Dein Discord Bot</title>
</svelte:head>

<section class="hero">
	<header>
		<div class="navbar-container">
			<div class="navbar navbar-left">
				<img src="assets/favicon.png" alt="Logo" class="logo">
				<span class="site-name">Vulpo</span>
			</div>
			<div class="navbar navbar-center">
				<a href="#">Link 1</a>
				<a href="#">Link 2</a>
				<a href="#">Link 3</a>
				<a href="#">Link 4</a>
			</div>
			<div class="navbar navbar-right">
				<button class="btn transparent-btn">Button 1</button>
				<button class="btn transparent-btn">Button 2</button>
			</div>
		</div>
	</header>

	<div class="title-container">
		<h1 class="title">Dein Discord Bot für</h1>

		<Typewriter mode="loop" cursor="true" interval=105 unwriteInterval=90 wordInterval=4000>
			<h1 class="function economy">Economy</h1>
			<h1 class="function moderation">Moderation</h1>
			<h1 class="function level">Voice/Chat XP</h1>
			<h1 class="function minigames">Minigames</h1>
			<h1 class="function stats">Statistiken</h1>
			<h1 class="function fun">Fun Befehle</h1>
			<h1 class="function ticketsystem">TicketSystem</h1>
		</Typewriter>

		<p class="sub-title">Vulpo ist ein moderner Discord Bot, der dir eine einfache und effiziente Lösung zur Verwaltung deines Discord Servers bietet.</p>

		<a href="/#"><button class="button">Mehr Erfahren</button></a>
		<a href="/invite"><button class="button">Jetzt Einladen</button></a>
	</div>

	<div class="showcase">
		<Embed />
</section>

<section class="wave-transition">
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
		<path
		  fill="#ff7300"
		  fill-opacity="1"
		  d="M0,288L24,261.3C48,235,96,181,144,154.7C192,128,240,128,288,149.3C336,171,384,213,432,202.7C480,192,528,128,576,133.3C624,139,672,213,720,213.3C768,213,816,139,864,101.3C912,64,960,64,1008,106.7C1056,149,1104,235,1152,240C1200,245,1248,171,1296,144C1344,117,1392,139,1416,149.3L1440,160L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
		></path>
	</svg>
</section>

<section class="stats">

</section>

<section class="large-description-section">
	<h2>Große Überschrift</h2>
	<p>Große Beschreibung des Abschnitts. Ausführlicher und informativ.</p>
	<button class="btn orange-btn">Weiterer Button</button>
</section>

<style>
	.logo {
		width: 4rem;
		height: 4rem;
		padding-left: 3rem;
		display: flex;
		justify-content: center;
	}


	header {
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 1000;
		display: flex;
		justify-content: space-between;
		padding: 20px 40px;
		background-color: transparent;
	}

	.navbar-container {
		display: flex;
		justify-content: space-between;
		width: 100%;
		gap: 20px;
		padding-left: 20px;
		padding-right: 100px;
	}

	.navbar {
		display: flex;
		align-items: center;
		padding: 10px 20px;
		background-color: #252525;
		border: 2px solid #ff7300;
		border-radius: 10px;
		white-space: nowrap;
	}

	.navbar-left, .navbar-center, .navbar-right {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.navbar-center a {
		color: #fafafaa3;
		text-decoration: none;
		padding: 10px 20px;
		border-radius: 5px;
		transition: background-color 0.3s ease;
	}

	.navbar-center a:hover {
		color: #fafafaf3
	}

	.navbar-right {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-left: 20px; /* Optional: Abstand zwischen rechter und mittlerer Navbar */
	}

	.btn.transparent-btn {
		background-color: transparent;
		color: #fafafa;
		border: 2px solid #fafafa;
		padding: 10px 20px;
		border-radius: 5px;
		transition: background-color 0.3s ease, color 0.3s ease;
	}

	.btn.transparent-btn:hover {
		background-color: #fafafa;
		color: #171717;
	}

	.wave-transition {
		position: relative;
		background-color: #ff7300; /* Hintergrundfarbe passend zur Wave */
		padding: 0; /* Kein Padding nötig */
	}

	.wave-transition svg {
		width: 100%;
		height: auto;
		display: block; /* SVG soll Block-Element sein */
		position: absolute;
		bottom: 0;
		left: 0;
		transform: rotate(180deg);
		bottom: -20px;
	}

	a:hover {
		color: gray;
	}

	.hero {
		width: 100vw;
		height: 90vh;
		display: grid;
		justify-content: center;
		overflow-x: hidden;
	}

	.title-container {
		position: absolute;
		top: 10%;
		z-index: 1;
		margin: 5rem;
		padding: 2rem;
		width: 35vw;
		background-color: #191f25;
		box-shadow: #3c3d3d;
		border-radius: 1rem;
	}

	.title {
		font-size: 2.5rem;
		font-weight: 900;
		color: white;
		text-align: left;
		margin-bottom: 0;
	}

	.function {
		font-size: 2.75rem;
		font-weight: 1000;
		color: rgb(255, 177, 60);
		text-align: left;
		margin-top: 0rem;
		--cursor-background: black;
		--cursor-width: 0rem
	}

	.economy {
		background: linear-gradient(90deg, rgba(252,255,34,1) 0%, rgba(255,246,0,1) 50%, rgba(239,255,0,1) 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-background: transparent;
		background-clip: text;
	}

	.moderation {
		background: linear-gradient(90deg, rgba(200,255,141,1) 0%, rgba(126,255,138,1) 30%, rgba(181,255,200,1) 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.level {
		background: linear-gradient(90deg, rgba(255,166,44,1) 0%, rgba(255,202,47,1) 30%, rgba(255,157,41,1) 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.minigames {
		background: linear-gradient(90deg, rgba(47,231,255,1) 0%, rgba(0,157,255,1) 50%, rgba(81,60,255,1) 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.stats {
		background: linear-gradient(90deg, rgba(153,255,44,1) 0%, rgba(47,255,66,1) 30%, rgba(0,255,254,1) 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.fun {
		background: linear-gradient(90deg, rgba(47,231,255,1) 0%, rgba(0,157,255,1) 50%, rgba(81,60,255,1) 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.ticketsystem {
		background: linear-gradient(90deg, rgba(255,47,47,1) 0%, rgba(255,0,0,1) 50%, rgba(255,0,0,1) 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.sub-title {
		font-size: 1.2rem;
		font-weight: 500;
		padding-top: 2rem;
		color: #babcbe;
		text-align: left;
	}

	.button {
		background-color: var(--color-theme-1);
		padding: 0.5rem 1rem;
		border-radius: 0.5rem;
		border-color: transparent;
		margin-top: 1rem;
		background: rgba(47,231,255,1);
	}

	.button:hover {
		background-color: rgb(0, 162, 184);
		color: white;
		cursor: pointer;
	}

	.showcase {
		position: absolute;
		top: 17rem;
		z-index: 1;
		right: 2rem;
		height: 25vh;
		border-radius: 1rem;
		box-shadow: #3c3d3d;
	}

	.logo {
		width: 40px;
		height: auto;
		padding-right: 20px;
	}

	.site-name {
		font-size: 20px;
		font-weight: bold;
		color: #fafafa
	}

	.navbar-right {
		justify-content: flex-end;
	}
	.btn.orange-btn {
		background-color: #ff7300;
		color: #171717;
		padding: 15px 30px;
		border-radius: 10px;
		font-size: 1.2rem;
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.large-description-section {
		background-color: #0f0f0f;
		padding: 60px 20px;
		text-align: center;
	}

	.large-description-section h2 {
		font-size: 2.5rem;
		margin-bottom: 20px;
	}

	.large-description-section p {
		font-size: 1.25rem;
		color: #d4d4d4;
		margin-bottom: 40px;
	}
</style>