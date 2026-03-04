n.d(t, { A: () => o });
var i = n(562465),
    l = n(73153),
    r = n(652215);
let a = `${r.Joy}/api/v2/scheduled-maintenances`,
    s = `${r.Joy}/api/v2/incidents/unresolved.json`,
    o = {
        checkIncidents() {
            Promise.all([i.Bo.get({ url: `${a}/active.json`, rejectWithError: !0 }), i.Bo.get(s)]).then((e) => {
                let [t, n] = e,
                    [i] = t.body.scheduled_maintenances,
                    [r] = n.body.incidents;
                l.h.dispatch({ type: "STATUS_PAGE_INCIDENT", incident: r || i });
            });
        },
        checkScheduledMaintenances() {
            i.Bo.get({ url: `${a}/upcoming.json`, rejectWithError: !0 }).then((e) => {
                let [t] = e.body.scheduled_maintenances;
                l.h.dispatch({ type: "STATUS_PAGE_SCHEDULED_MAINTENANCE", maintenance: t });
            });
        },
        ackScheduledMaintenance() {
            l.h.dispatch({ type: "STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK" });
        },
    };
