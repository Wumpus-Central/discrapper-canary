var i = r(47120);
var a = r(411104);
var o = r(200651),
    s = r(192379),
    l = r(734530);
var u = r(780384),
    c = r(481060),
    d = r(410030),
    f = r(231338),
    p = r(388032),
    h = r(578153),
    _ = r(744481),
    m = r(724641),
    g = r(811974),
    E = r(212545),
    v = r(184229),
    y = r(504309);
function b(e) {
    let n = (0, d.ZP)(),
        r = s.useRef(null),
        [i, a] = s.useState({});
    switch (
        (s.useLayoutEffect(() => {
            let { current: e } = r;
            if (null == e) return;
            let n = window.getComputedStyle(e),
                i = window.getComputedStyle(e, '::placeholder'),
                o = n.getPropertyValue('font-family'),
                s = n.getPropertyValue('font-weight'),
                l = n.getPropertyValue('color'),
                u = n.getPropertyValue('font-size');
            a({
                base: {
                    fontFamily: o,
                    fontWeight: s,
                    color: l,
                    fontSize: u,
                    backgroundColor: n.getPropertyValue('background-color'),
                    padding: '12px',
                    '::placeholder': { color: i.getPropertyValue('color') }
                }
            });
        }, [r]),
        e.type)
    ) {
        case f.He.PRZELEWY24: {
            let a = (0, u.wj)(n) ? v : y,
                { onNameChange: s, onEmailChange: d, onP24BankChange: f, p24BankValue: _, billingAddressInfo: m } = e;
            return (0, o.jsxs)('div', {
                className: h.body,
                children: [
                    (0, o.jsx)(c.FormSection, {
                        title: p.intl.string(p.t['w/qqKC']),
                        children: (0, o.jsx)(c.TextInput, {
                            inputRef: r,
                            name: p.intl.string(p.t['w/qqKC']),
                            placeholder: p.intl.string(p.t['w/qqKC']),
                            onChange: (e) => d(e),
                            value: m.email
                        })
                    }),
                    (0, o.jsx)(c.FormSection, {
                        className: h.nonTopInputWrapper,
                        title: p.intl.string(p.t.yf7ms7),
                        children: (0, o.jsx)(c.TextInput, {
                            name: p.intl.string(p.t.yf7ms7),
                            placeholder: p.intl.string(p.t.yf7ms7),
                            onChange: (e) => s(e),
                            value: m.name
                        })
                    }),
                    (0, o.jsxs)(c.FormSection, {
                        className: h.nonTopInputWrapper,
                        title: p.intl.string(p.t.De3b8v),
                        children: [
                            (0, o.jsx)(l.P24BankElement, {
                                options: {
                                    value: _,
                                    style: i
                                },
                                onChange: (e) => f(e.value)
                            }),
                            (0, o.jsx)('div', {
                                className: h.bankSelectionStub,
                                children: (0, o.jsx)('img', {
                                    src: a,
                                    alt: 'Przelewy24'
                                })
                            })
                        ]
                    })
                ]
            });
        }
        case f.He.EPS: {
            let { onAccountHolderNameChange: a, onEPSBankChange: s, epsBankValue: d, billingAddressInfo: f } = e,
                g = (0, u.wj)(n) ? _ : m;
            return (0, o.jsxs)('div', {
                className: h.body,
                children: [
                    (0, o.jsx)(c.FormSection, {
                        title: p.intl.string(p.t.sN3wra),
                        children: (0, o.jsx)(c.TextInput, {
                            inputRef: r,
                            name: p.intl.string(p.t.sN3wra),
                            placeholder: p.intl.string(p.t.sN3wra),
                            onChange: (e) => a(e),
                            value: f.name
                        })
                    }),
                    (0, o.jsxs)(c.FormSection, {
                        className: h.nonTopInputWrapper,
                        title: p.intl.string(p.t.dFyV09),
                        children: [
                            (0, o.jsx)(l.EpsBankElement, {
                                options: {
                                    value: d,
                                    style: i
                                },
                                onChange: (e) => s(e.value)
                            }),
                            (0, o.jsx)('div', {
                                className: h.bankSelectionStub,
                                children: (0, o.jsx)('img', {
                                    src: g,
                                    alt: 'EPS'
                                })
                            })
                        ]
                    })
                ]
            });
        }
        case f.He.IDEAL: {
            let { onAccountHolderNameChange: a, onIdealBankChange: s, idealBankValue: d, billingAddressInfo: f } = e,
                _ = (0, u.wj)(n) ? g : E;
            return (0, o.jsxs)('div', {
                className: h.body,
                children: [
                    (0, o.jsx)(c.FormSection, {
                        title: p.intl.string(p.t.sN3wra),
                        children: (0, o.jsx)(c.TextInput, {
                            inputRef: r,
                            name: p.intl.string(p.t.sN3wra),
                            placeholder: p.intl.string(p.t.sN3wra),
                            onChange: (e) => a(e),
                            value: f.name
                        })
                    }),
                    (0, o.jsxs)(c.FormSection, {
                        className: h.nonTopInputWrapper,
                        title: p.intl.string(p.t.Ugq3yM),
                        children: [
                            (0, o.jsx)(l.IdealBankElement, {
                                options: {
                                    value: d,
                                    style: i
                                },
                                onChange: (e) => s(e.value)
                            }),
                            (0, o.jsx)('div', {
                                className: h.bankSelectionStub,
                                children: (0, o.jsx)('img', {
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
}
n.Z = b;
