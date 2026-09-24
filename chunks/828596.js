n.d(t, { J_: () => O, N4: () => N, cF: () => g, l9: () => S, rd: () => T, tx: () => p });
var i = n(636537),
    r = n(228366),
    a = n(181658),
    s = n(615405),
    l = n(927813),
    o = n(561573),
    d = n(937427),
    c = n(918467),
    u = n(993046),
    _ = n(65238),
    E = n(652215);
let A = 10 * l.A.Millis.MINUTE,
    h = l.A.Millis.MINUTE,
    I = l.A.Millis.MINUTE;
function f(e) {
    let t = c.A.getFetchState(e);
    if (void 0 === t) return !0;
    if ("loading" === t) return !1;
    let n = c.A.getFetchedAt(e);
    return null == n || Date.now() - n > ("error" === t ? A : h);
}
async function p(e) {
    let t = e.filter(f);
    0 !== t.length && (await T(t));
}
async function T(e) {
    if (0 !== e.length)
        try {
            r.h.dispatch({ type: "STOREFRONT_PROMOTIONS_FETCH_START", applicationIds: e });
            let t = d.A.getPromotionIdOverride(),
                n = (
                    await i.Bo.get({
                        url: E.Rsh.STOREFRONT_PROMOTIONS,
                        query: { application_ids: e, ...(null != t ? { promotion_id_override: t } : {}) },
                        rejectWithError: !0,
                    })
                ).body.promotions.map((e) => _.Ay.createFromServer(e));
            r.h.dispatch({ type: "STOREFRONT_PROMOTIONS_FETCH_SUCCESS", applicationIds: e, promotions: n });
        } catch {
            r.h.dispatch({ type: "STOREFRONT_PROMOTIONS_FETCH_FAIL", applicationIds: e });
        }
}
async function g(e, t) {
    r.h.dispatch({ type: "STOREFRONT_PROMOTION_CLAIM_START", promotionId: e });
    try {
        await i.Bo.post({ url: E.Rsh.STOREFRONT_PROMOTION_CLAIM(e), body: {}, rejectWithError: !0 });
    } catch (n) {
        let t = new a.A(n);
        throw (r.h.dispatch({ type: "STOREFRONT_PROMOTION_CLAIM_FAIL", promotionId: e, apiError: t }), t);
    }
    (r.h.dispatch({ type: "STOREFRONT_PROMOTION_CLAIM_SUCCESS", promotionId: e }), await T([t]));
}
function m(e) {
    return e?.type === "error" ? A : I;
}
async function S(e) {
    let { applicationId: t } = e;
    await C({ type: "application", applicationId: t });
}
async function N(e) {
    let { skuIds: t } = e;
    await C({ type: "skus", skuIds: t });
}
async function C(e) {
    let {
        shouldFetch: t,
        filteredSkuIds: n,
        applicationId: a,
    } = (function (e) {
        if ("application" === e.type) {
            let t = o.A.getFetchStateForApplicationId(e.applicationId),
                n = m(t);
            return null != t && ("loading" === t.type || t.fetchedAt > Date.now() - n)
                ? { shouldFetch: !1, filteredSkuIds: [], applicationId: e.applicationId }
                : { shouldFetch: !0, filteredSkuIds: [], applicationId: e.applicationId };
        }
        {
            let t = e.skuIds
                .filter((e) => {
                    let t = o.A.getFetchStateForSkuId(e);
                    if (null == t) return !0;
                    let n = m(t);
                    return "loading" !== t.type && t.fetchedAt < Date.now() - n;
                })
                .sort((e, t) => {
                    let n = o.A.getFetchStateForSkuId(e),
                        i = o.A.getFetchStateForSkuId(t);
                    return null == n && null != i ? -1 : +(null != n && null == i);
                });
            return 0 === t.length
                ? { shouldFetch: !1, filteredSkuIds: [], applicationId: null }
                : { shouldFetch: !0, filteredSkuIds: t.slice(0, 50), applicationId: null };
        }
    })(e);
    if (!t) return;
    let l = null != a ? { type: "application", applicationId: a } : { type: "skus", skuIds: n };
    try {
        r.h.dispatch({ type: "SKUS_PRICING_FETCH_START", priceId: l });
        let e = d.A.getPromotionIdOverride(),
            t = (
                await i.Bo.get({
                    url: E.Rsh.STOREFRONT_PRICES,
                    query: {
                        ...(null != a ? { application_id: a } : { sku_ids: n }),
                        country_code: s.A.ipCountryCode ?? void 0,
                        ...(null != e ? { promotion_id_override: e } : {}),
                    },
                    rejectWithError: !0,
                })
            ).body;
        r.h.dispatch({ type: "SKUS_PRICING_FETCH_SUCCESS", priceId: l, data: (0, u.Oj)(t) });
    } catch {
        r.h.dispatch({ type: "SKUS_PRICING_FETCH_FAIL", priceId: l });
    }
}
function O(e) {
    r.h.dispatch({ type: "STOREFRONT_PROMOTION_ID_OVERRIDE_SET", promotionIdOverride: e });
}
