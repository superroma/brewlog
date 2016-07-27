import React from 'react'


const BatchListItem = () => (
  <a href="#" className="list-group-item">
    <span className="">Name</span>
    <span className="label label-pill label-default pull-xs-right">
      12.12.12
    </span>
  </a>
)
const BatchList = () => (
  <div className="card">
    <h4 className="card-header">Batches</h4>
    <div className="card-block">
      <button className="btn btn-primary">New Batch</button>
      <div className="list-group">
        <BatchListItem />
        <BatchListItem />
        <BatchListItem />
        <BatchListItem />
      </div>
    </div>
    <div className="card-footer">footer</div>
  </div>
)

export const BatchesView = () => (
  <BatchList/>
)