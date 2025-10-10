n.d(t, {
    J7: () => N,
    LJ: () => w,
    SS: () => R,
    Zh: () => A,
    oc: () => C,
    rC: () => P,
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
    d = n(381585),
    f = n(597688),
    _ = n(1870),
    p = n(501678),
    h = n(994587),
    m = n(429368),
    g = n(237031),
    E = n(453713),
    b = n(201964),
    y = n(361110),
    O = n(956472),
    v = n(619899),
    I = n(642909),
    T = n(215023),
    S = n(981631),
    A = (function (e) {
        return (
            (e.NONE = "none"),
            (e.NEW = "new"),
            (e.ORBS_EXCLUSIVE = "orbs_exclusive"),
            (e.NEW_COLOR_VARIANT = "new_color_variant"),
            (e.LIMITED_TIME = "limited_time"),
            e
        );
    })({});
let C = (e, t, n, r) => {
        u.default.track(S.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: null == n ? void 0 : n.sessionId,
            sku_id: e.skuId,
            page_type: t,
            page_section: null == n ? void 0 : n.pageSection,
            page_category: t === T.AW.HOME || null == n ? void 0 : n.pageCategory,
            page_index: t === T.AW.CATALOG ? (null == n ? void 0 : n.pageIndex) : void 0,
            page_size: t === T.AW.CATALOG ? (null == n ? void 0 : n.pageSize) : void 0,
            tile_type: a.Z[e.type],
            tile_position: String(null == n ? void 0 : n.tilePosition),
            cta_name: r,
        });
    },
    N = (e, t) => {
        let n = (0, h.Nd)(),
            r = null == n ? void 0 : n.tab,
            a = (0, p.Vc)(),
            u = null == a ? void 0 : a.blockType,
            _ = (0, d.sp)(),
            { analyticsLocations: m } = (0, c.ZP)(l.Z.COLLECTIBLES_SHOP_CARD),
            E = (0, s.e7)([f.Z], () => f.Z.getCategoryForProduct(e.skuId)),
            b = i.useRef(null),
            y = (0, I.G)("useHandlePreviewClick"),
            v = null != u && u === o.z.HERO && y ? T.Ch.THUMBNAIL : T.Ch.DEFAULT;
        return i.useCallback(
            (t) => (n) => {
                if (null == E) return;
                let i = (0, O.oQ)({ product: e });
                (b.current = n.currentTarget),
                    C(e, r, _, null),
                    (0, g.T)({
                        product: e,
                        category: E,
                        shouldCheckoutWithOrbs: i,
                        analyticsLocations: m,
                        analyticsSource: t,
                        returnRef: b,
                        tab: r,
                        variantType: v,
                    });
            },
            [e, r, E, m, _, v],
        )(t);
    },
    R = (e) => {
        let { previewingVariantIndex: t, handleEntering: n, handleLeaving: o } = (0, y.f)(e),
            l = (0, s.e7)([_.Z], () => _.Z.purchases),
            c = (0, m.o)(e, l),
            u = (0, b.o)(e, l, t),
            [d, f] = i.useState(!1);
        if (e.type === a.Z.VARIANTS_GROUP) {
            let i = (0, r.jsx)(E.P, {
                variantGroupProduct: e,
                previewingVariantIndexProps: {
                    previewingVariantIndex: t,
                    handleEntering: n,
                    handleLeaving: o,
                },
                selectedVariantIndex: c,
                setIsHoveringOnSwitch: f,
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
        let t = (0, s.e7)([f.Z], () => f.Z.getCategoryForProduct(e)),
            n = null == t ? void 0 : t.products.find((t) => t.skuId === e);
        return (0, v.Cr)(n);
    };
