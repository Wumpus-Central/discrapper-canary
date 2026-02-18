t.d(r, { A: () => k });
var d = t(311907),
    l = t(73153),
    c = t(403362),
    o = t(41770);
let a = (0, c.m6)() ? { "dummy-shop-home": o.u, "dummy-popular-picks": o.O } : {},
    n = (0, c.m6)() ? ["dummy-skeleton"] : [],
    s = a,
    u = new Set(n),
    i = {};
class h extends d.Ay.Store {
    static displayName = "CmsLayoutStore";
    getLayout(e) {
        return null == e ? null : (s[e] ?? null);
    }
    isFetchingLayout(e) {
        return null != e && u.has(e);
    }
    getFetchError(e) {
        return null == e ? null : (i[e] ?? null);
    }
}
let k = new h(l.h, {
    CMS_LAYOUT_FETCH: (e) => {
        let { layoutId: r } = e;
        u.add(r);
    },
    CMS_LAYOUT_FETCH_SUCCESS: (e) => {
        let { layout: r } = e;
        (s[r.id] = r), delete i[r.id], u.delete(r.id);
    },
    CMS_LAYOUT_FETCH_FAILURE: (e) => {
        let { layoutId: r, apiError: t } = e;
        (i[r] = t), u.delete(r);
    },
    LOGOUT: function () {
        (s = {}), (u = new Set()), (i = {});
    },
});
