n.d(t, {
    Z: function () {
        return d;
    }
}),
    n(47120);
var i = n(192379),
    r = n(442837),
    l = n(821849),
    a = n(509545),
    o = n(78839),
    s = n(289393),
    c = n(697227),
    u = n(981631);
function d(e) {
    let t = (0, r.e7)([o.ZP], () => o.ZP.getSubscriptions()),
        n = i.useMemo(() => {
            if (null == t) return {};
            let e = {};
            for (let n of Object.values(t)) n.type === u.NYc.GUILD && (e[(0, c.W)(n)] = n);
            return e;
        }, [t]),
        { activeSubscription: d, activeSubscriptionListing: m } = (0, r.cj)([s.Z], () => {
            var t;
            let i,
                r = null,
                l = null != e ? s.Z.getSubscriptionGroupListing(e) : null;
            for (let e of null !== (t = null == l ? void 0 : l.subscription_listings_ids) && void 0 !== t ? t : []) {
                let t = s.Z.getSubscriptionListing(e),
                    l = null == t ? void 0 : t.subscription_plans[0].id;
                if (null == l) continue;
                let a = n[l];
                if (null != a) {
                    (r = a), (i = t);
                    break;
                }
            }
            return {
                activeSubscription: r,
                activeSubscriptionListing: i
            };
        }),
        h = null == m ? void 0 : m.subscription_plans[0],
        f = null == h ? void 0 : h.id,
        p = null == h ? void 0 : h.sku_id,
        _ = (0, r.e7)([a.Z], () => (null != f ? a.Z.get(f) : null)),
        g = null == m ? void 0 : m.soft_deleted;
    return (
        i.useEffect(() => {
            null == _ && null != p && !a.Z.isFetchingForSKU(p) && (0, l.GZ)(p, void 0, void 0, g);
        }, [_, p, g]),
        {
            activeSubscription: d,
            activeSubscriptionListing: m,
            activeSubscriptionPlanFromStore: _
        }
    );
}
