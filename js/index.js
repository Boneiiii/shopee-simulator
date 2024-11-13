let startTime; // Biến để lưu thời gian bắt đầu

document.getElementById('buyNowButton').addEventListener('click', function () {
    startTime = Date.now(); // Lưu thời gian khi nhấn nút Mua ngay
    localStorage.setItem('startTime', startTime); // Lưu vào localStorage
    window.location.href = 'cart.html'; // Chuyển đến trang giỏ hàng
});

let isInStock = true; // Giả sử sản phẩm còn hàng, thay đổi thành false nếu hết hàng

// Kiểm tra trạng thái và thay đổi nút "Mua ngay"
window.onload = function() {
    const buyNowButton = document.getElementById("buyNowButton");
    const stockStatus = document.getElementById("stockStatus");
    
    if (!isInStock) {
        // Nếu hết hàng, vô hiệu hóa nút "Mua ngay" và thay đổi trạng thái
        buyNowButton.disabled = true;
        stockStatus.innerHTML = "Sản phẩm đã hết hàng";
        stockStatus.style.color = "red";  // Hiển thị màu đỏ nếu hết hàng
    } else {
        // Nếu còn hàng, kích hoạt nút "Mua ngay"
        buyNowButton.disabled = false;
        stockStatus.innerHTML = "Sản phẩm còn hàng";
        stockStatus.style.color = "green";  // Hiển thị màu xanh nếu còn hàng
    }
};
