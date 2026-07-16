"use strict";
n.d(t, { A: () => o });
var i = n(636537),
    r = n(228366),
    a = n(652215);
let s = `${a.Joy}/api/v2/scheduled-maintenances`,
    l = `${a.Joy}/api/v2/incidents/unresolved.json`,
    o = {
        checkIncidents() {
            Promise.all([i.Bo.get({ url: `${s}/active.json`, rejectWithError: !0 }), i.Bo.get(l)]).then((e) => {
                let [t, n] = e,
                    [i] = t.body.scheduled_maintenances,
                    [a] = n.body.incidents;
                r.h.dispatch({ type: "STATUS_PAGE_INCIDENT", incident: a || i });
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
