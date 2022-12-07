import Component from "./Component.js";

export default class ContentInput extends Component{
    template(){
    return`
    <input type = "text" class ="appender">
    `;
    }
    setEvent(){
        //객체 구조 분해 할당
        const { addStudent } = this.props;
        
        //keyup (= input) e받는데 엔터키이면 추가됨
        // 아니면 끝(return)
        this.target.addEventListener("keyup",(e)=>{
            console.log(e);
            if(e.key !== "Enter") return;
            addStudent(e.target.value);
        })
    }
}