(n.d(t, { Z: () => u }), n(388685));
var r = n(73800),
    i = n(442837),
    l = n(821849),
    a = n(509545),
    s = n(78839),
    o = n(289393),
    c = n(697227),
    d = n(981631);
function u(e) {
    let t = (0, i.e7)([s.ZP], () => s.ZP.getSubscriptions()),
        n = r.useMemo(() => {
            if (null == t) return {};
            let e = {};
            for (let n of Object.values(t)) n.type === d.NYc.GUILD && (e[(0, c.W)(n)] = n);
            return e;
        }, [t]),
        { activeSubscription: u, activeSubscriptionListing: m } = (0, i.cj)([o.Z], () => {
            var t;
            let r,
                i = null,
                l = null != e ? o.Z.getSubscriptionGroupListing(e) : null;
            for (let e of null != (t = null == l ? void 0 : l.subscription_listings_ids) ? t : []) {
                let t = o.Z.getSubscriptionListing(e),
                    l = null == t ? void 0 : t.subscription_plans[0].id;
                if (null == l) continue;
                let a = n[l];
                if (null != a) {
                    ((i = a), (r = t));
                    break;
                }
            }
            return {
                activeSubscription: i,
                activeSubscriptionListing: r
            };
        }),
        p = null == m ? void 0 : m.subscription_plans[0],
        f = null == p ? void 0 : p.id,
        h = null == p ? void 0 : p.sku_id,
        g = (0, i.e7)([a.Z], () => (null != f ? a.Z.get(f) : null)),
        C = null == m ? void 0 : m.soft_deleted;
    return (
        r.useEffect(() => {
            null != g || null == h || a.Z.isFetchingForSKU(h) || (0, l.GZ)(h, void 0, void 0, C);
        }, [g, h, C]),
        {
            activeSubscription: u,
            activeSubscriptionListing: m,
            activeSubscriptionPlanFromStore: g
        }
    );
}
