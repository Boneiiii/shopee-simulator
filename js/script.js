
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