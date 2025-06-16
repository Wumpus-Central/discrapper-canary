n.d(t, { E: () => s }), n(415506), n(388685);
var r = n(633289);
function i(e, t, n) {
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
function a(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                i(e, t, n[t]);
            });
    }
    return e;
}
function o(e, t, n) {
    t.forEach((e) => {
        e.trackExposure(n);
    });
}
n(987338);
class s {
    registeredExperimentIds() {
        return this.experiments.map((e) => e.definition.id);
    }
    trigger() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        o(this.triggerPoint, this.experiments, a({}, this.params, e)), r.Z.trackCommonTriggerPointExposures(this.params.location);
    }
    getExperiments() {
        return this.experiments;
    }
    constructor(e, t, n) {
        i(this, 'experiments', void 0), i(this, 'triggerPoint', void 0), i(this, 'params', void 0), (this.experiments = e), (this.triggerPoint = t), (this.params = n);
    }
}
