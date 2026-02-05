n.d(t, { A: () => A });
var i = n(73153),
    r = n(272355),
    a = n(260509),
    l = n(71393),
    s = n(287809),
    o = n(723702),
    d = n(493540),
    c = n(652215);
class u extends r.A {
    _initialize() {
        i.h.subscribe("CONNECTION_OPEN", this.maybeFetchEligiblity);
    }
    _terminate() {
        i.h.unsubscribe("CONNECTION_OPEN", this.maybeFetchEligiblity);
    }
    maybeFetchEligiblity = async () => {
        if ((0, o.isDesktop)() || (0, o.isWeb)()) {
            let e = l.A.getGuildsArray(),
                t = s.default.getCurrentUser(),
                n = e.filter(
                    (e) =>
                        (0, a.bM)(e, t) &&
                        !e.features.has(c.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) &&
                        !e.features.has(c.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED) &&
                        !e.features.has(c.GuildFeatures.CREATOR_MONETIZABLE_DISABLED) &&
                        (e.features.has(c.GuildFeatures.CREATOR_MONETIZABLE) ||
                            e.features.has(c.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)),
                );
            n.length > 0 && (await (0, d._8)(n.map((e) => e.id)));
        }
    };
}
let A = new u();
