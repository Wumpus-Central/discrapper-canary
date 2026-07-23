n.d(t, { A: () => u });
var r = n(17928),
    l = n(228366);
let i = new Map(),
    o = null,
    s = [],
    a = new Map();
class c extends r.Ay.Store {
    getAllProjects() {
        return Array.from(i.values());
    }
    getProject(e) {
        return i.get(e) ?? null;
    }
    getLogs(e) {
        return a.get(e) ?? s;
    }
    getProjectsFetchState() {
        return o;
    }
}
function E(e) {
    let { project: t } = e;
    i.set(t.id, t);
}
let u = new c(l.h, {
    LOGOUT: function () {
        if (0 === i.size && 0 === a.size && null == o) return !1;
        i.clear(), a.clear(), (o = null);
    },
    VIBEGRATIONS_PROJECTS_FETCH_START: function (e) {
        o = { type: "loading" };
    },
    VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function (e) {
        let { projects: t } = e;
        for (let e of (i.clear(), t)) i.set(e.id, e);
        o = { type: "success", fetchedAt: Date.now() };
    },
    VIBEGRATIONS_PROJECTS_FETCH_FAIL: function (e) {
        o = { type: "error", fetchedAt: Date.now() };
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
