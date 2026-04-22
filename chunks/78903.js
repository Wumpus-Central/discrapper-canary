n.d(i, { default: () => k }), n(321073);
var r = n(627968),
    a = n(64700),
    l = n(189213),
    s = n(939249),
    c = n(834730),
    e = n(997509),
    o = n(976860),
    d = n(513461),
    p = n(652215),
    C = n(746080),
    E = n(985018),
    u = n(428127);
let k = function (t) {
    let { guildId: i, submittedGuildJoinRequestsCount: n, onClose: k, transitionState: x, onConfirm: h } = t,
        b = a.useCallback(
            (t) => {
                k(), h(t);
            },
            [k, h],
        ),
        f = a.useCallback(() => {
            k(), e.A.close(), (0, o.pX)(p.BVt.CHANNEL(i, C.VV.MEMBER_SAFETY));
        }, [i, k]),
        g = n > 200,
        T = [
            { text: E.intl.string(E.t["ETE/oC"]), onClick: k, variant: "secondary" },
            { text: E.intl.string(E.t.Gfg0rT), onClick: () => b(d.B5.REJECTED), variant: "critical-primary" },
        ];
    return (
        g || T.push({ text: E.intl.string(E.t.VWqCvL), onClick: () => b(d.B5.APPROVED), variant: "primary" }),
        (0, r.jsx)(l.Modal, {
            title: E.intl.formatToPlainString(E.t.chV4Jb, { count: n }),
            onClose: k,
            subtitle: g ? E.intl.string(E.t.EPoNRs) : E.intl.string(E.t["8+nq/G"]),
            transitionState: x,
            actions: T,
            children: (0, r.jsx)(s.D, {
                className: u.K2,
                onClick: f,
                children: (0, r.jsx)(c.E, {
                    variant: "text-md/normal",
                    color: "text-link",
                    children: E.intl.string(E.t.szESVF),
                }),
            }),
        })
    );
};
