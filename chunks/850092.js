n.d(t, { A: () => p });
var a = n(627968),
    i = n(64700),
    l = n(789645),
    r = n(827734),
    o = n(834730),
    s = n(821609),
    d = n(935520),
    c = n(429521),
    u = n(985018),
    _ = n(656884);
function p(e) {
    let { userId: t, onSendWave: n } = e,
        { enabled: p } = d.A.useConfig({ location: "Friend Request Toast" }),
        [f, A] = i.useState(null),
        [g, h] = i.useState(!1),
        x = (0, c.A)(t, "User Profile Friend Request Toast"),
        m = i.useCallback(async () => {
            h(!0), await x(n, A), h(!1);
        }, [n, x]);
    return p
        ? (0, a.jsx)("div", {
              className: _.$J,
              children:
                  null != f
                      ? (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)("div", {
                                    className: _.i3,
                                    children: (0, a.jsx)(l.P, { color: r.A.colors.STATUS_DANGER }),
                                }),
                                (0, a.jsx)(o.E, { variant: "text-sm/normal", color: "text-muted", children: f }),
                            ],
                        })
                      : (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(o.E, {
                                    variant: "text-sm/normal",
                                    color: "text-default",
                                    children: u.intl.string(u.t.XcTHmQ),
                                }),
                                (0, a.jsx)(s.$, {
                                    disabled: g,
                                    variant: "secondary",
                                    text: u.intl.string(u.t.pVlP58),
                                    size: "sm",
                                    onClick: m,
                                }),
                            ],
                        }),
          })
        : null;
}
