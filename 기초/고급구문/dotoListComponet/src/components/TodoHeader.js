import Component from "./Component.js";

//export 내보내기 (import하고 export 실행됨)
export default class TodoHeader extends Component {
    template(){
        return `
        <h1>TodoList</h1>
        <div><input type = "text" class = "appender" />
        <button id = "addBtn">+</button>
        </div>
        `
    }
    setEvent(){
        const { addTodoList } =this.props;
        document.querySelector("#addBtn").addEventListener("click",()=>{
            addTodoList(document.querySelector(".appender").value);
        })
    }
}