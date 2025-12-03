n.d(t, { Z: () => d });
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    a = n(442837),
    o = n(481060),
    c = n(314897),
    s = n(825354),
    u = n(635318);
function d(e) {
    let {
        userId: t,
        headingId: n,
        widget: i,
        disableInteraction: a = !1,
        title: c,
        subtitle: s,
        actionButtons: d = [],
        className: g,
    } = e;
    return (0, r.jsxs)("div", {
        className: l()(u.headerRow, g),
        children: [
            (0, r.jsxs)("div", {
                className: u.title,
                children: [
                    (0, r.jsx)(o.Heading, {
                        variant: "heading-sm/medium",
                        color: "text-default",
                        id: n,
                        children: c,
                    }),
                    null != s &&
                        (0, r.jsx)(o.Text, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: s,
                        }),
                ],
            }),
            (0, r.jsx)(f, {
                widget: i,
                actionButtons: d,
                disabledInteraction: a,
                userId: t,
            }),
        ],
    });
}
function f(e) {
    let { widget: t, actionButtons: n, disabledInteraction: i, userId: l } = e,
        o = (0, a.e7)([c.default], () => c.default.getId());
    return i
        ? null
        : null != n && n.length > 0
          ? (0, r.jsx)("div", {
                className: u.actions,
                children: n,
            })
          : o !== l
            ? (0, r.jsx)("div", {
                  className: u.actions,
                  children: (0, r.jsx)(s.Z, {
                      widget: t,
                      userId: l,
                      className: u.menuButton,
                  }),
              })
            : null;
}
