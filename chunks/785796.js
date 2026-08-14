n.d(t, { A: () => E });
var i = n(636537),
    l = n(228366),
    r = n(652215);
let s = `${r.Joy}/api/v2/scheduled-maintenances`,
    a = `${r.Joy}/api/v2/incidents/unresolved.json`,
    E = {
        checkIncidents() {
            Promise.all([i.Bo.get({ url: `${s}/active.json`, rejectWithError: !0 }), i.Bo.get(a)]).then((e) => {
                let [t, n] = e,
                    [i] = t.body.scheduled_maintenances,
                    [r] = n.body.incidents;
                l.h.dispatch({ type: "STATUS_PAGE_INCIDENT", incident: r || i });
            });
        },
        checkScheduledMaintenances() {
            i.Bo.get({ url: `${s}/upcoming.json`, rejectWithError: !0 }).then((e) => {
                let [t] = e.body.scheduled_maintenances;
                l.h.dispatch({ type: "STATUS_PAGE_SCHEDULED_MAINTENANCE", maintenance: t });
            });
        },
        ackScheduledMaintenance() {
            l.h.dispatch({ type: "STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK" });
        },
    };
