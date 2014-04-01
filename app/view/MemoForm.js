Ext.define('todoList.view.MemoForm', {
    extend: 'Ext.form.Panel',
    xtype: 'memoform',
    config: {
        title: 'Nouveau mémo',
        items:[
            {
                xtype: 'textfield',
                name: 'title',
                placeHolder: 'Title :',
                clearIcon:true,
                required:true,
                margin:5
            },
            {
                xtype: 'textareafield',
                name: 'content',
                placeHolder: 'Détail :',
                clearIcon:true,
                required:true,
                margin:5
            },
            {
                xtype: 'button',
                text: 'Valider',
                action: 'submit',
                style: 'background:red'
            }
        ]
    },
    fullscreen:true,
    defaultBackButtonText: 'Retour',
});
