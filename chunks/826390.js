i.d(n, { default: () => m });
var e = i(255367),
    a = i(73800),
    s = i(481060),
    c = i(313201),
    r = i(434404),
    l = i(703656),
    o = i(246364),
    x = i(981631),
    d = i(176505),
    h = i(388032),
    k = i(367503);
let m = function (t) {
    let { guildId: n, submittedGuildJoinRequestsCount: i, onClose: m, transitionState: f, onConfirm: p } = t,
        u = (0, c.Dt)(),
        C = a.useCallback(
            (t) => {
                (m(), p(t));
            },
            [m, p]
        ),
        E = a.useCallback(() => {
            (m(), r.Z.close(), (0, l.uL)(x.Z5c.CHANNEL(n, d.oC.MEMBER_SAFETY)));
        }, [n, m]),
        j = i > 200;
    return (0, e.jsxs)(s.Y0X, {
        className: k.container,
        transitionState: f,
        'aria-labelledby': u,
        parentComponent: 'PendingJoinRequestsWarningModal',
        children: [
            (0, e.jsxs)(s.hzk, {
                className: k.content,
                children: [
                    (0, e.jsx)(s.X6q, {
                        variant: 'heading-md/semibold',
                        id: u,
                        children: h.intl.format(h.t.chV4JS, { count: i })
                    }),
                    (0, e.jsx)(s.Text, {
                        className: k.descriptionText,
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: j ? h.intl.string(h.t.EPoNRk) : h.intl.string(h.t['8+nq/P'])
                    }),
                    (0, e.jsx)(s.P3F, {
                        className: k.actionText,
                        onClick: E,
                        children: (0, e.jsx)(s.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-link',
                            children: h.intl.string(h.t.szESVF)
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
                            onClick: m,
                            text: h.intl.string(h.t['ETE/oK'])
                        }),
                        (0, e.jsx)(s.zxk, {
                            variant: 'critical-primary',
                            onClick: () => C(o.wB.REJECTED),
                            text: h.intl.string(h.t.Gfg0ra)
                        }),
                        !j &&
                            (0, e.jsx)(s.zxk, {
                                variant: 'primary',
                                onClick: () => C(o.wB.APPROVED),
                                text: h.intl.string(h.t.VWqCvL)
                            })
                    ]
                })
            })
        ]
    });
};
