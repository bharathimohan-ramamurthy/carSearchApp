({
	previousPage : function(component, event, helper) {
		var evt = $A.get("e.c:carPaginatorEvent");
		evt.setParams({ "direction": "prev"});
		evt.fire();
	},
    nextPage : function(component, event, helper) {
		var evt = $A.get("e.c:carPaginatorEvent");
		evt.setParams({ "direction": "next"});
		evt.fire();
	},
	firstPage : function(component, event, helper) {
		var evt = $A.get("e.c:carPaginatorEvent");
		evt.setParams({ "pageNav": "first"});
		evt.fire();
	},
	lastPage : function(component, event, helper) {
		var evt = $A.get("e.c:carPaginatorEvent");
		evt.setParams({ "pageNav": "last"});
		evt.fire();
	},
	handlePagination : function(component, event, helper){
		var evt = $A.get("e.c:carPaginatorEvent");
		evt.setParams({"pageSize":component.get("v.pageSize")});
		evt.fire();
	}
})