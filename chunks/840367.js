r.d(t, { Z: () => m });
var n = r(951288);
r(647438);
var i = r(624238),
    a = r(296009),
    l = r(442837),
    o = r(481060),
    c = r(314897),
    s = r(86419),
    u = r(881410),
    d = r(502587),
    f = r(825354),
    g = r(388032),
    b = r(635318);
let p = {
    [a.l.FAVORITE_GAMES]: () => g.intl.string(g.t.sUQar6),
    [a.l.CURRENT_GAMES]: () => g.intl.string(g.t.SqNnur),
    [a.l.WANT_TO_PLAY_GAMES]: () => g.intl.string(g.t.bWSQwc),
    [a.l.PLAYED_GAMES]: () => g.intl.string(g.t.scOKER),
};
function m(e) {
    var t;
    let { userId: r, headingId: a, widget: u, disableInteraction: d = !1 } = e,
        f = (0, l.e7)([c.default], () => c.default.getId() === r),
        m = (0, s.kQ)(u),
        j = p[u.type](),
        y =
            f && u.games.length > 0
                ? ((t = u.type),
                  1 === i.k[t] ? g.intl.string(g.t.wiXdER) : g.intl.format(g.t["zR1+09"], { numGames: i.k[t] }))
                : void 0;
    return (0, n.jsxs)("div", {
        className: b.headerRow,
        children: [
            (0, n.jsxs)("div", {
                className: b.title,
                children: [
                    (0, n.jsx)(o.X6q, {
                        variant: "heading-sm/medium",
                        color: "text-default",
                        id: a,
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
            (0, n.jsx)(O, {
                widget: u,
                disabled: m,
                disabledInteraction: d,
                userId: r,
            }),
        ],
    });
}
function O(e) {
    let { widget: t, disabled: r, disabledInteraction: i, userId: a } = e,
        o = (0, l.e7)([c.default], () => c.default.getId() === a),
        g = (0, s.vI)(t.type) && t.games.some((e) => null != e.comment);
    return i
        ? null
        : o
          ? (0, n.jsxs)("div", {
                className: b.actions,
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
                  className: b.actions,
                  children: (0, n.jsx)(f.Z, {
                      widget: t,
                      userId: a,
                      className: b.menuButton,
                  }),
              })
            : null;
}
