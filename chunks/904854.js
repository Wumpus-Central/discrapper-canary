n.d(t, { A: () => f });
var i = n(627968),
    l = n(64700),
    a = n(158954),
    r = n(311907),
    s = n(397927),
    o = n(802341),
    c = n(538451),
    d = n(734057),
    u = n(562153),
    _ = n(944052),
    A = n(480012),
    m = n(763754),
    E = n(447215),
    T = n(888675),
    I = n(985018),
    N = n(139487);
function g(e) {
    let { users: t, guildId: n, channelId: l } = e;
    return (0, i.jsx)(s.lGe, {
        className: N.XM,
        children: (0, i.jsx)(s.HOs, {
            className: N.XG,
            children: (0, i.jsx)("div", {
                children: t.map((e) =>
                    (0, i.jsx)(
                        c.A,
                        { user: e, guildId: n ?? void 0, channelId: l, nick: u.Ay.getNickname(n, l, e) },
                        e.id,
                    ),
                ),
            }),
        }),
    });
}
function f(e) {
    let { message: t, channel: n, compact: c } = e,
        u = (0, A.A)(t),
        f = (0, _.X7)(t),
        C = t.messageReference?.channel_id,
        h = (0, r.bG)([d.A], () => d.A.getChannel(C)),
        p = (function (e, t, n, a, r, c) {
            let d = (0, E.P)({ user: n, channelId: t.id, guildId: t.guild_id, messageId: e.id }),
                u = (0, E.P)({ user: a[0], channelId: t.id, guildId: t.guild_id, messageId: e.id }),
                _ = (0, E.P)({ user: a[1], channelId: t.id, guildId: t.guild_id, messageId: e.id }),
                A = (0, m.Ay)(e),
                [T, f] = a,
                C = (0, m.d8)(T, t),
                h = (0, m.d8)(f, t),
                p = (function (e, t) {
                    let n = l.useRef(null),
                        [a, r] = l.useState(!1),
                        o = l.useCallback((n) => (0, i.jsx)(g, { users: n, guildId: e, channelId: t }), [e, t]);
                    return l.useCallback(
                        (e) => (t, l) =>
                            (0, i.jsx)(
                                s.YNO,
                                {
                                    targetElementRef: n,
                                    renderPopout: () => o(e),
                                    shouldShow: a,
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
                                l,
                            ),
                        [a, o],
                    );
                })(t.guild_id, t.id),
                S = l.useCallback(
                    (e, t) =>
                        null == c
                            ? e
                            : (0, i.jsx)(
                                  o.T,
                                  {
                                      channel: c,
                                      childWrapperClassName: N.c6,
                                      children: (0, i.jsx)(s.DUT, { tag: "a", children: e }),
                                  },
                                  t,
                              ),
                    [c],
                );
            return null == r
                ? I.intl.format(I.t["eX6e/3"], { username: A.nick, usernameHook: d(A), channelHook: S })
                : I.intl.format(I.t.YUbgR8, {
                      userCount: a.length + 1,
                      username: A.nick,
                      usernameHook: d(A),
                      username2: C.nick,
                      username2Hook: u(C),
                      username3: h.nick,
                      username3Hook: _(h),
                      otherCount: a.length - 1,
                      othersHook: p([n, ...a]),
                      duration: r,
                  });
        })(t, n, t.author, f, u, h),
        S = l.useMemo(() => {
            let e = (0, i.jsx)(a.HKD, { size: "md", color: s.LU0.colors.STATUS_POSITIVE });
            return null == h || null != u
                ? e
                : (0, i.jsx)(o.T, {
                      channel: h,
                      children: (0, i.jsx)(a.HKD, { size: "md", color: s.LU0.colors.STATUS_POSITIVE }),
                  });
        }, [h, u]);
    return (0, i.jsx)(T.A, {
        iconNode: S,
        iconContainerClassName: N.zc,
        timestamp: t.timestamp,
        compact: c,
        children: p,
    });
}
