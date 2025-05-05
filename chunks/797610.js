n.d(t, {
    Ib: () => c,
    M9: () => f,
    g0: () => _,
    gJ: () => d
}),
    n(73800),
    n(442837);
var r = n(430824),
    i = n(496675),
    a = n(266090),
    o = n(981631),
    s = n(176505);
function l(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '1e9ccc_1',
        i = null != (t = null == e ? void 0 : e.id) ? t : o.lds;
    return a.Z.useExperiment(
        {
            guildId: i,
            location: r
        },
        { autoTrackExposure: n }
    ).experimentState;
}
function c(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return u(l(e, n), e, t);
}
function u(e, t, n) {
    if (null == t) return !!(null != n && n.isPrivate()) && (!!n.hasFlag(s.zZ.CLYDE_AI) || r.Z.getGuildIds().some((e) => f(r.Z.getGuild(e))));
    return null != e && e !== a.P.None && i.Z.can(o.Plq.USE_CLYDE_AI, n);
}
function d(e, t) {
    var n;
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = null != (n = null == e ? void 0 : e.id) ? n : o.lds;
    return u(
        a.Z.getCurrentConfig(
            {
                guildId: i,
                location: '1e9ccc_2'
            },
            { autoTrackExposure: r }
        ).experimentState,
        e,
        t
    );
}
function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return p(e, t) !== a.P.None;
}
function _(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return p(e, t) === a.P.ClydeProfiles;
}
function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (null == e) return !1;
    let n = e.id;
    return a.Z.getCurrentConfig(
        {
            guildId: n,
            location: '1e9ccc_4'
        },
        { autoTrackExposure: t }
    ).experimentState;
}
