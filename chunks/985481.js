i.d(t, { CI: () => T, LJ: () => c, XK: () => S, y5: () => d });
var n = i(582128),
    _ = i(17928),
    E = i(935208),
    a = i(308645),
    r = i(739010),
    s = i(207913),
    l = i(393033),
    A = i(239093);
function o() {
    return (0, _.yK)([s.A], () => s.A.getClassifications()).sort(
        (e, t) => E.default.extractTimestamp(t.id) - E.default.extractTimestamp(e.id),
    );
}
function c(e) {
    let t,
        i = (0, _.bG)([s.A], () => s.A.getClassification(e)),
        E = (0, _.bG)([s.A], () => s.A.getClassificationRequestState(e)),
        o = (0, _.bG)([s.A], () => s.A.getIsDsaEligible()),
        c = (0, _.bG)([s.A], () => s.A.getIsAppealEligible());
    return (
        (t = (0, l._g)(i)
            ? i.guild_metadata?.member_type === r.Z9.OWNER
                ? A.w$.GUILD_OWNER
                : A.w$.GUILD_MEMBER
            : A.w$.USER),
        n.useEffect(() => {
            void 0 === i && null == E && a.hH(e);
        }, [e, i, E]),
        {
            classification: i,
            classificationRequestState: E,
            isDsaEligible: o,
            isAppealEligible: c && null != i && null == i.appeal_status,
            violationType: t,
        }
    );
}
function T() {
    let e = o(),
        t = new Date();
    return e.filter((e) => new Date(e.max_expiration_time) > t);
}
function S() {
    let e = o(),
        t = new Date();
    return e.filter((e) => new Date(e.max_expiration_time) <= t);
}
function d() {
    return (0, _.bG)([s.A], () => s.A.getAppealSignal());
}
