n.d(t, { Z: () => s });
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(481060),
    l = n(314897),
    o = n(825354),
    c = n(359755);
function s(e) {
    let {
        userId: t,
        headingId: n,
        widget: i,
        disableInteraction: l = !1,
        title: o,
        subtitle: s,
        actionButtons: d = [],
    } = e;
    return (0, r.jsxs)("div", {
        className: c.headerRow,
        children: [
            (0, r.jsxs)("div", {
                className: c.title,
                children: [
                    (0, r.jsx)(a.Heading, {
                        variant: "heading-sm/medium",
                        color: "text-default",
                        id: n,
                        children: o,
                    }),
                    null != s &&
                        (0, r.jsx)(a.Text, {
                            variant: "text-xs/normal",
                            color: "text-secondary",
                            children: s,
                        }),
                ],
            }),
            (0, r.jsx)(u, {
                widget: i,
                actionButtons: d,
                disabledInteraction: l,
                userId: t,
            }),
        ],
    });
}
function u(e) {
    let { widget: t, actionButtons: n, disabledInteraction: a, userId: s } = e,
        u = (0, i.e7)([l.default], () => l.default.getId());
    return a
        ? null
        : null != n && n.length > 0
          ? (0, r.jsx)("div", {
                className: c.actions,
                children: n,
            })
          : u !== s
            ? (0, r.jsx)("div", {
                  className: c.actions,
                  children: (0, r.jsx)(o.Z, {
                      widget: t,
                      userId: s,
                      className: c.menuButton,
                  }),
              })
            : null;
}
