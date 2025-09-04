r.d(t, { Z: () => a });
var n = r(951288);
r(647438);
var i = r(481060),
    l = r(825354),
    o = r(635318);
function a(e) {
    let {
        userId: t,
        headingId: r,
        widget: l,
        disableInteraction: a = !1,
        title: s,
        subtitle: u,
        actionButtons: d = [],
    } = e;
    return (0, n.jsxs)("div", {
        className: o.headerRow,
        children: [
            (0, n.jsxs)("div", {
                className: o.title,
                children: [
                    (0, n.jsx)(i.X6q, {
                        variant: "heading-sm/medium",
                        color: "text-default",
                        id: r,
                        children: s,
                    }),
                    null != u &&
                        (0, n.jsx)(i.Text, {
                            variant: "text-xs/normal",
                            color: "text-secondary",
                            children: u,
                        }),
                ],
            }),
            (0, n.jsx)(c, {
                widget: l,
                actionButtons: d,
                disabledInteraction: a,
                userId: t,
            }),
        ],
    });
}
function c(e) {
    let { widget: t, actionButtons: r, disabledInteraction: i, userId: a } = e;
    return i
        ? null
        : null != r && r.length > 0
          ? (0, n.jsx)("div", {
                className: o.actions,
                children: r,
            })
          : (0, n.jsx)("div", {
                className: o.actions,
                children: (0, n.jsx)(l.Z, {
                    widget: t,
                    userId: a,
                    className: o.menuButton,
                }),
            });
}
