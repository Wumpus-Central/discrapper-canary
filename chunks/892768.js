n.d(t, { kK: () => d, Yf: () => o });
var i = n(121401),
    r = n(998218),
    a = n(403362),
    s = n(167189);
let l = new Set([
    s.I.APP_DIRECTORY_PROFILE,
    s.I.ACTIVITY_BOOKMARK,
    s.I.APP_DIRECTORY_STOREFRONT,
    s.I.APP_DIRECTORY_STOREFRONT_SKU,
    s.I.APP_OAUTH2_LINK,
]);
function o(e) {
    return (0, a.Eo)(e, l);
}
function d(e, t, n) {
    switch (e) {
        case s.I.APP_DIRECTORY_PROFILE:
        case s.I.APP_OAUTH2_LINK:
        case s.I.APP_DIRECTORY_STOREFRONT:
            return { type: e, applicationId: t };
        case s.I.APP_DIRECTORY_STOREFRONT_SKU: {
            let n = (0, i.u)(t);
            if (null == n) return null;
            let { applicationId: r, skuId: a } = n;
            return { type: e, applicationId: r, skuId: a };
        }
        case s.I.ACTIVITY_BOOKMARK: {
            let i, a;
            return {
                type: e,
                applicationId: t,
                params:
                    ((i = r.A.toURLSafe(n)),
                    (a = i?.searchParams.get("referrer_id") ?? void 0),
                    {
                        referrerId: a,
                        customId: i?.searchParams.get("custom_id") ?? void 0,
                        linkId: i?.searchParams.get("link_id") ?? void 0,
                    }),
            };
        }
    }
}
s.I.APP_DIRECTORY_PROFILE, s.I.ACTIVITY_BOOKMARK, s.I.APP_OAUTH2_LINK;
