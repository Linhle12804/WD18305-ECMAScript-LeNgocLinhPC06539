fetch('http://65929f4fbb129707198fe18e.mockapi.io/tinhpv10/students')
  .then(response => response.json())
  .then(data => {
    const studentList = document.getElementById('student-list');

    // Duyệt qua từng sinh viên và tạo phần tử danh sách
    for (let i = 0; i < data.length; i++) {
      const student = data[i];

      // Tạo phần tử danh sách
      const listItem = document.createElement('li');
      listItem.className = 'list-group-item';
      listItem.innerHTML = `
        <span class="fw-bold">${student.name}</span><br>
        <span>Số điện thoại: ${student.phone}</span><br>
        <span>Email: ${student.email}</span>
      `;

      // Thêm phần tử danh sách vào danh sách chính
      studentList.appendChild(listItem);
    }
  })
  .catch(error => console.log(error));