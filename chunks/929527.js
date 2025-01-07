function i(e) {
    return e && 'object' == typeof e && 'default' in e ? e.default : e;
}
Object.defineProperty(n, '__esModule', { value: !0 });
var a = i(r(532825)),
    s = r(550033),
    o = r(995295),
    l = r(179237),
    u = i(r(865481)),
    c = r(857967),
    d = r(698091),
    f = i(r(21217)),
    _ = /^--/;
function h(e, n) {
    return null == n || 'boolean' == typeof n || '' === n ? '' : 'number' != typeof n || 0 === n || _.test(e) || (g.hasOwnProperty(e) && g[e]) ? ('' + n).trim() : n + 'px';
}
var p = {};
function m(e, n) {
    if (!e.nodeType || !e.setAttribute) return !1;
    var r = 'filter' === e.nodeName || (e.parentNode && 'filter' === e.parentNode.nodeName),
        i = n,
        s = i.style,
        o = i.children,
        l = i.scrollTop,
        u = i.scrollLeft,
        c = a(i, ['style', 'children', 'scrollTop', 'scrollLeft']),
        f = Object.values(c),
        m = Object.keys(c).map(function (n) {
            return r || e.hasAttribute(n)
                ? n
                : p[n] ||
                      (p[n] = n.replace(/([A-Z])/g, function (e) {
                          return '-' + e.toLowerCase();
                      }));
        });
    d.Globals.frameLoop.onWrite(function () {
        for (var n in (void 0 !== o && (e.textContent = o), s))
            if (s.hasOwnProperty(n)) {
                var r = h(n, s[n]);
                'float' === n ? (n = 'cssFloat') : _.test(n) ? e.style.setProperty(n, r) : (e.style[n] = r);
            }
        m.forEach(function (n, r) {
            e.setAttribute(n, f[r]);
        }),
            void 0 !== l && (e.scrollTop = l),
            void 0 !== u && (e.scrollLeft = u);
    });
}
var g = {
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
    E = function (e, n) {
        return e + n.charAt(0).toUpperCase() + n.substring(1);
    },
    v = ['Webkit', 'Ms', 'Moz', 'O'];
g = Object.keys(g).reduce(function (e, n) {
    return (
        v.forEach(function (r) {
            return (e[E(r, n)] = e[n]);
        }),
        e
    );
}, g);
var I = /^(matrix|translate|scale|rotate|skew)/,
    T = /^(translate)/,
    b = /^(rotate|skew)/,
    y = function (e, n) {
        return d.is.num(e) && 0 !== e ? e + n : e;
    },
    S = function e(n, r) {
        return d.is.arr(n)
            ? n.every(function (n) {
                  return e(n, r);
              })
            : d.is.num(n)
              ? n === r
              : parseFloat(n) === r;
    },
    A = (function (e) {
        function n(n) {
            var r = n.x,
                i = n.y,
                s = n.z,
                o = a(n, ['x', 'y', 'z']),
                l = [],
                u = [];
            return (
                (r || i || s) &&
                    (l.push([r || 0, i || 0, s || 0]),
                    u.push(function (e) {
                        return [
                            'translate3d(' +
                                e
                                    .map(function (e) {
                                        return y(e, 'px');
                                    })
                                    .join(',') +
                                ')',
                            S(e, 0)
                        ];
                    })),
                d.each(o, function (e, n) {
                    if ('transform' === n)
                        l.push([e || '']),
                            u.push(function (e) {
                                return [e, '' === e];
                            });
                    else if (I.test(n)) {
                        if ((delete o[n], d.is.und(e))) return;
                        var r = T.test(n) ? 'px' : b.test(n) ? 'deg' : '';
                        l.push(d.toArray(e)),
                            u.push(
                                'rotate3d' === n
                                    ? function (e) {
                                          var n = e[0],
                                              i = e[1],
                                              a = e[2],
                                              s = e[3];
                                          return ['rotate3d(' + n + ',' + i + ',' + a + ',' + y(s, r) + ')', S(s, 0)];
                                      }
                                    : function (e) {
                                          return [
                                              n +
                                                  '(' +
                                                  e
                                                      .map(function (e) {
                                                          return y(e, r);
                                                      })
                                                      .join(',') +
                                                  ')',
                                              S(e, n.startsWith('scale') ? 1 : 0)
                                          ];
                                      }
                            );
                    }
                }),
                l.length && (o.transform = new N(l, u)),
                e.call(this, o) || this
            );
        }
        return f(n, e), n;
    })(c.AnimatedObject),
    N = (function (e) {
        function n(n, r) {
            var i;
            return ((i = e.call(this) || this).inputs = n), (i.transforms = r), (i._value = null), (i._children = new Set()), i;
        }
        f(n, e);
        var r = n.prototype;
        return (
            (r.get = function () {
                return this._value || (this._value = this._get());
            }),
            (r._get = function () {
                var e = this,
                    n = '',
                    r = !0;
                return (
                    d.each(this.inputs, function (i, a) {
                        var s = d.getFluidValue(i[0]),
                            o = e.transforms[a](d.is.arr(s) ? s : i.map(d.getFluidValue)),
                            l = o[0],
                            u = o[1];
                        (n += ' ' + l), (r = r && u);
                    }),
                    r ? 'none' : n
                );
            }),
            (r.addChild = function (e) {
                var n = this;
                !this._children.size &&
                    d.each(this.inputs, function (e) {
                        return d.each(e, function (e) {
                            var r = d.getFluidConfig(e);
                            r && r.addChild(n);
                        });
                    }),
                    this._children.add(e);
            }),
            (r.removeChild = function (e) {
                var n = this;
                this._children.delete(e),
                    !this._children.size &&
                        d.each(this.inputs, function (e) {
                            return d.each(e, function (e) {
                                var r = d.getFluidConfig(e);
                                r && r.removeChild(n);
                            });
                        });
            }),
            (r.onParentChange = function (e) {
                'change' == e.type && (this._value = null),
                    d.each(this._children, function (n) {
                        n.onParentChange(e);
                    });
            }),
            n
        );
    })(d.FluidValue),
    C = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', 'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];
s.Globals.assign({
    colorNames: u,
    createStringInterpolator: l.createStringInterpolator,
    batchedUpdates: o.unstable_batchedUpdates
});
var R = c.createHost(C, {
    applyAnimatedValues: m,
    createAnimatedStyle: function (e) {
        return new A(e);
    },
    getComponentProps: function (e) {
        return e.scrollTop, e.scrollLeft, a(e, ['scrollTop', 'scrollLeft']);
    }
}).animated;
Object.keys(s).forEach(function (e) {
    'default' !== e &&
        Object.defineProperty(n, e, {
            enumerable: !0,
            get: function () {
                return s[e];
            }
        });
}),
    (n.a = R),
    (n.animated = R);
