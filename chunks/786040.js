n.d(t, {
    J7: () => N,
    LJ: () => w,
    SS: () => R,
    Zh: () => S,
    rC: () => P,
    tA: () => A,
    wO: () => C,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(979554),
    o = n(685816),
    s = n(399606),
    l = n(100527),
    c = n(906732),
    u = n(626135),
    d = n(597688),
    f = n(1870),
    _ = n(501678),
    p = n(994587),
    h = n(429368),
    m = n(237031),
    g = n(453713),
    E = n(201964),
    b = n(361110),
    y = n(956472),
    O = n(619899),
    v = n(642909),
    I = n(215023),
    T = n(981631),
    S = (function (e) {
        return (
            (e.NONE = "none"),
            (e.NEW = "new"),
            (e.ORBS_EXCLUSIVE = "orbs_exclusive"),
            (e.NEW_COLOR_VARIANT = "new_color_variant"),
            (e.LIMITED_TIME = "limited_time"),
            e
        );
    })({}),
    A = (function (e) {
        return (e.FIAT = "fiat"), (e.ORBS = "orbs"), e;
    })({});
let C = (e, t, n) => (r) => {
        u.default.track(T.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: null == n ? void 0 : n.sessionId,
            sku_id: e.skuId,
            page_type: t,
            page_section: null == n ? void 0 : n.pageSection,
            page_category: t === I.AW.HOME || null == n ? void 0 : n.pageCategory,
            page_index: t === I.AW.CATALOG ? (null == n ? void 0 : n.pageIndex) : void 0,
            page_size: t === I.AW.CATALOG ? (null == n ? void 0 : n.pageSize) : void 0,
            tile_type: a.Z[e.type],
            tile_position: String(null == n ? void 0 : n.tilePosition),
            cta_name: r,
        });
    },
    N = (e, t, n) => {
        let r = (0, p.Nd)(),
            a = null == r ? void 0 : r.tab,
            u = (0, _.Vc)(),
            f = null == u ? void 0 : u.blockType,
            { analyticsLocations: h } = (0, c.ZP)(l.Z.COLLECTIBLES_SHOP_CARD),
            g = (0, s.e7)([d.Z], () => d.Z.getCategoryForProduct(e.skuId)),
            E = i.useRef(null),
            b = (0, v.G)("useHandlePreviewClick"),
            O = null != f && f === o.z.HERO && b ? I.Ch.THUMBNAIL : I.Ch.DEFAULT;
        return i.useCallback(
            (t) => (r) => {
                if (null == g) return;
                let i = (0, y.oQ)({ product: e });
                (E.current = r.currentTarget),
                    null == n || n(),
                    (0, m.T)({
                        product: e,
                        category: g,
                        shouldCheckoutWithOrbs: i,
                        analyticsLocations: h,
                        analyticsSource: t,
                        returnRef: E,
                        tab: a,
                        variantType: O,
                    });
            },
            [e, a, g, h, O, n],
        )(t);
    },
    R = (e) => {
        let { previewingVariantIndex: t, handleEntering: n, handleLeaving: o } = (0, b.f)(e),
            l = (0, s.e7)([f.Z], () => f.Z.purchases),
            c = (0, h.o)(e, l),
            u = (0, E.o)(e, l, t),
            [d, _] = i.useState(!1);
        if (e.type === a.Z.VARIANTS_GROUP) {
            let i = (0, r.jsx)(g.P, {
                variantGroupProduct: e,
                previewingVariantIndexProps: {
                    previewingVariantIndex: t,
                    handleEntering: n,
                    handleLeaving: o,
                },
                selectedVariantIndex: c,
                setIsHoveringOnSwitch: _,
                minimal: !0,
                alternativeBackgroundColor: (null == u ? void 0 : u.type) === a.Z.PROFILE_EFFECT,
            });
            return [c, i];
        }
        return [c, null];
    },
    P = (e) => {
        if (null == e) return null;
        if (e.type === a.Z.VARIANTS_GROUP) {
            if (null == e.variants || 0 === e.variants.length) return null;
            let t = e.variants[0];
            if (null == t) return null;
            let [n] = t.items;
            return n.type;
        }
        return e.type;
    },
    w = (e) => {
        let t = (0, s.e7)([d.Z], () => d.Z.getCategoryForProduct(e)),
            n = null == t ? void 0 : t.products.find((t) => t.skuId === e);
        return (0, O.Cr)(n);
    };
