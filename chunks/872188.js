l.d(t, { A: () => m });
var n = l(477900),
    i = l(582128),
    s = l(765178),
    a = l(885574),
    r = l(834730),
    d = l(821609),
    c = l(663269),
    u = l(105292),
    o = l(146108);
function m(e) {
    let { onPublish: t } = e,
        [l, m] = i.useState(!1),
        [f, x] = i.useState(!1),
        g = i.useCallback(async () => {
            (m(!0), x(!1));
            try {
                (await t(), s.O.announce(u.intl.string(c.default.pDzipI)));
            } catch {
                x(!0);
            } finally {
                m(!1);
            }
        }, [t]);
    return (0, n.jsxs)("div", {
        className: o.lm,
        children: [
            (0, n.jsx)(a.CircleInformationIcon, { size: "sm", color: "currentColor", className: o.Kk }),
            f
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
                onClick: g,
            }),
        ],
    });
}
