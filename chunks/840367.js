r.d(t, { Z: () => s });
var n = r(951288);
r(647438);
var i = r(442837),
    o = r(481060),
    a = r(314897),
    l = r(825354),
    c = r(635318);
function s(e) {
    let {
        userId: t,
        headingId: r,
        widget: i,
        disableInteraction: a = !1,
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
                    (0, n.jsx)(o.X6q, {
                        variant: "heading-sm/medium",
                        color: "text-default",
                        id: r,
                        children: l,
                    }),
                    null != s &&
                        (0, n.jsx)(o.Text, {
                            variant: "text-xs/normal",
                            color: "text-secondary",
                            children: s,
                        }),
                ],
            }),
            (0, n.jsx)(u, {
                widget: i,
                actionButtons: d,
                disabledInteraction: a,
                userId: t,
            }),
        ],
    });
}
function u(e) {
    let { widget: t, actionButtons: r, disabledInteraction: o, userId: s } = e,
        u = (0, i.e7)([a.default], () => a.default.getId());
    return o
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
