r.d(t, { Z: () => c });
var n = r(951288);
r(647438);
var i = r(481060),
    l = r(86419),
    o = r(825354),
    a = r(635318);
function c(e) {
    let {
        userId: t,
        headingId: r,
        widget: l,
        disableInteraction: o = !1,
        title: c,
        subtitle: u,
        actionButtons: d = [],
    } = e;
    return (0, n.jsxs)("div", {
        className: a.headerRow,
        children: [
            (0, n.jsxs)("div", {
                className: a.title,
                children: [
                    (0, n.jsx)(i.X6q, {
                        variant: "heading-sm/medium",
                        color: "text-default",
                        id: r,
                        children: c,
                    }),
                    null != u &&
                        (0, n.jsx)(i.Text, {
                            variant: "text-xs/normal",
                            color: "text-secondary",
                            children: u,
                        }),
                ],
            }),
            (0, n.jsx)(s, {
                widget: l,
                actionButtons: d,
                disabledInteraction: o,
                userId: t,
            }),
        ],
    });
}
function s(e) {
    let { widget: t, actionButtons: r, disabledInteraction: i, userId: c } = e,
        s = (0, l.vI)(t.type) && t.games.some((e) => null != e.comment);
    return i
        ? null
        : null != r && r.length > 0
          ? (0, n.jsx)("div", {
                className: a.actions,
                children: r,
            })
          : s
            ? (0, n.jsx)("div", {
                  className: a.actions,
                  children: (0, n.jsx)(o.Z, {
                      widget: t,
                      userId: c,
                      className: a.menuButton,
                  }),
              })
            : null;
}
