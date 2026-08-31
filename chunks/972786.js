n.d(e, { A: () => O, P: () => a }), n(321073);
var i = n(17928),
    l = n(228366),
    r = n(287809);
function a(t) {
    return t.owner_user_id === r.default.getCurrentUser()?.id;
}
let o = new Map(),
    _ = new Map(),
    u = new Map(),
    c = null,
    E = new Set(),
    d = [],
    s = new Map(),
    p = 0,
    I = new Map(),
    T = new Map(),
    R = { status: "idle", truncated: !1, count: 0 },
    A = new Map();
function S(t, e, n) {
    let i = A.get(t);
    null == i && ((i = new Map()), A.set(t, i)), i.set(e, n);
}
class f extends i.Ay.Store {
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
        for (let n of o.values()) a(n) || n.guild_id !== t || e.push(n);
        return e;
    }
    getIntegrationStatus(t) {
        return _.get(t) ?? null;
    }
    getSelectedProjectId(t) {
        return u.get(t) ?? null;
    }
    getLogs(t) {
        return s.get(t) ?? d;
    }
    getUnreadLogErrorCount(t) {
        let e = s.get(t);
        if (null == e) return 0;
        let n = T.get(t) ?? 0,
            i = 0;
        for (let t of e) t.key > n && "error" === t.log.level && !0 !== t.log.historical && (i += 1);
        return i;
    }
    getHistoryState(t, e) {
        return A.get(t)?.get(e) ?? R;
    }
    getProjectsFetchState() {
        return c;
    }
    hasFetchedGuildProjects(t) {
        return E.has(t);
    }
    isVibegrationsProjectApplication(t) {
        return null != t && null != this.findProjectByApplicationId(t);
    }
}
function h(t) {
    let { project: e } = t;
    o.set(e.id, e);
}
let O = new f(l.h, {
    LOGOUT: function () {
        if (0 === o.size && 0 === _.size && 0 === u.size && 0 === s.size && 0 === E.size && 0 === A.size && null == c)
            return !1;
        o.clear(), _.clear(), u.clear(), s.clear(), E.clear(), I.clear(), T.clear(), A.clear(), (c = null);
    },
    VIBEGRATIONS_PROJECTS_FETCH_START: function (t) {
        c = { type: "loading" };
    },
    VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function (t) {
        let { projects: e, guildId: n } = t,
            i = new Set(e.map((t) => t.id));
        for (let [t, e] of o) !i.has(t) && (a(e) || (null != n && e.guild_id === n)) && o.delete(t);
        for (let t of e) o.set(t.id, t);
        for (let t of (null != n && E.add(n), _.keys())) o.has(t) || _.delete(t);
        for (let [t, e] of u) o.has(e) || u.delete(t);
        c = { type: "success", fetchedAt: Date.now() };
    },
    VIBEGRATIONS_PROJECTS_FETCH_FAIL: function (t) {
        c = { type: "error", fetchedAt: Date.now() };
    },
    VIBEGRATIONS_PROJECT_CREATE_SUCCESS: h,
    VIBEGRATIONS_PROJECT_UPDATE_SUCCESS: h,
    VIBEGRATIONS_PROJECT_INTEGRATION_STATUS_UPDATE: function (t) {
        let { projectId: e, integrationStatus: n } = t;
        _.set(e, n);
    },
    VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (t) {
        let { projectId: e } = t;
        for (let [t, n] of (o.delete(e), _.delete(e), s.delete(e), I.delete(e), T.delete(e), A.delete(e), u))
            n === e && u.delete(t);
    },
    VIBEGRATIONS_PROJECT_SELECT: function (t) {
        let { guildId: e, projectId: n } = t;
        if ((u.get(e) ?? null) === n) return !1;
        null == n ? u.delete(e) : u.set(e, n);
    },
    VIBEGRATIONS_HISTORY_LOAD_SETTLE: function (t) {
        let { projectId: e, scope: n, status: i, count: l, truncated: r } = t;
        if ("failed" === i) {
            let t = A.get(e)?.get(n);
            S(e, n, { status: "failed", truncated: t?.truncated ?? !1, count: t?.count ?? 0 });
            return;
        }
        S(e, n, { status: "loaded", truncated: r, count: l });
    },
    VIBEGRATIONS_LOG_APPEND: function (t) {
        let { projectId: e, log: n } = t,
            i = n.seq;
        if (null != i) {
            let t = I.get(e);
            if (null != t && i <= t) return !1;
            I.set(e, i);
        }
        let l = { key: ++p, log: n },
            r = s.get(e),
            a = null == r ? [l] : r.concat(l);
        s.set(e, a.length > 500 ? a.slice(-500) : a);
    },
    VIBEGRATIONS_LOGS_SEEN: function (t) {
        let { projectId: e } = t,
            n = s.get(e),
            i = null == n || 0 === n.length ? 0 : n[n.length - 1].key;
        if ((T.get(e) ?? 0) >= i) return !1;
        T.set(e, i);
    },
});
