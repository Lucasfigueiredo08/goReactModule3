import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from './store/actions/todos';

const TodoList = ({ todos, addTodo, removerTodo }) => (
  <Fragment>
    <ul>
      {todos.map(todo => (
      <li key={todo.id}>
        {todo.text}
        <button onClick={() => removerTodo(todo.id)}>Remover</button>
      </li>
        ))}
    </ul>
    <button onClick={() => addTodo('Novo Todo')}>Adicionar</button>
  </Fragment>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
  })).isRequired,
};

//funcoes
const mapStateToProps = (state) => ({
  todos: state.todos,
});

//funcoes
const mapDispatchToProps = dispatch => bindActionCreators(TodoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
