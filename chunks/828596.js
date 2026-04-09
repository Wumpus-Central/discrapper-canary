"use strict";
n.d(t, { N4: () => E, l9: () => m });
var r = n(562465),
    i = n(73153),
    s = n(615405),
    a = n(927813),
    o = n(561573);
n(416853), n(918467);
var l = n(993046),
    u = n(970207),
    c = n(652215);
let d = 50,
    _ = 12 * a.A.Millis.HOUR,
    f = 10 * a.A.Millis.MINUTE;
function p(e, t) {
    return e?.type === "error" ? f : (0, u.g6)({ location: t });
}
function h(e, t) {
    if (!(0, u.yS)({ location: t })) return { shouldFetch: !1, filteredSkuIds: [], applicationId: null };
    if ("application" === e.type) {
        let n = o.A.getFetchStateForApplicationId(e.applicationId),
            r = p(n, t);
        return null != n && ("loading" === n.type || n.fetchedAt > Date.now() - r)
            ? { shouldFetch: !1, filteredSkuIds: [], applicationId: e.applicationId }
            : { shouldFetch: !0, filteredSkuIds: [], applicationId: e.applicationId };
    }
    {
        let n = e.skuIds
            .filter((e) => {
                let n = o.A.getFetchStateForSkuId(e);
                if (null == n) return !0;
                let r = p(n, t);
                return "loading" !== n.type && n.fetchedAt < Date.now() - r;
            })
            .sort((e, t) => {
                let n = o.A.getFetchStateForSkuId(e),
                    r = o.A.getFetchStateForSkuId(t);
                return null == n && null != r ? -1 : +(null != n && null == r);
            });
        return 0 === n.length
            ? { shouldFetch: !1, filteredSkuIds: [], applicationId: null }
            : { shouldFetch: !0, filteredSkuIds: n.slice(0, d), applicationId: null };
    }
}
async function m(e) {
    let { applicationId: t, location: n } = e;
    await g({ type: "application", applicationId: t }, n);
}
async function E(e) {
    let { skuIds: t, location: n } = e;
    await g({ type: "skus", skuIds: t }, n);
}
async function g(e, t) {
    let { shouldFetch: n, filteredSkuIds: a, applicationId: o } = h(e, t);
    if (!n) return;
    let u = null != o ? { type: "application", applicationId: o } : { type: "skus", skuIds: a };
    try {
        i.h.dispatch({ type: "SKUS_PRICING_FETCH_START", priceId: u });
        let e = null != o ? { application_id: o } : { sku_ids: a },
            t = (
                await r.Bo.get({
                    url: c.Rsh.STOREFRONT_PRICES,
                    query: { ...e, country_code: s.A.ipCountryCode ?? void 0 },
                    rejectWithError: !0,
                })
            ).body;
        i.h.dispatch({ type: "SKUS_PRICING_FETCH_SUCCESS", priceId: u, data: (0, l.Oj)(t) });
    } catch {
        i.h.dispatch({ type: "SKUS_PRICING_FETCH_FAIL", priceId: u });
    }
}
