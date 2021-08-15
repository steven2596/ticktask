import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';
import Main from './pages/main/main.component';

import { connect } from 'react-redux';
import { fetchTasksStart } from './redux/tasks/tasks.actions';

const App = ({ fetchTasksStart }) => {

  useEffect(() => {
    fetchTasksStart()
  }, [])

  return (
    <div className="App">
      <Main />
    </div>
  );
}


const mapDispatchToProps = (dispatch) => ({
  fetchTasksStart: () => dispatch(fetchTasksStart())
})

export default connect(null, mapDispatchToProps)(App);
