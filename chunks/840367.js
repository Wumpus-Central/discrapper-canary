n.d(t, { Z: () => p });
var r = n(255367);
n(73800);
var l = n(624238),
    i = n(296009),
    o = n(442837),
    a = n(481060),
    c = n(314897),
    s = n(881410),
    d = n(388032),
    u = n(196880);
let f = {
    [i.l.FAVORITE_GAMES]: () => d.intl.string(d.t.sUQar6),
    [i.l.CURRENT_GAMES]: () => d.intl.string(d.t.SqNnur),
    [i.l.WANT_TO_PLAY_GAMES]: () => d.intl.string(d.t.bWSQwc),
    [i.l.PLAYED_GAMES]: () => d.intl.string(d.t.scOKER),
};
function p(e) {
    let { userId: t, widgetType: n, headingId: p } = e,
        m = (0, o.e7)([c.default], () => c.default.getId() === t),
        g = f[n](),
        b = m
            ? n === i.l.FAVORITE_GAMES
                ? d.intl.string(d.t.wiXdER)
                : d.intl.format(d.t["zR1+09"], { numGames: l.k[n] })
            : void 0;
    return (0, r.jsxs)("div", {
        className: u.headerRow,
        children: [
            (0, r.jsxs)("div", {
                className: u.title,
                children: [
                    (0, r.jsx)(a.X6q, {
                        variant: "heading-sm/medium",
                        color: "text-default",
                        id: p,
                        children: g,
                    }),
                    null != b &&
                        (0, r.jsx)(a.Text, {
                            variant: "text-xs/normal",
                            color: "text-secondary",
                            children: b,
                        }),
                ],
            }),
            m &&
                (0, r.jsxs)("div", {
                    className: u.actions,
                    children: [
                        (0, r.jsx)(s.Z, {}),
                        (0, r.jsx)(a.hU, {
                            icon: a.xhG,
                            variant: "secondary",
                            "aria-label": d.intl.string(d.t.xpSHSk),
                            onClick: () => {},
                            size: "sm",
                        }),
                    ],
                }),
        ],
    });
}
