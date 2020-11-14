import { observer } from 'mobx-react-lite';
import React, { Fragment } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';

const App: React.FC<RouteComponentProps> = ({ location }) => {
  return (
    <Fragment>
      <ToastContainer position='bottom-right' />
      Yo!
    </Fragment>
  )
}

export default withRouter(observer(App));
