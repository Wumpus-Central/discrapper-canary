n.d(t, { A: () => ei });
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
    E = n(793574),
    S = n(688810),
    y = n(209932),
    C = n(813564),
    A = n(73153),
    b = n(734057),
    I = n(927813),
    N = n(714736);
n(980504);
let v = 7.5 * I.A.Millis.SECOND,
    T = new Map(),
    j = new Map();
class k extends o.Ay.Store {
    initialize() {
        this.waitFor(b.A);
    }
    static displayName = "SoundboardEchoStore";
    getSoundboardEchoes() {
        return T;
    }
    getSoundboardEcho(e) {
        return T.get(e);
    }
}
let _ = new k(A.h, {
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
        let c = b.A.getChannel(n)?.getGuildId();
        if (null == c) return !1;
        let { enabled: d } = (0, N.j)(c, "handleSoundPlayStart");
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
                o = T.get(l);
            (null == o
                ? T.set(l, {
                      sound: i,
                      count: 1,
                      authorId: r,
                      playedByUserIds: new Set([s]),
                      mostRecentPlayedByUserId: a ? s : null,
                      lastPlayedAt: Date.now(),
                  })
                : T.set(l, {
                      ...o,
                      count: o.count + 1,
                      playedByUserIds: o.playedByUserIds.add(s),
                      mostRecentPlayedByUserId: s === r ? o.mostRecentPlayedByUserId : s,
                      lastPlayedAt: Date.now(),
                  }),
                null != (t = j.get(l)) && clearTimeout(t),
                (n = setTimeout(() => {
                    A.h.dispatch({ type: "SOUNDBOARD_ECHO_EXPIRED", soundId: l });
                }, v)),
                j.set(l, n));
        })({ soundId: t, sound: h, authorId: i ?? l, playedByUserId: l, isEcho: u });
    },
    VOICE_CHANNEL_SELECT: function (e) {
        (j.forEach(clearTimeout), j.clear(), T.clear());
    },
    SOUNDBOARD_ECHO_EXPIRED: function (e) {
        let { soundId: t } = e;
        (j.delete(t), T.delete(t));
    },
});
var R = n(994500),
    O = n(287809),
    L = n(435558),
    w = n.n(L),
    P = n(111159),
    M = n(952270),
    D = n(320448),
    U = n(964486),
    V = n(624793),
    W = n(548118),
    F = n(465794),
    B = n(796774),
    K = n(71393),
    G = n(763827),
    H = n(174459),
    z = n(562153),
    q = n(927578),
    $ = n(652215),
    Q = n(202541),
    Z = n(375708),
    X = n(858981);
