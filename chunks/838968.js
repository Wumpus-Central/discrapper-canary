t.d(n, {
    Z: () => v,
    u: () => _
});
var r = t(200651);
t(192379);
var o = t(120356),
    i = t.n(o),
    s = t(481060),
    a = t(413335),
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
            (0, r.jsx)(s.owK, {
                size: 'xs',
                color: s.TVs.colors.STATUS_WARNING
            }),
            (0, r.jsx)(s.Text, {
                color: 'status-warning',
                variant: 'text-sm/bold',
                children: p.NW.formatToMarkdownString(u.Z['ol/ao6'], { dateString: (0, c.Z)(n) })
            })
        ]
    });
}
function _(e) {
    let { guildId: n, powerup: t, className: o } = e,
        c = (0, l.Z)(n, t);
    return (0, r.jsxs)('div', {
        className: i()(m.labelContainer, o),
        children: [
            (0, r.jsxs)('div', {
                className: i()(m.inline, m.inlineBoost),
                children: [
                    (0, r.jsx)(a.Z, {}),
                    (0, r.jsx)(s.Text, {
                        tag: 'div',
                        variant: 'heading-md/bold',
                        children: t.cost
                    })
                ]
            }),
            null != c &&
                ((null == c ? void 0 : c.ends_at) != null
                    ? (0, r.jsx)(x, { dateString: c.ends_at })
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
                                  children: p.NW.string(u.Z.FFLkm5)
                              })
                          ]
                      }))
        ]
    });
}
function v(e) {
    let { guildId: n, powerup: t, className: o, children: a } = e,
        c = (0, l.Z)(n, t),
        u = null != c,
        p = (null == c ? void 0 : c.ends_at) != null,
        { onShowMore: x } = (0, d.ZP)(n, t);
    return (0, r.jsx)(s.kL8, {
        'aria-label': t.title,
        onClick: x,
        className: i()(
            m.container,
            {
                [m.active]: u,
                [m.warning]: p
            },
            o
        ),
        children: a
    });
}
