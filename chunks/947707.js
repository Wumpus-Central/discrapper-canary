n.d(t, { Z: () => p }), n(388685);
var r = n(54381);
n(473749);
var i = n(681715),
    a = n(481060),
    o = n(249996),
    s = n(467887);
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
function c(e) {
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
function u(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = d(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function d(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function f(e) {
    let { title: t, value: n, onChange: i, options: l, isDisabled: c = !1 } = e;
    return (0, r.jsxs)("div", {
        className: s.selectItemRow,
        children: [
            (0, r.jsx)(a.Text, {
                variant: "text-md/medium",
                color: c ? "text-muted" : "text-primary",
                className: s.title,
                children: t,
            }),
            (0, r.jsx)(a.q4e, {
                variant: "text-only",
                className: s.select,
                options: l,
                value: n,
                onChange: (e) => i(e),
                renderOptionValue: (e) => {
                    let [t] = e;
                    return (0, r.jsx)(o.Z, { option: t });
                },
                renderOptionLabel: (e) => (0, r.jsx)(o.Z, { option: e }),
                isDisabled: c,
            }),
        ],
    });
}
function _(e) {
    var { tooltipText: t } = e,
        n = u(e, ["tooltipText"]);
    return (0, r.jsx)(i.u, {
        text: t,
        asContainer: !0,
        children: (0, r.jsx)(f, c({}, n)),
    });
}
function p(e) {
    return "tooltipText" in e && null != e.tooltipText ? (0, r.jsx)(_, c({}, e)) : (0, r.jsx)(f, c({}, e));
}
