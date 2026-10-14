n.d(t, { A: () => m });
var l = n(477900),
    i = n(582128),
    a = n(765178),
    s = n(885574),
    r = n(834730),
    d = n(821609),
    c = n(61567),
    o = n(660183),
    u = n(146108);
function m(e) {
    let { onPublish: t } = e,
        [n, m] = i.useState(!1),
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
    return (0, l.jsxs)("div", {
        className: u.lm,
        children: [
            (0, l.jsx)(s.CircleInformationIcon, { size: "sm", color: "currentColor", className: u.Kk }),
            x
                ? (0, l.jsx)(r.E, {
                      variant: "text-sm/medium",
                      color: "text-feedback-critical",
                      className: u.iU,
                      role: "alert",
                      children: o.intl.string(o.t.F8FvUy),
                  })
                : (0, l.jsx)(r.E, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      className: u.iU,
                      children: o.intl.string(c.default.Z2z85q),
                  }),
            (0, l.jsx)(d.$, {
                variant: "secondary",
                size: "sm",
                text: o.intl.string(c.default["yul+0g"]),
                loading: n,
                onClick: f,
            }),
        ],
    });
}
