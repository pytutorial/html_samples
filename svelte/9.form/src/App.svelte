<script>
  let data = {};

  function handleChange(e) {
    data[e.target.name] = e.target.value;
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Name:" + data.name + ", address:" + data.address);
  }
</script>

<main>
  <form on:submit={handleSubmit}>
    <input       
      placeholder="Name"     
      name='name'
      on:change={handleChange}
    />
    <input   
      placeholder="Address"           
      name='address'
      on:change={handleChange}
    />
    <input type="submit"/>
  </form>
</main>