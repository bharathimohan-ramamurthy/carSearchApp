({
	navigateToRecord : function(component, event, helper) {
        var car = component.get("v.car");
		var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
          "recordId": car.Id,
          "slideDevName": "related"
        });
        navEvt.fire();
	}
})