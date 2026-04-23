n.d(t, { A: () => v });
var r = n(627968),
    s = n(64700),
    i = n(503698),
    l = n.n(i),
    a = n(939249),
    o = n(428678),
    c = n(834730),
    d = n(34188),
    u = n(534514),
    m = n(42286),
    p = n(927578),
    f = n(203632),
    g = n(181774),
    h = n(483968),
    x = n(942426),
    A = n(369742),
    _ = n(985018),
    E = n(302509),
    C = n(423393);
let j = () => 80,
    y = (e) => {
        let { children: t, className: n, isSelected: s, ...i } = e;
        return (0, r.jsx)(a.D, {
            "aria-pressed": s,
            className: l()(E.BP, n, { [E.wH]: s }),
            ...i,
            onClick: i.onSelect,
            children: t,
        });
    },
    I = (e) => {
        let { skuId: t, innerRef: n, section: i, isSelected: l, canUsePremiumCollectibles: a, ...o } = e,
            c = (0, x.A)(t),
            d = s.useRef(null),
            { accessibilityLabel: u, thumbnailPreviewSrc: m, title: p } = c ?? {},
            f = s.useMemo(() => (0, g.Rc)(m), [m]);
        return (0, r.jsxs)(y, {
            innerRef: n ?? d,
            isSelected: l,
            ...o,
            children: [
                (0, r.jsx)("img", { src: C.A, alt: u, className: E.rQ }),
                (0, r.jsx)("img", { className: E.Wv, src: f, alt: p }),
                (0, r.jsx)(h.A, {
                    skuId: t,
                    canUsePremiumCollectibles: a,
                    isPurchaseSection: i === A.wn.PURCHASE,
                    isPremiumSection: i === A.wn.PREMIUM_PURCHASE,
                }),
            ],
        });
    },
    v = (e) => {
        let { user: t, guild: n, pendingProfileEffect: s, selectedProfileEffectRef: i, onSelect: l, onOpenShop: a } = e,
            g = (0, A.Ay)(),
            h = null != s,
            x = p.Ay.canUseCollectibles(t);
        return (0, r.jsx)("section", {
            className: E.uW,
            children: (0, r.jsx)(m.f, {
                fade: !0,
                itemGutter: 12,
                sectionGutter: 16,
                paddingVertical: 0,
                paddingHorizontal: 12,
                className: E.p_,
                columns: 3,
                sections: g.map((e) => {
                    let { items: t } = e;
                    return t.length;
                }),
                renderItem: (e, t, u, m) => {
                    let { section: p, items: C } = g[e],
                        j = C[t];
                    if (j === A.dP)
                        return (0, r.jsxs)(
                            y,
                            {
                                style: { ...u },
                                isSelected: !h,
                                onSelect: () => l(null),
                                children: [
                                    (0, r.jsx)(o.K, { size: "md", color: "currentColor", className: E.vo }),
                                    (0, r.jsx)(c.E, {
                                        variant: "text-xs/normal",
                                        color: "text-strong",
                                        children: null != n ? _.intl.string(_.t.CHf9iJ) : _.intl.string(_.t.PoWNfe),
                                    }),
                                ],
                            },
                            m,
                        );
                    if (j === A.ZK)
                        return (0, r.jsxs)(
                            y,
                            {
                                style: u,
                                onSelect: a,
                                children: [
                                    (0, r.jsx)(d.U, {
                                        size: "custom",
                                        width: 23,
                                        height: 23,
                                        color: "currentColor",
                                        className: E.sV,
                                    }),
                                    (0, r.jsx)(c.E, {
                                        variant: "text-xs/normal",
                                        color: "text-strong",
                                        children: _.intl.string(_.t.pWG4ze),
                                    }),
                                ],
                            },
                            m,
                        );
                    if ((0, f.C3)(j)) {
                        let e = s?.skuId === j.skuId;
                        return (0, r.jsx)(
                            I,
                            {
                                style: { ...u },
                                section: p,
                                skuId: j.skuId,
                                innerRef: e ? i : void 0,
                                isSelected: e,
                                onSelect: () => l(j),
                                canUsePremiumCollectibles: x,
                            },
                            m,
                        );
                    }
                    return null;
                },
                renderSection: (e, t) => {
                    let { header: n } = g[e];
                    return (0, r.jsx)("div", {
                        style: { ...t, height: "16px", position: "absolute" },
                        children: (0, r.jsx)(u.D, { variant: "heading-md/medium", children: n }),
                    });
                },
                getSectionHeight: () => 16,
                getItemKey: (e, t) => g[e].items[t].skuId,
                getItemHeight: j,
                removeEdgeItemGutters: !0,
            }),
        });
    };
