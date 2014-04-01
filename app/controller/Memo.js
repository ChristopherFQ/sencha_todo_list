var clicked = true;

Ext.define('todoList.controller.Memo', {
    extend: 'Ext.app.Controller',
    config: {
       refs: {
       		createBtn: '#createBtn',
       		malist: 'memolist',
       		submit: 'button[action="submit"]',
       		itemtap: 'memolist',
       		removeMemo: '#supMemo'
       },
       control: {
       		createBtn: {
       			tap:'createForm'
       		},
       		malist: {
       			activate: 'unmask'
       		},
       		submit: {
       			tap: 'submit'
       		},
       		itemtap: {
       			itemtap: 'itemtap'
       		},
       		removeMemo: {
       			tap:'removeMemo'
       		}
       }
    },
    createForm : function(){
    	if (clicked) {
	    	clicked = false;
	    	var navview = Ext.getCmp('navview'),
	    		 memolist = Ext.getCmp('memolist');
	    	memolist.mask({
	    		xtype:'loadmask',
	    		message: 'Veuillez patienter..'

	    	});
	    	navview.push(
	    		Ext.create('todoList.view.MemoForm')
	    	);
    	}
    },
    unmask : function(item){
    	clicked=true;
    	item.unmask();
    },
    submit : function(elem){
    	// initialisation des variables
    	var form = elem.getParent(),
    		values = Ext.create('todoList.model.Todo', form.getValues()),
    		errors = values.validate(),
    		msg='';
    	if (errors.isValid()) {
    		form.reset();
    		var store = Ext.getStore('Todo');
    		store.add(values);
    		store.sync();
    		Ext.getCmp('navview').pop(form);
    	} 
    	else {
    		Ext.each(errors.items, function(rec, i){
    			msg += rec.getMessage()+"<br />";
    		});
    		Ext.Msg.alert("Erreur", msg);
    	}
    },
    itemtap: function(memolist, index, target, record, e, eOpts) {
    	var navview = Ext.getCmp('navview'),
	    	memolist = Ext.getCmp('memolist'),
	    	store = Ext.getStore('Todo'),
	    	title = record.getData()['title'],
	    	content = record.getData()['content'];

	    memolist.mask({
    		xtype:'loadmask',
    		message: 'Veuillez patienter..'

    	});
    	navview.push(
    		Ext.create('todoList.view.MemoDetail', {title:title, html:content, action:index})
    	);
	},
	removeMemo: function(field) {

            var store = Ext.getStore('Todo');
            console.log(store.getId());   
            console.log(field);    
            /*var idx = 5;
            var object = store.getData().items[idx];*/
           // console.log(navview);
			//store.remove(this);
			//store.sync();


            //var object = store.getData();
            //var idx = store.getData().items[index].data['id'];
            //var object = store.getById(index);
            
            //store.removeAt(idx);
            //store.sync();

	}
});
