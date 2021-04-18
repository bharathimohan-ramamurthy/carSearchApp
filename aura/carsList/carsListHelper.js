({
	loadRecords : function(component, event) {
        var self = this;
		var action = component.get("c.getCarRecords");
        action.setParams(
            {
                "searchKey":typeof(component.get("v.searchKey"))!="undefined"?component.get("v.searchKey"):"",
                "currentPage":component.get("v.currentPage"),
                "pageSize":component.get("v.pageSize")
            }
        );
        action.setCallback(this, function(response)
		{
			var state = response.getState();
            if(component.isValid() && state == "SUCCESS")
            {

            	if(response.getReturnValue().totalRecords==0 || typeof(response.getReturnValue().carList)=="undefined")
                {
                    self.toast('No Cars Found!','Please check if records exists or modify your filter criteria','info','dismissable');
                    component.set("v.carList",[]);
                    component.set("v.totalRecords",0);
                    component.set("v.totalPages",0);
                }
                else
                {
                    component.set("v.carList",response.getReturnValue().carList);
                    component.set("v.totalRecords",response.getReturnValue().totalRecords);
                    component.set("v.totalPages",Math.ceil(component.get("v.totalRecords")/component.get("v.pageSize")));
                }
            }
            else if (component.isValid() && state === "ERROR") 
            {
                self.toast('Error',response.getError()[0].message,'error','sticky');
            }
		});
        $A.enqueueAction(action);
	},
    showSpinner : function(component, event)
    {
        component.set("v.Spinner", true);
    },
    hideSpinner : function(component, event)
    {
        component.set("v.Spinner", false);
    },
    toast: function(title, msg, type, mode, duration){
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
                 'title': title,
                 'message': msg,
                 'type': type,
                 'mode': mode,
                 'duration': duration || 0
         });
         toastEvent.fire();
    }
})