t.d(l, { Ay: () => b, F2: () => u, Qs: () => p, Z_: () => m });
var r = t(627968),
    o = t(64700),
    i = t(835245),
    n = t(204990),
    a = t(604238),
    c = t(856535),
    d = t(55391);
function s(e, l) {
    return e.children.map((e) =>
        (function e(l, t) {
            if ("string" == typeof l) return l;
            let { block: o, ...a } = l,
                c = t[o];
            if (null == c) return null;
            let d = (() => {
                    if ("children" in l) {
                        if (!Array.isArray(l.children) && null != l.children) return e(l.children, t);
                        if (null != l.children && l.children.length > 0) return l.children.map((l) => e(l, t));
                    }
                    return null;
                })(),
                s = n.E.has(o) ? { ...a, componentMap: t } : a;
            return (0, r.jsx)(c, { ...s, children: d }, (0, i.A)());
        })(e, l),
    );
}
function u(e) {
    let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.E;
    try {
        return s(e, l), !0;
    } catch (e) {
        return !1;
    }
}
let h = (e) => {
        let { layout: l, overrides: t } = e,
            r = (0, a.e)({ overrides: t });
        return o.useMemo(() => s(l, r), [l, r]);
    },
    p = (e) => {
        let { layoutId: l, tenantId: t, overrides: o } = e,
            { layout: i } = (0, c.A)(t, l);
        return null == i ? null : (0, r.jsx)(h, { layout: i, overrides: o });
    },
    m = (e) => {
        let { templateId: l, tenantId: t, overrides: o, requestParams: i } = e,
            { layout: n } = (0, d.A)(t, l, i);
        return null == n ? null : (0, r.jsx)(h, { layout: n, overrides: o });
    },
    b = h;
