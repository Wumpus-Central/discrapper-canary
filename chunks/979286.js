"use strict";
n.d(t, {
    BX: () => F,
    CK: () => O,
    Cz: () => v,
    JJ: () => P,
    Jp: () => L,
    LX: () => k,
    Og: () => M,
    Or: () => G,
    RD: () => b,
    RE: () => w,
    Sw: () => C,
    gB: () => D,
    gn: () => R,
    h$: () => U,
    iJ: () => x,
    ue: () => V,
});
var r = n(782111),
    i = n(148803),
    a = n(635358),
    s = n(562465),
    o = n(73153);
n(398590);
var l = n(198982),
    u = n(865116);
n(250953);
var c = n(976860),
    d = n(773669),
    _ = n(590180),
    f = n(752447),
    p = n(4227),
    h = n(355889),
    m = n(526751),
    g = n(986630),
    E = n(739380),
    A = n(360148),
    I = n(100057),
    T = n(181774),
    y = n(18572);
n(758836);
var S = n(652215);
n(870216), n(457421), n(295811);
let v = (e) => {
        let { tab: t, ...r } = e;
        {
            let { default: e } = n(12901);
            C(r), e(), (0, c.pX)(t ? S.BVt.COLLECTIBLES_SHOP_WITH_TAB(t) : S.BVt.COLLECTIBLES_SHOP);
        }
    },
    C = (e) => {
        o.h.dispatch({ type: "COLLECTIBLES_SHOP_OPEN", ...e });
    },
    b = (e) => {
        o.h.dispatch({ type: "COLLECTIBLES_PRODUCT_DETAILS_OPEN", skuId: e });
    },
    N = (e, t) => !!e == !!t,
    R = (e, t) =>
        N(e?.noCache, t?.noCache) &&
        N(e?.includeUnpublished, t?.includeUnpublished) &&
        N(e?.includeBundles, t?.includeBundles) &&
        N(e?.includeDynamicBlocks, t?.includeDynamicBlocks) &&
        e?.countryCode === t?.countryCode &&
        e?.paymentGateway === t?.paymentGateway &&
        e?.shopHomeConfig === t?.shopHomeConfig &&
        e?.skipNumCategories === t?.skipNumCategories,
    O = async (e, t, n) => {
        o.h.dispatch({ type: "COLLECTIBLES_CATEGORIES_FETCH", options: e ?? {} });
        let r = (0, T.ao)(e),
            i = u.Ay.get("shop_show_debug_overlay");
        e?.logPerf &&
            (0, I.z)({
                sessionId: n?.sessionId,
                checkpoint: I.t.CATEGORIES_FETCH_STARTED,
                tab: n?.tab,
                unpublishedCategoriesShown: e?.includeUnpublished,
                cacheDisabled: e?.noCache,
            }),
            i && (0, f.l)(`fetchCollectiblesCategories started: ${JSON.stringify(r, null, 2)}`);
        try {
            let a = await s.Bo.get({ url: S.Rsh.COLLECTIBLES_CATEGORIES_V2, query: r, rejectWithError: !0 });
            e?.logPerf &&
                (0, I.z)({
                    sessionId: n?.sessionId,
                    checkpoint: I.t.CATEGORIES_FETCH_COMPLETED,
                    tab: n?.tab,
                    unpublishedCategoriesShown: e?.includeUnpublished,
                    cacheDisabled: e?.noCache,
                }),
                i && (0, f.l)(`fetchCollectiblesCategories completed ${a.body.categories.length} categories`),
                o.h.dispatch({
                    type: "COLLECTIBLES_CATEGORIES_FETCH_SUCCESS",
                    categories: h.x.fromServer(a.body),
                    noOp: t,
                });
        } catch (t) {
            let e = new l.LG(t);
            (0, y.o)(e),
                o.h.dispatch({ type: "COLLECTIBLES_CATEGORIES_FETCH_FAILURE", error: e }),
                i && (0, f.l)(`fetchCollectiblesCategories failed: ${e.message}`);
        }
    },
    D = async (e) => {
        if (p.A.isFetching) return;
        o.h.dispatch({ type: "COLLECTIBLES_PURCHASES_FETCH" });
        let t = u.Ay.get("shop_show_debug_overlay");
        t && (0, f.l)(`fetchCollectiblesPurchases started, options: ${JSON.stringify(e, null, 2)}`);
        try {
            let n = { url: S.Rsh.COLLECTIBLES_PURCHASES, rejectWithError: !0 };
            e?.variantsReturnStyle === a.g.VARIANTS_GROUP && (n.query = { variants_return_style: a.g.VARIANTS_GROUP }),
                t && (0, f.l)(`fetchCollectiblesPurchases request: ${JSON.stringify(n, null, 2)}`);
            let r = await s.Bo.get(n);
            t && (0, f.l)(`fetchCollectiblesPurchases completed with ${r.body.length} purchases`),
                o.h.dispatch({ type: "COLLECTIBLES_PURCHASES_FETCH_SUCCESS", purchases: r.body.map(E.A.fromServer) });
        } catch (n) {
            let e = new l.LG(n);
            throw (
                ((0, y.o)(e),
                t && (0, f.l)(`fetchCollectiblesPurchases failed: ${e.message}`),
                o.h.dispatch({ type: "COLLECTIBLES_PURCHASES_FETCH_FAILURE", error: e }),
                e)
            );
        }
    },
    L = async (e, t) => {
        o.h.dispatch({ type: "COLLECTIBLES_PRODUCT_FETCH", skuId: e });
        try {
            let n = { locale: d.default.locale };
            t?.countryCode !== null && (n.country_code = t?.countryCode),
                t?.paymentGateway !== null && (n.payment_gateway = t?.paymentGateway),
                t?.includeBundles !== null && (n.include_bundles = t?.includeBundles);
            let r = await s.Bo.get({ url: S.Rsh.COLLECTIBLES_PRODUCTS(e), rejectWithError: !0, query: n });
            o.h.dispatch({ type: "COLLECTIBLES_PRODUCT_FETCH_SUCCESS", skuId: e, product: g.A.fromServer(r.body) });
        } catch (n) {
            let t = new l.LG(n);
            (0, y.o)(t), o.h.dispatch({ type: "COLLECTIBLES_PRODUCT_FETCH_FAILURE", skuId: e, error: t });
        }
    },
    w = async (e, t) => {
        _.A.isFetchingProduct(e) || (await L(e, t));
    },
    x = async (e) => {
        o.h.dispatch({ type: "COLLECTIBLES_CLAIM", skuId: e });
        try {
            let t = await s.Bo.put({ url: S.Rsh.COLLECTIBLES_CLAIM, body: { sku_id: e }, rejectWithError: !0 });
            o.h.dispatch({ type: "COLLECTIBLES_CLAIM_SUCCESS", skuId: e, purchases: t.body?.map(E.A.fromServer) });
        } catch (n) {
            let t = new l.LG(n);
            throw (o.h.dispatch({ type: "COLLECTIBLES_CLAIM_FAILURE", skuId: e, error: t }), t);
        }
    },
    P = async (e, t) => {
        try {
            return (
                await s.Bo.get({
                    url: S.Rsh.COLLECTIBLES_VALID_GIFT_RECIPIENT,
                    query: { sku_id: t, recipient_id: e },
                    rejectWithError: !0,
                })
            ).body.valid;
        } catch (e) {
            return (0, y.o)(new l.LG(e)), !1;
        }
    },
    M = async (e, t) => {
        try {
            return (
                await s.Bo.get({
                    url: S.Rsh.COLLECTIBLES_VALID_GIFT_RECIPIENTS_BATCH,
                    query: { sku_ids: t, recipient_id: e },
                    rejectWithError: !0,
                })
            ).body;
        } catch (e) {
            return (0, y.o)(new l.LG(e)), {};
        }
    },
    k = async (e) => {
        let { release: t = i.P.PROD } = e;
        o.h.dispatch({ type: "COLLECTIBLES_MARKETING_FETCH" });
        let n = { platform: r.b.DESKTOP };
        t !== i.P.PROD && (n.release = t);
        try {
            let e = await s.Bo.get({ url: S.Rsh.COLLECTIBLES_MARKETING, query: n, rejectWithError: !0 });
            o.h.dispatch({ type: "COLLECTIBLES_MARKETING_FETCH_SUCCESS", marketings: m.M.fromServer(e.body) });
        } catch (e) {
            (0, y.o)(new l.LG(e)), o.h.dispatch({ type: "COLLECTIBLES_MARKETING_FETCH_FAILURE" });
        }
    },
    U = async (e, t, n) => {
        o.h.dispatch({ type: "COLLECTIBLES_SHOP_HOME_FETCH", tab: e, options: t ?? {} });
        let r = (0, T.ao)(t, e);
        t?.logPerf &&
            (0, I.z)({
                sessionId: n?.sessionId,
                checkpoint: I.t.SHOP_HOME_FETCH_STARTED,
                tab: n?.tab,
                unpublishedCategoriesShown: t?.includeUnpublished,
                cacheDisabled: t?.noCache,
            });
        try {
            let i = await s.Bo.get({ url: S.Rsh.COLLECTIBLES_SHOP, query: r, rejectWithError: !0 });
            t?.logPerf &&
                (0, I.z)({
                    sessionId: n?.sessionId,
                    checkpoint: I.t.SHOP_HOME_FETCH_COMPLETED,
                    tab: n?.tab,
                    unpublishedCategoriesShown: t?.includeUnpublished,
                    cacheDisabled: t?.noCache,
                }),
                o.h.dispatch({
                    type: "COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS",
                    tab: e,
                    shopHome: A.a.fromServer(i.body),
                });
        } catch (n) {
            let t = new l.LG(n);
            (0, y.o)(t), o.h.dispatch({ type: "COLLECTIBLES_SHOP_HOME_FETCH_FAILURE", tab: e, error: t });
        }
    },
    G = (e) => {
        o.h.dispatch({ type: "COLLECTIBLES_SET_SHOP_HOME_CONFIG_OVERRIDE", shopHomeConfigOverride: e });
    },
    V = (e) => {
        o.h.dispatch({ type: "COLLECTIBLES_SKIP_NUM_CATEGORIES", skipNumCategories: e });
    },
    F = async (e, t) => {
        o.h.dispatch({ type: "COLLECTIBLES_CLAIM", skuId: t });
        try {
            let n = await s.Bo.put({
                url: S.Rsh.COLLECTIBLES_CLAIM_CATEGORY_REWARD,
                body: { category_id: e },
                rejectWithError: !0,
            });
            o.h.dispatch({ type: "COLLECTIBLES_CLAIM_SUCCESS", skuId: t, purchases: n.body?.map(E.A.fromServer) });
        } catch (n) {
            let e = new l.LG(n);
            throw (o.h.dispatch({ type: "COLLECTIBLES_CLAIM_FAILURE", skuId: t, error: e }), e);
        }
    };
