n.d(t, {
    A: () => h,
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
    _ = n(443300);

function h(e) {
    var t;
    let n,
        h,
        b,
        y,
        A,
        v,
        { message: O, channel: x, compact: E } = e,
        j = (0, f.K)(O),
        C = (0, a.yK)([u.default], () => {
            var e;
            return (null == (e = O.call) ? void 0 : e.participants) != null
                ? O.call.participants
                      .map((e) => u.default.getUser(e))
                      .filter((e) => null != e)
                      .filter((e) => e.id !== O.author.id)
                : [];
        }, [O.author.id, O.call]),
        I = (0, a.bG)([o.A], () => o.A.getUserAffinitiesMap(), []),
        S = i.useMemo(() => (0, c.L)(C, I, "VoiceSession - participants"), [C, I]),
        T =
            ((t = O.author),
            (n = (0, p.P)({
                user: t,
                channelId: x.id,
                guildId: x.guild_id,
                messageId: O.id,
            })),
            (h = (0, p.P)({
                user: S[0],
                channelId: x.id,
                guildId: x.guild_id,
                messageId: O.id,
            })),
            (b = (0, p.P)({
                user: S[1],
                channelId: x.id,
                guildId: x.guild_id,
                messageId: O.id,
            })),
            (y = (0, d.Ay)(O)),
            (A = (0, d.d8)(S[0], x)),
            (v = (0, d.d8)(S[1], x)),
            null == j
                ? g.intl.format(g.t["eX6e/3"], {
                      username: y.nick,
                      usernameHook: n(y),
                  })
                : g.intl.format(g.t.YUbgR8, {
                      userCount: S.length + 1,
                      username: y.nick,
                      usernameHook: n(y),
                      username2: A.nick,
                      username2Hook: h(A),
                      username3: v.nick,
                      username3Hook: b(v),
                      otherCount: S.length - 1,
                      duration: j,
                  }));
    return (0, r.jsx)(m.A, {
        iconNode: (0, r.jsx)(l.HKD, {
            size: "md",
            color: s.LU0.colors.STATUS_POSITIVE,
        }),
        iconContainerClassName: _.z,
        timestamp: O.timestamp,
        compact: E,
        children: T,
    });
}
