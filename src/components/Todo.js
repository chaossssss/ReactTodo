import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'antd';
// const Todo = ({ onClick, completed, text }) => (
//   <li
//     onClick={onClick}
//     style={{
//       textDecoration: completed ? 'line-through' : 'none'
//     }}
//   >
//     {text}
//   </li>
// )

class Todo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <Card onClick={this.props.onClick} title={'任务' + (this.props.id + 1)}>{this.props.text}</Card>
    )
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo