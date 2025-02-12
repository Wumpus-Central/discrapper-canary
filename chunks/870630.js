n.d(t, { Z: () => E }), n(47120), n(411104);
var i = n(200651),
    r = n(192379),
    a = n(734530),
    s = n(780384),
    o = n(481060),
    l = n(410030),
    u = n(231338),
    c = n(388032),
    d = n(157750),
    f = n(744481),
    _ = n(724641),
    p = n(811974),
    h = n(212545),
    m = n(184229),
    g = n(504309);
let E = function (e) {
    let t = (0, l.ZP)(),
        n = r.useRef(null),
        [E, v] = r.useState({});
    switch (
        (r.useLayoutEffect(() => {
            let { current: e } = n;
            if (null == e) return;
            let t = window.getComputedStyle(e),
                i = window.getComputedStyle(e, '::placeholder'),
                r = t.getPropertyValue('font-family'),
                a = t.getPropertyValue('font-weight'),
                s = t.getPropertyValue('color');
            v({
                base: {
                    fontFamily: r,
                    fontWeight: a,
                    color: s,
                    fontSize: t.getPropertyValue('font-size'),
                    backgroundColor: t.getPropertyValue('background-color'),
                    padding: '12px',
                    '::placeholder': { color: i.getPropertyValue('color') }
                }
            });
        }, [n]),
        e.type)
    ) {
        case u.He.PRZELEWY24: {
            let r = (0, s.wj)(t) ? m : g,
                { onNameChange: l, onEmailChange: u, onP24BankChange: f, p24BankValue: _, billingAddressInfo: p } = e;
            return (0, i.jsxs)('div', {
                className: d.body,
                children: [
                    (0, i.jsx)(o.hjN, {
                        title: c.intl.string(c.t['w/qqKC']),
                        children: (0, i.jsx)(o.oil, {
                            inputRef: n,
                            name: c.intl.string(c.t['w/qqKC']),
                            placeholder: c.intl.string(c.t['w/qqKC']),
                            onChange: (e) => u(e),
                            value: p.email
                        })
                    }),
                    (0, i.jsx)(o.hjN, {
                        className: d.nonTopInputWrapper,
                        title: c.intl.string(c.t.yf7ms7),
                        children: (0, i.jsx)(o.oil, {
                            name: c.intl.string(c.t.yf7ms7),
                            placeholder: c.intl.string(c.t.yf7ms7),
                            onChange: (e) => l(e),
                            value: p.name
                        })
                    }),
                    (0, i.jsxs)(o.hjN, {
                        className: d.nonTopInputWrapper,
                        title: c.intl.string(c.t.De3b8v),
                        children: [
                            (0, i.jsx)(a.P24BankElement, {
                                options: {
                                    value: _,
                                    style: E
                                },
                                onChange: (e) => f(e.value)
                            }),
                            (0, i.jsx)('div', {
                                className: d.bankSelectionStub,
                                children: (0, i.jsx)('img', {
                                    src: r,
                                    alt: 'Przelewy24'
                                })
                            })
                        ]
                    })
                ]
            });
        }
        case u.He.EPS: {
            let { onAccountHolderNameChange: r, onEPSBankChange: l, epsBankValue: u, billingAddressInfo: p } = e,
                h = (0, s.wj)(t) ? f : _;
            return (0, i.jsxs)('div', {
                className: d.body,
                children: [
                    (0, i.jsx)(o.hjN, {
                        title: c.intl.string(c.t.sN3wra),
                        children: (0, i.jsx)(o.oil, {
                            inputRef: n,
                            name: c.intl.string(c.t.sN3wra),
                            placeholder: c.intl.string(c.t.sN3wra),
                            onChange: (e) => r(e),
                            value: p.name
                        })
                    }),
                    (0, i.jsxs)(o.hjN, {
                        className: d.nonTopInputWrapper,
                        title: c.intl.string(c.t.dFyV09),
                        children: [
                            (0, i.jsx)(a.EpsBankElement, {
                                options: {
                                    value: u,
                                    style: E
                                },
                                onChange: (e) => l(e.value)
                            }),
                            (0, i.jsx)('div', {
                                className: d.bankSelectionStub,
                                children: (0, i.jsx)('img', {
                                    src: h,
                                    alt: 'EPS'
                                })
                            })
                        ]
                    })
                ]
            });
        }
        case u.He.IDEAL: {
            let { onAccountHolderNameChange: r, onIdealBankChange: l, idealBankValue: u, billingAddressInfo: f } = e,
                _ = (0, s.wj)(t) ? p : h;
            return (0, i.jsxs)('div', {
                className: d.body,
                children: [
                    (0, i.jsx)(o.hjN, {
                        title: c.intl.string(c.t.sN3wra),
                        children: (0, i.jsx)(o.oil, {
                            inputRef: n,
                            name: c.intl.string(c.t.sN3wra),
                            placeholder: c.intl.string(c.t.sN3wra),
                            onChange: (e) => r(e),
                            value: f.name
                        })
                    }),
                    (0, i.jsxs)(o.hjN, {
                        className: d.nonTopInputWrapper,
                        title: c.intl.string(c.t.Ugq3yM),
                        children: [
                            (0, i.jsx)(a.IdealBankElement, {
                                options: {
                                    value: u,
                                    style: E
                                },
                                onChange: (e) => l(e.value)
                            }),
                            (0, i.jsx)('div', {
                                className: d.bankSelectionStub,
                                children: (0, i.jsx)('img', {
                                    src: _,
                                    alt: 'iDeal'
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
