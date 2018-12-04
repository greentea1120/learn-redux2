import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getInputChangeAction, getAddItemAction, getDeleteItemAction } from './store/actionCreators'

class TodoList extends Component {
  render() {
    const { inputValue, changeInputValue, list, handleClick, handleDelete } = this.props
    return (
      <div>
        <div>
          <input type="text" value={inputValue}
          onChange={changeInputValue}/>
          <button onClick={handleClick}>submit</button>
        </div>
        <ul>
          {
            list.map((item, index) => {
              return (
                <li onClick={() => {handleDelete(index)}} key={index}>{item}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeInputValue: (e) => {
      const action = getInputChangeAction(e.target.value)
      console.log(e.target.value)
      dispatch(action)
    },
    handleClick() {
      const action = getAddItemAction()
      dispatch(action)
    },
    handleDelete(index) {
      const action = getDeleteItemAction(index)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);