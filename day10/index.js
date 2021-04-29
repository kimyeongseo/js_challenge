const input = document.querySelector(".game_my-number_input");
const playBtn = document.querySelector(".game_play_btn");
const gameInfo = document.querySelector(".game_my-number");
const rangeBar = document.querySelector('.game_range_bar');



playBtn.addEventListener('click',  (event) => {
numberGame();
});

function numberGame(){
    let rangeNum = rangeBar.value;
    let randomNum = Math.floor(Math.random() * rangeNum);
    let myNum = input.value;
    console.log(randomNum);

    if(myNum == ""){
        alert("숫자를 입력해주세요");
    }else{
        document.querySelector(".game_process_info").innerHTML = `You chose: ${myNum}, the machine chose: ${randomNum}.`
        if(myNum > rangeNum){
            alert("범위를 확인해주세요");
        }else if( myNum < 0){
            alert("범위를 확인해주세요");
        }else{
        if(myNum == randomNum){
            document.querySelector(".game_result").innerHTML = "You won :)"
        }else{
            document.querySelector(".game_result").innerHTML = "You lost :("
        }
    }
    }
}

