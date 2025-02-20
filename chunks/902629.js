n.d(t, { Z: () => l }), n(47120);
var r = n(147913),
    i = n(313261),
    o = n(38618);
function a(e, t, n) {
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
class s extends r.Z {
    handleCheckExperiments() {
        let { enabled: e } = i.O.getCurrentConfig({ location: 'gateway' }, { autoTrackExposure: !0 });
        o.Z.getSocket().dispatcher.toggleRequestIdleCallback(e);
    }
    constructor(...e) {
        super(...e),
            a(this, 'actions', {
                EXPERIMENT_OVERRIDE_BUCKET: this.handleCheckExperiments,
                LOGIN_SUCCESS: this.handleCheckExperiments,
                EXPERIMENTS_FETCH_SUCCESS: this.handleCheckExperiments,
                POST_CONNECTION_OPEN: this.handleCheckExperiments,
                CACHE_LOADED: this.handleCheckExperiments
            });
    }
}
let l = new s();
