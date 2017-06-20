import React, { Component } from 'react';

class SavedQueries extends Component {
    constructor(){
        super();
        this.state = {
            val: "",
            open: false
        }
    }

    componentDidMount() {
        jQuery(".selectpicker").selectpicker({
            "title": "Select Options"        
        }).selectpicker("render");
    }

    _toggle(){

    }

    render() {
        return (
            <div className="savedQueryFloat">
                <div>
                    <select className="selectpicker">
                        <option value="test">Query1</option>
                        <option value="test2">Query2</option>
                    </select>
                </div>
                <button onClick={this._toggle.bind(this)} className="savedQuerySlideDown">
                    <span className={this.state.open ? "glyphicon glyphicon-chevron-up" : "glyphicon glyphicon-chevron-down"} />
						Saved Queries
					<span className={this.state.open ? "glyphicon glyphicon-chevron-up" : "glyphicon glyphicon-chevron-down"} />
                </button>
            </div>
        );
    }
}

export default SavedQueries;