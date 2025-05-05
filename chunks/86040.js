n.d(t, {
    C: () => l,
    N: () => c
});
var r = n(255367);
n(73800);
var i = n(481060),
    a = n(600164),
    o = n(388032),
    s = n(231571);
let l = (e) => {
        let { className: t, isEmailResent: n, resendEmail: a } = e;
        return (0, r.jsx)('div', {
            className: t,
            children: (0, r.jsxs)('div', {
                className: s.awaitingWrapper,
                children: [
                    (0, r.jsx)(i.X6q, {
                        variant: 'heading-xl/bold',
                        children: o.intl.string(o.t.Q03WWV)
                    }),
                    (0, r.jsxs)('p', {
                        children: [
                            (0, r.jsx)(i.Text, {
                                variant: 'text-md/normal',
                                children: o.intl.string(o.t.BxPxhI)
                            }),
                            (0, r.jsx)('br', {}),
                            (0, r.jsx)(i.Text, {
                                variant: 'text-md/normal',
                                children: o.intl.string(o.t.Y3fdOj)
                            }),
                            (0, r.jsx)('br', {}),
                            (0, r.jsxs)(i.Text, {
                                variant: 'text-md/normal',
                                children: [
                                    o.intl.string(o.t.Paa4v7),
                                    '\xA0',
                                    n
                                        ? o.intl.string(o.t.StGVvL)
                                        : (0, r.jsx)(i.eee, {
                                              onClick: a,
                                              children: o.intl.string(o.t.Ex7sk5)
                                          })
                                ]
                            })
                        ]
                    })
                ]
            })
        });
    },
    c = () =>
        (0, r.jsx)('div', {
            children: (0, r.jsx)(i.mzw, {
                justify: a.Z.Justify.BETWEEN,
                align: a.Z.Align.CENTER,
                children: (0, r.jsx)(i.zxk, {
                    'data-testid': 'continue',
                    color: i.zxk.Colors.BRAND,
                    disabled: !0,
                    children: o.intl.string(o.t.g8vPz8)
                })
            })
        });
