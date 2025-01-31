n.d(t, {
    F4: () => g,
    So: () => y,
    mc: () => v,
    vw: () => E
});
var i = n(314897),
    r = n(592125),
    a = n(430824),
    s = n(594174),
    o = n(979651),
    l = n(111361),
    u = n(386542),
    c = n(114064),
    d = n(1163),
    f = n(474936),
    _ = n(981631),
    p = n(37113);
function h() {
    let e = s.default.getCurrentUser();
    return null != e && !(0, l.I5)(e, f.p9.TIER_1);
}
function m() {
    var e;
    let t = null === (e = o.Z.getVoiceStateForUser(i.default.getId())) || void 0 === e ? void 0 : e.channelId;
    if (null == t) return !1;
    let n = r.Z.getChannel(t);
    if (null == n) return !1;
    let s = a.Z.getGuild(n.guild_id);
    return null != s && s.premiumTier >= _.Eu4.TIER_2;
}
function g() {
    let { enabled: e } = d.Z.getCurrentConfig({ location: 'shouldFetchPerksDemos' }, { autoTrackExposure: !1 });
    return e && c.Z.shouldFetch() && h() && !m();
}
function E(e) {
    let { enabled: t } = d.Z.getCurrentConfig({ location: 'shouldFetchPerksDemos' }, { autoTrackExposure: !1 });
    return t && c.Z.shouldActivate(e) && h() && !m();
}
function v(e, t) {
    return e === p.LY.RESOLUTION_720 && t !== p.ws.FPS_60;
}
function y(e) {
    let { activated: t } = (0, u.k)(e);
    return t;
}
