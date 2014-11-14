multiple-email
==========

Enter multiple email address using a single input field.

Example multiple email usage
------------

**Demo:** https://adrianmejias.com/multiple-email

```html
<!-- Include jQuery Beforehand -->
<link href="multiple-email.css" rel="stylesheet">
<script src="multiple-email.js"></script>
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

* ``populate``: **array** Custom emails to be placed in email listing.
* ``attr``: **array** Custom attributes to be placed in cloned input field.
* ``classes``: **string** Custom classes to be placed in cloned input field.
* ``complete``: **object** Used as a fallback for server-side.

```javascript
$('input[type=email]').multipleEmail({
  populate: [],
  attr: {},
  classes: null,
  complete: function (){}
});
```