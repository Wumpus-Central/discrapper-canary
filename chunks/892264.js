(n.d(t, { Z: () => p }), n(388685));
var r = n(355467),
    i = n(496929),
    a = n(147913),
    o = n(594174),
    s = n(351402),
    l = n(78839),
    c = n(580130),
    u = n(111361),
    d = n(474936);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class f extends a.Z {
    constructor(...e) {
        (super(...e),
            _(this, 'actions', {
                POST_CONNECTION_OPEN: () => {
                    (this.maybeFetchSubscriptions(), this.maybeFetchCountryCode(), this.maybeFetchMostRecentSubscription());
                }
            }),
            _(this, 'maybeFetchSubscriptions', async () => {
                let e = o.default.getCurrentUser(),
                    t = s.Z.isSubscriptionFetching;
                if ((0, u.I5)(e)) {
                    l.Z.hasFetchedSubscriptions() || t || (await (0, r.jg)());
                    let e = l.Z.getPremiumSubscription();
                    (null == e ? void 0 : e.paymentSourceId) != null || c.Z.applicationIdsFetched.has(d.CL) || (await (0, i.yD)(d.CL));
                }
            }),
            _(this, 'maybeFetchMostRecentSubscription', () => {
                var e;
                let t = o.default.getCurrentUser(),
                    n = (0, u.xI)(null != (e = null == t ? void 0 : t.premiumType) ? e : null, d.p9.TIER_1),
                    i = l.Z.getIsFetchingMostRecentSubscription();
                null != t && n && t.hasHadPremium() && !i && (0, r.ou)();
            }),
            _(this, 'maybeFetchCountryCode', async () => {
                let e = o.default.getCurrentUser();
                (0, u.I5)(e) && !s.Z.ipCountryCodeLoaded && (await this.fetchCountryCode());
            }),
            _(this, 'fetchCountryCode', async () => {
                (await (0, r.GE)(), null != s.Z.ipCountryCode && (await (0, r.tZ)()));
            }));
    }
}
let p = new f();
