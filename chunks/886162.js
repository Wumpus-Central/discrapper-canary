n.d(t, {
    Z: function () {
        return g;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(990547),
    a = n(399606),
    s = n(481060),
    o = n(232567),
    c = n(213609),
    d = n(313201),
    u = n(23434),
    h = n(981631),
    m = n(388032),
    p = n(777942);
function g(e) {
    let { transitionState: t } = e,
        g = (0, a.e7)([u.Z], () => u.Z.getAction()),
        [f, _] = r.useState(!1),
        E = (0, d.Dt)();
    async function I() {
        return _(!0), g === h.c2C.AGREEMENTS && _(await (0, o.Lr)()), null;
    }
    return (
        (0, c.Z)(
            {
                type: l.ImpressionTypes.VIEW,
                name: l.ImpressionNames.USER_AGREEMENTS,
                properties: { required_action: g }
            },
            {},
            []
        ),
        (0, i.jsxs)(s.ModalRoot, {
            'aria-labelledby': E,
            transitionState: t,
            children: [
                (0, i.jsx)('div', { id: E }),
                (0, i.jsx)(s.ModalHeader, {
                    separator: !1,
                    children: (0, i.jsx)(s.Heading, {
                        variant: 'heading-lg/semibold',
                        children: m.intl.string(m.t['7glvXl'])
                    })
                }),
                (0, i.jsxs)(s.ModalContent, {
                    children: [
                        (0, i.jsx)(s.Text, {
                            variant: 'text-md/normal',
                            children: g === h.c2C.AGREEMENTS ? m.intl.format(m.t.zHolhY, {}) : null
                        }),
                        (0, i.jsxs)('div', {
                            className: p.container,
                            children: [
                                (0, i.jsxs)('ul', {
                                    className: p.links,
                                    children: [(0, i.jsx)('li', { children: m.intl.format(m.t.iw0hFh, { url: h.EYA.TERMS }) }), (0, i.jsx)('li', { children: m.intl.format(m.t['36klnJ'], { url: h.EYA.PAID_TERMS }) }), (0, i.jsx)('li', { children: m.intl.format(m.t.TquFBA, { url: h.EYA.PRIVACY }) }), (0, i.jsx)('li', { children: m.intl.format(m.t.ia96TU, { url: h.EYA.GUIDELINES }) })]
                                }),
                                (0, i.jsx)('img', {
                                    className: p.image,
                                    alt: '',
                                    src: n(146714)
                                })
                            ]
                        }),
                        (0, i.jsx)(s.Text, {
                            variant: 'text-md/normal',
                            className: p.agreementDescription,
                            children: m.intl.string(m.t['+USXQE'])
                        })
                    ]
                }),
                (0, i.jsx)(s.ModalFooter, {
                    children: (0, i.jsx)(s.Button, {
                        submitting: f,
                        onClick: I,
                        color: s.Button.Colors.GREEN,
                        children: m.intl.string(m.t['+TBKLy'])
                    })
                })
            ]
        })
    );
}
