var APPID = '5be24a4f';
var APPKEY = 'c1c1bff5097d886c7bf8f3ec1ee0432b';
var NUTRITIONIX = 'https://api.nutritionix.com/v1_1/';

requirejs.config({
    "baseUrl": "bower_components",
    "paths": {
        "jquery": "jquery/dist/jquery",
        "underscore": "underscore-amd/underscore",
        "backbone": "backbone-amd/backbone",
        "model": "../scripts/model",
        "collection": "../scripts/collection",
        "item_view": "../scripts/item_view",
        "app_view": "../scripts/app_view",
        "app": "../scripts/app"
    }
    
});
requirejs(["collection"]);
requirejs(["model"]);
requirejs(["item_view"]);
requirejs(["app_view"]);
requirejs(["app"]);