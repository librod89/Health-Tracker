define(['backbone'], function(Backbone)
{ 
    var Item = Backbone.Model.extend({
        defaults: {
            name: null,
            calorieCount: 0
        }
    });
    
    return Item;
});