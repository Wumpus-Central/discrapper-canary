n.d(t, {
    CI: () => p,
    LJ: () => f,
    XK: () => _,
    y5: () => h,
}),
    n(638769);
var r = n(64700),
    i = n(311907),
    a = n(661191),
    s = n(308645),
    o = n(739010),
    l = n(207913),
    c = n(393033),
    u = n(239093);

function d() {
    return (0, i.yK)([l.A], () => l.A.getClassifications()).sort(
        (e, t) => a.default.extractTimestamp(t.id) - a.default.extractTimestamp(e.id),
    );
}

function f(e) {
    let t,
        n = (0, i.bG)([l.A], () => l.A.getClassification(e)),
        a = (0, i.bG)([l.A], () => l.A.getClassificationRequestState(e)),
        d = (0, i.bG)([l.A], () => l.A.getIsDsaEligible()),
        f = (0, i.bG)([l.A], () => l.A.getIsAppealEligible());
    if ((0, c._g)(n)) {
        var p;
        t =
            (null == (p = n.guild_metadata) ? void 0 : p.member_type) === o.Z9.OWNER
                ? u.w$.GUILD_OWNER
                : u.w$.GUILD_MEMBER;
    } else t = u.w$.USER;
    return (
        r.useEffect(() => {
            void 0 === n && null == a && s.hH(e);
        }, [e, n, a]),
        {
            classification: n,
            classificationRequestState: a,
            isDsaEligible: d,
            isAppealEligible: f && null != n && null == n.appeal_status,
            violationType: t,
        }
    );
}

function p() {
    let e = d(),
        t = new Date();
    return e.filter((e) => new Date(e.max_expiration_time) > t);
}

function _() {
    let e = d(),
        t = new Date();
    return e.filter((e) => new Date(e.max_expiration_time) <= t);
}

function h() {
    return (0, i.bG)([l.A], () => l.A.getAppealSignal());
}
