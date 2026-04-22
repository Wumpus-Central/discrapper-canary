"use strict";
n.d(t, { E: () => i });
var r = n(217222);
n(688151);
class i {
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
        var e, t;
        let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        r.A.trackCommonTriggerPointExposures(this.params.location),
            this.triggerPoint,
            (e = this.experiments),
            (t = { ...this.params, ...n }),
            e.forEach((e) => {
                e.trackExposure(t);
            });
    }
    getExperiments() {
        return this.experiments;
    }
}
