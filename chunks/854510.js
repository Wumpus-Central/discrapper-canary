n.d(t, { default: () => m }), n(47120);
var s = n(200651);
n(192379);
var r = n(481060),
    l = n(313201),
    i = n(930180),
    o = n(320596),
    c = n(388032),
    a = n(216470);
function d(e) {
    let { blockedUsersCount: t, ignoredUsersCount: n } = e;
    return t > 0 && n > 0 ? c.intl.format(c.t.Uzdyho, { number: t + n }) : n > 0 ? c.intl.format(c.t.wvygk5, { number: n }) : c.intl.format(c.t.HviVAw, { number: t });
}
function x(e) {
    let { blockedUsersCount: t, ignoredUsersCount: n } = e;
    return t > 0 && n > 0 ? c.intl.string(c.t['P/KFX1']) : n > 0 ? c.intl.format(c.t.Ri3o39, { number: n }) : c.intl.format(c.t['28qZMT'], { number: t });
}
function m(e) {
    let { channel: t, onAccept: n, transitionState: m, onClose: u, ...h } = e,
        b = (0, l.Dt)(),
        j = (0, i.z)(t.id),
        k = (0, i.bA)(t.id);
    return (0, s.jsxs)(r.Y0X, {
        transitionState: m,
        'aria-labelledby': b,
        ...h,
        size: r.CgR.SMALL,
        children: [
            (0, s.jsxs)(r.xBx, {
                className: a.header,
                children: [
                    (0, s.jsx)(r.X6q, {
                        variant: 'heading-xl/semibold',
                        children: (0, s.jsx)(d, {
                            blockedUsersCount: j.length,
                            ignoredUsersCount: k.length
                        })
                    }),
                    (0, s.jsx)(r.Text, {
                        color: 'header-secondary',
                        className: a.description,
                        variant: 'text-sm/normal',
                        children: (0, s.jsx)(x, {
                            blockedUsersCount: j.length,
                            ignoredUsersCount: k.length
                        })
                    })
                ]
            }),
            (0, s.jsx)(r.hzk, {
                className: a.content,
                children: [...j, ...k].map((e) => {
                    let { user: n, id: r, speaker: l } = e;
                    return (0, s.jsx)(
                        o.Ie,
                        {
                            user: n,
                            speaker: l,
                            showStatus: !0,
                            channelId: t.id
                        },
                        r
                    );
                })
            }),
            (0, s.jsxs)(r.mzw, {
                className: a.footer,
                children: [
                    (0, s.jsx)(r.zxk, {
                        onClick: () => {
                            n(t), u();
                        },
                        color: r.zxk.Colors.BRAND,
                        children: c.intl.string(c.t.mbD50N)
                    }),
                    (0, s.jsx)(r.zxk, {
                        onClick: () => {
                            u();
                        },
                        color: r.zxk.Colors.PRIMARY,
                        look: r.zxk.Looks.LINK,
                        children: c.intl.string(c.t.CZGqeX)
                    })
                ]
            })
        ]
    });
}
