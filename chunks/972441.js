l.d(t, { A: () => E });
var r = l(311907),
    n = l(73153),
    i = l(403362),
    o = l(41770);
let a = (0, i.m6)() ? { [o.C8]: { "dummy-shop-home": o.uG, "dummy-orb-shelf": o.oP, "dummy-sku-list": o.Ej } } : {},
    s = (0, i.m6)() ? ["dummy-skeleton"] : [],
    d = (0, i.m6)() ? { [o.C8]: { "dummy-popular-picks": o.Ot } } : {},
    c = (0, i.m6)() ? ["dummy-skeleton-template"] : [],
    u = (e, t) => `${e}/${t}`,
    h = a,
    m = new Set(s),
    p = {},
    _ = d,
    T = new Set(c),
    g = {},
    S = function (e) {
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
class A extends r.Ay.Store {
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
        let r = S(t, l);
        return _[e]?.[r] ?? null;
    }
    isFetchingTemplate(e, t, l) {
        let r = S(t ?? "", l);
        return null != e && null != t && T.has(u(e, r));
    }
    getTemplateFetchError(e, t, l) {
        return null == e || null == t ? null : (g[u(e, S(t ?? "", l))] ?? null);
    }
}
let E = new A(n.h, {
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
        T.add(u(t, S(l, r)));
    },
    CMS_TEMPLATE_FETCH_SUCCESS: (e) => {
        let { tenantId: t, templateId: l, requestParams: r, layout: n } = e,
            i = S(l, r);
        ((_[t] ??= {})[i] = n), delete g[u(t, i)], T.delete(u(t, i));
    },
    CMS_TEMPLATE_FETCH_FAILURE: (e) => {
        let { tenantId: t, templateId: l, requestParams: r, apiError: n } = e,
            i = S(l, r);
        (g[u(t, i)] = n), T.delete(u(t, i));
    },
    LOGOUT: function () {
        (h = {}), (m = new Set()), (p = {}), (_ = {}), (T = new Set()), (g = {});
    },
});
