"use strict";
n.d(t, { A: () => E });
var r = n(311907),
    i = n(73153),
    a = n(403362),
    s = n(41770);
let o = (0, a.m6)() ? { "dummy-shop-home": s.u, "dummy-popular-picks": s.O } : {},
    l = (0, a.m6)() ? ["dummy-skeleton"] : [],
    u = o,
    c = new Set(l),
    d = {},
    _ = (e) => {
        let { layoutId: t } = e;
        c.add(t);
    },
    f = (e) => {
        let { layout: t } = e;
        (u[t.id] = t), delete d[t.id], c.delete(t.id);
    },
    h = (e) => {
        let { layoutId: t, apiError: n } = e;
        (d[t] = n), c.delete(t);
    };
function p() {
    (u = {}), (c = new Set()), (d = {});
}
class g extends r.Ay.Store {
    static displayName = "CmsLayoutStore";
    getLayout(e) {
        return null == e ? null : (u[e] ?? null);
    }
    isFetchingLayout(e) {
        return null != e && c.has(e);
    }
    getFetchError(e) {
        return null == e ? null : (d[e] ?? null);
    }
}
let E = new g(i.h, { CMS_LAYOUT_FETCH: _, CMS_LAYOUT_FETCH_SUCCESS: f, CMS_LAYOUT_FETCH_FAILURE: h, LOGOUT: p });
