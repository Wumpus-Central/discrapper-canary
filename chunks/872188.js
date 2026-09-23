l.d(t, { A: () => m });
var n = l(477900),
    i = l(582128),
    a = l(765178),
    r = l(885574),
    s = l(834730),
    d = l(821609),
    o = l(104129),
    u = l(375708),
    c = l(146108);
function m(e) {
    let { onPublish: t } = e,
        [l, m] = i.useState(!1),
        [f, x] = i.useState(!1),
        h = i.useCallback(async () => {
            (m(!0), x(!1));
            try {
                (await t(), a.O.announce(u.intl.string(o.default.pDzipI)));
            } catch {
                x(!0);
            } finally {
                m(!1);
            }
        }, [t]);
    return (0, n.jsxs)("div", {
        className: c.lm,
        children: [
            (0, n.jsx)(r.CircleInformationIcon, { size: "sm", color: "currentColor", className: c.Kk }),
            f
                ? (0, n.jsx)(s.E, {
                      variant: "text-sm/medium",
                      color: "text-feedback-critical",
                      className: c.iU,
                      role: "alert",
                      children: u.intl.string(u.t.F8FvUy),
                  })
                : (0, n.jsx)(s.E, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      className: c.iU,
                      children: u.intl.string(o.default.Z2z85q),
                  }),
            (0, n.jsx)(d.$, {
                variant: "secondary",
                size: "sm",
                text: u.intl.string(o.default["yul+0g"]),
                loading: l,
                onClick: h,
            }),
        ],
    });
}
