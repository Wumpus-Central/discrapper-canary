t.d(n, {
    Z: () => _,
    u: () => x
});
var r = t(200651);
t(192379);
var o = t(120356),
    s = t.n(o),
    i = t(481060),
    a = t(690786),
    l = t(192371),
    c = t(279604),
    u = t(680278),
    d = t(388032),
    m = t(117172);
function p(e) {
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
                children: d.NW.formatToMarkdownString(u.Z['ol/ao6'], { dateString: (0, l.Z)(n) })
            })
        ]
    });
}
function x(e) {
    let { guildId: n, powerup: t, className: o } = e,
        l = (0, a.Z)(n, t);
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
            null != l &&
                ((null == l ? void 0 : l.ends_at) != null
                    ? (0, r.jsx)(p, { dateString: l.ends_at })
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
                                  children: d.NW.string(u.Z.FFLkm5)
                              })
                          ]
                      }))
        ]
    });
}
function _(e) {
    let { guildId: n, powerup: t, className: o, children: l } = e,
        u = (0, a.Z)(n, t),
        d = null != u,
        p = (null == u ? void 0 : u.ends_at) != null,
        { onShowMore: x } = (0, c.ZP)(n, t);
    return (0, r.jsx)(i.kL8, {
        'aria-label': t.title,
        onClick: x,
        className: s()(
            m.container,
            {
                [m.active]: d,
                [m.warning]: p
            },
            o
        ),
        children: l
    });
}
