// HTML側の画面表示と結びつけるための変数定義
let board = "";
// =で計算したかどうか
let pushEqual = false;



// HTML側の画面表示と結びつけるための関数定義
window.onload = function() {
  board = document.getElementById('board');
}

// クリア表示
function clearNumber(AC){
  board.value = 0;
  pushEqual = false;
}

function number(pushNumber){
// イコールの後に数字を押されると初期表示に戻り、入力した数字が出る。  
  if(pushEqual) board.value = "0";
  pushEqual = false;  
// 0が先頭の時は0を押しても反応しない
  if(board.value == "0" && pushNumber == "0"){
    board.value = "0";
// ０が先頭の時は００を押しても反応しない
  }else if(board.value == "0" && pushNumber == "00"){
    board.value = "0";
// コンマを押したときは先頭が０でも反応する
  }else if(board.value == "0" && pushNumber == "."){
    board.value = "0.";
// ０表示の時は、押した数字に上書きされる  
  }else if(board.value == "0"){
    board.value = pushNumber;
// コンマを重複させない
  }else if(board.value.slice(-1)  == "." && pushNumber == "."){
  pushNumber = "";
// 0以外の数字が先頭の時は、後ろに数字が文字列型に足されていく
  }else{
    board.value += pushNumber;
  }
}

function calCulator(pushNumber){
  if(pushEqual) pushEqual = false;
// 末尾が演算子の時に、演算子を入力したときは入れ替わる
  if(board.value.slice(-1).includes("+")) {
  　board.value = board.value.slice(0,-1) + pushNumber;
  }else if(board.value.slice(-1).includes("-")){
    board.value = board.value.slice(0,-1) + pushNumber;
  }else if(board.value.slice(-1).includes("*")){
    board.value = board.value.slice(0,-1) + pushNumber;
  }else if(board.value.slice(-1).includes("/")){
    board.value = board.value.slice(0,-1) + pushNumber;
// 末尾が演算子でなければ、末尾に足される
  }else{
    board.value += pushNumber; 
  }
}

// "="が押された時の関数。文字列含めて計算を返す。
function equal(pushNumber){
  board.value = eval(board.value);
  pushEqual = true;
}