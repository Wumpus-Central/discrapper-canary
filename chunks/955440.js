i.d(e, { A: () => r });
var n = i(311907),
    l = i(73825),
    s = i(97352),
    a = i(652215);
let r = (0, n.UT)(s.A, {
    getQueryId: a.fic.SUBSCRIPTION_PLAN,
    get: (t) => {
        let e = s.A.getForSKU(t);
        return 0 === e.length ? null : e;
    },
    load: (t) => (0, l.ur)(t).then(() => {}),
    getIsLoading: (t) => s.A.isFetchingForSKU(t),
});
