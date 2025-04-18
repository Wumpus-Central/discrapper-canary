r.d(a, { m: () => h });
var s = r(200651),
    t = r(192379),
    l = r(442837),
    n = r(481060),
    o = r(600164),
    c = r(553795),
    i = r(424071),
    d = r(239358),
    x = r(388032),
    u = r(475286);
function h(e) {
    let { platformType: a, onContinue: r, onClose: h, img: N, headerConnect: m, headerReconnect: C, body: j, learnMoreLink: k, valueProps: v } = e,
        p = (0, l.e7)([c.Z], () => {
            let e = c.Z.getAccount(null, a);
            return (null == e ? void 0 : e.twoWayLink) === !1;
        });
    return (0, s.jsxs)(i.Z, {
        children: [
            (0, s.jsxs)(n.xBx, {
                direction: o.Z.Direction.VERTICAL,
                className: u.header,
                separator: !1,
                children: [
                    (0, s.jsxs)('div', {
                        className: u.illustration,
                        children: [N, ' ']
                    }),
                    (0, s.jsx)(n.X6q, {
                        className: u.title,
                        variant: 'heading-xl/extrabold',
                        children: p && null != C ? C : m
                    }),
                    (0, s.jsx)(n.olH, {
                        className: u.closeButton,
                        onClick: h
                    })
                ]
            }),
            (0, s.jsxs)(n.hzk, {
                className: u.body,
                children: [
                    (0, s.jsx)(n.Text, {
                        tag: 'p',
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: j
                    }),
                    (0, s.jsx)('div', {
                        className: u.valueProps,
                        children: v.map((e, a) => {
                            let { label: r, subLabel: l, icon: n } = e;
                            return (0, s.jsxs)(
                                t.Fragment,
                                {
                                    children: [
                                        (0, s.jsx)(
                                            d.Z,
                                            {
                                                label: r,
                                                subLabel: l,
                                                icon: n
                                            },
                                            r
                                        ),
                                        a !== v.length - 1 && (0, s.jsx)('div', { className: u.valuePropDivider })
                                    ]
                                },
                                r
                            );
                        })
                    }),
                    null != k
                        ? (0, s.jsx)(n.Text, {
                              tag: 'p',
                              variant: 'text-sm/normal',
                              color: 'header-secondary',
                              children: x.NW.format(x.t['/l3n+/'], { helpCenterLink: k })
                          })
                        : null
                ]
            }),
            (0, s.jsx)(n.mzw, {
                className: u.footer,
                children: (0, s.jsx)(n.zxk, {
                    className: u.footerButton,
                    color: n.zxk.Colors.BRAND,
                    onClick: r,
                    children: x.NW.string(x.t['3PatS0'])
                })
            })
        ]
    });
}
