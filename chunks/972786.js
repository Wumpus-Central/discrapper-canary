(n.d(t, { Ay: () => J, H_: () => d, PV: () => s, jf: () => a }), n(321073));
var i = n(17928),
    r = n(73153),
    l = n(287809),
    o = n(673724);
function s(e) {
    return e.owner_user_id === l.default.getCurrentUser()?.id;
}
function u(e) {
    return (0, o.XE)(e) && null != e.guild_id;
}
function a(e) {
    return s(e) || u(e);
}
function d(e) {
    return s(e) || (0, o.tr)(e) || u(e);
}
let c = new Map(),
    f = new Map(),
    h = new Map(),
    _ = new Set(),
    p = new Set(),
    g = new Map(),
    E = new Set(),
    w = !1,
    T = null,
    I = !1,
    m = null,
    A = new Set(),
    S = new Map(),
    R = [],
    O = new Map(),
    y = 0,
    v = new Map(),
    C = new Map(),
    P = [],
    N = new Map(),
    b = new Map();
function k(e, t, n) {
    return null != t && b.get(e)?.get(t) === n;
}
function M(e, t, n) {
    if (null == t) return;
    let i = b.get(e);
    for (null == i && ((i = new Map()), b.set(e, i)), i.set(t, n); i.size > 800;) {
        let e = i.keys().next();
        if (!0 === e.done) break;
        i.delete(e.value);
    }
}
let B = { status: "idle", truncated: !1, count: 0 },
    L = new Map();
