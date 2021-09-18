import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import { List } from 'antd';

class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      // <ul>
      //   {this.props.todos.map(todo => (
      //     <Todo key={todo.id} {...todo} onClick={() => this.props.onTodoClick(todo.id)} />
      //   ))}
      // </ul>

      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={this.props.todos}
        renderItem={item => (
          <List.Item>
            <Todo key={item.id} {...item} onClick={() => this.props.onTodoClick(item.id)} onTodoDel={() => this.props.onTodoDel(item.id)} />
          </List.Item>
        )}>
      </List>
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onTodoDel: PropTypes.func.isRequired,
}

export default TodoList