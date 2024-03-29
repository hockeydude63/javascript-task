tasksController = function() {
    function errorLogger(errorCode, errorMessage) {
        console.log(errorCode + ':' + errorMessage);
    }

    var taskPage;
    var initialised = false;

    return {
        init:function(page) {
            storageEngine.init(function() {
                storageEnginge.initObjectStore('task', function() {
                }, errorLogger)
            }, errorLogger);
            if (!initialised) {
                taskPage = page;
                $(taskPage).find('[required="required"]').prev('label').append('<span>*</span>').children('span').addClass('required');

                $(taskPage).find('tbody tr:even').addClass('even');

                $(taskPage).find('#btnAddTask').click(function(evt) {
                    evt.preventDefault();
                    $(taskPage).find('#taskCreation').removeClass('not');
                });

                $(taskPage).find('tbody tr').click(function(evt) {
                    $(evt.targetn).closest('td').siblings().addBack().toggleClass('rowHighlight');
                });

                $(taskPage).find('#tblTasks tbody').on('click', '.deleteRow', function (evt) {
                    evt.preventDefault;
                    $(evt.target).parents('tr').remove();
                });

                $(taskPage).find('#saveTask').click(function (evt) {
                    evt.preventDefault();
                    if($(taskPage).find('form').valid()) {
                        var task = $('form').toObject();
                        storageEngine.save('task', task, function(savedTask) {
                            $('#taskRow').tmpl(task).appendTo($('#tblTasks tbody'));
                        }, errorLogger);
                    }
                });
                
                initialised = true;
            }
        }
    }
}();