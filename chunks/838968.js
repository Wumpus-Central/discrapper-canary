t.d(n, {
    Z: () => x,
    u: () => f
});
var r = t(255367);
t(73800);
var i = t(120356),
    o = t.n(i),
    a = t(481060),
    s = t(477415),
    l = t(690786),
    c = t(192371),
    d = t(279604),
    u = t(93841),
    p = t(388032),
    m = t(117172);
function _(e) {
    let { dateString: n } = e;
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
                children: p.intl.formatToMarkdownString(u.default['ol/ao6'], { dateString: (0, c.Z)(n) })
            })
        ]
    });
}
function f(e) {
    let { guildId: n, powerup: t, className: i } = e,
        s = (0, l.Z)(n, t);
    return (0, r.jsxs)('div', {
        className: o()(m.labelContainer, i),
        children: [
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
                        children: p.intl.formatToPlainString(p.t.t2Wbo6, { required: t.cost })
                    })
                ]
            }),
            null != s &&
                ((null == s ? void 0 : s.ends_at) != null
                    ? (0, r.jsx)(_, { dateString: s.ends_at })
                    : (0, r.jsxs)('div', {
                          className: m.inline,
                          children: [
                              (0, r.jsx)(a.owK, {
                                  size: 'xs',
                                  color: a.TVs.colors.STATUS_POSITIVE
                              }),
                              (0, r.jsx)(a.Text, {
                                  color: 'text-feedback-positive',
                                  variant: 'text-sm/bold',
                                  children: p.intl.string(u.default.FFLkm5)
                              })
                          ]
                      }))
        ]
    });
}
function x(e) {
    let { guildId: n, powerup: t, className: i, onHover: c, children: u } = e,
        p = (0, s.Z)(n, t),
        _ = (0, l.Z)(n, t),
        f = null != _ || p,
        x = (null == _ ? void 0 : _.ends_at) != null,
        { onShowMore: b } = (0, d.ZP)(n, t);
    return (0, r.jsx)('div', {
        className: m.parentContainer,
        children: (0, r.jsx)(a.kL8, {
            'aria-label': t.title,
            onClick: b,
            onMouseOver: () => (null == c ? void 0 : c(!0)),
            onMouseLeave: () => (null == c ? void 0 : c(!1)),
            className: o()(
                m.container,
                {
                    [m.active]: f,
                    [m.warning]: x
                },
                i
            ),
            children: u
        })
    });
}
