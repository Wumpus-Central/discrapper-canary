n.d(e, { Ay: () => v, PV: () => u, jf: () => a }), n(321073);
var l = n(17928),
    r = n(228366),
    i = n(287809),
    o = n(673724);
function u(t) {
    return t.owner_user_id === i.default.getCurrentUser()?.id;
}
function a(t) {
    return u(t) || ((0, o.XE)(t) && null != t.guild_id);
}
let s = new Map(),
    _ = new Map(),
    d = new Map(),
    c = null,
    E = new Set(),
    p = [],
    T = new Map(),
    I = 0,
    A = new Map(),
    R = new Map(),
    f = [],
    h = new Map(),
    S = new Map();
function g(t, e, n) {
    return null != e && S.get(t)?.get(e) === n;
}
function O(t, e, n) {
    if (null == e) return;
    let l = S.get(t);
    for (null == l && ((l = new Map()), S.set(t, l)), l.set(e, n); l.size > 800; ) {
        let t = l.keys().next();
        if (!0 === t.done) break;
        l.delete(t.value);
    }
}
let y = { status: "idle", truncated: !1, count: 0 },
    C = new Map();
function w(t, e, n) {
    let l = C.get(t);
    null == l && ((l = new Map()), C.set(t, l)), l.set(e, n);
}
function k(t, e, n) {
    let l = e.concat(n);
    h.set(t, l.length > 400 ? l.slice(-400) : l);
}
class P extends l.Ay.Store {
    initialize() {
        this.waitFor(i.default);
    }
    getOwnedProjects() {
        return Array.from(s.values()).filter(u);
    }
    getProject(t) {
        return s.get(t) ?? null;
    }
    findProjectByApplicationId(t) {
        for (let e of s.values()) if (e.application_id === t || e.preview_application_id === t) return e;
        return null;
    }
    getSharedProjects(t) {
        let e = [];
        for (let n of s.values()) u(n) || n.guild_id !== t || e.push(n);
        return e;
    }
    getIntegrationStatus(t) {
        return _.get(t) ?? null;
    }
    getSelectedProjectId(t) {
        return d.get(t) ?? null;
    }
    getLogs(t) {
        return T.get(t) ?? p;
    }
    getUnreadLogErrorCount(t) {
        let e = T.get(t);
        if (null == e) return 0;
        let n = R.get(t) ?? 0,
            l = 0;
        for (let t of e) t.key > n && "error" === t.log.level && !0 !== t.log.historical && (l += 1);
        return l;
    }
    getTrace(t) {
        return h.get(t) ?? f;
    }
    getHistoryState(t, e) {
        return C.get(t)?.get(e) ?? y;
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
function N(t) {
    let { project: e } = t;
    s.set(e.id, e);
}
let B = new Map();
function m(t, e) {
    return `${t}:${e}`;
}
function G(t, e, n) {
    B.get(t)?.touched.add(m(e, n));
}
function L(t, e, n) {
    return t.findIndex((t) => t.kind === e && t.id === n);
}
function V(t, e, n, l) {
    let r = e.slice();
    (r[n] = l), h.set(t, r);
}
let v = new P(r.h, {
    LOGOUT: function () {
        if (
            0 === s.size &&
            0 === _.size &&
            0 === d.size &&
            0 === T.size &&
            0 === E.size &&
            0 === h.size &&
            0 === C.size &&
            0 === S.size &&
            null == c
        )
            return !1;
        s.clear(),
            _.clear(),
            d.clear(),
            T.clear(),
            E.clear(),
            A.clear(),
            R.clear(),
            h.clear(),
            C.clear(),
            S.clear(),
            (c = null),
            B.clear();
    },
    VIBEGRATIONS_PROJECTS_FETCH_START: function (t) {
        c = { type: "loading" };
    },
    VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function (t) {
        let { projects: e, guildId: n } = t,
            l = new Set(e.map((t) => t.id));
        for (let [t, e] of s) !l.has(t) && (u(e) || (null != n && e.guild_id === n)) && s.delete(t);
        for (let t of e) s.set(t.id, t);
        for (let t of (null != n && E.add(n), _.keys())) s.has(t) || _.delete(t);
        for (let [t, e] of d) s.has(e) || d.delete(t);
        c = { type: "success", fetchedAt: Date.now() };
    },
    VIBEGRATIONS_PROJECTS_FETCH_FAIL: function (t) {
        c = { type: "error", fetchedAt: Date.now() };
    },
    VIBEGRATIONS_PROJECT_CREATE_SUCCESS: N,
    VIBEGRATIONS_PROJECT_UPDATE_SUCCESS: N,
    VIBEGRATIONS_PROJECT_INTEGRATION_STATUS_UPDATE: function (t) {
        let { projectId: e, integrationStatus: n } = t;
        _.set(e, n);
    },
    VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (t) {
        let { projectId: e } = t;
        for (let [t, n] of (s.delete(e),
        _.delete(e),
        T.delete(e),
        A.delete(e),
        R.delete(e),
        h.delete(e),
        C.delete(e),
        S.delete(e),
        d))
            n === e && d.delete(t);
    },
    VIBEGRATIONS_PROJECT_SELECT: function (t) {
        let { guildId: e, projectId: n } = t;
        if ((d.get(e) ?? null) === n) return !1;
        null == n ? d.delete(e) : d.set(e, n);
    },
    VIBEGRATIONS_TRACE_REPLAY_STARTING: function (t) {
        let { projectId: e } = t;
        B.set(e, { snapshot: new Set((h.get(e) ?? f).map((t) => m(t.kind, t.id))), touched: new Set() });
    },
    VIBEGRATIONS_HISTORY_LOAD_SETTLE: function (t) {
        let { projectId: e, scope: n, status: l, count: r, truncated: i } = t,
            o = "trace" === n ? B.get(e) : void 0;
        if (("trace" === n && B.delete(e), "failed" === l)) {
            let t = C.get(e)?.get(n);
            w(e, n, { status: "failed", truncated: t?.truncated ?? !1, count: t?.count ?? 0 });
            return;
        }
        if (null != o) {
            let t = h.get(e);
            null != t &&
                h.set(
                    e,
                    t.filter((t) => !o.snapshot.has(m(t.kind, t.id)) || o.touched.has(m(t.kind, t.id))),
                );
        }
        w(e, n, { status: "loaded", truncated: i, count: r });
    },
    VIBEGRATIONS_LOG_APPEND: function (t) {
        let { projectId: e, log: n } = t,
            l = n.seq;
        if (null != l) {
            let t = A.get(e);
            if (null != t && l <= t) return !1;
            A.set(e, l);
        }
        let r = { key: ++I, log: n },
            i = T.get(e),
            o = null == i ? [r] : i.concat(r);
        T.set(e, o.length > 500 ? o.slice(-500) : o);
    },
    VIBEGRATIONS_LOGS_SEEN: function (t) {
        let { projectId: e } = t,
            n = T.get(e),
            l = null == n || 0 === n.length ? 0 : n[n.length - 1].key;
        if ((R.get(e) ?? 0) >= l) return !1;
        R.set(e, l);
    },
    VIBEGRATIONS_TOOL_CALL_APPEND: function (t) {
        let { projectId: e, toolCall: n } = t;
        if ((G(e, "tool", n.id), g(e, n.entry_id, n.status))) return !1;
        let l = h.get(e) ?? f,
            r = L(l, "tool", n.id),
            i = -1 === r ? null : l[r],
            o = n.summary ?? i?.summary,
            u = n.fields ?? i?.fields,
            a = n.schema ?? i?.schema,
            s = n.detail_id ?? i?.detailId,
            _ = n.turn_id ?? i?.turnId,
            d = n.parent_id ?? i?.parentId,
            c = {
                kind: "tool",
                id: n.id,
                ...(null != _ ? { turnId: _ } : {}),
                ...(null != d ? { parentId: d } : {}),
                agent: n.agent,
                tool: n.tool,
                status: n.status,
                ...(null != o ? { summary: o } : {}),
                ...(null != u ? { fields: u } : {}),
                ...(null != a ? { schema: a } : {}),
                ...(null != s ? { detailId: s } : {}),
                ...(null != n.duration_ms ? { durationMs: n.duration_ms } : {}),
                ...(null != n.result_chars ? { resultChars: n.result_chars } : {}),
                ...(!0 === n.result_truncated ? { resultTruncated: !0 } : {}),
                ...(null != n.result_added ? { resultAdded: n.result_added } : {}),
                ...(null != n.result_removed ? { resultRemoved: n.result_removed } : {}),
                ...(null != n.error ? { error: n.error } : {}),
                startedAt: i?.startedAt ?? n.ts,
            };
        (O(e, n.entry_id, n.status), null != i) ? V(e, l, r, c) : k(e, l, c);
    },
    VIBEGRATIONS_MODEL_CALL_APPEND: function (t) {
        let { projectId: e, modelCall: n } = t;
        if ((G(e, "model", n.id), g(e, n.entry_id, n.status))) return !1;
        let l = h.get(e) ?? f,
            r = L(l, "model", n.id),
            i = -1 === r ? null : l[r],
            o = {
                kind: "model",
                id: n.id,
                ...((n.turn_id ?? i?.turnId) != null ? { turnId: n.turn_id ?? i?.turnId } : {}),
                agent: n.agent,
                model: n.model,
                status: n.status,
                ...(function (t, e) {
                    let n = {};
                    for (let [l, r] of Object.entries(e)) {
                        let e = r ?? t?.[l];
                        "number" == typeof e && (n[l] = e);
                    }
                    return n;
                })(i, {
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
                ...((n.estimated ?? i?.estimated) === !0 ? { estimated: !0 } : {}),
                ...(null != n.stop_reason ? { stopReason: n.stop_reason } : {}),
                ...(null != n.error ? { error: n.error } : {}),
                startedAt: i?.startedAt ?? n.ts,
            };
        (O(e, n.entry_id, n.status), null != i) ? V(e, l, r, o) : k(e, l, o);
    },
});
