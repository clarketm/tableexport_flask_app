(function ($, window) {

    new TableExport($('table'), {formats: ['xlsx', 'xls', 'csv', 'txt'], fileName: "contact-list"})

}).call(this, jQuery, window);
