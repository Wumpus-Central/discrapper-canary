n.d(i, { default: () => p }), n(539854);
var e = n(54381),
    a = n(473749),
    c = n(793030),
    r = n(481060),
    l = n(434404),
    s = n(703656),
    o = n(246364),
    d = n(981631),
    u = n(176505),
    x = n(388032),
    C = n(667932);
let p = function (t) {
    let { guildId: i, submittedGuildJoinRequestsCount: n, onClose: p, transitionState: E, onConfirm: k } = t,
        T = a.useCallback(
            (t) => {
                p(), k(t);
            },
            [p, k],
        ),
        f = a.useCallback(() => {
            p(), l.Z.close(), (0, s.uL)(d.Z5c.CHANNEL(i, u.oC.MEMBER_SAFETY));
        }, [i, p]),
        h = n > 200,
        b = [
            {
                text: x.intl.string(x.t["ETE/oC"]),
                onClick: p,
                variant: "secondary",
            },
            {
                text: x.intl.string(x.t.Gfg0rT),
                onClick: () => T(o.wB.REJECTED),
                variant: "critical-primary",
            },
        ];
    return (
        h ||
            b.push({
                text: x.intl.string(x.t.VWqCvL),
                onClick: () => T(o.wB.APPROVED),
                variant: "primary",
            }),
        (0, e.jsx)(c.Modal, {
            title: x.intl.formatToPlainString(x.t.chV4Jb, { count: n }),
            onClose: p,
            subtitle: h ? x.intl.string(x.t.EPoNRs) : x.intl.string(x.t["8+nq/G"]),
            transitionState: E,
            actions: b,
            children: (0, e.jsx)(r.P3F, {
                className: C.actionText,
                onClick: f,
                children: (0, e.jsx)(r.Text, {
                    variant: "text-md/normal",
                    color: "text-link",
                    children: x.intl.string(x.t.szESVF),
                }),
            }),
        })
    );
};
