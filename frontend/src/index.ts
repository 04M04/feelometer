console.log("Get to see what I feel right now.");



// const rate = document.querySelector('.rating');
// if (rate) {
//     const childs = rate.children;
//     let currentShowing = childs[0].children[0];
//     console.log(currentShowing);
//     for (let i = 0; i < childs.length; i++) {
//         childs[i].onclick = () => {
//             console.log(i);
//             currentShowing.classList.add('hidden');
//             const emote = childs[i].querySelector('p');
//             emote?.classList.remove('hidden');
//             currentShowing = emote;
//             for (let j = 0; j <= i; j++) {
//                 childs[j].classList.add("bg-rose-400"); // this class should be added to whitelist while in production mode
//             }
//             for (let k = i + 1; k < childs.length; k++) {
//                 childs[k].classList.remove("bg-rose-400"); // this class should be added to whitelist while in production mode
//             }
//         }
//     }
// }

const feelingSymbolElement = document.querySelector('.feeling_symbol');
const feelingRateElement = document.querySelector('.rating');
const feelingRateElements = feelingRateElement?.children;


async function setFeelingRate(feelingCount: number) {
    if (feelingRateElements) {
        feelingCount ? feelingCount : 0;
        if (feelingCount > 13) feelingCount = 13;
        if (feelingCount < 0) feelingCount = 0;
        
        for (let j = 0; j <= 13; j++) {
            if(!feelingRateElements[j].children[0].classList.contains('hidden')){
                feelingRateElements[j].children[0].classList.add('hidden');
            }
        }

        const emote = feelingRateElements[feelingCount].querySelector('p');
        emote?.classList.remove('hidden');

        for (let j = 0; j <= feelingCount; j++) {
            feelingRateElements[j].classList.add("bg-blue-500"); // this class should be added to whitelist while in production mode
        }
        for (let k = feelingCount + 1; k < feelingRateElements.length; k++) {
            feelingRateElements[k].classList.remove("bg-blue-500"); // this class should be added to whitelist while in production mode
        }
    }
}

interface feelingData {
    feeling: string
    feeling_count: number
}

let feeling: feelingData = { feeling: '😋', feeling_count: 4 };
console.log(feeling);

async function getFeelingData(): Promise<feelingData> {
    // For now, consider the data is stored on a static `feelingData.json` file
    const res = await fetch('http://127.0.0.1:8000/feeling');

    // The response has an `any` type, so we need to cast
    // it to the `User` type, and return it from the promise
    if (!res) {
        console.log(Error)
        return { feeling: '😋', feeling_count: 4 };
    } else {
        const res_1: feelingData = await res.json() as feelingData;
        console.log(res_1);
        setFeelingRate(res_1.feeling_count as number);
        if(feelingSymbolElement){feelingSymbolElement.innerHTML = res_1.feeling as string;}
        return res_1;
    }

}

var intervalId = window.setInterval(function(){
    getFeelingData().then((res) => {feeling = res; console.log(feeling);});
  }, 500);

// setFeelingRate(3);


