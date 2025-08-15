n.d(t, { Z: () => g });
var r = n(255367);
n(73800);
var i = n(624238),
    l = n(296009),
    o = n(442837),
    a = n(481060),
    c = n(314897),
    s = n(86419),
    d = n(881410),
    u = n(825354),
    f = n(388032),
    p = n(635318);
let m = {
    [l.l.FAVORITE_GAMES]: () => f.intl.string(f.t.sUQar6),
    [l.l.CURRENT_GAMES]: () => f.intl.string(f.t.SqNnur),
    [l.l.WANT_TO_PLAY_GAMES]: () => f.intl.string(f.t.bWSQwc),
    [l.l.PLAYED_GAMES]: () => f.intl.string(f.t.scOKER),
};
function g(e) {
    var t;
    let { userId: n, headingId: d, widget: u, disableInteraction: g = !1 } = e,
        j = (0, o.e7)([c.default], () => c.default.getId() === n),
        y = (0, s.kQ)(u),
        O = m[u.type](),
        h =
            j && u.games.length > 0
                ? (t = u.type) === l.l.FAVORITE_GAMES
                    ? f.intl.string(f.t.wiXdER)
                    : f.intl.format(f.t["zR1+09"], { numGames: i.k[t] })
                : void 0;
    return (0, r.jsxs)("div", {
        className: p.headerRow,
        children: [
            (0, r.jsxs)("div", {
                className: p.title,
                children: [
                    (0, r.jsx)(a.X6q, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        id: d,
                        children: O,
                    }),
                    null != h &&
                        (0, r.jsx)(a.Text, {
                            variant: "text-xs/normal",
                            color: "text-secondary",
                            children: h,
                        }),
                ],
            }),
            (0, r.jsx)(b, {
                widget: u,
                disabled: y,
                disabledInteraction: g,
                userId: n,
            }),
        ],
    });
}
function b(e) {
    let { widget: t, disabled: n, disabledInteraction: i, userId: a } = e,
        s = (0, o.e7)([c.default], () => c.default.getId() === a);
    return !i && (s || (t.type === l.l.FAVORITE_GAMES && t.games.some((e) => null != e.comment)))
        ? (0, r.jsxs)("div", {
              className: p.actions,
              children: [
                  s &&
                      (0, r.jsx)(d.Z, {
                          disabled: n,
                          widgetType: t.type,
                      }),
                  (0, r.jsx)(u.Z, {
                      widget: t,
                      userId: a,
                  }),
              ],
          })
        : null;
}
