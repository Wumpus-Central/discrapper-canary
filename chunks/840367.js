n.d(t, { Z: () => s });
var r = n(951288);
n(647438);
var i = n(442837),
    o = n(481060),
    a = n(314897),
    l = n(825354),
    c = n(635318);
function s(e) {
    let {
        userId: t,
        headingId: n,
        widget: i,
        disableInteraction: a = !1,
        title: l,
        subtitle: s,
        actionButtons: d = [],
    } = e;
    return (0, r.jsxs)("div", {
        className: c.headerRow,
        children: [
            (0, r.jsxs)("div", {
                className: c.title,
                children: [
                    (0, r.jsx)(o.X6q, {
                        variant: "heading-sm/medium",
                        color: "text-default",
                        id: n,
                        children: l,
                    }),
                    null != s &&
                        (0, r.jsx)(o.Text, {
                            variant: "text-xs/normal",
                            color: "text-secondary",
                            children: s,
                        }),
                ],
            }),
            (0, r.jsx)(u, {
                widget: i,
                actionButtons: d,
                disabledInteraction: a,
                userId: t,
            }),
        ],
    });
}
function u(e) {
    let { widget: t, actionButtons: n, disabledInteraction: o, userId: s } = e,
        u = (0, i.e7)([a.default], () => a.default.getId());
    return o
        ? null
        : null != n && n.length > 0
          ? (0, r.jsx)("div", {
                className: c.actions,
                children: n,
            })
          : u !== s
            ? (0, r.jsx)("div", {
                  className: c.actions,
                  children: (0, r.jsx)(l.Z, {
                      widget: t,
                      userId: s,
                      className: c.menuButton,
                  }),
              })
            : null;
}
