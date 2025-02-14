n.d(t, { Z: () => p });
var i = n(200651);
n(192379);
var l = n(990547),
    r = n(481060),
    a = n(313201),
    s = n(703656),
    o = n(63063),
    d = n(758119),
    c = n(981631),
    u = n(388032),
    h = n(682042);
function m() {
    (0, d.qV)(), (0, s.uL)(c.Z5c.LOGIN);
}
function p(e) {
    let { underageMessage: t, transitionState: s } = e,
        d = (0, a.Dt)();
    return (0, i.jsxs)(r.Y0X, {
        transitionState: s,
        size: r.CgR.SMALL,
        'aria-labelledby': d,
        impression: {
            impressionName: l.ImpressionNames.USER_AGE_GATE_UNDERAGE,
            impressionProperties: { existing_user: !0 }
        },
        children: [
            (0, i.jsx)(r.hzk, {
                children: (0, i.jsxs)('div', {
                    className: h.container,
                    children: [
                        (0, i.jsx)('img', {
                            alt: '',
                            src: n(231443),
                            className: h.img
                        }),
                        (0, i.jsx)(r.X6q, {
                            variant: 'heading-xl/semibold',
                            className: h.title,
                            id: d,
                            children: u.intl.string(u.t['NR/zrK'])
                        }),
                        (0, i.jsx)(r.Text, {
                            color: 'header-secondary',
                            className: h.subtitle,
                            variant: 'text-sm/normal',
                            children: u.intl.format(u.t.b0QzXV, {
                                underageMessage: null != t ? t : u.intl.string(u.t.WqEH4O),
                                helpURL: o.Z.getArticleURL(c.BhN.AGE_GATE)
                            })
                        }),
                        (0, i.jsx)(r.Text, {
                            color: 'header-secondary',
                            className: h.subtitle,
                            variant: 'text-sm/normal',
                            children: u.intl.format(u.t['3axQdH'], { days: 30 })
                        })
                    ]
                })
            }),
            (0, i.jsx)(r.mzw, {
                children: (0, i.jsx)(r.zxk, {
                    size: r.PhG.SMALL,
                    fullWidth: !0,
                    onClick: m,
                    children: u.intl.string(u.t.szzQ6O)
                })
            })
        ]
    });
}
