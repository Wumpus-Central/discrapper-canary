l.d(t, { A: () => x });
var r = l(17928),
    n = l(228366),
    a = l(403362),
    s = l(41770);
let i = (0, a.m6)() ? { [s.C8]: { "dummy-shop-home": s.uG, "dummy-orb-shelf": s.oP, "dummy-sku-list": s.Ej } } : {},
    c = (0, a.m6)() ? ["dummy-skeleton"] : [],
    d = (0, a.m6)() ? { [s.C8]: { "dummy-popular-picks": s.Ot } } : {},
    o = (0, a.m6)() ? ["dummy-skeleton-template"] : [],
    u = (e, t) => `${e}/${t}`,
    h = i,
    m = new Set(c),
    p = {},
    g = d,
    f = new Set(o),
    v = {},
    A = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            l = Object.entries(t)
                .sort((e, t) => {
                    let [l] = e,
                        [r] = t;
                    return l.localeCompare(r);
                })
                .map((e) => {
                    let [t, l] = e;
                    return `${t}:${l}`;
                })
                .join("-");
        return "" !== l ? `${e}-${l}` : e;
    };
class E extends r.Ay.Store {
    static displayName = "CmsLayoutStore";
    getLayout(e, t) {
        return null == e || null == t ? null : (h[e]?.[t] ?? null);
    }
    isFetchingLayout(e, t) {
        return null != e && null != t && m.has(u(e, t));
    }
    getFetchError(e, t) {
        return null == e || null == t ? null : (p[u(e, t)] ?? null);
    }
    getTemplateLayout(e, t, l) {
        if (null == e || null == t) return null;
        let r = A(t, l);
        return g[e]?.[r] ?? null;
    }
    isFetchingTemplate(e, t, l) {
        let r = A(t ?? "", l);
        return null != e && null != t && f.has(u(e, r));
    }
    getTemplateFetchError(e, t, l) {
        return null == e || null == t ? null : (v[u(e, A(t ?? "", l))] ?? null);
    }
}
let x = new E(n.h, {
    CMS_LAYOUT_FETCH: (e) => {
        let { tenantId: t, layoutId: l } = e;
        m.add(u(t, l));
    },
    CMS_LAYOUT_FETCH_SUCCESS: (e) => {
        let { tenantId: t, layout: l } = e;
        ((h[t] ??= {})[l.id] = l), delete p[u(t, l.id)], m.delete(u(t, l.id));
    },
    CMS_LAYOUT_FETCH_FAILURE: (e) => {
        let { tenantId: t, layoutId: l, apiError: r } = e;
        (p[u(t, l)] = r), m.delete(u(t, l));
    },
    CMS_TEMPLATE_FETCH: (e) => {
        let { tenantId: t, templateId: l, requestParams: r } = e;
        f.add(u(t, A(l, r)));
    },
    CMS_TEMPLATE_FETCH_SUCCESS: (e) => {
        let { tenantId: t, templateId: l, requestParams: r, layout: n } = e,
            a = A(l, r);
        ((g[t] ??= {})[a] = n), delete v[u(t, a)], f.delete(u(t, a));
    },
    CMS_TEMPLATE_FETCH_FAILURE: (e) => {
        let { tenantId: t, templateId: l, requestParams: r, apiError: n } = e,
            a = A(l, r);
        (v[u(t, a)] = n), f.delete(u(t, a));
    },
    LOGOUT: function () {
        (h = {}), (m = new Set()), (p = {}), (g = {}), (f = new Set()), (v = {});
    },
});
