i.d(e, { A: () => T, P: () => a }), i(321073);
var n = i(17928),
    l = i(228366),
    r = i(287809);
function a(t) {
    return t.owner_user_id === r.default.getCurrentUser()?.id;
}
let o = new Map(),
    _ = new Map(),
    c = new Map(),
    E = null,
    u = new Set(),
    d = [],
    s = new Map();
class p extends n.Ay.Store {
    initialize() {
        this.waitFor(r.default);
    }
    getOwnedProjects() {
        return Array.from(o.values()).filter(a);
    }
    getProject(t) {
        return o.get(t) ?? null;
    }
    findProjectByApplicationId(t) {
        for (let e of o.values()) if (e.application_id === t || e.preview_application_id === t) return e;
        return null;
    }
    getSharedProjects(t) {
        let e = [];
        for (let i of o.values()) a(i) || i.guild_id !== t || e.push(i);
        return e;
    }
    getIntegrationStatus(t) {
        return _.get(t) ?? null;
    }
    getSelectedProjectId(t) {
        return c.get(t) ?? null;
    }
    getLogs(t) {
        return s.get(t) ?? d;
    }
    getProjectsFetchState() {
        return E;
    }
    hasFetchedGuildProjects(t) {
        return u.has(t);
    }
    isVibegrationsProjectApplication(t) {
        return null != t && null != this.findProjectByApplicationId(t);
    }
}
function I(t) {
    let { project: e } = t;
    o.set(e.id, e);
}
let T = new p(l.h, {
    LOGOUT: function () {
        if (0 === o.size && 0 === _.size && 0 === c.size && 0 === s.size && 0 === u.size && null == E) return !1;
        o.clear(), _.clear(), c.clear(), s.clear(), u.clear(), (E = null);
    },
    VIBEGRATIONS_PROJECTS_FETCH_START: function (t) {
        E = { type: "loading" };
    },
    VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function (t) {
        let { projects: e, guildId: i } = t,
            n = new Set(e.map((t) => t.id));
        for (let [t, e] of o) !n.has(t) && (a(e) || (null != i && e.guild_id === i)) && o.delete(t);
        for (let t of e) o.set(t.id, t);
        for (let t of (null != i && u.add(i), _.keys())) o.has(t) || _.delete(t);
        for (let [t, e] of c) o.has(e) || c.delete(t);
        E = { type: "success", fetchedAt: Date.now() };
    },
    VIBEGRATIONS_PROJECTS_FETCH_FAIL: function (t) {
        E = { type: "error", fetchedAt: Date.now() };
    },
    VIBEGRATIONS_PROJECT_CREATE_SUCCESS: I,
    VIBEGRATIONS_PROJECT_UPDATE_SUCCESS: I,
    VIBEGRATIONS_PROJECT_INTEGRATION_STATUS_UPDATE: function (t) {
        let { projectId: e, integrationStatus: i } = t;
        _.set(e, i);
    },
    VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (t) {
        let { projectId: e } = t;
        for (let [t, i] of (o.delete(e), _.delete(e), s.delete(e), c)) i === e && c.delete(t);
    },
    VIBEGRATIONS_PROJECT_SELECT: function (t) {
        let { guildId: e, projectId: i } = t;
        if ((c.get(e) ?? null) === i) return !1;
        null == i ? c.delete(e) : c.set(e, i);
    },
    VIBEGRATIONS_LOG_APPEND: function (t) {
        let { projectId: e, log: i } = t,
            n = s.get(e),
            l = null == n ? [i] : n.concat(i);
        s.set(e, l.length > 500 ? l.slice(-500) : l);
    },
});
