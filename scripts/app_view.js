define(['jquery', 'backbone', 'model', 'collection', 'item_view'],
       function($, Backbone, Item, ItemList, ItemView)
{    
    var App = Backbone.View.extend({
        el: $('body'),
        
        events: {
                'keypress #itemSearch': 'createOnEnter'
        },
        
        initialize: function()
        {
            this.items = new ItemList();
            this.listenTo(this.items, 'add', this.render);
            this.render();
        },
        
        render: function()
        {
            var total = this.items.getAllCalories();
            $('#totalCal').text(total);
            return this;
        },
        
        createItemView: function(item)
        {
            var view = new ItemView({ model: item });
            $('#tableBody tr:last').after(view.render().$el.html());
            this.items.add(item);
            return this;
        },
        
        createOnEnter: function (e) {
            if (e.which === 13 && $(e.currentTarget).val().trim()) {
                this.searchNutritionix($(e.currentTarget).val());
                $(e.currentTarget).val(''); 
            }
        },
        
        searchNutritionix: function(searchItem)
        {
            var self = this;
            $.ajax({ 
              type: 'GET', 
              url: NUTRITIONIX + "search/" + searchItem, 
              data: {
                "results": '0:1',
                "fields": 'nf_calories',
                "appId": APPID,
                "appKey": APPKEY
              }, 
              dataType: 'json',
              success: function (data) { 
                  self.itemNutritionix(data.hits[0]._id);    
              }
            });
        },
          
        itemNutritionix: function(itemId)
        {
            var self = this;
            $.ajax({ 
              type: 'GET', 
              url: NUTRITIONIX + "item", 
              data: {
                "id": itemId,
                "appId": APPID,
                "appKey": APPKEY
              }, 
              dataType: 'json',
              success: function (data) { 
                var item = new Item({name: data.item_name, calorieCount: data.nf_calories});
                self.createItemView(item);
              }
            });
        },
        
    });
    return App;
});