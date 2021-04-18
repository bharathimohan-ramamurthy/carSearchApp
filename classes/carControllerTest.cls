/*
    Author : Bharathimohan Ramamurthy
    CreatedDate : 08/11/2017
    Component Name : carControllerTest
*/

@isTest
private class carControllerTest
{

    @testSetup static void setup() 
    {
        List<Car__c> cars = new List<Car__c>();
        for(Integer i=0;i<20;i++)
            cars.add(new Car__c(
                Name = 'Test Car-'+i,
                Image_Tag__c = 'Img.jpg',
                Production_Year_Start__c = 2000,
                Production_Year_End__c = 2099,
                Sales_Details__c = 'Test Data'
            ));
        insert cars;        
    }
    
    @isTest static void getCarRecordsTest()
    {
        PagedResultInfo  pg = carController.getCarRecords('Test Car',1,10);
        system.assert(pg!=null);
        system.assertEquals(pg.pageSize,10);
        system.assertEquals(pg.currentPage,1);
        system.assertEquals(pg.totalRecords,20);
        system.assertEquals(pg.carList.size(),10);
    }
}