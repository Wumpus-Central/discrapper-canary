i.d(n, { default: () => m });
var e = i(200651),
    s = i(192379),
    c = i(481060),
    o = i(313201),
    a = i(434404),
    l = i(703656),
    r = i(246364),
    x = i(981631),
    d = i(176505),
    h = i(388032),
    k = i(367503);
let m = function (t) {
    let { guildId: n, submittedGuildJoinRequestsCount: i, onClose: m, transitionState: z, onConfirm: u } = t,
        f = (0, o.Dt)(),
        b = s.useCallback(
            (t) => {
                m(), u(t);
            },
            [m, u]
        ),
        C = s.useCallback(() => {
            m(), a.Z.close(), (0, l.uL)(x.Z5c.CHANNEL(n, d.oC.MEMBER_SAFETY));
        }, [n, m]),
        T = i > 200;
    return (0, e.jsxs)(c.Y0X, {
        className: k.container,
        transitionState: z,
        'aria-labelledby': f,
        children: [
            (0, e.jsxs)(c.hzk, {
                className: k.content,
                children: [
                    (0, e.jsx)(c.X6q, {
                        variant: 'heading-md/semibold',
                        id: f,
                        children: h.intl.format(h.t.chV4JS, { count: i })
                    }),
                    (0, e.jsx)(c.Text, {
                        className: k.descriptionText,
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: T ? h.intl.string(h.t.EPoNRk) : h.intl.string(h.t['8+nq/P'])
                    }),
                    (0, e.jsx)(c.P3F, {
                        className: k.actionText,
                        onClick: C,
                        children: (0, e.jsx)(c.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-link',
                            children: h.intl.string(h.t.szESVF)
                        })
                    })
                ]
            }),
            (0, e.jsxs)(c.mzw, {
                children: [
                    (0, e.jsx)(c.zxk, {
                        color: c.zxk.Colors.PRIMARY,
                        onClick: m,
                        size: c.zxk.Sizes.SMALL,
                        children: (0, e.jsx)(c.Text, {
                            variant: 'text-sm/semibold',
                            children: h.intl.string(h.t['ETE/oK'])
                        })
                    }),
                    (0, e.jsx)(c.zxk, {
                        className: k.actionButton,
                        color: c.zxk.Colors.RED,
                        onClick: () => b(r.wB.REJECTED),
                        size: c.zxk.Sizes.SMALL,
                        children: (0, e.jsx)(c.Text, {
                            variant: 'text-sm/semibold',
                            children: h.intl.string(h.t.Gfg0ra)
                        })
                    }),
                    !T &&
                        (0, e.jsx)(c.zxk, {
                            className: k.actionButton,
                            color: c.zxk.Colors.BRAND,
                            onClick: () => b(r.wB.APPROVED),
                            size: c.zxk.Sizes.SMALL,
                            children: (0, e.jsx)(c.Text, {
                                variant: 'text-sm/semibold',
                                children: h.intl.string(h.t.VWqCvL)
                            })
                        })
                ]
            })
        ]
    });
};
