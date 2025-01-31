n.d(t, { Z: () => u }), n(47120);
var i = n(192379),
    l = n(442837),
    a = n(821849),
    r = n(509545),
    s = n(78839),
    o = n(289393),
    c = n(697227),
    d = n(981631);
function u(e) {
    let t = (0, l.e7)([s.ZP], () => s.ZP.getSubscriptions()),
        n = i.useMemo(() => {
            if (null == t) return {};
            let e = {};
            for (let n of Object.values(t)) n.type === d.NYc.GUILD && (e[(0, c.W)(n)] = n);
            return e;
        }, [t]),
        { activeSubscription: u, activeSubscriptionListing: m } = (0, l.cj)([o.Z], () => {
            var t;
            let i,
                l = null,
                a = null != e ? o.Z.getSubscriptionGroupListing(e) : null;
            for (let e of null !== (t = null == a ? void 0 : a.subscription_listings_ids) && void 0 !== t ? t : []) {
                let t = o.Z.getSubscriptionListing(e),
                    a = null == t ? void 0 : t.subscription_plans[0].id;
                if (null == a) continue;
                let r = n[a];
                if (null != r) {
                    (l = r), (i = t);
                    break;
                }
            }
            return {
                activeSubscription: l,
                activeSubscriptionListing: i
            };
        }),
        h = null == m ? void 0 : m.subscription_plans[0],
        _ = null == h ? void 0 : h.id,
        p = null == h ? void 0 : h.sku_id,
        g = (0, l.e7)([r.Z], () => (null != _ ? r.Z.get(_) : null)),
        f = null == m ? void 0 : m.soft_deleted;
    return (
        i.useEffect(() => {
            null != g || null == p || r.Z.isFetchingForSKU(p) || (0, a.GZ)(p, void 0, void 0, f);
        }, [g, p, f]),
        {
            activeSubscription: u,
            activeSubscriptionListing: m,
            activeSubscriptionPlanFromStore: g
        }
    );
}
