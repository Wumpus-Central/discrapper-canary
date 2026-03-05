"use strict";
n.d(t, {
    Aq: () => F,
    BX: () => B,
    CK: () => b,
    Cz: () => v,
    JJ: () => x,
    Jp: () => L,
    LX: () => k,
    Og: () => P,
    Or: () => G,
    RD: () => C,
    RE: () => w,
    Sw: () => N,
    gB: () => D,
    gn: () => O,
    h$: () => U,
    iJ: () => M,
    ue: () => V,
});
var r = n(782111),
    i = n(148803),
    s = n(635358),
    a = n(562465),
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
    E = n(986630),
    g = n(739380),
    A = n(360148),
    I = n(100057),
    T = n(181774),
    S = n(18572);
n(758836);
var y = n(652215);
n(870216), n(457421), n(295811);
let v = (e) => {
        let { tab: t, ...r } = e;
        {
            let { default: e } = n(12901),
                { default: i } = n(408166);
            N(r), e(), i(), (0, c.pX)(t ? y.BVt.COLLECTIBLES_SHOP_WITH_TAB(t) : y.BVt.COLLECTIBLES_SHOP);
        }
    },
    N = (e) => {
        o.h.dispatch({ type: "COLLECTIBLES_SHOP_OPEN", ...e });
    },
    C = (e) => {
        o.h.dispatch({ type: "COLLECTIBLES_PRODUCT_DETAILS_OPEN", skuId: e });
    },
    R = (e, t) => !!e == !!t,
    O = (e, t) =>
        R(e?.noCache, t?.noCache) &&
        R(e?.includeUnpublished, t?.includeUnpublished) &&
        R(e?.includeBundles, t?.includeBundles) &&
        R(e?.includeDynamicBlocks, t?.includeDynamicBlocks) &&
        e?.countryCode === t?.countryCode &&
        e?.paymentGateway === t?.paymentGateway &&
        e?.shopHomeConfig === t?.shopHomeConfig &&
        e?.skipNumCategories === t?.skipNumCategories,
    b = async (e, t, n) => {
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
            let s = await a.Bo.get({ url: y.Rsh.COLLECTIBLES_CATEGORIES_V2, query: r, rejectWithError: !0 });
            e?.logPerf &&
                (0, I.z)({
                    sessionId: n?.sessionId,
                    checkpoint: I.t.CATEGORIES_FETCH_COMPLETED,
                    tab: n?.tab,
                    unpublishedCategoriesShown: e?.includeUnpublished,
                    cacheDisabled: e?.noCache,
                }),
                i && (0, f.l)(`fetchCollectiblesCategories completed ${s.body.categories.length} categories`),
                o.h.dispatch({
                    type: "COLLECTIBLES_CATEGORIES_FETCH_SUCCESS",
                    categories: h.x.fromServer(s.body),
                    noOp: t,
                });
        } catch (t) {
            let e = new l.LG(t);
            (0, S.o)(e),
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
            let n = { url: y.Rsh.COLLECTIBLES_PURCHASES, rejectWithError: !0 };
            e?.variantsReturnStyle === s.g.VARIANTS_GROUP && (n.query = { variants_return_style: s.g.VARIANTS_GROUP }),
                t && (0, f.l)(`fetchCollectiblesPurchases request: ${JSON.stringify(n, null, 2)}`);
            let r = await a.Bo.get(n);
            t && (0, f.l)(`fetchCollectiblesPurchases completed with ${r.body.length} purchases`),
                o.h.dispatch({ type: "COLLECTIBLES_PURCHASES_FETCH_SUCCESS", purchases: r.body.map(g.A.fromServer) });
        } catch (n) {
            let e = new l.LG(n);
            throw (
                ((0, S.o)(e),
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
            let r = await a.Bo.get({ url: y.Rsh.COLLECTIBLES_PRODUCTS(e), rejectWithError: !0, query: n });
            o.h.dispatch({ type: "COLLECTIBLES_PRODUCT_FETCH_SUCCESS", skuId: e, product: E.A.fromServer(r.body) });
        } catch (n) {
            let t = new l.LG(n);
            (0, S.o)(t), o.h.dispatch({ type: "COLLECTIBLES_PRODUCT_FETCH_FAILURE", skuId: e, error: t });
        }
    },
    w = async (e, t) => {
        _.A.isFetchingProduct(e) || (await L(e, t));
    },
    M = async (e) => {
        o.h.dispatch({ type: "COLLECTIBLES_CLAIM", skuId: e });
        try {
            let t = await a.Bo.put({ url: y.Rsh.COLLECTIBLES_CLAIM, body: { sku_id: e }, rejectWithError: !0 });
            o.h.dispatch({ type: "COLLECTIBLES_CLAIM_SUCCESS", skuId: e, purchases: t.body?.map(g.A.fromServer) });
        } catch (n) {
            let t = new l.LG(n);
            throw (o.h.dispatch({ type: "COLLECTIBLES_CLAIM_FAILURE", skuId: e, error: t }), t);
        }
    },
    x = async (e, t) => {
        try {
            return (
                await a.Bo.get({
                    url: y.Rsh.COLLECTIBLES_VALID_GIFT_RECIPIENT,
                    query: { sku_id: t, recipient_id: e },
                    rejectWithError: !0,
                })
            ).body.valid;
        } catch (e) {
            return (0, S.o)(new l.LG(e)), !1;
        }
    },
    P = async (e, t) => {
        try {
            return (
                await a.Bo.get({
                    url: y.Rsh.COLLECTIBLES_VALID_GIFT_RECIPIENTS_BATCH,
                    query: { sku_ids: t, recipient_id: e },
                    rejectWithError: !0,
                })
            ).body;
        } catch (e) {
            return (0, S.o)(new l.LG(e)), {};
        }
    },
    k = async (e) => {
        let { release: t = i.P.PROD } = e;
        o.h.dispatch({ type: "COLLECTIBLES_MARKETING_FETCH" });
        let n = { platform: r.b.DESKTOP };
        t !== i.P.PROD && (n.release = t);
        try {
            let e = await a.Bo.get({ url: y.Rsh.COLLECTIBLES_MARKETING, query: n, rejectWithError: !0 });
            o.h.dispatch({ type: "COLLECTIBLES_MARKETING_FETCH_SUCCESS", marketings: m.M.fromServer(e.body) });
        } catch (e) {
            (0, S.o)(new l.LG(e)), o.h.dispatch({ type: "COLLECTIBLES_MARKETING_FETCH_FAILURE" });
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
            let i = await a.Bo.get({ url: y.Rsh.COLLECTIBLES_SHOP, query: r, rejectWithError: !0 });
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
            (0, S.o)(t), o.h.dispatch({ type: "COLLECTIBLES_SHOP_HOME_FETCH_FAILURE", tab: e, error: t });
        }
    },
    G = (e) => {
        o.h.dispatch({ type: "COLLECTIBLES_SET_SHOP_HOME_CONFIG_OVERRIDE", shopHomeConfigOverride: e });
    },
    F = (e) => {
        o.h.dispatch({ type: "COLLECTIBLES_SET_SHOP_LAYOUT_URL_OVERRIDE", shopLayoutUrlOverride: e });
    },
    V = (e) => {
        o.h.dispatch({ type: "COLLECTIBLES_SKIP_NUM_CATEGORIES", skipNumCategories: e });
    },
    B = async (e, t) => {
        o.h.dispatch({ type: "COLLECTIBLES_CLAIM", skuId: t });
        try {
            let n = await a.Bo.put({
                url: y.Rsh.COLLECTIBLES_CLAIM_CATEGORY_REWARD,
                body: { category_id: e },
                rejectWithError: !0,
            });
            o.h.dispatch({ type: "COLLECTIBLES_CLAIM_SUCCESS", skuId: t, purchases: n.body?.map(g.A.fromServer) });
        } catch (n) {
            let e = new l.LG(n);
            throw (o.h.dispatch({ type: "COLLECTIBLES_CLAIM_FAILURE", skuId: t, error: e }), e);
        }
    };
