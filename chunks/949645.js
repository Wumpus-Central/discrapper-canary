n.d(t, { A: () => S }), n(896048), n(667532);
var r = n(310953),
    i = n(473529),
    a = n(335934),
    s = n(380335),
    o = n(157550),
    l = n(366811),
    c = n(253932),
    u = n(189081),
    d = n(839067),
    f = n(645959),
    p = n(403362),
    _ = n(265422),
    h = n(652215),
    m = n(746080);
let g = () => {
    let e = s.A.getMessageRequestsCount() > 0 || o.A.getSpamChannelsCount() > 0;
    return [
        h.BVt.FRIENDS,
        (0, a.HF)("navigateToChannel") ? h.BVt.ICYMI : null,
        u.A.hasLibraryApplication() && !c.l_.getSetting() ? h.BVt.APPLICATION_LIBRARY : null,
        e ? h.BVt.MESSAGE_REQUESTS : null,
        h.BVt.APPLICATION_STORE,
        h.BVt.COLLECTIBLES_SHOP,
        c.dm.getSetting() ? h.BVt.FAMILY_CENTER : null,
        h.BVt.QUEST_HOME_V2,
    ].filter(p.Vq);
};
function E(e, t) {
    return e < 0 ? t - 1 : e >= t ? 0 : e;
}
function b(e) {
    return g().findIndex((t) => e.startsWith(t));
}
function y(e, t) {
    (0, _.i)(e, t);
}
function O(e) {
    let t = d.A.getCurrentRoute();
    e === h.BVt.APPLICATION_STORE && null != t ? (0, _.a)(t) : (0, _.a)(e);
}
function A(e) {
    let { channelId: t, path: n, basePath: r } = l.A.getState(),
        i = f.A.getPrivateChannelIds(),
        a = __OVERLAY__ ? i : [...g(), ...i],
        s = (null == t ? b(null != n ? n : r) : null != t ? a.indexOf(t) : 0) + e;
    s >= a.length ? (s = 0) : s < 0 && (s = a.length - 1);
    let o = a[s];
    g().includes(o) ? O(o) : y(h.ME, o);
}
function v(e, t) {
    let n = l.A.getState().channelId,
        a = (0, r.A)(t, { withCurrentVoiceChannel: !0 }).map((e) => e.id);
    (0, i.K)(t) && a.unshift(m.VV.GUILD_HOME);
    let s = E((null != n ? a.indexOf(n) : -1) + e, a.length);
    y(t, a[s]);
}
function S() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
        t = l.A.getState().guildId;
    null == t ? A(e) : v(e, t);
}
