// Список ВАШИХ ключей (замените на свои!)
const keys = [
    "ss://ключ1@server1.com:12345",
    "ss://ключ2@server1.com:12345",
    "ss://ключ3@server2.com:54321",
    // Добавьте свои ключи (100+ штук)
];

// Получаем номер ключа из URL (например: connect.html?key=3)
const keyNumber = Math.max(1, parseInt(new URLSearchParams(window.location.search).get('key')) || 1);

// Показываем ключ (если номер больше количества — берем первый)
document.getElementById('vpn-key').textContent = keys[keyNumber - 1] || keys[0];

// Кнопка копирования
document.getElementById('copy-key')?.addEventListener('click', function() {
    const key = document.getElementById('vpn-key').textContent;
    navigator.clipboard.writeText(key).then(() => {
        alert('Ссылка скопирована! Вставьте её в Outline.');
    });
});
