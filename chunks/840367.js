r.d(t, { Z: () => g });
var n = r(951288);
r(647438);
var i = r(624238),
    l = r(442837),
    a = r(481060),
    o = r(314897),
    c = r(86419),
    s = r(881410),
    u = r(825354),
    d = r(388032),
    f = r(635318);
function g(e) {
    var t;
    let { userId: r, headingId: s, widget: u, disableInteraction: g = !1 } = e,
        p = (0, l.e7)([o.default], () => o.default.getId() === r),
        m = (0, c.kQ)(u),
        O = (0, c.Nc)(u.type),
        y =
            p && u.games.length > 0
                ? ((t = u.type),
                  1 === i.k[t] ? d.intl.string(d.t.wiXdER) : d.intl.format(d.t["zR1+09"], { numGames: i.k[t] }))
                : void 0;
    return (0, n.jsxs)("div", {
        className: f.headerRow,
        children: [
            (0, n.jsxs)("div", {
                className: f.title,
                children: [
                    (0, n.jsx)(a.X6q, {
                        variant: "heading-sm/medium",
                        color: "text-default",
                        id: s,
                        children: O,
                    }),
                    null != y &&
                        (0, n.jsx)(a.Text, {
                            variant: "text-xs/normal",
                            color: "text-secondary",
                            children: y,
                        }),
                ],
            }),
            (0, n.jsx)(b, {
                widget: u,
                disabled: m,
                disabledInteraction: g,
                userId: r,
            }),
        ],
    });
}
function b(e) {
    let { widget: t, disabled: r, disabledInteraction: i, userId: a } = e,
        d = (0, l.e7)([o.default], () => o.default.getId() === a),
        g = (0, c.vI)(t.type) && t.games.some((e) => null != e.comment);
    return i
        ? null
        : d
          ? (0, n.jsx)("div", {
                className: f.actions,
                children: (0, n.jsx)(s.Z, {
                    disabled: r,
                    widgetType: t.type,
                    widget: t,
                }),
            })
          : g
            ? (0, n.jsx)("div", {
                  className: f.actions,
                  children: (0, n.jsx)(u.Z, {
                      widget: t,
                      userId: a,
                      className: f.menuButton,
                  }),
              })
            : null;
}
