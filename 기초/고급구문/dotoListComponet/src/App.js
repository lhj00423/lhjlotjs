import Component from "./components/Component.js";
import TodoHeader from "./components/TodoHeader.js";
import TodoLists from "./components/TodoLists.js";

export default class App extends Component{
    //setup 오버라이딩
    setup(){
        console.log("setup");
        //app 클래스를 사용해 생성한 객체
        this.state = {
            //state 값이 변경되게끔
            InputText:"",
            todoLists : [
                {
                    no:1,
                    content:"할일1",
                    isDone: false
                },
                {
                    no:2,
                    content:"할일2",
                    isDone: false
                },
                {
                    no:3,
                    content:"할일3",
                    isDone: false
                }

            ]
        } 
        console.log(this.state);
    }
    template(){
        return`
        <div id = "insertTodo"></div>
        <div id = "listTodos"></div>
        `;
    }
    mounted(){
        //객체 구조 분해 할당
        const {addTodoList} = this;
        const todoHeader= document.querySelector("#insertTodo");
        const todolist = document.querySelector("#listTodos");
        //props로 객체를 넘김
        new TodoHeader(todoHeader,{addTodoList:addTodoList.bind(this)});
        //new 호출하면 constructor 호출됨 =>
        new TodoLists(todolist,{lists: this.state.todoLists});
    }
    //랜더는 없음 =>  컴퍼넌트에 있음
    //App =>TodoHeader => addTodoList로 지정
    addTodoList(content){
        const {todoLists} = this.state;
        console.log(todoLists);
        console.log(this);
        this.setState({
            todoLists: [
                ...todoLists,
                {
                    no:4,
                    content: content,
                    isDone: false
                }

            ]
        })
    }
}