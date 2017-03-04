import React, { Component} from 'react';
import { connect } from 'react-redux';

class ListPromotion extends Component {

  componentWillMount() {
    
  }

  renderTableLine() {

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
                    
                  </tbody>
                </table>
                <nav>
                  <ul className="pagination">
                    <li className="page-item"><a className="page-link" href="#">Prev</a></li>
                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">4</a></li>
                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListPromotion;
