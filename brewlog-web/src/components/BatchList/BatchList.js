import React, {Component} from 'react';


export default class BatchList extends Component {
  render() {
    // const styles = require('./InfoBar.scss');
    return (
      <div>
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Batches</h3>
                </div>
                <div className="list-group">
                  <a href="batches/01" className="list-group-item">
                    <span className="" >Wild Card IPA</span>
                    <span className="badge">12.12.15</span>
                  </a>
                  <a href="batches/02" className="list-group-item">
                    <span className="" >Super Oatmeal Stout</span>
                    <span className="badge">01.02.16</span>
                  </a>
                </div>
            </div>
      </div>
    );
  }
}
