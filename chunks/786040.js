n.d(t, {
    $l: () => E,
    J7: () => I,
    LJ: () => S,
    Zh: () => y,
    jB: () => b,
    rC: () => T,
    tA: () => O,
    wO: () => v,
    zp: () => m,
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
    _ = n(619899),
    p = n(215023),
    h = n(981631);
let m = r.createContext({ flattenProductVariants: !1 });
function g() {
    return r.useContext(m).flattenProductVariants;
}
function E() {
    return r.useContext(m).isRental;
}
function b() {
    var e;
    return null != (e = r.useContext(m).rentalDuration) ? e : 0;
}
var y = (function (e) {
        return (
            (e.NONE = "none"),
            (e.NEW = "new"),
            (e.ORBS_EXCLUSIVE = "orbs_exclusive"),
            (e.LIMITED_TIME = "limited_time"),
            (e.NITRO_EXCLUSIVE = "nitro_exclusive"),
            (e.ONE_DAY_RENTAL = "one_day_rental"),
            (e.THREE_DAY_RENTAL = "three_day_rental"),
            e
        );
    })({}),
    O = (function (e) {
        return (e.FIAT = "fiat"), (e.ORBS = "orbs"), e;
    })({});
let v = (e, t, n) => (r) => {
        l.default.track(h.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: null == n ? void 0 : n.sessionId,
            sku_id: e.skuId,
            page_type: t,
            page_section: null == n ? void 0 : n.pageSection,
            page_category: t === p.AW.HOME || null == n ? void 0 : n.pageCategory,
            page_index: t === p.AW.CATALOG ? (null == n ? void 0 : n.pageIndex) : void 0,
            page_size: t === p.AW.CATALOG ? (null == n ? void 0 : n.pageSize) : void 0,
            tile_type: i.Z[e.type],
            tile_position: String(null == n ? void 0 : n.tilePosition),
            cta_name: r,
        });
    },
    I = (e, t, n, i, l) => {
        let _ = (0, u.Nd)(),
            p = null == _ ? void 0 : _.tab,
            { analyticsLocations: h } = (0, s.ZP)(o.Z.COLLECTIBLES_SHOP_CARD),
            m = (0, a.e7)([c.Z], () => c.Z.getCategoryForProduct(e.skuId)),
            g = r.useRef(null);
        return r.useCallback(
            (t) => (r) => {
                if (null == m) return;
                let a = (0, f.oQ)({ product: e });
                (g.current = r.currentTarget),
                    null == n || n(),
                    (0, d.T)({
                        product: e,
                        category: m,
                        shouldCheckoutWithOrbs: a,
                        analyticsLocations: h,
                        analyticsSource: t,
                        returnRef: g,
                        tab: p,
                        isRental: i,
                        rentalDuration: l,
                    });
            },
            [e, p, m, h, n, i, l],
        )(t);
    },
    T = (e) => {
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
    S = (e) => {
        let t = g(),
            n = (0, a.e7)([c.Z], () => {
                var n;
                return t
                    ? c.Z.getProduct(e)
                    : null == (n = c.Z.getCategoryForProduct(e))
                      ? void 0
                      : n.products.find((t) => t.skuId === e);
            });
        return (0, _.Cr)(n);
    };
