---
title: Partials
---
A partial is a template snippet which can be inserted into templates, or indeed other partials. They help to keep templates uncluttered and easy to read. In this example, we're creating a `\{{>thumbnail}}` partial:

```html
<!-- the main template -->
<div class='gallery'>
  \{{#items}}
    \{{>thumbnail}}
  \{{/items}}
</div>
```

```html
<!-- the partial -->
<figure class='thumbnail'>
  <img src='assets/thumbnails/\{{id}}.jpg'>
  <figcaption>\{{description}}</figcaption>
</figure>
```

There are several ways to use partials.


### As an initialisation option

You can specify partials when you create a Ractive instance:

```js
ractive = new Ractive({
  el: myContainer,
  template: myTemplate,
  partials: { thumbnail: myThumbnailPartial },
  data: { items: myItems }
});
```

Here, `myThumbnailPartial` can be a {{{createLink 'templates' 'string template'}}} or a {{{createLink 'preparsing' 'parsed template'}}}.


### As a globally available partial

Equally, you can make partials globally available by adding them to {{{createLink 'ractive-partials-global' 'Ractive.partials'}}}:

```js
Ractive.partials.thumbnail = myThumbnailPartial;
```

Again, this can be a string template or parsed template - if a string, it will be parsed when it first gets used and stored as a parsed template thereafter.


### As a script tag

This method is particularly convenient if you don't want to load templates via AJAX:

```html
<script id='thumbnail' type='text/ractive'>
  <figure class='thumbnail'>
    <img src='assets/thumbnails/\{{id}}.jpg'>
    <figcaption>\{{description}}</figcaption>
  </figure>
</script>
```

The `type` attribute isn't important, as long as it exists and isn't `text/javascript`. All that matters is that it's a script tag whose `id` attribute matches the name of the partial.

Internally, when a template requests the `\{{>thumbnail}}` partial, Ractive will look for it on {{{createLink 'ractive-partials-instance' 'ractive.partials'}}}, then [Ractive.partials](ractive-partials-global), and if both of those fail it will then look for an element with an `id` of `thumbnail`. If it exists, it will parse its content and store it on {{{createLink 'ractive-partials-global' 'Ractive.partials'}}}, to make subsequent lookups quicker.



### Inline partials

It is also possible to embed partials within templates. Suppose you have a single `mainTemplate.html` file. You can define any partials within it by wrapping them in comments that follow this structure:

```html
<div class='gallery'>
  \{{#items}}
    \{{>thumbnail}}
  \{{/items}}
</div>

<!-- \{{>thumbnail}} -->
<figure class='thumbnail'>
  <img src='assets/thumbnails/\{{id}}.jpg'>
  <figcaption>\{{description}}</figcaption>
</figure>
<!-- \{{/thumbnail}} -->
```

In this case, the `thumbnail` partial won't be globally available - it will only be available to Ractive instances that use this template.


## Recursive partials

Partials can be used *recursively*:

```html
<div class='fileSystem'>
  \{{#root}}
    \{{>folder}}
  \{{/root}}
</div>

<!-- \{{>folder}} -->
<ul class='folder'>
  \{{#files}}
    \{{>file}}
  \{{/files}}
</ul>
<!-- \{{/folder}} -->

<!-- \{{>file}} -->
<li class='file'>
  <img class='icon-\{{type}}'>
  <span>\{{filename}}</span>

  <!-- if this is actually a folder, embed the folder partial -->
  \{{# type === 'folder' }}
    \{{>folder}}
  \{{/ type === 'folder' }}
</li>
<!-- \{{/file}} -->
```

```js
rv = new Ractive({
  el: 'container',
  template: '#myTemplate',
  data: {
    root: {
      files: [
        { type: 'jpg', filename: 'hello.jpg' },
        { type: 'mp3', filename: 'NeverGonna.mp3' },
        { type: 'folder', filename: 'subfolder', files: [
          { type: 'txt', filename: 'README.txt' },
          { type: 'folder', filename: 'rabbithole', files: [
            { type: 'txt', filename: 'Inception.txt' }
          ]}
        ]}
      ]
    }
  }
});
```

In the example above, subfolders use the `\{{>folder}}` partial, which uses the `\{{>file}}` partial for each file, and if any of those files are folders, the `\{{>folder}}` partial will be invoked again, and so on until there are no more files.

Beware of cyclical data structures! Ractive makes no attempt to detect cyclicality, and will happily continue rendering partials until the [Big Crunch](http://en.wikipedia.org/wiki/Big_Crunch) (or your browser exceeds its maximum call stack size. Whichever is sooner).


## Injecting partials

One good use of partials is to vary the shape of a template according to some condition, the same way you might use [dependency injection](http://en.wikipedia.org/wiki/Dependency_injection) elsewhere in your code.

For example, you might offer a different view to mobile users:

```html
<div class='main'>
  <div class='content'>
    \{{>content}}
  </div>

  <div class='sidebar'>
    \{{>sidebar}}
  </div>
</div>
```

```js
isMobile = /mobile/i.test( navigator.userAgent ); // please don't do this in real life!

ractive = new Ractive({
  el: myContainer,
  template: myTemplate,
  partials: {
    content: isMobile ? mobileContentPartial : desktopContentPartial,
    sidebar: isMobile ? mobileSidebarPartial : desktopSidebarPartial
  }
});
```

Or you might make it possible to {{{createLink 'ractive-extend' 'extend'}}} a subclass without overriding its template:

```html
<div class='modal-background'>
  <div class='modal'>
    \{{>modalContent}}
  </div>
</div>
```

```js
// Create a Modal subclass
Modal = Ractive.extend({
  template: modalTemplate,
  init: function () {
    var self = this, resizeHandler;

    resizeHandler = function () {
      self.center();
    };

    // when the window resizes, keep the modal horizontally and vertically centred
    window.addEventListener( 'resize', resizeHandler );

    // clean up after ourselves later
    this.on( 'teardown', function () {
      window.removeEventListener( 'resize', resizeHandler );
    });

    // manually call this.center() the first time
    this.center();
  },
  center: function () {
    // centering logic goes here
  }
});

helloModal = new Modal({
  el: document.body,
  partials: {
    modalContent: '<p>Hello!</p><a class="modal-button" proxy-tap="close">Close</a>'
  }
});

helloModal.on( 'close', function () {
  this.teardown();
});
```
