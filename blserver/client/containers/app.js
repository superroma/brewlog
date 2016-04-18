
import React, {Component} from 'react'
import BatchList from './batches.js'

export default class App extends Component {
    constructor(props){
        super(props)
        
    }
    componentDidMount() {
        
    }
    render() {
        return (
        <div>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">BrewLog</a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#">Batches</a></li>
                            <li><a href="#">About</a></li>

                        </ul>
                    </div>
                </div>
            </nav>
            <BatchList/>
        </div>
        )
    }

}
