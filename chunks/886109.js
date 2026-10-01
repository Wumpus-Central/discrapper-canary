n.d(t, { A: () => P });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(17928),
    o = n(342952),
    u = n(922016),
    c = n(778712),
    d = n(939249),
    m = n(834730),
    h = n(565645),
    p = n(114166),
    f = n(209932),
    g = n(813564),
    x = n(228366),
    A = n(734057),
    C = n(927813),
    E = n(714736);
n(980504);
let I = 7.5 * C.A.Millis.SECOND,
    y = new Map(),
    S = new Map();
class v extends a.Ay.Store {
    initialize() {
        this.waitFor(A.A);
    }
    static displayName = "SoundboardEchoStore";
    getSoundboardEchoes() {
        return Array.from(y.values()).sort((e, t) => e.lastPlayedAt - t.lastPlayedAt);
    }
    getSoundboardEcho(e) {
        return y.get(e);
    }
}
let N = new v(x.h, {
    VOICE_CHANNEL_EFFECT_SEND: function (e) {
        let {
            soundId: t,
            channelId: n,
            userId: l,
            authorId: i,
            sourceGuildId: s,
            soundName: r,
            emoji: a,
            soundVolume: o,
            isEcho: u,
        } = e;
        if (null == t || null == r) return !1;
        let c = A.A.getChannel(n)?.getGuildId();
        if (null == c) return !1;
        let { enabled: d } = (0, E.j)(c, "handleSoundPlayStart");
        if (!d) return !1;
        let m = {
            soundId: t,
            name: r,
            guildId: s ?? "0",
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
                { soundId: l, sound: i, authorId: s, playedByUserId: r, isEcho: a } = e,
                o = y.get(l);
            (null == o
                ? y.set(l, {
                      sound: i,
                      count: 1,
                      authorId: s,
                      playedByUserIds: new Set([r]),
                      mostRecentPlayedByUserId: a ? r : null,
                      lastPlayedAt: Date.now(),
                  })
                : y.set(l, {
                      ...o,
                      count: o.count + 1,
                      playedByUserIds: o.playedByUserIds.add(r),
                      mostRecentPlayedByUserId: r === s ? o.mostRecentPlayedByUserId : r,
                      lastPlayedAt: Date.now(),
                  }),
                null != (t = S.get(l)) && clearTimeout(t),
                (n = setTimeout(() => {
                    x.h.dispatch({ type: "SOUNDBOARD_ECHO_EXPIRED", soundId: l });
                }, I)),
                S.set(l, n));
        })({ soundId: t, sound: m, authorId: i ?? l, playedByUserId: l, isEcho: u });
    },
    VOICE_CHANNEL_SELECT: function (e) {
        (S.forEach(clearTimeout), S.clear(), y.clear());
    },
    SOUNDBOARD_ECHO_EXPIRED: function (e) {
        let { soundId: t } = e;
        (S.delete(t), y.delete(t));
    },
});
var _ = n(994500),
    j = n(287809),
    b = n(435558),
    T = n.n(b),
    R = n(562153),
    O = n(375708),
    L = n(858981);
