n.d(t, {
    C: () => l,
    N: () => u
});
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(600164),
    s = n(388032),
    o = n(348421);
let l = (e) => {
        let { className: t, isEmailResent: n, resendEmail: a } = e;
        return (0, i.jsx)('div', {
            className: t,
            children: (0, i.jsxs)('div', {
                className: o.awaitingWrapper,
                children: [
                    (0, i.jsx)(r.X6q, {
                        variant: 'heading-xl/bold',
                        children: s.intl.string(s.t.Q03WWV)
                    }),
                    (0, i.jsxs)('p', {
                        children: [
                            (0, i.jsx)(r.Text, {
                                variant: 'text-md/normal',
                                children: s.intl.string(s.t.BxPxhI)
                            }),
                            (0, i.jsx)('br', {}),
                            (0, i.jsx)(r.Text, {
                                variant: 'text-md/normal',
                                children: s.intl.string(s.t.Y3fdOj)
                            }),
                            (0, i.jsx)('br', {}),
                            (0, i.jsxs)(r.Text, {
                                variant: 'text-md/normal',
                                children: [
                                    s.intl.string(s.t.Paa4v7),
                                    '\xA0',
                                    n
                                        ? s.intl.string(s.t.StGVvL)
                                        : (0, i.jsx)(r.eee, {
                                              onClick: a,
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
        (0, i.jsx)('div', {
            children: (0, i.jsx)(r.mzw, {
                justify: a.Z.Justify.BETWEEN,
                align: a.Z.Align.CENTER,
                children: (0, i.jsx)(r.zxk, {
                    'data-testid': 'continue',
                    color: r.zxk.Colors.BRAND,
                    disabled: !0,
                    children: s.intl.string(s.t.g8vPz8)
                })
            })
        });
