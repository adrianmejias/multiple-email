multiple-email
==========

Enter multiple email address using a single input field.

Example multiple email usage
------------

```html
<input type="email">
```

```javascript
$('input[type=email]').multipleEmail({
  attr: {
    size: 65,
    placeholder: 'Enter your email address followed by comma, space, tab or enter'
  }
});
```

Available options
------------

* ``attr``: **array** Custom attributes to be placed in cloned input field.
* ``classes``: **string** Custom classes to be placed in cloned input field.
* ``complete``: **object** Used as a fallback for server-side.

```javascript
$('input[type=email]').multipleEmail({
  attr: {},
  classes: null,
  complete: function (){}
});
```