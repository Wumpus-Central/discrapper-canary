n.d(t, { Z: () => E }), n(47120), n(411104);
var r = n(200651),
    i = n(192379),
    o = n(734530),
    a = n(780384),
    s = n(481060),
    l = n(410030),
    c = n(231338),
    u = n(388032),
    d = n(428836),
    f = n(744481),
    p = n(724641),
    _ = n(811974),
    h = n(212545),
    m = n(184229),
    g = n(504309);
let E = function (e) {
    let t = (0, l.ZP)(),
        n = i.useRef(null),
        [E, v] = i.useState({});
    switch (
        (i.useLayoutEffect(() => {
            let { current: e } = n;
            if (null == e) return;
            let t = window.getComputedStyle(e),
                r = window.getComputedStyle(e, '::placeholder'),
                i = t.getPropertyValue('font-family'),
                o = t.getPropertyValue('font-weight'),
                a = t.getPropertyValue('color');
            v({
                base: {
                    fontFamily: i,
                    fontWeight: o,
                    color: a,
                    fontSize: t.getPropertyValue('font-size'),
                    backgroundColor: t.getPropertyValue('background-color'),
                    padding: '12px',
                    '::placeholder': { color: r.getPropertyValue('color') }
                }
            });
        }, [n]),
        e.type)
    ) {
        case c.He.PRZELEWY24: {
            let i = (0, a.wj)(t) ? m : g,
                { onNameChange: l, onEmailChange: c, onP24BankChange: f, p24BankValue: p, billingAddressInfo: _ } = e;
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
                            value: _.email
                        })
                    }),
                    (0, r.jsx)(s.hjN, {
                        className: d.nonTopInputWrapper,
                        title: u.NW.string(u.t.yf7ms7),
                        children: (0, r.jsx)(s.oil, {
                            name: u.NW.string(u.t.yf7ms7),
                            placeholder: u.NW.string(u.t.yf7ms7),
                            onChange: (e) => l(e),
                            value: _.name
                        })
                    }),
                    (0, r.jsxs)(s.hjN, {
                        className: d.nonTopInputWrapper,
                        title: u.NW.string(u.t.De3b8v),
                        children: [
                            (0, r.jsx)(o.P24BankElement, {
                                options: {
                                    value: p,
                                    style: E
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
            let { onAccountHolderNameChange: i, onEPSBankChange: l, epsBankValue: c, billingAddressInfo: _ } = e,
                h = (0, a.wj)(t) ? f : p;
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
                            value: _.name
                        })
                    }),
                    (0, r.jsxs)(s.hjN, {
                        className: d.nonTopInputWrapper,
                        title: u.NW.string(u.t.dFyV09),
                        children: [
                            (0, r.jsx)(o.EpsBankElement, {
                                options: {
                                    value: c,
                                    style: E
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
        case c.He.IDEAL: {
            let { onAccountHolderNameChange: i, onIdealBankChange: l, idealBankValue: c, billingAddressInfo: f } = e,
                p = (0, a.wj)(t) ? _ : h;
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
                            value: f.name
                        })
                    }),
                    (0, r.jsxs)(s.hjN, {
                        className: d.nonTopInputWrapper,
                        title: u.NW.string(u.t.Ugq3yM),
                        children: [
                            (0, r.jsx)(o.IdealBankElement, {
                                options: {
                                    value: c,
                                    style: E
                                },
                                onChange: (e) => l(e.value)
                            }),
                            (0, r.jsx)('div', {
                                className: d.bankSelectionStub,
                                children: (0, r.jsx)('img', {
                                    src: p,
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
