(n.d(t, {
    Z: () => h,
    u: () => E
}),
    n(388685));
var r = n(255367),
    o = n(73800),
    i = n(120356),
    l = n.n(i),
    s = n(481060),
    a = n(434650),
    c = n(10765),
    u = n(639777),
    d = n(973772),
    p = n(192371),
    m = n(834209),
    f = n(69323),
    _ = n(279604),
    x = n(535396),
    g = n(93841),
    v = n(388032),
    b = n(117172);
function j(e) {
    let { dateString: t } = e;
    return (0, r.jsxs)('div', {
        className: b.inline,
        children: [
            (0, r.jsx)(s.Mgn, {
                size: 'xs',
                color: s.TVs.colors.STATUS_WARNING
            }),
            (0, r.jsx)(s.Text, {
                color: 'status-warning',
                variant: 'text-sm/bold',
                children: v.intl.formatToMarkdownString(g.default['ol/ao6'], { dateString: (0, p.Z)(t) })
            })
        ]
    });
}
function E(e) {
    var t, n, o;
    let { guildId: i, powerup: a, className: u } = e,
        p = (0, d.Z)(i, a),
        f = p.type !== x.A3.LEVEL_ACTIVATED,
        _ = f ? b.labelContainer : b.labelContainerEnd,
        E = (0, c.Z)(i, a, 'GuildPowerupCardBodyFooter'),
        h = p.type === x.A3.LEVEL_ACTIVATED ? v.intl.formatToPlainString(g.default.WRRYUV, { perkName: null != (o = null == (t = p.sourcePowerup) ? void 0 : t.title) ? o : v.intl.string(v.t.BfF6EB) }) : p.type === x.A3.POWERUP_ACTIVATED ? v.intl.string(g.default.FFLkm5) : void 0;
    return (0, r.jsxs)('div', {
        className: l()(_, u),
        children: [
            f &&
                (0, r.jsxs)('div', {
                    className: l()(b.inline, b.inlineBoost),
                    children: [
                        (0, r.jsx)(s.$Eu, {
                            size: 'sm',
                            color: s.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
                        }),
                        (0, r.jsx)(s.Text, {
                            className: b.price,
                            tag: 'div',
                            variant: 'heading-md/semibold',
                            color: 'text-secondary',
                            children: v.intl.formatToPlainString(v.t.t2Wbo6, { required: a.cost })
                        })
                    ]
                }),
            (null == (n = p.sourceEntitlement) ? void 0 : n.ends_at) != null
                ? (0, r.jsx)(j, { dateString: p.sourceEntitlement.ends_at })
                : E && null != a.storeRemovalDate
                  ? (0, r.jsxs)('div', {
                        className: b.rollbackInline,
                        children: [
                            (0, r.jsx)(s.Mgn, {
                                size: 'xs',
                                color: s.TVs.colors.STATUS_WARNING
                            }),
                            (0, r.jsx)(s.Text, {
                                color: 'status-warning',
                                variant: 'text-sm/bold',
                                children: v.intl.formatToPlainString(g.default['6e2ry8'], { dateString: (0, m.Z)(a.storeRemovalDate) })
                            })
                        ]
                    })
                  : null != h
                    ? (0, r.jsxs)('div', {
                          className: b.inline,
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
function h(e) {
    var t;
    let { guildId: n, powerup: i, className: p, onHover: m, children: g } = e,
        v = (0, u.Z)(n),
        j = (0, d.Z)(n, i),
        E = j.type !== x.A3.INACTIVE,
        h = (null == (t = j.sourceEntitlement) ? void 0 : t.ends_at) != null,
        C = (0, c.Z)(n, i, 'GuildPowerupCard'),
        I = o.useRef(null),
        { onShowMore: N } = (0, _.ZP)(n, i),
        [O, Z] = o.useState(!1),
        P = (0, a.O)(Z, 1);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                className: l()(b.parentContainer, { [b.rollbackInactive]: C && !E }),
                ref: (e) => {
                    ((I.current = e), (P.current = e));
                },
                children: (0, r.jsx)(s.kL8, {
                    'aria-label': i.title,
                    onClick: N,
                    onMouseOver: () => (null == m ? void 0 : m(!0)),
                    onMouseLeave: () => (null == m ? void 0 : m(!1)),
                    className: l()(
                        b.container,
                        {
                            [b.active]: E,
                            [b.warning]: h || (C && E)
                        },
                        p
                    ),
                    children: g
                })
            }),
            !C &&
                v &&
                (0, r.jsx)(f.Z, {
                    powerup: i,
                    targetRef: I,
                    isCardVisible: O
                })
        ]
    });
}
