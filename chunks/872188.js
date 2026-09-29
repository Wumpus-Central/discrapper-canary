l.d(t, { A: () => m });
var n = l(477900),
    i = l(582128),
    a = l(765178),
    s = l(885574),
    r = l(834730),
    d = l(821609),
    c = l(104129),
    o = l(375708),
    u = l(146108);
function m(e) {
    let { onPublish: t } = e,
        [l, m] = i.useState(!1),
        [x, h] = i.useState(!1),
        f = i.useCallback(async () => {
            (m(!0), h(!1));
            try {
                (await t(), a.O.announce(o.intl.string(c.default.pDzipI)));
            } catch {
                h(!0);
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
                      children: o.intl.string(o.t.F8FvUy),
                  })
                : (0, n.jsx)(r.E, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      className: u.iU,
                      children: o.intl.string(c.default.Z2z85q),
                  }),
            (0, n.jsx)(d.$, {
                variant: "secondary",
                size: "sm",
                text: o.intl.string(c.default["yul+0g"]),
                loading: l,
                onClick: f,
            }),
        ],
    });
}
