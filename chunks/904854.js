n.d(t, {
    A: () => _,
});
var r = n(627968),
    i = n(64700),
    l = n(158954),
    a = n(311907),
    s = n(397927),
    o = n(21119),
    c = n(907459),
    u = n(287809),
    d = n(763754),
    p = n(447215),
    m = n(888675),
    f = n(502197),
    g = n(985018),
    h = n(443300);

function _(e) {
    let { message: t, channel: n, compact: _ } = e,
        b = (0, f.K)(t),
        A = (0, a.yK)([u.default], () => {
            var e;
            return (null == (e = t.call) ? void 0 : e.participants) != null
                ? t.call.participants
                      .map((e) => u.default.getUser(e))
                      .filter((e) => null != e)
                      .filter((e) => e.id !== t.author.id)
                : [];
        }, [t.author.id, t.call]),
        y = (0, a.bG)([o.A], () => o.A.getUserAffinitiesMap(), []),
        v = i.useMemo(() => (0, c.L)(A, y, "VoiceSession - participants"), [A, y]),
        x = (function (e, t, n, r, i) {
            let l = (0, p.P)({
                    user: n,
                    channelId: t.id,
                    guildId: t.guild_id,
                    messageId: e.id,
                }),
                a = (0, p.P)({
                    user: r[0],
                    channelId: t.id,
                    guildId: t.guild_id,
                    messageId: e.id,
                }),
                s = (0, p.P)({
                    user: r[1],
                    channelId: t.id,
                    guildId: t.guild_id,
                    messageId: e.id,
                }),
                o = (0, d.Ay)(e),
                c = (0, d.d8)(r[0], t),
                u = (0, d.d8)(r[1], t);
            if (null == i)
                return g.intl.format(g.t["eX6e/3"], {
                    username: o.nick,
                    usernameHook: l(o),
                });
            switch (r.length) {
                case 0:
                    return g.intl.format(g.t.r618nP, {
                        username: o.nick,
                        usernameHook: l(o),
                        duration: i,
                    });
                case 1:
                    return g.intl.format(g.t["bqK+jY"], {
                        username: o.nick,
                        usernameHook: l(o),
                        username2: null == c ? void 0 : c.nick,
                        username2Hook: a(c),
                        duration: i,
                    });
                case 2:
                    return g.intl.format(g.t.kzbH4d, {
                        username: o.nick,
                        usernameHook: l(o),
                        username2: null == c ? void 0 : c.nick,
                        username2Hook: a(c),
                        username3: null == u ? void 0 : u.nick,
                        username3Hook: s(u),
                        duration: i,
                    });
                default:
                    return g.intl.format(g.t.HZzzH1, {
                        username: o.nick,
                        usernameHook: l(o),
                        username2: null == c ? void 0 : c.nick,
                        username2Hook: a(c),
                        userCount: r.length - 1,
                        duration: i,
                    });
            }
        })(t, n, t.author, v, b);
    return (0, r.jsx)(m.A, {
        iconNode: (0, r.jsx)(l.HKD, {
            size: "md",
            color: s.LU0.colors.STATUS_POSITIVE,
        }),
        iconContainerClassName: h.z,
        timestamp: t.timestamp,
        compact: _,
        children: x,
    });
}
