n.d(t, {
    J7: () => v,
    LJ: () => I,
    Zh: () => b,
    jB: () => E,
    rC: () => S,
    tA: () => y,
    wO: () => O,
    zp: () => h,
}),
    n(388685);
var r = n(473749),
    i = n(979554),
    a = n(399606),
    o = n(100527),
    s = n(906732),
    l = n(626135),
    c = n(597688),
    u = n(994587),
    d = n(237031),
    f = n(956472),
    p = n(619899),
    _ = n(215023),
    m = n(981631);
let h = r.createContext({ flattenProductVariants: !1 });
function g() {
    return r.useContext(h).flattenProductVariants;
}
function E() {
    return r.useContext(h).rentalDuration;
}
var b = (function (e) {
        return (
            (e.NONE = "none"),
            (e.NEW = "new"),
            (e.ORBS_EXCLUSIVE = "orbs_exclusive"),
            (e.LIMITED_TIME = "limited_time"),
            (e.NITRO_EXCLUSIVE = "nitro_exclusive"),
            (e.THREE_DAY_RENTAL = "three_day_rental"),
            (e.SEVEN_DAY_RENTAL = "seven_day_rental"),
            (e.RENTAL = "rental"),
            e
        );
    })({}),
    y = (function (e) {
        return (e.FIAT = "fiat"), (e.ORBS = "orbs"), e;
    })({});
let O = (e, t, n) => (r) => {
        l.default.track(m.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: null == n ? void 0 : n.sessionId,
            sku_id: e.skuId,
            page_type: t,
            page_section: null == n ? void 0 : n.pageSection,
            page_category: t === _.AW.HOME || null == n ? void 0 : n.pageCategory,
            page_index: t === _.AW.CATALOG ? (null == n ? void 0 : n.pageIndex) : void 0,
            page_size: t === _.AW.CATALOG ? (null == n ? void 0 : n.pageSize) : void 0,
            tile_type: i.Z[e.type],
            tile_position: String(null == n ? void 0 : n.tilePosition),
            cta_name: r,
        });
    },
    v = (e, t, n, i) => {
        let l = (0, u.Nd)(),
            p = null == l ? void 0 : l.tab,
            { analyticsLocations: _ } = (0, s.ZP)(o.Z.COLLECTIBLES_SHOP_CARD),
            m = (0, a.e7)([c.Z], () => c.Z.getCategoryForProduct(e.skuId)),
            h = r.useRef(null);
        return r.useCallback(
            (t) => (r) => {
                if (null == m) return;
                let a = (0, f.oQ)({ product: e });
                (h.current = r.currentTarget),
                    null == n || n(),
                    (0, d.T)({
                        product: e,
                        category: m,
                        shouldCheckoutWithOrbs: a,
                        analyticsLocations: _,
                        analyticsSource: t,
                        returnRef: h,
                        tab: p,
                        rentalDuration: i,
                    });
            },
            [e, p, m, _, n, i],
        )(t);
    },
    S = (e) => {
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
    I = (e) => {
        let t = g(),
            n = (0, a.e7)([c.Z], () => {
                var n;
                return t
                    ? c.Z.getProduct(e)
                    : null == (n = c.Z.getCategoryForProduct(e))
                      ? void 0
                      : n.products.find((t) => t.skuId === e);
            });
        return (0, p.Cr)(n);
    };
