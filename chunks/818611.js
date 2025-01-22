var i = r(627341);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(278074),
    c = r(831209),
    d = r(399606),
    f = r(481060),
    p = r(727637),
    h = r(597688),
    _ = r(884697),
    m = r(74538),
    g = r(864106),
    E = r(439959),
    v = r(125988),
    y = r(388032),
    b = r(274495);
let I = 3,
    T = 80,
    S = 12,
    A = 16,
    C = () => T,
    N = (e) => {
        let { children: n, className: r, onSelect: i, isSelected: o = !1, ...s } = e;
        return (0, a.jsx)(f.Clickable, {
            className: l()(b.decorationGridItem, o ? b.selected : void 0, r),
            ...s,
            onClick: i,
            children: n
        });
    },
    R = (e) => {
        let { user: n, avatarDecoration: r, innerRef: i, section: s, isSelected: l = !1, ...u } = e,
            g = (0, d.e7)([h.Z], () => {
                let e = h.Z.getProduct(r.skuId);
                return (0, _.G1)(e);
            }),
            I = (0, _.Yq)(r.skuId),
            S = m.ZP.canUseCollectibles(n),
            A = s === E.$0.PREMIUM_PURCHASE && !S,
            C = o.useRef(null),
            R = (0, p.Z)(null != i ? i : C),
            { avatarDecorationSrc: O } = (0, v.Z)({
                user: n,
                avatarDecorationOverride: r,
                size: T,
                onlyAnimateOnHover: !R
            }),
            D = () =>
                s === E.$0.PURCHASE || (s === E.$0.PREMIUM_PURCHASE && S)
                    ? null
                    : I
                      ? (0, a.jsx)(f.PremiumBadge, {
                            className: b.newBadge,
                            text: (0, a.jsxs)('div', {
                                className: b.newBadgeText,
                                children: [
                                    (0, a.jsx)(f.LockIcon, {
                                        size: 'xxs',
                                        color: 'currentColor'
                                    }),
                                    y.intl.string(y.t.y2b7CA)
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
                            className: b.iconBadge
                        });
        return (0, a.jsxs)(N, {
            className: A ? b.decorationGridItemChurned : void 0,
            innerRef: null != i ? i : C,
            isSelected: l,
            ...u,
            children: [
                (0, a.jsx)('img', {
                    className: b.presetDecorationImg,
                    src: O,
                    alt: r.label
                }),
                D()
            ]
        });
    },
    O = (e) => {
        let { user: n, guild: r, pendingAvatarDecoration: i, selectedAvatarDecorationRef: s, onSelect: l, onOpenShop: c } = e,
            d = (0, E.ZP)(),
            p = o.useCallback(() => {
                c(void 0);
            }, [c]),
            h = (e, o, c, h) => {
                let { section: _, items: m } = d[e];
                return (0, u.EQ)(m[o])
                    .with(E.Tm, () =>
                        (0, a.jsxs)(
                            N,
                            {
                                style: { ...c },
                                isSelected: null === i,
                                onSelect: () => l(null),
                                children: [
                                    (0, a.jsx)(f.DenyIcon, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: b.notAllowedIcon
                                    }),
                                    (0, a.jsx)(f.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'header-primary',
                                        children: (0, g.ad)(n, r) ? y.intl.string(y.t['GsW4/v']) : y.intl.string(y.t.PoWNfX)
                                    })
                                ]
                            },
                            h
                        )
                    )
                    .with(E.oT, () =>
                        (0, a.jsxs)(
                            N,
                            {
                                style: c,
                                onSelect: p,
                                children: [
                                    (0, a.jsx)(f.ShopIcon, {
                                        size: 'custom',
                                        width: 23,
                                        height: 23,
                                        color: 'currentColor',
                                        className: b.shopIcon
                                    }),
                                    (0, a.jsx)(f.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'header-primary',
                                        children: y.intl.string(y.t.pWG4zc)
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
                                section: _,
                                innerRef: r ? s : void 0,
                                isSelected: r,
                                onSelect: () => l(e)
                            },
                            h
                        );
                    });
            },
            _ = (e, n) => {
                let { header: r } = d[e];
                return (0, a.jsx)('div', {
                    className: b.headings,
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
            className: b.list,
            columns: I,
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
            renderSection: _,
            getSectionHeight: (e) => d[e].height,
            getItemKey: (e, n) => d[e].items[n].id,
            getItemHeight: C
        });
    };
n.Z = O;
