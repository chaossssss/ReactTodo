
import './App.css';
import TodoApp from './components/TodoApp';
import { Row, Col } from 'antd';
function App() {
  return (
    <div className="App">
      <Row>
        <Col span={20} offset={2}>
          <TodoApp />
        </Col>
      </Row>
    </div>
  );
}

export default App;
