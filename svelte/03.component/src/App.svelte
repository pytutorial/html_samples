<script>
  import Footer from "./components/Footer.svelte";
  import Header from "./components/Header.svelte";
  import Main from "./components/Main.svelte";
  let body =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
</script>

<main>
  <Header title="Demo App" />
  <Main {body} />
  <Footer
    privatePolicy="Private Policy"
    termAndConditions="Term and Conditions"
  />
</main>
