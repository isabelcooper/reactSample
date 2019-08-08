import React, {Component} from 'react';
import './App.css'

class Todolist extends Component {
    constructor(props){
        super(props);
        this.state = {
            userInput: '',
            Worklist : [],
            Savelist:[]


        }
    }

    changeUserInput(input){
        this.setState({
            userInput: input
        });
    }

    addToList(input)
    {
        let listArray=this.state.Worklist;
        listArray.push(input);
        this.setState({
            Worklist: listArray ,
            userInput: '',


        })
    }

    deletefromlist(userInput)
    {
        let listArray=this.state.Worklist;
        listArray= listArray.filter(item => item !== userInput);
        this.setState({Worklist:listArray})
    }
    reset(){
        this.setState({Worklist:[]})

    }

    Save()
    {
        let NewArray=this.state.Worklist;
        this.setState({Savelist:NewArray})
    }

    render()
    {
        return (
            <div className="to-do-list-main">
                <div id = "list">
                    <h2>Things to Do</h2>
                    Enter <input
                    onChange= { (e)=> this.changeUserInput(e.target.value)}
                    value={this.state.userInput}
                    type="text" />
                    <button onClick= { ()=> this.addToList(this.state.userInput)}> Submit </button>
                </div>


                <ul>

                    <h3>{ this.state.Worklist.map( (val) => <ol>{val}
                        <button onClick ={ ()=>this.deletefromlist(val)}> X </button> </ol>)}</h3>

                </ul>
                <ul>

                    <h3>{ this.state.Savelist.map( (val) => <ol>{val} </ol>)}</h3>

                </ul>
                <div id="reset">
                    <button onClick={() => this.reset()}>Reset</button>
                    <button onClick={() => this.Save()}>Save</button>

                </div>


            </div>

        )
    }
}

export default Todolist;