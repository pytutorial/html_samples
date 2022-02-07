<script>
  import { Router, Route, Link } from "svelte-navigator";
</script>

<Router>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary px-0 py-1">
      <div class="navbar-nav">
        <Link class="nav-item nav-link" to="/">Home</Link>
        <Link class="nav-item nav-link" to="/about">About</Link>
      </div>
    </nav>
  </header>
  <main>
    <Route path="/">
      <h1>Home</h1>
    </Route>
    <Route path="/about">
      <h1>About</h1>
    </Route>
  </main>
</Router>
