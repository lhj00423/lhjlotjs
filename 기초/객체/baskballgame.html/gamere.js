//변수설정
//컴퓨터 점수, 사람 점수, 남은 슛 회수
//html 변경되는 요소

//html 요소
let shortsLeftElem = document.querySelector("#short-left");
let comScoreElem = document.querySelector("#computer-score");
let userScoreElem = document.querySelector("#user-score");
let textElem = document.querySelector("#text");
let comBtn = document.querySelector(".btn-computer");
let userBtns = document.querySelectorAll(".btn-user");


//오브젝트로 만들기
//컴퓨터 오브젝트

let computer = {
    score : 0,
    percent2 : 0.5,
    percent3 : 0.3,
}
//사용자 오브젝트
let user = {
    score : 0 ,
    percent2 : 0.5,
    percent3 : 0.3,
}

//게임 오브젝트
let game = {
    isComputerTurn : true,
    shortsLeft : 5,
}

//컴퓨터가 먼저 슛을 한다.
//2점슛인지 3점슛인지 랜덤으로 결정
//2점슛 50% 확률로 성공, 3점슛은 30%확률로 성공
//컴퓨터가 슛을 할때 동작하는 함수
//반반 확률로 이점 삼점 슛 나누기

// 시작할때 3점으로 시작하는 호출
shortsLeftElem.innerHTML = game.shortsLeft;

function onComputerShoot(){
    //2점인지 3점인지 랜덤지정
    let shootType = Math.random() > 0.5 ? 2 : 3 ;
    //2점일때 
    //2일때 0.5 / 3일때 0.3 으로 입력값
    //변수로 지정해서 접근 []대괄호로 접근
    //퍼센트 2-3 두개다 호출  
    if(Math.random()< computer[`percent`+ shootType]){
        computer.score = computer.score +shootType;
            comScoreElem.innerHTML = computer.score;
            textElem.innerHTML = "컴퓨터가"+ shootType + "점슛을 성공시켰습니다.";
            //실패했을때
     } 
     else{
        textElem.innerHTML = "실패했습니다.";
        } 
        disabledBtn(false);

    }

    //버튼비활성화 함수
    //flag에 true가 할당되면 사용자 버튼이 비활성화
    //컴퓨터 버튼은 활성화
    //flag에 false가 할당되면 사용자 버튼이 활성화
    //컴퓨터 버튼은 비활성화
    function disabledBtn(flag){
        userBtns.forEach(btn=>{
        btn.disabled = false;    
        })

        //유저 버튼을 누르면 컴퓨터 버튼 비활성화
        comBtn.disabled = !false;
    }


//사용자가 2점슛을 클릭했을때
function onUserShoot(jum){
    if(Math.random()< user["percent" + jum]){
        //사용자의 점수를 올린다.
        //글자를 변경 컴퓨터가 2점슛을 성공시켰습니다.
        user.score = user.score +jum;
        userScoreElem.innerHTML = user.score;
        textElem.innerHTML = "당신이 "+ jum + "점슛을 성공했습니다.";
    } else{
        textElem.innerHTML = "실패했습니다.";
    } 

    disabledBtn(true);
    //남은 슛횟수를 -1 해줌
    --shortsLeft;
    shortsLeftElem.innerHTML = game.shortsLeft;
    //^ 슛횟수 html에 변경해서 보여지기
    if(shortsLeft==0){
        gameOver();
    }
}

//슛횟수가 0이되면 승자를 결정하는 함수
function gameOver(){
    if(user.score > computer.score){
        textElem.innerHTML = " 당신이 승리했습니다."
    }else if( user.score == computer.score){
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
            //글자를 변경 컴퓨터가 3점슛을 성공시켰습니다.
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