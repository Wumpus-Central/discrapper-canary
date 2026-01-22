n.d(t, {
    A: () => p,
}),
    n(896048);
var r = n(73153),
    i = n(272355),
    l = n(260509),
    a = n(71393),
    s = n(287809),
    o = n(723702),
    c = n(493540),
    u = n(652215);
class d extends i.A {
    _initialize() {
        r.h.subscribe("CONNECTION_OPEN", this.maybeFetchEligiblity);
    }
    _terminate() {
        r.h.unsubscribe("CONNECTION_OPEN", this.maybeFetchEligiblity);
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
                if ((0, o.isDesktop)() || (0, o.isWeb)()) {
                    let e = a.A.getGuildsArray(),
                        t = s.default.getCurrentUser(),
                        n = e.filter(
                            (e) =>
                                (0, l.bM)(e, t) &&
                                !e.features.has(u.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) &&
                                !e.features.has(u.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED) &&
                                !e.features.has(u.GuildFeatures.CREATOR_MONETIZABLE_DISABLED) &&
                                (e.features.has(u.GuildFeatures.CREATOR_MONETIZABLE) ||
                                    e.features.has(u.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)),
                        );
                    n.length > 0 && (await (0, c._8)(n.map((e) => e.id)));
                }
            });
    }
}
let p = new d();
