i.d(e, { A: () => f });
var n = i(477900),
    l = i(582128),
    a = i(765178),
    r = i(885574),
    s = i(834730),
    d = i(821609),
    u = i(983283),
    c = i(375708),
    o = i(489027);
function f(t) {
    let { onPublish: e } = t,
        [i, f] = l.useState(!1),
        [g, E] = l.useState(!1),
        h = l.useCallback(async () => {
            f(!0), E(!1);
            try {
                await e(), a.O.announce(c.intl.string(u.default.pDzipI));
            } catch {
                E(!0);
            } finally {
                f(!1);
            }
        }, [e]);
    return (0, n.jsxs)("div", {
        className: o.lm,
        children: [
            (0, n.jsx)(r.m, { size: "sm", color: "currentColor", className: o.Kk }),
            g
                ? (0, n.jsx)(s.E, {
                      variant: "text-sm/medium",
                      color: "text-feedback-critical",
                      className: o.iU,
                      role: "alert",
                      children: c.intl.string(c.t.F8FvUy),
                  })
                : (0, n.jsx)(s.E, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      className: o.iU,
                      children: c.intl.string(u.default.Z2z85q),
                  }),
            (0, n.jsx)(d.$, {
                variant: "secondary",
                size: "sm",
                text: c.intl.string(u.default["yul+0g"]),
                loading: i,
                onClick: h,
            }),
        ],
    });
}
