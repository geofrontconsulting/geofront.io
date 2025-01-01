<script lang="ts">
	import '../app.postcss';
	import {
		AppShell,
		AppBar,
		getDrawerStore,
		autoModeWatcher,
		LightSwitch,
		Drawer,
		initializeStores
	} from '@skeletonlabs/skeleton';

	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { afterNavigate } from '$app/navigation';
	interface Props {
		data: PageData;
		children?: import('svelte').Snippet;
	}

	let { data, children }: Props = $props();
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	initializeStores();

	const drawerStore = getDrawerStore();

	const drawerOpen = () => {
		drawerStore.open({});
	};

	const drawerClose = () => {
		drawerStore.close();
	};

	$effect(() => {
		autoModeWatcher();
	});

	let title = $state(data.title);
	let content = $state(data.description);
	let site_name = $state(data.title);
	let site_description = $state(data.description);
	let socialImage = $state('/assets/logo-only.png');
	let ogUrl = $state($page.url.toString());

	afterNavigate(() => {
		if (browser) {
			title = $page.data.title;
			content = $page.data.content;
			site_name = $page.data.site_name;
			site_description = $page.data.site_description;
			socialImage = '/assets/logo-only.png';
			ogUrl = $page.url.toString();
		}
	});
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
		integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
		crossorigin="anonymous"
		referrerpolicy="no-referrer"
	/>

	<title>{title}</title>
	<meta property="og:site_name" content={site_name} />
	<meta property="og:type" content="article" />
	<meta name="description" content={site_description} />
	<meta property="og:description" content={site_description} />
	<meta name="twitter:description" content={site_description} />
	<meta property="og:title" content={title} />
	<meta property="og:image" content={socialImage.replace('{content}', content)} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:image" content={socialImage.replace('{content}', content)} />
	<meta property="og:url" content={ogUrl} />
</svelte:head>

<!-- App Shell -->
<AppShell>
	{#snippet header()}
		<!-- App Bar -->
		<AppBar>
			{#snippet lead()}
				<div class="flex items-center">
					<button class="md:hidden btn btn-sm mr-4" aria-label={data.name} onclick={drawerOpen}>
						<span>
							<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
								<rect width="100" height="20" />
								<rect y="30" width="100" height="20" />
								<rect y="60" width="100" height="20" />
							</svg>
						</span>
					</button>
					<a href="/"><strong class="text-xl uppercase">{data.name}</strong></a>
				</div>
			{/snippet}
			{#snippet trail()}
				<div class="hidden md:inline-block">
					{#each data.nav as link}
						<a href={link.href} class="font-semibold">{link.title}</a>
					{/each}
				</div>
				<div class="hidden md:inline-block">
					<LightSwitch />
				</div>
				<div class="hidden md:inline-block">
					{#each data.socialmedias as link}
						<a
							class="btn btn-sm variant-ghost-surface ml-2"
							href={link.href}
							target="_blank"
							rel="noreferrer"
							aria-label={link.icon}
						>
							<span><i class={link.icon}></i></span>
						</a>
					{/each}
				</div>
			{/snippet}
		</AppBar>
	{/snippet}

	<Drawer>
		<h2 class="p-4">{data.title}</h2>
		<hr />

		<nav class="list-nav p-4">
			<ul>
				<li><a href="/" onclick={drawerClose}>Homepage</a></li>
				{#each data.nav as link}
					<li><a href={link.href} onclick={drawerClose}>{link.title}</a></li>
				{/each}

				<li>
					<div class="flex items-center py-2">
						<div class="px-4"><LightSwitch /></div>
						{#each data.socialmedias as link}
							<a href={link.href} target="_blank" onclick={drawerClose} aria-label={link.icon}>
								<span><i class={link.icon}></i></span>
							</a>
						{/each}
					</div>
				</li>
				<li>
					<p class="px-4 py-2">{data.copyright}</p>
				</li>
			</ul>
		</nav>
	</Drawer>

	<!-- Page Route Content -->
	<main class="relative mx-auto max-w-[90ch] break-normal px-4 sm:px-6 lg:px-8 py-4">
		{@render children?.()}
	</main>

	{#snippet footer()}
		<div class="space-y-2 py-4">
			<p class="flex justify-center space-x-2">{data.copyright}</p>
		</div>
	{/snippet}
</AppShell>
