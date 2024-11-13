document.getElementById('paymentButton').addEventListener('click', function () {
    const checkbox = document.getElementById('confirmCheckbox');
    if (checkbox.checked) {
        window.location.href = 'payment.html';
    } else {
        alert('Vui lòng chọn sản phẩm để tiếp tục.');
    }
});
