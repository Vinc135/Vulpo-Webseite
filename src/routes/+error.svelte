<script>
	import { page } from '$app/stores';

</script>

<div class="error-page">
    <div class="error-container">
        <img src="/favicon.png" alt="Logo" class="logo">

        <h1>{$page.status} {$page.error.message}</h1>
    </div>
</div>


<style>
    .error-page {
        display: grid;
        place-items: center;
        height: 100vh;
    }

    .error-container {
        background: white;
        padding: 3rem;
        border-radius: 1rem;
        box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
        display: grid;
        place-items: center;
    }

    h1 {
        text-align: center;
    }

    .logo {
        width: 10rem;
        height: 10rem;
    }
</style>