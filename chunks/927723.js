n.d(t, {
    Ib: () => u,
    M9: () => f,
    g0: () => _,
    gJ: () => d
}),
    n(192379),
    n(442837);
var i = n(430824),
    r = n(496675),
    a = n(266090),
    s = n(981631),
    o = n(176505);
function l(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '1e9ccc_1',
        r = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : s.lds;
    return a.Z.useExperiment(
        {
            guildId: r,
            location: i
        },
        { autoTrackExposure: n }
    ).experimentState;
}
function u(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return c(l(e, n), e, t);
}
function c(e, t, n) {
    if (null == t) return !!(null != n && n.isPrivate()) && (!!n.hasFlag(o.zZ.CLYDE_AI) || i.Z.getGuildIds().some((e) => f(i.Z.getGuild(e))));
    return null != e && e !== a.P.None && r.Z.can(s.Plq.USE_CLYDE_AI, n);
}
function d(e, t) {
    var n;
    let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : s.lds;
    return c(
        a.Z.getCurrentConfig(
            {
                guildId: r,
                location: '1e9ccc_2'
            },
            { autoTrackExposure: i }
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
