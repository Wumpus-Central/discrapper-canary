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
function r(e, t, n) {
    t.forEach((e) => {
        e.trackExposure(n);
    });
}
n.d(t, { E: () => a }), n(411104), n(47120), n(987338);
class a {
    registeredExperimentIds() {
        return this.experiments.map((e) => e.definition.id);
    }
    trigger() {
        r(this.triggerPoint, this.experiments, this.params);
    }
    getExperiments() {
        return this.experiments;
    }
    constructor(e, t, n) {
        i(this, 'experiments', void 0), i(this, 'triggerPoint', void 0), i(this, 'params', void 0), (this.experiments = e), (this.triggerPoint = t), (this.params = n);
    }
}
