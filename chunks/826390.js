n.d(i, { default: () => p }), n(539854);
var a = n(54381),
    c = n(473749),
    r = n(793030),
    e = n(481060),
    l = n(434404),
    s = n(703656),
    o = n(246364),
    u = n(981631),
    x = n(176505),
    d = n(388032),
    C = n(820954);
let p = function (t) {
    let { guildId: i, submittedGuildJoinRequestsCount: n, onClose: p, transitionState: E, onConfirm: k } = t,
        T = c.useCallback(
            (t) => {
                p(), k(t);
            },
            [p, k],
        ),
        f = c.useCallback(() => {
            p(), l.Z.close(), (0, s.uL)(u.Z5c.CHANNEL(i, x.oC.MEMBER_SAFETY));
        }, [i, p]),
        h = n > 200,
        b = [
            {
                text: d.intl.string(d.t["ETE/oC"]),
                onClick: p,
                variant: "secondary",
            },
            {
                text: d.intl.string(d.t.Gfg0rT),
                onClick: () => T(o.wB.REJECTED),
                variant: "critical-primary",
            },
        ];
    return (
        h ||
            b.push({
                text: d.intl.string(d.t.VWqCvL),
                onClick: () => T(o.wB.APPROVED),
                variant: "primary",
            }),
        (0, a.jsx)(r.Modal, {
            title: d.intl.formatToPlainString(d.t.chV4Jb, { count: n }),
            onClose: p,
            subtitle: h ? d.intl.string(d.t.EPoNRs) : d.intl.string(d.t["8+nq/G"]),
            transitionState: E,
            actions: b,
            children: (0, a.jsx)(e.P3F, {
                className: C.actionText,
                onClick: f,
                children: (0, a.jsx)(e.Text, {
                    variant: "text-md/normal",
                    color: "text-link",
                    children: d.intl.string(d.t.szESVF),
                }),
            }),
        })
    );
};
