t.d(n, {
    Z: () => v,
    u: () => x
});
var r = t(255367);
t(73800);
var i = t(120356),
    o = t.n(i),
    a = t(481060),
    s = t(975951),
    l = t(322043),
    c = t(717259),
    u = t(192371),
    d = t(279604),
    m = t(93841),
    p = t(388032),
    _ = t(117172);
function f(e) {
    let { dateString: n } = e;
    return (0, r.jsxs)('div', {
        className: _.inline,
        children: [
            (0, r.jsx)(a.P4T, {
                size: 'xs',
                color: a.TVs.colors.STATUS_WARNING
            }),
            (0, r.jsx)(a.Text, {
                color: 'status-warning',
                variant: 'text-sm/bold',
                children: p.intl.formatToMarkdownString(m.default['ol/ao6'], { dateString: (0, u.Z)(n) })
            })
        ]
    });
}
function x(e) {
    var n;
    let { guildId: t, powerup: i, className: l } = e,
        u = (0, c.Z)(t, i),
        { activatedEntitlement: d, activatedLevelPowerup: x } = (0, s.Z)(t, i),
        v = !u,
        b = v ? _.labelContainer : _.labelContainerEnd,
        g = u ? p.intl.formatToPlainString(m.default.WRRYUV, { perkName: null != (n = null == x ? void 0 : x.title) ? n : p.intl.string(p.t.BfF6EB) }) : null != d ? p.intl.string(m.default.FFLkm5) : void 0;
    return (0, r.jsxs)('div', {
        className: o()(b, l),
        children: [
            v &&
                (0, r.jsxs)('div', {
                    className: o()(_.inline, _.inlineBoost),
                    children: [
                        (0, r.jsx)(a.$Eu, {
                            size: 'sm',
                            color: a.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
                        }),
                        (0, r.jsx)(a.Text, {
                            className: _.price,
                            tag: 'div',
                            variant: 'heading-md/semibold',
                            color: 'text-secondary',
                            children: p.intl.formatToPlainString(p.t.t2Wbo6, { required: i.cost })
                        })
                    ]
                }),
            (null == d ? void 0 : d.ends_at) != null
                ? (0, r.jsx)(f, { dateString: d.ends_at })
                : null != g
                  ? (0, r.jsxs)('div', {
                        className: _.inline,
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
function v(e) {
    let { guildId: n, powerup: t, className: i, onHover: c, children: u } = e,
        { activatedEntitlement: m } = (0, s.Z)(n, t),
        p = (0, l.Z)(n, t),
        f = (null == m ? void 0 : m.ends_at) != null,
        { onShowMore: x } = (0, d.ZP)(n, t);
    return (0, r.jsx)('div', {
        className: _.parentContainer,
        children: (0, r.jsx)(a.kL8, {
            'aria-label': t.title,
            onClick: x,
            onMouseOver: () => (null == c ? void 0 : c(!0)),
            onMouseLeave: () => (null == c ? void 0 : c(!1)),
            className: o()(
                _.container,
                {
                    [_.active]: p,
                    [_.warning]: f
                },
                i
            ),
            children: u
        })
    });
}
