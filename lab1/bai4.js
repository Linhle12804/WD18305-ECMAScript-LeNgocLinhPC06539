fetch('https://api.datausa.io/api/data?drilldowns=Nation&measures=Population')
.then(response => response.json())
.then(data => {
  const populationList = document.getElementById('population-list');
  // Duyệt dữ liệu trả về
  data.data.forEach(country => {
    // Tạo một item trong danh sách
    const listItem = document.createElement('li');
    listItem.className = "list-group-item";
    // Sử dụng Template literals để hiển thị thông tin quốc gia và dân số
    listItem.innerHTML = `${country.Nation} - Population: ${country.Population}`;
    // Thêm item vào danh sách
    populationList.appendChild(listItem);
  });
})
.catch(error => {
  console.error('Error:', error);
});