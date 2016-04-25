import React, {Component, PropTypes} from 'react';
import Helmet from 'react-helmet';
import { BatchList, BatchDetails } from 'components';

export default class Batches extends Component {
  static propTypes = {
    params: PropTypes.node
  }
  render() {
    const batchId = this.props.params.batchId;
    if (!batchId) {
      return (
        <div className="container">
          <h1>Batches</h1>
          <Helmet title="Batches"/>
          <BatchList/>
        </div>
      );
    }
    return (
        <div className="container">
          <h1>Batch {batchId}</h1>
          <Helmet title="Batches"/>
          <BatchDetails batchId={batchId}/>
        </div>
    );
  }
}
