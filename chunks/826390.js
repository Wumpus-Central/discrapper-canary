(i.d(n, { default: () => E }), i(539854));
var e = i(255367),
    a = i(73800),
    r = i(82659),
    s = i(481060),
    c = i(313201),
    l = i(724723),
    o = i(434404),
    x = i(703656),
    d = i(246364),
    h = i(981631),
    k = i(176505),
    m = i(388032),
    u = i(367503);
let E = function (t) {
    let { guildId: n, submittedGuildJoinRequestsCount: i, onClose: E, transitionState: g, onConfirm: C } = t,
        f = (0, l.q)('PendingJoinRequestsWarningModal'),
        p = (0, c.Dt)(),
        T = a.useCallback(
            (t) => {
                (E(), C(t));
            },
            [E, C]
        ),
        j = a.useCallback(() => {
            (E(), o.Z.close(), (0, x.uL)(h.Z5c.CHANNEL(n, k.oC.MEMBER_SAFETY)));
        }, [n, E]),
        v = i > 200;
    if (f) {
        let t = [
            {
                text: m.intl.string(m.t['ETE/oK']),
                onClick: E,
                variant: 'secondary'
            },
            {
                text: m.intl.string(m.t.Gfg0ra),
                onClick: () => T(d.wB.REJECTED),
                variant: 'critical-primary'
            }
        ];
        return (
            v ||
                t.push({
                    text: m.intl.string(m.t.VWqCvL),
                    onClick: () => T(d.wB.APPROVED),
                    variant: 'primary'
                }),
            (0, e.jsx)(r.u, {
                title: m.intl.formatToPlainString(m.t.chV4JS, { count: i }),
                onClose: E,
                subtitle: v ? m.intl.string(m.t.EPoNRk) : m.intl.string(m.t['8+nq/P']),
                transitionState: g,
                actions: t,
                children: (0, e.jsx)(s.P3F, {
                    className: u.actionText,
                    onClick: j,
                    children: (0, e.jsx)(s.Text, {
                        variant: 'text-md/normal',
                        color: 'text-link',
                        children: m.intl.string(m.t.szESVF)
                    })
                })
            })
        );
    }
    return (0, e.jsxs)(s.Y0X, {
        className: u.container,
        transitionState: g,
        'aria-labelledby': p,
        parentComponent: 'PendingJoinRequestsWarningModal',
        children: [
            (0, e.jsxs)(s.hzk, {
                className: u.content,
                children: [
                    (0, e.jsx)(s.X6q, {
                        variant: 'heading-md/semibold',
                        id: p,
                        children: m.intl.format(m.t.chV4JS, { count: i })
                    }),
                    (0, e.jsx)(s.Text, {
                        className: u.descriptionText,
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: v ? m.intl.string(m.t.EPoNRk) : m.intl.string(m.t['8+nq/P'])
                    }),
                    (0, e.jsx)(s.P3F, {
                        className: u.actionText,
                        onClick: j,
                        children: (0, e.jsx)(s.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-link',
                            children: m.intl.string(m.t.szESVF)
                        })
                    })
                ]
            }),
            (0, e.jsx)(s.mzw, {
                children: (0, e.jsxs)(s.hE2, {
                    size: 'sm',
                    justify: 'end',
                    children: [
                        (0, e.jsx)(s.zxk, {
                            variant: 'secondary',
                            onClick: E,
                            text: m.intl.string(m.t['ETE/oK'])
                        }),
                        (0, e.jsx)(s.zxk, {
                            variant: 'critical-primary',
                            onClick: () => T(d.wB.REJECTED),
                            text: m.intl.string(m.t.Gfg0ra)
                        }),
                        !v &&
                            (0, e.jsx)(s.zxk, {
                                variant: 'primary',
                                onClick: () => T(d.wB.APPROVED),
                                text: m.intl.string(m.t.VWqCvL)
                            })
                    ]
                })
            })
        ]
    });
};
