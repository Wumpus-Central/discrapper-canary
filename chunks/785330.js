"use strict";
n.d(t, { Ay: () => h, F2: () => d, Qs: () => f });
var r = n(627968),
    i = n(64700),
    a = n(835245),
    s = n(204990),
    o = n(604238),
    l = n(856535);
function u(e, t) {
    if ("string" == typeof e) return e;
    let { block: n, ...i } = e,
        o = t[n];
    if (null == o) return null;
    let l = (() => {
            if ("children" in e) {
                if (!Array.isArray(e.children) && null != e.children) return u(e.children, t);
                if (null != e.children && e.children.length > 0) return e.children.map((e) => u(e, t));
            }
            return null;
        })(),
        c = s.E.has(n) ? { ...i, componentMap: t } : i;
    return (0, r.jsx)(o, { ...c, children: l }, (0, a.A)());
}
function c(e, t) {
    return e.children.map((e) => u(e, t));
}
function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.E;
    try {
        return c(e, t), !0;
    } catch (e) {
        return !1;
    }
}
let _ = (e) => {
        let { layout: t, overrides: n } = e,
            a = (0, o.e)({ overrides: n }),
            s = i.useMemo(() => c(t, a), [t, a]);
        return (0, r.jsx)("div", { children: s });
    },
    f = (e) => {
        let { layoutId: t, tenantId: n, overrides: i } = e,
            { layout: a } = (0, l.A)(t, n);
        return null == a ? null : (0, r.jsx)(_, { layout: a, overrides: i });
    },
    h = _;
