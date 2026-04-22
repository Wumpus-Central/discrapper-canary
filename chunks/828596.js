i.d(e, { N4: () => h, l9: () => S });
var r = i(562465),
    s = i(73153),
    n = i(615405),
    l = i(927813),
    a = i(561573);
i(918467);
var o = i(993046),
    u = i(970207);
i(65238);
var d = i(652215);
l.A.Millis.HOUR;
let c = 10 * l.A.Millis.MINUTE;
function p(t, e) {
    return t?.type === "error" ? c : (0, u.g6)({ location: e });
}
async function S(t) {
    let { applicationId: e, location: i } = t;
    await I({ type: "application", applicationId: e }, i);
}
async function h(t) {
    let { skuIds: e, location: i } = t;
    await I({ type: "skus", skuIds: e }, i);
}
async function I(t, e) {
    let {
        shouldFetch: i,
        filteredSkuIds: l,
        applicationId: c,
    } = (function (t, e) {
        if (!(0, u.yS)({ location: e })) return { shouldFetch: !1, filteredSkuIds: [], applicationId: null };
        if ("application" === t.type) {
            let i = a.A.getFetchStateForApplicationId(t.applicationId),
                r = p(i, e);
            return null != i && ("loading" === i.type || i.fetchedAt > Date.now() - r)
                ? { shouldFetch: !1, filteredSkuIds: [], applicationId: t.applicationId }
                : { shouldFetch: !0, filteredSkuIds: [], applicationId: t.applicationId };
        }
        {
            let i = t.skuIds
                .filter((t) => {
                    let i = a.A.getFetchStateForSkuId(t);
                    if (null == i) return !0;
                    let r = p(i, e);
                    return "loading" !== i.type && i.fetchedAt < Date.now() - r;
                })
                .sort((t, e) => {
                    let i = a.A.getFetchStateForSkuId(t),
                        r = a.A.getFetchStateForSkuId(e);
                    return null == i && null != r ? -1 : +(null != i && null == r);
                });
            return 0 === i.length
                ? { shouldFetch: !1, filteredSkuIds: [], applicationId: null }
                : { shouldFetch: !0, filteredSkuIds: i.slice(0, 50), applicationId: null };
        }
    })(t, e);
    if (!i) return;
    let S = null != c ? { type: "application", applicationId: c } : { type: "skus", skuIds: l };
    try {
        s.h.dispatch({ type: "SKUS_PRICING_FETCH_START", priceId: S });
        let t = (
            await r.Bo.get({
                url: d.Rsh.STOREFRONT_PRICES,
                query: {
                    ...(null != c ? { application_id: c } : { sku_ids: l }),
                    country_code: n.A.ipCountryCode ?? void 0,
                },
                rejectWithError: !0,
            })
        ).body;
        s.h.dispatch({ type: "SKUS_PRICING_FETCH_SUCCESS", priceId: S, data: (0, o.Oj)(t) });
    } catch {
        s.h.dispatch({ type: "SKUS_PRICING_FETCH_FAIL", priceId: S });
    }
}
