(n(134528), n(947204));
var r = n(855986),
    s = n(73153);
let i = new Map(),
    o = new Map(),
    l = new Map();
class a extends r.Ay.Store {
    getCopy(e) {
        return i.get(e) ?? null;
    }
    getLastSync(e) {
        return o.get(e) ?? null;
    }
    getDownstreamUpdates(e) {
        return l.get(e) ?? null;
    }
}
let c = new a(s.h, {
    CONJURE_COPY_STATE_SET: function (e) {
        let { projectId: t, event: n } = e;
        (l.delete(t),
            i.set(t, {
                sourceProjectId: n.source_project_id,
                sourceName: n.source_name ?? null,
                sourceApplicationId: n.source_application_id ?? null,
                updatesPaused: !0 === n.updates_paused,
            }));
    },
    CONJURE_COPY_SYNC_SET: function (e) {
        let { projectId: t, event: n } = e,
            r = Date.parse(n.at);
        o.set(t, { status: n.status, atMs: Number.isNaN(r) ? null : r });
    },
    CONJURE_DOWNSTREAM_UPDATES_SET: function (e) {
        let { projectId: t, event: n } = e;
        l.set(t, { enabled: n.enabled, pending: !1, error: n.error ?? null });
    },
    CONJURE_DOWNSTREAM_UPDATES_REQUEST: function (e) {
        let { projectId: t, enabled: n } = e;
        return null != l.get(t) && (l.set(t, { enabled: n, pending: !0, error: null }), !0);
    },
});
n.d(t, {}, { A: c });
