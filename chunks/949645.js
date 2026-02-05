n.d(t, { A: () => p }), n(667532);
var i = n(310953),
    s = n(473529),
    r = n(335934),
    a = n(380335),
    l = n(157550),
    o = n(366811),
    c = n(253932),
    d = n(189081),
    u = n(839067),
    _ = n(645959),
    m = n(403362),
    A = n(265422),
    g = n(652215),
    E = n(746080);
let h = () => {
    let e = a.A.getMessageRequestsCount() > 0 || l.A.getSpamChannelsCount() > 0;
    return [
        g.BVt.FRIENDS,
        (0, r.HF)("navigateToChannel") ? g.BVt.ICYMI : null,
        d.A.hasLibraryApplication() && !c.l_.getSetting() ? g.BVt.APPLICATION_LIBRARY : null,
        e ? g.BVt.MESSAGE_REQUESTS : null,
        g.BVt.APPLICATION_STORE,
        g.BVt.COLLECTIBLES_SHOP,
        c.dm.getSetting() ? g.BVt.FAMILY_CENTER : null,
        g.BVt.QUEST_HOME_V2,
    ].filter(m.Vq);
};
function p() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
        t = o.A.getState().guildId;
    if (null == t)
        !(function (e) {
            var t, n;
            let { channelId: i, path: s, basePath: r } = o.A.getState(),
                a = _.default.getPrivateChannelIds(),
                l = __OVERLAY__ ? a : [...h(), ...a],
                c =
                    (null == i ? ((t = s ?? r), h().findIndex((e) => t.startsWith(e))) : null != i ? l.indexOf(i) : 0) +
                    e;
            c >= l.length ? (c = 0) : c < 0 && (c = l.length - 1);
            let d = l[c];
            if (h().includes(d)) {
                let e;
                (e = u.A.getCurrentRoute()), d === g.BVt.APPLICATION_STORE && null != e ? (0, A.a)(e) : (0, A.a)(d);
            } else (n = g.ME), (0, A.i)(n, d);
        })(e);
    else {
        var n, r, a;
        let l, c;
        (l = o.A.getState().channelId),
            (c = (0, i.A)(t, { withCurrentVoiceChannel: !0 }).map((e) => e.id)),
            (0, s.K)(t) && c.unshift(E.VV.GUILD_HOME),
            (n = (null != l ? c.indexOf(l) : -1) + e),
            (r = c.length),
            (a = c[n < 0 ? r - 1 : n >= r ? 0 : n]),
            (0, A.i)(t, a);
    }
}
