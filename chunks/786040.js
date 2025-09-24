n.d(t, {
    J7: () => O,
    SS: () => T,
    oc: () => v,
    rC: () => y,
}),
    n(388685);
var r = n(951288),
    l = n(647438),
    a = n(979554),
    i = n(685816),
    s = n(399606),
    o = n(100527),
    c = n(906732),
    u = n(626135),
    d = n(381585),
    g = n(597688),
    p = n(1870),
    f = n(429368),
    h = n(237031),
    C = n(453713),
    _ = n(201964),
    m = n(361110),
    b = n(956472),
    E = n(642909),
    S = n(215023),
    x = n(981631);
let v = (e, t, n, r) => {
        u.default.track(x.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: null == n ? void 0 : n.sessionId,
            sku_id: e.skuId,
            page_type: t,
            page_section: null == n ? void 0 : n.pageSection,
            page_category: t === S.AW.HOME || null == n ? void 0 : n.pageCategory,
            page_index: t === S.AW.CATALOG ? (null == n ? void 0 : n.pageIndex) : void 0,
            page_size: t === S.AW.CATALOG ? (null == n ? void 0 : n.pageSize) : void 0,
            tile_type: a.Z[e.type],
            tile_position: String(null == n ? void 0 : n.tilePosition),
            cta_name: r,
        });
    },
    O = (e, t, n) => {
        let r = (0, d.sp)(),
            { analyticsLocations: a } = (0, c.ZP)(o.Z.COLLECTIBLES_SHOP_CARD),
            u = (0, s.e7)([g.Z], () => g.Z.getCategoryForProduct(e.skuId)),
            p = l.useRef(null),
            f = (0, E.G)("useHandlePreviewClick"),
            C = null != t.shopBlockType && t.shopBlockType === i.z.HERO && f ? S.Ch.THUMBNAIL : S.Ch.DEFAULT;
        return l.useCallback(
            (n) => (l) => {
                if (null == u) return;
                let i = (0, b.oQ)({ product: e });
                (p.current = l.currentTarget),
                    v(e, t.tab, r, null),
                    (0, h.T)({
                        product: e,
                        category: u,
                        shouldCheckoutWithOrbs: i,
                        analyticsLocations: a,
                        analyticsSource: n,
                        returnRef: p,
                        tab: t.tab,
                        variantType: C,
                    });
            },
            [e, t.tab, u, a, r, C],
        )(n);
    },
    T = (e) => {
        let { previewingVariantIndex: t, handleEntering: n, handleLeaving: i } = (0, m.f)(e),
            o = (0, s.e7)([p.Z], () => p.Z.purchases),
            c = (0, f.o)(e, o),
            u = (0, _.o)(e, o, t),
            [d, g] = l.useState(!1);
        if (e.type === a.Z.VARIANTS_GROUP) {
            let l = (0, r.jsx)(C.P, {
                variantGroupProduct: e,
                previewingVariantIndexProps: {
                    previewingVariantIndex: t,
                    handleEntering: n,
                    handleLeaving: i,
                },
                selectedVariantIndex: c,
                setIsHoveringOnSwitch: g,
                minimal: !0,
                alternativeBackgroundColor: (null == u ? void 0 : u.type) === a.Z.PROFILE_EFFECT,
            });
            return [c, l];
        }
        return [c, null];
    },
    y = (e) => {
        if (null == e) return null;
        if (e.type === a.Z.VARIANTS_GROUP) {
            if (null == e.variants || 0 === e.variants.length) return null;
            let t = e.variants[0];
            if (null == t) return null;
            let [n] = t.items;
            return n.type;
        }
        return e.type;
    };
