n.d(t, { A: () => C }), n(667532);
var i = n(310953),
    r = n(473529),
    a = n(335934),
    l = n(380335),
    s = n(157550),
    o = n(366811),
    d = n(253932),
    _ = n(189081),
    c = n(839067),
    u = n(645959),
    A = n(403362),
    g = n(265422),
    I = n(652215),
    E = n(746080);
let h = () => {
    let e = l.A.getMessageRequestsCount() > 0 || s.A.getSpamChannelsCount() > 0;
    return [
        I.BVt.FRIENDS,
        (0, a.HF)("navigateToChannel") ? I.BVt.ICYMI : null,
        _.A.hasLibraryApplication() && !d.l_.getSetting() ? I.BVt.APPLICATION_LIBRARY : null,
        e ? I.BVt.MESSAGE_REQUESTS : null,
        I.BVt.APPLICATION_STORE,
        I.BVt.COLLECTIBLES_SHOP,
        d.dm.getSetting() ? I.BVt.FAMILY_CENTER : null,
        I.BVt.QUEST_HOME,
    ].filter(A.Vq);
};
function C() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
        t = o.A.getState().guildId;
    if (null == t)
        !(function (e) {
            var t, n;
            let { channelId: i, path: r, basePath: a } = o.A.getState(),
                l = u.default.getPrivateChannelIds(),
                s = __OVERLAY__ ? l : [...h(), ...l],
                d =
                    (null == i ? ((t = r ?? a), h().findIndex((e) => t.startsWith(e))) : null != i ? s.indexOf(i) : 0) +
                    e;
            d >= s.length ? (d = 0) : d < 0 && (d = s.length - 1);
            let _ = s[d];
            if (h().includes(_)) {
                let e;
                (e = c.A.getCurrentRoute()), _ === I.BVt.APPLICATION_STORE && null != e ? (0, g.a)(e) : (0, g.a)(_);
            } else (n = I.ME), (0, g.i)(n, _);
        })(e);
    else {
        var n, a, l;
        let s, d;
        (s = o.A.getState().channelId),
            (d = (0, i.A)(t, { withCurrentVoiceChannel: !0 }).map((e) => e.id)),
            (0, r.K)(t) && d.unshift(E.VV.GUILD_HOME),
            (n = (null != s ? d.indexOf(s) : -1) + e),
            (a = d.length),
            (l = d[n < 0 ? a - 1 : n >= a ? 0 : n]),
            (0, g.i)(t, l);
    }
}
