n.d(t, { A: () => A });
var i = n(627968),
    l = n(64700),
    a = n(158954),
    r = n(311907),
    s = n(397927),
    o = n(21119),
    d = n(907459),
    c = n(287809),
    u = n(763754),
    m = n(447215),
    _ = n(888675),
    h = n(502197),
    p = n(985018),
    g = n(443300);
function A(e) {
    var t;
    let n,
        A,
        f,
        x,
        E,
        C,
        { message: I, channel: T, compact: v } = e,
        N = (0, h.K)(I),
        S = (0, r.yK)(
            [c.default],
            () =>
                I.call?.participants != null
                    ? I.call.participants
                          .map((e) => c.default.getUser(e))
                          .filter((e) => null != e)
                          .filter((e) => e.id !== I.author.id)
                    : [],
            [I.author.id, I.call],
        ),
        b = (0, r.bG)([o.A], () => o.A.getUserAffinitiesMap(), []),
        y = l.useMemo(() => (0, d.L)(S, b, "VoiceSession - participants"), [S, b]),
        j =
            ((t = I.author),
            (n = (0, m.P)({ user: t, channelId: T.id, guildId: T.guild_id, messageId: I.id })),
            (A = (0, m.P)({ user: y[0], channelId: T.id, guildId: T.guild_id, messageId: I.id })),
            (f = (0, m.P)({ user: y[1], channelId: T.id, guildId: T.guild_id, messageId: I.id })),
            (x = (0, u.Ay)(I)),
            (E = (0, u.d8)(y[0], T)),
            (C = (0, u.d8)(y[1], T)),
            null == N
                ? p.intl.format(p.t["eX6e/3"], { username: x.nick, usernameHook: n(x) })
                : p.intl.format(p.t.YUbgR8, {
                      userCount: y.length + 1,
                      username: x.nick,
                      usernameHook: n(x),
                      username2: E.nick,
                      username2Hook: A(E),
                      username3: C.nick,
                      username3Hook: f(C),
                      otherCount: y.length - 1,
                      duration: N,
                  }));
    return (0, i.jsx)(_.A, {
        iconNode: (0, i.jsx)(a.HKD, { size: "md", color: s.LU0.colors.STATUS_POSITIVE }),
        iconContainerClassName: g.z,
        timestamp: I.timestamp,
        compact: v,
        children: j,
    });
}
