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
    d = t(680278),
    u = t(388032),
    p = t(117172);
function m(e) {
    let { dateString: n } = e;
    return (0, r.jsxs)('div', {
        className: p.inline,
        children: [
            (0, r.jsx)(i.owK, {
                size: 'xs',
                color: i.TVs.colors.STATUS_WARNING
            }),
            (0, r.jsx)(i.Text, {
                color: 'status-warning',
                variant: 'text-sm/bold',
                children: u.NW.formatToMarkdownString(d.Z['ol/ao6'], { dateString: (0, l.Z)(n) })
            })
        ]
    });
}
function x(e) {
    let { guildId: n, powerup: t, className: o } = e,
        l = (0, a.Z)(n, t);
    return (0, r.jsxs)('div', {
        className: s()(p.labelContainer, o),
        children: [
            (0, r.jsxs)('div', {
                className: s()(p.inline, p.inlineBoost),
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
                    ? (0, r.jsx)(m, { dateString: l.ends_at })
                    : (0, r.jsxs)('div', {
                          className: p.inline,
                          children: [
                              (0, r.jsx)(i.owK, {
                                  size: 'xs',
                                  color: i.TVs.colors.STATUS_POSITIVE
                              }),
                              (0, r.jsx)(i.Text, {
                                  color: 'text-positive',
                                  variant: 'text-sm/bold',
                                  children: u.NW.string(d.Z.FFLkm5)
                              })
                          ]
                      }))
        ]
    });
}
function _(e) {
    let { guildId: n, powerup: t, className: o, children: l } = e,
        d = (0, a.Z)(n, t),
        u = null != d,
        m = (null == d ? void 0 : d.ends_at) != null,
        { onShowMore: x } = (0, c.ZP)(n, t);
    return (0, r.jsx)(i.kL8, {
        'aria-label': t.title,
        onClick: x,
        className: s()(
            p.container,
            {
                [p.active]: u,
                [p.warning]: m
            },
            o
        ),
        children: l
    });
}
