$(function()
{
  var Item = Backbone.Model.extend({
    defaults: {
        name: null,
        calorieCount: 0
    }
  });
  
  var ItemList = Backbone.Collection.extend({
    model: Item
  });
  
  var items = new ItemList();
  
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
  
  var App = Backbone.View.extend({
    el: $('body'),
    
    events: {
			'keypress #itemSearch': 'createOnEnter'
    },
    
    initialize: function()
    {
        this.dataTable = $('#dataTable');
        
        this.listenTo(items, 'change', this.render);

        
        
    },
    
    render: function()
    {
        return this;
    },
    
    createItemView: function(item)
    {
        var view = new ItemView({ model: item });
        $('#tableBody tr:last').after(view.render().$el.html());
        return this;
    },
    
    createOnEnter: function (e) {
        if (e.which === 13 && $(e.currentTarget).val().trim()) {
            var item = new Item({name: $(e.currentTarget).val()});
            items.add(item);
            this.createItemView(item);
            $(e.currentTarget).val('');
           
        }
    }
  });
  
  new App();
  
});