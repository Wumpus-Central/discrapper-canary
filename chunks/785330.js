t.d(r, { Ay: () => k, F2: () => u, Qs: () => h });
var d = t(627968),
    l = t(64700),
    c = t(835245),
    o = t(204990),
    a = t(604238),
    n = t(856535);
function s(e, r) {
    return e.children.map((e) =>
        (function e(r, t) {
            if ("string" == typeof r) return r;
            let { block: l, ...a } = r,
                n = t[l];
            if (null == n) return null;
            let s = (() => {
                    if ("children" in r) {
                        if (!Array.isArray(r.children) && null != r.children) return e(r.children, t);
                        if (null != r.children && r.children.length > 0) return r.children.map((r) => e(r, t));
                    }
                    return null;
                })(),
                u = o.E.has(l) ? { ...a, componentMap: t } : a;
            return (0, d.jsx)(n, { ...u, children: s }, (0, c.A)());
        })(e, r),
    );
}
function u(e) {
    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.E;
    try {
        return s(e, r), !0;
    } catch (e) {
        return !1;
    }
}
let i = (e) => {
        let { layout: r, overrides: t } = e,
            c = (0, a.e)({ overrides: t }),
            o = l.useMemo(() => s(r, c), [r, c]);
        return (0, d.jsx)("div", { children: o });
    },
    h = (e) => {
        let { layoutId: r, tenantId: t, overrides: l, requestParams: c } = e,
            { layout: o } = (0, n.A)(r, t, c);
        return null == o ? null : (0, d.jsx)(i, { layout: o, overrides: l });
    },
    k = i;
