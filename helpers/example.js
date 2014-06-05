module.exports.register = function(Handlebars) {
  Handlebars.registerHelper('example', function (options) {
    var wrapped = Handlebars.helpers.markdown.apply(this, arguments),
        id = makeId();
    return new Handlebars.SafeString('<div class="code-example"><label for="' + id + '">Examples</label><input id="' + id + '" type="checkbox"/>' + wrapped + '</div>');
  });
};

//https://gist.github.com/gordonbrander/2230317
function makeId() {
  return '_' + Math.random().toString(36).substr(2, 9);
};
