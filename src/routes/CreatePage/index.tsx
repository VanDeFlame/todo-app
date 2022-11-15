import React from 'react';

import { useTodos } from 'hooks/useTodos';
import { TodoForm } from 'components/TodoForm';

function CreatePage() {
  const { stateUpdaters } = useTodos();
  const { createTodo } = stateUpdaters;

  return (
    <React.Fragment>
      <TodoForm 
        actionType='Create'
        submitAction={createTodo}
      />
    </React.Fragment>
  )
}

export { CreatePage };
