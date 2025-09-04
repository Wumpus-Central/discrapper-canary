r.d(t, { Z: () => f });
var n = r(951288);
r(647438);
var i = r(442837),
    l = r(481060),
    a = r(314897),
    o = r(86419),
    c = r(881410),
    s = r(825354),
    u = r(388032),
    d = r(635318);
function f(e) {
    let { userId: t, headingId: r, widget: c, disableInteraction: s = !1 } = e,
        f = (0, i.e7)([a.default], () => a.default.getId() === t),
        b = (0, o.kQ)(c),
        p = (0, o.Nc)(c.type),
        m =
            f && c.games.length > 0
                ? (function (e) {
                      let t = (0, o.Gv)(e);
                      return 1 === t ? u.intl.string(u.t.wiXdER) : u.intl.format(u.t["zR1+09"], { numGames: t });
                  })(c.type)
                : void 0;
    return (0, n.jsxs)("div", {
        className: d.headerRow,
        children: [
            (0, n.jsxs)("div", {
                className: d.title,
                children: [
                    (0, n.jsx)(l.X6q, {
                        variant: "heading-sm/medium",
                        color: "text-default",
                        id: r,
                        children: p,
                    }),
                    null != m &&
                        (0, n.jsx)(l.Text, {
                            variant: "text-xs/normal",
                            color: "text-secondary",
                            children: m,
                        }),
                ],
            }),
            (0, n.jsx)(g, {
                widget: c,
                disabled: b,
                disabledInteraction: s,
                userId: t,
            }),
        ],
    });
}
function g(e) {
    let { widget: t, disabled: r, disabledInteraction: l, userId: u } = e,
        f = (0, i.e7)([a.default], () => a.default.getId() === u),
        g = (0, o.vI)(t.type) && t.games.some((e) => null != e.comment);
    return l
        ? null
        : f
          ? (0, n.jsx)("div", {
                className: d.actions,
                children: (0, n.jsx)(c.Z, {
                    disabled: r,
                    widgetType: t.type,
                    widget: t,
                }),
            })
          : g
            ? (0, n.jsx)("div", {
                  className: d.actions,
                  children: (0, n.jsx)(s.Z, {
                      widget: t,
                      userId: u,
                      className: d.menuButton,
                  }),
              })
            : null;
}
