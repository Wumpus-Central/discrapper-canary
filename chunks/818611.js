var i = r(627341);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(278074),
    c = r(831209),
    d = r(399606),
    f = r(481060),
    _ = r(727637),
    h = r(597688),
    p = r(884697),
    m = r(74538),
    g = r(864106),
    E = r(439959),
    v = r(125988),
    I = r(388032),
    T = r(274495);
let b = 3,
    y = 80,
    S = 12,
    A = 16,
    N = () => y,
    C = (e) => {
        let { children: n, className: r, onSelect: i, isSelected: s = !1, ...o } = e;
        return (0, a.jsx)(f.Clickable, {
            className: l()(T.decorationGridItem, s ? T.selected : void 0, r),
            ...o,
            onClick: i,
            children: n
        });
    },
    R = (e) => {
        let { user: n, avatarDecoration: r, innerRef: i, section: o, isSelected: l = !1, ...u } = e,
            g = (0, d.e7)([h.Z], () => {
                let e = h.Z.getProduct(r.skuId);
                return (0, p.G1)(e);
            }),
            b = (0, p.Yq)(r.skuId),
            S = m.ZP.canUseCollectibles(n),
            A = o === E.$0.PREMIUM_PURCHASE && !S,
            N = s.useRef(null),
            R = (0, _.Z)(null != i ? i : N),
            { avatarDecorationSrc: O } = (0, v.Z)({
                user: n,
                avatarDecorationOverride: r,
                size: y,
                onlyAnimateOnHover: !R
            }),
            D = () =>
                o === E.$0.PURCHASE || (o === E.$0.PREMIUM_PURCHASE && S)
                    ? null
                    : b
                      ? (0, a.jsx)(f.PremiumBadge, {
                            className: T.newBadge,
                            text: (0, a.jsxs)('div', {
                                className: T.newBadgeText,
                                children: [
                                    (0, a.jsx)(f.LockIcon, {
                                        size: 'xxs',
                                        color: 'currentColor'
                                    }),
                                    I.intl.string(I.t.y2b7CA)
                                ]
                            })
                        })
                      : (0, a.jsx)(f.IconBadge, {
                            icon: g
                                ? () =>
                                      (0, a.jsx)(f.NitroWheelIcon, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          width: 14,
                                          height: 14
                                      })
                                : () =>
                                      (0, a.jsx)(f.LockIcon, {
                                          size: 'xxs',
                                          color: 'currentColor'
                                      }),
                            color: c.Z.BACKGROUND_ACCENT,
                            className: T.iconBadge
                        });
        return (0, a.jsxs)(C, {
            className: A ? T.decorationGridItemChurned : void 0,
            innerRef: null != i ? i : N,
            isSelected: l,
            ...u,
            children: [
                (0, a.jsx)('img', {
                    className: T.presetDecorationImg,
                    src: O,
                    alt: r.label
                }),
                D()
            ]
        });
    },
    O = (e) => {
        let { user: n, guild: r, pendingAvatarDecoration: i, selectedAvatarDecorationRef: o, onSelect: l, onOpenShop: c } = e,
            d = (0, E.ZP)(),
            _ = s.useCallback(() => {
                c(void 0);
            }, [c]),
            h = (e, s, c, h) => {
                let { section: p, items: m } = d[e];
                return (0, u.EQ)(m[s])
                    .with(E.Tm, () =>
                        (0, a.jsxs)(
                            C,
                            {
                                style: { ...c },
                                isSelected: null === i,
                                onSelect: () => l(null),
                                children: [
                                    (0, a.jsx)(f.DenyIcon, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: T.notAllowedIcon
                                    }),
                                    (0, a.jsx)(f.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'header-primary',
                                        children: (0, g.ad)(n, r) ? I.intl.string(I.t['GsW4/v']) : I.intl.string(I.t.PoWNfX)
                                    })
                                ]
                            },
                            h
                        )
                    )
                    .with(E.oT, () =>
                        (0, a.jsxs)(
                            C,
                            {
                                style: c,
                                onSelect: _,
                                children: [
                                    (0, a.jsx)(f.ShopIcon, {
                                        size: 'custom',
                                        width: 23,
                                        height: 23,
                                        color: 'currentColor',
                                        className: T.shopIcon
                                    }),
                                    (0, a.jsx)(f.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'header-primary',
                                        children: I.intl.string(I.t.pWG4zc)
                                    })
                                ]
                            },
                            h
                        )
                    )
                    .otherwise((e) => {
                        let r = (null == i ? void 0 : i.id) === e.id;
                        return (0, a.jsx)(
                            R,
                            {
                                style: { ...c },
                                user: n,
                                avatarDecoration: e,
                                section: p,
                                innerRef: r ? o : void 0,
                                isSelected: r,
                                onSelect: () => l(e)
                            },
                            h
                        );
                    });
            },
            p = (e, n) => {
                let { header: r } = d[e];
                return (0, a.jsx)('div', {
                    className: T.headings,
                    style: {
                        ...n,
                        position: 'absolute'
                    },
                    children: (0, a.jsx)(f.HeadingLevel, {
                        forceLevel: 5,
                        children: (0, a.jsx)(f.Heading, {
                            variant: 'eyebrow',
                            color: 'header-secondary',
                            children: r
                        })
                    })
                });
            };
        return (0, a.jsx)(f.MasonryList, {
            fade: !0,
            className: T.list,
            columns: b,
            sections: d.map((e) => {
                let { items: n } = e;
                return n.length;
            }),
            sectionGutter: A,
            itemGutter: S,
            paddingHorizontal: S,
            paddingVertical: 0,
            removeEdgeItemGutters: !0,
            renderItem: h,
            renderSection: p,
            getSectionHeight: (e) => d[e].height,
            getItemKey: (e, n) => d[e].items[n].id,
            getItemHeight: N
        });
    };
n.Z = O;
