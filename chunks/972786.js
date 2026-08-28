n.d(e, { A: () => k, P: () => o }), n(321073);
var l = n(17928),
    r = n(228366),
    i = n(287809);
function o(t) {
    return t.owner_user_id === i.default.getCurrentUser()?.id;
}
let a = new Map(),
    u = new Map(),
    s = new Map(),
    d = null,
    c = new Set(),
    _ = [],
    E = new Map(),
    p = 0,
    T = new Map(),
    I = new Map(),
    A = [],
    R = new Map(),
    f = new Map();
function S(t, e) {
    return `${t}:${e}`;
}
function h(t, e, n) {
    f.get(t)?.touched.add(S(e, n));
}
let g = new Map();
function O(t, e, n) {
    return null != e && g.get(t)?.get(e) === n;
}
function y(t, e, n) {
    if (null == e) return;
    let l = g.get(t);
    for (null == l && ((l = new Map()), g.set(t, l)), l.set(e, n); l.size > 800; ) {
        let t = l.keys().next();
        if (!0 === t.done) break;
        l.delete(t.value);
    }
}
let C = { status: "idle", truncated: !1, count: 0 },
    w = new Map();
function N(t, e, n) {
    let l = w.get(t);
    null == l && ((l = new Map()), w.set(t, l)), l.set(e, n);
}
function P(t, e, n) {
    let l = e.concat(n);
    R.set(t, l.length > 400 ? l.slice(-400) : l);
}
class B extends l.Ay.Store {
    initialize() {
        this.waitFor(i.default);
    }
    getOwnedProjects() {
        return Array.from(a.values()).filter(o);
    }
    getProject(t) {
        return a.get(t) ?? null;
    }
    findProjectByApplicationId(t) {
        for (let e of a.values()) if (e.application_id === t || e.preview_application_id === t) return e;
        return null;
    }
    getSharedProjects(t) {
        let e = [];
        for (let n of a.values()) o(n) || n.guild_id !== t || e.push(n);
        return e;
    }
    getIntegrationStatus(t) {
        return u.get(t) ?? null;
    }
    getSelectedProjectId(t) {
        return s.get(t) ?? null;
    }
    getLogs(t) {
        return E.get(t) ?? _;
    }
    getUnreadLogErrorCount(t) {
        let e = E.get(t);
        if (null == e) return 0;
        let n = I.get(t) ?? 0,
            l = 0;
        for (let t of e) t.key > n && "error" === t.log.level && (l += 1);
        return l;
    }
    getTrace(t) {
        return R.get(t) ?? A;
    }
    getHistoryState(t, e) {
        return w.get(t)?.get(e) ?? C;
    }
    getProjectsFetchState() {
        return d;
    }
    hasFetchedGuildProjects(t) {
        return c.has(t);
    }
    isVibegrationsProjectApplication(t) {
        return null != t && null != this.findProjectByApplicationId(t);
    }
}
function m(t) {
    let { project: e } = t;
    a.set(e.id, e);
}
function G(t, e, n) {
    return t.findIndex((t) => t.kind === e && t.id === n);
}
function L(t, e, n, l) {
    let r = e.slice();
    (r[n] = l), R.set(t, r);
}
let k = new B(r.h, {
    LOGOUT: function () {
        if (
            0 === a.size &&
            0 === u.size &&
            0 === s.size &&
            0 === E.size &&
            0 === c.size &&
            0 === R.size &&
            0 === w.size &&
            0 === g.size &&
            null == d
        )
            return !1;
        a.clear(),
            u.clear(),
            s.clear(),
            E.clear(),
            c.clear(),
            T.clear(),
            I.clear(),
            R.clear(),
            f.clear(),
            w.clear(),
            g.clear(),
            (d = null);
    },
    VIBEGRATIONS_PROJECTS_FETCH_START: function (t) {
        d = { type: "loading" };
    },
    VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function (t) {
        let { projects: e, guildId: n } = t,
            l = new Set(e.map((t) => t.id));
        for (let [t, e] of a) !l.has(t) && (o(e) || (null != n && e.guild_id === n)) && a.delete(t);
        for (let t of e) a.set(t.id, t);
        for (let t of (null != n && c.add(n), u.keys())) a.has(t) || u.delete(t);
        for (let [t, e] of s) a.has(e) || s.delete(t);
        d = { type: "success", fetchedAt: Date.now() };
    },
    VIBEGRATIONS_PROJECTS_FETCH_FAIL: function (t) {
        d = { type: "error", fetchedAt: Date.now() };
    },
    VIBEGRATIONS_PROJECT_CREATE_SUCCESS: m,
    VIBEGRATIONS_PROJECT_UPDATE_SUCCESS: m,
    VIBEGRATIONS_PROJECT_INTEGRATION_STATUS_UPDATE: function (t) {
        let { projectId: e, integrationStatus: n } = t;
        u.set(e, n);
    },
    VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (t) {
        let { projectId: e } = t;
        for (let [t, n] of (a.delete(e),
        u.delete(e),
        E.delete(e),
        T.delete(e),
        I.delete(e),
        R.delete(e),
        f.delete(e),
        w.delete(e),
        g.delete(e),
        s))
            n === e && s.delete(t);
    },
    VIBEGRATIONS_PROJECT_SELECT: function (t) {
        let { guildId: e, projectId: n } = t;
        if ((s.get(e) ?? null) === n) return !1;
        null == n ? s.delete(e) : s.set(e, n);
    },
    VIBEGRATIONS_HISTORY_LOAD_START: function (t) {
        let { projectId: e, scope: n } = t;
        "trace" === n &&
            f.set(e, { snapshot: new Set((R.get(e) ?? A).map((t) => S(t.kind, t.id))), touched: new Set() });
        let l = w.get(e)?.get(n);
        N(e, n, { status: "loading", truncated: l?.truncated ?? !1, count: l?.count ?? 0 });
    },
    VIBEGRATIONS_HISTORY_LOAD_SETTLE: function (t) {
        let { projectId: e, scope: n, status: l, count: r, truncated: i } = t,
            o = "trace" === n ? f.get(e) : void 0;
        if ((f.delete(e), "failed" === l)) {
            let t = w.get(e)?.get(n);
            N(e, n, { status: "failed", truncated: t?.truncated ?? !1, count: t?.count ?? 0 });
            return;
        }
        if (null != o) {
            let t = R.get(e);
            null != t &&
                R.set(
                    e,
                    t.filter((t) => !o.snapshot.has(S(t.kind, t.id)) || o.touched.has(S(t.kind, t.id))),
                );
        }
        N(e, n, { status: "loaded", truncated: i, count: r });
    },
    VIBEGRATIONS_LOG_APPEND: function (t) {
        let { projectId: e, log: n } = t,
            l = n.seq;
        if (null != l) {
            let t = T.get(e);
            if (null != t && l <= t) return !1;
            T.set(e, l);
        }
        let r = { key: ++p, log: n },
            i = E.get(e),
            o = null == i ? [r] : i.concat(r);
        E.set(e, o.length > 500 ? o.slice(-500) : o), !0 === n.historical && (I.get(e) ?? 0) < r.key && I.set(e, r.key);
    },
    VIBEGRATIONS_LOGS_SEEN: function (t) {
        let { projectId: e } = t,
            n = E.get(e),
            l = null == n || 0 === n.length ? 0 : n[n.length - 1].key;
        if ((I.get(e) ?? 0) >= l) return !1;
        I.set(e, l);
    },
    VIBEGRATIONS_TOOL_CALL_APPEND: function (t) {
        let { projectId: e, toolCall: n } = t;
        if ((h(e, "tool", n.id), O(e, n.entry_id, n.status))) return !1;
        let l = R.get(e) ?? A,
            r = G(l, "tool", n.id),
            i = -1 === r ? null : l[r],
            o = n.summary ?? i?.summary,
            a = n.fields ?? i?.fields,
            u = n.schema ?? i?.schema,
            s = n.detail_id ?? i?.detailId,
            d = n.turn_id ?? i?.turnId,
            c = n.parent_id ?? i?.parentId,
            _ = {
                kind: "tool",
                id: n.id,
                ...(null != d ? { turnId: d } : {}),
                ...(null != c ? { parentId: c } : {}),
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
        (y(e, n.entry_id, n.status), null != i) ? L(e, l, r, _) : P(e, l, _);
    },
    VIBEGRATIONS_MODEL_CALL_APPEND: function (t) {
        let { projectId: e, modelCall: n } = t;
        if ((h(e, "model", n.id), O(e, n.entry_id, n.status))) return !1;
        let l = R.get(e) ?? A,
            r = G(l, "model", n.id),
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
        (y(e, n.entry_id, n.status), null != i) ? L(e, l, r, o) : P(e, l, o);
    },
});
