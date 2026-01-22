n.d(t, {
    E: () => o,
}),
    n(65821),
    n(896048);
var r = n(217222);

function i(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function a(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                i(e, t, n[t]);
            });
    }
    return e;
}

function s(e, t, n) {
    t.forEach((e) => {
        e.trackExposure(n);
    });
}
n(688151);
class o {
    registeredExperimentIds() {
        return this.experiments.map((e) => e.definition.id);
    }
    trigger() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        r.A.trackCommonTriggerPointExposures(this.params.location),
            s(this.triggerPoint, this.experiments, a({}, this.params, e));
    }
    getExperiments() {
        return this.experiments;
    }
    constructor(e, t, n) {
        i(this, "experiments", void 0),
            i(this, "triggerPoint", void 0),
            i(this, "params", void 0),
            (this.experiments = e),
            (this.triggerPoint = t),
            (this.params = n);
    }
}
