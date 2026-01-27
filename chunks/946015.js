n.d(t, {
    s: () => x,
});
var r,
    i,
    l = n(627968),
    s = n(64700),
    a = n(503698),
    o = n.n(a),
    c = n(112303),
    d = n(50567);

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

function _(e) {
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

function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
        return l;
    }
    if (
        ((l = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                l = Object.getOwnPropertyNames(e);
            for (r = 0; r < l.length; r++)
                (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            return i;
        })(e, t)),
        Object.getOwnPropertySymbols)
    )
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
    return l;
}
let g = {
        VERTICAL: c.yG,
        HORIZONTAL: c.OZ,
        HORIZONTAL_REVERSE: c.y0,
    },
    A = {
        START: c.KF,
        END: c.HA,
        CENTER: c.pb,
        BETWEEN: c.G1,
        AROUND: c.nm,
    },
    f = {
        NO_WRAP: c.B,
        WRAP: c.aR,
        WRAP_REVERSE: c.KM,
    },
    h = {
        START: c.j$,
        END: c.S_,
        CENTER: c.YO,
        STRETCH: c.ai,
    },
    b = {
        SMALL: d.sf,
        LARGE: d.S6,
    };
class E extends (r = s.PureComponent) {
    render() {
        let e = this.props,
            { children: t, className: n, shrink: r, grow: i, basis: a, style: c, wrap: u } = e,
            g = m(e, ["children", "className", "shrink", "grow", "basis", "style", "wrap"]),
            A = _(
                {
                    style: _(
                        {
                            flexGrow: i,
                            flexShrink: r,
                            flexBasis: a,
                        },
                        c,
                    ),
                    className: n === d.Gu ? n : o()(d.Gu, n),
                },
                g,
            );
        if (!u && "string" != typeof t && 1 === s.Children.count(t)) {
            let e = s.Children.only(t);
            return (
                (A.style = _({}, A.style, e.props.style)),
                (A.className = o()(e.props.className, n)),
                s.cloneElement(e, A)
            );
        }
        return (0, l.jsx)(
            "div",
            p(_({}, A), {
                children: t,
            }),
        );
    }
}
u(E, "defaultProps", {
    className: d.Gu,
    style: {},
    wrap: !1,
});
class x extends (i = s.PureComponent) {
    render() {
        let e = this.props,
            {
                children: t,
                className: n,
                direction: r,
                justify: i,
                align: s,
                wrap: a,
                shrink: c,
                grow: u,
                basis: g,
                style: A,
                gutter: f,
            } = e,
            h = m(e, [
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
            b = _(
                {
                    flexShrink: c,
                    flexGrow: u,
                    flexBasis: g,
                },
                A,
            );
        return (0, l.jsx)(
            "div",
            p(
                _(
                    {
                        style: b,
                        className: o()(d.Uu, r, i, s, a, f, n),
                    },
                    h,
                ),
                {
                    children: t,
                },
            ),
        );
    }
}
u(x, "Child", E),
    u(x, "Direction", g),
    u(x, "Align", h),
    u(x, "Justify", A),
    u(x, "Wrap", f),
    u(x, "Gutter", b),
    u(x, "defaultProps", {
        direction: g.HORIZONTAL,
        justify: A.START,
        align: h.STRETCH,
        wrap: f.WRAP,
        shrink: 1,
        grow: 1,
        basis: "auto",
        style: {},
    });
