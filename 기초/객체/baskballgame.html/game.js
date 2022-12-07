//변수설정
//컴퓨터 점수, 사람 점수, 남은 슛 회수
//html 변경되는 요소

let comScore = 0;
let userScore = 0;
let shortsLeft = 3;
let isComputerTurn = true;
//html 요소
let shortsLeftElem = document.querySelector("#short-left");
let comScoreElem = document.querySelector("#computer-score");
let userScoreElem = document.querySelector("#user-score");
let textElem = document.querySelector("#text");
let comBtn = document.querySelector(".btn-computer");
let userBtns = document.querySelectorAll(".btn-user");


//컴퓨터가 먼저 슛을 한다.
//2점슛인지 3점슛인지 랜덤으로 결정
//2점슛 50% 확률로 성공, 3점슛은 30%확률로 성공
//컴퓨터가 슛을 할때 동작하는 함수
//반반 확률로 이점 삼점 슛 나누기

// 시작할때 3점으로 시작하는 호출
shortsLeftElem.innerHTML = shortsLeft;

function onComputerShoot(){
    //2점인지 3점인지 랜덤지정
    let shootType = Math.random() > 0.5 ? 2 : 3 ;
    //2점일때 
    if(shootType == 2){
        //성공했을때
        if(Math.random()< 0.5){
            //컴퓨터의 점수를 올린다.
            //글자를 변경 컴퓨터가 2점슛을 성공시켰습니다.
            
            comScore = comScore +2;
            //^원래있던 점수에서 스코어 더하기
            comScoreElem.innerHTML = comScore;
            //^html에 점수값을 나타내기
            textElem.innerHTML = "컴퓨터가 2점슛을 성공시켰습니다.";

            //실패했을때
        } else{
            textElem.innerHTML = "실패했습니다.";
        } 

        //3점슛일때
    } else{
        if(Math.random()<0.3){
            comScore = comScore +3;
            comScoreElem.innerHTML = comScore;
            textElem.innerHTML = "컴퓨터가 3점슛을 성공시켰습니다.";
        }else{
            textElem.innerHTML = "실패했습니다.";
        } 
    }
    //버튼의 비활성화 
    isComputerTurn = false;
    userBtns.forEach(btn=>{
        btn.disabled = false;
    })
    comBtn.disabled = true;
    //true일때 비활성화 시킴
}

//사용자가 2점슛을 클릭했을때
function onUserShoot2(){
    if(Math.random()< 0.5){
        //컴퓨터의 점수를 올린다.
        //글자를 변경 컴퓨터가 2점슛을 성공시켰습니다.
        userScore = userScore +2;
        userScoreElem.innerHTML = userScore;
        textElem.innerHTML = "당신이 2점슛을 성공했습니다.";
    } else{
        textElem.innerHTML = "실패했습니다.";
    } 
    userBtns.forEach(btn=>{
        btn.disabled = true;
    })
    comBtn.disabled = false;
    --shortsLeft;
    //남은 슛횟수를 -1 해줌
    shortsLeftElem.innerHTML = shortsLeft;
    //^ 슛횟수 html에 변경해서 보여지기
    if(shortsLeft==0){
        gameOver();
    }
}

//슛횟수가 0이되면 승자를 결정하는 함수
function gameOver(){
    if(userScore > comScore){
        textElem.innerHTML = " 당신이 승리했습니다."
    }else if( userScore == comScore){
    textElem.innerHTML = "비겼습니다."
} else{
    textElem.innerHTML = "당신이 졌습니다."
}

// 게임이 끝나면 모든 버튼 비활성화 
    userBtns.forEach(btn=>{
    btn.disabled = true;    
    })
    comBtn.disabled = true;
    }

    function onUserShoot3(){
        if(Math.random()< 0.3){
            //컴퓨터의 점수를 올린다.
            //글자를 변경 컴퓨터가 2점슛을 성공시켰습니다.
            userScore = userScore +3;
            userScoreElem.innerHTML = userScore;
            textElem.innerHTML = "당신이 3점슛을 성공했습니다.";
        } else{
            textElem.innerHTML = "실패했습니다.";
        } 
        userBtns.forEach(btn=>{
            btn.disabled = true;
        })
        comBtn.disabled = false;
        --shortsLeft;
        //남은 슛횟수를 -1 해줌
        shortsLeftElem.innerHTML = shortsLeft;
        //^ 슛횟수 html에 변경해서 보여지기
        if(shortsLeft==0){
            gameOver();
        }
    }