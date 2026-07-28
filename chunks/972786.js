"use strict";
n.d(t, { A: () => _ });
var i = n(17928),
    r = n(228366);
let a = new Map(),
    s = new Map(),
    l = null,
    o = [],
    d = new Map();
class c extends i.Ay.Store {
    getAllProjects() {
        return Array.from(a.values());
    }
    getProject(e) {
        return a.get(e) ?? null;
    }
    getSelectedProjectId(e) {
        return s.get(e) ?? null;
    }
    getLogs(e) {
        return d.get(e) ?? o;
    }
    getProjectsFetchState() {
        return l;
    }
}
function u(e) {
    let { project: t } = e;
    a.set(t.id, t);
}
let _ = new c(r.h, {
    LOGOUT: function () {
        if (0 === a.size && 0 === s.size && 0 === d.size && null == l) return !1;
        a.clear(), s.clear(), d.clear(), (l = null);
    },
    VIBEGRATIONS_PROJECTS_FETCH_START: function (e) {
        l = { type: "loading" };
    },
    VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function (e) {
        let { projects: t } = e;
        for (let e of (a.clear(), t)) a.set(e.id, e);
        for (let [e, t] of s) a.has(t) || s.delete(e);
        l = { type: "success", fetchedAt: Date.now() };
    },
    VIBEGRATIONS_PROJECTS_FETCH_FAIL: function (e) {
        l = { type: "error", fetchedAt: Date.now() };
    },
    VIBEGRATIONS_PROJECT_CREATE_SUCCESS: u,
    VIBEGRATIONS_PROJECT_UPDATE_SUCCESS: u,
    VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        for (let [e, n] of (a.delete(t), d.delete(t), s)) n === t && s.delete(e);
    },
    VIBEGRATIONS_PROJECT_SELECT: function (e) {
        let { guildId: t, projectId: n } = e;
        if ((s.get(t) ?? null) === n) return !1;
        null == n ? s.delete(t) : s.set(t, n);
    },
    VIBEGRATIONS_LOG_APPEND: function (e) {
        let { projectId: t, log: n } = e,
            i = d.get(t),
            r = null == i ? [n] : i.concat(n);
        d.set(t, r.length > 500 ? r.slice(-500) : r);
    },
});
