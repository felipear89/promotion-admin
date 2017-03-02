import React, { Component } from 'react';

class NewPromotion extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <strong>Basic Promotion Data</strong> 
              </div>
              <form action="" method="post">
                <div className="card-block">
                    
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input id="name" type="text" className="form-control" placeholder="Enter name.."/>  
                    </div>

                    <div className="row">
                      <div className="form-group col-sm-6">
                        <label htmlFor="begin">Begin</label>
                        <input id="begin" type="text" className="form-control" placeholder="Ex: 17/03/2017 - 10:00"/>
                      </div>
                      <div className="form-group col-sm-6">
                        <label htmlFor="finish">Finish</label>
                        <input id="finish" type="text" className="form-control" placeholder="Ex: 17/03/2018 - 11:00"/>
                      </div>
                    </div>

                    <div className="row">
                      <div className="form-group col-sm-4">
                        <label htmlFor="utm-source">Utm Source</label>
                        <input id="utm-source" type="text" className="form-control" placeholder="Enter Utm Source.."/>
                      </div>
                      <div className="form-group col-sm-4">
                        <label htmlFor="utm-medium">Utm Medium</label>
                        <input id="utm-medium" type="text" className="form-control" placeholder="Enter Utm Medium.."/>
                      </div>
                      <div className="form-group col-sm-4">
                        <label htmlFor="utm-campaign">Utm Campaign</label>
                        <input id="utm-campaign" type="text" className="form-control" placeholder="Enter Utm Medium.."/>
                      </div>
                    </div>
                  
                </div>
              </form>

              <div className="card-footer">
                <button type="submit" className="btn btn-lg btn-primary"><i className="fa fa-dot-circle-o"></i> Submit</button>
                <button type="reset" className="btn btn-sm btn-danger"><i className="fa fa-ban"></i> Reset</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NewPromotion;
