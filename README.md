# RedRapha�l - A JavaScript graphics library on steroids!

RedRapha�l is a graphics library built on the foundation laid down by Rapha�l.

## Getting started

- `git clone https://github.com/fusioncharts/redraphael.git`

- `git submodule init && git init && npm install`


## Dependencies

- [eve](https://github.com/adobe-webplatform/eve)
- [grunt](https://github.com/gruntjs/grunt)


## Usage

To learn how to use Rapha�l visit their [documentaiton page](www.raphaeljs.com/reference.html)


## RedRaphael specific features

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
NOTE: Irrespective of the number of arguments needed to be passed to the
Element construtor, passing the group element as the last argument will ensure that the element gets added to the group. So the following are all valid ways of adding elements to groups.

var myrect = paper.rect(mygroup);

var myrect = paper.rect(x, y, mygroup);
```

You can also add an existing element to a group using the appendChild method.

```js
var mycircle = paper.circle(x, y, radius); // Added directly to the paper

mygroup.appendChild(mycircle);
```

Groups come in especially handy when you have to perform transformations on the collection as a whole.


### Followers & Stalkers


### Custom Attributes


### Raphael.define


## Guidelines for contribution




