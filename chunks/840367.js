n.d(t, { Z: () => p });
var r = n(255367);
n(73800);
var l = n(624238),
    i = n(296009),
    o = n(442837),
    a = n(481060),
    c = n(314897),
    s = n(881410),
    d = n(825354),
    u = n(388032),
    f = n(196880);
let m = {
    [i.l.FAVORITE_GAMES]: () => u.intl.string(u.t.sUQar6),
    [i.l.CURRENT_GAMES]: () => u.intl.string(u.t.SqNnur),
    [i.l.WANT_TO_PLAY_GAMES]: () => u.intl.string(u.t.bWSQwc),
    [i.l.PLAYED_GAMES]: () => u.intl.string(u.t.scOKER),
};
function p(e) {
    var t;
    let { userId: n, headingId: p, widget: g, reachedMaxGamesLimit: b, showHeaderActionButtons: j } = e,
        h = (0, o.e7)([c.default], () => c.default.getId() === n),
        x = m[g.type](),
        y = h
            ? (t = g.type) === i.l.FAVORITE_GAMES
                ? u.intl.string(u.t.wiXdER)
                : u.intl.format(u.t["zR1+09"], { numGames: l.k[t] })
            : void 0;
    return (0, r.jsxs)("div", {
        className: f.headerRow,
        children: [
            (0, r.jsxs)("div", {
                className: f.title,
                children: [
                    (0, r.jsx)(a.X6q, {
                        variant: "heading-sm/medium",
                        color: "text-default",
                        id: p,
                        children: x,
                    }),
                    null != y &&
                        (0, r.jsx)(a.Text, {
                            variant: "text-xs/normal",
                            color: "text-secondary",
                            children: y,
                        }),
                ],
            }),
            h &&
                j &&
                (0, r.jsxs)("div", {
                    className: f.actions,
                    children: [
                        (0, r.jsx)(s.Z, {
                            disabled: b,
                            widgetType: g.type,
                        }),
                        (0, r.jsx)(d.Z, { widget: g }),
                    ],
                }),
        ],
    });
}
