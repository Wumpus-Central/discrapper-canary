l.d(t, { A: () => f });
var n = l(477900),
    i = l(582128),
    a = l(765178),
    s = l(885574),
    r = l(834730),
    d = l(821609),
    c = l(104129),
    u = l(375708),
    o = l(146108);
function f(e) {
    let { onPublish: t } = e,
        [l, f] = i.useState(!1),
        [h, m] = i.useState(!1),
        x = i.useCallback(async () => {
            (f(!0), m(!1));
            try {
                (await t(), a.O.announce(u.intl.string(c.default.pDzipI)));
            } catch {
                m(!0);
            } finally {
                f(!1);
            }
        }, [t]);
    return (0, n.jsxs)("div", {
        className: o.lm,
        children: [
            (0, n.jsx)(s.CircleInformationIcon, { size: "sm", color: "currentColor", className: o.Kk }),
            h
                ? (0, n.jsx)(r.E, {
                      variant: "text-sm/medium",
                      color: "text-feedback-critical",
                      className: o.iU,
                      role: "alert",
                      children: u.intl.string(u.t.F8FvUy),
                  })
                : (0, n.jsx)(r.E, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      className: o.iU,
                      children: u.intl.string(c.default.Z2z85q),
                  }),
            (0, n.jsx)(d.$, {
                variant: "secondary",
                size: "sm",
                text: u.intl.string(c.default["yul+0g"]),
                loading: l,
                onClick: x,
            }),
        ],
    });
}
