# RedRaphael - A JavaScript graphics library on steroids!

[![Build Status](https://travis-ci.org/fusioncharts/redraphael.png?branch=master)](https://travis-ci.org/fusioncharts/redraphael)

## Usage
RedRaphael is a fork of Raphael with a number of added features and slightly changed development philosophy.
The best place to start is the API and usage docuentation.

To learn how to use RedRaphael visit [documentation page](http://fusioncharts.github.io/redraphael/)

## RedRaphael specific features

Here is a brief overview of added benefits of using RedRaphael.

### Group

Creating a RedRaphael group
```js
var mygroup = paper.group([optional_group_name]);
```

Adding elements to a group
```js
var myrect = paper.rect(x, y, width, height, mygroup);
```

```
NOTE: Irrespective of the number of arguments needed to be passed to the Element construtor,
passing the group element as the last argument will ensure that the element gets added to the group.
So the following are all valid ways of adding elements to groups.

var myrect = paper.rect(mygroup);

var myrect = paper.rect(x, y, mygroup);
```

You can also add an existing element to a group using the `appendChild` method.

```js
var mycircle = paper.circle(x, y, radius); // Added directly to the paper

mygroup.appendChild(mycircle);
```

Groups come in especially handy when you have to perform transformations on the collection as a whole.


### Followers & Stalkers

Any element in RedRaphael can be converted into a follower element (or stalker element) by invoking the
`follow` method.

`element.follow(<target_element>, [supervisor_function], ['before' || 'after']);`

The supervisor function, when provided, governs how the target element's attributes control the attributes
of the follower element. The supervisor function is invoked whenever the attributes of the target element
are changed using the `element.attr` method.

The third argument, when provided will make the follower element position the itself w.r.t to the target
element based on the value of the parameter. If the target element is now moved around the DOM tree using
Raphael methods `insertBefore` or `insertAfter` etc, the follower (now a stalker) will also move along with
it.

[Check out a demo here](http://jsfiddle.net/sushantbs/xZrwe/4/)


### Custom Attributes

With RedRaphaelel, custom attributes can be added per element using `element.ca` object.

```js
var rectEl = paper.rect(x, y, width, height);

rectEl.ca.borderWidth = function (value) {
	this.attr('stroke-width', value);

	// Returning false will prevent the attribute from being processed
	// any further by the element.attr method
	return false;
}

// Using the custom attributes
rectEl.attr('borderWidth', '5');
```

Note: The original Raphael way of adding [custom attributes](http://raphaeljs.com/reference.html#Paper.ca) is also supported.


### Raphael.define

RedRaphel has encapsulated all the ways of extending the framework in the `define` API.

```js
Raphael.define(
	name,
	initializing_funciton,
	custom_attributes,
	element_specific_methods,
	pre_defined_eventlisteners
);

Raphael.define({
    name: 'componentName',
    componentName: initializing_funciton,
    ca: { /* custom_attributes */ },
    fn: { /* element_specific_methods */ },
    e: { /* pre_defined_eventlisteners */ },
    data: { /* element_specific_data */ }
});
```

[See it in action](http://jsfiddle.net/sushantbs/khBQj/6/)


## Undocumented features and improvements

- array as multi-line text
- directly pass attr object during element construction
- Support for alpha on every gradient stop in SVG and support for first and last alpha in VML
- Support for radial gradient on every shape and support for gradient radius using `xr(fx,fy,r,cx,cy,unit)`
- Suport for linear gradient options `angle(units,spread)`
- Support for `shape-rendering` attribute
- `R.cispBound` amd `Element.crisp` for avoiding sub-pixel blurring
- Global mouseUp tracking using el.mouseup(fn, scope, true);
- Support for customizable dash-style
- Support for attribute `key` in attr.* events
- Support for Raphael.ca for common customAttributes across papers
- Support for text-bound: [stroke, fill, stroke-width, padding, corner-radius, dash-style] on texts
- Support for opacity in fill color (rgba, hsla, etc) for elements
- Support for `visibility` on elements via attr
- Support for element rotation via rotation attr
- Support for `vertical-align` attr on text


## Guidelines for contribution

Fork and send PR!


[![Analytics](https://ga-beacon.appspot.com/UA-45124206-2/redraphael/index)](https://github.com/igrigorik/ga-beacon)
