"use strict";
r.d(t, { A: () => x });
var l = r(17928),
    s = r(228366),
    n = r(403362),
    a = r(41770);
let i = (0, n.m6)() ? { [a.C8]: { "dummy-shop-home": a.uG, "dummy-orb-shelf": a.oP, "dummy-sku-list": a.Ej } } : {},
    c = (0, n.m6)() ? ["dummy-skeleton"] : [],
    u = (0, n.m6)() ? { [a.C8]: { "dummy-popular-picks": a.Ot } } : {},
    d = (0, n.m6)() ? ["dummy-skeleton-template"] : [],
    o = (e, t) => `${e}/${t}`,
    h = i,
    m = new Set(c),
    p = {},
    g = u,
    v = new Set(d),
    f = {},
    A = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            r = Object.entries(t)
                .sort((e, t) => {
                    let [r] = e,
                        [l] = t;
                    return r.localeCompare(l);
                })
                .map((e) => {
                    let [t, r] = e;
                    return `${t}:${r}`;
                })
                .join("-");
        return "" !== r ? `${e}-${r}` : e;
    };
class E extends l.Ay.Store {
    static displayName = "CmsLayoutStore";
    getLayout(e, t) {
        return null == e || null == t ? null : (h[e]?.[t] ?? null);
    }
    isFetchingLayout(e, t) {
        return null != e && null != t && m.has(o(e, t));
    }
    getFetchError(e, t) {
        return null == e || null == t ? null : (p[o(e, t)] ?? null);
    }
    getTemplateLayout(e, t, r) {
        if (null == e || null == t) return null;
        let l = A(t, r);
        return g[e]?.[l] ?? null;
    }
    isFetchingTemplate(e, t, r) {
        let l = A(t ?? "", r);
        return null != e && null != t && v.has(o(e, l));
    }
    getTemplateFetchError(e, t, r) {
        return null == e || null == t ? null : (f[o(e, A(t ?? "", r))] ?? null);
    }
}
let x = new E(s.h, {
    CMS_LAYOUT_FETCH: (e) => {
        let { tenantId: t, layoutId: r } = e;
        m.add(o(t, r));
    },
    CMS_LAYOUT_FETCH_SUCCESS: (e) => {
        let { tenantId: t, layout: r } = e;
        ((h[t] ??= {})[r.id] = r), delete p[o(t, r.id)], m.delete(o(t, r.id));
    },
    CMS_LAYOUT_FETCH_FAILURE: (e) => {
        let { tenantId: t, layoutId: r, apiError: l } = e;
        (p[o(t, r)] = l), m.delete(o(t, r));
    },
    CMS_TEMPLATE_FETCH: (e) => {
        let { tenantId: t, templateId: r, requestParams: l } = e;
        v.add(o(t, A(r, l)));
    },
    CMS_TEMPLATE_FETCH_SUCCESS: (e) => {
        let { tenantId: t, templateId: r, requestParams: l, layout: s } = e,
            n = A(r, l);
        ((g[t] ??= {})[n] = s), delete f[o(t, n)], v.delete(o(t, n));
    },
    CMS_TEMPLATE_FETCH_FAILURE: (e) => {
        let { tenantId: t, templateId: r, requestParams: l, apiError: s } = e,
            n = A(r, l);
        (f[o(t, n)] = s), v.delete(o(t, n));
    },
    LOGOUT: function () {
        (h = {}), (m = new Set()), (p = {}), (g = {}), (v = new Set()), (f = {});
    },
});
