"use strict";
var n = r(724039);
function i() {
    return (i =
        n ||
        function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
            }
            return t;
        }).apply(this, arguments);
}
function o(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(r, t).enumerable;
                }),
            )),
            n.forEach(function (e) {
                a(t, e, r[e]);
            });
    }
    return t;
}
function a(t, e, r) {
    return (
        e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = r),
        t
    );
}
var s = r(92690),
    u = r(595042),
    c = r(64700),
    l = r(251577),
    f = r(448567),
    p = r(919743),
    h = r(423856),
    d = r(460249),
    g = r(116740),
    y = r(797686),
    v = r(537578);
g.List;
var m = function (t, e) {
        return t.getAnchorKey() === e || t.getFocusKey() === e;
    },
    _ = function (t, e) {
        var r = t.getNextSiblingKey();
        return !!r && e.getBlockForKey(r).getType() === t.getType();
    },
    b = function (t, e, r) {
        var n = [],
            i = !0,
            o = !1,
            a = void 0;
        try {
            for (var s, l = r.reverse()[Symbol.iterator](); !(i = (s = l.next()).done); i = !0) {
                var f = s.value;
                if (f.type !== e) break;
                n.push(f);
            }
        } catch (t) {
            (o = !0), (a = t);
        } finally {
            try {
                i || null == l.return || l.return();
            } finally {
                if (o) throw a;
            }
        }
        r.splice(r.indexOf(n[0]), n.length + 1);
        var p = n.reverse(),
            h = p[0].key;
        return r.push(c.cloneElement(t, { key: "".concat(h, "-wrap"), "data-offset-key": u.encode(h, 0, 0) }, p)), r;
    },
    S = function (t, e) {
        var r = e.get(t.getType()) || e.get("unstyled"),
            n = r.wrapper;
        return { Element: r.element || e.get("unstyled").element, wrapperTemplate: n };
    },
    w = function (t, e) {
        var r = e(t);
        return r ? { CustomComponent: r.component, customProps: r.props, customEditable: r.editable } : {};
    },
    k = function (t, e, r, n, i, a) {
        var s = { "data-block": !0, "data-editor": e, "data-offset-key": r, key: t.getKey(), ref: a },
            u = n(t);
        return (
            u && (s.className = u),
            void 0 !== i.customEditable &&
                (s = o({}, s, { contentEditable: i.customEditable, suppressContentEditableWarning: !0 })),
            s
        );
    };
t.exports = (function (t) {
    function e() {
        for (var e, r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
        return (
            a(
                (function (t) {
                    if (void 0 === t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t;
                })((e = t.call.apply(t, [this].concat(n)) || this)),
                "wrapperRef",
                c.createRef(),
            ),
            e
        );
    }
    (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), (e.__proto__ = t);
    var r = e.prototype;
    return (
        (r.shouldComponentUpdate = function (t) {
            var e = this.props,
                r = e.block,
                n = e.direction,
                i = e.tree,
                o = !r.getChildKeys().isEmpty(),
                a =
                    r !== t.block ||
                    i !== t.tree ||
                    n !== t.direction ||
                    (m(t.selection, t.block.getKey()) && t.forceSelection);
            return o || a;
        }),
        (r.componentDidMount = function () {
            var t,
                e = this.props.selection,
                r = e.getEndKey();
            if (e.getHasFocus() && r === this.props.block.getKey()) {
                var n = this.wrapperRef.current;
                if (n) {
                    var i = f.getScrollParent(n),
                        o = h(i);
                    if (i === window) {
                        var a = p(n);
                        (t = a.y + a.height - d().height) > 0 && window.scrollTo(o.x, o.y + t + 10);
                    } else
                        v(n) || y(!1),
                            (t = n.offsetHeight + n.offsetTop - (i.offsetHeight + o.y)) > 0 &&
                                l.setTop(i, l.getTop(i) + t + 10);
                }
            }
        }),
        (r.render = function () {
            var t = this,
                r = this.props,
                n = r.block,
                a = r.blockRenderMap,
                l = r.blockRendererFn,
                f = r.blockStyleFn,
                p = r.contentState,
                h = r.decorator,
                d = r.editorKey,
                g = r.editorState,
                y = r.customStyleFn,
                v = r.customStyleMap,
                x = r.direction,
                C = r.forceSelection,
                E = r.selection,
                O = r.tree,
                D = null;
            n.children.size &&
                (D = n.children.reduce(function (r, n) {
                    var i = u.encode(n, 0, 0),
                        s = p.getBlockForKey(n),
                        h = w(s, l),
                        y = h.CustomComponent || e,
                        v = S(s, a),
                        m = v.Element,
                        x = v.wrapperTemplate,
                        C = k(s, d, i, f, h, null),
                        E = o({}, t.props, {
                            tree: g.getBlockTree(n),
                            blockProps: h.customProps,
                            offsetKey: i,
                            block: s,
                        });
                    return r.push(c.createElement(m, C, c.createElement(y, E))), !x || _(s, p) || b(x, m, r), r;
                }, []));
            var K = n.getKey(),
                T = u.encode(K, 0, 0),
                M = w(n, l),
                A = M.CustomComponent,
                I =
                    null != A
                        ? c.createElement(
                              A,
                              i({}, this.props, {
                                  tree: g.getBlockTree(K),
                                  blockProps: M.customProps,
                                  offsetKey: T,
                                  block: n,
                              }),
                          )
                        : c.createElement(s, {
                              block: n,
                              children: D,
                              contentState: p,
                              customStyleFn: y,
                              customStyleMap: v,
                              decorator: h,
                              direction: x,
                              forceSelection: C,
                              hasSelection: m(E, K),
                              selection: E,
                              tree: O,
                          });
            if (n.getParentKey()) return I;
            var B = S(n, a).Element,
                L = k(n, d, T, f, M, this.wrapperRef);
            return c.createElement(B, L, I);
        }),
        e
    );
})(c.Component);
