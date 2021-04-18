({
	//Method to process Search
	searchCar : function(component, event, helper) {
		//Skip all key press other than Enter key
		if (event.keyCode !== 13) {
            return;
        }
        //Temp. variable to hold search text. Fire carSearchEvent with the inputted text.
		var searchTxt = event.target.value;
		if(typeof(searchTxt)!="undefined")
		{
			var evt = $A.get("e.c:carSearchEvent");
			evt.setParams({ "carName": searchTxt});
			evt.fire();
		}
	},
	//Method to clear Search Input Text. Fires carSearchEvent with blank text so it brings all records
	clearSearch : function(component, event, helper) {
		component.find("carName").getElement().value = "";
		var evt = $A.get("e.c:carSearchEvent");
		evt.setParams({ "carName" : ''});
		evt.fire();
	},
	//Method to toggle between Large Vs Small Tile. carPaginatorEvent 
	toggleTile : function(component, event, helper){
		var evt = $A.get("e.c:carSearchEvent");
		evt.setParams({"isLargeTile":component.get("v.isLargeTile")});
		evt.fire();
	}
})