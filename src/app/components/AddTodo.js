import React,{findDOMNode,Component,PropTypes} from 'react';

export default class AddTodo extends Component{
    render(){
        return (
            <div>
                <input type='text' ref='input'/>
                <button onClick={e=>this.handleClick(e)}>
                 AddTodo
                </button>
            </div>
        );
    }
    handleClick(e){
        const node=findDOMNode(this.refs.input);
        const text =node.value.trim();
        this.props.onAddClick(text);
        node.value='';
    }
}

AddTodo.PropTypes={
    onAddClick:PropTypes.func.isRequired
}