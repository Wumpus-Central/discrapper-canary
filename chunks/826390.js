n.d(e, { default: () => m });
var i = n(200651),
    c = n(192379),
    s = n(481060),
    a = n(313201),
    o = n(434404),
    r = n(703656),
    l = n(981631),
    x = n(176505),
    d = n(388032),
    h = n(367503);
let m = function (t) {
    let { guildId: e, submittedGuildJoinRequestsCount: n, onClose: m, transitionState: u, onConfirm: f } = t,
        k = (0, a.Dt)(),
        p = c.useCallback(() => {
            m(), f();
        }, [m, f]),
        b = c.useCallback(() => {
            m(), o.Z.close(), (0, r.uL)(l.Z5c.CHANNEL(e, x.oC.MEMBER_SAFETY));
        }, [e, m]);
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
                        children: d.NW.format(d.t.chV4JS, { count: n })
                    }),
                    (0, i.jsx)(s.Text, {
                        className: h.descriptionText,
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: d.NW.string(d.t.GPGPDw)
                    }),
                    (0, i.jsx)(s.P3F, {
                        className: h.actionText,
                        onClick: b,
                        children: (0, i.jsx)(s.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-link',
                            children: d.NW.string(d.t.szESVF)
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
                            children: d.NW.string(d.t['3PatS0'])
                        })
                    }),
                    (0, i.jsx)(s.zxk, {
                        color: s.zxk.Colors.PRIMARY,
                        onClick: m,
                        size: s.zxk.Sizes.SMALL,
                        children: (0, i.jsx)(s.Text, {
                            variant: 'text-sm/semibold',
                            children: d.NW.string(d.t['ETE/oK'])
                        })
                    })
                ]
            })
        ]
    });
};
