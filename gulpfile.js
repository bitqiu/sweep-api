var elixir = require('laravel-elixir');

elixir.config.publicPath = 'public/assets';
/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.less('app.less');
    mix.less('less/skins/skin-blue.less', 'public/assets/css/skins/skin-blue.css');
    mix.less('less/skins/skin-blue-light.less', 'public/assets/css/skins/skin-blue-light.css');
    mix.less('less/skins/skin-black.less', 'public/assets/css/skins/skin-black.css');
    mix.less('less/skins/skin-black-light.less', 'public/assets/css/skins/skin-black-light.css');
    mix.less('less/skins/skin-yellow.less', 'public/assets/css/skins/skin-yellow.css');
    mix.less('less/skins/skin-yellow-light.less', 'public/assets/css/skins/skin-yellow-light.css');
    mix.less('less/skins/skin-green.less', 'public/assets/css/skins/skin-green.css');
    mix.less('less/skins/skin-green-light.less', 'public/assets/css/skins/skin-green-light.css');
    mix.less('less/skins/skin-red.less', 'public/assets/css/skins/skin-red.css');
    mix.less('less/skins/skin-red-light.less', 'public/assets/css/skins/skin-red-light.css');
    mix.less('less/skins/skin-purple.less', 'public/assets/css/skins/skin-purple.css');
    mix.less('less/skins/skin-purple-light.less', 'public/assets/css/skins/skin-purple-light.css');
});
