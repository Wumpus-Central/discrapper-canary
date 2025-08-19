r.d(t, { Z: () => b });
var n = r(951288);
r(647438);
var l = r(624238),
    i = r(296009),
    a = r(442837),
    o = r(481060),
    c = r(314897),
    s = r(86419),
    u = r(881410),
    d = r(825354),
    f = r(388032),
    g = r(635318);
let p = {
    [i.l.FAVORITE_GAMES]: () => f.intl.string(f.t.sUQar6),
    [i.l.CURRENT_GAMES]: () => f.intl.string(f.t.SqNnur),
    [i.l.WANT_TO_PLAY_GAMES]: () => f.intl.string(f.t.bWSQwc),
    [i.l.PLAYED_GAMES]: () => f.intl.string(f.t.scOKER),
};
function b(e) {
    var t;
    let { userId: r, headingId: u, widget: d, disableInteraction: b = !1 } = e,
        m = (0, a.e7)([c.default], () => c.default.getId() === r),
        j = (0, s.kQ)(d),
        y = p[d.type](),
        v =
            m && d.games.length > 0
                ? (t = d.type) === i.l.FAVORITE_GAMES
                    ? f.intl.string(f.t.wiXdER)
                    : f.intl.format(f.t["zR1+09"], { numGames: l.k[t] })
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
                        id: u,
                        children: y,
                    }),
                    null != v &&
                        (0, n.jsx)(o.Text, {
                            variant: "text-xs/normal",
                            color: "text-secondary",
                            children: v,
                        }),
                ],
            }),
            (0, n.jsx)(O, {
                widget: d,
                disabled: j,
                disabledInteraction: b,
                userId: r,
            }),
        ],
    });
}
function O(e) {
    let { widget: t, disabled: r, disabledInteraction: l, userId: o } = e,
        s = (0, a.e7)([c.default], () => c.default.getId() === o);
    return !l && (s || (t.type === i.l.FAVORITE_GAMES && t.games.some((e) => null != e.comment)))
        ? (0, n.jsxs)("div", {
              className: g.actions,
              children: [
                  s &&
                      (0, n.jsx)(u.Z, {
                          disabled: r,
                          widgetType: t.type,
                      }),
                  (0, n.jsx)(d.Z, {
                      widget: t,
                      userId: o,
                  }),
              ],
          })
        : null;
}
