//export default 모듈 내보내기
export default class Component {
    target; // html에 app에 내용 지정
    props; // 입력값을 넘겨 받음
    state; // 데이터 관리
    constructor(target,props){
        this.target = target;
        this.props = props;
        //메소드 호출
        this.setup(); //setup의 역할 this.state에 값을 넣어줌
        this.render();
        this.setEvent();
    }
    template() {return ""};
    render(){
        this.target.innerHTML = this.template();
        
        //app에 div생성
        this.mounted();
    }
    
    //원래 스테이에 추가되도록 함
    //다시 화면에 적용되도록 함
    setState(newState){
        this.state = {...this.state, ...newState};
        this.render();
    }
    setup(){}; // 각각의 클래스별로 구현
    mounted(){};
    setEvent(){};

}