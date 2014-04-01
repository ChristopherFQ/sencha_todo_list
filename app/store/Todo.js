Ext.define('todoList.store.Todo', {
    extend: 'Ext.data.Store',
    config: {
      model: 'todoList.model.Todo',
      autoLoad: true,
      proxy: {
        type:'localstorage',
        id:'todolist'
      }
    }
});
