<script lang="ts">
    import { WEBSITE_URL } from '$lib/constants';
</script>

<div class="flex flex-col p-4 w-full h-full justify-center items-center align-middle">
    <p
        class="tracking-normal text-4xl font-bold mb-4 mt-4 text-nowrap text-center"
    >
        Login to start
    </p>
    <div class="flex gap-2 p-4 py-10">
        <a class="btn flex items-center gap-0 variant-filled-secondary hover:cursor-pointer h-10 rounded"
            href={`${WEBSITE_URL}/login`}
            target="_blank"
        >
            <p>Login</p>
            <i class="fas fa-chevron-right" />
        </a>
        <a
            class="btn flex items-center gap-2 variant-ringed hover:cursor-pointer h-10 rounded"
            href={WEBSITE_URL}
            target="_blank"
        >
            <p>Visit the website</p>
            <i class="fas fa-arrow-up-right-from-square" />
        </a>
    </div>

    <h2 class="text-3xl p-3 font-bold start-0">Extension features</h2>
    <ul class="list-disc text-left text-xl">
        <li>Save links into LinkLinks</li>
        <li>Create new LinkLinks</li>
        <li>Browse existing LinkLinks</li>
        <li>Save all tabs into LinkLinks</li>
    </ul>
</div>
