n.d(t, { Z: () => p }), n(47120);
var r = n(355467),
    i = n(496929),
    o = n(147913),
    a = n(594174),
    s = n(351402),
    l = n(78839),
    c = n(580130),
    u = n(111361),
    d = n(474936);
function f(e, t, n) {
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
class _ extends o.Z {
    constructor(...e) {
        super(...e),
            f(this, 'actions', {
                POST_CONNECTION_OPEN: () => {
                    this.maybeFetchSubscriptions(), this.maybeFetchCountryCode(), this.maybeFetchMostRecentSubscription();
                }
            }),
            f(this, 'maybeFetchSubscriptions', async () => {
                let e = a.default.getCurrentUser();
                if ((0, u.I5)(e)) {
                    l.ZP.hasFetchedSubscriptions() || (await (0, r.jg)());
                    let e = l.ZP.getPremiumSubscription();
                    (null == e ? void 0 : e.paymentSourceId) != null || c.Z.applicationIdsFetched.has(d.CL) || (await (0, i.yD)(d.CL));
                }
            }),
            f(this, 'maybeFetchMostRecentSubscription', () => {
                var e;
                let t = a.default.getCurrentUser(),
                    n = (0, u.xI)(null != (e = null == t ? void 0 : t.premiumType) ? e : null, d.p9.TIER_1);
                null != t && n && t.hasHadPremium() && (0, r.ou)();
            }),
            f(this, 'maybeFetchCountryCode', async () => {
                let e = a.default.getCurrentUser();
                (0, u.I5)(e) && !s.Z.ipCountryCodeLoaded && (await this.fetchCountryCode());
            }),
            f(this, 'fetchCountryCode', async () => {
                await (0, r.GE)(), null != s.Z.ipCountryCode && (await (0, r.tZ)());
            });
    }
}
let p = new _();
