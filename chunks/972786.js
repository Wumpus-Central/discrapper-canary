n.d(t, { A: () => T });
var l = n(17928),
    i = n(228366);
let r = new Map(),
    s = null,
    a = [],
    o = new Map();
class u extends l.Ay.Store {
    getAllProjects() {
        return Array.from(r.values());
    }
    getProject(e) {
        return r.get(e) ?? null;
    }
    getLogs(e) {
        return o.get(e) ?? a;
    }
    getProjectsFetchState() {
        return s;
    }
}
function c(e) {
    let { project: t } = e;
    r.set(t.id, t);
}
let E = new u(i.h, {
        LOGOUT: function () {
            if (0 === r.size && 0 === o.size && null == s) return !1;
            r.clear(), o.clear(), (s = null);
        },
        VIBEGRATIONS_PROJECTS_FETCH_START: function (e) {
            s = { type: "loading" };
        },
        VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function (e) {
            let { projects: t } = e;
            for (let e of (r.clear(), t)) r.set(e.id, e);
            s = { type: "success", fetchedAt: Date.now() };
        },
        VIBEGRATIONS_PROJECTS_FETCH_FAIL: function (e) {
            s = { type: "error", fetchedAt: Date.now() };
        },
        VIBEGRATIONS_PROJECT_CREATE_SUCCESS: c,
        VIBEGRATIONS_PROJECT_UPDATE_SUCCESS: c,
        VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
            let { projectId: t } = e;
            r.delete(t), o.delete(t);
        },
        VIBEGRATIONS_LOG_APPEND: function (e) {
            let { projectId: t, log: n } = e,
                l = o.get(t),
                i = null == l ? [n] : l.concat(n);
            o.set(t, i.length > 500 ? i.slice(-500) : i);
        },
    }),
    T = 21552 == n.j ? E : null;
