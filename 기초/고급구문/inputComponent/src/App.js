import Component from "./components/Component.js";
import ContentInput from "./components/Contentlnutput.js";
import Lists from "./components/Lsits.js";
//끝에 js 붙이기 **

//내보내기
export default class App extends Component{
    setup(){
        this.state = {
            students: [
                {
                    no:1,
                    contents:"stu1",
                    active:true
                },
                {
                    no:2,
                    contents:"stu2",
                    active:false
                },
                {
                    no:3,
                    contents:"stu3",
                    active:false
                },
            ]
        }
        console.log(this);
    }
    //오버라이딩
    template(){
        return`
        <div id = "contnetAdd"></div>
        <div id = "studentLists"></div>
        <div id = "viewBtn"></div>
        `;
    }
    mounted(){
        const { students } = this.state;
        const { addStudent, deleteststudent } = this;
        const contentAppender = document.querySelector("#contnetAdd");
        const stuListDiv =document.querySelector("#studentLists");
        //new(constructor호출 => 컴퍼넌트에서 확인 => render => innetrHTML => input 생성) 클래스이름
        new ContentInput(contentAppender,{
            //bind는 this 값을 지정해줌 (app이 this가 되도록)
            addStudent: addStudent.bind(this)
        });
        new Lists(stuListDiv,{
            students : students, 
            deleteststudent : deleteststudent.bind(this)  });
    }

    //추가됨 값을 받아옴
    //{
    //    no:4,
    //    contents:"stu1",
    //    active:true
    //}
    //가 추가 된다고 생각하면 됨 - input에 추가됨 - 실제 값은 props로 넘김
    addStudent(contents){
        const {students} = this.state;
        //students.map(s=>s.no) 새로운 반환값을 생성 =>[2,3,4]
        //...students.map(s=>s.no) 원본 배열에서 => [1,2,3]
        //no 중 가장 큰숫자를 찾고 그 숫자에 +1한 값을 할당
        const no =  Math.max(0, ...students.map(s=>s.no))+1;
        this.setState({
            students: [
                ...students,
                {
                    no : no,
                    contents : contents,
                    active : false
                }
            ]
        })
    }
    deleteststudent(no){
        const { students } = this.state;
        //원본 배열에서 받아온 값이 다를때 리턴, 나머지는 리턴안됨
        const newStudents = students.filter(stu=>stu.no !== no);
        console.log(newStudents); 
        this.setState({students: newStudents});
    }
}