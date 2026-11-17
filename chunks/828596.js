var i = n(620632),
    r = n(73153),
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
    f = l.A.Millis.MINUTE,
    h = l.A.Millis.MINUTE;
function I(e) {
    let t = c.A.getFetchState(e);
    if (void 0 === t) return !0;
    if ("loading" === t) return !1;
    let n = c.A.getFetchedAt(e);
    return null == n || Date.now() - n > ("error" === t ? A : f);
}
async function p(e) {
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
function m(e) {
    return e?.type === "error" ? A : h;
}
async function g(e) {
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
n.d(
    t,
    {},
    {
        J_: function (e) {
            r.h.dispatch({ type: "STOREFRONT_PROMOTION_ID_OVERRIDE_SET", promotionIdOverride: e });
        },
        N4: async function (e) {
            let { skuIds: t } = e;
            await g({ type: "skus", skuIds: t });
        },
        cF: async function (e, t) {
            let n;
            r.h.dispatch({ type: "STOREFRONT_PROMOTION_CLAIM_START", promotionId: e });
            try {
                n = await i.Bo.post({ url: E.Rsh.STOREFRONT_PROMOTION_CLAIM(e), body: {}, rejectWithError: !0 });
            } catch (n) {
                let t = new a.A(n);
                throw (r.h.dispatch({ type: "STOREFRONT_PROMOTION_CLAIM_FAIL", promotionId: e, apiError: t }), t);
            }
            return (r.h.dispatch({ type: "STOREFRONT_PROMOTION_CLAIM_SUCCESS", promotionId: e }), await p([t]), n.body);
        },
        l9: async function (e) {
            let { applicationId: t } = e;
            await g({ type: "application", applicationId: t });
        },
        rd: p,
        tx: async function (e) {
            let t = e.filter(I);
            0 !== t.length && (await p(t));
        },
    },
);
