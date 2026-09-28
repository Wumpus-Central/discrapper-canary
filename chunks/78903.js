(n.d(i, { default: () => p }), n(321073));
var a = n(477900),
    l = n(582128),
    r = n(189213),
    s = n(939249),
    e = n(834730),
    c = n(468689),
    o = n(976860),
    u = n(513461),
    C = n(652215),
    E = n(746080),
    d = n(375708),
    k = n(695416);
let p = function (t) {
    let { guildId: i, submittedGuildJoinRequestsCount: n, onClose: p, transitionState: h, onConfirm: g } = t,
        x = l.useCallback(
            (t) => {
                (p(), g(t));
            },
            [p, g],
        ),
        V = l.useCallback(() => {
            (p(), c.default.close(), (0, o.pX)(C.BVt.CHANNEL(i, E.VV.MEMBER_SAFETY)));
        }, [i, p]),
        b = n > 200,
        m = [
            { text: d.intl.string(d.t["ETE/oC"]), onClick: p, variant: "secondary" },
            { text: d.intl.string(d.t.Gfg0rT), onClick: () => x(u.B5.REJECTED), variant: "critical-primary" },
        ];
    return (
        b || m.push({ text: d.intl.string(d.t.VWqCvL), onClick: () => x(u.B5.APPROVED), variant: "primary" }),
        (0, a.jsx)(r.a, {
            title: d.intl.formatToPlainString(d.t.chV4Jb, { count: n }),
            onClose: p,
            subtitle: b ? d.intl.string(d.t.EPoNRs) : d.intl.string(d.t["8+nq/G"]),
            transitionState: h,
            actions: m,
            children: (0, a.jsx)(s.D, {
                className: k.K2,
                onClick: V,
                children: (0, a.jsx)(e.E, {
                    variant: "text-md/normal",
                    color: "text-link",
                    children: d.intl.string(d.t.szESVF),
                }),
            }),
        })
    );
};
