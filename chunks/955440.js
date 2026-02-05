n.d(e, { A: () => u });
var i = n(311907),
    l = n(73825),
    r = n(97352),
    s = n(652215);
let u = (0, i.UT)(r.A, {
    getQueryId: s.fic.SUBSCRIPTION_PLAN,
    get: (t) => {
        let e = r.A.getForSKU(t);
        return 0 === e.length ? null : e;
    },
    load: (t) => (0, l.ur)(t),
    getIsLoading: (t) => r.A.isFetchingForSKU(t),
});
