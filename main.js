const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const drawer = document.getElementById("drawer");
const agreeCheckbox = document.getElementById("agreeCheckbox");
const disagreeCheckbox = document.getElementById("disagreeCheckbox");

const noMessages = [
  "sigurado ka hindi kana galit?",
  "Weeeh hindi na?",
  "sus hindi na daw",
  "oh ohhh mukhang galit pa eh",
  "pfff",
  "kita ko galit kapa e",
  "sure na sure na sure na?"
];

let messageIndex = 0;

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Im sorry";
  gif.src = "https://qotoqot.com/sad-animations/img/150/shy/shy.gif";
  wrapper.style.justifyContent = 'center';
  gif.style.width = '190%';
  gif.style.maxWidth = '400px';
  gif.style.position = 'relative';
  gif.style.transform = 'translateX(-23%)';

  yesBtn.style.display = 'none';
  noBtn.style.display = 'none';
  drawer.classList.add('show');
});

noBtn.addEventListener("click", () => {
  noBtn.innerHTML = noMessages[messageIndex];
  messageIndex = (messageIndex + 1) % noMessages.length;

  const moveDistance = 150;
  const currentX = noBtn.offsetLeft;
  const currentY = noBtn.offsetTop;

  const randomX = Math.floor(Math.random() * moveDistance * 2) - moveDistance;
  const randomY = Math.floor(Math.random() * moveDistance * 2) - moveDistance;

  let newX = currentX + randomX;
  let newY = currentY + randomY;

  if (newX < 0) newX = 0;
  if (newY < 0) newY = 0;
  if (newX + noBtn.offsetWidth > window.innerWidth) newX = window.innerWidth - noBtn.offsetWidth;
  if (newY + noBtn.offsetHeight > window.innerHeight) newY = window.innerHeight - noBtn.offsetHeight;

  noBtn.style.transform = `translate(${newX - currentX}px, ${newY - currentY}px)`;
});

// Fixed createNewDrawer functio
function createNewDrawer(questionMessage) {
  const newDrawer = document.createElement('div');
  newDrawer.classList.add('drawer', 'show');

question.innerHTML = "Please Bati na tayo Uwu";
  newDrawer.innerHTML = `
    <p>SO BATI NA TAYO?:</p>
    <div class="checkbox-group">
      <input type="checkbox" id="newAgreeCheckbox" name="newResponse">
      <label for="newAgreeCheckbox">OO Bati na tayo HeHeHe</label>
      <input type="checkbox" id="newDisagreeCheckbox" name="newResponse">
      <label for="newDisagreeCheckbox">HINDI Padatin Tayo Bati Bahala ka jan</label>
    </div>
  `;

  document.body.appendChild(newDrawer);

  const newAgreeCheckbox = document.getElementById("newAgreeCheckbox");
  const newDisagreeCheckbox = document.getElementById("newDisagreeCheckbox");

  document.querySelectorAll('input[name="newResponse"]').forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        document.querySelectorAll('input[name="newResponse"]').forEach((cb) => {
          if (cb !== checkbox) {
            cb.checked = false;
          }
        });
if (newAgreeCheckbox.checked) {
          gif.src = "https://media.tenor.com/1ULtxe1Wv10AAAAi/smile-peach-cat.gif";
          question.innerHTML = "Yeaheyyyyy Bati na kami rwr";
        } else if (newDisagreeCheckbox.checked) {
          gif.src = "https://qotoqot.com/sad-animations/img/400/silent_tears/silent_tears.gif";
          gif.style.width = '500%';
          gif.style.maxWidth = '300px';
          // Remove gif.style.transform as it's not needed
          question.innerHTML = "Ios Ios sakit mo hindi mo na pala me bati.";
        }

        newDrawer.classList.remove('show');
      }
    });
  });
}

// Update the existing event listener to pass a question message
document.querySelectorAll('input[name="response"]').forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      document.querySelectorAll('input[name="response"]').forEach((cb) => {
        if (cb !== checkbox) {
          cb.checked = false;
        }
      });

      if (agreeCheckbox.checked) {
        gif.src = "https://media1.tenor.com/m/XpFCi7Fr0scAAAAC/peachcat-cute.gif";
        gif.style.width = '400%';
        gif.style.maxWidth = '290px';
        gif.style.transform = 'translateX(0)';
      } else if (disagreeCheckbox.checked) {
        gif.src = "https://qotoqot.com/sad-animations/img/400/holding_back_tears/holding_back_tears.gif";
        gif.style.width = '355%';
        gif.style.maxWidth = '255px';
        gif.style.transform = 'translateX(-0%)';
      }

      drawer.classList.remove('show');
      setTimeout(() => {
        createNewDrawer(question.innerHTML);
      }, 1000);
    }
  });
});