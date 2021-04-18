/*
    Author : Bharathimohan Ramamurthy
    CreatedDate : 08/11/2017
    Component Name : carController
*/

public class carController
{ 
    @AuraEnabled
    public static PagedResultInfo getCarRecords(String searchKey,Decimal currentPage,Decimal pageSize) 
    {
        system.debug(searchKey);
        PagedResultInfo r =  new PagedResultInfo();
        Integer pSize = (Integer)pageSize;
        Integer offset = ((Integer)currentPage - 1) * pSize;
        r.pageSize = pSize;
        r.currentPage = (Integer)currentPage;
        String queryStr = 'Select Id,Name,Assembly__c,Image_Tag__c,Sales_Details__c,Production_Year_Start__c,Production_Year_End__c from Car__c';
        String whereCriteria ='';
        if(searchKey!='')
        {
            whereCriteria += ' where Name like \'%'+searchKey+'%\'';
        }

        r.totalRecords = (Integer)Database.Query('Select count(Id) cnt from Car__c'+(whereCriteria!=''?whereCriteria:''))[0].get('cnt');
        r.carList = new List<Car__c>();
        for(Car__c c:Database.Query(queryStr+whereCriteria+' ORDER BY NAME LIMIT :pSize OFFSET :offset'))
        {
            r.carList.add(c);
        }
        return r;
    }
}