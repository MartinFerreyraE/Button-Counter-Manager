import React from 'react';
import axios from 'axios';

class ButtonList extends React.Component {  

    state = {
        button: '',
        buttonList: []
    }

    componentDidMount() {
        this.getButtonList();
    }

    getButtonList = () => {
        axios
        .get('http://localhost:4000/buttons')
        .then((response) => response.data)
        .then((response) => {
            this.setState({ buttonList: response});
        });
    };

    onDeleteClick = idbuttons => {
        axios.delete(`http://localhost:4000/deleteButton/${idbuttons}`)
        this.getButtonList();
    };

    onPutClick = idbuttons => {
        axios.put(`http://localhost:4000/addButton/${idbuttons}`)
        this.getButtonList();
    }

    onSubmitClick = () => {
        axios.post('http://localhost:4000/addButton', {
            button: this.state.button,
        });
        this.getButtonList();
        this.setState({button: ''})

    };

    render() {

        return (
            <div>
                <h3>ButtonList</h3>
                <div className="ui input">
                <input type='text' value={this.state.button} onChange={e => this.setState({
                    button: e.target.value
                })} placeholder="Add your button" />
                </div> 
                <button className="ui primary button basic" onClick={() => this.onSubmitClick()}>Submit</button>
                <hr />
                <div className="ui cards">
                    {this.state.buttonList.map((button) => (
                    <div className="card">
                        <div className="content">
                            <div className='meta'>{button.button}</div>
                            <div className='extra content'>
                                <div className='ui two buttons'>
                                    <div className='ui basic green button' onClick={() => this.onPutClick(button.idbuttons)}>Clicks: {button.counter}</div>
                                    <div className='ui basic red button' onClick={() => this.onDeleteClick(button.idbuttons)}>Delete</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default ButtonList