var i = r(47120);
var a = r(147913),
    o = r(313261),
    s = r(38618);
function l(e, n, r) {
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
class u extends a.Z {
    handleCheckExperiments() {
        let { enabled: e } = o.O.getCurrentConfig({ location: 'gateway' }, { autoTrackExposure: !0 });
        s.Z.getSocket().dispatcher.toggleRequestIdleCallback(e);
    }
    constructor(...e) {
        super(...e),
            l(this, 'actions', {
                EXPERIMENT_OVERRIDE_BUCKET: this.handleCheckExperiments,
                LOGIN_SUCCESS: this.handleCheckExperiments,
                EXPERIMENTS_FETCH_SUCCESS: this.handleCheckExperiments,
                POST_CONNECTION_OPEN: this.handleCheckExperiments,
                CACHE_LOADED: this.handleCheckExperiments
            });
    }
}
n.Z = new u();
