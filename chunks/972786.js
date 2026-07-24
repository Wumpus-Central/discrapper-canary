"use strict";
n.d(t, { A: () => u });
var i = n(17928),
    r = n(228366);
let a = new Map(),
    s = null,
    l = [],
    o = new Map();
class d extends i.Ay.Store {
    getAllProjects() {
        return Array.from(a.values());
    }
    getProject(e) {
        return a.get(e) ?? null;
    }
    getLogs(e) {
        return o.get(e) ?? l;
    }
    getProjectsFetchState() {
        return s;
    }
}
function c(e) {
    let { project: t } = e;
    a.set(t.id, t);
}
let u = new d(r.h, {
    LOGOUT: function () {
        if (0 === a.size && 0 === o.size && null == s) return !1;
        a.clear(), o.clear(), (s = null);
    },
    VIBEGRATIONS_PROJECTS_FETCH_START: function (e) {
        s = { type: "loading" };
    },
    VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function (e) {
        let { projects: t } = e;
        for (let e of (a.clear(), t)) a.set(e.id, e);
        s = { type: "success", fetchedAt: Date.now() };
    },
    VIBEGRATIONS_PROJECTS_FETCH_FAIL: function (e) {
        s = { type: "error", fetchedAt: Date.now() };
    },
    VIBEGRATIONS_PROJECT_CREATE_SUCCESS: c,
    VIBEGRATIONS_PROJECT_UPDATE_SUCCESS: c,
    VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        a.delete(t), o.delete(t);
    },
    VIBEGRATIONS_LOG_APPEND: function (e) {
        let { projectId: t, log: n } = e,
            i = o.get(t),
            r = null == i ? [n] : i.concat(n);
        o.set(t, r.length > 500 ? r.slice(-500) : r);
    },
});
