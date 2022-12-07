import Component from "./Component.js";

export default class Lists extends Component{
  
    template(){  
        const { students } = this.props;
        console.log(students);
        return`
        <ul>
            ${students.map(stu=>`<li dats-no= "${stu.no}">
            ${stu.contents}
            <button>${stu.active ? `비활성` : `활성` }</button>
            <button class ="deleteBtn" data-no="${stu.no}">삭제</button>
            </li>`).join("")}
        </ul>
        `;
    }
    setEvent(){
        const { deleteststudent } = this.props;
        this.target.addEventListener("click",(e)=>{
            if(e.target.classList.contains('deleteBtn')){
                console.log("deletebtn입니다.");
                //배열에서 삭제하기
                console.log(e.target);
                deleteststudent(Number(e.target.dataset.no));
            }
        })
    }
}