i.d(t, { A: () => f });
var n = i(477900),
    l = i(582128),
    a = i(765178),
    r = i(885574),
    s = i(834730),
    c = i(821609),
    d = i(494210),
    u = i(375708),
    o = i(146108);
function f(e) {
    let { onPublish: t } = e,
        [i, f] = l.useState(!1),
        [g, h] = l.useState(!1),
        m = l.useCallback(async () => {
            f(!0), h(!1);
            try {
                await t(), a.O.announce(u.intl.string(d.default.pDzipI));
            } catch {
                h(!0);
            } finally {
                f(!1);
            }
        }, [t]);
    return (0, n.jsxs)("div", {
        className: o.lm,
        children: [
            (0, n.jsx)(r.CircleInformationIcon, { size: "sm", color: "currentColor", className: o.Kk }),
            g
                ? (0, n.jsx)(s.E, {
                      variant: "text-sm/medium",
                      color: "text-feedback-critical",
                      className: o.iU,
                      role: "alert",
                      children: u.intl.string(u.t.F8FvUy),
                  })
                : (0, n.jsx)(s.E, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      className: o.iU,
                      children: u.intl.string(d.default.Z2z85q),
                  }),
            (0, n.jsx)(c.$, {
                variant: "secondary",
                size: "sm",
                text: u.intl.string(d.default["yul+0g"]),
                loading: i,
                onClick: m,
            }),
        ],
    });
}
