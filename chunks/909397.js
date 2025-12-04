n.d(t, {
    Z: () => E,
    o: () => b,
});
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(793030),
    l = n(442837),
    c = n(481060),
    u = n(607070),
    d = n(302221),
    f = n(324060),
    p = n(482617),
    _ = n(883166),
    m = n(612776),
    h = n(916018);
let g = {
    [m.yD.WELCOME]: "Entry",
    [m.yD.MESSAGES]: "Messages",
    [m.yD.EMOJIS]: "Emojis",
    [m.yD.VOICE]: "Voice",
    [m.yD.GUILDS]: "Servers",
    [m.yD.FRIENDS]: "Friends",
    [m.yD.GAMING]: "Games",
    [m.yD.QUESTS]: "Quests",
    [m.yD.END]: "Entry",
};
function E(e) {
    let { slide: t, className: n } = e,
        a = i.useContext(f.Q),
        _ = (0, p.Z)((0, c.dQu)(a.primaryColor).hex()),
        m = (0, d.a7)(_),
        E = (0, l.e7)([u.Z], () => u.Z.useReducedMotion);
    return (0, r.jsx)("div", {
        className: o()(h.container, n),
        children: (0, r.jsx)(s.xKG, {
            artboard: g[t],
            dataBinding: {
                iconColor: {
                    r: m.r,
                    g: m.g,
                    b: m.b,
                    a: 255 * m.a,
                },
                reducedMotion: E,
            },
            fit: "layout",
            withReducedMotion: "short-loop",
        }),
    });
}
function b(e) {
    let { slide: t, className: n } = e,
        i = (0, _.gl)();
    return (0, r.jsx)(_.QR, {
        spring: i,
        children: (0, r.jsx)(E, {
            slide: t,
            className: n,
        }),
    });
}
