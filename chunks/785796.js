n.d(t, { A: () => l }), n(896048);
var r = n(562465),
    i = n(73153),
    a = n(652215);
let s = "".concat(a.Joy, "/api/v2/scheduled-maintenances"),
    o = "".concat(a.Joy, "/api/v2/incidents/unresolved.json"),
    l = {
        checkIncidents() {
            Promise.all([
                r.Bo.get({
                    url: "".concat(s, "/active.json"),
                    rejectWithError: !0,
                }),
                r.Bo.get(o),
            ]).then((e) => {
                let [t, n] = e,
                    [r] = t.body.scheduled_maintenances,
                    [a] = n.body.incidents;
                i.h.dispatch({
                    type: "STATUS_PAGE_INCIDENT",
                    incident: a || r,
                });
            });
        },
        checkScheduledMaintenances() {
            r.Bo.get({
                url: "".concat(s, "/upcoming.json"),
                rejectWithError: !0,
            }).then((e) => {
                let [t] = e.body.scheduled_maintenances;
                i.h.dispatch({
                    type: "STATUS_PAGE_SCHEDULED_MAINTENANCE",
                    maintenance: t,
                });
            });
        },
        ackScheduledMaintenance() {
            i.h.dispatch({ type: "STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK" });
        },
    };
