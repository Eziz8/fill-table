const table = document.getElementById("table");
let data = fetch('https://jsonplaceholder.typicode.com/todos')
  .then((response) => response.json())
  .then((json) => 
    json.map(item => {
      table.innerHTML += `
        <tr>
          <td>${item.id}</td>
          <td>${item.title}</td>
          <td style=background-color:${item.completed? "green"  : "red"}>${item.completed}</td>
        </tr>
      `;
    }))
