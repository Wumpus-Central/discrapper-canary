e.d(n, { default: () => m });
var i = e(200651),
    c = e(192379),
    s = e(481060),
    a = e(313201),
    o = e(434404),
    l = e(703656),
    r = e(981631),
    x = e(176505),
    d = e(388032),
    h = e(473956);
let m = function (t) {
    let { guildId: n, submittedGuildJoinRequestsCount: e, onClose: m, transitionState: u, onConfirm: f } = t,
        k = (0, a.Dt)(),
        p = c.useCallback(() => {
            m(), f();
        }, [m, f]),
        b = c.useCallback(() => {
            m(), o.Z.close(), (0, l.uL)(r.Z5c.CHANNEL(n, x.oC.MEMBER_SAFETY));
        }, [n, m]);
    return (0, i.jsxs)(s.Y0X, {
        className: h.container,
        transitionState: u,
        'aria-labelledby': k,
        children: [
            (0, i.jsxs)(s.hzk, {
                className: h.content,
                children: [
                    (0, i.jsx)(s.X6q, {
                        variant: 'heading-md/semibold',
                        id: k,
                        children: d.intl.format(d.t.chV4JS, { count: e })
                    }),
                    (0, i.jsx)(s.Text, {
                        className: h.descriptionText,
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: d.intl.string(d.t.GPGPDw)
                    }),
                    (0, i.jsx)(s.P3F, {
                        className: h.actionText,
                        onClick: b,
                        children: (0, i.jsx)(s.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-link',
                            children: d.intl.string(d.t.szESVF)
                        })
                    })
                ]
            }),
            (0, i.jsxs)(s.mzw, {
                children: [
                    (0, i.jsx)(s.zxk, {
                        className: h.actionButton,
                        color: s.zxk.Colors.BRAND,
                        onClick: p,
                        size: s.zxk.Sizes.SMALL,
                        children: (0, i.jsx)(s.Text, {
                            variant: 'text-sm/semibold',
                            children: d.intl.string(d.t['3PatS0'])
                        })
                    }),
                    (0, i.jsx)(s.zxk, {
                        color: s.zxk.Colors.PRIMARY,
                        onClick: m,
                        size: s.zxk.Sizes.SMALL,
                        children: (0, i.jsx)(s.Text, {
                            variant: 'text-sm/semibold',
                            children: d.intl.string(d.t['ETE/oK'])
                        })
                    })
                ]
            })
        ]
    });
};
