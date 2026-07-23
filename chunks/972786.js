n.d(t, { A: () => u });
var r = n(17928),
    l = n(228366);
let i = new Map(),
    s = null,
    o = [],
    a = new Map();
class c extends r.Ay.Store {
    getAllProjects() {
        return Array.from(i.values());
    }
    getProject(e) {
        return i.get(e) ?? null;
    }
    getLogs(e) {
        return a.get(e) ?? o;
    }
    getProjectsFetchState() {
        return s;
    }
}
function E(e) {
    let { project: t } = e;
    i.set(t.id, t);
}
let u = new c(l.h, {
    LOGOUT: function () {
        if (0 === i.size && 0 === a.size && null == s) return !1;
        i.clear(), a.clear(), (s = null);
    },
    VIBEGRATIONS_PROJECTS_FETCH_START: function (e) {
        s = { type: "loading" };
    },
    VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function (e) {
        let { projects: t } = e;
        for (let e of (i.clear(), t)) i.set(e.id, e);
        s = { type: "success", fetchedAt: Date.now() };
    },
    VIBEGRATIONS_PROJECTS_FETCH_FAIL: function (e) {
        s = { type: "error", fetchedAt: Date.now() };
    },
    VIBEGRATIONS_PROJECT_CREATE_SUCCESS: E,
    VIBEGRATIONS_PROJECT_UPDATE_SUCCESS: E,
    VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        i.delete(t), a.delete(t);
    },
    VIBEGRATIONS_LOG_APPEND: function (e) {
        let { projectId: t, log: n } = e,
            r = a.get(t),
            l = null == r ? [n] : r.concat(n);
        a.set(t, l.length > 500 ? l.slice(-500) : l);
    },
});
