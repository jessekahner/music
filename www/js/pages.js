// Generated by CoffeeScript 1.6.3
(function() {
  var Pages;

  Pages = {
    config: {
      path: 'views/',
      extention: 'php'
    },
    loadPage: function(page, $container, options, callback) {
      var _callback;
      _callback = function() {
        var $script, _html, _template;
        $script = $('#' + page);
        _template = Handlebars.compile($script.html());
        _html = _template(options);
        return $($container).html(_html);
      };
      if ($('#' + page).length) {
        _callback.call(this);
        return callback.call();
      } else {
        return $.get(this.config.path + page + '.' + this.config.extention, function(data) {
          var $script;
          $script = $('<script id="' + page + '" />').attr('type', 'text/x-handlebars-template').html(data);
          $script.appendTo($('body'));
          _callback.call();
          return callback.call();
        });
      }
    }
  };

  window.Pages = Pages;

}).call(this);
