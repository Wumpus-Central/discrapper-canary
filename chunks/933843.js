r.d(n, {
    F4: function () {
        return E;
    },
    So: function () {
        return b;
    },
    mc: function () {
        return y;
    },
    vw: function () {
        return v;
    }
});
var i = r(314897),
    a = r(592125),
    o = r(430824),
    s = r(594174),
    l = r(979651),
    u = r(111361),
    c = r(386542),
    d = r(114064),
    f = r(1163),
    p = r(474936),
    h = r(981631),
    _ = r(37113);
function m() {
    let e = s.default.getCurrentUser();
    return null != e && !(0, u.I5)(e, p.p9.TIER_1);
}
function g() {
    var e;
    let n = null === (e = l.Z.getVoiceStateForUser(i.default.getId())) || void 0 === e ? void 0 : e.channelId;
    if (null == n) return !1;
    let r = a.Z.getChannel(n);
    if (null == r) return !1;
    let s = o.Z.getGuild(r.guild_id);
    return null != s && s.premiumTier >= h.Eu4.TIER_2;
}
function E() {
    let { enabled: e } = f.Z.getCurrentConfig({ location: 'shouldFetchPerksDemos' }, { autoTrackExposure: !1 });
    return e && d.Z.shouldFetch() && m() && !g();
}
function v(e) {
    let { enabled: n } = f.Z.getCurrentConfig({ location: 'shouldFetchPerksDemos' }, { autoTrackExposure: !1 });
    return n && d.Z.shouldActivate(e) && m() && !g();
}
function y(e, n) {
    return e === _.LY.RESOLUTION_720 && n !== _.ws.FPS_60;
}
function b(e) {
    let { activated: n } = (0, c.k)(e);
    return n;
}
