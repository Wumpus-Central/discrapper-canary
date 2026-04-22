"use strict";
r.d(t, { A: () => y });
var i = r(627968),
    n = r(64700),
    s = r(503698),
    a = r.n(s),
    l = r(939249),
    c = r(428678),
    o = r(834730),
    d = r(34188),
    u = r(534514),
    p = r(42286),
    _ = r(927578),
    f = r(203632),
    h = r(181774),
    m = r(483968),
    g = r(942426),
    A = r(369742),
    b = r(985018),
    v = r(302509),
    x = r(423393);
let I = () => 80,
    E = (e) => {
        let { children: t, className: r, isSelected: n, ...s } = e;
        return (0, i.jsx)(l.D, {
            "aria-pressed": n,
            className: a()(v.BP, r, { [v.wH]: n }),
            ...s,
            onClick: s.onSelect,
            children: t,
        });
    },
    C = (e) => {
        let { skuId: t, innerRef: r, section: s, isSelected: a, canUsePremiumCollectibles: l, ...c } = e,
            o = (0, g.A)(t),
            d = n.useRef(null),
            { accessibilityLabel: u, thumbnailPreviewSrc: p, title: _ } = o ?? {},
            f = n.useMemo(() => (0, h.Rc)(p), [p]);
        return (0, i.jsxs)(E, {
            innerRef: r ?? d,
            isSelected: a,
            ...c,
            children: [
                (0, i.jsx)("img", { src: x.A, alt: u, className: v.rQ }),
                (0, i.jsx)("img", { className: v.Wv, src: f, alt: _ }),
                (0, i.jsx)(m.A, {
                    skuId: t,
                    canUsePremiumCollectibles: l,
                    isPurchaseSection: s === A.wn.PURCHASE,
                    isPremiumSection: s === A.wn.PREMIUM_PURCHASE,
                }),
            ],
        });
    },
    y = (e) => {
        let { user: t, guild: r, pendingProfileEffect: n, selectedProfileEffectRef: s, onSelect: a, onOpenShop: l } = e,
            h = (0, A.Ay)(),
            m = null != n,
            g = _.Ay.canUseCollectibles(t);
        return (0, i.jsx)("section", {
            className: v.uW,
            children: (0, i.jsx)(p.f, {
                fade: !0,
                itemGutter: 12,
                sectionGutter: 16,
                paddingVertical: 0,
                paddingHorizontal: 12,
                className: v.p_,
                columns: 3,
                sections: h.map((e) => {
                    let { items: t } = e;
                    return t.length;
                }),
                renderItem: (e, t, u, p) => {
                    let { section: _, items: x } = h[e],
                        I = x[t];
                    if (I === A.dP)
                        return (0, i.jsxs)(
                            E,
                            {
                                style: { ...u },
                                isSelected: !m,
                                onSelect: () => a(null),
                                children: [
                                    (0, i.jsx)(c.K, { size: "md", color: "currentColor", className: v.vo }),
                                    (0, i.jsx)(o.E, {
                                        variant: "text-xs/normal",
                                        color: "text-strong",
                                        children: null != r ? b.intl.string(b.t.CHf9iJ) : b.intl.string(b.t.PoWNfe),
                                    }),
                                ],
                            },
                            p,
                        );
                    if (I === A.ZK)
                        return (0, i.jsxs)(
                            E,
                            {
                                style: u,
                                onSelect: l,
                                children: [
                                    (0, i.jsx)(d.U, {
                                        size: "custom",
                                        width: 23,
                                        height: 23,
                                        color: "currentColor",
                                        className: v.sV,
                                    }),
                                    (0, i.jsx)(o.E, {
                                        variant: "text-xs/normal",
                                        color: "text-strong",
                                        children: b.intl.string(b.t.pWG4ze),
                                    }),
                                ],
                            },
                            p,
                        );
                    if ((0, f.C3)(I)) {
                        let e = n?.skuId === I.skuId;
                        return (0, i.jsx)(
                            C,
                            {
                                style: { ...u },
                                section: _,
                                skuId: I.skuId,
                                innerRef: e ? s : void 0,
                                isSelected: e,
                                onSelect: () => a(I),
                                canUsePremiumCollectibles: g,
                            },
                            p,
                        );
                    }
                    return null;
                },
                renderSection: (e, t) => {
                    let { header: r } = h[e];
                    return (0, i.jsx)("div", {
                        style: { ...t, height: "16px", position: "absolute" },
                        children: (0, i.jsx)(u.D, { variant: "heading-md/medium", children: r }),
                    });
                },
                getSectionHeight: () => 16,
                getItemKey: (e, t) => h[e].items[t].skuId,
                getItemHeight: I,
                removeEdgeItemGutters: !0,
            }),
        });
    };
