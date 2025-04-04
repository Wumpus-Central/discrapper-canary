n.d(t, { Z: () => m }), n(47120), n(411104);
var r = n(200651),
    i = n(192379),
    o = n(734530),
    a = n(780384),
    s = n(481060),
    l = n(410030),
    c = n(231338),
    u = n(388032),
    d = n(782121),
    f = n(744481),
    _ = n(724641),
    p = n(184229),
    h = n(504309);
let m = function (e) {
    let t = (0, l.ZP)(),
        n = i.useRef(null),
        [m, g] = i.useState({}),
        E = (0, s.dQu)(s.TVs.colors.BG_BASE_SECONDARY).hex();
    switch (
        (i.useLayoutEffect(() => {
            let { current: e } = n;
            if (null == e) return;
            let t = window.getComputedStyle(e),
                r = window.getComputedStyle(e, '::placeholder'),
                i = t.getPropertyValue('font-family'),
                o = t.getPropertyValue('font-weight');
            g({
                base: {
                    fontFamily: i,
                    fontWeight: o,
                    color: t.getPropertyValue('color'),
                    fontSize: t.getPropertyValue('font-size'),
                    backgroundColor: E,
                    padding: '12px',
                    '::placeholder': { color: r.getPropertyValue('color') },
                    borderRadius: s.TVs.radii.xs
                }
            });
        }, [n, E]),
        e.type)
    ) {
        case c.He.PRZELEWY24: {
            let i = (0, a.wj)(t) ? p : h,
                { onNameChange: l, onEmailChange: c, onP24BankChange: f, p24BankValue: _, billingAddressInfo: g } = e;
            return (0, r.jsxs)('div', {
                className: d.body,
                children: [
                    (0, r.jsx)(s.hjN, {
                        title: u.NW.string(u.t['w/qqKC']),
                        children: (0, r.jsx)(s.oil, {
                            inputRef: n,
                            name: u.NW.string(u.t['w/qqKC']),
                            placeholder: u.NW.string(u.t['w/qqKC']),
                            onChange: (e) => c(e),
                            value: g.email
                        })
                    }),
                    (0, r.jsx)(s.hjN, {
                        className: d.nonTopInputWrapper,
                        title: u.NW.string(u.t.yf7ms7),
                        children: (0, r.jsx)(s.oil, {
                            name: u.NW.string(u.t.yf7ms7),
                            placeholder: u.NW.string(u.t.yf7ms7),
                            onChange: (e) => l(e),
                            value: g.name
                        })
                    }),
                    (0, r.jsxs)(s.hjN, {
                        className: d.nonTopInputWrapper,
                        title: u.NW.string(u.t.De3b8v),
                        children: [
                            (0, r.jsx)(o.P24BankElement, {
                                options: {
                                    value: _,
                                    style: m
                                },
                                onChange: (e) => f(e.value)
                            }),
                            (0, r.jsx)('div', {
                                className: d.bankSelectionStub,
                                children: (0, r.jsx)('img', {
                                    src: i,
                                    alt: 'Przelewy24'
                                })
                            })
                        ]
                    })
                ]
            });
        }
        case c.He.EPS: {
            let { onAccountHolderNameChange: i, onEPSBankChange: l, epsBankValue: c, billingAddressInfo: p } = e,
                h = (0, a.wj)(t) ? f : _;
            return (0, r.jsxs)('div', {
                className: d.body,
                children: [
                    (0, r.jsx)(s.hjN, {
                        title: u.NW.string(u.t.sN3wra),
                        children: (0, r.jsx)(s.oil, {
                            inputRef: n,
                            name: u.NW.string(u.t.sN3wra),
                            placeholder: u.NW.string(u.t.sN3wra),
                            onChange: (e) => i(e),
                            value: p.name
                        })
                    }),
                    (0, r.jsxs)(s.hjN, {
                        className: d.nonTopInputWrapper,
                        title: u.NW.string(u.t.dFyV09),
                        children: [
                            (0, r.jsx)(o.EpsBankElement, {
                                options: {
                                    value: c,
                                    style: m
                                },
                                onChange: (e) => l(e.value)
                            }),
                            (0, r.jsx)('div', {
                                className: d.bankSelectionStub,
                                children: (0, r.jsx)('img', {
                                    src: h,
                                    alt: 'EPS'
                                })
                            })
                        ]
                    })
                ]
            });
        }
        default:
            throw Error('unknown payment source type');
    }
};
