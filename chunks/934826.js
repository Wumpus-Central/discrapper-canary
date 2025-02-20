n.d(t, { Z: () => u }), n(47120);
var r = n(192379),
    i = n(442837),
    a = n(821849),
    o = n(509545),
    l = n(78839),
    s = n(289393),
    c = n(697227),
    d = n(981631);
function u(e) {
    let t = (0, i.e7)([l.ZP], () => l.ZP.getSubscriptions()),
        n = r.useMemo(() => {
            if (null == t) return {};
            let e = {};
            for (let n of Object.values(t)) n.type === d.NYc.GUILD && (e[(0, c.W)(n)] = n);
            return e;
        }, [t]),
        { activeSubscription: u, activeSubscriptionListing: p } = (0, i.cj)([s.Z], () => {
            var t;
            let r,
                i = null,
                a = null != e ? s.Z.getSubscriptionGroupListing(e) : null;
            for (let e of null !== (t = null == a ? void 0 : a.subscription_listings_ids) && void 0 !== t ? t : []) {
                let t = s.Z.getSubscriptionListing(e),
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
                activeSubscriptionListing: r
            };
        }),
        m = null == p ? void 0 : p.subscription_plans[0],
        f = null == m ? void 0 : m.id,
        h = null == m ? void 0 : m.sku_id,
        g = (0, i.e7)([o.Z], () => (null != f ? o.Z.get(f) : null)),
        _ = null == p ? void 0 : p.soft_deleted;
    return (
        r.useEffect(() => {
            null != g || null == h || o.Z.isFetchingForSKU(h) || (0, a.GZ)(h, void 0, void 0, _);
        }, [g, h, _]),
        {
            activeSubscription: u,
            activeSubscriptionListing: p,
            activeSubscriptionPlanFromStore: g
        }
    );
}
