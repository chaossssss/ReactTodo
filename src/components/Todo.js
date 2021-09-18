import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

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
      <Card
        title={'任务' + (this.props.id + 1)}
        actions={[
          <DeleteOutlined 
            key="DeleteOutlined"
            onClick={this.props.onTodoDel}
          />
        ]}
      >
        <div
          onClick={this.props.onClick}
          style={{
            textDecoration: this.props.completed ? 'line-through' : 'none'
          }}
        >{this.props.text}</div>
      </Card>
    )
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onTodoDel: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo