(n.d(t, { Ay: () => Y, H_: () => c, PV: () => l, jf: () => d }), n(321073));
var i = n(17928),
    r = n(73153),
    a = n(287809),
    s = n(673724);
function l(e) {
    return e.owner_user_id === a.default.getCurrentUser()?.id;
}
function o(e) {
    return (0, s.XE)(e) && null != e.guild_id;
}
function d(e) {
    return l(e) || o(e);
}
function c(e) {
    return l(e) || (0, s.tr)(e) || o(e);
}
let u = new Map(),
    _ = new Map(),
    E = new Map(),
    A = new Set(),
    h = new Set(),
    I = new Map(),
    f = new Set(),
    p = !1,
    T = null,
    m = !1,
    g = null,
    S = new Set(),
    N = new Map(),
    C = [],
    O = new Map(),
    R = 0,
    L = new Map(),
    y = new Map(),
    D = [],
    v = new Map(),
    b = new Map();
function M(e, t, n) {
    return null != t && b.get(e)?.get(t) === n;
}
function P(e, t, n) {
    if (null == t) return;
    let i = b.get(e);
    for (null == i && ((i = new Map()), b.set(e, i)), i.set(t, n); i.size > 800;) {
        let e = i.keys().next();
        if (!0 === e.done) break;
        i.delete(e.value);
    }
}
let U = { status: "idle", truncated: !1, count: 0 },
    w = new Map();
