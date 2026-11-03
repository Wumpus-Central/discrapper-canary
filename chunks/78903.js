(n.d(i, { default: () => p }), n(321073));
var a = n(477900),
    l = n(582128),
    r = n(189213),
    s = n(939249),
    c = n(834730),
    e = n(468689),
    o = n(976860),
    C = n(513461),
    E = n(652215),
    d = n(746080),
    u = n(105292),
    k = n(695416);
let p = function (t) {
    let { guildId: i, submittedGuildJoinRequestsCount: n, onClose: p, transitionState: h, onConfirm: g } = t,
        b = l.useCallback(
            (t) => {
                (p(), g(t));
            },
            [p, g],
        ),
        x = l.useCallback(() => {
            (p(), e.A.close(), (0, o.pX)(E.BVt.CHANNEL(i, d.VV.MEMBER_SAFETY)));
        }, [i, p]),
        V = n > 200,
        m = [
            { text: u.intl.string(u.t["ETE/oC"]), onClick: p, variant: "secondary" },
            { text: u.intl.string(u.t.Gfg0rT), onClick: () => b(C.B5.REJECTED), variant: "critical-primary" },
        ];
    return (
        V || m.push({ text: u.intl.string(u.t.VWqCvL), onClick: () => b(C.B5.APPROVED), variant: "primary" }),
        (0, a.jsx)(r.a, {
            title: u.intl.formatToPlainString(u.t.chV4Jb, { count: n }),
            onClose: p,
            subtitle: V ? u.intl.string(u.t.EPoNRs) : u.intl.string(u.t["8+nq/G"]),
            transitionState: h,
            actions: m,
            children: (0, a.jsx)(s.D, {
                className: k.K2,
                onClick: x,
                children: (0, a.jsx)(c.E, {
                    variant: "body-md/normal",
                    color: "text-link",
                    children: u.intl.string(u.t.szESVF),
                }),
            }),
        })
    );
};
