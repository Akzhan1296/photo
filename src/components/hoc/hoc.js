import React from "react";
import Context from '../context'

const WithImgService = () => Wrapped => {
    return props => {
      return (
        <Context.Consumer>
          {data => {
            return <Wrapped {...props} data={data} />;
          }}
        </Context.Consumer>
      );
    };
  };
  
  export default WithImgService;