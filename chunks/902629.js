n.d(t, { Z: () => l }), n(47120);
var i = n(147913),
    r = n(313261),
    a = n(38618);
function s(e, t, n) {
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
class o extends i.Z {
    handleCheckExperiments() {
        let { enabled: e } = r.O.getCurrentConfig({ location: 'gateway' }, { autoTrackExposure: !0 });
        a.Z.getSocket().dispatcher.toggleRequestIdleCallback(e);
    }
    constructor(...e) {
        super(...e),
            s(this, 'actions', {
                EXPERIMENT_OVERRIDE_BUCKET: this.handleCheckExperiments,
                LOGIN_SUCCESS: this.handleCheckExperiments,
                EXPERIMENTS_FETCH_SUCCESS: this.handleCheckExperiments,
                POST_CONNECTION_OPEN: this.handleCheckExperiments,
                CACHE_LOADED: this.handleCheckExperiments
            });
    }
}
let l = new o();
