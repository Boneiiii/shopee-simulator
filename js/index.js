// Khi trang được tải, kiểm tra trạng thái từ localStorage
window.onload = function() {
    const buyNowButton = document.getElementById("buyNowButton");
    const stockStatus = document.getElementById("stockStatus");

    // Lấy trạng thái từ localStorage
    const isInStock = localStorage.getItem("stockStatus") === "true";

    if (!isInStock) {
        // Nếu sản phẩm hết hàng, vô hiệu hóa nút "Mua ngay" và thay đổi trạng thái
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
