(function ($, window) {

    new TableExport($('table'), {formats: ['xlsx', 'xls', 'csv', 'txt'], fileName: "contact-list", bootstrap: true})

}).call(this, jQuery, window);
