E.d(e, { CI: () => u, LJ: () => S, XK: () => o, y5: () => U });
var n = E(582128),
    _ = E(17928),
    i = E(935208),
    A = E(308645),
    l = E(739010),
    a = E(207913),
    r = E(393033),
    T = E(239093);
function s() {
    return (0, _.yK)([a.A], () => a.A.getClassifications()).sort(
        (t, e) => i.default.extractTimestamp(e.id) - i.default.extractTimestamp(t.id),
    );
}
function S(t) {
    let e,
        E = (0, _.bG)([a.A], () => a.A.getClassification(t)),
        i = (0, _.bG)([a.A], () => a.A.getClassificationRequestState(t)),
        s = (0, _.bG)([a.A], () => a.A.getIsDsaEligible()),
        S = (0, _.bG)([a.A], () => a.A.getIsAppealEligible());
    return (
        (e = (0, r._g)(E)
            ? E.guild_metadata?.member_type === l.Z9.OWNER
                ? T.w$.GUILD_OWNER
                : T.w$.GUILD_MEMBER
            : T.w$.USER),
        n.useEffect(() => {
            void 0 === E && null == i && A.hH(t);
        }, [t, E, i]),
        {
            classification: E,
            classificationRequestState: i,
            isDsaEligible: s,
            isAppealEligible: S && null != E && null == E.appeal_status,
            violationType: e,
        }
    );
}
function u() {
    let t = s(),
        e = new Date();
    return t.filter((t) => new Date(t.max_expiration_time) > e);
}
function o() {
    let t = s(),
        e = new Date();
    return t.filter((t) => new Date(t.max_expiration_time) <= e);
}
function U() {
    return (0, _.bG)([a.A], () => a.A.getAppealSignal());
}
