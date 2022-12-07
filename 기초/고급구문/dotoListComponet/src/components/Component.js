//앱에서 컴퍼넌트를 불러서 사용할수있다 (export default 써야 사용할수있음)
export default class Component {
    //어디에 할건지 (target)
    target;
    //그리고 props를 가짐
    props;
    state;
    constructor(target,props){
        this.target = target;
        this.props = props;
        this.setup();
        //render는 부모요소에만 해당됨 (공통적)
        this.render();
        this.setEvent();
    }
    render(){
        //랜더링의 인너 = > 템플릿에서 찾아야함
        this.target.innerHTML = this.template();
        this.mounted() // 랜더후 마운트 호출
    }
    //이벤트가 호출 됬을때 실행됨(버튼 누를때 기능작성 , this.넘겨받아서 추가하겠다 + this.다시 랜더링)
    setState(newState){
        this.state = {...this.state, ...newState}
        this.render();
        console.log(this.state);
    }
    
    //각각의 클래스별로 사용되게끔 입력됨, 안쓰면 마운트되도록 함
    setup(){}
    template(){return "";}
    mounted(){}
    setEvent(){}
}