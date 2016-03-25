brewApi = (function() {
    var baseURL = "/api";
    
    return {
        getBatches: function(query) {
            return $.ajax({url: baseURL + "batches", data: query});
        }
    }
}());