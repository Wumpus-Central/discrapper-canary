function i(e) {
    return e && 'object' == typeof e && 'default' in e ? e.default : e;
}
Object.defineProperty(t, '__esModule', { value: !0 });
var r = i(n(532825)),
    a = n(550033),
    s = n(995295),
    o = n(179237),
    l = i(n(865481)),
    u = n(857967),
    c = n(698091),
    d = i(n(21217)),
    f = /^--/;
function _(e, t) {
    return null == t || 'boolean' == typeof t || '' === t ? '' : 'number' != typeof t || 0 === t || f.test(e) || (m.hasOwnProperty(e) && m[e]) ? ('' + t).trim() : t + 'px';
}
var p = {};
function h(e, t) {
    if (!e.nodeType || !e.setAttribute) return !1;
    var n = 'filter' === e.nodeName || (e.parentNode && 'filter' === e.parentNode.nodeName),
        i = t,
        a = i.style,
        s = i.children,
        o = i.scrollTop,
        l = i.scrollLeft,
        u = r(i, ['style', 'children', 'scrollTop', 'scrollLeft']),
        d = Object.values(u),
        h = Object.keys(u).map(function (t) {
            return n || e.hasAttribute(t)
                ? t
                : p[t] ||
                      (p[t] = t.replace(/([A-Z])/g, function (e) {
                          return '-' + e.toLowerCase();
                      }));
        });
    c.Globals.frameLoop.onWrite(function () {
        for (var t in (void 0 !== s && (e.textContent = s), a))
            if (a.hasOwnProperty(t)) {
                var n = _(t, a[t]);
                'float' === t ? (t = 'cssFloat') : f.test(t) ? e.style.setProperty(t, n) : (e.style[t] = n);
            }
        h.forEach(function (t, n) {
            e.setAttribute(t, d[n]);
        }),
            void 0 !== o && (e.scrollTop = o),
            void 0 !== l && (e.scrollLeft = l);
    });
}
var m = {
        animationIterationCount: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    },
    g = function (e, t) {
        return e + t.charAt(0).toUpperCase() + t.substring(1);
    },
    E = ['Webkit', 'Ms', 'Moz', 'O'];
m = Object.keys(m).reduce(function (e, t) {
    return (
        E.forEach(function (n) {
            return (e[g(n, t)] = e[t]);
        }),
        e
    );
}, m);
var v = /^(matrix|translate|scale|rotate|skew)/,
    y = /^(translate)/,
    I = /^(rotate|skew)/,
    b = function (e, t) {
        return c.is.num(e) && 0 !== e ? e + t : e;
    },
    T = function e(t, n) {
        return c.is.arr(t)
            ? t.every(function (t) {
                  return e(t, n);
              })
            : c.is.num(t)
              ? t === n
              : parseFloat(t) === n;
    },
    S = (function (e) {
        function t(t) {
            var n = t.x,
                i = t.y,
                a = t.z,
                s = r(t, ['x', 'y', 'z']),
                o = [],
                l = [];
            return (
                (n || i || a) &&
                    (o.push([n || 0, i || 0, a || 0]),
                    l.push(function (e) {
                        return [
                            'translate3d(' +
                                e
                                    .map(function (e) {
                                        return b(e, 'px');
                                    })
                                    .join(',') +
                                ')',
                            T(e, 0)
                        ];
                    })),
                c.each(s, function (e, t) {
                    if ('transform' === t)
                        o.push([e || '']),
                            l.push(function (e) {
                                return [e, '' === e];
                            });
                    else if (v.test(t)) {
                        if ((delete s[t], c.is.und(e))) return;
                        var n = y.test(t) ? 'px' : I.test(t) ? 'deg' : '';
                        o.push(c.toArray(e)),
                            l.push(
                                'rotate3d' === t
                                    ? function (e) {
                                          var t = e[0],
                                              i = e[1],
                                              r = e[2],
                                              a = e[3];
                                          return ['rotate3d(' + t + ',' + i + ',' + r + ',' + b(a, n) + ')', T(a, 0)];
                                      }
                                    : function (e) {
                                          return [
                                              t +
                                                  '(' +
                                                  e
                                                      .map(function (e) {
                                                          return b(e, n);
                                                      })
                                                      .join(',') +
                                                  ')',
                                              T(e, t.startsWith('scale') ? 1 : 0)
                                          ];
                                      }
                            );
                    }
                }),
                o.length && (s.transform = new A(o, l)),
                e.call(this, s) || this
            );
        }
        return d(t, e), t;
    })(u.AnimatedObject),
    A = (function (e) {
        function t(t, n) {
            var i;
            return ((i = e.call(this) || this).inputs = t), (i.transforms = n), (i._value = null), (i._children = new Set()), i;
        }
        d(t, e);
        var n = t.prototype;
        return (
            (n.get = function () {
                return this._value || (this._value = this._get());
            }),
            (n._get = function () {
                var e = this,
                    t = '',
                    n = !0;
                return (
                    c.each(this.inputs, function (i, r) {
                        var a = c.getFluidValue(i[0]),
                            s = e.transforms[r](c.is.arr(a) ? a : i.map(c.getFluidValue)),
                            o = s[0],
                            l = s[1];
                        (t += ' ' + o), (n = n && l);
                    }),
                    n ? 'none' : t
                );
            }),
            (n.addChild = function (e) {
                var t = this;
                this._children.size ||
                    c.each(this.inputs, function (e) {
                        return c.each(e, function (e) {
                            var n = c.getFluidConfig(e);
                            n && n.addChild(t);
                        });
                    }),
                    this._children.add(e);
            }),
            (n.removeChild = function (e) {
                var t = this;
                this._children.delete(e),
                    this._children.size ||
                        c.each(this.inputs, function (e) {
                            return c.each(e, function (e) {
                                var n = c.getFluidConfig(e);
                                n && n.removeChild(t);
                            });
                        });
            }),
            (n.onParentChange = function (e) {
                'change' == e.type && (this._value = null),
                    c.each(this._children, function (t) {
                        t.onParentChange(e);
                    });
            }),
            t
        );
    })(c.FluidValue),
    N = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', 'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];
a.Globals.assign({
    colorNames: l,
    createStringInterpolator: o.createStringInterpolator,
    batchedUpdates: s.unstable_batchedUpdates
});
var C = u.createHost(N, {
    applyAnimatedValues: h,
    createAnimatedStyle: function (e) {
        return new S(e);
    },
    getComponentProps: function (e) {
        return e.scrollTop, e.scrollLeft, r(e, ['scrollTop', 'scrollLeft']);
    }
}).animated;
Object.keys(a).forEach(function (e) {
    'default' !== e &&
        Object.defineProperty(t, e, {
            enumerable: !0,
            get: function () {
                return a[e];
            }
        });
}),
    (t.a = C),
    (t.animated = C);
