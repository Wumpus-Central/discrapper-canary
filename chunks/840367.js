n.d(t, { Z: () => c });
var r = n(951288);
n(647438);
var i = n(442837),
    a = n(481060),
    l = n(314897),
    o = n(825354),
    s = n(635318);
function c(e) {
    let {
        userId: t,
        headingId: n,
        widget: i,
        disableInteraction: l = !1,
        title: o,
        subtitle: c,
        actionButtons: d = [],
    } = e;
    return (0, r.jsxs)("div", {
        className: s.headerRow,
        children: [
            (0, r.jsxs)("div", {
                className: s.title,
                children: [
                    (0, r.jsx)(a.Heading, {
                        variant: "heading-sm/medium",
                        color: "text-default",
                        id: n,
                        children: o,
                    }),
                    null != c &&
                        (0, r.jsx)(a.Text, {
                            variant: "text-xs/normal",
                            color: "text-secondary",
                            children: c,
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
    let { widget: t, actionButtons: n, disabledInteraction: a, userId: c } = e,
        u = (0, i.e7)([l.default], () => l.default.getId());
    return a
        ? null
        : null != n && n.length > 0
          ? (0, r.jsx)("div", {
                className: s.actions,
                children: n,
            })
          : u !== c
            ? (0, r.jsx)("div", {
                  className: s.actions,
                  children: (0, r.jsx)(o.Z, {
                      widget: t,
                      userId: c,
                      className: s.menuButton,
                  }),
              })
            : null;
}
