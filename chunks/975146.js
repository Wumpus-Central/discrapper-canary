n.d(t, { Z: () => m });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(871499),
    l = n(388032),
    c = n(59213);
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
    if (null == e) return {};
    var n,
        r,
        i = p(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function _(e) {
    let { className: t, count: n } = e;
    return (0, r.jsxs)("div", {
        className: a()(c.root, c.comboIcon, t),
        children: [
            (0, r.jsx)(o.BFJ, {
                size: "md",
                color: "currentColor",
                className: c.icon,
            }),
            null != n &&
                (0, r.jsx)(o.Text, {
                    color: "none",
                    className: c.count,
                    variant: "text-md/normal",
                    children: n,
                }),
        ],
    });
}
function m(e) {
    var { count: t } = e,
        n = f(e, ["count"]);
    return (0, r.jsx)(
        s.Z,
        d(
            {
                label: l.intl.string(l.t["jNqDh/"]),
                iconComponent: (e) => {
                    let { className: n } = e;
                    return (0, r.jsx)(_, {
                        className: n,
                        count: t,
                    });
                },
                tooltipPosition: "bottom",
            },
            n,
        ),
    );
}
