Ext.define('todoList.model.Todo', {
    extend: 'Ext.data.Model',
    config: {
      fields: [
        {name:'id', type:'auto'},
        {name:'title', type:'string'},
        {name:'content', type:'string'}
      ],
      identifier: {type: 'uuid'},
      idProperty: 'id',
      validations: [
        {type:'presence', name: 'title', message: 'Veuillez renseignez le titre'},
        {type:'presence', name: 'content', message: 'Veuillez renseignez le champ détail'}
      ]
    }
});
