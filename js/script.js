
function simulatePageLoadDelay() {
    const pageContainer = document.getElementById('pageContainer');
    
    if (pageContainer) {
        pageContainer.style.display = 'none'; // Ẩn nội dung trang ban đầu
        setTimeout(function() {
            pageContainer.style.display = 'block'; // Hiển thị nội dung trang sau khi trễ
        }, 500); // Độ trễ 2 giây
    }
}
window.onload = function() {
    simulatePageLoadDelay();
};

let startTime; // Biến để lưu thời gian bắt đầu

document.getElementById('buyNowButton').addEventListener('click', function () {
    startTime = Date.now(); // Lưu thời gian khi nhấn nút Mua ngay
    localStorage.setItem('startTime', startTime); // Lưu vào localStorage
    window.location.href = 'cart.html'; // Chuyển đến trang giỏ hàng
});