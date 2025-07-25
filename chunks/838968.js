(n.d(t, {
    Z: () => E,
    u: () => j
}),
    n(388685));
var r = n(255367),
    o = n(73800),
    i = n(120356),
    s = n.n(i),
    l = n(481060),
    a = n(434650),
    c = n(10765),
    u = n(973772),
    d = n(192371),
    p = n(834209),
    m = n(69323),
    f = n(279604),
    _ = n(535396),
    x = n(93841),
    v = n(388032),
    g = n(117172);
function b(e) {
    let { dateString: t } = e;
    return (0, r.jsxs)('div', {
        className: g.inline,
        children: [
            (0, r.jsx)(l.P4T, {
                size: 'xs',
                color: l.TVs.colors.STATUS_WARNING
            }),
            (0, r.jsx)(l.Text, {
                color: 'status-warning',
                variant: 'text-sm/bold',
                children: v.intl.formatToMarkdownString(x.default['ol/ao6'], { dateString: (0, d.Z)(t) })
            })
        ]
    });
}
function j(e) {
    var t, n, o;
    let { guildId: i, powerup: a, className: d } = e,
        m = (0, u.Z)(i, a),
        f = m.type !== _.A3.LEVEL_ACTIVATED,
        j = f ? g.labelContainer : g.labelContainerEnd,
        E = (0, c.Z)(i, a, 'GuildPowerupCardBodyFooter'),
        h = m.type === _.A3.LEVEL_ACTIVATED ? v.intl.formatToPlainString(x.default.WRRYUV, { perkName: null != (o = null == (t = m.sourcePowerup) ? void 0 : t.title) ? o : v.intl.string(v.t.BfF6EB) }) : m.type === _.A3.POWERUP_ACTIVATED ? v.intl.string(x.default.FFLkm5) : void 0;
    return (0, r.jsxs)('div', {
        className: s()(j, d),
        children: [
            f &&
                (0, r.jsxs)('div', {
                    className: s()(g.inline, g.inlineBoost),
                    children: [
                        (0, r.jsx)(l.$Eu, {
                            size: 'sm',
                            color: l.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
                        }),
                        (0, r.jsx)(l.Text, {
                            className: g.price,
                            tag: 'div',
                            variant: 'heading-md/semibold',
                            color: 'text-secondary',
                            children: v.intl.formatToPlainString(v.t.t2Wbo6, { required: a.cost })
                        })
                    ]
                }),
            (null == (n = m.sourceEntitlement) ? void 0 : n.ends_at) != null
                ? (0, r.jsx)(b, { dateString: m.sourceEntitlement.ends_at })
                : E && null != a.storeRemovalDate
                  ? (0, r.jsxs)('div', {
                        className: g.rollbackInline,
                        children: [
                            (0, r.jsx)(l.P4T, {
                                size: 'xs',
                                color: l.TVs.colors.STATUS_WARNING
                            }),
                            (0, r.jsx)(l.Text, {
                                color: 'status-warning',
                                variant: 'text-sm/bold',
                                children: v.intl.formatToPlainString(x.default['6e2ry8'], { dateString: (0, p.Z)(a.storeRemovalDate) })
                            })
                        ]
                    })
                  : null != h
                    ? (0, r.jsxs)('div', {
                          className: g.inline,
                          children: [
                              (0, r.jsx)(l.owK, {
                                  size: 'xs',
                                  color: l.TVs.colors.STATUS_POSITIVE
                              }),
                              (0, r.jsx)(l.Text, {
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
        v = (0, u.Z)(n, i),
        b = v.type !== _.A3.INACTIVE,
        j = (null == (t = v.sourceEntitlement) ? void 0 : t.ends_at) != null,
        E = (0, c.Z)(n, i, 'GuildPowerupCard'),
        h = o.useRef(null),
        { onShowMore: C } = (0, f.ZP)(n, i),
        [I, N] = o.useState(!1),
        Z = (0, a.O)(N, 1);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                className: s()(g.parentContainer, { [g.rollbackInactive]: E && !b }),
                ref: (e) => {
                    ((h.current = e), (Z.current = e));
                },
                children: (0, r.jsx)(l.kL8, {
                    'aria-label': i.title,
                    onClick: C,
                    onMouseOver: () => (null == p ? void 0 : p(!0)),
                    onMouseLeave: () => (null == p ? void 0 : p(!1)),
                    className: s()(
                        g.container,
                        {
                            [g.active]: b,
                            [g.warning]: j || (E && b)
                        },
                        d
                    ),
                    children: x
                })
            }),
            (0, r.jsx)(m.Z, {
                powerup: i,
                targetRef: h,
                isCardVisible: I
            })
        ]
    });
}
