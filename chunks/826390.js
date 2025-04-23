n.d(i, { default: () => k });
var e = n(200651),
    s = n(192379),
    a = n(481060),
    l = n(313201),
    o = n(434404),
    c = n(703656),
    r = n(392576),
    d = n(246364),
    x = n(981631),
    m = n(176505),
    p = n(388032),
    b = n(367503);
let k = function (t) {
    let { guildId: i, submittedGuildJoinRequestsCount: n, onClose: k, transitionState: f, onConfirm: h } = t,
        u = (0, l.Dt)(),
        z = s.useCallback(
            (t) => {
                k(), h(t);
            },
            [k, h]
        ),
        C = s.useCallback(() => {
            k(), o.Z.close(), (0, c.uL)(x.Z5c.CHANNEL(i, m.oC.MEMBER_SAFETY));
        }, [i, k]),
        { disableMassApproval: v } = r.Z.useExperiment({
            guildId: i,
            location: 'PendingJoinRequestsWarningModal'
        }),
        E = v && n > 200;
    return (0, e.jsxs)(a.Y0X, {
        className: b.container,
        transitionState: f,
        'aria-labelledby': u,
        children: [
            (0, e.jsxs)(a.hzk, {
                className: b.content,
                children: [
                    (0, e.jsx)(a.X6q, {
                        variant: 'heading-md/semibold',
                        id: u,
                        children: p.intl.format(p.t.chV4JS, { count: n })
                    }),
                    (0, e.jsx)(a.Text, {
                        className: b.descriptionText,
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: E ? p.intl.string(p.t.EPoNRk) : p.intl.string(p.t['8+nq/P'])
                    }),
                    (0, e.jsx)(a.P3F, {
                        className: b.actionText,
                        onClick: C,
                        children: (0, e.jsx)(a.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-link',
                            children: p.intl.string(p.t.szESVF)
                        })
                    })
                ]
            }),
            (0, e.jsxs)(a.mzw, {
                children: [
                    (0, e.jsx)(a.zxk, {
                        color: a.zxk.Colors.PRIMARY,
                        onClick: k,
                        size: a.zxk.Sizes.SMALL,
                        children: (0, e.jsx)(a.Text, {
                            variant: 'text-sm/semibold',
                            children: p.intl.string(p.t['ETE/oK'])
                        })
                    }),
                    v &&
                        (0, e.jsx)(a.zxk, {
                            className: b.actionButton,
                            color: a.zxk.Colors.RED,
                            onClick: () => z(d.wB.REJECTED),
                            size: a.zxk.Sizes.SMALL,
                            children: (0, e.jsx)(a.Text, {
                                variant: 'text-sm/semibold',
                                children: p.intl.string(p.t.Gfg0ra)
                            })
                        }),
                    !E &&
                        (0, e.jsx)(a.zxk, {
                            className: b.actionButton,
                            color: a.zxk.Colors.BRAND,
                            onClick: () => z(d.wB.APPROVED),
                            size: a.zxk.Sizes.SMALL,
                            children: (0, e.jsx)(a.Text, {
                                variant: 'text-sm/semibold',
                                children: p.intl.string(p.t.VWqCvL)
                            })
                        })
                ]
            })
        ]
    });
};
