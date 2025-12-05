n.d(t, {
    Ds: () => E,
    Ko: () => g,
    vw: () => h,
});
var r = n(54381),
    i = n(28664),
    a = n(159691),
    o = n(481060),
    s = n(612853),
    l = n(311821),
    c = n(482151);
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
        i = m(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let h = (e) => {
        let { message: t } = e;
        return (0, r.jsx)(o.M14, {
            type: "critical",
            children: t,
        });
    },
    g = (e) => {
        var { onClick: t, loading: n, disabled: o, text: s, tooltipText: l } = e;
        let c = d(
                {
                    variant: "active",
                    type: "submit",
                    "data-testid": "submitButton",
                    text: s,
                },
                _(e, ["onClick", "loading", "disabled", "text", "tooltipText"]),
            ),
            u = (0, r.jsx)(
                a.zxk,
                p(d({}, c), {
                    onClick: t,
                    loading: n,
                    disabled: o,
                    text: s,
                }),
            );
        return null != l
            ? (0, r.jsx)(i.u, {
                  text: l,
                  asContainer: !0,
                  children: u,
              })
            : u;
    },
    E = (e) => {
        let { primaryCTAButtonProps: t, showLockIcon: n, onBackClick: i } = e;
        return (0, r.jsxs)(o.mzw, {
            className: c.checkoutModalFooter,
            "data-migration-pending": !0,
            children: [
                null != i ? (0, r.jsx)(l.Z, { onClick: i }) : null,
                (0, r.jsx)(g, d({}, t)),
                n && (0, r.jsx)(s.Z, {}),
            ],
        });
    };
