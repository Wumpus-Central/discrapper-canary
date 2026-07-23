n.d(t, { A: () => T });
var l = n(17928),
    r = n(228366);
let i = new Map(),
    o = null,
    a = [],
    s = new Map();
class u extends l.Ay.Store {
    getAllProjects() {
        return Array.from(i.values());
    }
    getProject(e) {
        return i.get(e) ?? null;
    }
    getLogs(e) {
        return s.get(e) ?? a;
    }
    getProjectsFetchState() {
        return o;
    }
}
function c(e) {
    let { project: t } = e;
    i.set(t.id, t);
}
let E = new u(r.h, {
        LOGOUT: function () {
            if (0 === i.size && 0 === s.size && null == o) return !1;
            i.clear(), s.clear(), (o = null);
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
        VIBEGRATIONS_PROJECT_CREATE_SUCCESS: c,
        VIBEGRATIONS_PROJECT_UPDATE_SUCCESS: c,
        VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
            let { projectId: t } = e;
            i.delete(t), s.delete(t);
        },
        VIBEGRATIONS_LOG_APPEND: function (e) {
            let { projectId: t, log: n } = e,
                l = s.get(t),
                r = null == l ? [n] : l.concat(n);
            s.set(t, r.length > 500 ? r.slice(-500) : r);
        },
    }),
    T = 21552 == n.j ? E : null;
