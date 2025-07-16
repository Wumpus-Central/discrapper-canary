n.d(t, {
    Z: () => x,
    u: () => f
});
var r = n(255367);
n(73800);
var i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(973772),
    l = n(192371),
    c = n(279604),
    d = n(535396),
    u = n(93841),
    p = n(388032),
    m = n(117172);
function _(e) {
    let { dateString: t } = e;
    return (0, r.jsxs)('div', {
        className: m.inline,
        children: [
            (0, r.jsx)(a.P4T, {
                size: 'xs',
                color: a.TVs.colors.STATUS_WARNING
            }),
            (0, r.jsx)(a.Text, {
                color: 'status-warning',
                variant: 'text-sm/bold',
                children: p.intl.formatToMarkdownString(u.default['ol/ao6'], { dateString: (0, l.Z)(t) })
            })
        ]
    });
}
function f(e) {
    var t, n, i;
    let { guildId: l, powerup: c, className: f } = e,
        x = (0, s.Z)(l, c),
        b = x.type !== d.A3.LEVEL_ACTIVATED,
        v = b ? m.labelContainer : m.labelContainerEnd,
        g = x.type === d.A3.LEVEL_ACTIVATED ? p.intl.formatToPlainString(u.default.WRRYUV, { perkName: null != (i = null == (t = x.sourcePowerup) ? void 0 : t.title) ? i : p.intl.string(p.t.BfF6EB) }) : x.type === d.A3.POWERUP_ACTIVATED ? p.intl.string(u.default.FFLkm5) : void 0;
    return (0, r.jsxs)('div', {
        className: o()(v, f),
        children: [
            b &&
                (0, r.jsxs)('div', {
                    className: o()(m.inline, m.inlineBoost),
                    children: [
                        (0, r.jsx)(a.$Eu, {
                            size: 'sm',
                            color: a.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
                        }),
                        (0, r.jsx)(a.Text, {
                            className: m.price,
                            tag: 'div',
                            variant: 'heading-md/semibold',
                            color: 'text-secondary',
                            children: p.intl.formatToPlainString(p.t.t2Wbo6, { required: c.cost })
                        })
                    ]
                }),
            (null == (n = x.sourceEntitlement) ? void 0 : n.ends_at) != null
                ? (0, r.jsx)(_, { dateString: x.sourceEntitlement.ends_at })
                : null != g
                  ? (0, r.jsxs)('div', {
                        className: m.inline,
                        children: [
                            (0, r.jsx)(a.owK, {
                                size: 'xs',
                                color: a.TVs.colors.STATUS_POSITIVE
                            }),
                            (0, r.jsx)(a.Text, {
                                color: 'text-feedback-positive',
                                variant: 'text-sm/bold',
                                children: g
                            })
                        ]
                    })
                  : null
        ]
    });
}
function x(e) {
    var t;
    let { guildId: n, powerup: i, className: l, onHover: u, children: p } = e,
        _ = (0, s.Z)(n, i),
        f = _.type !== d.A3.INACTIVE,
        x = (null == (t = _.sourceEntitlement) ? void 0 : t.ends_at) != null,
        { onShowMore: b } = (0, c.ZP)(n, i);
    return (0, r.jsx)('div', {
        className: m.parentContainer,
        children: (0, r.jsx)(a.kL8, {
            'aria-label': i.title,
            onClick: b,
            onMouseOver: () => (null == u ? void 0 : u(!0)),
            onMouseLeave: () => (null == u ? void 0 : u(!1)),
            className: o()(
                m.container,
                {
                    [m.active]: f,
                    [m.warning]: x
                },
                l
            ),
            children: p
        })
    });
}
