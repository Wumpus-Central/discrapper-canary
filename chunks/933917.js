"use strict";
n.d(t, { D: () => I });
var l = n(627968),
    a = n(64700),
    s = n(503698),
    i = n.n(s),
    r = n(311907),
    o = n(939249),
    d = n(331322),
    c = n(191842),
    u = n(534514),
    m = n(834730),
    h = n(565645),
    g = n(964486),
    x = n(775602),
    f = n(21161),
    _ = n(796774),
    p = n(209932),
    j = n(967198),
    b = n(954571),
    v = n(964901),
    C = n(652215),
    A = n(851110);
n(980504);
var N = n(221314),
    S = n(985018),
    E = n(59618);
function T(e) {
    let { className: t, sound: n, playSound: s, isPlaying: r, text: d } = e,
        c = n?.emojiId != null || n?.emojiName != null,
        u = S.intl.formatToPlainString(S.t.tuMUJ2, { emojiName: n?.emojiName, soundName: n?.name }),
        m = a.useCallback(() => {
            b.default.track(C.HAw.MODERATOR_QUEUE_ACTION, { guild_id: j.A.getGuildId(), action: "airhorn" }),
                null != s && s();
        }, [s]);
    return (0, l.jsxs)(o.D, {
        "aria-label": u,
        tag: "span",
        onClick: m,
        className: i()(E.Ls, E.oR, { [E.he]: !0 === r }, t),
        children: [
            c && (0, l.jsx)(h.A, { emojiId: n?.emojiId, emojiName: n?.emojiName, className: E.JS }),
            (0, l.jsx)("span", { children: ` ${d} ` }),
        ],
    });
}
function y(e) {
    let { containerRef: t, text: n } = e,
        s = a.useRef(null),
        i = (0, r.bG)([p.A], () => p.A.getSoundsForGuild("0")?.find((e) => "airhorn" === e.name)),
        { createMultipleConfettiAt: o } = a.useContext(f.x),
        d = (0, r.bG)([x.A], () => x.A.useReducedMotion),
        { isPlaying: c, playSound: u } = (0, v.E)(i);
    (0, g.Ay)(() => {
        (0, _.E7)();
    });
    let m = a.useCallback(async () => {
        if ((await u()) && (s.current?.addAnimation(), !d && t?.current != null)) {
            let e = t.current.getBoundingClientRect(),
                n = { x: e.left + e.width / 2, y: e.top + e.height / 3 },
                l = A.uI[Math.floor(Math.random() * A.uI.length)];
            o(
                n.x,
                n.y,
                { velocity: { type: "static-random", minValue: { x: -500, y: -500 }, maxValue: { x: 500, y: -100 } } },
                40,
                { sprite: l },
            );
        }
    }, [u, o, d, t]);
    return void 0 === i ? null : (0, l.jsx)(T, { sound: i, playSound: m, isPlaying: c, text: n });
}
function I() {
    let e = a.useRef(null);
    return (0, l.jsxs)(d.B, {
        className: E.kL,
        direction: "vertical",
        align: "center",
        justify: "center",
        padding: { top: 24, bottom: 24 },
        ref: e,
        children: [
            (0, l.jsx)(c._, { size: "custom", width: 48, height: 48 }),
            (0, l.jsxs)(d.B, {
                direction: "vertical",
                align: "center",
                justify: "center",
                children: [
                    (0, l.jsx)(u.D, {
                        className: E.wx,
                        variant: "heading-md/medium",
                        children: S.intl.string(N.default.h6QNky),
                    }),
                    (0, l.jsx)(m.E, {
                        className: E.Qq,
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: S.intl.format(N.default["8N4c58"], {
                            airhornHook: (t) => (0, l.jsx)(y, { containerRef: e, text: t }),
                        }),
                    }),
                ],
            }),
        ],
    });
}
