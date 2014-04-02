var clicked = true;

Ext.define('todoList.controller.Memo', {
    extend: 'Ext.app.Controller',
    config: {
       refs: {
       		createBtn: '#createBtn',
       		malist: 'memolist',
       		submit: 'button[action="submit"]',
       		itemtap: 'memolist',
       		removeMemo: 'memodetail #supMemo'
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
	    	title = record.get('title'),
	    	content = record.get('content');

	    memolist.mask({
    		xtype:'loadmask',
    		message: 'Veuillez patienter..'

    	});
    	navview.push(
    		Ext.create('todoList.view.MemoDetail', {title:title, data:record.getData()})
    	);
	},
	removeMemo: function(elem) {

	        var store = Ext.getStore("Todo"),
	        memodetail = elem.getParent().getParent();
	        
	        var id = memodetail.getData()['id'],
	            rec = store.getById(id);
	        store.remove(rec);
	        store.sync();
	
	        var navview = Ext.getCmp('navview');
	        navview.pop();

	}
});
