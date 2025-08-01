n.d(t, {
    N4: () => x,
    Q9: () => g,
    aB: () => v,
    uf: () => _
});
var r = n(255367),
    o = n(73800),
    i = n(120356),
    l = n.n(i),
    s = n(481060),
    a = n(377171),
    c = n(192371),
    u = n(834209),
    d = n(93841),
    p = n(388032),
    m = n(246499);
function f(e) {
    let { dateString: t } = e;
    return (0, r.jsxs)('div', {
        className: m.inline,
        children: [
            (0, r.jsx)(s.Mgn, {
                size: 'xs',
                color: s.TVs.colors.STATUS_WARNING
            }),
            (0, r.jsx)(s.Text, {
                color: 'status-warning',
                variant: 'text-sm/bold',
                children: p.intl.formatToMarkdownString(d.default['ol/ao6'], { dateString: (0, c.Z)(t) })
            })
        ]
    });
}
function _(e) {
    let { cost: t, status: n, className: o } = e,
        i = void 0 !== t ? m.labelContainer : m.labelContainerEnd;
    return (0, r.jsxs)('div', {
        className: l()(i, o),
        children: [
            void 0 !== t &&
                (0, r.jsxs)('div', {
                    className: l()(m.inline, m.inlineBoost),
                    children: [
                        (0, r.jsx)(s.$Eu, {
                            size: 'sm',
                            color: s.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
                        }),
                        (0, r.jsx)(s.Text, {
                            className: m.price,
                            tag: 'div',
                            variant: 'heading-md/semibold',
                            color: 'text-secondary',
                            children: p.intl.formatToPlainString(p.t.t2Wbo6, { required: t })
                        })
                    ]
                }),
            (null == n ? void 0 : n.type) === 'expiring' && (0, r.jsx)(f, { dateString: n.expiringAt }),
            (null == n ? void 0 : n.type) === 'removing' &&
                (0, r.jsxs)('div', {
                    className: m.rollbackInline,
                    children: [
                        (0, r.jsx)(s.Mgn, {
                            size: 'xs',
                            color: s.TVs.colors.STATUS_WARNING
                        }),
                        (0, r.jsx)(s.Text, {
                            color: 'status-warning',
                            variant: 'text-sm/bold',
                            children: p.intl.formatToPlainString(d.default['6e2ry8'], { dateString: (0, u.Z)(n.removingAt) })
                        })
                    ]
                }),
            (null == n ? void 0 : n.type) === 'active' &&
                (0, r.jsxs)('div', {
                    className: m.inline,
                    children: [
                        (0, r.jsx)(s.owK, {
                            size: 'xs',
                            color: s.TVs.colors.STATUS_POSITIVE
                        }),
                        (0, r.jsx)(s.Text, {
                            color: 'text-feedback-positive',
                            variant: 'text-sm/bold',
                            children: n.statusText
                        })
                    ]
                })
        ]
    });
}
function x(e) {
    let { children: t } = e;
    return (0, r.jsx)('div', {
        className: m.buttonContainer,
        children: t
    });
}
function g(e) {
    let { title: t, textColor: n, children: o, footer: i } = e;
    return (0, r.jsxs)('div', {
        className: m.contentContainer,
        children: [
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsx)('div', {
                        className: m.headerContainer,
                        children: (0, r.jsx)(s.X6q, {
                            color: n,
                            variant: 'heading-md/bold',
                            children: t
                        })
                    }),
                    o
                ]
            }),
            i
        ]
    });
}
let v = o.forwardRef(function (e, t) {
    let { className: n, label: o, isActive: i, isWarning: c, badge: u, canRollback: d, onClick: f, onMouseOver: _, onMouseLeave: x, children: g } = e;
    return (0, r.jsx)('div', {
        className: l()(m.parentContainer, { [m.rollbackInactive]: d && !i }),
        ref: t,
        children: (0, r.jsxs)(s.kL8, {
            'aria-label': o,
            onClick: f,
            onMouseOver: _,
            onMouseLeave: x,
            className: l()(
                m.container,
                {
                    [m.active]: i,
                    [m.warning]: c || (d && i)
                },
                n
            ),
            children: [
                'new' === u &&
                    (0, r.jsx)(s.IGR, {
                        className: m.new,
                        text: p.intl.string(p.t.y2b7CA)
                    }),
                'beta' === u &&
                    (0, r.jsx)(s.IGR, {
                        className: m.new,
                        text: p.intl.string(p.t.oW0eUV),
                        color: a.Z.BG_BRAND
                    }),
                g
            ]
        })
    });
});
