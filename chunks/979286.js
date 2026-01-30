n.d(t, {
    BX: () => Y,
    CK: () => L,
    Cz: () => N,
    JJ: () => U,
    Jp: () => M,
    LX: () => F,
    Og: () => G,
    Or: () => B,
    RD: () => R,
    RE: () => j,
    Sw: () => w,
    gB: () => x,
    gn: () => D,
    h$: () => V,
    iJ: () => k,
    ue: () => H,
}),
    n(896048),
    n(457529);
var r = n(782111),
    i = n(148803),
    a = n(635358),
    o = n(562465),
    s = n(73153);
n(398590);
var l = n(198982),
    c = n(865116);
n(250953);
var u = n(976860),
    d = n(773669),
    f = n(590180),
    p = n(752447),
    _ = n(4227),
    h = n(355889),
    m = n(526751),
    g = n(986630),
    E = n(739380),
    y = n(360148),
    b = n(100057),
    O = n(181774),
    v = n(18572);
n(758836);
var A = n(652215);

function I(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                I(e, t, n[t]);
            });
    }
    return e;
}

function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = C(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function C(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
n(870216), n(457421), n(295811);
let N = (e) => {
        let { tab: t } = e,
            r = T(e, ["tab"]);
        {
            let { default: e } = n(12901);
            w(r), e(), (0, u.pX)(t ? A.BVt.COLLECTIBLES_SHOP_WITH_TAB(t) : A.BVt.COLLECTIBLES_SHOP);
        }
    },
    w = (e) => {
        s.h.dispatch(
            S(
                {
                    type: "COLLECTIBLES_SHOP_OPEN",
                },
                e,
            ),
        );
    },
    R = (e) => {
        s.h.dispatch({
            type: "COLLECTIBLES_PRODUCT_DETAILS_OPEN",
            skuId: e,
        });
    },
    P = (e, t) => !!e == !!t,
    D = (e, t) =>
        P(null == e ? void 0 : e.noCache, null == t ? void 0 : t.noCache) &&
        P(null == e ? void 0 : e.includeUnpublished, null == t ? void 0 : t.includeUnpublished) &&
        P(null == e ? void 0 : e.includeBundles, null == t ? void 0 : t.includeBundles) &&
        P(null == e ? void 0 : e.includeDynamicBlocks, null == t ? void 0 : t.includeDynamicBlocks) &&
        (null == e ? void 0 : e.countryCode) === (null == t ? void 0 : t.countryCode) &&
        (null == e ? void 0 : e.paymentGateway) === (null == t ? void 0 : t.paymentGateway) &&
        (null == e ? void 0 : e.shopHomeConfig) === (null == t ? void 0 : t.shopHomeConfig) &&
        (null == e ? void 0 : e.skipNumCategories) === (null == t ? void 0 : t.skipNumCategories),
    L = async (e, t, n) => {
        s.h.dispatch({
            type: "COLLECTIBLES_CATEGORIES_FETCH",
            options: null != e ? e : {},
        });
        let r = (0, O.ao)(e),
            i = c.Ay.get("shop_show_debug_overlay");
        (null == e ? void 0 : e.logPerf) &&
            (0, b.z)({
                sessionId: null == n ? void 0 : n.sessionId,
                checkpoint: b.t.CATEGORIES_FETCH_STARTED,
                tab: null == n ? void 0 : n.tab,
                unpublishedCategoriesShown: null == e ? void 0 : e.includeUnpublished,
                cacheDisabled: null == e ? void 0 : e.noCache,
            }),
            i && (0, p.l)("fetchCollectiblesCategories started: ".concat(JSON.stringify(r, null, 2)));
        try {
            let a = await o.Bo.get({
                url: A.Rsh.COLLECTIBLES_CATEGORIES_V2,
                query: r,
                rejectWithError: !0,
            });
            (null == e ? void 0 : e.logPerf) &&
                (0, b.z)({
                    sessionId: null == n ? void 0 : n.sessionId,
                    checkpoint: b.t.CATEGORIES_FETCH_COMPLETED,
                    tab: null == n ? void 0 : n.tab,
                    unpublishedCategoriesShown: null == e ? void 0 : e.includeUnpublished,
                    cacheDisabled: null == e ? void 0 : e.noCache,
                }),
                i && (0, p.l)("fetchCollectiblesCategories completed ".concat(a.body.categories.length, " categories")),
                s.h.dispatch({
                    type: "COLLECTIBLES_CATEGORIES_FETCH_SUCCESS",
                    categories: h.x.fromServer(a.body),
                    noOp: t,
                });
        } catch (t) {
            let e = new l.LG(t);
            (0, v.o)(e),
                s.h.dispatch({
                    type: "COLLECTIBLES_CATEGORIES_FETCH_FAILURE",
                    error: e,
                }),
                i && (0, p.l)("fetchCollectiblesCategories failed: ".concat(e.message));
        }
    },
    x = async (e) => {
        if (_.A.isFetching) return;
        s.h.dispatch({
            type: "COLLECTIBLES_PURCHASES_FETCH",
        });
        let t = c.Ay.get("shop_show_debug_overlay");
        t && (0, p.l)("fetchCollectiblesPurchases started, options: ".concat(JSON.stringify(e, null, 2)));
        try {
            let n = {
                url: A.Rsh.COLLECTIBLES_PURCHASES,
                rejectWithError: !0,
            };
            (null == e ? void 0 : e.variantsReturnStyle) === a.g.VARIANTS_GROUP &&
                (n.query = {
                    variants_return_style: a.g.VARIANTS_GROUP,
                }),
                t && (0, p.l)("fetchCollectiblesPurchases request: ".concat(JSON.stringify(n, null, 2)));
            let r = await o.Bo.get(n);
            t && (0, p.l)("fetchCollectiblesPurchases completed with ".concat(r.body.length, " purchases")),
                s.h.dispatch({
                    type: "COLLECTIBLES_PURCHASES_FETCH_SUCCESS",
                    purchases: r.body.map(E.A.fromServer),
                });
        } catch (n) {
            let e = new l.LG(n);
            throw (
                ((0, v.o)(e),
                t && (0, p.l)("fetchCollectiblesPurchases failed: ".concat(e.message)),
                s.h.dispatch({
                    type: "COLLECTIBLES_PURCHASES_FETCH_FAILURE",
                    error: e,
                }),
                e)
            );
        }
    },
    M = async (e, t) => {
        s.h.dispatch({
            type: "COLLECTIBLES_PRODUCT_FETCH",
            skuId: e,
        });
        try {
            let n = {
                locale: d.default.locale,
            };
            (null == t ? void 0 : t.countryCode) !== null && (n.country_code = null == t ? void 0 : t.countryCode),
                (null == t ? void 0 : t.paymentGateway) !== null &&
                    (n.payment_gateway = null == t ? void 0 : t.paymentGateway),
                (null == t ? void 0 : t.includeBundles) !== null &&
                    (n.include_bundles = null == t ? void 0 : t.includeBundles);
            let r = await o.Bo.get({
                url: A.Rsh.COLLECTIBLES_PRODUCTS(e),
                rejectWithError: !0,
                query: n,
            });
            s.h.dispatch({
                type: "COLLECTIBLES_PRODUCT_FETCH_SUCCESS",
                skuId: e,
                product: g.A.fromServer(r.body),
            });
        } catch (n) {
            let t = new l.LG(n);
            (0, v.o)(t),
                s.h.dispatch({
                    type: "COLLECTIBLES_PRODUCT_FETCH_FAILURE",
                    skuId: e,
                    error: t,
                });
        }
    },
    j = async (e, t) => {
        f.A.isFetchingProduct(e) || (await M(e, t));
    },
    k = async (e) => {
        s.h.dispatch({
            type: "COLLECTIBLES_CLAIM",
            skuId: e,
        });
        try {
            var t;
            let n = await o.Bo.put({
                url: A.Rsh.COLLECTIBLES_CLAIM,
                body: {
                    sku_id: e,
                },
                rejectWithError: !0,
            });
            s.h.dispatch({
                type: "COLLECTIBLES_CLAIM_SUCCESS",
                skuId: e,
                purchases: null == (t = n.body) ? void 0 : t.map(E.A.fromServer),
            });
        } catch (n) {
            let t = new l.LG(n);
            throw (
                (s.h.dispatch({
                    type: "COLLECTIBLES_CLAIM_FAILURE",
                    skuId: e,
                    error: t,
                }),
                t)
            );
        }
    },
    U = async (e, t) => {
        try {
            return (
                await o.Bo.get({
                    url: A.Rsh.COLLECTIBLES_VALID_GIFT_RECIPIENT,
                    query: {
                        sku_id: t,
                        recipient_id: e,
                    },
                    rejectWithError: !0,
                })
            ).body.valid;
        } catch (e) {
            return (0, v.o)(new l.LG(e)), !1;
        }
    },
    G = async (e, t) => {
        try {
            return (
                await o.Bo.get({
                    url: A.Rsh.COLLECTIBLES_VALID_GIFT_RECIPIENTS_BATCH,
                    query: {
                        sku_ids: t,
                        recipient_id: e,
                    },
                    rejectWithError: !0,
                })
            ).body;
        } catch (e) {
            return (0, v.o)(new l.LG(e)), {};
        }
    },
    F = async (e) => {
        let { release: t = i.P.PROD } = e;
        s.h.dispatch({
            type: "COLLECTIBLES_MARKETING_FETCH",
        });
        let n = {
            platform: r.b.DESKTOP,
        };
        t !== i.P.PROD && (n.release = t);
        try {
            let e = await o.Bo.get({
                url: A.Rsh.COLLECTIBLES_MARKETING,
                query: n,
                rejectWithError: !0,
            });
            s.h.dispatch({
                type: "COLLECTIBLES_MARKETING_FETCH_SUCCESS",
                marketings: m.M.fromServer(e.body),
            });
        } catch (e) {
            (0, v.o)(new l.LG(e)),
                s.h.dispatch({
                    type: "COLLECTIBLES_MARKETING_FETCH_FAILURE",
                });
        }
    },
    V = async (e, t, n) => {
        s.h.dispatch({
            type: "COLLECTIBLES_SHOP_HOME_FETCH",
            tab: e,
            options: null != t ? t : {},
        });
        let r = (0, O.ao)(t, e);
        (null == t ? void 0 : t.logPerf) &&
            (0, b.z)({
                sessionId: null == n ? void 0 : n.sessionId,
                checkpoint: b.t.SHOP_HOME_FETCH_STARTED,
                tab: null == n ? void 0 : n.tab,
                unpublishedCategoriesShown: null == t ? void 0 : t.includeUnpublished,
                cacheDisabled: null == t ? void 0 : t.noCache,
            });
        try {
            let i = await o.Bo.get({
                url: A.Rsh.COLLECTIBLES_SHOP,
                query: r,
                rejectWithError: !0,
            });
            (null == t ? void 0 : t.logPerf) &&
                (0, b.z)({
                    sessionId: null == n ? void 0 : n.sessionId,
                    checkpoint: b.t.SHOP_HOME_FETCH_COMPLETED,
                    tab: null == n ? void 0 : n.tab,
                    unpublishedCategoriesShown: null == t ? void 0 : t.includeUnpublished,
                    cacheDisabled: null == t ? void 0 : t.noCache,
                }),
                s.h.dispatch({
                    type: "COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS",
                    tab: e,
                    shopHome: y.a.fromServer(i.body),
                });
        } catch (n) {
            let t = new l.LG(n);
            (0, v.o)(t),
                s.h.dispatch({
                    type: "COLLECTIBLES_SHOP_HOME_FETCH_FAILURE",
                    tab: e,
                    error: t,
                });
        }
    },
    B = (e) => {
        s.h.dispatch({
            type: "COLLECTIBLES_SET_SHOP_HOME_CONFIG_OVERRIDE",
            shopHomeConfigOverride: e,
        });
    },
    H = (e) => {
        s.h.dispatch({
            type: "COLLECTIBLES_SKIP_NUM_CATEGORIES",
            skipNumCategories: e,
        });
    },
    Y = async (e, t) => {
        s.h.dispatch({
            type: "COLLECTIBLES_CLAIM",
            skuId: t,
        });
        try {
            var n;
            let r = await o.Bo.put({
                url: A.Rsh.COLLECTIBLES_CLAIM_CATEGORY_REWARD,
                body: {
                    category_id: e,
                },
                rejectWithError: !0,
            });
            s.h.dispatch({
                type: "COLLECTIBLES_CLAIM_SUCCESS",
                skuId: t,
                purchases: null == (n = r.body) ? void 0 : n.map(E.A.fromServer),
            });
        } catch (n) {
            let e = new l.LG(n);
            throw (
                (s.h.dispatch({
                    type: "COLLECTIBLES_CLAIM_FAILURE",
                    skuId: t,
                    error: e,
                }),
                e)
            );
        }
    };
