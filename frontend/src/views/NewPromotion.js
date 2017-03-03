import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewPromotionForm from './NewPromotionForm'
import * as actions from '../actions';

class NewPromotion extends Component {

  handleSubmit = (promotion) => {
    this.props.createPromotion(promotion)
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <strong>Basic Promotion Data</strong> 
              </div>
              {this.renderAlert()}
              <NewPromotionForm onSubmit={this.handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.promotions.error };
}

export default connect(mapStateToProps, actions)(NewPromotion);
