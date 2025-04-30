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
function i(e, t, n) {
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
        i(this.triggerPoint, this.experiments, this.params);
    }
    getExperiments() {
        return this.experiments;
    }
    constructor(e, t, n) {
        r(this, 'experiments', void 0), r(this, 'triggerPoint', void 0), r(this, 'params', void 0), (this.experiments = e), (this.triggerPoint = t), (this.params = n);
    }
}
