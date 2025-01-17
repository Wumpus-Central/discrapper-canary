r.d(n, {
    Ib: function () {
        return c;
    },
    M9: function () {
        return _;
    },
    g0: function () {
        return h;
    },
    gJ: function () {
        return f;
    }
}),
    r(192379),
    r(442837);
var i = r(430824),
    a = r(496675),
    s = r(266090),
    o = r(981631),
    l = r(176505);
function u(e) {
    var n;
    let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '1e9ccc_1',
        a = null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : o.lds;
    return s.Z.useExperiment(
        {
            guildId: a,
            location: i
        },
        { autoTrackExposure: r }
    ).experimentState;
}
function c(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return d(u(e, r), e, n);
}
function d(e, n, r) {
    if (null == n) {
        if (null != r && r.isPrivate()) return !!r.hasFlag(l.zZ.CLYDE_AI) || i.Z.getGuildIds().some((e) => _(i.Z.getGuild(e)));
        return !1;
    }
    return null != e && e !== s.P.None && a.Z.can(o.Plq.USE_CLYDE_AI, r);
}
function f(e, n) {
    var r;
    let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        a = null !== (r = null == e ? void 0 : e.id) && void 0 !== r ? r : o.lds;
    return d(
        s.Z.getCurrentConfig(
            {
                guildId: a,
                location: '1e9ccc_2'
            },
            { autoTrackExposure: i }
        ).experimentState,
        e,
        n
    );
}
function _(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return p(e, n) !== s.P.None;
}
function h(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return p(e, n) === s.P.ClydeProfiles;
}
function p(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (null == e) return !1;
    let r = e.id;
    return s.Z.getCurrentConfig(
        {
            guildId: r,
            location: '1e9ccc_4'
        },
        { autoTrackExposure: n }
    ).experimentState;
}
