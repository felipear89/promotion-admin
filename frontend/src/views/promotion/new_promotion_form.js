import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Autosuggest from 'react-autosuggest';
import axios from 'axios';

/* --------------- */
/*      Utils      */
/* --------------- */
function getMatchingItem(list, value) {
  const escapedValue = escapeRegexCharacters(value.trim());
  
  if (escapedValue === '') {
    return [];
  }
  
  const regex = new RegExp('^' + escapedValue, 'i');

  return list.filter(item => regex.test(item.name));
}

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/* --------------- */
/*    Component    */
/* --------------- */
function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  return (
    <span>{suggestion.name}</span>
  );
}

class NewPromotionForm extends Component {

  constructor() {
    super();

    this.state = {
      'inputCatalogSearch': '',
      'catalogSuggestions': [],
      'includeItems': {},
      'selectedItem': {}
    };
  }

  onChangeInputCatalogSearch = (event, { newValue }) => {
    this.setState({
      'inputCatalogSearch': newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    axios.get('http://localhost:3090/catalog').then((res) => {
      this.setState({
        'catalogSuggestions': getMatchingItem(res.data, value)
      });
    });    
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      'catalogSuggestions': []
    });
  };

  onSuggestionSelected = (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) => {
    this.setState({
      'selectedItem': suggestion
    });
  }

  renderIncludeItems = () => {
    var renderView = [];
    var items = this.state.includeItems;
    for (var id in items) {
      if (items.hasOwnProperty(id)) {
        var item = items[id];
        renderView.push((
          <tr key={id}>
            <td>{id}</td>
            <td className="col-3">{item.name}</td>
            <td className="col-3">{item.type}</td>
            <td className="text-md-center"><i className="fa fa-trash-o fa-lg m-t-2" onClick={() => this.onClickRemoveItem(id, items, 'includeItems')}></i></td>
          </tr>
        ));    
      }
    }
    return renderView;
  }

  onClickRemoveItem = (id, list, stateName) => {
    delete list[id];
    this.setState({
      stateName: list
    })
  }

  onClickAddItem = () => {
    var id = this.state.selectedItem.id;
    if (id > 0) {
      var includeItems = this.state.includeItems;
      includeItems[id] = this.state.selectedItem;
      this.setState({
        'inputCatalogSearch': '',
        includeItems
      });
    }
  }

  render() {
    const { handleSubmit } = this.props;
    const { inputCatalogSearch, catalogSuggestions } = this.state;
    const inputProps = {
      'placeholder': "Type the item name",
      'value': inputCatalogSearch,
      'onChange': this.onChangeInputCatalogSearch
    };

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
                        <Autosuggest 
                          suggestions={catalogSuggestions}
                          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                          onSuggestionSelected={this.onSuggestionSelected}
                          getSuggestionValue={getSuggestionValue}
                          renderSuggestion={renderSuggestion}
                          inputProps={inputProps} />
                        &nbsp;
                        <span className="input-group-btn">
                          <button type="button" className="btn btn-primary"><i className="fa fa-minus fa-lg m-t-2"></i></button>
                        </span>
                        &nbsp;
                        <span className="input-group-btn">
                          <button type="button" onClick={this.onClickAddItem.bind(this)} className="btn btn-primary"><i className="fa fa-plus fa-lg m-t-2"></i></button>
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
                              <th>Type</th>
                              <th className="text-md-center">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {this.renderIncludeItems()}
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
