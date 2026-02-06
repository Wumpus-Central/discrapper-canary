n.d(t, { A: () => i });
var _ = n(311907),
    a = n(73153);
let r = {},
    d = new Set(),
    s = {};
class l extends _.Ay.Store {
    static displayName = "CmsLayoutStore";
    getLayout(e) {
        return null == e ? null : (r[e] ?? null);
    }
    isFetchingLayout(e) {
        return null != e && d.has(e);
    }
    getFetchError(e) {
        return null == e ? null : (s[e] ?? null);
    }
}
let i = new l(a.h, {
    CMS_LAYOUT_FETCH: (e) => {
        let { layoutId: t } = e;
        d.add(t);
    },
    CMS_LAYOUT_FETCH_SUCCESS: (e) => {
        let { layout: t } = e;
        (r[t.id] = t), delete s[t.id], d.delete(t.id);
    },
    CMS_LAYOUT_FETCH_FAILURE: (e) => {
        let { layoutId: t, apiError: n } = e;
        (s[t] = n), d.delete(t);
    },
    LOGOUT: function () {
        (r = {}), (d = new Set()), (s = {});
    },
});
