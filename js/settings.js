// Khi trang được tải, kiểm tra trạng thái đã lưu trong localStorage
window.onload = function() {
    const stockCheckbox = document.getElementById("stockStatus");

    // Kiểm tra giá trị trong localStorage
    const savedStockStatus = localStorage.getItem("stockStatus");

    // Nếu giá trị đã được lưu là true, đánh dấu checkbox
    if (savedStockStatus === "true") {
        stockCheckbox.checked = true;
    } else {
        stockCheckbox.checked = false;
    }

    // Lưu trạng thái khi nhấn nút "Lưu cài đặt"
    document.getElementById("saveButton").onclick = function() {
        const stockStatus = stockCheckbox.checked;

        // Lưu trạng thái vào localStorage
        localStorage.setItem("stockStatus", stockStatus);
        localStorage.setItem('startTime', Date.now()); // Lưu vào localStorage
        alert("Trạng thái sản phẩm đã được lưu!");
    };
};