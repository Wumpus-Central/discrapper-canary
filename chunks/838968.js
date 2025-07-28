(n.d(t, {
    Z: () => E,
    u: () => j
}),
    n(388685));
var r = n(255367),
    o = n(73800),
    i = n(120356),
    l = n.n(i),
    s = n(481060),
    a = n(434650),
    c = n(10765),
    u = n(973772),
    d = n(192371),
    p = n(834209),
    m = n(69323),
    f = n(279604),
    _ = n(535396),
    x = n(93841),
    g = n(388032),
    v = n(117172);
function b(e) {
    let { dateString: t } = e;
    return (0, r.jsxs)('div', {
        className: v.inline,
        children: [
            (0, r.jsx)(s.Mgn, {
                size: 'xs',
                color: s.TVs.colors.STATUS_WARNING
            }),
            (0, r.jsx)(s.Text, {
                color: 'status-warning',
                variant: 'text-sm/bold',
                children: g.intl.formatToMarkdownString(x.default['ol/ao6'], { dateString: (0, d.Z)(t) })
            })
        ]
    });
}
function j(e) {
    var t, n, o;
    let { guildId: i, powerup: a, className: d } = e,
        m = (0, u.Z)(i, a),
        f = m.type !== _.A3.LEVEL_ACTIVATED,
        j = f ? v.labelContainer : v.labelContainerEnd,
        E = (0, c.Z)(i, a, 'GuildPowerupCardBodyFooter'),
        h = m.type === _.A3.LEVEL_ACTIVATED ? g.intl.formatToPlainString(x.default.WRRYUV, { perkName: null != (o = null == (t = m.sourcePowerup) ? void 0 : t.title) ? o : g.intl.string(g.t.BfF6EB) }) : m.type === _.A3.POWERUP_ACTIVATED ? g.intl.string(x.default.FFLkm5) : void 0;
    return (0, r.jsxs)('div', {
        className: l()(j, d),
        children: [
            f &&
                (0, r.jsxs)('div', {
                    className: l()(v.inline, v.inlineBoost),
                    children: [
                        (0, r.jsx)(s.$Eu, {
                            size: 'sm',
                            color: s.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
                        }),
                        (0, r.jsx)(s.Text, {
                            className: v.price,
                            tag: 'div',
                            variant: 'heading-md/semibold',
                            color: 'text-secondary',
                            children: g.intl.formatToPlainString(g.t.t2Wbo6, { required: a.cost })
                        })
                    ]
                }),
            (null == (n = m.sourceEntitlement) ? void 0 : n.ends_at) != null
                ? (0, r.jsx)(b, { dateString: m.sourceEntitlement.ends_at })
                : E && null != a.storeRemovalDate
                  ? (0, r.jsxs)('div', {
                        className: v.rollbackInline,
                        children: [
                            (0, r.jsx)(s.Mgn, {
                                size: 'xs',
                                color: s.TVs.colors.STATUS_WARNING
                            }),
                            (0, r.jsx)(s.Text, {
                                color: 'status-warning',
                                variant: 'text-sm/bold',
                                children: g.intl.formatToPlainString(x.default['6e2ry8'], { dateString: (0, p.Z)(a.storeRemovalDate) })
                            })
                        ]
                    })
                  : null != h
                    ? (0, r.jsxs)('div', {
                          className: v.inline,
                          children: [
                              (0, r.jsx)(s.owK, {
                                  size: 'xs',
                                  color: s.TVs.colors.STATUS_POSITIVE
                              }),
                              (0, r.jsx)(s.Text, {
                                  color: 'text-feedback-positive',
                                  variant: 'text-sm/bold',
                                  children: h
                              })
                          ]
                      })
                    : null
        ]
    });
}
function E(e) {
    var t;
    let { guildId: n, powerup: i, className: d, onHover: p, children: x } = e,
        g = (0, u.Z)(n, i),
        b = g.type !== _.A3.INACTIVE,
        j = (null == (t = g.sourceEntitlement) ? void 0 : t.ends_at) != null,
        E = (0, c.Z)(n, i, 'GuildPowerupCard'),
        h = o.useRef(null),
        { onShowMore: C } = (0, f.ZP)(n, i),
        [I, N] = o.useState(!1),
        O = (0, a.O)(N, 1);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                className: l()(v.parentContainer, { [v.rollbackInactive]: E && !b }),
                ref: (e) => {
                    ((h.current = e), (O.current = e));
                },
                children: (0, r.jsx)(s.kL8, {
                    'aria-label': i.title,
                    onClick: C,
                    onMouseOver: () => (null == p ? void 0 : p(!0)),
                    onMouseLeave: () => (null == p ? void 0 : p(!1)),
                    className: l()(
                        v.container,
                        {
                            [v.active]: b,
                            [v.warning]: j || (E && b)
                        },
                        d
                    ),
                    children: x
                })
            }),
            !E &&
                (0, r.jsx)(m.Z, {
                    powerup: i,
                    targetRef: h,
                    isCardVisible: I
                })
        ]
    });
}
