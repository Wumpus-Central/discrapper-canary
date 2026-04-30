"use strict";
n.d(t, { A: () => g });
var i = n(17928),
    r = n(228366),
    s = n(736056),
    a = n(710195);
let o = (0, n(945810).mj)({
    name: "2026-03-debug-experiment",
    kind: "user",
    defaultConfig: { emitEvent: !1 },
    variations: { 1: { emitEvent: !0, variation: 1 }, 2: { emitEvent: !0, variation: 2 } },
});
var l = n(99066),
    u = n(600975),
    c = n(688151);
let d = (0, u.C)({
    kind: "guild",
    id: "2025-04_report_to_mod",
    label: "Report to moderator",
    commonTriggerPoint: c.$G.CONNECTION_OPEN,
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "report to moderator triggering", config: { enabled: !0 } }],
});
var _ = n(840251);
let f = [l.t4, d],
    h = new _.E(f, c.$G.CONNECTION_OPEN, { location: "app open" });
var p = n(652215);
function E() {
    h.trigger(),
        o.getConfig({ location: "connection_open" }).emitEvent &&
            Promise.resolve()
                .then(n.bind(n, 174459))
                .then((e) => {
                    let { default: t } = e;
                    t.track(p.HAw.EXPERIMENT_APEX_DEBUGGING_EVENT, {
                        experiment: "2026-03-debug-experiment",
                        apex_debug_variant: 1,
                        experiment_location: "connection_open",
                    });
                });
}
class m extends i.Ay.Store {
    static displayName = "ExperimentTriggerPointStore";
    constructor() {
        super(r.h, { CONNECTION_OPEN: E }, r.A.Early);
    }
    initialize() {
        this.waitFor(s.A, a.A);
    }
}
let g = new m();
