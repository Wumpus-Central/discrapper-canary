n.d(t, {
    A: () => o,
});
var r = n(311907),
    i = n(73825),
    a = n(97352),
    s = n(652215);
let o = (0, r.UT)(a.A, {
    getQueryId: s.fic.SUBSCRIPTION_PLAN,
    get: (e) => {
        let t = a.A.getForSKU(e);
        return 0 === t.length ? null : t;
    },
    load: (e) => (0, i.ur)(e),
    getIsLoading: (e) => a.A.isFetchingForSKU(e),
});
