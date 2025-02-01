n.d(t, { Z: () => h }), n(47120);
var i,
    r = n(442837),
    a = n(570140),
    s = n(168232),
    o = n(430824),
    l = n(594174),
    u = n(987338),
    c = n(48541);
function d(e, t, n) {
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
let f = 'production' === c.C.DEVELOPMENT || window.GLOBAL_ENV.RELEASE_CHANNEL === c.C.STAGING;
function _() {
    f = (0, s.QI)(l.default.getCurrentUser());
}
class p extends (i = r.ZP.Store) {
    initialize() {
        this.waitFor(l.default, o.Z),
            Object.defineProperties(this, {
                isDeveloper: {
                    configurable: !1,
                    get: () => f,
                    set: () => {}
                }
            }),
            _(),
            setTimeout(() => Object.freeze(this));
    }
    getExperimentDescriptor() {
        return f
            ? {
                  type: 'developer',
                  name: 'discord_dev_testing',
                  revision: 1,
                  override: !0,
                  bucket: u.NZ.TREATMENT_1
              }
            : null;
    }
    constructor(...e) {
        super(...e), d(this, 'isDeveloper', !1);
    }
}
d(p, 'displayName', 'DeveloperExperimentStore');
let h = new p(a.Z, {
    CONNECTION_OPEN: _,
    OVERLAY_INITIALIZE: _,
    CURRENT_USER_UPDATE: _
});
