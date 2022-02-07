<script>
  let name = "Nguyen Van A";
  let gender = "male";
  let birthYear = "2000";
  let married = true;
</script>

<main>
  <table>
    <tbody>
      <tr>
        <th>Name:</th>
        <td><input value={name} /></td>
      </tr>
      <tr>
        <th>Gender:&nbsp;</th>
        <td>
          <input type="radio" checked={gender == "male"} name="gender" /> 
          Male&nbsp;

          <input type="radio" checked={gender == "female"} name="gender" />
          Female &nbsp;
          
          <input type="radio" checked={gender == "other"} name="gender" /> 
          Other
        </td>
      </tr>
      <tr>
        <th>Born in:</th>
        <td>
          <select value={birthYear}>
            <option value="1995">1995</option>
            <option value="1996">1996</option>
            <option value="1997">1997</option>
            <option value="1998">1998</option>
            <option value="1999">1999</option>
            <option value="2000">2000</option>
            <option value="OTHER">Other</option>
          </select>
        </td>
      </tr>
      <tr>
        <th>Married:</th>
        <td>
          <input type="checkbox" checked={married} />
        </td>
      </tr>
    </tbody>
  </table>
</main>

<style>
  th {
    text-align: left;
    padding-right: 50px;
  }
</style>
