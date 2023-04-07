<script lang="ts">
	export let data;
	import 'bulma';
	import { onMount } from 'svelte';
	import Navbar from './components/Navbar.svelte';
	let dark_mode: boolean;
	onMount(() => {
		const ls_dark_entry = window.localStorage.getItem('dark-mode');
		ls_dark_entry
			? (dark_mode = ls_dark_entry == 'true')
			: (dark_mode = window.matchMedia('(prefers-color-scheme: dark)').matches);
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
			window.localStorage.setItem('dark-mode', e.matches.toString());
			dark_mode = e.matches;
		});
	});
</script>

<Navbar {dark_mode} navbar_links={data.navbar_links} />

<section class="hero is-info">
	<div class="hero-body">
		<p class="title">oxy vibes co.</p>
	</div>
</section>
