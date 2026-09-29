l.d(t, { A: () => m });
var n = l(477900),
    i = l(582128),
    a = l(765178),
    s = l(885574),
    r = l(834730),
    d = l(821609),
    o = l(104129),
    c = l(375708),
    u = l(146108);
function m(e) {
    let { onPublish: t } = e,
        [l, m] = i.useState(!1),
        [x, f] = i.useState(!1),
        h = i.useCallback(async () => {
            (m(!0), f(!1));
            try {
                (await t(), a.O.announce(c.intl.string(o.default.pDzipI)));
            } catch {
                f(!0);
            } finally {
                m(!1);
            }
        }, [t]);
    return (0, n.jsxs)("div", {
        className: u.lm,
        children: [
            (0, n.jsx)(s.CircleInformationIcon, { size: "sm", color: "currentColor", className: u.Kk }),
            x
                ? (0, n.jsx)(r.E, {
                      variant: "text-sm/medium",
                      color: "text-feedback-critical",
                      className: u.iU,
                      role: "alert",
                      children: c.intl.string(c.t.F8FvUy),
                  })
                : (0, n.jsx)(r.E, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      className: u.iU,
                      children: c.intl.string(o.default.Z2z85q),
                  }),
            (0, n.jsx)(d.$, {
                variant: "secondary",
                size: "sm",
                text: c.intl.string(o.default["yul+0g"]),
                loading: l,
                onClick: h,
            }),
        ],
    });
}
