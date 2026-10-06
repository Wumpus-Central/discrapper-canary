n.d(t, { A: () => X });
var l = n(477900),
    i = n(582128),
    r = n(503698),
    s = n.n(r),
    a = n(202091),
    o = n(17928),
    u = n(342952),
    c = n(922016),
    d = n(778712),
    h = n(866665),
    m = n(939249),
    f = n(834730),
    p = n(866323),
    g = n(565645),
    x = n(114166),
    E = n(209932),
    S = n(813564),
    y = n(73153),
    C = n(734057),
    A = n(927813),
    b = n(714736);
n(980504);
let I = 7.5 * A.A.Millis.SECOND,
    v = new Map(),
    N = new Map();
class T extends o.Ay.Store {
    initialize() {
        this.waitFor(C.A);
    }
    static displayName = "SoundboardEchoStore";
    getSoundboardEchoes() {
        return v;
    }
    getSoundboardEcho(e) {
        return v.get(e);
    }
}
let j = new T(y.h, {
    VOICE_CHANNEL_EFFECT_SEND: function (e) {
        let {
            soundId: t,
            channelId: n,
            userId: l,
            authorId: i,
            sourceGuildId: r,
            soundName: s,
            emoji: a,
            soundVolume: o,
            isEcho: u,
        } = e;
        if (null == t || null == s) return !1;
        let c = C.A.getChannel(n)?.getGuildId();
        if (null == c) return !1;
        let { enabled: d } = (0, b.j)(c, "handleSoundPlayStart");
        if (!d) return !1;
        let h = {
            soundId: t,
            name: s,
            guildId: r ?? "0",
            emojiId: a?.id ?? void 0,
            emojiName: a?.name,
            emojiAnimated: a?.animated ?? void 0,
            available: !0,
            userId: l,
            volume: o ?? 1,
        };
        !(function (e) {
            let t,
                n,
                { soundId: l, sound: i, authorId: r, playedByUserId: s, isEcho: a } = e,
                o = v.get(l);
            (null == o
                ? v.set(l, {
                      sound: i,
                      count: 1,
                      authorId: r,
                      playedByUserIds: new Set([s]),
                      mostRecentPlayedByUserId: a ? s : null,
                      lastPlayedAt: Date.now(),
                  })
                : v.set(l, {
                      ...o,
                      count: o.count + 1,
                      playedByUserIds: o.playedByUserIds.add(s),
                      mostRecentPlayedByUserId: s === r ? o.mostRecentPlayedByUserId : s,
                      lastPlayedAt: Date.now(),
                  }),
                null != (t = N.get(l)) && clearTimeout(t),
                (n = setTimeout(() => {
                    y.h.dispatch({ type: "SOUNDBOARD_ECHO_EXPIRED", soundId: l });
                }, I)),
                N.set(l, n));
        })({ soundId: t, sound: h, authorId: i ?? l, playedByUserId: l, isEcho: u });
    },
    VOICE_CHANNEL_SELECT: function (e) {
        (N.forEach(clearTimeout), N.clear(), v.clear());
    },
    SOUNDBOARD_ECHO_EXPIRED: function (e) {
        let { soundId: t } = e;
        (N.delete(t), v.delete(t));
    },
});
var k = n(994500),
    _ = n(287809),
    R = n(435558),
    w = n.n(R),
    O = n(111159),
    L = n(952270),
    P = n(320448),
    M = n(624793),
    D = n(548118),
    U = n(465794),
    V = n(796774),
    W = n(71393),
    F = n(562153),
    B = n(158045),
    K = n(202541),
    G = n(375708),
    H = n(858981);
