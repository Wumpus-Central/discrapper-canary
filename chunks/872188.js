var n = l(477900),
    i = l(582128),
    s = l(765178),
    a = l(885574),
    r = l(834730),
    d = l(821609),
    o = l(135294),
    c = l(792996),
    u = l(146108);
l.d(
    t,
    {},
    {
        A: function (e) {
            let { onPublish: t } = e,
                [l, m] = i.useState(!1),
                [x, h] = i.useState(!1),
                f = i.useCallback(async () => {
                    (m(!0), h(!1));
                    try {
                        (await t(), s.O.announce(c.intl.string(o.default.pDzipI)));
                    } catch {
                        h(!0);
                    } finally {
                        m(!1);
                    }
                }, [t]);
            return (0, n.jsxs)("div", {
                className: u.lm,
                children: [
                    (0, n.jsx)(a.CircleInformationIcon, { size: "sm", color: "currentColor", className: u.Kk }),
                    x
                        ? (0, n.jsx)(r.E, {
                              variant: "body-sm/medium",
                              color: "text-feedback-critical",
                              className: u.iU,
                              role: "alert",
                              children: c.intl.string(c.t.F8FvUy),
                          })
                        : (0, n.jsx)(r.E, {
                              variant: "body-sm/medium",
                              color: "text-muted",
                              className: u.iU,
                              children: c.intl.string(o.default.Z2z85q),
                          }),
                    (0, n.jsx)(d.$, {
                        variant: "secondary",
                        size: "sm",
                        text: c.intl.string(o.default["yul+0g"]),
                        loading: l,
                        onClick: f,
                    }),
                ],
            });
        },
    },
);
