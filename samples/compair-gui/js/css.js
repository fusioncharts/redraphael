var UNDEF,
    appliedCSS = ['fontFamily', 'fontSize', 'fontWeight', 'fontStyle'],
    R = RedRaphael,
    eve = R.eve,
    g = R._g,
    paperproto = R.fn,
    elproto = R.el,
    separator = /[, ]+/,
    E = '',
    S = ' ',
    cssStyleRegEx = /\B([A-Z]{1})/g,
    TITLE_STR = 'fusioncharts-raphael-stylesheet',
    StyleSheet,
    sheetproto;

    /**
     * Manage Stylesheet on a page.
     *
     * @constructor
     * @private
     */
  StyleSheet = function (ns) {
    this.styleSheet = E;
    this.rules = {};
    this.ns = ns || E;
  };

  sheetproto = StyleSheet.prototype;

  /**
     * Gets the stylesheet node associated with this instance or creates new if not already.
     * @return {HTMLStyleElement}
     */
  sheetproto.getSheet = function () {
    var node = this.node;
    // Find if there is already a styleSheet in the page with title as TITLE_STR
    this.styleSheet = sheetproto.getStyleSheet(TITLE_STR);

    // If styleSheet doesn't exist, create the styleSheet and
    // set the title and other attribute.
    // This style sheet will be shared by all instances of FusionCharts.
    if (!this.styleSheet) {
      // Create a style node and append it to page head.
      node = this.node = g.doc.createElement('style');
      node.setAttribute('id', R.format('raphael-stylesheet-{0}', R._oid++)); // set an id to the sheet
      node.setAttribute('type', 'text/css');
      node.setAttribute('title', TITLE_STR); // set a title to the sheet
      (g.doc.head || g.doc.getElementsByTagName('head')[0]).appendChild(this.node); // attach to page
      this.styleSheet = sheetproto.getStyleSheet(TITLE_STR);
    }

    return this.styleSheet;
  };

  /**
     * Gets the stylesheet by title.
     * @param {string} title
     * @return {document.styleSheets}
     */
  sheetproto.getStyleSheet = function (title) {
    var styleSheets = g.doc.styleSheets,
      len = styleSheets.length,
      sheet;
    // Iterate through all style sheets in the page and find the FusionCharts style
    // by comparing with TITLE_STR
    while (len--) {
      sheet = styleSheets[len];
      if (sheet.title === title) {
        return sheet;
      }
    }
  };

  /**
     * Apply the css rule to the stylesheet.
     * @param {string} selector
     * @param {string} rule
     */
  sheetproto.applyCSSRule = function (selector, rule) {
    var styleSheet = this.styleSheet,
      rules,
      len;

    if (!styleSheet) {
      if (selector && rule) {
        styleSheet = this.getSheet();
      } else {
        // Nothing to set and no node to set anything to. Hence, nothing to do!
        return;
      }
    }

    rules = styleSheet.rules || styleSheet.cssRules || {};
    len = rules.length || 0;
    // Check whether it support the style insertStyle or addCss
    if (styleSheet.insertRule) {
      styleSheet.insertRule(selector + '{' + rule + '}', len);
    } else if (styleSheet.addRule) {
      styleSheet.addRule(selector, rule, len);
    }
  };

  /**
     * Removes the css rule from the stylesheet.
     * @param {string} selector
     */
  sheetproto.removeCSS = function (selector) {
    var styleSheet = this.styleSheet,
      rules = styleSheet.rules || styleSheet.cssRules || {},
      len = rules.length || 0,
      rule;

    selector = selector || this.ns;
    while (len--) {
      rule = rules[len];
      if (new RegExp(selector).test(rule.selectorText)) {
        // Delete the style
        if (styleSheet.removeRule) {
          styleSheet.removeRule(len);
        } else {
          styleSheet.deleteRule(len);
        }
      }
    }
  };

  /**
     * Disposes the stylesheet object.
     * @memberOf StyleSheet#
     */
  sheetproto.destroy = function () {
    this.removeCSS();
    delete this.node;
    delete this.styleSheet;
    delete this.ns;
    delete this.rules;
  };

  /**
     * Clears all css rules.
     * @memberOf StyleSheet#
     */
  sheetproto.clear = function () {
    this.removeCSS();
    this.rules = {};
  };

  /**
     * Adds a css rule
     * @memberOf StyleSheet#
     *
     * @param {string} selector
     * @param {Object} styles
     */
  sheetproto.add = function (selector, styles, compressed) {
    var prop,
      css = E,
      s = this.rules[selector] || (this.rules[selector] = {}),
      indent = compressed ? E : '\t',
      keyseparator = compressed ? ':' : ': ';

    for (prop in styles) {
      (s[prop] = styles[prop]) && (css += indent + prop.replace(cssStyleRegEx, '-$1').toLowerCase() +
                keyseparator + s[prop] + ';');
    }
    this.applyCSSRule(selector, css);
  };

  /**
     * Renders a stylesheet after it is updated.
     * @memberOf StyleSheet#
     */
  sheetproto.render = function () {
    this.setCssText();
  };

  /**
     * Sets css text on style node
     * @private
     * @param {string} cssText
     */
  sheetproto.setCssText = function (compressed) {
    var indent = compressed ? E : '\t',
      keyseparator = compressed ? ':' : ': ',
      css = E,
      selector = E,
      rule,
      prop;

    // Convert the css rules object to css text
    for (rule in this.rules) {
      css = E;
      selector = rule.replace(/(^|\,)/g, '$1' + this.ns + S);
      rule = this.rules[rule];
      for (prop in rule) {
        rule[prop] && (css += indent + prop.replace(cssStyleRegEx, '-$1').toLowerCase() + keyseparator +
                    rule[prop] + ';');
      }
      this.applyCSSRule(selector, css);
    }
  };

  // Initialise stylesheet for new papers.
  eve.on('raphael.new', function () {
    this._stylesheet = this._stylesheet || new StyleSheet();
    this.cssNamespace(E);
  });

  // Remove stylesheet on paper dispose
  eve.on('raphael.remove', function () {
    this._stylesheet && this._stylesheet.destroy();
    delete this._stylesheet;
  });

  /**
     * Sets the namespace of the stylesheet associated with a paper
     * @param {string} ns
     */
  paperproto.cssNamespace = function (ns) {
    if (arguments.length) {
      // ensure strict paper locked namespace
      this._stylesheet.ns = R.format('{0}#raphael-paper-{1}', (ns && ns + S) || E, this.id);
    }
    return this._stylesheet.ns;
  };

  /**
     * Adds a css rule to the paper. The function can also accept a single object as argument having selectors as keys
     * and their corresponding style objects.
     *
     * @param {string} selector
     * @param {Object} styles
     */
  paperproto.cssAddRule = function (selector, styles) {
    if (arguments.length === 1 && (typeof selector === 'object')) { // support object style
      for (var prop in selector) {
        this.cssAddRule(prop, selector[prop]);
      }
      return this;
    }
    return (this._stylesheet.add(selector, styles), this);
  };

  /**
     * Renders a stylesheet after it is updated.
     */
  paperproto.cssRender = function () {
    return (R.svg && this._stylesheet.render(), this);
  };

  /**
     * Removes all css rules.
     */
  paperproto.cssClear = function () {
    return (this._stylesheet.clear(), this);
  };

  R.ca['class'] = function (value) {
    var o = this,
      node = o.node,
      paper = o.paper,
      selector = '.' + value,
      styleRules = paper._stylesheet && paper._stylesheet.rules,
      target = o.parent,
      attrs = o.attrs,
      cssObj = {},
      rule,
      targetClass,
      i;
    if (R.svg) {
      value = value || E;
      node.setAttribute('class', (o.type === 'group' && o._id) ?
        'raphael-group-' + o.id + '-' + o._id + S + value : value);
    } else if (R.vml) {
      // Special handling for VML based browsers
      (node.className = (o.type === 'group') ? (value && (o._id + S + value)) || o._id : ('rvml ' + value));

      /** @todo Implement stylesheet for VML */
      // Since vml does not play nice with dynamic css and styles  we have to explicitly apply the attributes to
      // the element. We traverse up all the parent elements and procure their classes.
      if (selector && styleRules) {
        rule = styleRules[selector];
        for (i in rule) {
          (i === 'color' && o.type === 'text') && (i = 'fill');
          !attrs[i] && (cssObj[i] = rule[i]);
        }

        while (target && target.attr) {
          if ((targetClass = target.attr('class'))) {
            selector = ('.' + targetClass + S + selector);
            rule = styleRules[selector];
            for (i in rule) {
              (i === 'color' && o.type === 'text') && (i = 'fill');
              !attrs[i] && !cssObj[i] && (cssObj[i] = rule[i]);
            }
          }
          target = target.parent;
        }

        o.css(cssObj);
      }
    }
  };

  /**
     * Support for element.css
     * @param {string} name
     * @param {value} value
     */
  elproto.css = function (name, value, doNotTune) {
    var names,
      params,
      out,
      otherkey,
      doattrs,
      i,
      ii;

    // do not parse css in case element is removed.
    if (this.removed) {
      return this;
    }

    if (!this.styles) {
      this.styles = {};
    }

    // process as getter when a single key is sent as parameter.
    if (value === UNDEF && R.is(name, 'string')) {
      names = name.split(separator);
      out = {};
      for (i = 0, ii = names.length; i < ii; i++) {
        name = names[i];
        if (name in this.styles) {
          out[name] = this.styles[name];
        }
      }
      return ii - 1 ? out : out[names[0]];
    }
    // process as getter when multiple keys are pre-sent as array.
    if (value === UNDEF && R.is(name, 'array')) {
      out = {};
      for (i = 0, ii = name.length; i < ii; i++) {
        out[name[i]] = this.styles(name[i]);
      }
      return out;
    }

    // convert single key-value setter into object style standard.
    if (value !== UNDEF) {
      params = {};
      params[name] = value;
    } else if (name && R.is(name, 'object')) {
      params = name;
    }
    // iterate on keys and set style or raise events.
    doattrs = {};
    for (i in params) {
      otherkey = i.replace(/\B([A-Z]{1})/g, '-$1').toLowerCase();

      // If keys are supported via attr then use attr instead of css.
      if (R._availableAttrs.hasOwnProperty(otherkey) || otherkey === 'color') {
        // Replace 'color' with fill
        (otherkey === 'color' && this.type === 'text') && (otherkey = 'fill');

        doattrs[otherkey] = params[i];
        doattrs.dirty = true;
        continue;
      }
      eve('raphael.css.' + otherkey + '.' + this.id, this, params[i], otherkey);
      this.node.style[otherkey] = params[i];
      this.styles[otherkey] = params[i];
    }
    // run on followers
    for (i = 0, ii = this.followers.length; i < ii; i++) {
      this.followers[i].el.attr(params);
    }
    // apply css via attrs
    if (doattrs.hasOwnProperty('dirty')) {
      delete doattrs.dirty;
      doNotTune && (doattrs['_do-not-tune'] = true);
      this.attr(doattrs);
    }
    return this;
  };
  /**
     * Support for element.removeCSS
     * @params {array} - list of css to be removed so that parent group css can be inherited.
     */
  elproto.removeCSS = function (params) {
    var element = this,
      param,
      i,
      len;
    !params && (params = appliedCSS);

    if (this.removed) {
      return this;
    }

    if (R.is(params, 'string')) {
      params = params.split(',');
    }

    if (R.is(params, 'array')) {
      len = params.length;
      for (i = 0; i < len; i++) {
        param = params[i].replace(/\B([A-Z]{1})/g, '-$1').toLowerCase();
        element.node.removeAttribute(param);
        element.node.style[param] = '';
      }
    }

    return this;
  };