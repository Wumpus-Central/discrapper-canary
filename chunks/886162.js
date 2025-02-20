n.d(t, { Z: () => g }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(990547),
    o = n(399606),
    a = n(481060),
    s = n(232567),
    c = n(213609),
    u = n(313201),
    d = n(23434),
    p = n(981631),
    h = n(388032),
    f = n(670430);
function g(e) {
    let { transitionState: t } = e,
        g = (0, o.e7)([d.Z], () => d.Z.getAction()),
        [m, b] = i.useState(!1),
        _ = (0, u.Dt)();
    async function E() {
        return b(!0), g === p.c2C.AGREEMENTS && b(await (0, s.Lr)()), null;
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
        (0, r.jsxs)(a.Y0X, {
            'aria-labelledby': _,
            transitionState: t,
            children: [
                (0, r.jsx)('div', { id: _ }),
                (0, r.jsx)(a.xBx, {
                    separator: !1,
                    children: (0, r.jsx)(a.X6q, {
                        variant: 'heading-lg/semibold',
                        children: h.NW.string(h.t['7glvXl'])
                    })
                }),
                (0, r.jsxs)(a.hzk, {
                    children: [
                        (0, r.jsx)(a.Text, {
                            variant: 'text-md/normal',
                            children: g === p.c2C.AGREEMENTS ? h.NW.format(h.t.zHolhY, {}) : null
                        }),
                        (0, r.jsxs)('div', {
                            className: f.container,
                            children: [
                                (0, r.jsxs)('ul', {
                                    className: f.links,
                                    children: [(0, r.jsx)('li', { children: h.NW.format(h.t.iw0hFh, { url: p.EYA.TERMS }) }), (0, r.jsx)('li', { children: h.NW.format(h.t['36klnJ'], { url: p.EYA.PAID_TERMS }) }), (0, r.jsx)('li', { children: h.NW.format(h.t.TquFBA, { url: p.EYA.PRIVACY }) }), (0, r.jsx)('li', { children: h.NW.format(h.t.ia96TU, { url: p.EYA.GUIDELINES }) })]
                                }),
                                (0, r.jsx)('img', {
                                    className: f.image,
                                    alt: '',
                                    src: n(146714)
                                })
                            ]
                        }),
                        (0, r.jsx)(a.Text, {
                            variant: 'text-md/normal',
                            className: f.agreementDescription,
                            children: h.NW.string(h.t['+USXQE'])
                        })
                    ]
                }),
                (0, r.jsx)(a.mzw, {
                    children: (0, r.jsx)(a.zxk, {
                        submitting: m,
                        onClick: E,
                        color: a.zxk.Colors.GREEN,
                        children: h.NW.string(h.t['+TBKLy'])
                    })
                })
            ]
        })
    );
}
