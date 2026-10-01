n.d(t, { A: () => M });
var l = n(477900),
    i = n(582128),
    r = n(503698),
    s = n.n(r),
    a = n(17928),
    o = n(342952),
    u = n(922016),
    c = n(778712),
    d = n(939249),
    h = n(834730),
    m = n(565645),
    p = n(114166),
    f = n(209932),
    g = n(813564),
    x = n(73153),
    S = n(734057),
    E = n(927813),
    y = n(714736);
n(980504);
let C = 7.5 * E.A.Millis.SECOND,
    A = new Map(),
    b = new Map();
class I extends a.Ay.Store {
    initialize() {
        this.waitFor(S.A);
    }
    static displayName = "SoundboardEchoStore";
    getSoundboardEchoes() {
        return Array.from(A.values()).sort((e, t) => e.lastPlayedAt - t.lastPlayedAt);
    }
    getSoundboardEcho(e) {
        return A.get(e);
    }
}
let v = new I(x.h, {
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
        let c = S.A.getChannel(n)?.getGuildId();
        if (null == c) return !1;
        let { enabled: d } = (0, y.j)(c, "handleSoundPlayStart");
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
                o = A.get(l);
            (null == o
                ? A.set(l, {
                      sound: i,
                      count: 1,
                      authorId: r,
                      playedByUserIds: new Set([s]),
                      mostRecentPlayedByUserId: a ? s : null,
                      lastPlayedAt: Date.now(),
                  })
                : A.set(l, {
                      ...o,
                      count: o.count + 1,
                      playedByUserIds: o.playedByUserIds.add(s),
                      mostRecentPlayedByUserId: s === r ? o.mostRecentPlayedByUserId : s,
                      lastPlayedAt: Date.now(),
                  }),
                null != (t = b.get(l)) && clearTimeout(t),
                (n = setTimeout(() => {
                    x.h.dispatch({ type: "SOUNDBOARD_ECHO_EXPIRED", soundId: l });
                }, C)),
                b.set(l, n));
        })({ soundId: t, sound: h, authorId: i ?? l, playedByUserId: l, isEcho: u });
    },
    VOICE_CHANNEL_SELECT: function (e) {
        (b.forEach(clearTimeout), b.clear(), A.clear());
    },
    SOUNDBOARD_ECHO_EXPIRED: function (e) {
        let { soundId: t } = e;
        (b.delete(t), A.delete(t));
    },
});
var N = n(994500),
    T = n(287809),
    j = n(435558),
    k = n.n(j),
    _ = n(562153),
    R = n(375708),
    w = n(858981);
