var r = n(381538);
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
function o(e, t) {
    (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), (e.__proto__ = t);
}
function s(e, t, n) {
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
var l = n(175469),
    c = n(964930),
    u = n(473749),
    d = n(1231),
    f = n(292489),
    p = n(746117),
    _ = n(856084),
    m = n(606166),
    h = n(675411),
    g = n(685536),
    E = n(126502),
    b = n(581079),
    y = n(207303),
    O = n(467159),
    v = 10,
    S = function (e, t) {
        return e.getAnchorKey() === t || e.getFocusKey() === t;
    };
e.exports = (function (e) {
    function t() {
        for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
        return s(a((t = e.call.apply(e, [this].concat(r)) || this)), "_node", void 0), t;
    }
    o(t, e);
    var n = t.prototype;
    return (
        (n.shouldComponentUpdate = function (e) {
            return (
                this.props.block !== e.block ||
                this.props.tree !== e.tree ||
                this.props.direction !== e.direction ||
                (S(e.selection, e.block.getKey()) && e.forceSelection)
            );
        }),
        (n.componentDidMount = function () {
            if (!this.props.preventScroll) {
                var e,
                    t = this.props.selection,
                    n = t.getEndKey();
                if (t.getHasFocus() && n === this.props.block.getKey()) {
                    var r = this._node;
                    if (null != r) {
                        var i = f.getScrollParent(r),
                            a = g(i);
                        if (i === window) {
                            var o = h(r);
                            (e = o.y + o.height - E().height) > 0 && window.scrollTo(a.x, a.y + e + v);
                        } else
                            y(r) || b(!1),
                                (e = r.offsetHeight + r.offsetTop - (i.offsetTop + i.offsetHeight + a.y)) > 0 &&
                                    d.setTop(i, d.getTop(i) + e + v);
                    }
                }
            }
        }),
        (n._renderChildren = function () {
            var e = this,
                t = this.props.block,
                n = t.getKey(),
                r = t.getText(),
                a = this.props.tree.size - 1,
                o = S(this.props.selection, n);
            return this.props.tree
                .map(function (s, d) {
                    var f = s.get("leaves");
                    if (0 === f.size) return null;
                    var m = f.size - 1,
                        h = f
                            .map(function (i, s) {
                                var f = c.encode(n, d, s),
                                    p = i.get("start"),
                                    _ = i.get("end");
                                return u.createElement(l, {
                                    key: f,
                                    offsetKey: f,
                                    block: t,
                                    start: p,
                                    selection: o ? e.props.selection : null,
                                    forceSelection: e.props.forceSelection,
                                    text: r.slice(p, _),
                                    styleSet: t.getInlineStyleAt(p),
                                    customStyleMap: e.props.customStyleMap,
                                    customStyleFn: e.props.customStyleFn,
                                    isLast: d === a && s === m,
                                });
                            })
                            .toArray(),
                        g = s.get("decoratorKey");
                    if (null == g || !e.props.decorator) return h;
                    var E = O(e.props.decorator),
                        b = E.getComponentForKey(g);
                    if (!b) return h;
                    var y = E.getPropsForKey(g),
                        v = c.encode(n, d, 0),
                        S = f.first().get("start"),
                        I = f.last().get("end"),
                        T = r.slice(S, I),
                        C = t.getEntityAt(s.get("start")),
                        A = _.getHTMLDirIfDifferent(p.getDirection(T), e.props.direction),
                        N = {
                            contentState: e.props.contentState,
                            decoratedText: T,
                            dir: A,
                            start: S,
                            end: I,
                            blockKey: n,
                            entityKey: C,
                            offsetKey: v,
                        };
                    return u.createElement(b, i({}, y, N, { key: v }), h);
                })
                .toArray();
        }),
        (n.render = function () {
            var e = this,
                t = this.props,
                n = t.direction,
                r = t.offsetKey,
                i = m({
                    "public/DraftStyleDefault/block": !0,
                    "public/DraftStyleDefault/ltr": "LTR" === n,
                    "public/DraftStyleDefault/rtl": "RTL" === n,
                });
            return u.createElement(
                "div",
                {
                    "data-offset-key": r,
                    className: i,
                    ref: function (t) {
                        return (e._node = t);
                    },
                },
                this._renderChildren(),
            );
        }),
        t
    );
})(u.Component);
