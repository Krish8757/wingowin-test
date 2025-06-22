const wallet = document.getElementById('wallet');
const message = document.getElementById('message');
let balance = 50;

function updateWallet() {
  wallet.textContent = `Balance: ₹${balance}`;
}

function getResult(userColor) {
  const colors = ['Red', 'Green', 'Violet'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  if (userColor === randomColor) {
    balance += 9;
    message.innerHTML = `🎉 You won! Result was <b>${randomColor}</b>`;
  } else {
    balance -= 10;
    message.innerHTML = `😢 You lost! Result was <b>${randomColor}</b>`;
  }

  updateWallet();
}

document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', () => {
    if (balance >= 10) {
      getResult(btn.dataset.color);
    } else {
      message.innerHTML = "⚠️ Not enough balance!";
    }
  });
});

updateWallet();