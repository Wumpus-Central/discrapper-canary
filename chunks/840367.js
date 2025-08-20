r.d(t, { Z: () => p });
var n = r(951288);
r(647438);
var l = r(624238),
    i = r(296009),
    a = r(442837),
    c = r(481060),
    o = r(314897),
    s = r(86419),
    u = r(881410),
    d = r(825354),
    f = r(388032),
    g = r(635318);
let b = {
    [i.l.FAVORITE_GAMES]: () => f.intl.string(f.t.sUQar6),
    [i.l.CURRENT_GAMES]: () => f.intl.string(f.t.SqNnur),
    [i.l.WANT_TO_PLAY_GAMES]: () => f.intl.string(f.t.bWSQwc),
    [i.l.PLAYED_GAMES]: () => f.intl.string(f.t.scOKER),
};
function p(e) {
    var t;
    let { userId: r, headingId: i, widget: u, disableInteraction: d = !1 } = e,
        p = (0, a.e7)([o.default], () => o.default.getId() === r),
        m = (0, s.kQ)(u),
        j = b[u.type](),
        y =
            p && u.games.length > 0
                ? ((t = u.type),
                  1 === l.k[t] ? f.intl.string(f.t.wiXdER) : f.intl.format(f.t["zR1+09"], { numGames: l.k[t] }))
                : void 0;
    return (0, n.jsxs)("div", {
        className: g.headerRow,
        children: [
            (0, n.jsxs)("div", {
                className: g.title,
                children: [
                    (0, n.jsx)(c.X6q, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        id: i,
                        children: j,
                    }),
                    null != y &&
                        (0, n.jsx)(c.Text, {
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
    let { widget: t, disabled: r, disabledInteraction: l, userId: i } = e,
        c = (0, a.e7)([o.default], () => o.default.getId() === i);
    return !l && (c || ((0, s.vI)(t.type) && t.games.some((e) => null != e.comment)))
        ? (0, n.jsxs)("div", {
              className: g.actions,
              children: [
                  c &&
                      (0, n.jsx)(u.Z, {
                          disabled: r,
                          widgetType: t.type,
                          widget: t,
                      }),
                  (0, n.jsx)(d.Z, {
                      widget: t,
                      userId: i,
                  }),
              ],
          })
        : null;
}
