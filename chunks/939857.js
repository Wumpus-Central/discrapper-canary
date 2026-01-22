var r,
    i = n(627968),
    a = n(64700),
    s = n(503698),
    o = n.n(s),
    l = n(397927),
    c = n(900729);
function u(e, t, n) {
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
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = h(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let m = {
    SMALL: c.PG,
    MEDIUM: c.$g,
    LARGE: c.Pu,
};
class g extends (r = a.PureComponent) {
    calculateScroll() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._scroller;
        if (null == e) return;
        let { scrollTop: t } = e.getScrollerState(),
            { hideSeparator: n } = this.state;
        0 !== t || n ? t > 0 && n && this.setState({ hideSeparator: !1 }) : this.setState({ hideSeparator: !0 });
    }
    getScroller() {
        return this._scroller;
    }
    renderChildren() {
        let { hideSeparator: e } = this.state;
        return a.Children.map(this.props.children, (t) =>
            a.isValidElement(t)
                ? t.type === l.$mQ || t.type === l.Dck
                    ? a.cloneElement(t, {
                          scrollerRef: this.setRef,
                          onScroll: this.handleScroll,
                          onResize: this.handleScroll,
                      })
                    : t.type === l.rQ0 && e
                      ? a.cloneElement(t, { separator: !1 })
                      : t
                : t,
        );
    }
    render() {
        let e = this.props,
            { className: t, children: n, tag: r, size: a, fullscreenOnMobile: s } = e,
            l = _(e, ["className", "children", "tag", "size", "fullscreenOnMobile"]);
        return (0, i.jsx)(
            r,
            p(d({ className: o()(c.yl, t, a, { [c.z]: s }) }, l), { children: this.renderChildren() }),
        );
    }
    constructor(e) {
        super(e),
            u(this, "_scroller", null),
            u(this, "setRef", (e) => {
                (this._scroller = e), null != e && this.calculateScroll();
            }),
            u(this, "handleScroll", (e) => {
                this.calculateScroll();
                let { onScroll: t } = this.props;
                null == t || t(e);
            }),
            (this.state = { hideSeparator: !1 });
    }
}
u(g, "Header", l.rQ0),
    u(g, "Footer", l.jlY),
    u(g, "Content", l.$mQ),
    u(g, "ListContent", l.Dck),
    u(g, "CloseButton", l.s_y),
    u(g, "Sizes", m),
    u(g, "defaultProps", {
        fullscreenOnMobile: !0,
        size: m.SMALL,
        tag: "div",
    });