function G(e, t, n) {
    let i = L.get(e);
    (null == i && ((i = new Map()), L.set(e, i)), i.set(t, n));
}
function D(e, t, n) {
    let i = t.concat(n);
    N.set(e, i.length > 400 ? i.slice(-400) : i);
}
class V extends i.Ay.Store {
    initialize() {
        this.waitFor(l.default);
    }
    getOwnedProjects() {
        return Array.from(c.values()).filter(s);
    }
    hasFetchedOwnedProjects() {
        return w;
    }
    getMaxProjects() {
        return T;
    }
    hasFetchedProjectLimit() {
        return I;
    }
    getProject(e) {
        return c.get(e) ?? null;
    }
    findProjectByApplicationId(e) {
        for (let t of c.values()) if (t.application_id === e || t.preview_application_id === e) return t;
        return null;
    }
    getSharedProjects(e) {
        let t = [];
        for (let n of c.values()) s(n) || n.guild_id !== e || t.push(n);
        return t;
    }
    getIntegrationStatus(e) {
        return f.get(e) ?? null;
    }
    getPublishStatus(e) {
        return h.get(e) ?? null;
    }
    isProjectPublishing(e) {
        return _.has(e);
    }
    isAppChannelPending(e) {
        return p.has(e);
    }
    isProjectDeleting(e) {
        return E.has(e);
    }
    getSelectedProjectId(e) {
        return g.get(e) ?? null;
    }
    getLogs(e) {
        return O.get(e) ?? R;
    }
    getUnreadLogErrorCount(e) {
        let t = O.get(e);
        if (null == t) return 0;
        let n = C.get(e) ?? 0,
            i = 0;
        for (let e of t) e.key > n && "error" === e.log.level && !0 !== e.log.historical && (i += 1);
        return i;
    }
    getTrace(e) {
        return N.get(e) ?? P;
    }
    getHistoryState(e, t) {
        return L.get(e)?.get(t) ?? B;
    }
    getProjectsFetchState() {
        return m;
    }
    hasFetchedGuildProjects(e) {
        return A.has(e);
    }
    getGuildProjectsFetchState(e) {
        return S.get(e) ?? "unattempted";
    }
    isVibegrationsProjectApplication(e) {
        return null != e && null != this.findProjectByApplicationId(e);
    }
}
function H(e) {
    let { project: t } = e;
    c.set(t.id, t);
}
let U = new Map();
function x(e, t) {
    return `${e}:${t}`;
}
function F(e, t, n) {
    U.get(e)?.touched.add(x(t, n));
}
function j(e, t, n) {
    return e.findIndex((e) => e.kind === t && e.id === n);
}
function W(e, t, n, i) {
    let r = t.slice();
    ((r[n] = i), N.set(e, r));
}
let J = new V(r.h, {
    LOGOUT: function () {
        if (
            0 === c.size &&
            0 === f.size &&
            0 === h.size &&
            0 === _.size &&
            0 === p.size &&
            0 === g.size &&
            0 === E.size &&
            0 === O.size &&
            0 === A.size &&
            0 === N.size &&
            0 === L.size &&
            0 === b.size &&
            null == m &&
            null == T &&
            !I
        )
            return !1;
        (c.clear(),
            f.clear(),
            h.clear(),
            _.clear(),
            p.clear(),
            g.clear(),
            E.clear(),
            O.clear(),
            A.clear(),
            S.clear(),
            v.clear(),
            C.clear(),
            N.clear(),
            L.clear(),
            b.clear(),
            (m = null),
            (w = !1),
            (T = null),
            (I = !1),
            U.clear());
    },
    VIBEGRATIONS_PROJECTS_FETCH_START: function (e) {
        let { guildId: t } = e;
        (null != t && S.set(t, "loading"), (m = { type: "loading" }));
    },
    VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function (e) {
        let { projects: t, guildId: n } = e,
            i = new Set(t.map((e) => e.id));
        for (let [e, t] of c) !i.has(e) && (s(t) || (null != n && t.guild_id === n)) && c.delete(e);
        for (let e of t) c.set(e.id, e);
        for (let e of (null != n && (A.add(n), S.set(n, "success")), f.keys())) c.has(e) || f.delete(e);
        for (let e of h.keys()) c.has(e) || h.delete(e);
        for (let [e, t] of g) c.has(t) || g.delete(e);
        ((w = !0), (m = { type: "success", fetchedAt: Date.now() }));
    },
    VIBEGRATIONS_PROJECTS_FETCH_FAIL: function (e) {
        let { guildId: t } = e;
        (null != t && S.set(t, "error"), (m = { type: "error", fetchedAt: Date.now() }));
    },
    VIBEGRATIONS_PROJECT_LIMIT_FETCH_SETTLE: function (e) {
        let { maxProjects: t } = e;
        ((T = t), (I = !0));
    },
    VIBEGRATIONS_PROJECT_CREATE_SUCCESS: H,
    VIBEGRATIONS_PROJECT_UPDATE_SUCCESS: H,
    VIBEGRATIONS_PROJECT_INTEGRATION_STATUS_UPDATE: function (e) {
        let { projectId: t, integrationStatus: n } = e;
        f.set(t, n);
    },
    VIBEGRATIONS_PROJECT_PUBLISH_STATUS_UPDATE: function (e) {
        let { projectId: t, published: n, hasUnpublishedChanges: i, surface: r } = e,
            l = n ? (i ? "changes" : "up_to_date") : "unpublished",
            o = h.get(t);
        if (o?.state === l && o.surface === r) return !1;
        h.set(t, { state: l, surface: r });
    },
    VIBEGRATIONS_PROJECT_PUBLISH_START: function (e) {
        let { projectId: t } = e;
        _.add(t);
    },
    VIBEGRATIONS_PROJECT_PUBLISH_SETTLE: function (e) {
        let { projectId: t } = e;
        return _.delete(t);
    },
    VIBEGRATIONS_PROJECT_APP_CHANNEL_PENDING: function (e) {
        let { projectId: t, pending: n } = e;
        if (p.has(t) === n) return !1;
        n ? p.add(t) : p.delete(t);
    },
    VIBEGRATIONS_PROJECT_DELETE_START: function (e) {
        let { projectId: t } = e;
        E.add(t);
    },
    VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        for (let [e, n] of (E.delete(t),
        c.delete(t),
        f.delete(t),
        h.delete(t),
        _.delete(t),
        p.delete(t),
        O.delete(t),
        v.delete(t),
        C.delete(t),
        N.delete(t),
        L.delete(t),
        b.delete(t),
        g))
            n === t && g.delete(e);
    },
    VIBEGRATIONS_PROJECT_DELETE_FAIL: function (e) {
        let { projectId: t } = e;
        return E.delete(t);
    },
    VIBEGRATIONS_PROJECT_SELECT: function (e) {
        let { guildId: t, projectId: n } = e;
        if ((g.get(t) ?? null) === n) return !1;
        null == n ? g.delete(t) : g.set(t, n);
    },
    VIBEGRATIONS_TRACE_REPLAY_STARTING: function (e) {
        let { projectId: t } = e;
        U.set(t, { snapshot: new Set((N.get(t) ?? P).map((e) => x(e.kind, e.id))), touched: new Set() });
    },
    VIBEGRATIONS_HISTORY_LOAD_SETTLE: function (e) {
        let { projectId: t, scope: n, status: i, count: r, truncated: l } = e,
            o = "trace" === n ? U.get(t) : void 0;
        if (("trace" === n && U.delete(t), "failed" === i)) {
            let e = L.get(t)?.get(n);
            G(t, n, { status: "failed", truncated: e?.truncated ?? !1, count: e?.count ?? 0 });
            return;
        }
        if (null != o) {
            let e = N.get(t);
            null != e &&
                N.set(
                    t,
                    e.filter((e) => !o.snapshot.has(x(e.kind, e.id)) || o.touched.has(x(e.kind, e.id))),
                );
        }
        G(t, n, { status: "loaded", truncated: l, count: r });
    },
    VIBEGRATIONS_LOG_APPEND: function (e) {
        let { projectId: t, log: n } = e,
            i = n.seq;
        if (null != i) {
            let e = v.get(t);
            if (null != e && i <= e) return !1;
            v.set(t, i);
        }
        let r = { key: ++y, log: n },
            l = O.get(t),
            o = null == l ? [r] : l.concat(r);
        O.set(t, o.length > 500 ? o.slice(-500) : o);
    },
    VIBEGRATIONS_LOGS_SEEN: function (e) {
        let { projectId: t } = e,
            n = O.get(t),
            i = null == n || 0 === n.length ? 0 : n[n.length - 1].key;
        if ((C.get(t) ?? 0) >= i) return !1;
        C.set(t, i);
    },
    VIBEGRATIONS_TOOL_CALL_APPEND: function (e) {
        let { projectId: t, toolCall: n } = e;
        if ((F(t, "tool", n.id), k(t, n.entry_id, n.status))) return !1;
        let i = N.get(t) ?? P,
            r = j(i, "tool", n.id),
            l = -1 === r ? null : i[r],
            o = n.summary ?? l?.summary,
            s = n.fields ?? l?.fields,
            u = n.schema ?? l?.schema,
            a = n.detail_id ?? l?.detailId,
            d = n.turn_id ?? l?.turnId,
            c = n.parent_id ?? l?.parentId,
            f = {
                kind: "tool",
                id: n.id,
                ...(null != d ? { turnId: d } : {}),
                ...(null != c ? { parentId: c } : {}),
                agent: n.agent,
                tool: n.tool,
                status: n.status,
                ...(null != o ? { summary: o } : {}),
                ...(null != s ? { fields: s } : {}),
                ...(null != u ? { schema: u } : {}),
                ...(null != a ? { detailId: a } : {}),
                ...(null != n.duration_ms ? { durationMs: n.duration_ms } : {}),
                ...(null != n.result_chars ? { resultChars: n.result_chars } : {}),
                ...(!0 === n.result_truncated ? { resultTruncated: !0 } : {}),
                ...(null != n.result_added ? { resultAdded: n.result_added } : {}),
                ...(null != n.result_removed ? { resultRemoved: n.result_removed } : {}),
                ...(null != n.error ? { error: n.error } : {}),
                startedAt: l?.startedAt ?? n.ts,
            };
        (M(t, n.entry_id, n.status), null != l) ? W(t, i, r, f) : D(t, i, f);
    },
    VIBEGRATIONS_MODEL_CALL_APPEND: function (e) {
        let { projectId: t, modelCall: n } = e;
        if ((F(t, "model", n.id), k(t, n.entry_id, n.status))) return !1;
        let i = N.get(t) ?? P,
            r = j(i, "model", n.id),
            l = -1 === r ? null : i[r],
            o = {
                kind: "model",
                id: n.id,
                ...((n.turn_id ?? l?.turnId) != null ? { turnId: n.turn_id ?? l?.turnId } : {}),
                agent: n.agent,
                model: n.model,
                status: n.status,
                ...(function (e, t) {
                    let n = {};
                    for (let [i, r] of Object.entries(t)) {
                        let t = r ?? e?.[i];
                        "number" == typeof t && (n[i] = t);
                    }
                    return n;
                })(l, {
                    promptTokens: n.prompt_tokens,
                    systemTokens: n.system_tokens,
                    toolsTokens: n.tools_tokens,
                    messagesTokens: n.messages_tokens,
                    tools: n.tools,
                    messages: n.messages,
                    durationMs: n.duration_ms,
                    inputTokens: n.input_tokens,
                    outputTokens: n.output_tokens,
                    cacheReadTokens: n.cache_read_tokens,
                    cacheWriteTokens: n.cache_write_tokens,
                    costUsd: n.cost_usd,
                }),
                ...((n.estimated ?? l?.estimated) === !0 ? { estimated: !0 } : {}),
                ...(null != n.stop_reason ? { stopReason: n.stop_reason } : {}),
                ...(null != n.error ? { error: n.error } : {}),
                startedAt: l?.startedAt ?? n.ts,
            };
        (M(t, n.entry_id, n.status), null != l) ? W(t, i, r, o) : D(t, i, o);
    },
});
