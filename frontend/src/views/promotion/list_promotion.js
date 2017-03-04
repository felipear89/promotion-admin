import React, { Component} from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

const MOMENT_FORMAT = 'DD/MM/YY';

class ListPromotion extends Component {

  renderTableLines() {
    if (this.props.promotions !== undefined) {
      return this.props.promotions.map(p => {
        return (
          <tr key={p.name}>
            <td>{p.name}</td>
            <td>{moment(p.start_date).format(MOMENT_FORMAT)}</td>
            <td>{moment(p.end_date).format(MOMENT_FORMAT)}</td>
            <td><span className="badge badge-primary badge-pill">Update</span></td>
          </tr>
        );
      });
    }
  }

  renderTableHead() {
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Begin</th>
          <th>Finish</th>
          <th>Status</th>
        </tr>
      </thead>
    );
  }

  render() {
    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <i className="fa fa-align-justify"></i>
              </div>
              <div className="card-block">
                <table className="table table-bordered table-striped table-condensed">
                  {this.renderTableHead()}
                  <tbody>
                    {this.renderTableLines()}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { promotions: state.promotions.list }
}

export default connect(mapStateToProps)(ListPromotion);
