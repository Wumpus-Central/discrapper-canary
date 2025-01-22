var i,
    a = r(47120);
var o = r(442837),
    s = r(570140),
    l = r(168232),
    u = r(430824),
    c = r(594174),
    d = r(987338),
    f = r(48541);
function p(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let h = 'production' === f.C.DEVELOPMENT || window.GLOBAL_ENV.RELEASE_CHANNEL === f.C.STAGING;
function _() {
    h = (0, l.QI)(c.default.getCurrentUser());
}
class m extends (i = o.ZP.Store) {
    initialize() {
        this.waitFor(c.default, u.Z),
            Object.defineProperties(this, {
                isDeveloper: {
                    configurable: !1,
                    get: () => h,
                    set: () => {}
                }
            }),
            _(),
            setTimeout(() => Object.freeze(this));
    }
    getExperimentDescriptor() {
        return h
            ? {
                  type: 'developer',
                  name: 'discord_dev_testing',
                  revision: 1,
                  override: !0,
                  bucket: d.NZ.TREATMENT_1
              }
            : null;
    }
    constructor(...e) {
        super(...e), p(this, 'isDeveloper', !1);
    }
}
p(m, 'displayName', 'DeveloperExperimentStore'),
    (n.Z = new m(s.Z, {
        CONNECTION_OPEN: _,
        OVERLAY_INITIALIZE: _,
        CURRENT_USER_UPDATE: _
    }));
