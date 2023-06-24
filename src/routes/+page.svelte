<script>
	// import Logo from '../components/Logo.svelte'
	import Link from '../components/Link.svelte'
	export let data;
	const CustomContent = data.content
</script>

<svelte:head>
	<title>{data.siteTitle}</title>
</svelte:head>

<div class="flex justify-center items-center p-5 flex-col h-screen">
	<div class="text-2xl text-slate-900 dark:text-slate-100">{data.title}</div>
	<div class="flex-row space-x-6 my-2">
		<div class="text-base text-slate-800 dark:text-slate-200 inline-flex">
			Launched&nbsp;
			<span class="font-bold">
				{new Date(data.date).toLocaleString('default', { month: 'long', year: 'numeric' })}
			</span>
		</div>
		<div class="text-base text-slate-800 dark:text-slate-200 inline-flex">
			Price&nbsp;
			<span class="font-bold">
				${data.priceUSD}
			</span>
		</div>
	</div>
	<div class="text-xs text-slate-800 dark:text-slate-200 inline-flex mb-2">
		<Link href={data.sourceCreditUrl}>Source</Link>
	</div>
	<div>
		<CustomContent />
	</div>

</div>
