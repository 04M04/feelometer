/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

// import confetti from 'canvas-confetti';

// confetti.create(document.getElementById('canvas') as HTMLCanvasElement, {
//   resize: true,
//   useWorker: true,
// })({ particleCount: 200, spread: 200 });

const rate = document.querySelector('.rating');
if (rate) {
  const childs = rate.children;
  let currentShowing = childs[0].children[0];
  for (let i = 0; i < childs.length; i++) {
    childs[i].onclick = () => {
      currentShowing.classList.add('hidden');
      const emote = childs[i].querySelector('p');
      emote?.classList.remove('hidden');
      currentShowing = emote;
      for (let j = 0; j <= i; j++) {
        childs[j].classList.add("bg-rose-400"); // this class should be added to whitelist while in production mode
      }
      for (let k = i + 1; k < childs.length; k++) {
        childs[k].classList.remove("bg-rose-400"); // this class should be added to whitelist while in production mode
      }
    }
  }
}