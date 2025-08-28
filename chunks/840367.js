r.d(t, { Z: () => b });
var n = r(951288);
r(647438);
var i = r(624238),
    l = r(296009),
    a = r(442837),
    o = r(481060),
    c = r(314897),
    s = r(86419),
    u = r(881410),
    d = r(825354),
    f = r(388032),
    g = r(635318);
let p = {
    [l.l.FAVORITE_GAMES]: () => f.intl.string(f.t.sUQar6),
    [l.l.CURRENT_GAMES]: () => f.intl.string(f.t.SqNnur),
    [l.l.WANT_TO_PLAY_GAMES]: () => f.intl.string(f.t.bWSQwc),
    [l.l.PLAYED_GAMES]: () => f.intl.string(f.t.scOKER),
};
function b(e) {
    var t;
    let { userId: r, headingId: l, widget: u, disableInteraction: d = !1 } = e,
        b = (0, a.e7)([c.default], () => c.default.getId() === r),
        O = (0, s.kQ)(u),
        j = p[u.type](),
        y =
            b && u.games.length > 0
                ? ((t = u.type),
                  1 === i.k[t] ? f.intl.string(f.t.wiXdER) : f.intl.format(f.t["zR1+09"], { numGames: i.k[t] }))
                : void 0;
    return (0, n.jsxs)("div", {
        className: g.headerRow,
        children: [
            (0, n.jsxs)("div", {
                className: g.title,
                children: [
                    (0, n.jsx)(o.X6q, {
                        variant: "heading-sm/medium",
                        color: "text-default",
                        id: l,
                        children: j,
                    }),
                    null != y &&
                        (0, n.jsx)(o.Text, {
                            variant: "text-xs/normal",
                            color: "text-secondary",
                            children: y,
                        }),
                ],
            }),
            (0, n.jsx)(m, {
                widget: u,
                disabled: O,
                disabledInteraction: d,
                userId: r,
            }),
        ],
    });
}
function m(e) {
    let { widget: t, disabled: r, disabledInteraction: i, userId: l } = e,
        o = (0, a.e7)([c.default], () => c.default.getId() === l),
        f = (0, s.vI)(t.type) && t.games.some((e) => null != e.comment);
    return i
        ? null
        : o
          ? (0, n.jsx)("div", {
                className: g.actions,
                children: (0, n.jsx)(u.Z, {
                    disabled: r,
                    widgetType: t.type,
                    widget: t,
                }),
            })
          : f
            ? (0, n.jsx)("div", {
                  className: g.actions,
                  children: (0, n.jsx)(d.Z, {
                      widget: t,
                      userId: l,
                      className: g.menuButton,
                  }),
              })
            : null;
}
