n.d(t, {
    A: () => h,
}),
    n(896048),
    n(667532);
var r = n(310953),
    i = n(473529),
    l = n(335934),
    s = n(380335),
    a = n(157550),
    o = n(366811),
    c = n(253932),
    d = n(189081),
    u = n(839067),
    _ = n(645959),
    p = n(403362),
    m = n(265422),
    g = n(652215),
    A = n(746080);
let f = () => {
    let e = s.A.getMessageRequestsCount() > 0 || a.A.getSpamChannelsCount() > 0;
    return [
        g.BVt.FRIENDS,
        (0, l.HF)("navigateToChannel") ? g.BVt.ICYMI : null,
        d.A.hasLibraryApplication() && !c.l_.getSetting() ? g.BVt.APPLICATION_LIBRARY : null,
        e ? g.BVt.MESSAGE_REQUESTS : null,
        g.BVt.APPLICATION_STORE,
        g.BVt.COLLECTIBLES_SHOP,
        c.dm.getSetting() ? g.BVt.FAMILY_CENTER : null,
        g.BVt.QUEST_HOME_V2,
    ].filter(p.Vq);
};

function h() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
        t = o.A.getState().guildId;
    if (null == t)
        !(function (e) {
            var t, n;
            let { channelId: r, path: i, basePath: l } = o.A.getState(),
                s = _.A.getPrivateChannelIds(),
                a = __OVERLAY__ ? s : [...f(), ...s],
                c =
                    (null == r
                        ? ((t = null != i ? i : l), f().findIndex((e) => t.startsWith(e)))
                        : null != r
                          ? a.indexOf(r)
                          : 0) + e;
            c >= a.length ? (c = 0) : c < 0 && (c = a.length - 1);
            let d = a[c];
            if (f().includes(d)) {
                let e;
                (e = u.A.getCurrentRoute()), d === g.BVt.APPLICATION_STORE && null != e ? (0, m.a)(e) : (0, m.a)(d);
            } else (n = g.ME), (0, m.i)(n, d);
        })(e);
    else {
        var n, l, s;
        let a, c;
        (a = o.A.getState().channelId),
            (c = (0, r.A)(t, {
                withCurrentVoiceChannel: !0,
            }).map((e) => e.id)),
            (0, i.K)(t) && c.unshift(A.VV.GUILD_HOME),
            (n = (null != a ? c.indexOf(a) : -1) + e),
            (l = c.length),
            (s = c[n < 0 ? l - 1 : n >= l ? 0 : n]),
            (0, m.i)(t, s);
    }
}
