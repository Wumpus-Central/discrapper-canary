"use strict";
n.d(t, { A: () => f });
var i = n(627968),
    r = n(64700),
    s = n(158954),
    l = n(311907),
    a = n(397927),
    c = n(802341),
    o = n(538451),
    u = n(734057),
    d = n(562153),
    _ = n(944052),
    E = n(480012),
    A = n(763754),
    m = n(447215),
    I = n(888675),
    T = n(985018),
    g = n(139487);
function N(e) {
    let { users: t, guildId: n, channelId: r } = e;
    return (0, i.jsx)(a.lGe, {
        className: g.XM,
        children: (0, i.jsx)(a.HOs, {
            className: g.XG,
            children: (0, i.jsx)("div", {
                children: t.map((e) =>
                    (0, i.jsx)(
                        o.A,
                        { user: e, guildId: n ?? void 0, channelId: r, nick: d.Ay.getNickname(n, r, e) },
                        e.id,
                    ),
                ),
            }),
        }),
    });
}
function f(e) {
    let { message: t, channel: n, compact: o } = e,
        d = (0, E.A)(t),
        f = (0, _.X7)(t),
        p = t.messageReference?.channel_id,
        C = (0, l.bG)([u.A], () => u.A.getChannel(p)),
        h = (function (e, t, n, s, l, o) {
            let u = (0, m.P)({ user: n, channelId: t.id, guildId: t.guild_id, messageId: e.id }),
                d = (0, m.P)({ user: s[0], channelId: t.id, guildId: t.guild_id, messageId: e.id }),
                _ = (0, m.P)({ user: s[1], channelId: t.id, guildId: t.guild_id, messageId: e.id }),
                E = (0, A.Ay)(e),
                [I, f] = s,
                p = (0, A.d8)(I, t),
                C = (0, A.d8)(f, t),
                h = (function (e, t) {
                    let n = r.useRef(null),
                        [s, l] = r.useState(!1),
                        c = r.useCallback((n) => (0, i.jsx)(N, { users: n, guildId: e, channelId: t }), [e, t]);
                    return r.useCallback(
                        (e) => (t, r) =>
                            (0, i.jsx)(
                                a.YNO,
                                {
                                    targetElementRef: n,
                                    renderPopout: () => c(e),
                                    shouldShow: s,
                                    position: "bottom",
                                    onRequestClose: () => l(!1),
                                    children: (e) =>
                                        (0, i.jsx)(a.DUT, {
                                            ...e,
                                            tag: "a",
                                            style: { display: "inline" },
                                            innerRef: n,
                                            onClick: () => {
                                                l((e) => !e);
                                            },
                                            children: t,
                                        }),
                                },
                                r,
                            ),
                        [s, c],
                    );
                })(t.guild_id, t.id),
                S = r.useCallback(
                    (e, t) =>
                        null == o
                            ? e
                            : (0, i.jsx)(
                                  c.T,
                                  {
                                      channel: o,
                                      childWrapperClassName: g.c6,
                                      children: (0, i.jsx)(a.DUT, { tag: "a", children: e }),
                                  },
                                  t,
                              ),
                    [o],
                );
            return null == l
                ? T.intl.format(T.t["eX6e/3"], { username: E.nick, usernameHook: u(E), channelHook: S })
                : T.intl.format(T.t.YUbgR8, {
                      userCount: s.length + 1,
                      username: E.nick,
                      usernameHook: u(E),
                      username2: p.nick,
                      username2Hook: d(p),
                      username3: C.nick,
                      username3Hook: _(C),
                      otherCount: s.length - 1,
                      othersHook: h([n, ...s]),
                      duration: l,
                  });
        })(t, n, t.author, f, d, C),
        S = r.useMemo(() => {
            let e = (0, i.jsx)(s.HKD, { size: "md", color: a.LU0.colors.STATUS_POSITIVE });
            return null == C || null != d
                ? e
                : (0, i.jsx)(c.T, {
                      channel: C,
                      children: (0, i.jsx)(s.HKD, { size: "md", color: a.LU0.colors.STATUS_POSITIVE }),
                  });
        }, [C, d]);
    return (0, i.jsx)(I.A, {
        iconNode: S,
        iconContainerClassName: g.zc,
        timestamp: t.timestamp,
        compact: o,
        children: h,
    });
}
