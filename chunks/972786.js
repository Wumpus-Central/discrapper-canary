"use strict";
n.d(t, { A: () => h, P: () => s }), n(321073);
var i = n(17928),
    r = n(228366),
    a = n(287809);
function s(e) {
    return e.owner_user_id === a.default.getCurrentUser()?.id;
}
let l = new Map(),
    o = new Map(),
    d = new Map(),
    c = null,
    u = [],
    _ = new Map();
class E extends i.Ay.Store {
    initialize() {
        this.waitFor(a.default);
    }
    getOwnedProjects() {
        return Array.from(l.values()).filter(s);
    }
    getProject(e) {
        return l.get(e) ?? null;
    }
    findProjectByApplicationId(e) {
        for (let t of l.values()) if (t.application_id === e || t.preview_application_id === e) return t;
        return null;
    }
    getSharedProjects(e) {
        let t = [];
        for (let n of l.values()) s(n) || n.guild_id !== e || t.push(n);
        return t;
    }
    getIntegrationStatus(e) {
        return o.get(e) ?? null;
    }
    getSelectedProjectId(e) {
        return d.get(e) ?? null;
    }
    getLogs(e) {
        return _.get(e) ?? u;
    }
    getProjectsFetchState() {
        return c;
    }
    isVibegrationsProjectApplication(e) {
        return null != e && null != this.findProjectByApplicationId(e);
    }
}
function A(e) {
    let { project: t } = e;
    l.set(t.id, t);
}
let h = new E(r.h, {
    LOGOUT: function () {
        if (0 === l.size && 0 === o.size && 0 === d.size && 0 === _.size && null == c) return !1;
        l.clear(), o.clear(), d.clear(), _.clear(), (c = null);
    },
    VIBEGRATIONS_PROJECTS_FETCH_START: function (e) {
        c = { type: "loading" };
    },
    VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function (e) {
        let { projects: t, guildId: n } = e,
            i = new Set(t.map((e) => e.id));
        for (let [e, t] of l) !i.has(e) && (s(t) || (null != n && t.guild_id === n)) && l.delete(e);
        for (let e of t) l.set(e.id, e);
        for (let e of o.keys()) l.has(e) || o.delete(e);
        for (let [e, t] of d) l.has(t) || d.delete(e);
        c = { type: "success", fetchedAt: Date.now() };
    },
    VIBEGRATIONS_PROJECTS_FETCH_FAIL: function (e) {
        c = { type: "error", fetchedAt: Date.now() };
    },
    VIBEGRATIONS_PROJECT_CREATE_SUCCESS: A,
    VIBEGRATIONS_PROJECT_UPDATE_SUCCESS: A,
    VIBEGRATIONS_PROJECT_INTEGRATION_STATUS_UPDATE: function (e) {
        let { projectId: t, integrationStatus: n } = e;
        o.set(t, n);
    },
    VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        for (let [e, n] of (l.delete(t), o.delete(t), _.delete(t), d)) n === t && d.delete(e);
    },
    VIBEGRATIONS_PROJECT_SELECT: function (e) {
        let { guildId: t, projectId: n } = e;
        if ((d.get(t) ?? null) === n) return !1;
        null == n ? d.delete(t) : d.set(t, n);
    },
    VIBEGRATIONS_LOG_APPEND: function (e) {
        let { projectId: t, log: n } = e,
            i = _.get(t),
            r = null == i ? [n] : i.concat(n);
        _.set(t, r.length > 500 ? r.slice(-500) : r);
    },
});
