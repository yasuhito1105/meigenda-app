// const RANDOM_SENTENCE_URL_API ="https://meigen.doodlenote.net/api/json.php?c=1";
// const typeDisplay =document.getElementById("typeDisplay");
// const typeInput = document.getElementById("type-Input");
// const timer = document.getElementById("timer");

// 下のコードでヘッダーの処理をなくす この処理はnode.jsを入れないと使えないらしい//
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
// function GetRandomSentence(){
//   return fetch(RANDOM_SENTENCE_URL_API)
//     .then((response) => response.json())
//     .then((data) => console.log(data[0].meigen));
// }
// GetRandomSentence();

// async function RenderNextSentence(){
//   const sentence = await GetRandomSentence();
//   // console.log(sentence)
//   typeDisplay.innerText = sentence;


//   typeInput.innerText = "";

// }

// let startTime;
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
// renderNextSentence();

// ここからAPIを使わないコードを書く
const question = [
  'JavaScript',
  'document'
];

const typeDisplay = document.getElementById('typeDisplay');
const typeInput = document.getElementById('type-Input');
const textarea = document.getElementById('textarea');
const game = document.getElementById('game');
const message = document.getElementById('message');
const replayBtn = document.getElementById('replayBtn');


let typeInputTextWord = typeInput.textContent.split('');
let typeDisplayTextWord = [];
let currentKer;
let currentText;


// 新しい問題文をセットする記述
const setQuestion = () =>{

  currentKer = Math.floor( Math.random() * questions.length );
  currentText = questions[ currentKer ];

  // 問題が重複しない処理
  questions.splice(currentKer,1);
  console.log(questions);

  typeDisplay.textContent = '';
  typeInput.textContent = currentText;

  // これまでに入力されたフォームのリセット
  typeInputTextWord.value = '';


  typeDisplayTextWords = [];
  typeInputTextWords = currentText.split('');
};
setQuestion();

document.addEventListener('type-Input',(e) => {
  if (typeInputTextWords[0] === e.date){

    typeDisplayTextWord.push( typeInputTextWords[0] );
    typeInputTextWords.shift();

    console.log('入力済み:' + typeDisplayTextWords);
    console.log('未入力:' + typeInputTextWords)

    typeDisplay.textContent = typeDisplayTextWords.join('');
    typeInput.textContent = typeInputTextWords.join('');

    // 全ての文字が正しく入力されたら新しい問題文をセットする関数
    if(typeInputTextWords.length <= 0){
        if(questions.length <= 0){
          game.classList.add('hidden'); //ゲーム画面を非表示
          message.classList.remove('hidden'); //終了メッセージの表示
        }else{
          setQuestion();//新しい問題文をセット
        }
        // console.log('クリア');
        // setQuestion();
      }

  }
});