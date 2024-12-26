const RANDOM_SENTENCE_URL_API ="https://meigen.doodlenote.net/api/json.php?c=1";
const typeDisplay =document.getElementById("typeDisplay");
const typeInput = document.getElementById("type-Input");
const timer = document.getElementById("timer");

//下のコードでヘッダーの処理をなくす//
// fetch('https://meigen.doodlenote.net/api/json.php?c=1', {
//     mode: 'no-cors'
//   })

// //非同期の処理//
// async function getRandomSentence() {
//   try {
//       const response = await fetch(RANDOM_SENTENCE_URL_API);
//       const data = await response.json();
//       return data[1].meigen;
//   } catch (error) {
//       console.error('Error fetching sentence:', error);
//       return "名言の取得に失敗しました"; // エラー時の代替メッセージ
//   }
// }

// async function renderNextSentence() {
//   try {
//       const meigen = await getRandomSentence();
//       typeDisplay.innerText = meigen;
//       typeInput.innerText = "";
//       // ... (タイマーの処理は省略)
//   } catch (error) {
//       console.error('Error rendering sentence:', error);
//         StartTimer();
//   }
//   let startTime;
// let originTime = 30;
// function StartTimer() {
//   timer.innerText = originTime;
//   startTime = new Date();
//   setInterval(() => {
//     timer.innerText = originTime - getTimerTime();
//     if (timer.innerText <= 0)TimeUp();
//   },1000);
// }

// function getTimerTime(){
//   return Math.floor((new Date() - startTime) / 1000);
// }
// function TimeUp(){
//   RenderNextSentence();
// }
// }

//非同期の処理//
function GetRandomSentence(){
  return fetch(RANDOM_SENTENCE_URL_API)
    // .then((response) => response.json())
    .then((data) => console.log(data[0].meigen));
}
GetRandomSentence();

async function RenderNextSentence(){
  const sentence = await GetRandomSentence();
  // console.log(sentence)
  typeDisplay.innerText = sentence;


  typeInput.innerText = "";

}

let startTime;
let originTime = 30;
function StartTimer() {
  timer.innerText = originTime;
  startTime = new Date();
  setInterval(() => {
    timer.innerText = originTime - getTimerTime();
    if (timer.innerText <= 0)TimeUp();
  },1000);
}

function getTimerTime(){
  return Math.floor((new Date() - startTime) / 1000);
}
function TimeUp(){
  RenderNextSentence();
}
// renderNextSentence();
