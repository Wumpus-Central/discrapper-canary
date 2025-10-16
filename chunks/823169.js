n.d(t, { Z: () => p }), n(388685);
var r = n(570140),
    i = n(317770),
    l = n(601964),
    a = n(430824),
    o = n(594174),
    s = n(358085),
    c = n(53365),
    u = n(981631);
class d extends i.Z {
    _initialize() {
        r.Z.subscribe("CONNECTION_OPEN", this.maybeFetchEligiblity);
    }
    _terminate() {
        r.Z.unsubscribe("CONNECTION_OPEN", this.maybeFetchEligiblity);
    }
    constructor(...e) {
        super(...e),
            (function (e, t, n) {
                t in e
                    ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = n);
            })(this, "maybeFetchEligiblity", async () => {
                if ((0, s.isDesktop)() || (0, s.isWeb)()) {
                    let e = a.Z.getGuildsArray(),
                        t = o.default.getCurrentUser(),
                        n = e.filter(
                            (e) =>
                                (0, l.eM)(e, t) &&
                                !e.features.has(u.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) &&
                                !e.features.has(u.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED) &&
                                !e.features.has(u.GuildFeatures.CREATOR_MONETIZABLE_DISABLED) &&
                                (e.features.has(u.GuildFeatures.CREATOR_MONETIZABLE) ||
                                    e.features.has(u.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)),
                        );
                    n.length > 0 && (await (0, c.av)(n.map((e) => e.id)));
                }
            });
    }
}
let p = new d();
