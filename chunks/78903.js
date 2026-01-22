n.d(i, {
    default: () => E,
}),
    n(321073);
var a = n(627968),
    l = n(64700),
    r = n(158954),
    s = n(397927),
    e = n(997509),
    c = n(976860),
    o = n(513461),
    d = n(652215),
    C = n(746080),
    p = n(985018),
    u = n(442146);
let E = function (t) {
    let { guildId: i, submittedGuildJoinRequestsCount: n, onClose: E, transitionState: k, onConfirm: h } = t,
        x = l.useCallback(
            (t) => {
                E(), h(t);
            },
            [E, h],
        ),
        f = l.useCallback(() => {
            E(), e.A.close(), (0, c.pX)(d.BVt.CHANNEL(i, C.VV.MEMBER_SAFETY));
        }, [i, E]),
        g = n > 200,
        b = [
            {
                text: p.intl.string(p.t["ETE/oC"]),
                onClick: E,
                variant: "secondary",
            },
            {
                text: p.intl.string(p.t.Gfg0rT),
                onClick: () => x(o.B5.REJECTED),
                variant: "critical-primary",
            },
        ];
    return (
        g ||
            b.push({
                text: p.intl.string(p.t.VWqCvL),
                onClick: () => x(o.B5.APPROVED),
                variant: "primary",
            }),
        (0, a.jsx)(r.Modal, {
            title: p.intl.formatToPlainString(p.t.chV4Jb, {
                count: n,
            }),
            onClose: E,
            subtitle: g ? p.intl.string(p.t.EPoNRs) : p.intl.string(p.t["8+nq/G"]),
            transitionState: k,
            actions: b,
            children: (0, a.jsx)(s.DUT, {
                className: u.K2,
                onClick: f,
                children: (0, a.jsx)(s.Text, {
                    variant: "text-md/normal",
                    color: "text-link",
                    children: p.intl.string(p.t.szESVF),
                }),
            }),
        })
    );
};
