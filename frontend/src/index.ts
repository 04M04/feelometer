console.log("Get to see what I feel right now.");



// const rate = document.querySelector('.rating');
// if (rate) {
//   const childs = rate.children;
//   let currentShowing = childs[0].children[0];
//   for (let i = 0; i < childs.length; i++) {
//     childs[i].onclick = () => {
//       currentShowing.classList.add('hidden');
//       const emote = childs[i].querySelector('p');
//       emote?.classList.remove('hidden');
//       currentShowing = emote;
//       for (let j = 0; j <= i; j++) {
//         childs[j].classList.add("bg-rose-400"); // this class should be added to whitelist while in production mode
//       }
//       for (let k = i + 1; k < childs.length; k++) {
//         childs[k].classList.remove("bg-rose-400"); // this class should be added to whitelist while in production mode
//       }
//     }
//   }
// }

const feelingSymbolElement = document.querySelector('.feeling_symbol');
const feelingRateElement = document.querySelector('.rating');
const feelingRateElements = feelingRateElement?.children;

async function setFeelingRate() {

}
interface feelingData {
    feeling: string
    feeling_count: number
}

let feeling: feelingData = {feeling: '😋', feeling_count: 4};
console.log(feeling);

async function getFeelingData(): Promise<feelingData> {
    // For now, consider the data is stored on a static `feelingData.json` file
    const res = await fetch('http://127.0.0.1:8000/feeling');
    
    // The response has an `any` type, so we need to cast
    // it to the `User` type, and return it from the promise
    if (!res) {
        console.log(Error)
        return{feeling: '😋', feeling_count: 4};
      } else {
        const res_1: feelingData = res.json() as unknown as feelingData;
        console.log(res_1);
        return res_1;
      }
    
}

feeling = await getFeelingData();
export { };

