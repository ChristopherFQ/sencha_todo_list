Ext.define('todoList.view.MemoList', {
    extend: 'Ext.List',
    xtype: 'memolist',
    config: {
    	store: 'Todo',
    	id: 'memolist',
    	emptyText: 'Pas encore de mémo!',
    	itemTpl: '{title}',
    	items: [
    		{
    			xtype:'toolbar',
    			docked:'bottom',
    			layout:'card',
    			items:[
    				{
    					xtype:'button',
    					text: 'Créer un Mémo',
    					id:'createBtn',
    					margin: 5,
    					style: 'background:red'
    				}
    			]
    		}
    	]
    },
    fullscreen:true,
    defaultBackButtonText: 'Retour',
});
