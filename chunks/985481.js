E.d(e, { CI: () => u, LJ: () => T, XK: () => o, y5: () => U });
var n = E(64700),
    _ = E(17928),
    i = E(935208),
    A = E(308645),
    l = E(739010),
    a = E(207913),
    r = E(393033),
    s = E(239093);
function S() {
    return (0, _.yK)([a.A], () => a.A.getClassifications()).sort(
        (t, e) => i.default.extractTimestamp(e.id) - i.default.extractTimestamp(t.id),
    );
}
function T(t) {
    let e,
        E = (0, _.bG)([a.A], () => a.A.getClassification(t)),
        i = (0, _.bG)([a.A], () => a.A.getClassificationRequestState(t)),
        S = (0, _.bG)([a.A], () => a.A.getIsDsaEligible()),
        T = (0, _.bG)([a.A], () => a.A.getIsAppealEligible());
    return (
        (e = (0, r._g)(E)
            ? E.guild_metadata?.member_type === l.Z9.OWNER
                ? s.w$.GUILD_OWNER
                : s.w$.GUILD_MEMBER
            : s.w$.USER),
        n.useEffect(() => {
            void 0 === E && null == i && A.hH(t);
        }, [t, E, i]),
        {
            classification: E,
            classificationRequestState: i,
            isDsaEligible: S,
            isAppealEligible: T && null != E && null == E.appeal_status,
            violationType: e,
        }
    );
}
function u() {
    let t = S(),
        e = new Date();
    return t.filter((t) => new Date(t.max_expiration_time) > e);
}
function o() {
    let t = S(),
        e = new Date();
    return t.filter((t) => new Date(t.max_expiration_time) <= e);
}
function U() {
    return (0, _.bG)([a.A], () => a.A.getAppealSignal());
}
