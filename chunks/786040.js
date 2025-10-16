n.d(t, {
    J7: () => v,
    LJ: () => T,
    Zh: () => b,
    rC: () => I,
    tA: () => y,
    wO: () => O,
}),
    n(388685);
var r = n(647438),
    i = n(979554),
    a = n(685816),
    o = n(399606),
    s = n(100527),
    l = n(906732),
    c = n(626135),
    u = n(597688),
    d = n(501678),
    f = n(994587),
    _ = n(237031),
    p = n(956472),
    h = n(619899),
    m = n(642909),
    g = n(215023),
    E = n(981631),
    b = (function (e) {
        return (
            (e.NONE = "none"),
            (e.NEW = "new"),
            (e.ORBS_EXCLUSIVE = "orbs_exclusive"),
            (e.NEW_COLOR_VARIANT = "new_color_variant"),
            (e.LIMITED_TIME = "limited_time"),
            e
        );
    })({}),
    y = (function (e) {
        return (e.FIAT = "fiat"), (e.ORBS = "orbs"), e;
    })({});
let O = (e, t, n) => (r) => {
        c.default.track(E.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: null == n ? void 0 : n.sessionId,
            sku_id: e.skuId,
            page_type: t,
            page_section: null == n ? void 0 : n.pageSection,
            page_category: t === g.AW.HOME || null == n ? void 0 : n.pageCategory,
            page_index: t === g.AW.CATALOG ? (null == n ? void 0 : n.pageIndex) : void 0,
            page_size: t === g.AW.CATALOG ? (null == n ? void 0 : n.pageSize) : void 0,
            tile_type: i.Z[e.type],
            tile_position: String(null == n ? void 0 : n.tilePosition),
            cta_name: r,
        });
    },
    v = (e, t, n) => {
        let i = (0, f.Nd)(),
            c = null == i ? void 0 : i.tab,
            h = (0, d.Vc)(),
            E = null == h ? void 0 : h.blockType,
            { analyticsLocations: b } = (0, l.ZP)(s.Z.COLLECTIBLES_SHOP_CARD),
            y = (0, o.e7)([u.Z], () => u.Z.getCategoryForProduct(e.skuId)),
            O = r.useRef(null),
            v = (0, m.G)("useHandlePreviewClick"),
            I = null != E && E === a.z.HERO && v ? g.Ch.THUMBNAIL : g.Ch.DEFAULT;
        return r.useCallback(
            (t) => (r) => {
                if (null == y) return;
                let i = (0, p.oQ)({ product: e });
                (O.current = r.currentTarget),
                    null == n || n(),
                    (0, _.T)({
                        product: e,
                        category: y,
                        shouldCheckoutWithOrbs: i,
                        analyticsLocations: b,
                        analyticsSource: t,
                        returnRef: O,
                        tab: c,
                        variantType: I,
                    });
            },
            [e, c, y, b, I, n],
        )(t);
    },
    I = (e) => {
        if (null == e) return null;
        if (e.type === i.Z.VARIANTS_GROUP) {
            if (null == e.variants || 0 === e.variants.length) return null;
            let t = e.variants[0];
            if (null == t) return null;
            let [n] = t.items;
            return n.type;
        }
        return e.type;
    },
    T = (e) => {
        let t = (0, o.e7)([u.Z], () => u.Z.getCategoryForProduct(e)),
            n = null == t ? void 0 : t.products.find((t) => t.skuId === e);
        return (0, h.Cr)(n);
    };
