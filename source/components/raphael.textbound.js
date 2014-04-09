window.Raphael && (window.Raphael.define && function (R) {
    var TEXTBOUND = 'text-bound',
        NONE = 'none',
        BLANK = '',
        CRISP = 'crisp',
        toFloat = parseFloat,
        toStr = String,
        reposition;

    R.ca[TEXTBOUND] = function (fill, stroke, strokeWidth, padding, cornerRadius, dasharray) {
        var o = this,
            paper = o.paper,
            bound = o._.textbound;

        if (this.type !== 'text') {
            return;
        }

        if ((!stroke || stroke === NONE) && (!fill || fill === NONE)) {
            o._.textbound = (bound && bound.unfollow(o).remove());
            return false;
        }

        (!strokeWidth || !R.is(strokeWidth, 'finite')) && (strokeWidth = 0);
        (!cornerRadius || !R.is(cornerRadius, 'finite')) && (cornerRadius = 0);
        !bound && (bound = o._.textbound = paper.rect(0, 0, 0, 0, o.group)
            .follow(o, R.ca[TEXTBOUND].reposition, 'before'));

        bound.attr({
            'stroke': stroke,
            'stroke-width': strokeWidth,
            'fill': fill,
            'shape-rendering': (strokeWidth === 1) && CRISP || BLANK,
            r: cornerRadius
        });
        dasharray && bound.attr('stroke-dasharray', dasharray);

        // Call the repositioning function
        reposition.call(bound, o.attr(), o);
        return false;
    };

    reposition = R.ca[TEXTBOUND].reposition = function (params, leader) {
        var o = this,
            updates = {},
            attr,
            padding,
            padX,
            padY,
            bbox,
            w,
            h;

        // check visibility first
        if (params.hasOwnProperty('visibility')) {
            o.attr('visibility', params.visibility);
        }

        // filter out the attributes that affects text-bound.
        if (!(params.hasOwnProperty(TEXTBOUND) || params.hasOwnProperty('x') || params.hasOwnProperty('y') ||
                params.hasOwnProperty('text') || params.hasOwnProperty('text-anchor') ||
                params.hasOwnProperty('text-align') || params.hasOwnProperty('font-size') ||
                params.hasOwnProperty('line-height') || params.hasOwnProperty('vertical-align') ||
                params.hasOwnProperty('transform') || params.hasOwnProperty('rotation'))) {
            return;
        }

        attr = leader.attrs[TEXTBOUND] || [];
        padding = toStr(attr[3] || '0').split(/\s*\,\s*/g);
        padX = toFloat(padding[0]) || 0;
        padY = R.pick(toFloat(padding[1]), padX);
        bbox = leader.getBBox();
        w = bbox.width;
        h = bbox.height;

        // In case bounding box failed to return value, we do not need to
        // change position.
        if (!isNaN(w)) {
            updates.x = bbox.x - padX;
            updates.y = bbox.y - padY;
            updates.width = w + padX * 2;
            updates.height = h + padY * 2;
        }

        o.attr(updates);
    };
})(window.Raphael);
