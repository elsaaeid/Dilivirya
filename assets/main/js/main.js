
//  Form group

$(document).ready(function() {
    $('.select2').select2({
        minimumResultsForSearch: 2
    });
});

//  Datatable

$(document).ready( function () {
    $('.full-table').DataTable({
        "searching": false,
        "bLengthChange": false,
        "bFilter": true,
        "aaSorting": [],
        pagingType: 'simple',
        pageLength: 10,
        language: {
         oPaginate: {
           sNext: '<i class="bi bi-chevron-right"></i>',
           sPrevious: '<i class="bi bi-chevron-left"></i>',
           },
           "info": " _START_&#45;_END_ &#47;  _TOTAL_ ",
        }   
    });
} );