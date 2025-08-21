r.d(t, { Z: () => O });
var n = r(951288);
r(647438);
var l = r(624238),
    i = r(296009),
    a = r(442837),
    o = r(481060),
    c = r(314897),
    s = r(86419),
    u = r(881410),
    d = r(502587),
    f = r(825354),
    g = r(388032),
    p = r(635318);
let b = {
    [i.l.FAVORITE_GAMES]: () => g.intl.string(g.t.sUQar6),
    [i.l.CURRENT_GAMES]: () => g.intl.string(g.t.SqNnur),
    [i.l.WANT_TO_PLAY_GAMES]: () => g.intl.string(g.t.bWSQwc),
    [i.l.PLAYED_GAMES]: () => g.intl.string(g.t.scOKER),
};
function O(e) {
    var t;
    let { userId: r, headingId: i, widget: u, disableInteraction: d = !1 } = e,
        f = (0, a.e7)([c.default], () => c.default.getId() === r),
        O = (0, s.kQ)(u),
        j = b[u.type](),
        y =
            f && u.games.length > 0
                ? ((t = u.type),
                  1 === l.k[t] ? g.intl.string(g.t.wiXdER) : g.intl.format(g.t["zR1+09"], { numGames: l.k[t] }))
                : void 0;
    return (0, n.jsxs)("div", {
        className: p.headerRow,
        children: [
            (0, n.jsxs)("div", {
                className: p.title,
                children: [
                    (0, n.jsx)(o.X6q, {
                        variant: "heading-sm/medium",
                        color: "text-default",
                        id: i,
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
    let { widget: t, disabled: r, disabledInteraction: l, userId: i } = e,
        o = (0, a.e7)([c.default], () => c.default.getId() === i),
        g = (0, s.vI)(t.type) && t.games.some((e) => null != e.comment);
    return l
        ? null
        : o
          ? (0, n.jsxs)("div", {
                className: p.actions,
                children: [
                    (0, n.jsx)(u.Z, {
                        disabled: r,
                        widgetType: t.type,
                        widget: t,
                    }),
                    (0, n.jsx)(d.Z, { widget: t }),
                ],
            })
          : g
            ? (0, n.jsx)("div", {
                  className: p.actions,
                  children: (0, n.jsx)(f.Z, {
                      widget: t,
                      userId: i,
                      className: p.menuButton,
                  }),
              })
            : null;
}
