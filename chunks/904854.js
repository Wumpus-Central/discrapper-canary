"use strict";
n.d(t, { A: () => R });
var i = n(627968),
    r = n(64700),
    l = n(983851),
    s = n(311907),
    a = n(305866),
    o = n(573613),
    c = n(265872),
    u = n(939249),
    d = n(827734),
    _ = n(802341),
    E = n(538451),
    A = n(734057),
    m = n(562153),
    I = n(944052),
    T = n(480012),
    N = n(763754),
    g = n(447215),
    p = n(888675),
    C = n(985018),
    f = n(202447);
function h(e) {
    let { users: t, guildId: n, channelId: r } = e;
    return (0, i.jsx)(a.l, {
        className: f.XM,
        children: (0, i.jsx)(o.Ip, {
            className: f.XG,
            children: (0, i.jsx)("div", {
                children: t.map((e) =>
                    (0, i.jsx)(
                        E.A,
                        { user: e, guildId: n ?? void 0, channelId: r, nick: m.Ay.getNickname(n, r, e) },
                        e.id,
                    ),
                ),
            }),
        }),
    });
}
function R(e) {
    let { message: t, channel: n, compact: a } = e,
        o = (0, T.A)(t),
        E = (0, I.X7)(t),
        m = t.messageReference?.channel_id,
        R = (0, s.bG)([A.A], () => A.A.getChannel(m)),
        S = (function (e, t, n, l, s, a) {
            let o = (0, g.P)({ user: n, channelId: t.id, guildId: t.guild_id, messageId: e.id }),
                d = (0, g.P)({ user: l[0], channelId: t.id, guildId: t.guild_id, messageId: e.id }),
                E = (0, g.P)({ user: l[1], channelId: t.id, guildId: t.guild_id, messageId: e.id }),
                A = (0, N.Ay)(e),
                [m, I] = l,
                T = (0, N.d8)(m, t),
                p = (0, N.d8)(I, t),
                R = (function (e, t) {
                    let n = r.useRef(null),
                        [l, s] = r.useState(!1),
                        a = r.useCallback((n) => (0, i.jsx)(h, { users: n, guildId: e, channelId: t }), [e, t]);
                    return r.useCallback(
                        (e) => (t, r) =>
                            (0, i.jsx)(
                                c.Y,
                                {
                                    targetElementRef: n,
                                    renderPopout: () => a(e),
                                    shouldShow: l,
                                    position: "bottom",
                                    onRequestClose: () => s(!1),
                                    children: (e) =>
                                        (0, i.jsx)(u.D, {
                                            ...e,
                                            tag: "a",
                                            style: { display: "inline" },
                                            innerRef: n,
                                            onClick: () => {
                                                s((e) => !e);
                                            },
                                            children: t,
                                        }),
                                },
                                r,
                            ),
                        [l, a],
                    );
                })(t.guild_id, t.id),
                S = r.useCallback(
                    (e, t) =>
                        null == a
                            ? e
                            : (0, i.jsx)(
                                  _.T,
                                  {
                                      channel: a,
                                      childWrapperClassName: f.c6,
                                      children: (0, i.jsx)(u.D, { tag: "a", children: e }),
                                  },
                                  t,
                              ),
                    [a],
                );
            return null == s
                ? C.intl.format(C.t["eX6e/3"], { username: A.nick, usernameHook: o(A), channelHook: S })
                : C.intl.format(C.t.YUbgR8, {
                      userCount: l.length + 1,
                      username: A.nick,
                      usernameHook: o(A),
                      username2: T.nick,
                      username2Hook: d(T),
                      username3: p.nick,
                      username3Hook: E(p),
                      otherCount: l.length - 1,
                      othersHook: R([n, ...l]),
                      duration: s,
                  });
        })(t, n, t.author, E, o, R),
        O = r.useMemo(() => {
            let e = (0, i.jsx)(l.H, { size: "md", color: d.A.colors.STATUS_POSITIVE });
            return null == R || null != o
                ? e
                : (0, i.jsx)(_.T, {
                      channel: R,
                      children: (0, i.jsx)(l.H, { size: "md", color: d.A.colors.STATUS_POSITIVE }),
                  });
        }, [R, o]);
    return (0, i.jsx)(p.A, {
        iconNode: O,
        iconContainerClassName: f.zc,
        timestamp: t.timestamp,
        compact: a,
        children: S,
    });
}
