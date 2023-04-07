<script lang="ts">
	import type { NavbarItem } from '$lib/utils.server';
	import { HandMetalIcon, GithubIcon } from 'lucide-svelte';
	export let dark_mode: boolean;
	export let navbar_links: NavbarItem[];
</script>

<nav class="navbar {dark_mode ? 'is-dark' : 'is-light'}">
	<div class="navbar-brand" role="navigation" aria-label="main navigation">
		<a href="/" class="navbar-item">
			<HandMetalIcon />
		</a>
	</div>
	<div class="navbar-menu">
		{#each navbar_links as item}
			<div class="navbar-item is-capitalized {item.active ? 'has-text-weight-bold' : ''}">
				<a href={item.main_link} target="_blank" class={dark_mode ? 'has-text-primary-dark' : ''}>
					{item.name}
					{(item.latest_version ||= '')}
				</a>
				{#if item.source}
					<a
						href={item.source}
						class="mx-1 {dark_mode ? 'has-text-primary-dark' : ''}"
						target="_blank"
					>
						<GithubIcon size="14" />
					</a>
				{/if}
			</div>
		{/each}
	</div>
</nav>
