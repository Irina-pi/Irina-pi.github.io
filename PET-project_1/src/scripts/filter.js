const countFun = function (plusId, minusId, numId, max, min) {
  const plus = document.getElementById(plusId);
  const minus = document.getElementById(minusId);
  const num = document.getElementById(numId);

  plus.onclick = function () {
    const countPlus = num.innerHTML;
    if (+countPlus <= max - 1) {
      num.innerHTML++;
    }
  };

  minus.onclick = function () {
    const countMinus = num.innerHTML;
    if (+countMinus >= min + 1) {
      num.innerHTML--;
    }
  };
};

countFun('plusAdults', 'minusAdults', 'numberAdults', 30, 1);
countFun('plusChildren', 'minusChildren', 'numberChildren', 10, 0);
countFun('plusRooms', 'minusRooms', 'numberRooms', 30, 1);

const toggleClassFun = function (plusId, minusId, numId, max, min) {
  const plus = document.getElementById(plusId);
  const minus = document.getElementById(minusId);
  const num = document.getElementById(numId);

  minus.addEventListener('click', () => {
    if (
      num.textContent < max &&
      plus.classList.contains('block-one__grey-square')
    ) {
      plus.classList.remove('block-one__grey-square');
    }

    if (num.textContent === min) {
      minus.classList.add('block-one__grey-square');
    }
  });

  plus.addEventListener('click', () => {
    if (
      num.textContent > min &&
      minus.classList.contains('block-one__grey-square')
    ) {
      minus.classList.remove('block-one__grey-square');
      minus.classList.add('block-one__blue-square');
    }

    if (num.textContent === max) {
      plus.classList.add('block-one__grey-square');
    }
  });
};

toggleClassFun('plusAdults', 'minusAdults', 'numberAdults', '30', '1');
toggleClassFun('plusChildren', 'minusChildren', 'numberChildren', '10', '0');
toggleClassFun('plusRooms', 'minusRooms', 'numberRooms', '30', '1');

const yearsChildrenEl = document.getElementById('yearsChildren');
const plusChildrenEl = document.getElementById('plusChildren');
const minusChildrenEl = document.getElementById('minusChildren');
const numberChildrenEl = document.getElementById('numberChildren');

const selectYearChildEl = document.getElementById('selectYearChild1');

const copyElFun = function (el) {
  return el.cloneNode(true);
};

plusChildrenEl.addEventListener('click', () => {
  if (numberChildrenEl.textContent > '0') {
    yearsChildrenEl.classList.remove('none-child');
  }

  for (let i = 2; i < 10; i++) {
    if (numberChildrenEl.textContent === `${i}`) {
      yearsChildrenEl.appendChild(copyElFun(selectYearChildEl));
    }
  }
});

minusChildrenEl.addEventListener('click', () => {
  if (numberChildrenEl.textContent === '0') {
    yearsChildrenEl.classList.add('none-child');
  }

  for (let i = 10; i > 1; i--) {
    if (numberChildrenEl.textContent === `${i}`) {
      yearsChildrenEl.removeChild(copyElFun(selectYearChildEl));
    }
  }
});

const blockOneDesktopEl = document.getElementById('blockFilterDesktop');
const blockOneIptRoomDeskEl = document.getElementsByName('blockOneIptRoomDesk');

blockOneIptRoomDeskEl[0].addEventListener('click', () => {
  blockOneDesktopEl.classList.toggle('noneDisplay');
});
