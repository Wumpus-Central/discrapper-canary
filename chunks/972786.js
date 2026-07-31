"use strict";
n.d(t, { A: () => A });
var i = n(17928),
    r = n(228366);
let a = new Map(),
    s = new Map(),
    l = new Map(),
    o = null,
    d = new Set(),
    c = [],
    u = new Map();
class _ extends i.Ay.Store {
    getAllProjects() {
        return Array.from(a.values());
    }
    getProject(e) {
        return a.get(e) ?? null;
    }
    getIntegrationStatus(e) {
        return s.get(e) ?? null;
    }
    getSelectedProjectId(e) {
        return l.get(e) ?? null;
    }
    getLogs(e) {
        return u.get(e) ?? c;
    }
    getProjectsFetchState() {
        return o;
    }
    isOwnedVibegrationsProjectApplication(e) {
        return null != e && d.has(e);
    }
}
function E(e) {
    let { project: t } = e,
        n = a.get(t.id);
    null != n && (d.delete(n.application_id), null != n.preview_application_id && d.delete(n.preview_application_id)),
        a.set(t.id, t),
        d.add(t.application_id),
        null != t.preview_application_id && d.add(t.preview_application_id);
}
let A = new _(r.h, {
    LOGOUT: function () {
        if (0 === a.size && 0 === s.size && 0 === l.size && 0 === u.size && null == o) return !1;
        a.clear(), s.clear(), l.clear(), u.clear(), d.clear(), (o = null);
    },
    VIBEGRATIONS_PROJECTS_FETCH_START: function (e) {
        o = { type: "loading" };
    },
    VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function (e) {
        let { projects: t } = e;
        for (let e of (a.clear(), d.clear(), t))
            a.set(e.id, e),
                d.add(e.application_id),
                null != e.preview_application_id && d.add(e.preview_application_id);
        for (let e of s.keys()) a.has(e) || s.delete(e);
        for (let [e, t] of l) a.has(t) || l.delete(e);
        o = { type: "success", fetchedAt: Date.now() };
    },
    VIBEGRATIONS_PROJECTS_FETCH_FAIL: function (e) {
        o = { type: "error", fetchedAt: Date.now() };
    },
    VIBEGRATIONS_PROJECT_CREATE_SUCCESS: E,
    VIBEGRATIONS_PROJECT_UPDATE_SUCCESS: E,
    VIBEGRATIONS_PROJECT_INTEGRATION_STATUS_UPDATE: function (e) {
        let { projectId: t, integrationStatus: n } = e;
        s.set(t, n);
    },
    VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e,
            n = a.get(t);
        for (let [e, i] of (null != n &&
            (d.delete(n.application_id), null != n.preview_application_id && d.delete(n.preview_application_id)),
        a.delete(t),
        s.delete(t),
        u.delete(t),
        l))
            i === t && l.delete(e);
    },
    VIBEGRATIONS_PROJECT_SELECT: function (e) {
        let { guildId: t, projectId: n } = e;
        if ((l.get(t) ?? null) === n) return !1;
        null == n ? l.delete(t) : l.set(t, n);
    },
    VIBEGRATIONS_LOG_APPEND: function (e) {
        let { projectId: t, log: n } = e,
            i = u.get(t),
            r = null == i ? [n] : i.concat(n);
        u.set(t, r.length > 500 ? r.slice(-500) : r);
    },
});
