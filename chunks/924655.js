"use strict";
n.d(t, { A: () => E });
var i = n(17928),
    r = n(228366),
    s = n(736056),
    a = n(710195);
(0, n(945810).mj)({ name: "2026-03-debug-experiment", kind: "user", defaultConfig: {}, variations: { 1: {}, 2: {} } });
var o = n(99066),
    l = n(600975),
    u = n(688151);
let c = (0, l.C)({
    kind: "guild",
    id: "2025-04_report_to_mod",
    label: "Report to moderator",
    commonTriggerPoint: u.$G.CONNECTION_OPEN,
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "report to moderator triggering", config: { enabled: !0 } }],
});
var d = n(840251);
let _ = [o.t4, c],
    f = new d.E(_, u.$G.CONNECTION_OPEN, { location: "app open" });
function h() {
    f.trigger();
}
class p extends i.Ay.Store {
    static displayName = "ExperimentTriggerPointStore";
    constructor() {
        super(r.h, { CONNECTION_OPEN: h }, r.A.Early);
    }
    initialize() {
        this.waitFor(s.A, a.A);
    }
}
let E = new p();
