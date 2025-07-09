n.d(t, {
    C: () => c,
    N: () => u
});
var r = n(255367);
n(73800);
var i = n(755721),
    a = n(481060),
    o = n(600164),
    s = n(388032),
    l = n(231571);
let c = (e) => {
        let { className: t, isEmailResent: n, resendEmail: i } = e;
        return (0, r.jsx)('div', {
            className: t,
            children: (0, r.jsxs)('div', {
                className: l.awaitingWrapper,
                children: [
                    (0, r.jsx)(a.X6q, {
                        variant: 'heading-xl/bold',
                        children: s.intl.string(s.t.Q03WWV)
                    }),
                    (0, r.jsxs)('p', {
                        children: [
                            (0, r.jsx)(a.Text, {
                                variant: 'text-md/normal',
                                children: s.intl.string(s.t.BxPxhI)
                            }),
                            (0, r.jsx)('br', {}),
                            (0, r.jsx)(a.Text, {
                                variant: 'text-md/normal',
                                children: s.intl.string(s.t.Y3fdOj)
                            }),
                            (0, r.jsx)('br', {}),
                            (0, r.jsxs)(a.Text, {
                                variant: 'text-md/normal',
                                children: [
                                    s.intl.string(s.t.Paa4v7),
                                    '\xA0',
                                    n
                                        ? s.intl.string(s.t.StGVvL)
                                        : (0, r.jsx)(a.eee, {
                                              onClick: i,
                                              children: s.intl.string(s.t.Ex7sk5)
                                          })
                                ]
                            })
                        ]
                    })
                ]
            })
        });
    },
    u = () =>
        (0, r.jsx)('div', {
            children: (0, r.jsx)(a.mzw, {
                justify: o.Z.Justify.BETWEEN,
                align: o.Z.Align.CENTER,
                children: (0, r.jsx)(i.zx, {
                    'data-testid': 'continue',
                    color: i.zx.Colors.BRAND,
                    disabled: !0,
                    children: s.intl.string(s.t.g8vPz8)
                })
            })
        });
