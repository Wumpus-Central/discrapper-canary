r.d(t, { Z: () => s });
var n = r(951288);
r(647438);
var i = r(442837),
    a = r(481060),
    o = r(314897),
    l = r(825354),
    c = r(635318);
function s(e) {
    let {
        userId: t,
        headingId: r,
        widget: i,
        disableInteraction: o = !1,
        title: l,
        subtitle: s,
        actionButtons: d = [],
    } = e;
    return (0, n.jsxs)("div", {
        className: c.headerRow,
        children: [
            (0, n.jsxs)("div", {
                className: c.title,
                children: [
                    (0, n.jsx)(a.X6q, {
                        variant: "heading-sm/medium",
                        color: "text-default",
                        id: r,
                        children: l,
                    }),
                    null != s &&
                        (0, n.jsx)(a.Text, {
                            variant: "text-xs/normal",
                            color: "text-secondary",
                            children: s,
                        }),
                ],
            }),
            (0, n.jsx)(u, {
                widget: i,
                actionButtons: d,
                disabledInteraction: o,
                userId: t,
            }),
        ],
    });
}
function u(e) {
    let { widget: t, actionButtons: r, disabledInteraction: a, userId: s } = e,
        u = (0, i.e7)([o.default], () => o.default.getId());
    return a
        ? null
        : null != r && r.length > 0
          ? (0, n.jsx)("div", {
                className: c.actions,
                children: r,
            })
          : u !== s
            ? (0, n.jsx)("div", {
                  className: c.actions,
                  children: (0, n.jsx)(l.Z, {
                      widget: t,
                      userId: s,
                      className: c.menuButton,
                  }),
              })
            : null;
}
