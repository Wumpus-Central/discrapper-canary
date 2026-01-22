var r = n(724039);
function i() {
    return (i =
        r ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
function a(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function s(e, t) {
    (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), (e.__proto__ = t);
}
function o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            });
    }
    return e;
}
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
var c = n(92690),
    u = n(595042),
    d = n(64700),
    f = n(251577),
    p = n(448567),
    _ = n(919743),
    h = n(423856),
    m = n(460249),
    g = n(116740),
    E = n(797686),
    b = n(537578),
    y = 10;
g.List;
var O = function (e, t) {
        return e.getAnchorKey() === t || e.getFocusKey() === t;
    },
    A = function (e, t) {
        var n = e.getNextSiblingKey();
        return !!n && t.getBlockForKey(n).getType() === e.getType();
    },
    v = function (e, t, n) {
        var r = [],
            i = !0,
            a = !1,
            s = void 0;
        try {
            for (var o, l = n.reverse()[Symbol.iterator](); !(i = (o = l.next()).done); i = !0) {
                var c = o.value;
                if (c.type !== t) break;
                r.push(c);
            }
        } catch (e) {
            (a = !0), (s = e);
        } finally {
            try {
                i || null == l.return || l.return();
            } finally {
                if (a) throw s;
            }
        }
        n.splice(n.indexOf(r[0]), r.length + 1);
        var f = r.reverse(),
            p = f[0].key;
        return (
            n.push(
                d.cloneElement(
                    e,
                    {
                        key: "".concat(p, "-wrap"),
                        "data-offset-key": u.encode(p, 0, 0),
                    },
                    f,
                ),
            ),
            n
        );
    },
    S = function (e, t) {
        var n = t.get(e.getType()) || t.get("unstyled"),
            r = n.wrapper;
        return {
            Element: n.element || t.get("unstyled").element,
            wrapperTemplate: r,
        };
    },
    I = function (e, t) {
        var n = t(e);
        return n
            ? {
                  CustomComponent: n.component,
                  customProps: n.props,
                  customEditable: n.editable,
              }
            : {};
    },
    T = function (e, t, n, r, i, a) {
        var s = {
                "data-block": !0,
                "data-editor": t,
                "data-offset-key": n,
                key: e.getKey(),
                ref: a,
            },
            l = r(e);
        return (
            l && (s.className = l),
            void 0 !== i.customEditable &&
                (s = o({}, s, {
                    contentEditable: i.customEditable,
                    suppressContentEditableWarning: !0,
                })),
            s
        );
    };
e.exports = (function (e) {
    function t() {
        for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
        return l(a((t = e.call.apply(e, [this].concat(r)) || this)), "wrapperRef", d.createRef()), t;
    }
    s(t, e);
    var n = t.prototype;
    return (
        (n.shouldComponentUpdate = function (e) {
            var t = this.props,
                n = t.block,
                r = t.direction,
                i = t.tree,
                a = !n.getChildKeys().isEmpty(),
                s =
                    n !== e.block ||
                    i !== e.tree ||
                    r !== e.direction ||
                    (O(e.selection, e.block.getKey()) && e.forceSelection);
            return a || s;
        }),
        (n.componentDidMount = function () {
            var e,
                t = this.props.selection,
                n = t.getEndKey();
            if (t.getHasFocus() && n === this.props.block.getKey()) {
                var r = this.wrapperRef.current;
                if (r) {
                    var i = p.getScrollParent(r),
                        a = h(i);
                    if (i === window) {
                        var s = _(r);
                        (e = s.y + s.height - m().height) > 0 && window.scrollTo(a.x, a.y + e + y);
                    } else {
                        b(r) || E(!1);
                        var o = r;
                        (e = o.offsetHeight + o.offsetTop - (i.offsetHeight + a.y)) > 0 &&
                            f.setTop(i, f.getTop(i) + e + y);
                    }
                }
            }
        }),
        (n.render = function () {
            var e = this,
                n = this.props,
                r = n.block,
                a = n.blockRenderMap,
                s = n.blockRendererFn,
                l = n.blockStyleFn,
                f = n.contentState,
                p = n.decorator,
                _ = n.editorKey,
                h = n.editorState,
                m = n.customStyleFn,
                g = n.customStyleMap,
                E = n.direction,
                b = n.forceSelection,
                y = n.selection,
                C = n.tree,
                N = null;
            r.children.size &&
                (N = r.children.reduce(function (n, r) {
                    var i = u.encode(r, 0, 0),
                        c = f.getBlockForKey(r),
                        p = I(c, s),
                        m = p.CustomComponent || t,
                        g = S(c, a),
                        E = g.Element,
                        b = g.wrapperTemplate,
                        y = T(c, _, i, l, p, null),
                        O = o({}, e.props, {
                            tree: h.getBlockTree(r),
                            blockProps: p.customProps,
                            offsetKey: i,
                            block: c,
                        });
                    return n.push(d.createElement(E, y, d.createElement(m, O))), !b || A(c, f) || v(b, E, n), n;
                }, []));
            var R = r.getKey(),
                w = u.encode(R, 0, 0),
                P = I(r, s),
                D = P.CustomComponent,
                x =
                    null != D
                        ? d.createElement(
                              D,
                              i({}, this.props, {
                                  tree: h.getBlockTree(R),
                                  blockProps: P.customProps,
                                  offsetKey: w,
                                  block: r,
                              }),
                          )
                        : d.createElement(c, {
                              block: r,
                              children: N,
                              contentState: f,
                              customStyleFn: m,
                              customStyleMap: g,
                              decorator: p,
                              direction: E,
                              forceSelection: b,
                              hasSelection: O(y, R),
                              selection: y,
                              tree: C,
                          });
            if (r.getParentKey()) return x;
            var L = S(r, a).Element,
                j = T(r, _, w, l, P, this.wrapperRef);
            return d.createElement(L, j, x);
        }),
        t
    );
})(d.Component);
