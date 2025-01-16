n.d(t, {
    m: function () {
        return h;
    }
});
var a = n(200651),
    r = n(192379),
    l = n(442837),
    o = n(481060),
    s = n(600164),
    c = n(553795),
    i = n(424071),
    d = n(239358),
    u = n(388032),
    x = n(38920);
function h(e) {
    let { platformType: t, onContinue: n, onClose: h, img: N, headerConnect: m, headerReconnect: C, body: j, learnMoreLink: f, valueProps: v } = e,
        p = (0, l.e7)([c.Z], () => {
            let e = c.Z.getAccount(null, t);
            return (null == e ? void 0 : e.twoWayLink) === !1;
        });
    return (0, a.jsxs)(i.Z, {
        children: [
            (0, a.jsxs)(o.ModalHeader, {
                direction: s.Z.Direction.VERTICAL,
                className: x.header,
                separator: !1,
                children: [
                    (0, a.jsxs)('div', {
                        className: x.illustration,
                        children: [N, ' ']
                    }),
                    (0, a.jsx)(o.Heading, {
                        className: x.title,
                        variant: 'heading-xl/extrabold',
                        children: p && null != C ? C : m
                    }),
                    (0, a.jsx)(o.ModalCloseButton, {
                        className: x.closeButton,
                        onClick: h
                    })
                ]
            }),
            (0, a.jsxs)(o.ModalContent, {
                className: x.body,
                children: [
                    (0, a.jsx)(o.Text, {
                        tag: 'p',
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: j
                    }),
                    (0, a.jsx)('div', {
                        className: x.valueProps,
                        children: v.map((e, t) => {
                            let { label: n, subLabel: l, icon: o } = e;
                            return (0, a.jsxs)(
                                r.Fragment,
                                {
                                    children: [
                                        (0, a.jsx)(
                                            d.Z,
                                            {
                                                label: n,
                                                subLabel: l,
                                                icon: o
                                            },
                                            n
                                        ),
                                        t !== v.length - 1 && (0, a.jsx)('div', { className: x.valuePropDivider })
                                    ]
                                },
                                n
                            );
                        })
                    }),
                    null != f
                        ? (0, a.jsx)(o.Text, {
                              tag: 'p',
                              variant: 'text-sm/normal',
                              color: 'header-secondary',
                              children: u.intl.format(u.t['/l3n+/'], { helpCenterLink: f })
                          })
                        : null
                ]
            }),
            (0, a.jsx)(o.ModalFooter, {
                className: x.footer,
                children: (0, a.jsx)(o.Button, {
                    className: x.footerButton,
                    color: o.Button.Colors.BRAND,
                    onClick: n,
                    children: u.intl.string(u.t['3PatS0'])
                })
            })
        ]
    });
}
