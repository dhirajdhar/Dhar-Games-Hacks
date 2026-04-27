// these hacks are very good and made are by the creator dhar games himself me dd hiii :DDDDDDDD

let flying = false;
alert("Successfully activated levitation script");
document.addEventListener('keydown', async e => {
  if (e.key.toLowerCase() === '[' && !keyPressedOnce['[']) {
    keyPressedOnce['['] = true;
    flying = true;
    GRAVITY = 0;
    localPlayer.y = localPlayer.y + 10;
    alert("Flying cheats enabled");
  }
});

document.addEventListener('keyup', e => {
  if (e.key.toLowerCase() === '[') {
    keyPressedOnce['['] = false;
  }
});

document.addEventListener('keydown', async e => {
  if (e.key.toLowerCase() === ']' && !keyPressedOnce[']']) {
    keyPressedOnce[']'] = true;
    if (flying === true) {
      flying = false;
      GRAVITY = 2000;
      alert("Flying cheats disabled");
    }
  }
});

document.addEventListener('keyup', e => {
  if (e.key.toLowerCase() === ']') {
    keyPressedOnce[']'] = false;
  }
});

document.addEventListener('keydown', async e => {
  if (e.key.toLowerCase() === 'q' && !keyPressedOnce['q']) {
    keyPressedOnce['q'] = true;
    if (flying === true) {
      GRAVITY = 30;
    }
  }
});

document.addEventListener('keyup', e => {
  if (e.key.toLowerCase() === 'q') {
    keyPressedOnce['q'] = false;
    if (flying === true) {
      GRAVITY = 0;
    }
  }
});

document.addEventListener('keydown', async e => {
  if (e.key.toLowerCase() === 'e' && !keyPressedOnce['e']) {
    keyPressedOnce['e'] = true;
    if (flying === true) {
      GRAVITY = -400;
    }
  }
});

document.addEventListener('keyup', e => {
  if (e.key.toLowerCase() === 'e') {
    keyPressedOnce['e'] = false;
    if (flying === true) {
      GRAVITY = 0;
    }
  }
});