function G(e, t, n) {
    let i = w.get(e);
    (null == i && ((i = new Map()), w.set(e, i)), i.set(t, n));
}
function x(e, t, n) {
    let i = t.concat(n);
    v.set(e, i.length > 400 ? i.slice(-400) : i);
}
class k extends i.Ay.Store {
    initialize() {
        this.waitFor(a.default);
    }
    getOwnedProjects() {
        return Array.from(u.values()).filter(l);
    }
    hasFetchedOwnedProjects() {
        return p;
    }
    getMaxProjects() {
        return T;
    }
    hasFetchedProjectLimit() {
        return m;
    }
    getProject(e) {
        return u.get(e) ?? null;
    }
    findProjectByApplicationId(e) {
        for (let t of u.values()) if (t.application_id === e || t.preview_application_id === e) return t;
        return null;
    }
    getSharedProjects(e) {
        let t = [];
        for (let n of u.values()) l(n) || n.guild_id !== e || t.push(n);
        return t;
    }
    getIntegrationStatus(e) {
        return _.get(e) ?? null;
    }
    getPublishStatus(e) {
        return E.get(e) ?? null;
    }
    isProjectPublishing(e) {
        return A.has(e);
    }
    isAppChannelPending(e) {
        return h.has(e);
    }
    isProjectDeleting(e) {
        return f.has(e);
    }
    getSelectedProjectId(e) {
        return I.get(e) ?? null;
    }
    getLogs(e) {
        return O.get(e) ?? C;
    }
    getUnreadLogErrorCount(e) {
        let t = O.get(e);
        if (null == t) return 0;
        let n = y.get(e) ?? 0,
            i = 0;
        for (let e of t) e.key > n && "error" === e.log.level && !0 !== e.log.historical && (i += 1);
        return i;
    }
    getTrace(e) {
        return v.get(e) ?? D;
    }
    getHistoryState(e, t) {
        return w.get(e)?.get(t) ?? U;
    }
    getProjectsFetchState() {
        return g;
    }
    hasFetchedGuildProjects(e) {
        return S.has(e);
    }
    getGuildProjectsFetchState(e) {
        return N.get(e) ?? "unattempted";
    }
    isVibegrationsProjectApplication(e) {
        return null != e && null != this.findProjectByApplicationId(e);
    }
}
function F(e) {
    let { project: t } = e;
    u.set(t.id, t);
}
let B = new Map();
function V(e, t) {
    return `${e}:${t}`;
}
function H(e, t, n) {
    B.get(e)?.touched.add(V(t, n));
}
function j(e, t, n) {
    return e.findIndex((e) => e.kind === t && e.id === n);
}
function W(e, t, n, i) {
    let r = t.slice();
    ((r[n] = i), v.set(e, r));
}
let Y = new k(r.h, {
    LOGOUT: function () {
        if (
            0 === u.size &&
            0 === _.size &&
            0 === E.size &&
            0 === A.size &&
            0 === h.size &&
            0 === I.size &&
            0 === f.size &&
            0 === O.size &&
            0 === S.size &&
            0 === v.size &&
            0 === w.size &&
            0 === b.size &&
            null == g &&
            null == T &&
            !m
        )
            return !1;
        (u.clear(),
            _.clear(),
            E.clear(),
            A.clear(),
            h.clear(),
            I.clear(),
            f.clear(),
            O.clear(),
            S.clear(),
            N.clear(),
            L.clear(),
            y.clear(),
            v.clear(),
            w.clear(),
            b.clear(),
            (g = null),
            (p = !1),
            (T = null),
            (m = !1),
            B.clear());
    },
    VIBEGRATIONS_PROJECTS_FETCH_START: function (e) {
        let { guildId: t } = e;
        (null != t && N.set(t, "loading"), (g = { type: "loading" }));
    },
    VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function (e) {
        let { projects: t, guildId: n } = e,
            i = new Set(t.map((e) => e.id));
        for (let [e, t] of u) !i.has(e) && (l(t) || (null != n && t.guild_id === n)) && u.delete(e);
        for (let e of t) u.set(e.id, e);
        for (let e of (null != n && (S.add(n), N.set(n, "success")), _.keys())) u.has(e) || _.delete(e);
        for (let e of E.keys()) u.has(e) || E.delete(e);
        for (let [e, t] of I) u.has(t) || I.delete(e);
        ((p = !0), (g = { type: "success", fetchedAt: Date.now() }));
    },
    VIBEGRATIONS_PROJECTS_FETCH_FAIL: function (e) {
        let { guildId: t } = e;
        (null != t && N.set(t, "error"), (g = { type: "error", fetchedAt: Date.now() }));
    },
    VIBEGRATIONS_PROJECT_LIMIT_FETCH_SETTLE: function (e) {
        let { maxProjects: t } = e;
        ((T = t), (m = !0));
    },
    VIBEGRATIONS_PROJECT_CREATE_SUCCESS: F,
    VIBEGRATIONS_PROJECT_UPDATE_SUCCESS: F,
    VIBEGRATIONS_PROJECT_INTEGRATION_STATUS_UPDATE: function (e) {
        let { projectId: t, integrationStatus: n } = e;
        _.set(t, n);
    },
    VIBEGRATIONS_PROJECT_PUBLISH_STATUS_UPDATE: function (e) {
        let { projectId: t, published: n, hasUnpublishedChanges: i, surface: r } = e,
            a = n ? (i ? "changes" : "up_to_date") : "unpublished",
            s = E.get(t);
        if (s?.state === a && s.surface === r) return !1;
        E.set(t, { state: a, surface: r });
    },
    VIBEGRATIONS_PROJECT_PUBLISH_START: function (e) {
        let { projectId: t } = e;
        A.add(t);
    },
    VIBEGRATIONS_PROJECT_PUBLISH_SETTLE: function (e) {
        let { projectId: t } = e;
        return A.delete(t);
    },
    VIBEGRATIONS_PROJECT_APP_CHANNEL_PENDING: function (e) {
        let { projectId: t, pending: n } = e;
        if (h.has(t) === n) return !1;
        n ? h.add(t) : h.delete(t);
    },
    VIBEGRATIONS_PROJECT_DELETE_START: function (e) {
        let { projectId: t } = e;
        f.add(t);
    },
    VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        for (let [e, n] of (f.delete(t),
        u.delete(t),
        _.delete(t),
        E.delete(t),
        A.delete(t),
        h.delete(t),
        O.delete(t),
        L.delete(t),
        y.delete(t),
        v.delete(t),
        w.delete(t),
        b.delete(t),
        I))
            n === t && I.delete(e);
    },
    VIBEGRATIONS_PROJECT_DELETE_FAIL: function (e) {
        let { projectId: t } = e;
        return f.delete(t);
    },
    VIBEGRATIONS_PROJECT_SELECT: function (e) {
        let { guildId: t, projectId: n } = e;
        if ((I.get(t) ?? null) === n) return !1;
        null == n ? I.delete(t) : I.set(t, n);
    },
    VIBEGRATIONS_TRACE_REPLAY_STARTING: function (e) {
        let { projectId: t } = e;
        B.set(t, { snapshot: new Set((v.get(t) ?? D).map((e) => V(e.kind, e.id))), touched: new Set() });
    },
    VIBEGRATIONS_HISTORY_LOAD_SETTLE: function (e) {
        let { projectId: t, scope: n, status: i, count: r, truncated: a } = e,
            s = "trace" === n ? B.get(t) : void 0;
        if (("trace" === n && B.delete(t), "failed" === i)) {
            let e = w.get(t)?.get(n);
            G(t, n, { status: "failed", truncated: e?.truncated ?? !1, count: e?.count ?? 0 });
            return;
        }
        if (null != s) {
            let e = v.get(t);
            null != e &&
                v.set(
                    t,
                    e.filter((e) => !s.snapshot.has(V(e.kind, e.id)) || s.touched.has(V(e.kind, e.id))),
                );
        }
        G(t, n, { status: "loaded", truncated: a, count: r });
    },
    VIBEGRATIONS_LOG_APPEND: function (e) {
        let { projectId: t, log: n } = e,
            i = n.seq;
        if (null != i) {
            let e = L.get(t);
            if (null != e && i <= e) return !1;
            L.set(t, i);
        }
        let r = { key: ++R, log: n },
            a = O.get(t),
            s = null == a ? [r] : a.concat(r);
        O.set(t, s.length > 500 ? s.slice(-500) : s);
    },
    VIBEGRATIONS_LOGS_SEEN: function (e) {
        let { projectId: t } = e,
            n = O.get(t),
            i = null == n || 0 === n.length ? 0 : n[n.length - 1].key;
        if ((y.get(t) ?? 0) >= i) return !1;
        y.set(t, i);
    },
    VIBEGRATIONS_TOOL_CALL_APPEND: function (e) {
        let { projectId: t, toolCall: n } = e;
        if ((H(t, "tool", n.id), M(t, n.entry_id, n.status))) return !1;
        let i = v.get(t) ?? D,
            r = j(i, "tool", n.id),
            a = -1 === r ? null : i[r],
            s = n.summary ?? a?.summary,
            l = n.fields ?? a?.fields,
            o = n.schema ?? a?.schema,
            d = n.detail_id ?? a?.detailId,
            c = n.turn_id ?? a?.turnId,
            u = n.parent_id ?? a?.parentId,
            _ = {
                kind: "tool",
                id: n.id,
                ...(null != c ? { turnId: c } : {}),
                ...(null != u ? { parentId: u } : {}),
                agent: n.agent,
                tool: n.tool,
                status: n.status,
                ...(null != s ? { summary: s } : {}),
                ...(null != l ? { fields: l } : {}),
                ...(null != o ? { schema: o } : {}),
                ...(null != d ? { detailId: d } : {}),
                ...(null != n.duration_ms ? { durationMs: n.duration_ms } : {}),
                ...(null != n.result_chars ? { resultChars: n.result_chars } : {}),
                ...(!0 === n.result_truncated ? { resultTruncated: !0 } : {}),
                ...(null != n.result_added ? { resultAdded: n.result_added } : {}),
                ...(null != n.result_removed ? { resultRemoved: n.result_removed } : {}),
                ...(null != n.error ? { error: n.error } : {}),
                startedAt: a?.startedAt ?? n.ts,
            };
        (P(t, n.entry_id, n.status), null != a) ? W(t, i, r, _) : x(t, i, _);
    },
    VIBEGRATIONS_MODEL_CALL_APPEND: function (e) {
        let { projectId: t, modelCall: n } = e;
        if ((H(t, "model", n.id), M(t, n.entry_id, n.status))) return !1;
        let i = v.get(t) ?? D,
            r = j(i, "model", n.id),
            a = -1 === r ? null : i[r],
            s = {
                kind: "model",
                id: n.id,
                ...((n.turn_id ?? a?.turnId) != null ? { turnId: n.turn_id ?? a?.turnId } : {}),
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
                })(a, {
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
                ...((n.estimated ?? a?.estimated) === !0 ? { estimated: !0 } : {}),
                ...(null != n.stop_reason ? { stopReason: n.stop_reason } : {}),
                ...(null != n.error ? { error: n.error } : {}),
                startedAt: a?.startedAt ?? n.ts,
            };
        (P(t, n.entry_id, n.status), null != a) ? W(t, i, r, s) : x(t, i, s);
    },
});
