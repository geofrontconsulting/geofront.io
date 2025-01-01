<script lang="ts">
	import type { PageData } from './$types';
	import { modeCurrent } from '@skeletonlabs/skeleton';
	import { Avatar } from '@skeletonlabs/skeleton';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<h2 class="h2">Welcome to {data.name}</h2>

		<img
			class="h-auto md:h-96 mx-auto"
			src="/assets/{$modeCurrent
				? 'Black logo - no background.svg'
				: 'Color logo - no background.svg'}"
			alt="logo"
		/>

		<div class="justify-center space-x-2 space-y-4 text-center">
			<p>
				{data.description}
			</p>
			<a class="btn variant-filled-primary" href="/about">Read more about GeoFront</a>
		</div>

		<div class="justify-center space-x-2 space-y-4">
			<div class="justify-center space-x-2 space-y-4 text-center">
				<h3 class="font-bold">Our services</h3>
				<div class="grid md:grid-cols-4 gap-4">
					{#each data.services as service}
						<a class="flex-col cursor-pointer" href="/services/{service.id}">
							<p><i class="{service.icon} fa-4x"></i></p>
							<p class="text-xl font-semibold p-2">{service.name}</p>
						</a>
					{/each}
				</div>
			</div>
		</div>

		<div class="justify-center">
			<div class="p-4 space-y-10">
				<h3 class="text-center font-bold">Our team</h3>
				<div class="flex-col items-center justify-center">
					<div class="grid md:grid-cols-2 gap-4">
						{#each data.teams as team}
							<div class="flex items-center justify-center">
								<Avatar src={team.photo} width="w-48" rounded="rounded-full" />
								<div class="flex-col">
									<p class="text-xl font-bold p-2">{team.name}</p>
									<p class="p-2 text-left">{team.description}</p>
									<div class="flex">
										<a class="p-2" href={team.github} aria-label="github"
											><i class="fa-brands fa-github fa-xl"></i></a
										>
										<a class="p-2" href={team.linkedin} aria-label="linkedin"
											><i class="fa-brands fa-linkedin fa-xl"></i></a
										>
										<a class="p-2" href={team.twitter} aria-label="twitter"
											><i class="fa-brands fa-x-twitter fa-xl"></i></a
										>
									</div>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	figure {
		@apply flex relative flex-col;
	}
	figure svg,
	.img-bg {
		@apply w-64 h-64 md:w-80 md:h-80;
	}
	.img-bg {
		@apply absolute z-[-1] rounded-full blur-[50px] transition-all;
		animation:
			pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite,
			glow 5s linear infinite;
	}
	@keyframes glow {
		0% {
			@apply bg-primary-400/50;
		}
		33% {
			@apply bg-secondary-400/50;
		}
		66% {
			@apply bg-tertiary-400/50;
		}
		100% {
			@apply bg-primary-400/50;
		}
	}
	@keyframes pulse {
		50% {
			transform: scale(1.5);
		}
	}
</style>
