n.d(t, { A: () => A, P: () => l }), n(321073);
var i = n(17928),
    r = n(228366),
    o = n(287809);
function l(e) {
    return e.owner_user_id === o.default.getCurrentUser()?.id;
}
let a = new Map(),
    u = new Map(),
    c = new Map(),
    _ = null,
    s = new Set(),
    d = [],
    p = new Map();
class E extends i.Ay.Store {
    initialize() {
        this.waitFor(o.default);
    }
    getOwnedProjects() {
        return Array.from(a.values()).filter(l);
    }
    getProject(e) {
        return a.get(e) ?? null;
    }
    findProjectByApplicationId(e) {
        for (let t of a.values()) if (t.application_id === e || t.preview_application_id === e) return t;
        return null;
    }
    getSharedProjects(e) {
        let t = [];
        for (let n of a.values()) l(n) || n.guild_id !== e || t.push(n);
        return t;
    }
    getIntegrationStatus(e) {
        return u.get(e) ?? null;
    }
    getSelectedProjectId(e) {
        return c.get(e) ?? null;
    }
    getLogs(e) {
        return p.get(e) ?? d;
    }
    getProjectsFetchState() {
        return _;
    }
    hasFetchedGuildProjects(e) {
        return s.has(e);
    }
    isVibegrationsProjectApplication(e) {
        return null != e && null != this.findProjectByApplicationId(e);
    }
}
function h(e) {
    let { project: t } = e;
    a.set(t.id, t);
}
let A = new E(r.h, {
    LOGOUT: function () {
        if (0 === a.size && 0 === u.size && 0 === c.size && 0 === p.size && 0 === s.size && null == _) return !1;
        a.clear(), u.clear(), c.clear(), p.clear(), s.clear(), (_ = null);
    },
    VIBEGRATIONS_PROJECTS_FETCH_START: function (e) {
        _ = { type: "loading" };
    },
    VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function (e) {
        let { projects: t, guildId: n } = e,
            i = new Set(t.map((e) => e.id));
        for (let [e, t] of a) !i.has(e) && (l(t) || (null != n && t.guild_id === n)) && a.delete(e);
        for (let e of t) a.set(e.id, e);
        for (let e of (null != n && s.add(n), u.keys())) a.has(e) || u.delete(e);
        for (let [e, t] of c) a.has(t) || c.delete(e);
        _ = { type: "success", fetchedAt: Date.now() };
    },
    VIBEGRATIONS_PROJECTS_FETCH_FAIL: function (e) {
        _ = { type: "error", fetchedAt: Date.now() };
    },
    VIBEGRATIONS_PROJECT_CREATE_SUCCESS: h,
    VIBEGRATIONS_PROJECT_UPDATE_SUCCESS: h,
    VIBEGRATIONS_PROJECT_INTEGRATION_STATUS_UPDATE: function (e) {
        let { projectId: t, integrationStatus: n } = e;
        u.set(t, n);
    },
    VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        for (let [e, n] of (a.delete(t), u.delete(t), p.delete(t), c)) n === t && c.delete(e);
    },
    VIBEGRATIONS_PROJECT_SELECT: function (e) {
        let { guildId: t, projectId: n } = e;
        if ((c.get(t) ?? null) === n) return !1;
        null == n ? c.delete(t) : c.set(t, n);
    },
    VIBEGRATIONS_LOG_APPEND: function (e) {
        let { projectId: t, log: n } = e,
            i = p.get(t),
            r = null == i ? [n] : i.concat(n);
        p.set(t, r.length > 500 ? r.slice(-500) : r);
    },
});