function M(e) {
    let { guildId: t, channelId: n, sound: i, playedByUserIds: s } = e,
        { emojiId: r, emojiName: o, emojiAnimated: u, name: c } = i,
        d = (function (e) {
            let { playedByUserIds: t, guildId: n, channelId: l } = e,
                i = t.size,
                s = (0, a.yK)([j.default, _.A], () =>
                    T()(Array.from(t))
                        .reject((e) => _.A.isBlockedOrIgnored(e))
                        .take(3)
                        .map((e) => {
                            let t = j.default.getUser(e);
                            return R.Ay.getName(n, l, t);
                        })
                        .value(),
                ),
                r = Math.max(0, i - s.length);
            if (1 === s.length)
                if (r > 0) return O.intl.formatToPlainString(O.t.EXaquk, { a: s[0], n: r });
                else return O.intl.formatToPlainString(O.t["DU+Rd+"], { a: s[0] });
            if (2 === s.length)
                if (r > 0) return O.intl.formatToPlainString(O.t.EO8JM8, { a: s[0], b: s[1], n: r });
                else return O.intl.formatToPlainString(O.t.qr8Cg3, { a: s[0], b: s[1] });
            return 3 !== s.length
                ? O.intl.formatToPlainString(O.t.P5JeeM, { n: r })
                : r > 0
                  ? O.intl.formatToPlainString(O.t["+z+JUw"], { a: s[0], b: s[1], c: s[2], n: r })
                  : O.intl.formatToPlainString(O.t["3Zq6FM"], { a: s[0], b: s[1], c: s[2] });
        })({ playedByUserIds: s, guildId: t, channelId: n });
    return (0, l.jsx)("div", {
        className: L.kL,
        children: (0, l.jsxs)("div", {
            className: L.Yq,
            children: [
                (null != o || null != r) && (0, l.jsx)(h.A, { className: L.Zg, emojiId: r, emojiName: o, animated: u }),
                (0, l.jsxs)("div", {
                    className: L.FS,
                    children: [
                        (0, l.jsx)(m.E, { variant: "text-sm/medium", children: c }),
                        (0, l.jsx)(m.E, { variant: "text-xs/medium", color: "text-muted", children: d }),
                    ],
                }),
            ],
        }),
    });
}
var k = n(998812);
function w(e) {
    let {
            guildId: t,
            channelId: n,
            sound: s,
            authorId: x,
            mostRecentPlayedByUserId: A,
            count: C,
            playedByUserIds: E,
        } = e,
        { authorUser: I, mostRecentPlayedUser: y } = (0, a.cf)([j.default, _.A], () => {
            let e = _.A.isBlockedOrIgnored(A ?? void 0);
            return { authorUser: j.default.getUser(x), mostRecentPlayedUser: e ? null : j.default.getUser(A) };
        }),
        [S, v] = i.useState(!1),
        N = i.useRef(null),
        b = i.useRef(null);
    i.useEffect(() => () => clearTimeout(N.current), []);
    let T = i.useCallback(() => {
            (clearTimeout(N.current), v(!0));
        }, []),
        R = i.useCallback(() => {
            (clearTimeout(N.current), (N.current = setTimeout(() => v(!1), 200)));
        }, []),
        L = i.useCallback(() => {
            (0, g.CZ)(s, n);
        }, [n, s]),
        w = (0, a.bG)([f.A], () => f.A.isPlayingSound(s.soundId), [s]);
    if (null == t || null == I) return null;
    let { emojiId: P, emojiName: D, emojiAnimated: U, name: V } = s;
    return (0, l.jsxs)("div", {
        className: k.Iv,
        children: [
            (0, l.jsx)(u.Y, {
                targetElementRef: b,
                shouldShow: S,
                renderPopout: () =>
                    (0, l.jsx)("div", {
                        onMouseEnter: T,
                        onMouseLeave: R,
                        children: (0, l.jsx)(M, { guildId: t, channelId: n, sound: s, playedByUserIds: E }),
                    }),
                position: "top",
                align: "center",
                children: () =>
                    (0, l.jsx)("div", {
                        ref: b,
                        onMouseEnter: T,
                        onMouseLeave: R,
                        children: (0, l.jsx)(o.I, {
                            size: c._3.SIZE_32,
                            guildId: t,
                            channelId: n,
                            users: null == y ? [I] : [I, y],
                            maxUsers: 2,
                        }),
                    }),
            }),
            (0, l.jsxs)(d.D, {
                className: r()(k.nG, { [k.Tz]: w }),
                onClick: L,
                "aria-label": O.intl.formatToPlainString(O.t.VOmeSq, { name: V }),
                children: [
                    (null != D || null != P) &&
                        (0, l.jsx)(h.A, { size: "reaction", className: k.FA, emojiId: P, emojiName: D, animated: U }),
                    (0, l.jsx)(m.E, { variant: "text-md/medium", children: V }),
                    (0, l.jsx)("div", { className: k.SU }),
                    (0, l.jsxs)(m.E, {
                        variant: "text-md/medium",
                        className: k.Zi,
                        children: ["x", (0, l.jsx)(p.A, { className: k.Zi, value: C, digitWidth: 8 })],
                    }),
                ],
            }),
        ],
    });
}
function P(e) {
    let { guildId: t, channelId: n } = e,
        i = (0, a.bG)([N], () => N.getSoundboardEchoes());
    return (0, l.jsx)("div", {
        className: k.ei,
        children: i.map((e) => (0, l.jsx)(w, { guildId: t, channelId: n, ...e }, e.sound.soundId)),
    });
}
