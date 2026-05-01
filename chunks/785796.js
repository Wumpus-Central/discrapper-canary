l.d(t, { A: () => u });
var n = l(636537),
    i = l(228366),
    r = l(652215);
let s = `${r.Joy}/api/v2/scheduled-maintenances`,
    a = `${r.Joy}/api/v2/incidents/unresolved.json`,
    u = {
        checkIncidents() {
            Promise.all([n.Bo.get({ url: `${s}/active.json`, rejectWithError: !0 }), n.Bo.get(a)]).then((e) => {
                let [t, l] = e,
                    [n] = t.body.scheduled_maintenances,
                    [r] = l.body.incidents;
                i.h.dispatch({ type: "STATUS_PAGE_INCIDENT", incident: r || n });
            });
        },
        checkScheduledMaintenances() {
            n.Bo.get({ url: `${s}/upcoming.json`, rejectWithError: !0 }).then((e) => {
                let [t] = e.body.scheduled_maintenances;
                i.h.dispatch({ type: "STATUS_PAGE_SCHEDULED_MAINTENANCE", maintenance: t });
            });
        },
        ackScheduledMaintenance() {
            i.h.dispatch({ type: "STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK" });
        },
    };
