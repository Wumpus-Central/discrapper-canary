a.d(t, { m: () => h });
var r = a(200651),
    l = a(192379),
    s = a(442837),
    n = a(481060),
    o = a(600164),
    c = a(553795),
    i = a(424071),
    d = a(239358),
    x = a(388032),
    u = a(522137);
function h(e) {
    let { platformType: t, onContinue: a, onClose: h, img: m, headerConnect: N, headerReconnect: C, body: j, learnMoreLink: k, valueProps: v } = e,
        p = (0, s.e7)([c.Z], () => {
            let e = c.Z.getAccount(null, t);
            return (null == e ? void 0 : e.twoWayLink) === !1;
        });
    return (0, r.jsxs)(i.Z, {
        children: [
            (0, r.jsxs)(n.xBx, {
                direction: o.Z.Direction.VERTICAL,
                className: u.header,
                separator: !1,
                children: [
                    (0, r.jsxs)('div', {
                        className: u.illustration,
                        children: [m, ' ']
                    }),
                    (0, r.jsx)(n.X6q, {
                        className: u.title,
                        variant: 'heading-xl/extrabold',
                        children: p && null != C ? C : N
                    }),
                    (0, r.jsx)(n.olH, {
                        className: u.closeButton,
                        onClick: h
                    })
                ]
            }),
            (0, r.jsxs)(n.hzk, {
                className: u.body,
                children: [
                    (0, r.jsx)(n.Text, {
                        tag: 'p',
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: j
                    }),
                    (0, r.jsx)('div', {
                        className: u.valueProps,
                        children: v.map((e, t) => {
                            let { label: a, subLabel: s, icon: n } = e;
                            return (0, r.jsxs)(
                                l.Fragment,
                                {
                                    children: [
                                        (0, r.jsx)(
                                            d.Z,
                                            {
                                                label: a,
                                                subLabel: s,
                                                icon: n
                                            },
                                            a
                                        ),
                                        t !== v.length - 1 && (0, r.jsx)('div', { className: u.valuePropDivider })
                                    ]
                                },
                                a
                            );
                        })
                    }),
                    null != k
                        ? (0, r.jsx)(n.Text, {
                              tag: 'p',
                              variant: 'text-sm/normal',
                              color: 'header-secondary',
                              children: x.intl.format(x.t['/l3n+/'], { helpCenterLink: k })
                          })
                        : null
                ]
            }),
            (0, r.jsx)(n.mzw, {
                className: u.footer,
                children: (0, r.jsx)(n.zxk, {
                    className: u.footerButton,
                    color: n.zxk.Colors.BRAND,
                    onClick: a,
                    children: x.intl.string(x.t['3PatS0'])
                })
            })
        ]
    });
}
