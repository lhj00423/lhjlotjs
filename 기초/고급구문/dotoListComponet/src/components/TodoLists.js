import Component from "./Component.js";

export default class TodoLists extends Component{
    template(){
        const{lists} = this.props;
        console.log(lists);
        return`
        <ul>
            ${lists.map(li=>`<li>${li.content}</li>`).join("")}
        </ul>
        `;
    }
}