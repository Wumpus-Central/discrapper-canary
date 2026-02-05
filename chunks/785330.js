"use strict";
n.d(t, { A: () => c, F: () => u });
var r = n(627968),
    i = n(64700),
    a = n(835245),
    s = n(604238);
function o(e, t) {
    if ("string" == typeof e) return e;
    let { block: n, ...i } = e,
        s = t[n];
    if (null == s) return null;
    let l = (() => {
        if ("children" in e) {
            if (!Array.isArray(e.children) && null != e.children) return o(e.children, t);
            if (null != e.children && e.children.length > 0) return e.children.map((e) => o(e, t));
        }
        return null;
    })();
    return (0, r.jsx)(s, { ...i, children: l }, (0, a.A)());
}
function l(e, t) {
    return e.children.map((e) => o(e, t));
}
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.E;
    try {
        return l(e, t), !0;
    } catch (e) {
        return !1;
    }
}
let c = (e) => {
    let { layout: t, overrides: n } = e,
        a = (0, s.e)({ overrides: n }),
        o = i.useMemo(() => l(t, a), [t, a]);
    return (0, r.jsx)("div", { children: o });
};
