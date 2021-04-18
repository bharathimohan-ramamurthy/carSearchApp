({
	doInit : function(component, event, helper) {
		helper.loadRecords(component, event);
	},
    showSpinner: function(component, event, helper) 
    {
        helper.showSpinner(component, event);
   	},
    hideSpinner : function(component,event,helper)
    {
        helper.hideSpinner(component, event);
    },
    handlePagination : function(component, event, helper)
    {
        var dir = event.getParam("direction");
        var pageNav = event.getParam("pageNav");
        var pSize = event.getParam("pageSize");
        if(typeof(dir)!="undefined")
        {
            var currentPage = component.get("v.currentPage");
            component.set("v.currentPage",dir=="next"?(currentPage+1):(dir=="prev"?(currentPage-1):component.get("v.currentPage")));
            helper.loadRecords(component, event);
        }
        if(typeof(pageNav)!="undefined")
        {
            if(pageNav=="first")
            {
                component.set("v.currentPage",1);
            }
            else
            {
                component.set("v.currentPage",component.get("v.totalPages"));
            }
            helper.loadRecords(component, event);
        }
        if(typeof(pSize)!="undefined")
        {
            component.set("v.pageSize",pSize);
            component.set("v.currentPage",1);
            helper.loadRecords(component, event);
        }
    },
    handleSearch : function(component, event, helper)
    {
        var searchTxt = event.getParam("carName");
        var isLargeTile = event.getParam("isLargeTile");
        if(typeof(searchTxt)!="undefined")
        {
            component.set("v.searchKey",searchTxt);
            component.set("v.currentPage",1);
            helper.loadRecords(component, event);
        }
        if(typeof(isLargeTile)!="undefined")
        {
            component.set("v.isLargeTile",isLargeTile);
        }
        
    }
})