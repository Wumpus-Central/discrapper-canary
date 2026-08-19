e.d(n, { A: () => a });
var i = e(17928),
    l = e(73825),
    r = e(97352),
    s = e(652215);
let a = (0, i.UT)(r.A, {
    getQueryId: s.fic.SUBSCRIPTION_PLAN,
    get: (t) => {
        let n = r.A.getForSKU(t);
        return 0 === n.length ? null : n;
    },
    load: (t) => (0, l.ur)(t).then(() => {}),
    getIsLoading: (t) => r.A.isFetchingForSKU(t),
});
