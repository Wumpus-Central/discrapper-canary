var e = i(855986),
    l = i(73825),
    r = i(97352),
    s = i(652215);
let a = (0, e.UT)(r.A, {
    getQueryId: s.fic.SUBSCRIPTION_PLAN,
    get: (t) => {
        let n = r.A.getForSKU(t);
        return 0 === n.length ? null : n;
    },
    load: (t) => (0, l.ur)(t).then(() => {}),
    getIsLoading: (t) => r.A.isFetchingForSKU(t),
});
i.d(n, {}, { A: a });
