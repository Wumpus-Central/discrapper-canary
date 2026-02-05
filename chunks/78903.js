n.d(i, { default: () => x }), n(321073);
var r = n(627968),
    a = n(64700),
    l = n(158954),
    s = n(397927),
    e = n(997509),
    c = n(976860),
    o = n(513461),
    d = n(652215),
    p = n(746080),
    C = n(985018),
    u = n(442146);
let x = function (t) {
    let { guildId: i, submittedGuildJoinRequestsCount: n, onClose: x, transitionState: E, onConfirm: k } = t,
        h = a.useCallback(
            (t) => {
                x(), k(t);
            },
            [x, k],
        ),
        T = a.useCallback(() => {
            x(), e.A.close(), (0, c.pX)(d.BVt.CHANNEL(i, p.VV.MEMBER_SAFETY));
        }, [i, x]),
        b = n > 200,
        f = [
            { text: C.intl.string(C.t["ETE/oC"]), onClick: x, variant: "secondary" },
            { text: C.intl.string(C.t.Gfg0rT), onClick: () => h(o.B5.REJECTED), variant: "critical-primary" },
        ];
    return (
        b || f.push({ text: C.intl.string(C.t.VWqCvL), onClick: () => h(o.B5.APPROVED), variant: "primary" }),
        (0, r.jsx)(l.Modal, {
            title: C.intl.formatToPlainString(C.t.chV4Jb, { count: n }),
            onClose: x,
            subtitle: b ? C.intl.string(C.t.EPoNRs) : C.intl.string(C.t["8+nq/G"]),
            transitionState: E,
            actions: f,
            children: (0, r.jsx)(s.DUT, {
                className: u.K2,
                onClick: T,
                children: (0, r.jsx)(s.Text, {
                    variant: "text-md/normal",
                    color: "text-link",
                    children: C.intl.string(C.t.szESVF),
                }),
            }),
        })
    );
};
