/**
 * Created by koste on 26.05.2016.
 */
requirejs.config({
    paths: {
        'jquery': "https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min"
    },
    shim: {
        'jquery': {
            exports: 'jQuery'
        }
    }
});


require(
    [
        'Model',
        'View',
        'Controller'
    ],

    function (Model, View, Controller) {
        var firstToDoList = ['Learn javascript', 'Learn HTML', 'Final Exam'];
        var model = new Model(firstToDoList);
        var view = new View(model);
        var controller = new Controller(model, view);
    }
);