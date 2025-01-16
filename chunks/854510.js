t.r(n),
    t.d(n, {
        default: function () {
            return x;
        }
    }),
    t(47120);
var r = t(200651);
t(192379);
var s = t(481060),
    o = t(313201),
    c = t(930180),
    l = t(46920),
    i = t(388032),
    a = t(48);
function d(e) {
    let { blockedUsersCount: n, ignoredUsersCount: t } = e;
    return n > 0 && t > 0 ? i.intl.format(i.t.Uzdyho, { number: n + t }) : t > 0 ? i.intl.format(i.t.wvygk5, { number: t }) : i.intl.format(i.t.HviVAw, { number: n });
}
function u(e) {
    let { blockedUsersCount: n, ignoredUsersCount: t } = e;
    return n > 0 && t > 0 ? i.intl.string(i.t['P/KFX1']) : t > 0 ? i.intl.format(i.t.Ri3o39, { number: t }) : i.intl.format(i.t['28qZMT'], { number: n });
}
function x(e) {
    let { channel: n, onAccept: t, transitionState: x, onClose: m, ...h } = e,
        j = (0, o.Dt)(),
        b = (0, c.z)(n.id),
        k = (0, c.bA)(n.id);
    return (0, r.jsxs)(s.ModalRoot, {
        transitionState: x,
        'aria-labelledby': j,
        ...h,
        size: s.ModalSize.SMALL,
        children: [
            (0, r.jsxs)(s.ModalHeader, {
                className: a.header,
                children: [
                    (0, r.jsx)(s.Heading, {
                        variant: 'heading-xl/semibold',
                        children: (0, r.jsx)(d, {
                            blockedUsersCount: b.length,
                            ignoredUsersCount: k.length
                        })
                    }),
                    (0, r.jsx)(s.Text, {
                        color: 'header-secondary',
                        className: a.description,
                        variant: 'text-sm/normal',
                        children: (0, r.jsx)(u, {
                            blockedUsersCount: b.length,
                            ignoredUsersCount: k.length
                        })
                    })
                ]
            }),
            (0, r.jsx)(s.ModalContent, {
                className: a.content,
                children: [...b, ...k].map((e) => {
                    let { user: t, id: s, speaker: o } = e;
                    return (0, r.jsx)(
                        l.Ie,
                        {
                            user: t,
                            speaker: o,
                            showStatus: !0,
                            channelId: n.id
                        },
                        s
                    );
                })
            }),
            (0, r.jsxs)(s.ModalFooter, {
                className: a.footer,
                children: [
                    (0, r.jsx)(s.Button, {
                        onClick: () => {
                            t(n), m();
                        },
                        color: s.Button.Colors.BRAND,
                        children: i.intl.string(i.t.mbD50N)
                    }),
                    (0, r.jsx)(s.Button, {
                        onClick: () => {
                            m();
                        },
                        color: s.Button.Colors.PRIMARY,
                        look: s.Button.Looks.LINK,
                        children: i.intl.string(i.t.CZGqeX)
                    })
                ]
            })
        ]
    });
}
