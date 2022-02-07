<script>
  let loggedIn = false;
</script>

<main>
  {#if !loggedIn}
    <button on:click={() => (loggedIn = true)}>Log in</button>
  {:else}
    <button on:click={() => (loggedIn = false)}>Log out</button>
  {/if}
</main>
