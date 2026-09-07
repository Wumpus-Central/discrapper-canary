_.d(t, { CI: () => T, LJ: () => c, XK: () => S, y5: () => d });
var E = _(582128),
    i = _(17928),
    a = _(935208),
    n = _(308645),
    r = _(739010),
    s = _(207913),
    A = _(393033),
    l = _(239093);
function o() {
    return (0, i.yK)([s.A], () => s.A.getClassifications()).sort(
        (e, t) => a.default.extractTimestamp(t.id) - a.default.extractTimestamp(e.id),
    );
}
function c(e) {
    let t,
        _ = (0, i.bG)([s.A], () => s.A.getClassification(e)),
        a = (0, i.bG)([s.A], () => s.A.getClassificationRequestState(e)),
        o = (0, i.bG)([s.A], () => s.A.getIsDsaEligible()),
        c = (0, i.bG)([s.A], () => s.A.getIsAppealEligible());
    return (
        (t = (0, A._g)(_)
            ? _.guild_metadata?.member_type === r.Z9.OWNER
                ? l.w$.GUILD_OWNER
                : l.w$.GUILD_MEMBER
            : l.w$.USER),
        E.useEffect(() => {
            void 0 === _ && null == a && n.hH(e);
        }, [e, _, a]),
        {
            classification: _,
            classificationRequestState: a,
            isDsaEligible: o,
            isAppealEligible: c && null != _ && null == _.appeal_status,
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
    return (0, i.bG)([s.A], () => s.A.getAppealSignal());
}
