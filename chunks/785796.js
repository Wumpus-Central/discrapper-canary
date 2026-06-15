"use strict";
n.d(t, { A: () => l });
var i = n(636537),
    r = n(228366),
    s = n(652215);
let a = `${s.Joy}/api/v2/scheduled-maintenances`,
    o = `${s.Joy}/api/v2/incidents/unresolved.json`,
    l = {
        checkIncidents() {
            Promise.all([i.Bo.get({ url: `${a}/active.json`, rejectWithError: !0 }), i.Bo.get(o)]).then((e) => {
                let [t, n] = e,
                    [i] = t.body.scheduled_maintenances,
                    [s] = n.body.incidents;
                r.h.dispatch({ type: "STATUS_PAGE_INCIDENT", incident: s || i });
            });
        },
        checkScheduledMaintenances() {
            i.Bo.get({ url: `${a}/upcoming.json`, rejectWithError: !0 }).then((e) => {
                let [t] = e.body.scheduled_maintenances;
                r.h.dispatch({ type: "STATUS_PAGE_SCHEDULED_MAINTENANCE", maintenance: t });
            });
        },
        ackScheduledMaintenance() {
            r.h.dispatch({ type: "STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK" });
        },
    };
