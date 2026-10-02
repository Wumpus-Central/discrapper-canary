n.d(t, { A: () => U });
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
    p = n(834730),
    f = n(866323),
    g = n(565645),
    x = n(114166),
    S = n(209932),
    E = n(813564),
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
    O = n(562153),
    L = n(375708),
    P = n(858981);
function M(e) {
    let { guildId: t, channelId: n, sound: i, playedByUserIds: r } = e,
        { emojiId: s, emojiName: a, emojiAnimated: u, name: c } = i,
        d = (function (e) {
            let { playedByUserIds: t, guildId: n, channelId: l } = e,
                i = t.size,
                r = (0, o.yK)([_.default, k.A], () =>
                    w()(Array.from(t))
                        .reject((e) => k.A.isBlockedOrIgnored(e))
                        .take(3)
                        .map((e) => {
                            let t = _.default.getUser(e);
                            return O.Ay.getName(n, l, t);
                        })
                        .value(),
                ),
                s = Math.max(0, i - r.length);
            if (1 === r.length)
                if (s > 0) return L.intl.formatToPlainString(L.t.EXaquk, { a: r[0], n: s });
                else return L.intl.formatToPlainString(L.t["DU+Rd+"], { a: r[0] });
            if (2 === r.length)
                if (s > 0) return L.intl.formatToPlainString(L.t.EO8JM8, { a: r[0], b: r[1], n: s });
                else return L.intl.formatToPlainString(L.t.qr8Cg3, { a: r[0], b: r[1] });
            return 3 !== r.length
                ? L.intl.formatToPlainString(L.t.P5JeeM, { n: s })
                : s > 0
                  ? L.intl.formatToPlainString(L.t["+z+JUw"], { a: r[0], b: r[1], c: r[2], n: s })
                  : L.intl.formatToPlainString(L.t["3Zq6FM"], { a: r[0], b: r[1], c: r[2] });
        })({ playedByUserIds: r, guildId: t, channelId: n });
    return (0, l.jsx)("div", {
        className: P.kL,
        children: (0, l.jsxs)("div", {
            className: P.Yq,
            children: [
                (null != a || null != s) && (0, l.jsx)(g.A, { className: P.Zg, emojiId: s, emojiName: a, animated: u }),
                (0, l.jsxs)("div", {
                    className: P.FS,
                    children: [
                        (0, l.jsx)(p.E, { variant: "text-sm/medium", children: c }),
                        (0, l.jsx)(p.E, { variant: "text-xs/medium", color: "text-muted", children: d }),
                    ],
                }),
            ],
        }),
    });
}
var D = n(998812);
function V(e) {
    let {
            guildId: t,
            channelId: n,
            sound: r,
            authorId: a,
            mostRecentPlayedByUserId: f,
            count: y,
            disabled: C,
            playedByUserIds: A,
        } = e,
        { authorUser: b, mostRecentPlayedUser: I } = (0, o.cf)([_.default, k.A], () => {
            let e = k.A.isBlockedOrIgnored(f ?? void 0);
            return {
                authorUser: _.default.getUser(a),
                mostRecentPlayedUser: e || a === f ? null : _.default.getUser(f),
            };
        }),
        [v, N] = i.useState(!1),
        T = i.useRef(null),
        j = i.useRef(null);
    i.useEffect(() => () => clearTimeout(T.current), []);
    let R = i.useCallback(() => {
            (clearTimeout(T.current), N(!0));
        }, []),
        w = i.useCallback(() => {
            (clearTimeout(T.current), (T.current = setTimeout(() => N(!1), 200)));
        }, []),
        O = i.useCallback(() => {
            (0, E.CZ)(r, n);
        }, [n, r]),
        P = (0, o.bG)([S.A], () => S.A.isPlayingSound(r.soundId), [r]);
    if (null == t || null == b) return null;
    let { emojiId: V, emojiName: U, emojiAnimated: W, name: F } = r;
    return (0, l.jsxs)("div", {
        className: s()(D.Iv, { [D.E$]: C }),
        style: { height: 36 },
        children: [
            (0, l.jsx)(c.Y, {
                targetElementRef: j,
                shouldShow: v,
                renderPopout: () =>
                    (0, l.jsx)("div", {
                        onMouseEnter: R,
                        onMouseLeave: w,
                        children: (0, l.jsx)(M, { guildId: t, channelId: n, sound: r, playedByUserIds: A }),
                    }),
                position: "top",
                align: "center",
                children: () =>
                    (0, l.jsx)("div", {
                        ref: j,
                        onMouseEnter: R,
                        onMouseLeave: w,
                        children: (0, l.jsx)(u.I, {
                            size: d._3.SIZE_32,
                            guildId: t,
                            channelId: n,
                            users: null == I ? [b] : [b, I],
                            maxUsers: 2,
                        }),
                    }),
            }),
            (0, l.jsx)(h.m, {
                text: C ? L.intl.string(L.t.VqNHoS) : null,
                children: (0, l.jsxs)(m.D, {
                    className: s()(D.nG, { [D.Tz]: P, [D.Jx]: C }),
                    onClick: C ? () => null : O,
                    "aria-label": L.intl.formatToPlainString(L.t.VOmeSq, { name: F }),
                    children: [
                        (null != U || null != V) &&
                            (0, l.jsx)(g.A, {
                                size: "reaction",
                                className: D.FA,
                                emojiId: V,
                                emojiName: U,
                                animated: W,
                            }),
                        (0, l.jsx)(p.E, { variant: "text-md/medium", children: F }),
                        !C &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)("div", { className: D.SU }),
                                    (0, l.jsxs)(p.E, {
                                        variant: "text-md/medium",
                                        className: D.Zi,
                                        children: ["x", (0, l.jsx)(x.A, { className: D.Zi, value: y, digitWidth: 8 })],
                                    }),
                                ],
                            }),
                    ],
                }),
            }),
        ],
    });
}
function U(e) {
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
        p = i.useMemo(
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
        g = i.useMemo(() => p.map((e, t) => ({ echo: e, y: 42 * t })), [p]),
        x = (0, f.p)(g, {
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
        });
    return (0, l.jsx)("div", {
        className: D.ei,
        style: { height: 126 },
        onMouseEnter: h,
        onMouseLeave: m,
        children: x((e, i) =>
            (0, l.jsx)(a.animated.div, {
                className: D.Ob,
                style: e,
                children: (0, l.jsx)(V, { guildId: t, channelId: n, ...i.echo, disabled: i.echo.disabled ?? !1 }),
            }),
        ),
    });
}
