n.d(t, { A: () => u, k: () => c });
var i = n(311907),
    s = n(419954),
    l = n(287809),
    a = n(780964),
    r = n(327605),
    o = n(398336),
    d = n(985018);
function u() {
    let e = (0, o.b)(),
        t = (0, i.bG)([l.default], () => {
            let e = l.default.getCurrentUser();
            return null != e && !e.verified;
        });
    return !e && t;
}
let c = (0, s.E2)(a.X.ACCOUNT_UNVERIFIED_USER_NOTICE, {
    useSearchTerms: () => [d.intl.string(d.t.m0FidJ)],
    usePredicate: u,
    Component: r.A,
});
