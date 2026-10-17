i.d(a, { default: () => p });
var e = i(477900),
    n = i(582128),
    s = i(189213),
    l = i(765178),
    r = i(473953),
    u = i(202762),
    c = i(593673),
    d = i(104129),
    o = i(105292);
function p(t) {
    let { transitionState: a, onClose: i, guildId: p } = t,
        [f, g] = n.useState(!1),
        [b, h] = n.useState(!1),
        [k, C] = n.useState(!1),
        v = n.useCallback(() => {
            (i(), (0, u.Fj)(p));
        }, [p, i]),
        y = n.useCallback(async () => {
            if ((g(!0), h(!1), !k)) {
                if (!(await (0, u.Fj)(p))) return void i();
                C(!0);
            }
            try {
                (await (0, r.W)(p, { publish_status: c.B.PUBLISHED }),
                    l.O.announce(o.intl.string(d.default.pDzipI)),
                    i());
            } catch {
                (h(!0), g(!1));
            }
        }, [p, k, i]);
    return (0, e.jsx)(s.a, {
        transitionState: a,
        onClose: i,
        title: o.intl.string(d.default["Q7s/fc"]),
        subtitle: o.intl.string(d.default.G3eP3g),
        notice: b ? { type: "critical", message: o.intl.string(o.t.F8FvUy), role: "alert" } : void 0,
        actions: [
            { variant: "secondary", text: o.intl.string(d.default["18h03e"]), disabled: f || k, onClick: v },
            { variant: "primary", text: o.intl.string(d.default.bu69qM), loading: f, onClick: y },
        ],
    });
}
