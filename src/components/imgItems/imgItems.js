import React, { Component } from "react";
import { connect } from "react-redux";
import WithImgService from "../hoc/";

class ImgItems extends Component {
  render() {
    const {imgItems} = this.props;
    if(typeof(imgItems) === "undefined"){
      return null 
      
    } 

    return(
      imgItems.map((item, index) => {
              const { small } = item.urls;
              return <img src={small} key={index} />;
            })
    )
    

  }
}

const mapStateToProps = state => {
  return {
    imgItems: state.imgs

    //НАЗВАНИЕ PROPS: ДАННЫЕ из STATE
  };
};

export default WithImgService()(connect(mapStateToProps)(ImgItems));
