// getting data from api
const fetchData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = response.json()
  data.then(data => {
    let tableBody = document.getElementById('tableBody')
    data.forEach(data => {
      tableBody.innerHTML += `
        <tr>
            <td>${data.id}</td>
            <td>${data.name}</td>
            <td>${data.email}</td>
            <td>${data.address.street}, ${data.address.suite}, ${data.address.city}, ${data.address.zipcode}</td>
        </tr>
        `
    })
  })
}

window.onload = fetchData()

