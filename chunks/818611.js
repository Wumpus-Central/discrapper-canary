n.d(t, { Z: () => C }), n(627341);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(278074),
    l = n(831209),
    u = n(399606),
    c = n(481060),
    d = n(727637),
    f = n(597688),
    _ = n(884697),
    p = n(74538),
    h = n(864106),
    m = n(439959),
    g = n(125988),
    E = n(388032),
    v = n(193263);
let y = 3,
    I = 80,
    T = 12,
    b = 16,
    S = () => I,
    A = (e) => {
        let { children: t, className: n, onSelect: r, isSelected: a = !1, ...o } = e;
        return (0, i.jsx)(c.P3F, {
            className: s()(v.decorationGridItem, a ? v.selected : void 0, n),
            ...o,
            onClick: r,
            children: t
        });
    },
    N = (e) => {
        let { user: t, avatarDecoration: n, innerRef: a, section: s, isSelected: o = !1, ...h } = e,
            y = (0, u.e7)([f.Z], () => {
                let e = f.Z.getProduct(n.skuId);
                return (0, _.G1)(e);
            }),
            T = (0, _.Yq)(n.skuId),
            b = p.ZP.canUseCollectibles(t),
            S = s === m.$0.PREMIUM_PURCHASE && !b,
            N = r.useRef(null),
            C = (0, d.Z)(null != a ? a : N),
            { avatarDecorationSrc: R } = (0, g.Z)({
                user: t,
                avatarDecorationOverride: n,
                size: I,
                onlyAnimateOnHover: !C
            }),
            O = () =>
                s === m.$0.PURCHASE || (s === m.$0.PREMIUM_PURCHASE && b)
                    ? null
                    : T
                      ? (0, i.jsx)(c.lBU, {
                            className: v.newBadge,
                            text: (0, i.jsxs)('div', {
                                className: v.newBadgeText,
                                children: [
                                    (0, i.jsx)(c.mBM, {
                                        size: 'xxs',
                                        color: 'currentColor'
                                    }),
                                    E.intl.string(E.t.y2b7CA)
                                ]
                            })
                        })
                      : (0, i.jsx)(c.G2e, {
                            icon: y
                                ? () =>
                                      (0, i.jsx)(c.SrA, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          width: 14,
                                          height: 14
                                      })
                                : () =>
                                      (0, i.jsx)(c.mBM, {
                                          size: 'xxs',
                                          color: 'currentColor'
                                      }),
                            color: l.Z.BACKGROUND_ACCENT,
                            className: v.iconBadge
                        });
        return (0, i.jsxs)(A, {
            className: S ? v.decorationGridItemChurned : void 0,
            innerRef: null != a ? a : N,
            isSelected: o,
            ...h,
            children: [
                (0, i.jsx)('img', {
                    className: v.presetDecorationImg,
                    src: R,
                    alt: n.label
                }),
                O()
            ]
        });
    },
    C = (e) => {
        let { user: t, guild: n, pendingAvatarDecoration: a, selectedAvatarDecorationRef: s, onSelect: l, onOpenShop: u } = e,
            d = (0, m.ZP)(),
            f = r.useCallback(() => {
                u(void 0);
            }, [u]),
            _ = (e, r, u, _) => {
                let { section: p, items: g } = d[e];
                return (0, o.EQ)(g[r])
                    .with(m.Tm, () =>
                        (0, i.jsxs)(
                            A,
                            {
                                style: { ...u },
                                isSelected: null === a,
                                onSelect: () => l(null),
                                children: [
                                    (0, i.jsx)(c.t6m, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: v.notAllowedIcon
                                    }),
                                    (0, i.jsx)(c.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'header-primary',
                                        children: (0, h.ad)(t, n) ? E.intl.string(E.t['GsW4/v']) : E.intl.string(E.t.PoWNfX)
                                    })
                                ]
                            },
                            _
                        )
                    )
                    .with(m.oT, () =>
                        (0, i.jsxs)(
                            A,
                            {
                                style: u,
                                onSelect: f,
                                children: [
                                    (0, i.jsx)(c.EOn, {
                                        size: 'custom',
                                        width: 23,
                                        height: 23,
                                        color: 'currentColor',
                                        className: v.shopIcon
                                    }),
                                    (0, i.jsx)(c.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'header-primary',
                                        children: E.intl.string(E.t.pWG4zc)
                                    })
                                ]
                            },
                            _
                        )
                    )
                    .otherwise((e) => {
                        let n = (null == a ? void 0 : a.id) === e.id;
                        return (0, i.jsx)(
                            N,
                            {
                                style: { ...u },
                                user: t,
                                avatarDecoration: e,
                                section: p,
                                innerRef: n ? s : void 0,
                                isSelected: n,
                                onSelect: () => l(e)
                            },
                            _
                        );
                    });
            },
            p = (e, t) => {
                let { header: n } = d[e];
                return (0, i.jsx)('div', {
                    className: v.headings,
                    style: {
                        ...t,
                        position: 'absolute'
                    },
                    children: (0, i.jsx)(c.y5t, {
                        forceLevel: 5,
                        children: (0, i.jsx)(c.X6q, {
                            variant: 'eyebrow',
                            color: 'header-secondary',
                            children: n
                        })
                    })
                });
            };
        return (0, i.jsx)(c.GMG, {
            fade: !0,
            className: v.list,
            columns: y,
            sections: d.map((e) => {
                let { items: t } = e;
                return t.length;
            }),
            sectionGutter: b,
            itemGutter: T,
            paddingHorizontal: T,
            paddingVertical: 0,
            removeEdgeItemGutters: !0,
            renderItem: _,
            renderSection: p,
            getSectionHeight: (e) => d[e].height,
            getItemKey: (e, t) => d[e].items[t].id,
            getItemHeight: S
        });
    };
