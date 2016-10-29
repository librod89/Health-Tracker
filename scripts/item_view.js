define(['jquery', 'backbone'], function($, Backbone)
{ 
    var ItemView = Backbone.View.extend({
        tagname: 'tr',
        
        initialize: function()
        {
        },
        
        render: function()
        {
            this.$el.html('<tr><td>' + this.model.get('name') + '</td><td>' +
                          this.model.get('calorieCount') + '</td></tr>');
            return this;    
        }
    
    });
    return ItemView;
});