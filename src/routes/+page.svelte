<script>
	import Logo from '../components/Logo.svelte'
	import Link from '../components/Link.svelte'
</script>
<svelte:head>
	<title>Evans Stepanov</title>
</svelte:head>
<div class="flex justify-center items-center p-5 flex-col h-screen space-y-10">
	<div class="w-60 text-slate-900 dark:text-slate-100"><Logo /></div>
	<ul class="flex flex-row space-x-6 text-sm uppercase tracking-wide">
		<li>
			<Link href="https://github.com/estepanov">GitHub</Link>
		</li>
		<li>
			<Link href="https://linkedin.com/in/evansstepanov/">LinkedIn</Link>
		</li>
		<li>
			<Link href="https://builtbyevans.com/">Projects</Link>
		</li>
	</ul>
</div>
