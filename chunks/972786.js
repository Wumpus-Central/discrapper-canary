n.d(t, { Ay: () => v, PV: () => a, jf: () => u }), n(321073);
var l = n(17928),
    r = n(228366),
    i = n(287809),
    o = n(673724);
function a(e) {
    return e.owner_user_id === i.default.getCurrentUser()?.id;
}
function u(e) {
    return a(e) || ((0, o.XE)(e) && null != e.guild_id);
}
let s = new Map(),
    d = new Map(),
    _ = new Map(),
    c = null,
    E = new Set(),
    p = [],
    T = new Map(),
    I = 0,
    A = new Map(),
    R = new Map(),
    f = [],
    S = new Map(),
    h = new Map();
function g(e, t, n) {
    return null != t && h.get(e)?.get(t) === n;
}
function O(e, t, n) {
    if (null == t) return;
    let l = h.get(e);
    for (null == l && ((l = new Map()), h.set(e, l)), l.set(t, n); l.size > 800; ) {
        let e = l.keys().next();
        if (!0 === e.done) break;
        l.delete(e.value);
    }
}
let y = { status: "idle", truncated: !1, count: 0 },
    C = new Map();
function w(e, t, n) {
    let l = C.get(e);
    null == l && ((l = new Map()), C.set(e, l)), l.set(t, n);
}
function P(e, t, n) {
    let l = t.concat(n);
    S.set(e, l.length > 400 ? l.slice(-400) : l);
}
class N extends l.Ay.Store {
    initialize() {
        this.waitFor(i.default);
    }
    getOwnedProjects() {
        return Array.from(s.values()).filter(a);
    }
    getProject(e) {
        return s.get(e) ?? null;
    }
    findProjectByApplicationId(e) {
        for (let t of s.values()) if (t.application_id === e || t.preview_application_id === e) return t;
        return null;
    }
    getSharedProjects(e) {
        let t = [];
        for (let n of s.values()) a(n) || n.guild_id !== e || t.push(n);
        return t;
    }
    getIntegrationStatus(e) {
        return d.get(e) ?? null;
    }
    getSelectedProjectId(e) {
        return _.get(e) ?? null;
    }
    getLogs(e) {
        return T.get(e) ?? p;
    }
    getUnreadLogErrorCount(e) {
        let t = T.get(e);
        if (null == t) return 0;
        let n = R.get(e) ?? 0,
            l = 0;
        for (let e of t) e.key > n && "error" === e.log.level && !0 !== e.log.historical && (l += 1);
        return l;
    }
    getTrace(e) {
        return S.get(e) ?? f;
    }
    getHistoryState(e, t) {
        return C.get(e)?.get(t) ?? y;
    }
    getProjectsFetchState() {
        return c;
    }
    hasFetchedGuildProjects(e) {
        return E.has(e);
    }
    isVibegrationsProjectApplication(e) {
        return null != e && null != this.findProjectByApplicationId(e);
    }
}
function B(e) {
    let { project: t } = e;
    s.set(t.id, t);
}
let m = new Map();
function G(e, t) {
    return `${e}:${t}`;
}
function L(e, t, n) {
    m.get(e)?.touched.add(G(t, n));
}
function k(e, t, n) {
    return e.findIndex((e) => e.kind === t && e.id === n);
}
function V(e, t, n, l) {
    let r = t.slice();
    (r[n] = l), S.set(e, r);
}
let v = new N(r.h, {
    LOGOUT: function () {
        if (
            0 === s.size &&
            0 === d.size &&
            0 === _.size &&
            0 === T.size &&
            0 === E.size &&
            0 === S.size &&
            0 === C.size &&
            0 === h.size &&
            null == c
        )
            return !1;
        s.clear(),
            d.clear(),
            _.clear(),
            T.clear(),
            E.clear(),
            A.clear(),
            R.clear(),
            S.clear(),
            C.clear(),
            h.clear(),
            (c = null),
            m.clear();
    },
    VIBEGRATIONS_PROJECTS_FETCH_START: function (e) {
        c = { type: "loading" };
    },
    VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function (e) {
        let { projects: t, guildId: n } = e,
            l = new Set(t.map((e) => e.id));
        for (let [e, t] of s) !l.has(e) && (a(t) || (null != n && t.guild_id === n)) && s.delete(e);
        for (let e of t) s.set(e.id, e);
        for (let e of (null != n && E.add(n), d.keys())) s.has(e) || d.delete(e);
        for (let [e, t] of _) s.has(t) || _.delete(e);
        c = { type: "success", fetchedAt: Date.now() };
    },
    VIBEGRATIONS_PROJECTS_FETCH_FAIL: function (e) {
        c = { type: "error", fetchedAt: Date.now() };
    },
    VIBEGRATIONS_PROJECT_CREATE_SUCCESS: B,
    VIBEGRATIONS_PROJECT_UPDATE_SUCCESS: B,
    VIBEGRATIONS_PROJECT_INTEGRATION_STATUS_UPDATE: function (e) {
        let { projectId: t, integrationStatus: n } = e;
        d.set(t, n);
    },
    VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        for (let [e, n] of (s.delete(t),
        d.delete(t),
        T.delete(t),
        A.delete(t),
        R.delete(t),
        S.delete(t),
        C.delete(t),
        h.delete(t),
        _))
            n === t && _.delete(e);
    },
    VIBEGRATIONS_PROJECT_SELECT: function (e) {
        let { guildId: t, projectId: n } = e;
        if ((_.get(t) ?? null) === n) return !1;
        null == n ? _.delete(t) : _.set(t, n);
    },
    VIBEGRATIONS_TRACE_REPLAY_STARTING: function (e) {
        let { projectId: t } = e;
        m.set(t, { snapshot: new Set((S.get(t) ?? f).map((e) => G(e.kind, e.id))), touched: new Set() });
    },
    VIBEGRATIONS_HISTORY_LOAD_SETTLE: function (e) {
        let { projectId: t, scope: n, status: l, count: r, truncated: i } = e,
            o = "trace" === n ? m.get(t) : void 0;
        if (("trace" === n && m.delete(t), "failed" === l)) {
            let e = C.get(t)?.get(n);
            w(t, n, { status: "failed", truncated: e?.truncated ?? !1, count: e?.count ?? 0 });
            return;
        }
        if (null != o) {
            let e = S.get(t);
            null != e &&
                S.set(
                    t,
                    e.filter((e) => !o.snapshot.has(G(e.kind, e.id)) || o.touched.has(G(e.kind, e.id))),
                );
        }
        w(t, n, { status: "loaded", truncated: i, count: r });
    },
    VIBEGRATIONS_LOG_APPEND: function (e) {
        let { projectId: t, log: n } = e,
            l = n.seq;
        if (null != l) {
            let e = A.get(t);
            if (null != e && l <= e) return !1;
            A.set(t, l);
        }
        let r = { key: ++I, log: n },
            i = T.get(t),
            o = null == i ? [r] : i.concat(r);
        T.set(t, o.length > 500 ? o.slice(-500) : o);
    },
    VIBEGRATIONS_LOGS_SEEN: function (e) {
        let { projectId: t } = e,
            n = T.get(t),
            l = null == n || 0 === n.length ? 0 : n[n.length - 1].key;
        if ((R.get(t) ?? 0) >= l) return !1;
        R.set(t, l);
    },
    VIBEGRATIONS_TOOL_CALL_APPEND: function (e) {
        let { projectId: t, toolCall: n } = e;
        if ((L(t, "tool", n.id), g(t, n.entry_id, n.status))) return !1;
        let l = S.get(t) ?? f,
            r = k(l, "tool", n.id),
            i = -1 === r ? null : l[r],
            o = n.summary ?? i?.summary,
            a = n.fields ?? i?.fields,
            u = n.schema ?? i?.schema,
            s = n.detail_id ?? i?.detailId,
            d = n.turn_id ?? i?.turnId,
            _ = n.parent_id ?? i?.parentId,
            c = {
                kind: "tool",
                id: n.id,
                ...(null != d ? { turnId: d } : {}),
                ...(null != _ ? { parentId: _ } : {}),
                agent: n.agent,
                tool: n.tool,
                status: n.status,
                ...(null != o ? { summary: o } : {}),
                ...(null != a ? { fields: a } : {}),
                ...(null != u ? { schema: u } : {}),
                ...(null != s ? { detailId: s } : {}),
                ...(null != n.duration_ms ? { durationMs: n.duration_ms } : {}),
                ...(null != n.result_chars ? { resultChars: n.result_chars } : {}),
                ...(!0 === n.result_truncated ? { resultTruncated: !0 } : {}),
                ...(null != n.result_added ? { resultAdded: n.result_added } : {}),
                ...(null != n.result_removed ? { resultRemoved: n.result_removed } : {}),
                ...(null != n.error ? { error: n.error } : {}),
                startedAt: i?.startedAt ?? n.ts,
            };
        (O(t, n.entry_id, n.status), null != i) ? V(t, l, r, c) : P(t, l, c);
    },
    VIBEGRATIONS_MODEL_CALL_APPEND: function (e) {
        let { projectId: t, modelCall: n } = e;
        if ((L(t, "model", n.id), g(t, n.entry_id, n.status))) return !1;
        let l = S.get(t) ?? f,
            r = k(l, "model", n.id),
            i = -1 === r ? null : l[r],
            o = {
                kind: "model",
                id: n.id,
                ...((n.turn_id ?? i?.turnId) != null ? { turnId: n.turn_id ?? i?.turnId } : {}),
                agent: n.agent,
                model: n.model,
                status: n.status,
                ...(function (e, t) {
                    let n = {};
                    for (let [l, r] of Object.entries(t)) {
                        let t = r ?? e?.[l];
                        "number" == typeof t && (n[l] = t);
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
        (O(t, n.entry_id, n.status), null != i) ? V(t, l, r, o) : P(t, l, o);
    },
});
