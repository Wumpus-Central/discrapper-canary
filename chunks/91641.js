function r(e, t, n) {
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
function i(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                r(e, t, n[t]);
            });
    }
    return e;
}
function o(e, t, n) {
    t.forEach((e) => {
        e.trackExposure(n);
    });
}
n.d(t, { E: () => a }), n(415506), n(388685), n(987338);
class a {
    registeredExperimentIds() {
        return this.experiments.map((e) => e.definition.id);
    }
    trigger() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        o(this.triggerPoint, this.experiments, i({}, this.params, e));
    }
    getExperiments() {
        return this.experiments;
    }
    constructor(e, t, n) {
        r(this, 'experiments', void 0), r(this, 'triggerPoint', void 0), r(this, 'params', void 0), (this.experiments = e), (this.triggerPoint = t), (this.params = n);
    }
}
