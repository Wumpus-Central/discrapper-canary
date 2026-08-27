i.d(e, { A: () => f });
var n = i(477900),
    l = i(582128),
    a = i(765178),
    r = i(885574),
    s = i(834730),
    c = i(821609),
    d = i(125075),
    u = i(375708),
    o = i(146108);
function f(t) {
    let { onPublish: e } = t,
        [i, f] = l.useState(!1),
        [h, g] = l.useState(!1),
        m = l.useCallback(async () => {
            f(!0), g(!1);
            try {
                await e(), a.O.announce(u.intl.string(d.default.pDzipI));
            } catch {
                g(!0);
            } finally {
                f(!1);
            }
        }, [e]);
    return (0, n.jsxs)("div", {
        className: o.lm,
        children: [
            (0, n.jsx)(r.CircleInformationIcon, { size: "sm", color: "currentColor", className: o.Kk }),
            h
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
