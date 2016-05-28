/**
 * Created by koste on 27.05.2016.
 */
define('Controller', function () {
        var Controller = function (model, view) {
            var self = this;
            var oldItem;

            view.elements.addBtn.on('click', addItem);
            view.elements.listContainer.on('click', '.item-delete', removeItem);
            view.elements.listContainer.on('click', '.item-edit', editItem);

            function addItem() {
                var newItem = view.elements.input.val();
                if (view.elements.addBtn.text() === 'Save') {

                    model.editItem(newItem, oldItem);
                } else {
                    model.addItem(newItem);
                }

                view.renderList(model.data);
                view.elements.input.val('');
                view.elements.addBtn.text('Add');
            }

            function removeItem() {
                var item = $(this).attr('data-value');

                model.removeItem(item);
                view.renderList(model.data);
            }

            function editItem() {
                var item = $(this).attr('data-value');
                view.elements.input.val(item);
                oldItem = item;
                view.elements.addBtn.text('Save');
            }
        };
        return Controller;
    }
);