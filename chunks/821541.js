n.d(t, { K: () => m }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(530892),
    l = n.n(s),
    c = n(235033);
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
function _(e, t) {
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
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = h(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let m = i.forwardRef(function (e, t) {
        var {
                as: n = "div",
                gap: i = 8,
                direction: a = "vertical",
                align: s = "stretch",
                justify: l = "start",
                wrap: u = !1,
                padding: f = 0,
                fullWidth: h = !0,
                style: m,
                className: b,
                children: y,
            } = e,
            O = p(e, [
                "as",
                "gap",
                "direction",
                "align",
                "justify",
                "wrap",
                "padding",
                "fullWidth",
                "style",
                "className",
                "children",
            ]);
        return (0, r.jsx)(
            n,
            _(
                d(
                    {
                        ref: t,
                        "data-align": s,
                        "data-justify": l,
                        "data-direction": a,
                        "data-wrap": u,
                        "data-full-width": h,
                        className: o()(c.stack, b),
                        style: d(_(d({}, m), { gap: g(i) }), E(f)),
                    },
                    O,
                ),
                { children: y },
            ),
        );
    }),
    g = (e) => "var(--space-".concat(e, ")"),
    E = (e) =>
        "number" == typeof e || "string" == typeof e
            ? { padding: g(e) }
            : Object.entries(e).reduce((e, t) => {
                  let [n, r] = t;
                  return (e["padding".concat(l()(n))] = g(r)), e;
              }, {});
