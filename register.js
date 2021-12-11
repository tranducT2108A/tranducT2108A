function takeData() {
    var Hovaten = document.getElementById('Họ và tên').value;
    var Email = document.getElementById('Email').value;
    var Phone = document.getElementById('Phone').value;
    var Gioitinh = document.getElementById('Giới tính').value;
    var Sothich = document.getElementById('Sở thích').value;
    var Gioithieubanthan = document.getElementById('Giới thiệu bản thân').value;

    if (gender === 'male') {
        gender = 1;
    } else if (gender === 'female') {
        gender = 2;
    } else {
        gender = 3;
    }
    var birthday = document.getElementById('birthday').value;