function O(e) {
    let { guildId: t, channelId: n, sound: i, playedByUserIds: r } = e,
        { emojiId: s, emojiName: o, emojiAnimated: u, name: c } = i,
        d = (function (e) {
            let { playedByUserIds: t, guildId: n, channelId: l } = e,
                i = t.size,
                r = (0, a.yK)([T.default, N.A], () =>
                    k()(Array.from(t))
                        .reject((e) => N.A.isBlockedOrIgnored(e))
                        .take(3)
                        .map((e) => {
                            let t = T.default.getUser(e);
                            return _.Ay.getName(n, l, t);
                        })
                        .value(),
                ),
                s = Math.max(0, i - r.length);
            if (1 === r.length)
                if (s > 0) return R.intl.formatToPlainString(R.t.EXaquk, { a: r[0], n: s });
                else return R.intl.formatToPlainString(R.t["DU+Rd+"], { a: r[0] });
            if (2 === r.length)
                if (s > 0) return R.intl.formatToPlainString(R.t.EO8JM8, { a: r[0], b: r[1], n: s });
                else return R.intl.formatToPlainString(R.t.qr8Cg3, { a: r[0], b: r[1] });
            return 3 !== r.length
                ? R.intl.formatToPlainString(R.t.P5JeeM, { n: s })
                : s > 0
                  ? R.intl.formatToPlainString(R.t["+z+JUw"], { a: r[0], b: r[1], c: r[2], n: s })
                  : R.intl.formatToPlainString(R.t["3Zq6FM"], { a: r[0], b: r[1], c: r[2] });
        })({ playedByUserIds: r, guildId: t, channelId: n });
    return (0, l.jsx)("div", {
        className: w.kL,
        children: (0, l.jsxs)("div", {
            className: w.Yq,
            children: [
                (null != o || null != s) && (0, l.jsx)(m.A, { className: w.Zg, emojiId: s, emojiName: o, animated: u }),
                (0, l.jsxs)("div", {
                    className: w.FS,
                    children: [
                        (0, l.jsx)(h.E, { variant: "text-sm/medium", children: c }),
                        (0, l.jsx)(h.E, { variant: "text-xs/medium", color: "text-muted", children: d }),
                    ],
                }),
            ],
        }),
    });
}
var L = n(998812);
function P(e) {
    let {
            guildId: t,
            channelId: n,
            sound: r,
            authorId: x,
            mostRecentPlayedByUserId: S,
            count: E,
            playedByUserIds: y,
        } = e,
        { authorUser: C, mostRecentPlayedUser: A } = (0, a.cf)([T.default, N.A], () => {
            let e = N.A.isBlockedOrIgnored(S ?? void 0);
            return { authorUser: T.default.getUser(x), mostRecentPlayedUser: e ? null : T.default.getUser(S) };
        }),
        [b, I] = i.useState(!1),
        v = i.useRef(null),
        j = i.useRef(null);
    i.useEffect(() => () => clearTimeout(v.current), []);
    let k = i.useCallback(() => {
            (clearTimeout(v.current), I(!0));
        }, []),
        _ = i.useCallback(() => {
            (clearTimeout(v.current), (v.current = setTimeout(() => I(!1), 200)));
        }, []),
        w = i.useCallback(() => {
            (0, g.CZ)(r, n);
        }, [n, r]),
        P = (0, a.bG)([f.A], () => f.A.isPlayingSound(r.soundId), [r]);
    if (null == t || null == C) return null;
    let { emojiId: M, emojiName: D, emojiAnimated: V, name: U } = r;
    return (0, l.jsxs)("div", {
        className: L.Iv,
        children: [
            (0, l.jsx)(u.Y, {
                targetElementRef: j,
                shouldShow: b,
                renderPopout: () =>
                    (0, l.jsx)("div", {
                        onMouseEnter: k,
                        onMouseLeave: _,
                        children: (0, l.jsx)(O, { guildId: t, channelId: n, sound: r, playedByUserIds: y }),
                    }),
                position: "top",
                align: "center",
                children: () =>
                    (0, l.jsx)("div", {
                        ref: j,
                        onMouseEnter: k,
                        onMouseLeave: _,
                        children: (0, l.jsx)(o.I, {
                            size: c._3.SIZE_32,
                            guildId: t,
                            channelId: n,
                            users: null == A ? [C] : [C, A],
                            maxUsers: 2,
                        }),
                    }),
            }),
            (0, l.jsxs)(d.D, {
                className: s()(L.nG, { [L.Tz]: P }),
                onClick: w,
                "aria-label": R.intl.formatToPlainString(R.t.VOmeSq, { name: U }),
                children: [
                    (null != D || null != M) &&
                        (0, l.jsx)(m.A, { size: "reaction", className: L.FA, emojiId: M, emojiName: D, animated: V }),
                    (0, l.jsx)(h.E, { variant: "text-md/medium", children: U }),
                    (0, l.jsx)("div", { className: L.SU }),
                    (0, l.jsxs)(h.E, {
                        variant: "text-md/medium",
                        className: L.Zi,
                        children: ["x", (0, l.jsx)(p.A, { className: L.Zi, value: E, digitWidth: 8 })],
                    }),
                ],
            }),
        ],
    });
}
function M(e) {
    let { guildId: t, channelId: n } = e,
        i = (0, a.bG)([v], () => v.getSoundboardEchoes());
    return (0, l.jsx)("div", {
        className: L.ei,
        children: i.map((e) => (0, l.jsx)(P, { guildId: t, channelId: n, ...e }, e.sound.soundId)),
    });
}
