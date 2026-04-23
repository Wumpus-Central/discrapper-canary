n.d(t, { j: () => o });
var i = n(311907),
    s = n(73825),
    l = n(97352),
    a = n(728458),
    r = n(652215);
let o = (0, i.UT)(l.A, {
    getQueryId: r.fic.SUBSCRIPTION_PLANS,
    get: (e) => {
        if (null == e) return null;
        let t = l.A.getForSKU(e);
        return 0 === t.length ? null : t;
    },
    load: (e) => (
        null == e && a.A.addBreadcrumb({ message: "Error loading subscription plans: skuId is null" }),
        null != e ? (0, s.ur)(e).then(() => {}) : Promise.reject()
    ),
});
