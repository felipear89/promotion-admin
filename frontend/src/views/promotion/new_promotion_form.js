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
            <div className="col-md-6">
              <div>
                <p>Exclude Products</p>
                <div>
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
            <div className="col-md-6">
              <div>
                <p>Exclude Products</p>
                <div>
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
