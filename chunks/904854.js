n.d(t, { A: () => h });
var i = n(627968),
    a = n(64700),
    l = n(158954),
    r = n(311907),
    s = n(397927),
    o = n(802341),
    c = n(538451),
    d = n(21119),
    u = n(907459),
    _ = n(734057),
    m = n(287809),
    A = n(562153),
    E = n(763754),
    I = n(447215),
    T = n(888675),
    f = n(502197),
    N = n(985018),
    g = n(443300);
function C(e) {
    let { users: t, guildId: n, channelId: a } = e;
    return (0, i.jsx)(s.lGe, {
        className: g.XM,
        children: (0, i.jsx)(s.HOs, {
            className: g.XG,
            children: (0, i.jsx)("div", {
                children: t.map((e) =>
                    (0, i.jsx)(
                        c.A,
                        { user: e, guildId: n ?? void 0, channelId: a, nick: A.Ay.getNickname(n, a, e) },
                        e.id,
                    ),
                ),
            }),
        }),
    });
}
function h(e) {
    let { message: t, channel: n, compact: c } = e,
        A = (0, f.K)(t),
        h = (0, r.yK)(
            [m.default],
            () =>
                t.call?.participants != null
                    ? t.call.participants
                          .map((e) => m.default.getUser(e))
                          .filter((e) => null != e)
                          .filter((e) => e.id !== t.author.id)
                    : [],
            [t.author.id, t.call],
        ),
        p = (0, r.bG)([d.A], () => d.A.getUserAffinitiesMap(), []),
        x = a.useMemo(() => (0, u.L)(h, p, "VoiceSession - participants"), [h, p]),
        R = t.messageReference?.channel_id,
        S = (0, r.bG)([_.A], () => _.A.getChannel(R)),
        O = (function (e, t, n, l, r, c) {
            let d = (0, I.P)({ user: n, channelId: t.id, guildId: t.guild_id, messageId: e.id }),
                u = (0, I.P)({ user: l[0], channelId: t.id, guildId: t.guild_id, messageId: e.id }),
                _ = (0, I.P)({ user: l[1], channelId: t.id, guildId: t.guild_id, messageId: e.id }),
                m = (0, E.Ay)(e),
                [A, T] = l,
                f = (0, E.d8)(A, t),
                h = (0, E.d8)(T, t),
                p = (function (e, t) {
                    let n = a.useRef(null),
                        [l, r] = a.useState(!1),
                        o = a.useCallback((n) => (0, i.jsx)(C, { users: n, guildId: e, channelId: t }), [e, t]);
                    return a.useCallback(
                        (e) => (t, a) =>
                            (0, i.jsx)(
                                s.YNO,
                                {
                                    targetElementRef: n,
                                    renderPopout: () => o(e),
                                    shouldShow: l,
                                    position: "bottom",
                                    onRequestClose: () => r(!1),
                                    children: (e) =>
                                        (0, i.jsx)(s.DUT, {
                                            ...e,
                                            tag: "a",
                                            style: { display: "inline" },
                                            innerRef: n,
                                            onClick: () => {
                                                r((e) => !e);
                                            },
                                            children: t,
                                        }),
                                },
                                a,
                            ),
                        [l, o],
                    );
                })(t.guild_id, t.id),
                x = a.useCallback(
                    (e, t) =>
                        null == c
                            ? e
                            : (0, i.jsx)(
                                  o.T,
                                  {
                                      channel: c,
                                      childWrapperClassName: g.c6,
                                      children: (0, i.jsx)(s.DUT, { tag: "a", children: e }),
                                  },
                                  t,
                              ),
                    [c],
                );
            return null == r
                ? N.intl.format(N.t["eX6e/3"], { username: m.nick, usernameHook: d(m), channelHook: x })
                : N.intl.format(N.t.YUbgR8, {
                      userCount: l.length + 1,
                      username: m.nick,
                      usernameHook: d(m),
                      username2: f.nick,
                      username2Hook: u(f),
                      username3: h.nick,
                      username3Hook: _(h),
                      otherCount: l.length - 1,
                      othersHook: p([n, ...l]),
                      duration: r,
                  });
        })(t, n, t.author, x, A, S),
        M = a.useMemo(() => {
            let e = (0, i.jsx)(l.HKD, { size: "md", color: s.LU0.colors.STATUS_POSITIVE });
            return null == S || null != A
                ? e
                : (0, i.jsx)(o.T, {
                      channel: S,
                      children: (0, i.jsx)(l.HKD, { size: "md", color: s.LU0.colors.STATUS_POSITIVE }),
                  });
        }, [S, A]);
    return (0, i.jsx)(T.A, {
        iconNode: M,
        iconContainerClassName: g.zc,
        timestamp: t.timestamp,
        compact: c,
        children: O,
    });
}
