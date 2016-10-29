define(['jquery', 'backbone', 'model'], function($, Backbone, Item)
{ 
    var ItemList = Backbone.Collection.extend({
        model: Item,
        
        getAllCalories: function()
        {
            var total = 0;
            $.each(this.models, function()
            {
                total += this.get("calorieCount");
            });
            return total;
        }
    
    });
    return ItemList;
    
});