r.d(n, {
    C: function () {
        return u;
    },
    N: function () {
        return c;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    o = r(600164),
    s = r(388032),
    l = r(773232);
let u = (e) => {
        let { className: n, isEmailResent: r, resendEmail: o } = e;
        return (0, i.jsx)('div', {
            className: n,
            children: (0, i.jsxs)('div', {
                className: l.awaitingWrapper,
                children: [
                    (0, i.jsx)(a.Heading, {
                        variant: 'heading-xl/bold',
                        children: s.intl.string(s.t.Q03WWV)
                    }),
                    (0, i.jsxs)('p', {
                        children: [
                            (0, i.jsx)(a.Text, {
                                variant: 'text-md/normal',
                                children: s.intl.string(s.t.BxPxhI)
                            }),
                            (0, i.jsx)('br', {}),
                            (0, i.jsx)(a.Text, {
                                variant: 'text-md/normal',
                                children: s.intl.string(s.t.Y3fdOj)
                            }),
                            (0, i.jsx)('br', {}),
                            (0, i.jsxs)(a.Text, {
                                variant: 'text-md/normal',
                                children: [
                                    s.intl.string(s.t.Paa4v7),
                                    '\xA0',
                                    r
                                        ? s.intl.string(s.t.StGVvL)
                                        : (0, i.jsx)(a.Anchor, {
                                              onClick: o,
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
    c = () =>
        (0, i.jsx)('div', {
            children: (0, i.jsx)(a.ModalFooter, {
                justify: o.Z.Justify.BETWEEN,
                align: o.Z.Align.CENTER,
                children: (0, i.jsx)(a.Button, {
                    'data-testid': 'continue',
                    color: a.Button.Colors.BRAND,
                    disabled: !0,
                    children: s.intl.string(s.t.g8vPz8)
                })
            })
        });
