n.d(e, { Ay: () => C, PV: () => o, jf: () => u }), n(321073);
var i = n(17928),
    l = n(228366),
    r = n(287809),
    a = n(673724);
function o(t) {
    return t.owner_user_id === r.default.getCurrentUser()?.id;
}
function u(t) {
    return o(t) || ((0, a.XE)(t) && null != t.guild_id);
}
let _ = new Map(),
    c = new Map(),
    E = new Map(),
    d = null,
    s = new Set(),
    p = [],
    I = new Map(),
    T = 0,
    R = new Map(),
    A = new Map(),
    S = { status: "idle", truncated: !1, count: 0 },
    f = new Map();
function h(t, e, n) {
    let i = f.get(t);
    null == i && ((i = new Map()), f.set(t, i)), i.set(e, n);
}
class O extends i.Ay.Store {
    initialize() {
        this.waitFor(r.default);
    }
    getOwnedProjects() {
        return Array.from(_.values()).filter(o);
    }
    getProject(t) {
        return _.get(t) ?? null;
    }
    findProjectByApplicationId(t) {
        for (let e of _.values()) if (e.application_id === t || e.preview_application_id === t) return e;
        return null;
    }
    getSharedProjects(t) {
        let e = [];
        for (let n of _.values()) o(n) || n.guild_id !== t || e.push(n);
        return e;
    }
    getIntegrationStatus(t) {
        return c.get(t) ?? null;
    }
    getSelectedProjectId(t) {
        return E.get(t) ?? null;
    }
    getLogs(t) {
        return I.get(t) ?? p;
    }
    getUnreadLogErrorCount(t) {
        let e = I.get(t);
        if (null == e) return 0;
        let n = A.get(t) ?? 0,
            i = 0;
        for (let t of e) t.key > n && "error" === t.log.level && !0 !== t.log.historical && (i += 1);
        return i;
    }
    getHistoryState(t, e) {
        return f.get(t)?.get(e) ?? S;
    }
    getProjectsFetchState() {
        return d;
    }
    hasFetchedGuildProjects(t) {
        return s.has(t);
    }
    isVibegrationsProjectApplication(t) {
        return null != t && null != this.findProjectByApplicationId(t);
    }
}
function g(t) {
    let { project: e } = t;
    _.set(e.id, e);
}
let C = new O(l.h, {
    LOGOUT: function () {
        if (0 === _.size && 0 === c.size && 0 === E.size && 0 === I.size && 0 === s.size && 0 === f.size && null == d)
            return !1;
        _.clear(), c.clear(), E.clear(), I.clear(), s.clear(), R.clear(), A.clear(), f.clear(), (d = null);
    },
    VIBEGRATIONS_PROJECTS_FETCH_START: function (t) {
        d = { type: "loading" };
    },
    VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function (t) {
        let { projects: e, guildId: n } = t,
            i = new Set(e.map((t) => t.id));
        for (let [t, e] of _) !i.has(t) && (o(e) || (null != n && e.guild_id === n)) && _.delete(t);
        for (let t of e) _.set(t.id, t);
        for (let t of (null != n && s.add(n), c.keys())) _.has(t) || c.delete(t);
        for (let [t, e] of E) _.has(e) || E.delete(t);
        d = { type: "success", fetchedAt: Date.now() };
    },
    VIBEGRATIONS_PROJECTS_FETCH_FAIL: function (t) {
        d = { type: "error", fetchedAt: Date.now() };
    },
    VIBEGRATIONS_PROJECT_CREATE_SUCCESS: g,
    VIBEGRATIONS_PROJECT_UPDATE_SUCCESS: g,
    VIBEGRATIONS_PROJECT_INTEGRATION_STATUS_UPDATE: function (t) {
        let { projectId: e, integrationStatus: n } = t;
        c.set(e, n);
    },
    VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (t) {
        let { projectId: e } = t;
        for (let [t, n] of (_.delete(e), c.delete(e), I.delete(e), R.delete(e), A.delete(e), f.delete(e), E))
            n === e && E.delete(t);
    },
    VIBEGRATIONS_PROJECT_SELECT: function (t) {
        let { guildId: e, projectId: n } = t;
        if ((E.get(e) ?? null) === n) return !1;
        null == n ? E.delete(e) : E.set(e, n);
    },
    VIBEGRATIONS_HISTORY_LOAD_SETTLE: function (t) {
        let { projectId: e, scope: n, status: i, count: l, truncated: r } = t;
        if ("failed" === i) {
            let t = f.get(e)?.get(n);
            h(e, n, { status: "failed", truncated: t?.truncated ?? !1, count: t?.count ?? 0 });
            return;
        }
        h(e, n, { status: "loaded", truncated: r, count: l });
    },
    VIBEGRATIONS_LOG_APPEND: function (t) {
        let { projectId: e, log: n } = t,
            i = n.seq;
        if (null != i) {
            let t = R.get(e);
            if (null != t && i <= t) return !1;
            R.set(e, i);
        }
        let l = { key: ++T, log: n },
            r = I.get(e),
            a = null == r ? [l] : r.concat(l);
        I.set(e, a.length > 500 ? a.slice(-500) : a);
    },
    VIBEGRATIONS_LOGS_SEEN: function (t) {
        let { projectId: e } = t,
            n = I.get(e),
            i = null == n || 0 === n.length ? 0 : n[n.length - 1].key;
        if ((A.get(e) ?? 0) >= i) return !1;
        A.set(e, i);
    },
});
