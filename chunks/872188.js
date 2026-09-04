l.d(t, { A: () => f });
var i = l(477900),
    n = l(582128),
    a = l(765178),
    s = l(885574),
    r = l(834730),
    d = l(821609),
    c = l(61567),
    u = l(375708),
    o = l(146108);
function f(e) {
    let { onPublish: t } = e,
        [l, f] = n.useState(!1),
        [h, g] = n.useState(!1),
        m = n.useCallback(async () => {
            f(!0), g(!1);
            try {
                await t(), a.O.announce(u.intl.string(c.default.pDzipI));
            } catch {
                g(!0);
            } finally {
                f(!1);
            }
        }, [t]);
    return (0, i.jsxs)("div", {
        className: o.lm,
        children: [
            (0, i.jsx)(s.CircleInformationIcon, { size: "sm", color: "currentColor", className: o.Kk }),
            h
                ? (0, i.jsx)(r.E, {
                      variant: "text-sm/medium",
                      color: "text-feedback-critical",
                      className: o.iU,
                      role: "alert",
                      children: u.intl.string(u.t.F8FvUy),
                  })
                : (0, i.jsx)(r.E, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      className: o.iU,
                      children: u.intl.string(c.default.Z2z85q),
                  }),
            (0, i.jsx)(d.$, {
                variant: "secondary",
                size: "sm",
                text: u.intl.string(c.default["yul+0g"]),
                loading: l,
                onClick: m,
            }),
        ],
    });
}
