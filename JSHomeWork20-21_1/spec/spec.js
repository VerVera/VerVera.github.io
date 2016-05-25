//var app = require('../js/app.js');

var app = require('../js/src/script.js');


describe("testing pow function", function(){

        it("pow()", function() {
            var result;
            result = app.pow(2, 2);
            expect(result).toBe(4);
        });

});

describe("testing isInteger function", function(){

    it("isInteger()", function() {
        var result;
        result = app.isInteger(5);
        expect(result).toEqual(true);
    });

});