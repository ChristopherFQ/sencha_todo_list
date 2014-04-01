Ext.define('todoList.view.MemoDetail', {
    extend: 'Ext.NavigationView',
    xtype: 'memodetail',
    config: {
    	id: 'memodetail',
    	items: [
    		{
    			xtype:'toolbar',
    			docked:'bottom',
    			layout:'hbox',
    			items:[
                    {
                        xtype:'container',
                        flex:15
                    },
    				{
                        flex: 1,
    					xtype:'button',
    					text: 'Sup',
    					id:'supMemo',
    					style: 'background:red'
    				}
    			]
    		}
    	]
    },
    fullscreen:true,
    defaultBackButtonText: 'Retour',
});
