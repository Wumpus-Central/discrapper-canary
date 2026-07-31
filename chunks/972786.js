"use strict";
n.d(t, { A: () => E });
var i = n(17928),
    r = n(228366);
let a = new Map(),
    s = new Map(),
    l = new Map(),
    o = null,
    d = [],
    c = new Map();
class u extends i.Ay.Store {
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
        return c.get(e) ?? d;
    }
    getProjectsFetchState() {
        return o;
    }
}
function _(e) {
    let { project: t } = e;
    a.set(t.id, t);
}
let E = new u(r.h, {
    LOGOUT: function () {
        if (0 === a.size && 0 === s.size && 0 === l.size && 0 === c.size && null == o) return !1;
        a.clear(), s.clear(), l.clear(), c.clear(), (o = null);
    },
    VIBEGRATIONS_PROJECTS_FETCH_START: function (e) {
        o = { type: "loading" };
    },
    VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function (e) {
        let { projects: t } = e;
        for (let e of (a.clear(), t)) a.set(e.id, e);
        for (let e of s.keys()) a.has(e) || s.delete(e);
        for (let [e, t] of l) a.has(t) || l.delete(e);
        o = { type: "success", fetchedAt: Date.now() };
    },
    VIBEGRATIONS_PROJECTS_FETCH_FAIL: function (e) {
        o = { type: "error", fetchedAt: Date.now() };
    },
    VIBEGRATIONS_PROJECT_CREATE_SUCCESS: _,
    VIBEGRATIONS_PROJECT_UPDATE_SUCCESS: _,
    VIBEGRATIONS_PROJECT_INTEGRATION_STATUS_UPDATE: function (e) {
        let { projectId: t, integrationStatus: n } = e;
        s.set(t, n);
    },
    VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        for (let [e, n] of (a.delete(t), s.delete(t), c.delete(t), l)) n === t && l.delete(e);
    },
    VIBEGRATIONS_PROJECT_SELECT: function (e) {
        let { guildId: t, projectId: n } = e;
        if ((l.get(t) ?? null) === n) return !1;
        null == n ? l.delete(t) : l.set(t, n);
    },
    VIBEGRATIONS_LOG_APPEND: function (e) {
        let { projectId: t, log: n } = e,
            i = c.get(t),
            r = null == i ? [n] : i.concat(n);
        c.set(t, r.length > 500 ? r.slice(-500) : r);
    },
});
