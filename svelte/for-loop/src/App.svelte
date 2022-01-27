<script>
  let productList = [
    {name: "IPhone X", price: 10500000},
    {name: "IPhone 11", price: 11500000},
    {name: "IPhone 12", price: 12500000},
    {name: "IPhone 13", price: 13500000},
  ]
</script>

<main>
  <table border="1" style="width: 40%;">
    <thead>
      <tr>
        <th>#</th>
        <th>Sản phẩm</th>
        <th>Giá</th>
      </tr>
    </thead>
    <tbody>
      {#each productList as product, index}
        <tr>
          <td>{index+1}</td>
          <td>{product.name}</td>
          <td>{product.price} đ</td>
        </tr>
      {/each}
    </tbody>
  </table>
</main>