function J(e) {
    let { icon: t, title: n, description: i } = e;
    return (0, l.jsxs)("div", {
        className: X.wt,
        children: [
            t,
            (0, l.jsxs)("div", {
                className: X.FS,
                children: [
                    (0, l.jsx)(p.E, { variant: "text-sm/medium", children: n }),
                    (0, l.jsx)(p.E, { variant: "text-xs/medium", color: "text-muted", children: i }),
                ],
            }),
        ],
    });
}
function Y(e) {
    let { sourceGuildName: t, isExternal: n } = e,
        { analyticsLocations: i } = (0, S.Ay)(E.A.SOUNDBOARD_ECHO, E.A.PREMIUM_UPSELL);
    return (
        (0, U.Ay)(() => {
            H.default.track($.HAw.PREMIUM_UPSELL_VIEWED, {
                type: Q.e.SOUNDBOARD_ECHO_SOUND_DETAILS_UPSELL,
                is_external: n,
                location_stack: i,
                sku_id: q.Ay.getSkuIdForPremiumType(Q.PremiumTypes.TIER_2),
                voice_guild_id: G.A.getGuildId() ?? null,
            });
        }),
        (0, l.jsx)(S.f5, {
            value: i,
            children: (0, l.jsxs)("div", {
                className: X.Kt,
                children: [
                    (0, l.jsx)(p.E, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: Z.intl.format(Z.t["/ZJIuo"], { guildName: t }),
                    }),
                    (0, l.jsx)(F.A, {
                        size: "sm",
                        fullWidth: !0,
                        subscriptionTier: Q.pe.TIER_2,
                        buttonTextOverride: Z.intl.string(Z.t.pj0XBN),
                    }),
                ],
            }),
        })
    );
}
function ee(e) {
    let { guildId: t, sound: n } = e,
        r = (function (e) {
            let { guildId: t, soundId: n } = e,
                l = "0" === t,
                r = (0, o.bG)([K.A], () => K.A.getGuild(t)),
                [s, a] = i.useState(),
                u = !l && null == r;
            return (
                i.useEffect(() => {
                    u &&
                        (0, B.nh)(n, t)
                            .catch(() => null)
                            .then(a);
                }, [u, n, t]),
                i.useMemo(
                    () =>
                        l
                            ? { state: "DEFAULT_SOUND" }
                            : null != r
                              ? { state: "MEMBER", sourceGuild: V.GO.createFromGuildRecord(r) }
                              : void 0 === s
                                ? { state: "LOADING" }
                                : null == s
                                  ? { state: "UNAVAILABLE" }
                                  : { state: "DISCOVERABLE", sourceGuild: V.GO.createFromDiscoverableGuild(s) },
                    [l, r, s],
                )
            );
        })(n),
        s = (0, o.bG)([O.default], () => q.Ay.canUseSoundboardEverywhere(O.default.getCurrentUser()));
    switch (r.state) {
        case "LOADING":
            return (0, l.jsxs)("div", {
                className: X.wt,
                children: [(0, l.jsx)("div", { className: X.EQ }), (0, l.jsx)("div", { className: X.jC })],
            });
        case "DEFAULT_SOUND":
            return (0, l.jsx)(J, {
                icon: (0, l.jsx)("div", { className: X.EQ, children: (0, l.jsx)(P.p, { size: "refresh_sm" }) }),
                title: Z.intl.string(Z.t.rWPrJC),
                description: Z.intl.string(Z.t.ixMwGl),
            });
        case "UNAVAILABLE":
            return (0, l.jsx)(J, {
                icon: (0, l.jsx)("div", {
                    className: X.EQ,
                    children: (0, l.jsx)(M.EyeSlashIcon, { size: "refresh_sm" }),
                }),
                title: Z.intl.string(Z.t.T7AWtb),
                description: Z.intl.string(Z.t.Z4UD3R),
            });
        case "MEMBER":
        case "DISCOVERABLE": {
            let { state: e, sourceGuild: n } = r;
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(J, {
                        icon: (0, l.jsx)(W.Ay, { size: W.Ay.Sizes.MEDIUM, guild: n, active: !0 }),
                        title: n.name,
                        description: Z.intl.string("MEMBER" === e ? Z.t.l3QzyC : Z.t.s5No7R),
                    }),
                    !s && (0, l.jsx)(Y, { sourceGuildName: n.name, isExternal: n.id !== t }),
                ],
            });
        }
    }
}
function et(e) {
    let { guildId: t, channelId: n, sound: r, playedByUserIds: s } = e,
        { emojiId: a, emojiName: u, emojiAnimated: c, name: d } = r,
        h = (function (e) {
            let { playedByUserIds: t, guildId: n, channelId: l } = e,
                i = t.size,
                r = (0, o.yK)([O.default, R.A], () =>
                    w()(Array.from(t))
                        .reject((e) => R.A.isBlockedOrIgnored(e))
                        .take(3)
                        .map((e) => {
                            let t = O.default.getUser(e);
                            return z.Ay.getName(n, l, t);
                        })
                        .value(),
                ),
                s = i - r.length;
            if (1 === r.length)
                if (s > 0) return Z.intl.formatToPlainString(Z.t.EXaquk, { a: r[0], n: s });
                else return Z.intl.formatToPlainString(Z.t["DU+Rd+"], { a: r[0] });
            if (2 === r.length)
                if (s > 0) return Z.intl.formatToPlainString(Z.t.EO8JM8, { a: r[0], b: r[1], n: s });
                else return Z.intl.formatToPlainString(Z.t.qr8Cg3, { a: r[0], b: r[1] });
            return 3 !== r.length
                ? Z.intl.formatToPlainString(Z.t.P5JeeM, { n: s })
                : s > 0
                  ? Z.intl.formatToPlainString(Z.t["+z+JUw"], { a: r[0], b: r[1], c: r[2], n: s })
                  : Z.intl.formatToPlainString(Z.t["3Zq6FM"], { a: r[0], b: r[1], c: r[2] });
        })({ playedByUserIds: s, guildId: t, channelId: n }),
        [f, x] = i.useState(!1),
        E = i.useCallback((e) => e?.focus(), []);
    return (0, l.jsxs)("div", {
        className: X.kL,
        children: [
            (0, l.jsx)("div", {
                className: X.r,
                children: (0, l.jsx)(J, {
                    icon:
                        null != u || null != a
                            ? (0, l.jsx)(g.A, { className: X.Zg, emojiId: a, emojiName: u, animated: c })
                            : null,
                    title: d,
                    description: h,
                }),
            }),
            f
                ? (0, l.jsx)("div", {
                      ref: E,
                      tabIndex: -1,
                      className: X.bT,
                      children: (0, l.jsx)(ee, { guildId: t, sound: r }, r.soundId),
                  })
                : (0, l.jsx)("div", {
                      className: X.x_,
                      children: (0, l.jsxs)(m.D, {
                          onClick: () => x(!0),
                          className: X._x,
                          children: [
                              (0, l.jsx)(p.E, { variant: "text-sm/medium", children: Z.intl.string(Z.t["UQT3/h"]) }),
                              (0, l.jsx)(D._, { size: "xs", color: "currentColor" }),
                          ],
                      }),
                  }),
        ],
    });
}
var en = n(998812);
function el(e) {
    let {
            guildId: t,
            channelId: n,
            sound: r,
            authorId: a,
            mostRecentPlayedByUserId: f,
            count: A,
            disabled: b,
            playedByUserIds: I,
            showDetails: N,
            onDetailsMouseEnter: v,
            onDetailsMouseLeave: T,
        } = e,
        { authorUser: j, mostRecentPlayedUser: k } = (0, o.cf)([O.default, R.A], () => {
            let e = R.A.isBlockedOrIgnored(f ?? void 0);
            return {
                authorUser: O.default.getUser(a),
                mostRecentPlayedUser: e || a === f ? null : O.default.getUser(f),
            };
        }),
        _ = i.useRef(null),
        { analyticsLocations: L } = (0, S.Ay)(E.A.SOUNDBOARD_ECHO),
        w = i.useCallback(() => {
            v(r.soundId);
        }, [v, r.soundId]),
        P = i.useCallback(() => {
            (0, C.CZ)(r, n, L);
        }, [L, n, r]),
        M = (0, o.bG)([y.A], () => y.A.isPlayingSound(r.soundId), [r]);
    if (null == t || null == j) return null;
    let { emojiId: D, emojiName: U, emojiAnimated: V, name: W } = r;
    return (0, l.jsxs)("div", {
        className: s()(en.Iv, { [en.E$]: b }),
        style: { height: 36 },
        children: [
            (0, l.jsx)(c.Y, {
                targetElementRef: _,
                shouldShow: N,
                renderPopout: (e) => {
                    let { setPopoutRef: i } = e;
                    return (0, l.jsx)("div", {
                        ref: i,
                        onMouseEnter: w,
                        onMouseLeave: T,
                        children: (0, l.jsx)(et, { guildId: t, channelId: n, sound: r, playedByUserIds: I }),
                    });
                },
                position: "top",
                align: "center",
                children: () =>
                    (0, l.jsx)("div", {
                        ref: _,
                        onMouseEnter: w,
                        onMouseLeave: T,
                        children: (0, l.jsx)(u.I, {
                            size: d._3.SIZE_32,
                            guildId: t,
                            channelId: n,
                            users: null == k ? [j] : [j, k],
                            maxUsers: 2,
                        }),
                    }),
            }),
            (0, l.jsx)(h.m, {
                text: b ? Z.intl.string(Z.t.VqNHoS) : null,
                children: (0, l.jsxs)(m.D, {
                    className: s()(en.nG, { [en.Tz]: M, [en.Jx]: b }),
                    onClick: b ? () => null : P,
                    "aria-label": Z.intl.formatToPlainString(Z.t.VOmeSq, { name: W }),
                    children: [
                        (null != U || null != D) &&
                            (0, l.jsx)(g.A, {
                                size: "reaction",
                                className: en.FA,
                                emojiId: D,
                                emojiName: U,
                                animated: V,
                            }),
                        (0, l.jsx)(p.E, { variant: "text-md/medium", children: W }),
                        !b &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)("div", { className: en.SU }),
                                    (0, l.jsxs)(p.E, {
                                        variant: "text-md/medium",
                                        className: en.Zi,
                                        tabularNumbers: !0,
                                        children: ["x", (0, l.jsx)(x.A, { className: en.Zi, value: A, digitWidth: 8 })],
                                    }),
                                ],
                            }),
                    ],
                }),
            }),
        ],
    });
}
function ei(e) {
    let { guildId: t, channelId: n } = e,
        r = (0, o.cf)([_], () => Object.fromEntries(_.getSoundboardEchoes())),
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
        }),
        [E, S] = i.useState(null),
        y = i.useRef(null);
    (i.useEffect(() => () => clearTimeout(y.current), []),
        null == E || p.some((e) => e.sound.soundId === E) || S(null));
    let C = i.useCallback((e) => {
            (clearTimeout(y.current), S(e));
        }, []),
        A = i.useCallback(() => {
            (clearTimeout(y.current), (y.current = setTimeout(() => S(null), 200)));
        }, []);
    return (0, l.jsx)("div", {
        className: en.ei,
        style: { height: 126 },
        onMouseEnter: h,
        onMouseLeave: m,
        children: x((e, i) =>
            (0, l.jsx)(a.animated.div, {
                className: en.Ob,
                style: e,
                children: (0, l.jsx)(el, {
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
