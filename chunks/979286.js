"use strict";
n.d(t, {
    Aq: () => G,
    BX: () => F,
    CK: () => b,
    Cz: () => O,
    JJ: () => P,
    Jp: () => L,
    LX: () => U,
    Or: () => x,
    RD: () => v,
    RE: () => w,
    Sw: () => R,
    T2: () => B,
    gB: () => D,
    gn: () => C,
    h$: () => k,
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
n(250953), n(331103);
var d = n(976860),
    c = n(773669),
    _ = n(590180),
    f = n(752447),
    E = n(4227),
    h = n(870216),
    p = n(355889),
    m = n(526751),
    g = n(986630),
    A = n(739380),
    I = n(360148),
    T = n(100057),
    S = n(181774),
    y = n(18572);
n(758836);
var N = n(652215);
n(457421), n(295811);
let O = (e) => {
        let { tab: t, ...r } = e;
        {
            let { default: e } = n(779733),
                { default: i } = n(408166);
            R(r), e(), i(), (0, d.pX)(null != t ? N.BVt.COLLECTIBLES_SHOP_WITH_TAB(t) : N.BVt.COLLECTIBLES_SHOP);
        }
    },
    R = (e) => {
        o.h.dispatch({ type: "COLLECTIBLES_SHOP_OPEN", ...e });
    },
    v = (e) => {
        o.h.dispatch({ type: "COLLECTIBLES_PRODUCT_DETAILS_OPEN", skuId: e });
    },
    C = (e, t) =>
        !!e?.noCache == !!t?.noCache &&
        !!e?.includeUnpublished == !!t?.includeUnpublished &&
        !!e?.includeBundles == !!t?.includeBundles &&
        !!e?.includeDynamicBlocks == !!t?.includeDynamicBlocks &&
        e?.countryCode === t?.countryCode &&
        e?.paymentGateway === t?.paymentGateway &&
        e?.shopHomeConfig === t?.shopHomeConfig &&
        e?.skipNumCategories === t?.skipNumCategories,
    b = async (e, t, n) => {
        o.h.dispatch({ type: "COLLECTIBLES_CATEGORIES_FETCH", options: e ?? {} });
        let r = (0, S.ao)(e),
            i = u.Ay.get("shop_show_debug_overlay");
        e?.logPerf &&
            (0, T.z)({
                sessionId: n?.sessionId,
                checkpoint: T.t.CATEGORIES_FETCH_STARTED,
                tab: n?.tab,
                unpublishedCategoriesShown: e?.includeUnpublished,
                cacheDisabled: e?.noCache,
            }),
            i && (0, f.l)(`fetchCollectiblesCategories started: ${JSON.stringify(r, null, 2)}`);
        try {
            let s = await a.Bo.get({ url: N.Rsh.COLLECTIBLES_CATEGORIES_V2, query: r, rejectWithError: !0 });
            e?.logPerf &&
                (0, T.z)({
                    sessionId: n?.sessionId,
                    checkpoint: T.t.CATEGORIES_FETCH_COMPLETED,
                    tab: n?.tab,
                    unpublishedCategoriesShown: e?.includeUnpublished,
                    cacheDisabled: e?.noCache,
                }),
                i && (0, f.l)(`fetchCollectiblesCategories completed ${s.body.categories.length} categories`),
                o.h.dispatch({
                    type: "COLLECTIBLES_CATEGORIES_FETCH_SUCCESS",
                    categories: p.x.fromServer(s.body),
                    noOp: t,
                });
        } catch (t) {
            let e = new l.LG(t);
            (0, y.o)(e),
                o.h.dispatch({ type: "COLLECTIBLES_CATEGORIES_FETCH_FAILURE", error: e }),
                i && (0, f.l)(`fetchCollectiblesCategories failed: ${e.message}`);
        }
    },
    D = async () => {
        if (E.A.isFetching) return;
        o.h.dispatch({ type: "COLLECTIBLES_PURCHASES_FETCH" });
        let e = u.Ay.get("shop_show_debug_overlay");
        e && (0, f.l)("fetchCollectiblesPurchases started");
        try {
            let t = {
                url: N.Rsh.COLLECTIBLES_PURCHASES,
                rejectWithError: !0,
                query: { variants_return_style: s.g.VARIANTS_GROUP },
            };
            e && (0, f.l)(`fetchCollectiblesPurchases request: ${JSON.stringify(t, null, 2)}`);
            let n = await a.Bo.get(t);
            e && (0, f.l)(`fetchCollectiblesPurchases completed with ${n.body.length} purchases`),
                o.h.dispatch({ type: "COLLECTIBLES_PURCHASES_FETCH_SUCCESS", purchases: n.body.map(A.A.fromServer) });
        } catch (n) {
            let t = new l.LG(n);
            throw (
                ((0, y.o)(t),
                e && (0, f.l)(`fetchCollectiblesPurchases failed: ${t.message}`),
                o.h.dispatch({ type: "COLLECTIBLES_PURCHASES_FETCH_FAILURE", error: t }),
                t)
            );
        }
    },
    L = async (e, t) => {
        o.h.dispatch({ type: "COLLECTIBLES_PRODUCT_FETCH", skuId: e });
        try {
            let n = { locale: c.default.locale };
            t?.countryCode !== null && (n.country_code = t?.countryCode),
                t?.paymentGateway !== null && (n.payment_gateway = t?.paymentGateway),
                t?.includeBundles !== null && (n.include_bundles = t?.includeBundles);
            let r = await a.Bo.get({ url: N.Rsh.COLLECTIBLES_PRODUCTS(e), rejectWithError: !0, query: n });
            o.h.dispatch({ type: "COLLECTIBLES_PRODUCT_FETCH_SUCCESS", skuId: e, product: g.A.fromServer(r.body) });
        } catch (n) {
            let t = new l.LG(n);
            (0, y.o)(t), o.h.dispatch({ type: "COLLECTIBLES_PRODUCT_FETCH_FAILURE", skuId: e, error: t });
        }
    },
    w = async (e, t) => {
        _.A.isFetchingProduct(e) || (await L(e, t));
    },
    M = async (e) => {
        o.h.dispatch({ type: "COLLECTIBLES_CLAIM", skuId: e });
        try {
            let t = await a.Bo.put({ url: N.Rsh.COLLECTIBLES_CLAIM, body: { sku_id: e }, rejectWithError: !0 });
            o.h.dispatch({ type: "COLLECTIBLES_CLAIM_SUCCESS", skuId: e, purchases: t.body?.map(A.A.fromServer) });
        } catch (n) {
            let t = new l.LG(n);
            throw (o.h.dispatch({ type: "COLLECTIBLES_CLAIM_FAILURE", skuId: e, error: t }), t);
        }
    },
    P = async (e, t) => {
        try {
            return (
                await a.Bo.get({
                    url: N.Rsh.COLLECTIBLES_VALID_GIFT_RECIPIENT,
                    query: { sku_id: t, recipient_id: e },
                    rejectWithError: !0,
                })
            ).body.valid;
        } catch (e) {
            return (0, y.o)(new l.LG(e)), !1;
        }
    },
    U = async (e) => {
        let { release: t = i.P.PROD } = e;
        o.h.dispatch({ type: "COLLECTIBLES_MARKETING_FETCH" });
        let n = { platform: r.b.DESKTOP };
        t !== i.P.PROD && (n.release = t);
        try {
            let e = await a.Bo.get({ url: N.Rsh.COLLECTIBLES_MARKETING, query: n, rejectWithError: !0 });
            o.h.dispatch({ type: "COLLECTIBLES_MARKETING_FETCH_SUCCESS", marketings: m.M.fromServer(e.body) });
        } catch (e) {
            (0, y.o)(new l.LG(e)), o.h.dispatch({ type: "COLLECTIBLES_MARKETING_FETCH_FAILURE" });
        }
    },
    k = async (e, t, n) => {
        o.h.dispatch({ type: "COLLECTIBLES_SHOP_HOME_FETCH", tab: e, options: t ?? {} });
        let r = (0, S.ao)(t, e);
        t?.logPerf &&
            (0, T.z)({
                sessionId: n?.sessionId,
                checkpoint: T.t.SHOP_HOME_FETCH_STARTED,
                tab: n?.tab,
                unpublishedCategoriesShown: t?.includeUnpublished,
                cacheDisabled: t?.noCache,
            });
        try {
            let i = await a.Bo.get({ url: N.Rsh.COLLECTIBLES_SHOP, query: r, rejectWithError: !0 });
            t?.logPerf &&
                (0, T.z)({
                    sessionId: n?.sessionId,
                    checkpoint: T.t.SHOP_HOME_FETCH_COMPLETED,
                    tab: n?.tab,
                    unpublishedCategoriesShown: t?.includeUnpublished,
                    cacheDisabled: t?.noCache,
                }),
                o.h.dispatch({
                    type: "COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS",
                    tab: e,
                    shopHome: I.a.fromServer(i.body),
                });
        } catch (n) {
            let t = new l.LG(n);
            (0, y.o)(t), o.h.dispatch({ type: "COLLECTIBLES_SHOP_HOME_FETCH_FAILURE", tab: e, error: t });
        }
    },
    x = (e) => {
        o.h.dispatch({ type: "COLLECTIBLES_SET_SHOP_HOME_CONFIG_OVERRIDE", shopHomeConfigOverride: e });
    },
    G = (e) => {
        o.h.dispatch({ type: "COLLECTIBLES_SET_SHOP_LAYOUT_URL_OVERRIDE", shopLayoutUrlOverride: e });
    },
    V = (e) => {
        o.h.dispatch({ type: "COLLECTIBLES_SKIP_NUM_CATEGORIES", skipNumCategories: e });
    },
    F = async (e, t) => {
        o.h.dispatch({ type: "COLLECTIBLES_CLAIM", skuId: t });
        try {
            let n = await a.Bo.put({
                url: N.Rsh.COLLECTIBLES_CLAIM_CATEGORY_REWARD,
                body: { category_id: e },
                rejectWithError: !0,
            });
            o.h.dispatch({ type: "COLLECTIBLES_CLAIM_SUCCESS", skuId: t, purchases: n.body?.map(A.A.fromServer) });
        } catch (n) {
            let e = new l.LG(n);
            throw (o.h.dispatch({ type: "COLLECTIBLES_CLAIM_FAILURE", skuId: t, error: e }), e);
        }
    },
    B = async (e) => {
        let { tab: t, abortSignal: n } = e;
        if (h.A.isFetchingLayout(t)) return;
        let r = h.A.getLayoutFetchError(t);
        if (r?.status !== 404 && r?.status !== 429)
            try {
                o.h.dispatch({ type: "COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH", tab: t });
                let e = await a.Bo.get({ url: N.Rsh.COLLECTIBLES_SHOP_TAB_LAYOUT(t), rejectWithError: !0, signal: n });
                o.h.dispatch({
                    type: "COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH_SUCCESS",
                    tab: t,
                    layoutId: e.body.layout_id,
                });
            } catch (n) {
                let e = new l.LG(n);
                throw (o.h.dispatch({ type: "COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH_FAILURE", tab: t, apiError: e }), e);
            }
    };
