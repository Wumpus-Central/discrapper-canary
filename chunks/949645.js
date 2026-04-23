n.d(t, { A: () => C }), n(667532);
var i = n(310953),
    l = n(473529),
    r = n(335934),
    s = n(380335),
    o = n(157550),
    a = n(366811),
    d = n(253932),
    c = n(189081),
    u = n(839067),
    _ = n(645959),
    A = n(403362),
    E = n(265422),
    I = n(652215),
    h = n(746080);
let g = () => {
    let e = s.A.getMessageRequestsCount() > 0 || o.A.getSpamChannelsCount() > 0;
    return [
        I.BVt.FRIENDS,
        (0, r.HF)("navigateToChannel") ? I.BVt.ICYMI : null,
        c.A.hasLibraryApplication() && !d.l_.getSetting() ? I.BVt.APPLICATION_LIBRARY : null,
        e ? I.BVt.MESSAGE_REQUESTS : null,
        I.BVt.APPLICATION_STORE,
        I.BVt.COLLECTIBLES_SHOP,
        d.dm.getSetting() ? I.BVt.FAMILY_CENTER : null,
        I.BVt.QUEST_HOME,
    ].filter(A.Vq);
};
function C() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
        t = a.A.getState().guildId;
    if (null == t)
        !(function (e) {
            var t, n;
            let { channelId: i, path: l, basePath: r } = a.A.getState(),
                s = _.default.getPrivateChannelIds(),
                o = __OVERLAY__ ? s : [...g(), ...s],
                d =
                    (null == i ? ((t = l ?? r), g().findIndex((e) => t.startsWith(e))) : null != i ? o.indexOf(i) : 0) +
                    e;
            d >= o.length ? (d = 0) : d < 0 && (d = o.length - 1);
            let c = o[d];
            if (g().includes(c)) {
                let e;
                (e = u.A.getCurrentRoute()), c === I.BVt.APPLICATION_STORE && null != e ? (0, E.a)(e) : (0, E.a)(c);
            } else (n = I.ME), (0, E.i)(n, c);
        })(e);
    else {
        var n, r, s;
        let o, d;
        (o = a.A.getState().channelId),
            (d = (0, i.A)(t, { withCurrentVoiceChannel: !0 }).map((e) => e.id)),
            (0, l.K)(t) && d.unshift(h.VV.GUILD_HOME),
            (n = (null != o ? d.indexOf(o) : -1) + e),
            (r = d.length),
            (s = d[n < 0 ? r - 1 : n >= r ? 0 : n]),
            (0, E.i)(t, s);
    }
}
