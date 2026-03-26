n.d(t, { A: () => E });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    a = n(397927),
    c = n(927578),
    o = n(203632),
    d = n(181774),
    u = n(483968),
    m = n(496867),
    p = n(369742),
    f = n(985018),
    g = n(832765),
    x = n(423393);
let A = () => 80,
    h = (e) => {
        let { children: t, className: n, isSelected: i = !1, ...s } = e;
        return (0, r.jsx)(a.DUT, { className: l()(g.BP, n, { [g.wH]: i }), ...s, onClick: s.onSelect, children: t });
    },
    _ = (e) => {
        let { profileEffect: t, innerRef: n, section: s, isSelected: l, canUsePremiumCollectibles: a, ...c } = e,
            o = (0, m.V)(t.skuId),
            f = i.useRef(null),
            { accessibilityLabel: A, thumbnailPreviewSrc: _, title: E } = o?.config ?? {},
            y = i.useMemo(() => (0, d.Rc)(_), [_]);
        return (0, r.jsxs)(h, {
            innerRef: n ?? f,
            isSelected: l,
            ...c,
            children: [
                (0, r.jsx)("img", { src: x.A, alt: A, className: g.rQ }),
                (0, r.jsx)("img", { className: g.Wv, src: y, alt: E }),
                (0, r.jsx)(u.A, {
                    skuId: t.skuId,
                    canUsePremiumCollectibles: a,
                    isPurchaseSection: s === p.wn.PURCHASE,
                    isPremiumSection: s === p.wn.PREMIUM_PURCHASE,
                }),
            ],
        });
    },
    E = (e) => {
        let { user: t, guild: n, pendingProfileEffect: i, selectedProfileEffectRef: s, onSelect: l, onOpenShop: d } = e,
            u = (0, p.Ay)(),
            m = null != i,
            x = c.Ay.canUseCollectibles(t);
        return (0, r.jsx)("section", {
            className: g.uW,
            children: (0, r.jsx)(a.a0_, {
                fade: !0,
                itemGutter: 12,
                sectionGutter: 16,
                paddingVertical: 0,
                paddingHorizontal: 12,
                className: g.p_,
                columns: 3,
                sections: u.map((e) => {
                    let { items: t } = e;
                    return t.length;
                }),
                renderItem: (e, t, c, A) => {
                    let { section: E, items: y } = u[e],
                        C = y[t];
                    if (C === p.dP)
                        return (0, r.jsxs)(
                            h,
                            {
                                style: { ...c },
                                isSelected: !m,
                                onSelect: () => l(null),
                                children: [
                                    (0, r.jsx)(a.KTN, { size: "md", color: "currentColor", className: g.vo }),
                                    (0, r.jsx)(a.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-strong",
                                        children: null != n ? f.intl.string(f.t.CHf9iJ) : f.intl.string(f.t.PoWNfe),
                                    }),
                                ],
                            },
                            A,
                        );
                    if (C === p.ZK)
                        return (0, r.jsxs)(
                            h,
                            {
                                style: c,
                                onSelect: d,
                                children: [
                                    (0, r.jsx)(a.U1X, {
                                        size: "custom",
                                        width: 23,
                                        height: 23,
                                        color: "currentColor",
                                        className: g.sV,
                                    }),
                                    (0, r.jsx)(a.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-strong",
                                        children: f.intl.string(f.t.pWG4ze),
                                    }),
                                ],
                            },
                            A,
                        );
                    if ((0, o.C)(C)) {
                        let e = i?.skuId === C.skuId;
                        return (0, r.jsx)(
                            _,
                            {
                                style: { ...c },
                                section: E,
                                profileEffect: C,
                                innerRef: e ? s : void 0,
                                isSelected: e,
                                onSelect: () => l(C),
                                canUsePremiumCollectibles: x,
                            },
                            A,
                        );
                    }
                    return null;
                },
                renderSection: (e, t) => {
                    let { header: n } = u[e];
                    return (0, r.jsx)("div", {
                        style: { ...t, height: "16px", position: "absolute" },
                        children: (0, r.jsx)(a.Heading, { variant: "heading-md/medium", children: n }),
                    });
                },
                getSectionHeight: () => 16,
                getItemKey: (e, t) => u[e].items[t].skuId,
                getItemHeight: A,
                removeEdgeItemGutters: !0,
            }),
        });
    };
