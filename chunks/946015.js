n.d(t, {
    s: () => v,
});
var r,
    i,
    a = n(627968),
    s = n(64700),
    o = n(503698),
    l = n.n(o),
    c = n(112303),
    u = n(50567);

function d(e, t, n) {
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

function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}

function p(e, t) {
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

function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function h(e, t) {
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
    if (((a = m(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let g = {
        VERTICAL: c.yG,
        HORIZONTAL: c.OZ,
        HORIZONTAL_REVERSE: c.y0,
    },
    E = {
        START: c.KF,
        END: c.HA,
        CENTER: c.pb,
        BETWEEN: c.G1,
        AROUND: c.nm,
    },
    b = {
        NO_WRAP: c.B,
        WRAP: c.aR,
        WRAP_REVERSE: c.KM,
    },
    y = {
        START: c.j$,
        END: c.S_,
        CENTER: c.YO,
        STRETCH: c.ai,
    },
    O = {
        SMALL: u.sf,
        LARGE: u.S6,
    };
class A extends (r = s.PureComponent) {
    render() {
        let e = this.props,
            { children: t, className: n, shrink: r, grow: i, basis: o, style: c, wrap: d } = e,
            p = h(e, ["children", "className", "shrink", "grow", "basis", "style", "wrap"]),
            m = f(
                {
                    style: f(
                        {
                            flexGrow: i,
                            flexShrink: r,
                            flexBasis: o,
                        },
                        c,
                    ),
                    className: n === u.Gu ? n : l()(u.Gu, n),
                },
                p,
            );
        if (!d && "string" != typeof t && 1 === s.Children.count(t)) {
            let e = s.Children.only(t);
            return (
                (m.style = f({}, m.style, e.props.style)),
                (m.className = l()(e.props.className, n)),
                s.cloneElement(e, m)
            );
        }
        return (0, a.jsx)(
            "div",
            _(f({}, m), {
                children: t,
            }),
        );
    }
}
d(A, "defaultProps", {
    className: u.Gu,
    style: {},
    wrap: !1,
});
class v extends (i = s.PureComponent) {
    render() {
        let e = this.props,
            {
                children: t,
                className: n,
                direction: r,
                justify: i,
                align: s,
                wrap: o,
                shrink: c,
                grow: d,
                basis: p,
                style: m,
                gutter: g,
            } = e,
            E = h(e, [
                "children",
                "className",
                "direction",
                "justify",
                "align",
                "wrap",
                "shrink",
                "grow",
                "basis",
                "style",
                "gutter",
            ]),
            b = f(
                {
                    flexShrink: c,
                    flexGrow: d,
                    flexBasis: p,
                },
                m,
            );
        return (0, a.jsx)(
            "div",
            _(
                f(
                    {
                        style: b,
                        className: l()(u.Uu, r, i, s, o, g, n),
                    },
                    E,
                ),
                {
                    children: t,
                },
            ),
        );
    }
}
d(v, "Child", A),
    d(v, "Direction", g),
    d(v, "Align", y),
    d(v, "Justify", E),
    d(v, "Wrap", b),
    d(v, "Gutter", O),
    d(v, "defaultProps", {
        direction: g.HORIZONTAL,
        justify: E.START,
        align: y.STRETCH,
        wrap: b.WRAP,
        shrink: 1,
        grow: 1,
        basis: "auto",
        style: {},
    });
