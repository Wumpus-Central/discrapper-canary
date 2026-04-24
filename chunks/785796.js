n.d(t, { A: () => s });
var i = n(636537),
    l = n(228366),
    r = n(652215);
let a = `${r.Joy}/api/v2/scheduled-maintenances`,
    o = `${r.Joy}/api/v2/incidents/unresolved.json`,
    s = {
        checkIncidents() {
            Promise.all([i.Bo.get({ url: `${a}/active.json`, rejectWithError: !0 }), i.Bo.get(o)]).then((e) => {
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
