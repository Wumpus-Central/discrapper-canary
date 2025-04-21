e.d(n, { default: () => k });
var i = e(200651),
    c = e(192379),
    s = e(481060),
    a = e(313201),
    o = e(434404),
    l = e(703656),
    r = e(981631),
    x = e(176505),
    d = e(388032),
    h = e(367503);
let k = function (t) {
    let { guildId: n, submittedGuildJoinRequestsCount: e, onClose: k, transitionState: m, onConfirm: u } = t,
        f = (0, a.Dt)(),
        b = c.useCallback(() => {
            k(), u();
        }, [k, u]),
        z = c.useCallback(() => {
            k(), o.Z.close(), (0, l.uL)(r.Z5c.CHANNEL(n, x.oC.MEMBER_SAFETY));
        }, [n, k]);
    return (0, i.jsxs)(s.Y0X, {
        className: h.container,
        transitionState: m,
        'aria-labelledby': f,
        children: [
            (0, i.jsxs)(s.hzk, {
                className: h.content,
                children: [
                    (0, i.jsx)(s.X6q, {
                        variant: 'heading-md/semibold',
                        id: f,
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
                        onClick: z,
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
                        onClick: b,
                        size: s.zxk.Sizes.SMALL,
                        children: (0, i.jsx)(s.Text, {
                            variant: 'text-sm/semibold',
                            children: d.intl.string(d.t['3PatS0'])
                        })
                    }),
                    (0, i.jsx)(s.zxk, {
                        color: s.zxk.Colors.PRIMARY,
                        onClick: k,
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
