"use strict";
n.d(t, { D: () => N });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(397927),
    d = n(565645),
    c = n(964486),
    u = n(775602),
    m = n(21161),
    h = n(796774),
    x = n(209932),
    g = n(967198),
    f = n(954571),
    _ = n(964901),
    p = n(652215),
    j = n(851110);
n(980504);
var b = n(221314),
    v = n(985018),
    A = n(59618);
function C(e) {
    let { className: t, sound: n, playSound: s, isPlaying: r, text: c } = e,
        u = n?.emojiId != null || n?.emojiName != null,
        m = v.intl.formatToPlainString(v.t.tuMUJ2, { emojiName: n?.emojiName, soundName: n?.name }),
        h = i.useCallback(() => {
            f.default.track(p.HAw.MODERATOR_QUEUE_ACTION, { guild_id: g.A.getGuildId(), action: "airhorn" }),
                null != s && s();
        }, [s]);
    return (0, l.jsxs)(o.DUT, {
        "aria-label": m,
        tag: "span",
        onClick: h,
        className: a()(A.Ls, A.oR, { [A.he]: !0 === r }, t),
        children: [
            u && (0, l.jsx)(d.A, { emojiId: n?.emojiId, emojiName: n?.emojiName, className: A.JS }),
            (0, l.jsx)("span", { children: ` ${c} ` }),
        ],
    });
}
function T(e) {
    let { containerRef: t, text: n } = e,
        s = i.useRef(null),
        a = (0, r.bG)([x.A], () => x.A.getSoundsForGuild("0")?.find((e) => "airhorn" === e.name)),
        { createMultipleConfettiAt: o } = i.useContext(m.x),
        d = (0, r.bG)([u.A], () => u.A.useReducedMotion),
        { isPlaying: g, playSound: f } = (0, _.E)(a);
    (0, c.Ay)(() => {
        (0, h.E7)();
    });
    let p = i.useCallback(async () => {
        if ((await f()) && (s.current?.addAnimation(), !d && t?.current != null)) {
            let e = t.current.getBoundingClientRect(),
                n = { x: e.left + e.width / 2, y: e.top + e.height / 3 },
                l = j.uI[Math.floor(Math.random() * j.uI.length)];
            o(
                n.x,
                n.y,
                { velocity: { type: "static-random", minValue: { x: -500, y: -500 }, maxValue: { x: 500, y: -100 } } },
                40,
                { sprite: l },
            );
        }
    }, [f, o, d, t]);
    return void 0 === a ? null : (0, l.jsx)(C, { sound: a, playSound: p, isPlaying: g, text: n });
}
function N() {
    let e = i.useRef(null);
    return (0, l.jsxs)(o.BJc, {
        className: A.kL,
        direction: "vertical",
        align: "center",
        justify: "center",
        padding: { top: 24, bottom: 24 },
        ref: e,
        children: [
            (0, l.jsx)(o._vT, { size: "custom", width: 48, height: 48 }),
            (0, l.jsxs)(o.BJc, {
                direction: "vertical",
                align: "center",
                justify: "center",
                children: [
                    (0, l.jsx)(o.Heading, {
                        className: A.wx,
                        variant: "heading-md/medium",
                        children: v.intl.string(b.default.h6QNky),
                    }),
                    (0, l.jsx)(o.Text, {
                        className: A.Qq,
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: v.intl.format(b.default["8N4c58"], {
                            airhornHook: (t) => (0, l.jsx)(T, { containerRef: e, text: t }),
                        }),
                    }),
                ],
            }),
        ],
    });
}
