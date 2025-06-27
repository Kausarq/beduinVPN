// ЮMoney (замените на свою ссылку)
function pay() {
    window.location.href = "https://yoomoney.ru/quickpay/button-widget?targets=VPN&default-sum=150&button-text=11&any-card-payment-type=on&successURL=https://ВАШНИК.github.io/beduin-vpn/connect.html";
}

// Проверка оплаты (заглушка)
function connect() {
    alert("Подключение... (здесь будет ключ)");
}

// Если в URL есть параметр ?paid=1 (после оплаты)
if (new URLSearchParams(window.location.search).has('paid')) {
    document.getElementById('balance').textContent = "150₽";
    document.getElementById('days').textContent = "30 дней";
    document.querySelector('button[disabled]').disabled = false;
}

