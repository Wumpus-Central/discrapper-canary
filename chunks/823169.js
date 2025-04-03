n.d(t, { Z: () => d }), n(47120);
var r = n(570140),
    i = n(317770),
    l = n(430824),
    a = n(594174),
    o = n(358085),
    s = n(53365),
    c = n(981631);
class u extends i.Z {
    _initialize() {
        r.Z.subscribe('CONNECTION_OPEN', this.maybeFetchEligiblity);
    }
    _terminate() {
        r.Z.unsubscribe('CONNECTION_OPEN', this.maybeFetchEligiblity);
    }
    constructor(...e) {
        var t, n;
        super(...e),
            (t = 'maybeFetchEligiblity'),
            (n = async () => {
                if ((0, o.isDesktop)() || (0, o.isWeb)()) {
                    let e = Object.values(l.Z.getGuilds()),
                        t = a.default.getCurrentUser(),
                        n = e.filter((e) => e.isOwner(t) && !e.hasFeature(c.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) && !e.hasFeature(c.oNc.CREATOR_MONETIZABLE_RESTRICTED) && !e.hasFeature(c.oNc.CREATOR_MONETIZABLE_DISABLED) && (e.hasFeature(c.oNc.CREATOR_MONETIZABLE) || e.hasFeature(c.oNc.CREATOR_MONETIZABLE_PROVISIONAL)));
                    n.length > 0 && (await (0, s.av)(n.map((e) => e.id)));
                }
            }),
            t in this
                ? Object.defineProperty(this, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (this[t] = n);
    }
}
let d = new u();
