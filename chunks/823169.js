n.d(t, { Z: () => u }), n(47120);
var i = n(570140),
    l = n(317770),
    r = n(430824),
    a = n(594174),
    s = n(358085),
    o = n(53365),
    c = n(981631);
class d extends l.Z {
    _initialize() {
        i.Z.subscribe('CONNECTION_OPEN', this.maybeFetchEligiblity);
    }
    _terminate() {
        i.Z.unsubscribe('CONNECTION_OPEN', this.maybeFetchEligiblity);
    }
    constructor(...e) {
        var t, n;
        super(...e),
            (t = 'maybeFetchEligiblity'),
            (n = async () => {
                if ((0, s.isDesktop)() || (0, s.isWeb)()) {
                    let e = Object.values(r.Z.getGuilds()),
                        t = a.default.getCurrentUser(),
                        n = e.filter((e) => e.isOwner(t) && !e.hasFeature(c.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) && !e.hasFeature(c.oNc.CREATOR_MONETIZABLE_RESTRICTED) && !e.hasFeature(c.oNc.CREATOR_MONETIZABLE_DISABLED) && (e.hasFeature(c.oNc.CREATOR_MONETIZABLE) || e.hasFeature(c.oNc.CREATOR_MONETIZABLE_PROVISIONAL)));
                    n.length > 0 && (await (0, o.av)(n.map((e) => e.id)));
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
let u = new d();
