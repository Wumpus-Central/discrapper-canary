n(47120);
var i = n(570140),
    r = n(317770),
    l = n(430824),
    a = n(594174),
    s = n(358085),
    o = n(53365),
    c = n(981631);
class d extends r.Z {
    _initialize() {
        i.Z.subscribe('CONNECTION_OPEN', this.maybeFetchEligiblity);
    }
    _terminate() {
        i.Z.unsubscribe('CONNECTION_OPEN', this.maybeFetchEligiblity);
    }
    constructor(...e) {
        var t, n, i;
        super(...e),
            (t = this),
            (n = 'maybeFetchEligiblity'),
            (i = async () => {
                if ((0, s.isDesktop)() || (0, s.isWeb)()) {
                    let e = Object.values(l.Z.getGuilds()),
                        t = a.default.getCurrentUser(),
                        n = e.filter((e) => e.isOwner(t) && !e.hasFeature(c.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) && !e.hasFeature(c.oNc.CREATOR_MONETIZABLE_RESTRICTED) && !e.hasFeature(c.oNc.CREATOR_MONETIZABLE_DISABLED) && (e.hasFeature(c.oNc.CREATOR_MONETIZABLE) || e.hasFeature(c.oNc.CREATOR_MONETIZABLE_PROVISIONAL)));
                    n.length > 0 && (await (0, o.av)(n.map((e) => e.id)));
                }
            }),
            n in t
                ? Object.defineProperty(t, n, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = i);
    }
}
t.Z = new d();
