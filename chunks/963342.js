n.d(t, {
    j: () => l,
});
var r = n(311907),
    i = n(73825),
    a = n(97352),
    s = n(728458),
    o = n(652215);
let l = (0, r.UT)(a.A, {
    getQueryId: o.fic.SUBSCRIPTION_PLANS,
    get: (e) => {
        if (null == e) return null;
        let t = a.A.getForSKU(e);
        return 0 === t.length ? null : t;
    },
    load: (e) => (
        null == e &&
            s.A.addBreadcrumb({
                message: "Error loading subscription plans: skuId is null",
            }),
        null != e ? (0, i.ur)(e) : Promise.reject()
    ),
});
