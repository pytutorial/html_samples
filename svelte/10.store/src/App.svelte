<script>
  import { counter } from "./stores";
  
  function increase() {
    counter.update(val => val+1);
  }

  function decrease() {
    counter.update(val => val-1);
  }
  let counterValue;

  counter.subscribe(val => counterValue = val);
</script>

<main>
  Counter: {counterValue} 
  <button on:click={increase}>+</button>
  <button on:click={decrease}>-</button>
</main>