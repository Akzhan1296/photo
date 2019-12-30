import React, { Component } from "react";
import {connect} from 'react-redux';
import {imgSearch,imgData} from '../../actions/';
import WithImgService from '../hoc';
import './search.css';

class SearchPanel extends Component {

  onChange = (e) => {
    let target = e.target.value;
    const {imgSearch} = this.props;
    imgSearch(target);
    this.getData(target);
  } 
  getData = (arg) => {
    const {data,imgData} = this.props;
    data.getImgItems(arg)
      .then(items => {
        imgData(items.results)});
  }
  render() {
    return <input 
                className="search-input" 
                type="text" 
                placeholder="Поиск" 
                onChange={this.onChange}/>;
  }
}

// const mapDispatchToProps = (dispatch) =>{
//   return {
//     imgSearch: (term)=>{
//       dispatch(imgSearch(term))
//     }
//   }
// }

const mapDispatchToProps = {
  imgSearch,
  imgData
}

export default  WithImgService()(connect(null,mapDispatchToProps)(SearchPanel));