n.d(t, {
    J7: () => O,
    LJ: () => I,
    Zh: () => E,
    rC: () => v,
    tA: () => b,
    wO: () => y,
    zp: () => m,
}),
    n(388685);
var r = n(647438),
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
var E = (function (e) {
        return (
            (e.NONE = "none"),
            (e.NEW = "new"),
            (e.ORBS_EXCLUSIVE = "orbs_exclusive"),
            (e.LIMITED_TIME = "limited_time"),
            e
        );
    })({}),
    b = (function (e) {
        return (e.FIAT = "fiat"), (e.ORBS = "orbs"), e;
    })({});
let y = (e, t, n) => (r) => {
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
    O = (e, t, n) => {
        let i = (0, u.Nd)(),
            l = null == i ? void 0 : i.tab,
            { analyticsLocations: _ } = (0, s.ZP)(o.Z.COLLECTIBLES_SHOP_CARD),
            p = (0, a.e7)([c.Z], () => c.Z.getCategoryForProduct(e.skuId)),
            h = r.useRef(null);
        return r.useCallback(
            (t) => (r) => {
                if (null == p) return;
                let i = (0, f.oQ)({ product: e });
                (h.current = r.currentTarget),
                    null == n || n(),
                    (0, d.T)({
                        product: e,
                        category: p,
                        shouldCheckoutWithOrbs: i,
                        analyticsLocations: _,
                        analyticsSource: t,
                        returnRef: h,
                        tab: l,
                    });
            },
            [e, l, p, _, n],
        )(t);
    },
    v = (e) => {
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
        return (0, _.Cr)(n);
    };
