"use strict";
n.d(t, { N4: () => p, l9: () => f });
var r = n(562465),
    i = n(73153),
    s = n(615405),
    a = n(927813),
    o = n(561573);
n(918467);
var l = n(993046),
    u = n(970207);
n(65238);
var c = n(652215);
a.A.Millis.HOUR;
let d = 10 * a.A.Millis.MINUTE;
function _(e, t) {
    return e?.type === "error" ? d : (0, u.g6)({ location: t });
}
async function f(e) {
    let { applicationId: t, location: n } = e;
    await h({ type: "application", applicationId: t }, n);
}
async function p(e) {
    let { skuIds: t, location: n } = e;
    await h({ type: "skus", skuIds: t }, n);
}
async function h(e, t) {
    let {
        shouldFetch: n,
        filteredSkuIds: a,
        applicationId: d,
    } = (function (e, t) {
        if (!(0, u.yS)({ location: t })) return { shouldFetch: !1, filteredSkuIds: [], applicationId: null };
        if ("application" === e.type) {
            let n = o.A.getFetchStateForApplicationId(e.applicationId),
                r = _(n, t);
            return null != n && ("loading" === n.type || n.fetchedAt > Date.now() - r)
                ? { shouldFetch: !1, filteredSkuIds: [], applicationId: e.applicationId }
                : { shouldFetch: !0, filteredSkuIds: [], applicationId: e.applicationId };
        }
        {
            let n = e.skuIds
                .filter((e) => {
                    let n = o.A.getFetchStateForSkuId(e);
                    if (null == n) return !0;
                    let r = _(n, t);
                    return "loading" !== n.type && n.fetchedAt < Date.now() - r;
                })
                .sort((e, t) => {
                    let n = o.A.getFetchStateForSkuId(e),
                        r = o.A.getFetchStateForSkuId(t);
                    return null == n && null != r ? -1 : +(null != n && null == r);
                });
            return 0 === n.length
                ? { shouldFetch: !1, filteredSkuIds: [], applicationId: null }
                : { shouldFetch: !0, filteredSkuIds: n.slice(0, 50), applicationId: null };
        }
    })(e, t);
    if (!n) return;
    let f = null != d ? { type: "application", applicationId: d } : { type: "skus", skuIds: a };
    try {
        i.h.dispatch({ type: "SKUS_PRICING_FETCH_START", priceId: f });
        let e = (
            await r.Bo.get({
                url: c.Rsh.STOREFRONT_PRICES,
                query: {
                    ...(null != d ? { application_id: d } : { sku_ids: a }),
                    country_code: s.A.ipCountryCode ?? void 0,
                },
                rejectWithError: !0,
            })
        ).body;
        i.h.dispatch({ type: "SKUS_PRICING_FETCH_SUCCESS", priceId: f, data: (0, l.Oj)(e) });
    } catch {
        i.h.dispatch({ type: "SKUS_PRICING_FETCH_FAIL", priceId: f });
    }
}
