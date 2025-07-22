(n.d(t, {
    Z: () => b,
    u: () => g
}),
    n(388685));
var r = n(255367),
    o = n(73800),
    i = n(120356),
    s = n.n(i),
    l = n(481060),
    a = n(434650),
    c = n(973772),
    u = n(192371),
    d = n(69323),
    p = n(279604),
    m = n(535396),
    f = n(93841),
    _ = n(388032),
    x = n(117172);
function v(e) {
    let { dateString: t } = e;
    return (0, r.jsxs)('div', {
        className: x.inline,
        children: [
            (0, r.jsx)(l.P4T, {
                size: 'xs',
                color: l.TVs.colors.STATUS_WARNING
            }),
            (0, r.jsx)(l.Text, {
                color: 'status-warning',
                variant: 'text-sm/bold',
                children: _.intl.formatToMarkdownString(f.default['ol/ao6'], { dateString: (0, u.Z)(t) })
            })
        ]
    });
}
function g(e) {
    var t, n, o;
    let { guildId: i, powerup: a, className: u } = e,
        d = (0, c.Z)(i, a),
        p = d.type !== m.A3.LEVEL_ACTIVATED,
        g = p ? x.labelContainer : x.labelContainerEnd,
        b = d.type === m.A3.LEVEL_ACTIVATED ? _.intl.formatToPlainString(f.default.WRRYUV, { perkName: null != (o = null == (t = d.sourcePowerup) ? void 0 : t.title) ? o : _.intl.string(_.t.BfF6EB) }) : d.type === m.A3.POWERUP_ACTIVATED ? _.intl.string(f.default.FFLkm5) : void 0;
    return (0, r.jsxs)('div', {
        className: s()(g, u),
        children: [
            p &&
                (0, r.jsxs)('div', {
                    className: s()(x.inline, x.inlineBoost),
                    children: [
                        (0, r.jsx)(l.$Eu, {
                            size: 'sm',
                            color: l.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
                        }),
                        (0, r.jsx)(l.Text, {
                            className: x.price,
                            tag: 'div',
                            variant: 'heading-md/semibold',
                            color: 'text-secondary',
                            children: _.intl.formatToPlainString(_.t.t2Wbo6, { required: a.cost })
                        })
                    ]
                }),
            (null == (n = d.sourceEntitlement) ? void 0 : n.ends_at) != null
                ? (0, r.jsx)(v, { dateString: d.sourceEntitlement.ends_at })
                : null != b
                  ? (0, r.jsxs)('div', {
                        className: x.inline,
                        children: [
                            (0, r.jsx)(l.owK, {
                                size: 'xs',
                                color: l.TVs.colors.STATUS_POSITIVE
                            }),
                            (0, r.jsx)(l.Text, {
                                color: 'text-feedback-positive',
                                variant: 'text-sm/bold',
                                children: b
                            })
                        ]
                    })
                  : null
        ]
    });
}
function b(e) {
    var t;
    let { guildId: n, powerup: i, className: u, onHover: f, children: _ } = e,
        v = (0, c.Z)(n, i),
        g = v.type !== m.A3.INACTIVE,
        b = (null == (t = v.sourceEntitlement) ? void 0 : t.ends_at) != null,
        j = o.useRef(null),
        { onShowMore: E } = (0, p.ZP)(n, i),
        [h, C] = o.useState(!1),
        I = (0, a.O)(C, 1);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                className: x.parentContainer,
                ref: (e) => {
                    ((j.current = e), (I.current = e));
                },
                children: (0, r.jsx)(l.kL8, {
                    'aria-label': i.title,
                    onClick: E,
                    onMouseOver: () => (null == f ? void 0 : f(!0)),
                    onMouseLeave: () => (null == f ? void 0 : f(!1)),
                    className: s()(
                        x.container,
                        {
                            [x.active]: g,
                            [x.warning]: b
                        },
                        u
                    ),
                    children: _
                })
            }),
            (0, r.jsx)(d.Z, {
                powerup: i,
                targetRef: j,
                isCardVisible: h
            })
        ]
    });
}
