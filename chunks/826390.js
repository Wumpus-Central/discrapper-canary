i.d(n, { default: () => z });
var e = i(255367),
    s = i(73800),
    c = i(755721),
    o = i(481060),
    a = i(313201),
    l = i(434404),
    r = i(703656),
    x = i(246364),
    d = i(981631),
    h = i(176505),
    m = i(388032),
    u = i(367503);
let z = function (t) {
    let { guildId: n, submittedGuildJoinRequestsCount: i, onClose: z, transitionState: f, onConfirm: C } = t,
        b = (0, a.Dt)(),
        T = s.useCallback(
            (t) => {
                (z(), C(t));
            },
            [z, C]
        ),
        j = s.useCallback(() => {
            (z(), l.Z.close(), (0, r.uL)(d.Z5c.CHANNEL(n, h.oC.MEMBER_SAFETY)));
        }, [n, z]),
        k = i > 200;
    return (0, e.jsxs)(o.Y0X, {
        className: u.container,
        transitionState: f,
        'aria-labelledby': b,
        parentComponent: 'PendingJoinRequestsWarningModal',
        children: [
            (0, e.jsxs)(o.hzk, {
                className: u.content,
                children: [
                    (0, e.jsx)(o.X6q, {
                        variant: 'heading-md/semibold',
                        id: b,
                        children: m.intl.format(m.t.chV4JS, { count: i })
                    }),
                    (0, e.jsx)(o.Text, {
                        className: u.descriptionText,
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: k ? m.intl.string(m.t.EPoNRk) : m.intl.string(m.t['8+nq/P'])
                    }),
                    (0, e.jsx)(o.P3F, {
                        className: u.actionText,
                        onClick: j,
                        children: (0, e.jsx)(o.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-link',
                            children: m.intl.string(m.t.szESVF)
                        })
                    })
                ]
            }),
            (0, e.jsxs)(o.mzw, {
                children: [
                    (0, e.jsx)(c.zx, {
                        color: c.zx.Colors.PRIMARY,
                        onClick: z,
                        size: c.zx.Sizes.SMALL,
                        children: (0, e.jsx)(o.Text, {
                            variant: 'text-sm/semibold',
                            children: m.intl.string(m.t['ETE/oK'])
                        })
                    }),
                    (0, e.jsx)(c.zx, {
                        className: u.actionButton,
                        color: c.zx.Colors.RED,
                        onClick: () => T(x.wB.REJECTED),
                        size: c.zx.Sizes.SMALL,
                        children: (0, e.jsx)(o.Text, {
                            variant: 'text-sm/semibold',
                            children: m.intl.string(m.t.Gfg0ra)
                        })
                    }),
                    !k &&
                        (0, e.jsx)(c.zx, {
                            className: u.actionButton,
                            color: c.zx.Colors.BRAND,
                            onClick: () => T(x.wB.APPROVED),
                            size: c.zx.Sizes.SMALL,
                            children: (0, e.jsx)(o.Text, {
                                variant: 'text-sm/semibold',
                                children: m.intl.string(m.t.VWqCvL)
                            })
                        })
                ]
            })
        ]
    });
};
