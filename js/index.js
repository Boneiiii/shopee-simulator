let startTime; // Biến để lưu thời gian bắt đầu

document.getElementById('buyNowButton').addEventListener('click', function () {
    startTime = Date.now(); // Lưu thời gian khi nhấn nút Mua ngay
    localStorage.setItem('startTime', startTime); // Lưu vào localStorage
    window.location.href = 'cart.html'; // Chuyển đến trang giỏ hàng
});
