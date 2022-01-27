<script>
  let name = "Nguyen Van A";
  let gender = "male";
  let birthYear = "2000";
  let married = true;
</script>

<main>
  <div style="display: flex;">
    <table>
      <tbody>
        <tr>
          <th>Name:</th>
          <td
            ><input
              value={name}
              on:change={(e) => (name = e.target.value)}
            /></td
          >
        </tr>
        <tr>
          <th>Gender:&nbsp;</th>
          <td>
            <input
              type="radio"
              checked={gender == "male"}
              name="gender"
              on:click={() => (gender = "male")}
            />
            Male &nbsp;

            <input
              type="radio"
              checked={gender == "female"}
              name="gender"
              on:click={() => (gender = "female")}
            />
            Female &nbsp;

            <input
              type="radio"
              checked={gender == "other"}
              name="gender"
              on:click={() => (gender = "other")}
            /> Other
          </td>
        </tr>
        <tr>
          <th>Born in:</th>
          <td>
            <select
              value={birthYear}
              on:change={(e) => (birthYear = e.target.value)}
            >
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
            <input
              type="checkbox"
              checked={married}
              on:click={() => (married = !married)}
            />
          </td>
        </tr>
      </tbody>
    </table>

    <table style="margin-left: 20px;">
      <tbody>
        <tr>
          <th>Name:</th>
          <td>{name}</td>
        </tr>
        <tr>
          <th>Gender:&nbsp;</th>
          <td>{gender}</td>
        </tr>
        <tr>
          <th>Born in:</th>
          <td>{birthYear}</td>
        </tr>
        <tr>
          <th>Married:</th>
          <td>{married}</td>
        </tr>
      </tbody>
    </table>
  </div>
</main>

<style>
  th {
    text-align: left;
    padding-right: 50px;
  }
</style>
