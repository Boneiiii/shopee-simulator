document.getElementById('paymentButton').addEventListener('click', function () {
    const startTime = localStorage.getItem('startTime'); // Lấy thời gian bắt đầu từ localStorage
    const timeInfoDiv = document.getElementById('timeInfo'); // Phần tử để hiển thị thời gian
    const paymentButton = document.getElementById('paymentButton'); // Nút thanh toán
    const backToProductButton = document.getElementById('backToProductButton'); // Nút quay lại sản phẩm

    if (startTime) {
        const endTime = Date.now(); // Lấy thời gian khi nhấn thanh toán
        const timeSpent = endTime - startTime; // Tính thời gian đã trôi qua (millisecond)

        // Chuyển đổi thời gian thành phút, giây và mili giây
        const seconds = Math.floor((timeSpent / 1000) % 60);
        const minutes = Math.floor((timeSpent / 1000 / 60) % 60);
        const milliseconds = timeSpent % 1000; // Mili giây
        localStorage.removeItem ('startTime'); // Lưu vào localStorage
        // Hiển thị thời gian vào phần tử div
        timeInfoDiv.innerHTML = `Thời gian từ khi bạn nhấn "Mua ngay" đến khi thanh toán là: ${minutes} phút ${seconds} giây ${milliseconds} mili giây.`;
    } else {
        timeInfoDiv.innerHTML = 'Không tìm thấy thời gian bắt đầu.';
    }

    // Ẩn nút thanh toán và hiển thị nút quay lại sản phẩm
    paymentButton.style.display = 'none';
    backToProductButton.style.display = 'inline-block'; // Hiển thị nút quay lại sản phẩm
});
