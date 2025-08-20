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
    b = r(388032),
    g = r(635318);
let p = {
    [i.l.FAVORITE_GAMES]: () => b.intl.string(b.t.sUQar6),
    [i.l.CURRENT_GAMES]: () => b.intl.string(b.t.SqNnur),
    [i.l.WANT_TO_PLAY_GAMES]: () => b.intl.string(b.t.bWSQwc),
    [i.l.PLAYED_GAMES]: () => b.intl.string(b.t.scOKER),
};
function O(e) {
    var t;
    let { userId: r, headingId: i, widget: u, disableInteraction: d = !1 } = e,
        f = (0, a.e7)([c.default], () => c.default.getId() === r),
        O = (0, s.kQ)(u),
        j = p[u.type](),
        y =
            f && u.games.length > 0
                ? ((t = u.type),
                  1 === l.k[t] ? b.intl.string(b.t.wiXdER) : b.intl.format(b.t["zR1+09"], { numGames: l.k[t] }))
                : void 0;
    return (0, n.jsxs)("div", {
        className: g.headerRow,
        children: [
            (0, n.jsxs)("div", {
                className: g.title,
                children: [
                    (0, n.jsx)(o.X6q, {
                        variant: "text-xs/medium",
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
        b = (0, s.vI)(t.type) && t.games.some((e) => null != e.comment);
    return l
        ? null
        : o
          ? (0, n.jsxs)("div", {
                className: g.actions,
                children: [
                    (0, n.jsx)(u.Z, {
                        disabled: r,
                        widgetType: t.type,
                        widget: t,
                    }),
                    (0, n.jsx)(d.Z, { widget: t }),
                ],
            })
          : b
            ? (0, n.jsx)("div", {
                  className: g.actions,
                  children: (0, n.jsx)(f.Z, {
                      widget: t,
                      userId: i,
                      className: g.menuButton,
                  }),
              })
            : null;
}
