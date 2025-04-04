n.d(t, {
    C: () => l,
    N: () => c
});
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(600164),
    a = n(388032),
    s = n(231571);
let l = (e) => {
        let { className: t, isEmailResent: n, resendEmail: o } = e;
        return (0, r.jsx)('div', {
            className: t,
            children: (0, r.jsxs)('div', {
                className: s.awaitingWrapper,
                children: [
                    (0, r.jsx)(i.X6q, {
                        variant: 'heading-xl/bold',
                        children: a.NW.string(a.t.Q03WWV)
                    }),
                    (0, r.jsxs)('p', {
                        children: [
                            (0, r.jsx)(i.Text, {
                                variant: 'text-md/normal',
                                children: a.NW.string(a.t.BxPxhI)
                            }),
                            (0, r.jsx)('br', {}),
                            (0, r.jsx)(i.Text, {
                                variant: 'text-md/normal',
                                children: a.NW.string(a.t.Y3fdOj)
                            }),
                            (0, r.jsx)('br', {}),
                            (0, r.jsxs)(i.Text, {
                                variant: 'text-md/normal',
                                children: [
                                    a.NW.string(a.t.Paa4v7),
                                    '\xA0',
                                    n
                                        ? a.NW.string(a.t.StGVvL)
                                        : (0, r.jsx)(i.eee, {
                                              onClick: o,
                                              children: a.NW.string(a.t.Ex7sk5)
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
                justify: o.Z.Justify.BETWEEN,
                align: o.Z.Align.CENTER,
                children: (0, r.jsx)(i.zxk, {
                    'data-testid': 'continue',
                    color: i.zxk.Colors.BRAND,
                    disabled: !0,
                    children: a.NW.string(a.t.g8vPz8)
                })
            })
        });