function z(e) {
    let { icon: t, title: n, description: i } = e;
    return (0, l.jsxs)("div", {
        className: H.wt,
        children: [
            t,
            (0, l.jsxs)("div", {
                className: H.FS,
                children: [
                    (0, l.jsx)(f.E, { variant: "text-sm/medium", children: n }),
                    (0, l.jsx)(f.E, { variant: "text-xs/medium", color: "text-muted", children: i }),
                ],
            }),
        ],
    });
}
function q(e) {
    let { sound: t } = e,
        n = (function (e) {
            let { guildId: t, soundId: n } = e,
                l = "0" === t,
                r = (0, o.bG)([W.A], () => W.A.getGuild(t)),
                [s, a] = i.useState(),
                u = !l && null == r;
            return (
                i.useEffect(() => {
                    u &&
                        (0, V.nh)(n, t)
                            .catch(() => null)
                            .then(a);
                }, [u, n, t]),
                i.useMemo(
                    () =>
                        l
                            ? { state: "DEFAULT_SOUND" }
                            : null != r
                              ? { state: "MEMBER", sourceGuild: M.GO.createFromGuildRecord(r) }
                              : void 0 === s
                                ? { state: "LOADING" }
                                : null == s
                                  ? { state: "UNAVAILABLE" }
                                  : { state: "DISCOVERABLE", sourceGuild: M.GO.createFromDiscoverableGuild(s) },
                    [l, r, s],
                )
            );
        })(t),
        r = (0, o.bG)([_.default], () => B.Ay.canUseSoundboardEverywhere(_.default.getCurrentUser()));
    switch (n.state) {
        case "LOADING":
            return (0, l.jsxs)("div", {
                className: H.wt,
                children: [(0, l.jsx)("div", { className: H.EQ }), (0, l.jsx)("div", { className: H.jC })],
            });
        case "DEFAULT_SOUND":
            return (0, l.jsx)(z, {
                icon: (0, l.jsx)("div", { className: H.EQ, children: (0, l.jsx)(O.p, { size: "refresh_sm" }) }),
                title: G.intl.string(G.t.rWPrJC),
                description: G.intl.string(G.t.ixMwGl),
            });
        case "UNAVAILABLE":
            return (0, l.jsx)(z, {
                icon: (0, l.jsx)("div", {
                    className: H.EQ,
                    children: (0, l.jsx)(L.EyeSlashIcon, { size: "refresh_sm" }),
                }),
                title: G.intl.string(G.t.T7AWtb),
                description: G.intl.string(G.t.Z4UD3R),
            });
        case "MEMBER":
        case "DISCOVERABLE": {
            let { state: e, sourceGuild: t } = n;
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(z, {
                        icon: (0, l.jsx)(D.Ay, { size: D.Ay.Sizes.MEDIUM, guild: t, active: !0 }),
                        title: t.name,
                        description: G.intl.string("MEMBER" === e ? G.t.l3QzyC : G.t.s5No7R),
                    }),
                    !r &&
                        (0, l.jsxs)("div", {
                            className: H.Kt,
                            children: [
                                (0, l.jsx)(f.E, {
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    children: G.intl.format(G.t["/ZJIuo"], { guildName: t.name }),
                                }),
                                (0, l.jsx)(U.A, {
                                    size: "sm",
                                    fullWidth: !0,
                                    subscriptionTier: K.pe.TIER_2,
                                    buttonTextOverride: G.intl.string(G.t.pj0XBN),
                                }),
                            ],
                        }),
                ],
            });
        }
    }
}
function $(e) {
    let { guildId: t, channelId: n, sound: r, playedByUserIds: s } = e,
        { emojiId: a, emojiName: u, emojiAnimated: c, name: d } = r,
        h = (function (e) {
            let { playedByUserIds: t, guildId: n, channelId: l } = e,
                i = t.size,
                r = (0, o.yK)([_.default, k.A], () =>
                    w()(Array.from(t))
                        .reject((e) => k.A.isBlockedOrIgnored(e))
                        .take(3)
                        .map((e) => {
                            let t = _.default.getUser(e);
                            return F.Ay.getName(n, l, t);
                        })
                        .value(),
                ),
                s = i - r.length;
            if (1 === r.length)
                if (s > 0) return G.intl.formatToPlainString(G.t.EXaquk, { a: r[0], n: s });
                else return G.intl.formatToPlainString(G.t["DU+Rd+"], { a: r[0] });
            if (2 === r.length)
                if (s > 0) return G.intl.formatToPlainString(G.t.EO8JM8, { a: r[0], b: r[1], n: s });
                else return G.intl.formatToPlainString(G.t.qr8Cg3, { a: r[0], b: r[1] });
            return 3 !== r.length
                ? G.intl.formatToPlainString(G.t.P5JeeM, { n: s })
                : s > 0
                  ? G.intl.formatToPlainString(G.t["+z+JUw"], { a: r[0], b: r[1], c: r[2], n: s })
                  : G.intl.formatToPlainString(G.t["3Zq6FM"], { a: r[0], b: r[1], c: r[2] });
        })({ playedByUserIds: s, guildId: t, channelId: n }),
        [p, x] = i.useState(!1),
        E = i.useCallback((e) => e?.focus(), []);
    return (0, l.jsxs)("div", {
        className: H.kL,
        children: [
            (0, l.jsx)("div", {
                className: H.r,
                children: (0, l.jsx)(z, {
                    icon:
                        null != u || null != a
                            ? (0, l.jsx)(g.A, { className: H.Zg, emojiId: a, emojiName: u, animated: c })
                            : null,
                    title: d,
                    description: h,
                }),
            }),
            p
                ? (0, l.jsx)("div", {
                      ref: E,
                      tabIndex: -1,
                      className: H.bT,
                      children: (0, l.jsx)(q, { sound: r }, r.soundId),
                  })
                : (0, l.jsx)("div", {
                      className: H.x_,
                      children: (0, l.jsxs)(m.D, {
                          onClick: () => x(!0),
                          className: H._x,
                          children: [
                              (0, l.jsx)(f.E, { variant: "text-sm/medium", children: G.intl.string(G.t["UQT3/h"]) }),
                              (0, l.jsx)(P._, { size: "xs", color: "currentColor" }),
                          ],
                      }),
                  }),
        ],
    });
}
var Q = n(998812);
function Z(e) {
    let {
            guildId: t,
            channelId: n,
            sound: r,
            authorId: a,
            mostRecentPlayedByUserId: p,
            count: y,
            disabled: C,
            playedByUserIds: A,
            showDetails: b,
            onDetailsMouseEnter: I,
            onDetailsMouseLeave: v,
        } = e,
        { authorUser: N, mostRecentPlayedUser: T } = (0, o.cf)([_.default, k.A], () => {
            let e = k.A.isBlockedOrIgnored(p ?? void 0);
            return {
                authorUser: _.default.getUser(a),
                mostRecentPlayedUser: e || a === p ? null : _.default.getUser(p),
            };
        }),
        j = i.useRef(null),
        R = i.useCallback(() => {
            I(r.soundId);
        }, [I, r.soundId]),
        w = i.useCallback(() => {
            (0, S.CZ)(r, n);
        }, [n, r]),
        O = (0, o.bG)([E.A], () => E.A.isPlayingSound(r.soundId), [r]);
    if (null == t || null == N) return null;
    let { emojiId: L, emojiName: P, emojiAnimated: M, name: D } = r;
    return (0, l.jsxs)("div", {
        className: s()(Q.Iv, { [Q.E$]: C }),
        style: { height: 36 },
        children: [
            (0, l.jsx)(c.Y, {
                targetElementRef: j,
                shouldShow: b,
                renderPopout: (e) => {
                    let { setPopoutRef: i } = e;
                    return (0, l.jsx)("div", {
                        ref: i,
                        onMouseEnter: R,
                        onMouseLeave: v,
                        children: (0, l.jsx)($, { guildId: t, channelId: n, sound: r, playedByUserIds: A }),
                    });
                },
                position: "top",
                align: "center",
                children: () =>
                    (0, l.jsx)("div", {
                        ref: j,
                        onMouseEnter: R,
                        onMouseLeave: v,
                        children: (0, l.jsx)(u.I, {
                            size: d._3.SIZE_32,
                            guildId: t,
                            channelId: n,
                            users: null == T ? [N] : [N, T],
                            maxUsers: 2,
                        }),
                    }),
            }),
            (0, l.jsx)(h.m, {
                text: C ? G.intl.string(G.t.VqNHoS) : null,
                children: (0, l.jsxs)(m.D, {
                    className: s()(Q.nG, { [Q.Tz]: O, [Q.Jx]: C }),
                    onClick: C ? () => null : w,
                    "aria-label": G.intl.formatToPlainString(G.t.VOmeSq, { name: D }),
                    children: [
                        (null != P || null != L) &&
                            (0, l.jsx)(g.A, {
                                size: "reaction",
                                className: Q.FA,
                                emojiId: L,
                                emojiName: P,
                                animated: M,
                            }),
                        (0, l.jsx)(f.E, { variant: "text-md/medium", children: D }),
                        !C &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)("div", { className: Q.SU }),
                                    (0, l.jsxs)(f.E, {
                                        variant: "text-md/medium",
                                        className: Q.Zi,
                                        children: ["x", (0, l.jsx)(x.A, { className: Q.Zi, value: y, digitWidth: 8 })],
                                    }),
                                ],
                            }),
                    ],
                }),
            }),
        ],
    });
}
function X(e) {
    let { guildId: t, channelId: n } = e,
        r = (0, o.cf)([j], () => Object.fromEntries(j.getSoundboardEchoes())),
        [s, u] = i.useState({}),
        [c, d] = i.useState(!1),
        h = i.useCallback(() => {
            (u(r), d(!0));
        }, [r]),
        m = i.useCallback(() => {
            d(!1);
        }, []),
        f = i.useMemo(
            () =>
                (c
                    ? Object.entries(s).map((e) => {
                          let [t, n] = e;
                          return null != r[t] ? r[t] : { ...n, disabled: !0 };
                      })
                    : Object.values(r)
                )
                    .slice(-3)
                    .reverse(),
            [s, r, c],
        ),
        g = i.useMemo(() => f.map((e, t) => ({ echo: e, y: 42 * t })), [f]),
        x = (0, p.p)(g, {
            keys: (e) => e.echo.sound.soundId,
            from: () => ({ height: 0, opacity: 0 }),
            enter: (e) => {
                let { y: t } = e;
                return { height: 36, opacity: 1, translateY: -t };
            },
            update: (e) => {
                let { y: t } = e;
                return { translateY: -t };
            },
            leave: (e) => {
                let { y: t } = e;
                return { height: 0, opacity: 0, translateY: -t - 36, pointerEvents: "none" };
            },
            config: a.config.gentle,
        }),
        [E, S] = i.useState(null),
        y = i.useRef(null);
    (i.useEffect(() => () => clearTimeout(y.current), []),
        null == E || f.some((e) => e.sound.soundId === E) || S(null));
    let C = i.useCallback((e) => {
            (clearTimeout(y.current), S(e));
        }, []),
        A = i.useCallback(() => {
            (clearTimeout(y.current), (y.current = setTimeout(() => S(null), 200)));
        }, []);
    return (0, l.jsx)("div", {
        className: Q.ei,
        style: { height: 126 },
        onMouseEnter: h,
        onMouseLeave: m,
        children: x((e, i) =>
            (0, l.jsx)(a.animated.div, {
                className: Q.Ob,
                style: e,
                children: (0, l.jsx)(Z, {
                    guildId: t,
                    channelId: n,
                    ...i.echo,
                    disabled: i.echo.disabled ?? !1,
                    onDetailsMouseEnter: C,
                    onDetailsMouseLeave: A,
                    showDetails: E === i.echo.sound.soundId,
                }),
            }),
        ),
    });
}
