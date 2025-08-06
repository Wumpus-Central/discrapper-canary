n.d(t, { Z: () => f });
var r = n(255367);
n(73800);
var l = n(624238),
    o = n(296009),
    i = n(442837),
    a = n(481060),
    c = n(314897),
    s = n(388032),
    d = n(196880);
let u = {
    [o.l.FAVORITE_GAMES]: () => s.intl.string(s.t.sUQar6),
    [o.l.CURRENT_GAMES]: () => s.intl.string(s.t.SqNnur),
    [o.l.WANT_TO_PLAY_GAMES]: () => s.intl.string(s.t.bWSQwc),
    [o.l.PLAYED_GAMES]: () => s.intl.string(s.t.scOKER),
};
function f(e) {
    let { userId: t, widgetType: n, headingId: f } = e,
        p = (0, i.e7)([c.default], () => c.default.getId() === t),
        m = u[n](),
        g = p
            ? n === o.l.FAVORITE_GAMES
                ? s.intl.string(s.t.wiXdER)
                : s.intl.format(s.t["zR1+09"], { numGames: l.k[n] })
            : void 0;
    return (0, r.jsxs)("div", {
        className: d.headerRow,
        children: [
            (0, r.jsxs)("div", {
                className: d.title,
                children: [
                    (0, r.jsx)(a.X6q, {
                        variant: "heading-sm/medium",
                        color: "text-default",
                        id: f,
                        children: m,
                    }),
                    null != g &&
                        (0, r.jsx)(a.Text, {
                            variant: "text-xs/normal",
                            color: "text-secondary",
                            children: g,
                        }),
                ],
            }),
            p &&
                (0, r.jsxs)("div", {
                    className: d.actions,
                    children: [
                        (0, r.jsx)(a.zxk, {
                            size: "sm",
                            text: s.intl.string(s.t.uqw8wM),
                            onClick: () => {},
                            variant: "secondary",
                        }),
                        (0, r.jsx)(a.hU, {
                            icon: a.xhG,
                            variant: "secondary",
                            "aria-label": s.intl.string(s.t.xpSHSk),
                            onClick: () => {},
                            size: "sm",
                        }),
                    ],
                }),
        ],
    });
}
