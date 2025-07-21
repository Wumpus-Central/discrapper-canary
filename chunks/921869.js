t.d(a, { m: () => h });
var r = t(255367),
    s = t(73800),
    n = t(442837),
    l = t(481060),
    i = t(600164),
    o = t(553795),
    c = t(424071),
    d = t(239358),
    x = t(388032),
    u = t(475286);
function h(e) {
    let { platformType: a, onContinue: t, onClose: h, img: m, headerConnect: N, headerReconnect: C, body: j, learnMoreLink: p, valueProps: v } = e,
        k = (0, n.e7)([o.Z], () => {
            let e = o.Z.getAccount(null, a);
            return (null == e ? void 0 : e.twoWayLink) === !1;
        });
    return (0, r.jsxs)(c.Z, {
        children: [
            (0, r.jsxs)(l.xBx, {
                direction: i.Z.Direction.VERTICAL,
                className: u.header,
                separator: !1,
                children: [
                    (0, r.jsxs)('div', {
                        className: u.illustration,
                        children: [m, ' ']
                    }),
                    (0, r.jsx)(l.X6q, {
                        className: u.title,
                        variant: 'heading-xl/extrabold',
                        children: k && null != C ? C : N
                    }),
                    (0, r.jsx)(l.olH, {
                        className: u.closeButton,
                        onClick: h
                    })
                ]
            }),
            (0, r.jsxs)(l.hzk, {
                className: u.body,
                children: [
                    (0, r.jsx)(l.Text, {
                        tag: 'p',
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: j
                    }),
                    (0, r.jsx)('div', {
                        className: u.valueProps,
                        children: v.map((e, a) => {
                            let { label: t, subLabel: n, icon: l } = e;
                            return (0, r.jsxs)(
                                s.Fragment,
                                {
                                    children: [
                                        (0, r.jsx)(
                                            d.Z,
                                            {
                                                label: t,
                                                subLabel: n,
                                                icon: l
                                            },
                                            t
                                        ),
                                        a !== v.length - 1 && (0, r.jsx)('div', { className: u.valuePropDivider })
                                    ]
                                },
                                t
                            );
                        })
                    }),
                    null != p
                        ? (0, r.jsx)(l.Text, {
                              tag: 'p',
                              variant: 'text-sm/normal',
                              color: 'header-secondary',
                              children: x.intl.format(x.t['/l3n+/'], { helpCenterLink: p })
                          })
                        : null
                ]
            }),
            (0, r.jsx)(l.mzw, {
                className: u.footer,
                children: (0, r.jsx)('div', {
                    'data-button-hoisted-classname-wrapper': !0,
                    className: u.footerButton,
                    children: (0, r.jsx)(l.zxk, {
                        variant: 'primary',
                        text: x.intl.string(x.t['3PatS0']),
                        onClick: t
                    })
                })
            })
        ]
    });
}
