n.d(t, {
    Z: () => x,
    u: () => _
});
var r = n(255367);
n(73800);
var o = n(120356),
    i = n.n(o),
    s = n(481060),
    a = n(973772),
    l = n(192371),
    c = n(279604),
    u = n(535396),
    d = n(93841),
    p = n(388032),
    m = n(117172);
function f(e) {
    let { dateString: t } = e;
    return (0, r.jsxs)('div', {
        className: m.inline,
        children: [
            (0, r.jsx)(s.P4T, {
                size: 'xs',
                color: s.TVs.colors.STATUS_WARNING
            }),
            (0, r.jsx)(s.Text, {
                color: 'status-warning',
                variant: 'text-sm/bold',
                children: p.intl.formatToMarkdownString(d.default['ol/ao6'], { dateString: (0, l.Z)(t) })
            })
        ]
    });
}
function _(e) {
    var t, n, o;
    let { guildId: l, powerup: c, className: _ } = e,
        x = (0, a.Z)(l, c),
        v = x.type !== u.A3.LEVEL_ACTIVATED,
        g = v ? m.labelContainer : m.labelContainerEnd,
        b = x.type === u.A3.LEVEL_ACTIVATED ? p.intl.formatToPlainString(d.default.WRRYUV, { perkName: null != (o = null == (t = x.sourcePowerup) ? void 0 : t.title) ? o : p.intl.string(p.t.BfF6EB) }) : x.type === u.A3.POWERUP_ACTIVATED ? p.intl.string(d.default.FFLkm5) : void 0;
    return (0, r.jsxs)('div', {
        className: i()(g, _),
        children: [
            v &&
                (0, r.jsxs)('div', {
                    className: i()(m.inline, m.inlineBoost),
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
                            children: p.intl.formatToPlainString(p.t.t2Wbo6, { required: c.cost })
                        })
                    ]
                }),
            (null == (n = x.sourceEntitlement) ? void 0 : n.ends_at) != null
                ? (0, r.jsx)(f, { dateString: x.sourceEntitlement.ends_at })
                : null != b
                  ? (0, r.jsxs)('div', {
                        className: m.inline,
                        children: [
                            (0, r.jsx)(s.owK, {
                                size: 'xs',
                                color: s.TVs.colors.STATUS_POSITIVE
                            }),
                            (0, r.jsx)(s.Text, {
                                color: 'text-feedback-positive',
                                variant: 'text-sm/bold',
                                children: b
                            })
                        ]
                    })
                  : null
        ]
    });
}
function x(e) {
    var t;
    let { guildId: n, powerup: o, className: l, onHover: d, children: p } = e,
        f = (0, a.Z)(n, o),
        _ = f.type !== u.A3.INACTIVE,
        x = (null == (t = f.sourceEntitlement) ? void 0 : t.ends_at) != null,
        { onShowMore: v } = (0, c.ZP)(n, o);
    return (0, r.jsx)('div', {
        className: m.parentContainer,
        children: (0, r.jsx)(s.kL8, {
            'aria-label': o.title,
            onClick: v,
            onMouseOver: () => (null == d ? void 0 : d(!0)),
            onMouseLeave: () => (null == d ? void 0 : d(!1)),
            className: i()(
                m.container,
                {
                    [m.active]: _,
                    [m.warning]: x
                },
                l
            ),
            children: p
        })
    });
}
