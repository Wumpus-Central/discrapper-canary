n.d(t, { Z: () => d }), n(388685);
var r = n(473749),
    i = n(442837),
    a = n(821849),
    o = n(509545),
    s = n(78839),
    l = n(289393),
    c = n(697227),
    u = n(981631);
function d(e) {
    let t = (0, i.e7)([s.Z], () => s.Z.getSubscriptions()),
        n = r.useMemo(() => {
            if (null == t) return {};
            let e = {};
            for (let n of Object.values(t)) n.type === u.NYc.GUILD && (e[(0, c.W)(n)] = n);
            return e;
        }, [t]),
        { activeSubscription: d, activeSubscriptionListing: f } = (0, i.cj)([l.Z], () => {
            var t;
            let r,
                i = null,
                a = null != e ? l.Z.getSubscriptionGroupListing(e) : null;
            for (let e of null != (t = null == a ? void 0 : a.subscription_listings_ids) ? t : []) {
                let t = l.Z.getSubscriptionListing(e),
                    a = null == t ? void 0 : t.subscription_plans[0].id;
                if (null == a) continue;
                let o = n[a];
                if (null != o) {
                    (i = o), (r = t);
                    break;
                }
            }
            return {
                activeSubscription: i,
                activeSubscriptionListing: r,
            };
        }),
        _ = null == f ? void 0 : f.subscription_plans[0],
        p = null == _ ? void 0 : _.id,
        h = null == _ ? void 0 : _.sku_id,
        m = (0, i.e7)([o.Z], () => (null != p ? o.Z.get(p) : null)),
        g = null == f ? void 0 : f.soft_deleted;
    return (
        r.useEffect(() => {
            null != m || null == h || o.Z.isFetchingForSKU(h) || (0, a.GZ)(h, void 0, void 0, g);
        }, [m, h, g]),
        {
            activeSubscription: d,
            activeSubscriptionListing: f,
            activeSubscriptionPlanFromStore: m,
        }
    );
}
