(n.d(t, { Z: () => u }), n(388685));
var i = n(73800),
    r = n(442837),
    l = n(821849),
    a = n(509545),
    s = n(78839),
    o = n(289393),
    c = n(697227),
    d = n(981631);
function u(e) {
    let t = (0, r.e7)([s.Z], () => s.Z.getSubscriptions()),
        n = i.useMemo(() => {
            if (null == t) return {};
            let e = {};
            for (let n of Object.values(t)) n.type === d.NYc.GUILD && (e[(0, c.W)(n)] = n);
            return e;
        }, [t]),
        { activeSubscription: u, activeSubscriptionListing: m } = (0, r.cj)([o.Z], () => {
            var t;
            let i,
                r = null,
                l = null != e ? o.Z.getSubscriptionGroupListing(e) : null;
            for (let e of null != (t = null == l ? void 0 : l.subscription_listings_ids) ? t : []) {
                let t = o.Z.getSubscriptionListing(e),
                    l = null == t ? void 0 : t.subscription_plans[0].id;
                if (null == l) continue;
                let a = n[l];
                if (null != a) {
                    ((r = a), (i = t));
                    break;
                }
            }
            return {
                activeSubscription: r,
                activeSubscriptionListing: i
            };
        }),
        f = null == m ? void 0 : m.subscription_plans[0],
        h = null == f ? void 0 : f.id,
        g = null == f ? void 0 : f.sku_id,
        v = (0, r.e7)([a.Z], () => (null != h ? a.Z.get(h) : null)),
        p = null == m ? void 0 : m.soft_deleted;
    return (
        i.useEffect(() => {
            null != v || null == g || a.Z.isFetchingForSKU(g) || (0, l.GZ)(g, void 0, void 0, p);
        }, [v, g, p]),
        {
            activeSubscription: u,
            activeSubscriptionListing: m,
            activeSubscriptionPlanFromStore: v
        }
    );
}
