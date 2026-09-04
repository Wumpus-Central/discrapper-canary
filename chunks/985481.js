E.d(t, { CI: () => c, LJ: () => T, XK: () => S, y5: () => U });
var _ = E(582128),
    i = E(17928),
    n = E(935208),
    a = E(308645),
    r = E(739010),
    s = E(207913),
    A = E(393033),
    o = E(239093);
function l() {
    return (0, i.yK)([s.A], () => s.A.getClassifications()).sort(
        (e, t) => n.default.extractTimestamp(t.id) - n.default.extractTimestamp(e.id),
    );
}
function T(e) {
    let t,
        E = (0, i.bG)([s.A], () => s.A.getClassification(e)),
        n = (0, i.bG)([s.A], () => s.A.getClassificationRequestState(e)),
        l = (0, i.bG)([s.A], () => s.A.getIsDsaEligible()),
        T = (0, i.bG)([s.A], () => s.A.getIsAppealEligible());
    return (
        (t = (0, A._g)(E)
            ? E.guild_metadata?.member_type === r.Z9.OWNER
                ? o.w$.GUILD_OWNER
                : o.w$.GUILD_MEMBER
            : o.w$.USER),
        _.useEffect(() => {
            void 0 === E && null == n && a.hH(e);
        }, [e, E, n]),
        {
            classification: E,
            classificationRequestState: n,
            isDsaEligible: l,
            isAppealEligible: T && null != E && null == E.appeal_status,
            violationType: t,
        }
    );
}
function c() {
    let e = l(),
        t = new Date();
    return e.filter((e) => new Date(e.max_expiration_time) > t);
}
function S() {
    let e = l(),
        t = new Date();
    return e.filter((e) => new Date(e.max_expiration_time) <= t);
}
function U() {
    return (0, i.bG)([s.A], () => s.A.getAppealSignal());
}
