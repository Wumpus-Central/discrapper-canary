n(47120), n(411104);
var a = n(200651),
    r = n(192379),
    l = n(734530),
    s = n(780384),
    i = n(481060),
    o = n(410030),
    c = n(231338),
    u = n(388032),
    d = n(578153),
    p = n(744481),
    m = n(724641),
    h = n(811974),
    A = n(212545),
    E = n(184229),
    N = n(504309);
t.Z = function (e) {
    let t = (0, o.ZP)(),
        n = r.useRef(null),
        [f, y] = r.useState({});
    switch (
        (r.useLayoutEffect(() => {
            let { current: e } = n;
            if (null == e) return;
            let t = window.getComputedStyle(e),
                a = window.getComputedStyle(e, '::placeholder'),
                r = t.getPropertyValue('font-family'),
                l = t.getPropertyValue('font-weight'),
                s = t.getPropertyValue('color'),
                i = t.getPropertyValue('font-size');
            y({
                base: {
                    fontFamily: r,
                    fontWeight: l,
                    color: s,
                    fontSize: i,
                    backgroundColor: t.getPropertyValue('background-color'),
                    padding: '12px',
                    '::placeholder': { color: a.getPropertyValue('color') }
                }
            });
        }, [n]),
        e.type)
    ) {
        case c.He.PRZELEWY24: {
            let r = (0, s.wj)(t) ? E : N,
                { onNameChange: o, onEmailChange: c, onP24BankChange: p, p24BankValue: m, billingAddressInfo: h } = e;
            return (0, a.jsxs)('div', {
                className: d.body,
                children: [
                    (0, a.jsx)(i.FormSection, {
                        title: u.intl.string(u.t['w/qqKC']),
                        children: (0, a.jsx)(i.TextInput, {
                            inputRef: n,
                            name: u.intl.string(u.t['w/qqKC']),
                            placeholder: u.intl.string(u.t['w/qqKC']),
                            onChange: (e) => c(e),
                            value: h.email
                        })
                    }),
                    (0, a.jsx)(i.FormSection, {
                        className: d.nonTopInputWrapper,
                        title: u.intl.string(u.t.yf7ms7),
                        children: (0, a.jsx)(i.TextInput, {
                            name: u.intl.string(u.t.yf7ms7),
                            placeholder: u.intl.string(u.t.yf7ms7),
                            onChange: (e) => o(e),
                            value: h.name
                        })
                    }),
                    (0, a.jsxs)(i.FormSection, {
                        className: d.nonTopInputWrapper,
                        title: u.intl.string(u.t.De3b8v),
                        children: [
                            (0, a.jsx)(l.P24BankElement, {
                                options: {
                                    value: m,
                                    style: f
                                },
                                onChange: (e) => p(e.value)
                            }),
                            (0, a.jsx)('div', {
                                className: d.bankSelectionStub,
                                children: (0, a.jsx)('img', {
                                    src: r,
                                    alt: 'Przelewy24'
                                })
                            })
                        ]
                    })
                ]
            });
        }
        case c.He.EPS: {
            let { onAccountHolderNameChange: r, onEPSBankChange: o, epsBankValue: c, billingAddressInfo: h } = e,
                A = (0, s.wj)(t) ? p : m;
            return (0, a.jsxs)('div', {
                className: d.body,
                children: [
                    (0, a.jsx)(i.FormSection, {
                        title: u.intl.string(u.t.sN3wra),
                        children: (0, a.jsx)(i.TextInput, {
                            inputRef: n,
                            name: u.intl.string(u.t.sN3wra),
                            placeholder: u.intl.string(u.t.sN3wra),
                            onChange: (e) => r(e),
                            value: h.name
                        })
                    }),
                    (0, a.jsxs)(i.FormSection, {
                        className: d.nonTopInputWrapper,
                        title: u.intl.string(u.t.dFyV09),
                        children: [
                            (0, a.jsx)(l.EpsBankElement, {
                                options: {
                                    value: c,
                                    style: f
                                },
                                onChange: (e) => o(e.value)
                            }),
                            (0, a.jsx)('div', {
                                className: d.bankSelectionStub,
                                children: (0, a.jsx)('img', {
                                    src: A,
                                    alt: 'EPS'
                                })
                            })
                        ]
                    })
                ]
            });
        }
        case c.He.IDEAL: {
            let { onAccountHolderNameChange: r, onIdealBankChange: o, idealBankValue: c, billingAddressInfo: p } = e,
                m = (0, s.wj)(t) ? h : A;
            return (0, a.jsxs)('div', {
                className: d.body,
                children: [
                    (0, a.jsx)(i.FormSection, {
                        title: u.intl.string(u.t.sN3wra),
                        children: (0, a.jsx)(i.TextInput, {
                            inputRef: n,
                            name: u.intl.string(u.t.sN3wra),
                            placeholder: u.intl.string(u.t.sN3wra),
                            onChange: (e) => r(e),
                            value: p.name
                        })
                    }),
                    (0, a.jsxs)(i.FormSection, {
                        className: d.nonTopInputWrapper,
                        title: u.intl.string(u.t.Ugq3yM),
                        children: [
                            (0, a.jsx)(l.IdealBankElement, {
                                options: {
                                    value: c,
                                    style: f
                                },
                                onChange: (e) => o(e.value)
                            }),
                            (0, a.jsx)('div', {
                                className: d.bankSelectionStub,
                                children: (0, a.jsx)('img', {
                                    src: m,
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
