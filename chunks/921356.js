n.d(e, {
    O: () => T,
    a: () => S,
});
var i = n(442837),
    l = n(509613),
    s = n(594174),
    u = n(313789),
    r = n(453706),
    a = n(968021),
    o = n(388032);
function T() {
    let t = (0, a.Y)(),
        e = (0, i.e7)([s.default], () => {
            let t = s.default.getCurrentUser();
            return null != t && !t.verified;
        });
    return !t && e;
}
let S = (0, l.ON)(u.n.ACCOUNT_UNVERIFIED_USER_NOTICE, {
    useSearchTerms: () => [o.intl.string(o.t.m0FidJ)],
    usePredicate: T,
    Component: r.Z,
});
