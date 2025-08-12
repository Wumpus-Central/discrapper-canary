n.d(t, { Z: () => g });
var r = n(255367);
n(73800);
var l = n(624238),
    i = n(296009),
    o = n(442837),
    a = n(481060),
    c = n(314897),
    s = n(86419),
    d = n(881410),
    u = n(825354),
    f = n(388032),
    p = n(678299);
let m = {
    [i.l.FAVORITE_GAMES]: () => f.intl.string(f.t.sUQar6),
    [i.l.CURRENT_GAMES]: () => f.intl.string(f.t.SqNnur),
    [i.l.WANT_TO_PLAY_GAMES]: () => f.intl.string(f.t.bWSQwc),
    [i.l.PLAYED_GAMES]: () => f.intl.string(f.t.scOKER),
};
function g(e) {
    var t;
    let { userId: n, headingId: g, widget: b, disableInteraction: j = !1 } = e,
        y = (0, o.e7)([c.default], () => c.default.getId() === n),
        x = (0, s.kQ)(b),
        h = m[b.type](),
        O = y
            ? (t = b.type) === i.l.FAVORITE_GAMES
                ? f.intl.string(f.t.wiXdER)
                : f.intl.format(f.t["zR1+09"], { numGames: l.k[t] })
            : void 0;
    return (0, r.jsxs)("div", {
        className: p.headerRow,
        children: [
            (0, r.jsxs)("div", {
                className: p.title,
                children: [
                    (0, r.jsx)(a.X6q, {
                        variant: "heading-sm/medium",
                        color: "text-default",
                        id: g,
                        children: h,
                    }),
                    null != O &&
                        (0, r.jsx)(a.Text, {
                            variant: "text-xs/normal",
                            color: "text-secondary",
                            children: O,
                        }),
                ],
            }),
            y &&
                !j &&
                (0, r.jsxs)("div", {
                    className: p.actions,
                    children: [
                        (0, r.jsx)(d.Z, {
                            disabled: x,
                            widgetType: b.type,
                        }),
                        (0, r.jsx)(u.Z, { widget: b }),
                    ],
                }),
        ],
    });
}
