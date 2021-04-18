global class PagedResultInfo
{
    @AuraEnabled
    public Integer pageSize {get;set;}
    
    @AuraEnabled
    public Integer currentPage {get;set;}
    
    @AuraEnabled
    public Integer totalPages {get;set;}
    
    @AuraEnabled
    public Integer totalRecords {get;set;}
    
    @AuraEnabled
    public List<Car__c> carList {get;set;}
}