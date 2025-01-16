t.d(n, {
    C: function () {
        return c;
    },
    N: function () {
        return o;
    }
});
var i = t(200651);
t(192379);
var l = t(481060),
    r = t(600164),
    s = t(388032),
    a = t(773232);
let c = (e) => {
        let { className: n, isEmailResent: t, resendEmail: r } = e;
        return (0, i.jsx)('div', {
            className: n,
            children: (0, i.jsxs)('div', {
                className: a.awaitingWrapper,
                children: [
                    (0, i.jsx)(l.Heading, {
                        variant: 'heading-xl/bold',
                        children: s.intl.string(s.t.Q03WWV)
                    }),
                    (0, i.jsxs)('p', {
                        children: [
                            (0, i.jsx)(l.Text, {
                                variant: 'text-md/normal',
                                children: s.intl.string(s.t.BxPxhI)
                            }),
                            (0, i.jsx)('br', {}),
                            (0, i.jsx)(l.Text, {
                                variant: 'text-md/normal',
                                children: s.intl.string(s.t.Y3fdOj)
                            }),
                            (0, i.jsx)('br', {}),
                            (0, i.jsxs)(l.Text, {
                                variant: 'text-md/normal',
                                children: [
                                    s.intl.string(s.t.Paa4v7),
                                    '\xA0',
                                    t
                                        ? s.intl.string(s.t.StGVvL)
                                        : (0, i.jsx)(l.Anchor, {
                                              onClick: r,
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
    o = () =>
        (0, i.jsx)('div', {
            children: (0, i.jsx)(l.ModalFooter, {
                justify: r.Z.Justify.BETWEEN,
                align: r.Z.Align.CENTER,
                children: (0, i.jsx)(l.Button, {
                    'data-testid': 'continue',
                    color: l.Button.Colors.BRAND,
                    disabled: !0,
                    children: s.intl.string(s.t.g8vPz8)
                })
            })
        });
