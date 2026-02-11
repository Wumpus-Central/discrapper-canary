"use strict";
n.d(t, { A: () => d, F: () => c });
var r = n(627968),
    i = n(64700),
    a = n(835245),
    s = n(204990),
    o = n(604238);
function l(e, t) {
    if ("string" == typeof e) return e;
    let { block: n, ...i } = e,
        o = t[n];
    if (null == o) return null;
    let u = (() => {
            if ("children" in e) {
                if (!Array.isArray(e.children) && null != e.children) return l(e.children, t);
                if (null != e.children && e.children.length > 0) return e.children.map((e) => l(e, t));
            }
            return null;
        })(),
        c = s.E.has(n) ? { ...i, componentMap: t } : i;
    return (0, r.jsx)(o, { ...c, children: u }, (0, a.A)());
}
function u(e, t) {
    return e.children.map((e) => l(e, t));
}
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.E;
    try {
        return u(e, t), !0;
    } catch (e) {
        return !1;
    }
}
let d = (e) => {
    let { layout: t, overrides: n } = e,
        a = (0, o.e)({ overrides: n }),
        s = i.useMemo(() => u(t, a), [t, a]);
    return (0, r.jsx)("div", { children: s });
};
