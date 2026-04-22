"use strict";
n.d(t, { A: () => o });
var i = n(562465),
    r = n(73153),
    l = n(652215);
let s = `${l.Joy}/api/v2/scheduled-maintenances`,
    a = `${l.Joy}/api/v2/incidents/unresolved.json`,
    o = {
        checkIncidents() {
            Promise.all([i.Bo.get({ url: `${s}/active.json`, rejectWithError: !0 }), i.Bo.get(a)]).then((e) => {
                let [t, n] = e,
                    [i] = t.body.scheduled_maintenances,
                    [l] = n.body.incidents;
                r.h.dispatch({ type: "STATUS_PAGE_INCIDENT", incident: l || i });
            });
        },
        checkScheduledMaintenances() {
            i.Bo.get({ url: `${s}/upcoming.json`, rejectWithError: !0 }).then((e) => {
                let [t] = e.body.scheduled_maintenances;
                r.h.dispatch({ type: "STATUS_PAGE_SCHEDULED_MAINTENANCE", maintenance: t });
            });
        },
        ackScheduledMaintenance() {
            r.h.dispatch({ type: "STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK" });
        },
    };
