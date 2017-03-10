import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class NewPromotionForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div className="card-block">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <Field id="name" name="name" type="text" component="input" className="form-control" />  
          </div>

          <div className="row">
            <div className="form-group col-sm-6">
              <label htmlFor="start_date">Begin</label>
              <Field id="start_date" name="start_date" type="datetime-local" component="input" className="form-control" />
            </div>
            <div className="form-group col-sm-6">
              <label htmlFor="end_date">Finish</label>
              <Field id="end_date" name="end_date" type="datetime-local" component="input" className="form-control" />
            </div>
          </div>

          <div className="row">
            <div className="form-group col-sm-4">
              <label htmlFor="utm-source">Utm Source</label>
              <Field id="utm-source" type="text" name="utm_source" component="input" className="form-control" />
            </div>
            <div className="form-group col-sm-4">
              <label htmlFor="utm-medium">Utm Medium</label>
              <Field id="utm-medium" type="text" name="utm_medium" component="input" className="form-control" />
            </div>
            <div className="form-group col-sm-4">
              <label htmlFor="utm-campaign">Utm Campaign</label>
              <Field id="utm-campaign" type="text" name="utm_campaign" component="input" className="form-control" />
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">Products</div>
                <div className="card-block">
                  <div className="row">
                    <div className="form-group col-md-4">
                      <label htmlFor="select_products">Select</label>
                      <select id="select_products" className="form-control">
                        <option value="">Please select</option>
                        <option value="category">Category</option>
                        <option value="brand">Brand</option>
                        <option value="product">Product</option>
                        <option value="sku">Sku</option>
                      </select>
                    </div>
                    <div className="form-group col-md-8">
                      <label htmlFor="search_products">Search</label>
                      <div className="input-group">
                        <input type="text" id="input3-group2" name="input3-group2" className="form-control" placeholder="Search"/>
                        <span className="input-group-btn">
                          <button type="button" className="btn btn-primary"><i className="fa fa-minus fa-lg m-t-2"></i></button>
                        </span>&nbsp;
                        <span className="input-group-btn">
                          <button type="button" className="btn btn-primary"><i className="fa fa-plus fa-lg m-t-2"></i></button>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div><strong>Include</strong>
                        <table className="table table-hover table-outline table-condensed">
                          <thead className="thead-default">
                            <tr>
                              <th>Id</th>
                              <th>Name</th>
                              <th className="text-md-center">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>95106373</td>
                              <td className="col-3">Apple</td>
                              <td className="text-md-center"><i className="fa fa-trash-o fa-lg m-t-2"></i></td>
                            </tr>
                            <tr>
                              <td>95106373</td>
                              <td className="col-3">Apple</td>
                              <td className="text-md-center"><i className="fa fa-trash-o fa-lg m-t-2"></i></td>
                            </tr>
                            <tr>
                              <td>95106373</td>
                              <td className="col-3">Apple</td>
                              <td className="text-md-center"><i className="fa fa-trash-o fa-lg m-t-2"></i></td>
                            </tr>
                            <tr>
                              <td>95106373</td>
                              <td className="col-3">Apple</td>
                              <td className="text-md-center"><i className="fa fa-trash-o fa-lg m-t-2"></i></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div><strong>Exclude</strong>
                        <table className="table table-hover table-outline table-condensed">
                          <thead className="thead-default">
                            <tr>
                              <th>Id</th>
                              <th>Name</th>
                              <th className="text-md-center">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>95106373</td>
                              <td className="col-3">Apple</td>
                              <td className="text-md-center"><i className="fa fa-trash-o fa-lg m-t-2"></i></td>
                            </tr>
                            <tr>
                              <td>95106373</td>
                              <td className="col-3">Apple</td>
                              <td className="text-md-center"><i className="fa fa-trash-o fa-lg m-t-2"></i></td>
                            </tr>
                            <tr>
                              <td>95106373</td>
                              <td className="col-3">Apple</td>
                              <td className="text-md-center"><i className="fa fa-trash-o fa-lg m-t-2"></i></td>
                            </tr>
                            <tr>
                              <td>95106373</td>
                              <td className="col-3">Apple</td>
                              <td className="text-md-center"><i className="fa fa-trash-o fa-lg m-t-2"></i></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <div className="card-footer">
          <button type="submit" className="btn btn-lg btn-primary"><i className="fa fa-dot-circle-o"></i> Submit</button>
        </div>
      </form>
    )
  }
}

NewPromotionForm = reduxForm({
  form: 'promotion'
})(NewPromotionForm);

export default NewPromotionForm;
