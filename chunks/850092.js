n.d(t, { A: () => f });
var l = n(627968),
    a = n(64700),
    r = n(789645),
    i = n(827734),
    s = n(834730),
    o = n(821609),
    d = n(935520),
    u = n(429521),
    c = n(985018),
    A = n(656884);
function f(e) {
    let { userId: t, onSendWave: n } = e,
        { enabled: f } = d.A.useConfig({ location: "Friend Request Toast" }),
        [_, p] = a.useState(null),
        [h, g] = a.useState(!1),
        I = (0, u.A)(t, "User Profile Friend Request Toast"),
        m = a.useCallback(async () => {
            g(!0), await I(n, p), g(!1);
        }, [n, I]);
    return f
        ? (0, l.jsx)("div", {
              className: A.$J,
              children:
                  null != _
                      ? (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)("div", {
                                    className: A.i3,
                                    children: (0, l.jsx)(r.P, { color: i.A.colors.STATUS_DANGER }),
                                }),
                                (0, l.jsx)(s.E, { variant: "text-sm/normal", color: "text-muted", children: _ }),
                            ],
                        })
                      : (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(s.E, {
                                    variant: "text-sm/normal",
                                    color: "text-default",
                                    children: c.intl.string(c.t.XcTHmQ),
                                }),
                                (0, l.jsx)(o.$, {
                                    disabled: h,
                                    variant: "secondary",
                                    text: c.intl.string(c.t.pVlP58),
                                    size: "sm",
                                    onClick: m,
                                }),
                            ],
                        }),
          })
        : null;
}
