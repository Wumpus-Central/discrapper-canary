(n.d(t, { Ay: () => H, H_: () => d, PV: () => s, jf: () => a }), n(321073));
var r = n(17928),
    i = n(228366),
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
    p = new Set(),
    _ = null,
    g = new Set(),
    w = new Map(),
    E = [],
    m = new Map(),
    T = 0,
    I = new Map(),
    A = new Map(),
    S = [],
    R = new Map(),
    y = new Map();
function v(e, t, n) {
    return null != t && y.get(e)?.get(t) === n;
}
function O(e, t, n) {
    if (null == t) return;
    let r = y.get(e);
    for (null == r && ((r = new Map()), y.set(e, r)), r.set(t, n); r.size > 800;) {
        let e = r.keys().next();
        if (!0 === e.done) break;
        r.delete(e.value);
    }
}
let b = { status: "idle", truncated: !1, count: 0 },
    k = new Map();
function C(e, t, n) {
    let r = k.get(e);
    (null == r && ((r = new Map()), k.set(e, r)), r.set(t, n));
}
function N(e, t, n) {
    let r = t.concat(n);
    R.set(e, r.length > 400 ? r.slice(-400) : r);
}
class P extends r.Ay.Store {
    initialize() {
        this.waitFor(l.default);
    }
    getOwnedProjects() {
        return Array.from(c.values()).filter(s);
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
    isProjectDeleting(e) {
        return p.has(e);
    }
    getSelectedProjectId(e) {
        return h.get(e) ?? null;
    }
    getLogs(e) {
        return m.get(e) ?? E;
    }
    getUnreadLogErrorCount(e) {
        let t = m.get(e);
        if (null == t) return 0;
        let n = A.get(e) ?? 0,
            r = 0;
        for (let e of t) e.key > n && "error" === e.log.level && !0 !== e.log.historical && (r += 1);
        return r;
    }
    getTrace(e) {
        return R.get(e) ?? S;
    }
    getHistoryState(e, t) {
        return k.get(e)?.get(t) ?? b;
    }
    getProjectsFetchState() {
        return _;
    }
    hasFetchedGuildProjects(e) {
        return g.has(e);
    }
    getGuildProjectsFetchState(e) {
        return w.get(e) ?? "unattempted";
    }
    isVibegrationsProjectApplication(e) {
        return null != e && null != this.findProjectByApplicationId(e);
    }
}
function M(e) {
    let { project: t } = e;
    c.set(t.id, t);
}
let B = new Map();
function L(e, t) {
    return `${e}:${t}`;
}
function D(e, t, n) {
    B.get(e)?.touched.add(L(t, n));
}
function G(e, t, n) {
    return e.findIndex((e) => e.kind === t && e.id === n);
}
function V(e, t, n, r) {
    let i = t.slice();
    ((i[n] = r), R.set(e, i));
}
let H = new P(i.h, {
    LOGOUT: function () {
        if (
            0 === c.size &&
            0 === f.size &&
            0 === h.size &&
            0 === p.size &&
            0 === m.size &&
            0 === g.size &&
            0 === R.size &&
            0 === k.size &&
            0 === y.size &&
            null == _
        )
            return !1;
        (c.clear(),
            f.clear(),
            h.clear(),
            p.clear(),
            m.clear(),
            g.clear(),
            w.clear(),
            I.clear(),
            A.clear(),
            R.clear(),
            k.clear(),
            y.clear(),
            (_ = null),
            B.clear());
    },
    VIBEGRATIONS_PROJECTS_FETCH_START: function (e) {
        let { guildId: t } = e;
        (null != t && w.set(t, "loading"), (_ = { type: "loading" }));
    },
    VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function (e) {
        let { projects: t, guildId: n } = e,
            r = new Set(t.map((e) => e.id));
        for (let [e, t] of c) !r.has(e) && (s(t) || (null != n && t.guild_id === n)) && c.delete(e);
        for (let e of t) c.set(e.id, e);
        for (let e of (null != n && (g.add(n), w.set(n, "success")), f.keys())) c.has(e) || f.delete(e);
        for (let [e, t] of h) c.has(t) || h.delete(e);
        _ = { type: "success", fetchedAt: Date.now() };
    },
    VIBEGRATIONS_PROJECTS_FETCH_FAIL: function (e) {
        let { guildId: t } = e;
        (null != t && w.set(t, "error"), (_ = { type: "error", fetchedAt: Date.now() }));
    },
    VIBEGRATIONS_PROJECT_CREATE_SUCCESS: M,
    VIBEGRATIONS_PROJECT_UPDATE_SUCCESS: M,
    VIBEGRATIONS_PROJECT_INTEGRATION_STATUS_UPDATE: function (e) {
        let { projectId: t, integrationStatus: n } = e;
        f.set(t, n);
    },
    VIBEGRATIONS_PROJECT_DELETE_START: function (e) {
        let { projectId: t } = e;
        p.add(t);
    },
    VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        for (let [e, n] of (p.delete(t),
        c.delete(t),
        f.delete(t),
        m.delete(t),
        I.delete(t),
        A.delete(t),
        R.delete(t),
        k.delete(t),
        y.delete(t),
        h))
            n === t && h.delete(e);
    },
    VIBEGRATIONS_PROJECT_DELETE_FAIL: function (e) {
        let { projectId: t } = e;
        return p.delete(t);
    },
    VIBEGRATIONS_PROJECT_SELECT: function (e) {
        let { guildId: t, projectId: n } = e;
        if ((h.get(t) ?? null) === n) return !1;
        null == n ? h.delete(t) : h.set(t, n);
    },
    VIBEGRATIONS_TRACE_REPLAY_STARTING: function (e) {
        let { projectId: t } = e;
        B.set(t, { snapshot: new Set((R.get(t) ?? S).map((e) => L(e.kind, e.id))), touched: new Set() });
    },
    VIBEGRATIONS_HISTORY_LOAD_SETTLE: function (e) {
        let { projectId: t, scope: n, status: r, count: i, truncated: l } = e,
            o = "trace" === n ? B.get(t) : void 0;
        if (("trace" === n && B.delete(t), "failed" === r)) {
            let e = k.get(t)?.get(n);
            C(t, n, { status: "failed", truncated: e?.truncated ?? !1, count: e?.count ?? 0 });
            return;
        }
        if (null != o) {
            let e = R.get(t);
            null != e &&
                R.set(
                    t,
                    e.filter((e) => !o.snapshot.has(L(e.kind, e.id)) || o.touched.has(L(e.kind, e.id))),
                );
        }
        C(t, n, { status: "loaded", truncated: l, count: i });
    },
    VIBEGRATIONS_LOG_APPEND: function (e) {
        let { projectId: t, log: n } = e,
            r = n.seq;
        if (null != r) {
            let e = I.get(t);
            if (null != e && r <= e) return !1;
            I.set(t, r);
        }
        let i = { key: ++T, log: n },
            l = m.get(t),
            o = null == l ? [i] : l.concat(i);
        m.set(t, o.length > 500 ? o.slice(-500) : o);
    },
    VIBEGRATIONS_LOGS_SEEN: function (e) {
        let { projectId: t } = e,
            n = m.get(t),
            r = null == n || 0 === n.length ? 0 : n[n.length - 1].key;
        if ((A.get(t) ?? 0) >= r) return !1;
        A.set(t, r);
    },
    VIBEGRATIONS_TOOL_CALL_APPEND: function (e) {
        let { projectId: t, toolCall: n } = e;
        if ((D(t, "tool", n.id), v(t, n.entry_id, n.status))) return !1;
        let r = R.get(t) ?? S,
            i = G(r, "tool", n.id),
            l = -1 === i ? null : r[i],
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
        (O(t, n.entry_id, n.status), null != l) ? V(t, r, i, f) : N(t, r, f);
    },
    VIBEGRATIONS_MODEL_CALL_APPEND: function (e) {
        let { projectId: t, modelCall: n } = e;
        if ((D(t, "model", n.id), v(t, n.entry_id, n.status))) return !1;
        let r = R.get(t) ?? S,
            i = G(r, "model", n.id),
            l = -1 === i ? null : r[i],
            o = {
                kind: "model",
                id: n.id,
                ...((n.turn_id ?? l?.turnId) != null ? { turnId: n.turn_id ?? l?.turnId } : {}),
                agent: n.agent,
                model: n.model,
                status: n.status,
                ...(function (e, t) {
                    let n = {};
                    for (let [r, i] of Object.entries(t)) {
                        let t = i ?? e?.[r];
                        "number" == typeof t && (n[r] = t);
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
        (O(t, n.entry_id, n.status), null != l) ? V(t, r, i, o) : N(t, r, o);
    },
});
