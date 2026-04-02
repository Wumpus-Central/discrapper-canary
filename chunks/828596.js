"use strict";
n.d(t, { N4: () => m, l9: () => h });
var r = n(562465),
    i = n(73153),
    s = n(615405),
    a = n(927813),
    o = n(561573);
n(416853), n(918467);
var l = n(993046),
    u = n(970207),
    c = n(652215);
let d = 12 * a.A.Millis.HOUR,
    _ = +a.A.Millis.HOUR;
function f(e) {
    return e?.type === "error" ? _ : d;
}
function p(e) {
    if (!(0, u.y)({ location: "shouldFetchStorefrontPrices" }))
        return { shouldFetch: !1, filteredSkuIds: [], applicationId: null };
    if ("application" === e.type) {
        let t = o.A.getFetchStateForApplicationId(e.applicationId),
            n = f(t);
        return null != t && ("loading" === t.type || t.fetchedAt > Date.now() - n)
            ? { shouldFetch: !1, filteredSkuIds: [], applicationId: e.applicationId }
            : { shouldFetch: !0, filteredSkuIds: [], applicationId: e.applicationId };
    }
    {
        let t = e.skuIds.filter((e) => {
            let t = o.A.getFetchStateForSkuId(e);
            if (null == t) return !0;
            let n = f(t);
            return "loading" !== t.type && t.fetchedAt < Date.now() - n;
        });
        return 0 === t.length
            ? { shouldFetch: !1, filteredSkuIds: [], applicationId: null }
            : { shouldFetch: !0, filteredSkuIds: t.map((e) => e), applicationId: null };
    }
}
async function h(e) {
    await E({ type: "application", applicationId: e });
}
async function m(e) {
    await E({ type: "skus", skuIds: e });
}
async function E(e) {
    let { shouldFetch: t, filteredSkuIds: n, applicationId: a } = p(e);
    if (!t) return;
    let o = null != a ? { type: "application", applicationId: a } : { type: "skus", skuIds: n };
    try {
        i.h.dispatch({ type: "SKUS_PRICING_FETCH_START", priceId: o });
        let e = null != a ? { application_id: a } : { sku_ids: n },
            t = (
                await r.Bo.get({
                    url: c.Rsh.STOREFRONT_PRICES,
                    query: { ...e, country_code: s.A.ipCountryCode ?? void 0 },
                    rejectWithError: !0,
                })
            ).body;
        i.h.dispatch({ type: "SKUS_PRICING_FETCH_SUCCESS", priceId: o, data: (0, l.O)(t) });
    } catch {
        i.h.dispatch({ type: "SKUS_PRICING_FETCH_FAIL", priceId: o });
    }
}
