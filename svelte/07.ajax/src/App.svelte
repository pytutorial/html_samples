<script>
  let data = [];
  let url = "http://api.openweathermap.org/data/2.5/forecast?id=1581129&units=metric&appid=d6477696b63c2e661af64eead58c11d9&cnt=8";
  fetch(url)
    .then(resp => resp.json())
    .then(result => {
      console.log('result=', result);
      data = result.list;
    });
</script>

<main>
  <table border="1" style="width: 50%;">
    <thead>
      <tr>
        <th style="width:25%">Thời gian</th>
        <th style="width:25%">Nhiệt độ °C</th>
        <th style="width:25%">Độ ẩm (%)</th>
        <th style="width:25%">Áp suất khí quyển (atm)</th>
      </tr>
    </thead>
    <tbody>
      {#each data as item}
        <tr>
          <td style="text-align:center">{ item.dt_txt }</td>
          <td style="text-align:center">{ item.main.temp }</td>
          <td style="text-align:center">{ item.main.humidity }</td>
          <td style="text-align:center">{ item.main.pressure/1000 }</td>
        </tr>
      {/each}
    </tbody>
  </table>
</main>
