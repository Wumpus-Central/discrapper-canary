t.d(n, {
    Z: () => v,
    u: () => _
});
var r = t(200651);
t(192379);
var o = t(120356),
    s = t.n(o),
    i = t(481060),
    a = t(477415),
    l = t(690786),
    c = t(192371),
    d = t(279604),
    u = t(680278),
    p = t(388032),
    m = t(117172);
function x(e) {
    let { dateString: n } = e;
    return (0, r.jsxs)('div', {
        className: m.inline,
        children: [
            (0, r.jsx)(i.owK, {
                size: 'xs',
                color: i.TVs.colors.STATUS_WARNING
            }),
            (0, r.jsx)(i.Text, {
                color: 'status-warning',
                variant: 'text-sm/bold',
                children: p.NW.formatToMarkdownString(u.Z['ol/ao6'], { dateString: (0, c.Z)(n) })
            })
        ]
    });
}
function _(e) {
    let { guildId: n, powerup: t, className: o } = e,
        a = (0, l.Z)(n, t);
    return (0, r.jsxs)('div', {
        className: s()(m.labelContainer, o),
        children: [
            (0, r.jsxs)('div', {
                className: s()(m.inline, m.inlineBoost),
                children: [
                    (0, r.jsx)(i.$Eu, {
                        size: 'sm',
                        color: i.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
                    }),
                    (0, r.jsx)(i.Text, {
                        tag: 'div',
                        variant: 'heading-md/bold',
                        children: t.cost
                    })
                ]
            }),
            null != a &&
                ((null == a ? void 0 : a.ends_at) != null
                    ? (0, r.jsx)(x, { dateString: a.ends_at })
                    : (0, r.jsxs)('div', {
                          className: m.inline,
                          children: [
                              (0, r.jsx)(i.owK, {
                                  size: 'xs',
                                  color: i.TVs.colors.STATUS_POSITIVE
                              }),
                              (0, r.jsx)(i.Text, {
                                  color: 'text-positive',
                                  variant: 'text-sm/bold',
                                  children: p.NW.string(u.Z.FFLkm5)
                              })
                          ]
                      }))
        ]
    });
}
function v(e) {
    let { guildId: n, powerup: t, className: o, onHover: c, children: u } = e,
        p = (0, a.Z)(n, t),
        x = (0, l.Z)(n, t),
        _ = null != x || p,
        v = (null == x ? void 0 : x.ends_at) != null,
        { onShowMore: f } = (0, d.ZP)(n, t);
    return (0, r.jsx)('div', {
        className: m.parentContainer,
        children: (0, r.jsx)(i.kL8, {
            'aria-label': t.title,
            onClick: f,
            onMouseOver: () => (null == c ? void 0 : c(!0)),
            onMouseLeave: () => (null == c ? void 0 : c(!1)),
            className: s()(
                m.container,
                {
                    [m.active]: _,
                    [m.warning]: v
                },
                o
            ),
            children: u
        })
    });
}
