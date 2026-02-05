"use strict";
n.d(t, { E: () => a });
var r = n(217222);
function i(e, t, n) {
    t.forEach((e) => {
        e.trackExposure(n);
    });
}
n(688151);
class a {
    experiments;
    triggerPoint;
    params;
    constructor(e, t, n) {
        (this.experiments = e), (this.triggerPoint = t), (this.params = n);
    }
    registeredExperimentIds() {
        return this.experiments.map((e) => e.definition.id);
    }
    trigger() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        r.A.trackCommonTriggerPointExposures(this.params.location),
            i(this.triggerPoint, this.experiments, { ...this.params, ...e });
    }
    getExperiments() {
        return this.experiments;
    }
}
