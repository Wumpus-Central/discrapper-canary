l.d(e, { A: () => r });
var i = l(17928),
    n = l(73825),
    a = l(97352),
    s = l(652215);
let r = (0, i.UT)(a.A, {
    getQueryId: s.fic.SUBSCRIPTION_PLAN,
    get: (t) => {
        let e = a.A.getForSKU(t);
        return 0 === e.length ? null : e;
    },
    load: (t) => (0, n.ur)(t).then(() => {}),
    getIsLoading: (t) => a.A.isFetchingForSKU(t),
});
