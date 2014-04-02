Ext.define('todoList.view.MemoDetail', {
    extend: 'Ext.Panel',
    xtype: 'memodetail',
    config: {
    	tpl:'{content}',
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
    					iconCls:'trash',
    					id:'supMemo',
    					style: 'background:red'
    				}
    			]
    		}
    	]
    },
    fullscreen:true,
    defaultBackButtonText: 'Retour'
});
