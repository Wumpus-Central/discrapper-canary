t.d(n, {
    Z: () => _,
    u: () => f
});
var r = t(255367);
t(73800);
var i = t(120356),
    o = t.n(i),
    s = t(481060),
    a = t(477415),
    l = t(690786),
    c = t(192371),
    u = t(279604),
    d = t(93841),
    p = t(388032),
    m = t(117172);
function x(e) {
    let { dateString: n } = e;
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
                children: p.intl.formatToMarkdownString(d.default['ol/ao6'], { dateString: (0, c.Z)(n) })
            })
        ]
    });
}
function f(e) {
    let { guildId: n, powerup: t, className: i } = e,
        a = (0, l.Z)(n, t);
    return (0, r.jsxs)('div', {
        className: o()(m.labelContainer, i),
        children: [
            (0, r.jsxs)('div', {
                className: o()(m.inline, m.inlineBoost),
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
                        children: p.intl.formatToPlainString(p.t.t2Wbo6, { required: t.cost })
                    })
                ]
            }),
            null != a &&
                ((null == a ? void 0 : a.ends_at) != null
                    ? (0, r.jsx)(x, { dateString: a.ends_at })
                    : (0, r.jsxs)('div', {
                          className: m.inline,
                          children: [
                              (0, r.jsx)(s.owK, {
                                  size: 'xs',
                                  color: s.TVs.colors.STATUS_POSITIVE
                              }),
                              (0, r.jsx)(s.Text, {
                                  color: 'text-positive',
                                  variant: 'text-sm/bold',
                                  children: p.intl.string(d.default.FFLkm5)
                              })
                          ]
                      }))
        ]
    });
}
function _(e) {
    let { guildId: n, powerup: t, className: i, onHover: c, children: d } = e,
        p = (0, a.Z)(n, t),
        x = (0, l.Z)(n, t),
        f = null != x || p,
        _ = (null == x ? void 0 : x.ends_at) != null,
        { onShowMore: v } = (0, u.ZP)(n, t);
    return (0, r.jsx)('div', {
        className: m.parentContainer,
        children: (0, r.jsx)(s.kL8, {
            'aria-label': t.title,
            onClick: v,
            onMouseOver: () => (null == c ? void 0 : c(!0)),
            onMouseLeave: () => (null == c ? void 0 : c(!1)),
            className: o()(
                m.container,
                {
                    [m.active]: f,
                    [m.warning]: _
                },
                i
            ),
            children: d
        })
    });
}
