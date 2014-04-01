Ext.define('todoList.view.Main', {
    extend: 'Ext.NavigationView',
    xtype: 'main',
    config: {
        fullscreen:true,
        defaultBackButtonText: 'Retour',
        id: 'navview',
        items: [
            {
                xtype: 'memolist',
                title: 'TODO'
            }
        ]
    }
});
