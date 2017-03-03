import React, { Component } from 'react';
import NewPromotionForm from './NewPromotionForm'

class NewPromotion extends Component {

  handleSubmit = (values) => {
    // Do something with the form values
    console.log(values);
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
              <NewPromotionForm onSubmit={this.handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NewPromotion;
