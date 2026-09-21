(n.d(t, { Ay: () => V, H_: () => d, PV: () => s, jf: () => a }), n(321073));
var i = n(17928),
    r = n(228366),
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
    p = null,
    _ = new Set(),
    g = new Map(),
    w = [],
    m = new Map(),
    E = 0,
    I = new Map(),
    T = new Map(),
    A = [],
    S = new Map(),
    v = new Map();
function y(e, t, n) {
    return null != t && v.get(e)?.get(t) === n;
}
function R(e, t, n) {
    if (null == t) return;
    let i = v.get(e);
    for (null == i && ((i = new Map()), v.set(e, i)), i.set(t, n); i.size > 800;) {
        let e = i.keys().next();
        if (!0 === e.done) break;
        i.delete(e.value);
    }
}
let O = { status: "idle", truncated: !1, count: 0 },
    b = new Map();
function k(e, t, n) {
    let i = b.get(e);
    (null == i && ((i = new Map()), b.set(e, i)), i.set(t, n));
}
function N(e, t, n) {
    let i = t.concat(n);
    S.set(e, i.length > 400 ? i.slice(-400) : i);
}
class P extends i.Ay.Store {
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
    getSelectedProjectId(e) {
        return h.get(e) ?? null;
    }
    getLogs(e) {
        return m.get(e) ?? w;
    }
    getUnreadLogErrorCount(e) {
        let t = m.get(e);
        if (null == t) return 0;
        let n = T.get(e) ?? 0,
            i = 0;
        for (let e of t) e.key > n && "error" === e.log.level && !0 !== e.log.historical && (i += 1);
        return i;
    }
    getTrace(e) {
        return S.get(e) ?? A;
    }
    getHistoryState(e, t) {
        return b.get(e)?.get(t) ?? O;
    }
    getProjectsFetchState() {
        return p;
    }
    hasFetchedGuildProjects(e) {
        return _.has(e);
    }
    getGuildProjectsFetchState(e) {
        return g.get(e) ?? "unattempted";
    }
    isVibegrationsProjectApplication(e) {
        return null != e && null != this.findProjectByApplicationId(e);
    }
}
function C(e) {
    let { project: t } = e;
    c.set(t.id, t);
}
let M = new Map();
function B(e, t) {
    return `${e}:${t}`;
}
function L(e, t, n) {
    M.get(e)?.touched.add(B(t, n));
}
function D(e, t, n) {
    return e.findIndex((e) => e.kind === t && e.id === n);
}
function G(e, t, n, i) {
    let r = t.slice();
    ((r[n] = i), S.set(e, r));
}
let V = new P(r.h, {
    LOGOUT: function () {
        if (
            0 === c.size &&
            0 === f.size &&
            0 === h.size &&
            0 === m.size &&
            0 === _.size &&
            0 === S.size &&
            0 === b.size &&
            0 === v.size &&
            null == p
        )
            return !1;
        (c.clear(),
            f.clear(),
            h.clear(),
            m.clear(),
            _.clear(),
            g.clear(),
            I.clear(),
            T.clear(),
            S.clear(),
            b.clear(),
            v.clear(),
            (p = null),
            M.clear());
    },
    VIBEGRATIONS_PROJECTS_FETCH_START: function (e) {
        let { guildId: t } = e;
        (null != t && g.set(t, "loading"), (p = { type: "loading" }));
    },
    VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function (e) {
        let { projects: t, guildId: n } = e,
            i = new Set(t.map((e) => e.id));
        for (let [e, t] of c) !i.has(e) && (s(t) || (null != n && t.guild_id === n)) && c.delete(e);
        for (let e of t) c.set(e.id, e);
        for (let e of (null != n && (_.add(n), g.set(n, "success")), f.keys())) c.has(e) || f.delete(e);
        for (let [e, t] of h) c.has(t) || h.delete(e);
        p = { type: "success", fetchedAt: Date.now() };
    },
    VIBEGRATIONS_PROJECTS_FETCH_FAIL: function (e) {
        let { guildId: t } = e;
        (null != t && g.set(t, "error"), (p = { type: "error", fetchedAt: Date.now() }));
    },
    VIBEGRATIONS_PROJECT_CREATE_SUCCESS: C,
    VIBEGRATIONS_PROJECT_UPDATE_SUCCESS: C,
    VIBEGRATIONS_PROJECT_INTEGRATION_STATUS_UPDATE: function (e) {
        let { projectId: t, integrationStatus: n } = e;
        f.set(t, n);
    },
    VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        for (let [e, n] of (c.delete(t),
        f.delete(t),
        m.delete(t),
        I.delete(t),
        T.delete(t),
        S.delete(t),
        b.delete(t),
        v.delete(t),
        h))
            n === t && h.delete(e);
    },
    VIBEGRATIONS_PROJECT_SELECT: function (e) {
        let { guildId: t, projectId: n } = e;
        if ((h.get(t) ?? null) === n) return !1;
        null == n ? h.delete(t) : h.set(t, n);
    },
    VIBEGRATIONS_TRACE_REPLAY_STARTING: function (e) {
        let { projectId: t } = e;
        M.set(t, { snapshot: new Set((S.get(t) ?? A).map((e) => B(e.kind, e.id))), touched: new Set() });
    },
    VIBEGRATIONS_HISTORY_LOAD_SETTLE: function (e) {
        let { projectId: t, scope: n, status: i, count: r, truncated: l } = e,
            o = "trace" === n ? M.get(t) : void 0;
        if (("trace" === n && M.delete(t), "failed" === i)) {
            let e = b.get(t)?.get(n);
            k(t, n, { status: "failed", truncated: e?.truncated ?? !1, count: e?.count ?? 0 });
            return;
        }
        if (null != o) {
            let e = S.get(t);
            null != e &&
                S.set(
                    t,
                    e.filter((e) => !o.snapshot.has(B(e.kind, e.id)) || o.touched.has(B(e.kind, e.id))),
                );
        }
        k(t, n, { status: "loaded", truncated: l, count: r });
    },
    VIBEGRATIONS_LOG_APPEND: function (e) {
        let { projectId: t, log: n } = e,
            i = n.seq;
        if (null != i) {
            let e = I.get(t);
            if (null != e && i <= e) return !1;
            I.set(t, i);
        }
        let r = { key: ++E, log: n },
            l = m.get(t),
            o = null == l ? [r] : l.concat(r);
        m.set(t, o.length > 500 ? o.slice(-500) : o);
    },
    VIBEGRATIONS_LOGS_SEEN: function (e) {
        let { projectId: t } = e,
            n = m.get(t),
            i = null == n || 0 === n.length ? 0 : n[n.length - 1].key;
        if ((T.get(t) ?? 0) >= i) return !1;
        T.set(t, i);
    },
    VIBEGRATIONS_TOOL_CALL_APPEND: function (e) {
        let { projectId: t, toolCall: n } = e;
        if ((L(t, "tool", n.id), y(t, n.entry_id, n.status))) return !1;
        let i = S.get(t) ?? A,
            r = D(i, "tool", n.id),
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
        (R(t, n.entry_id, n.status), null != l) ? G(t, i, r, f) : N(t, i, f);
    },
    VIBEGRATIONS_MODEL_CALL_APPEND: function (e) {
        let { projectId: t, modelCall: n } = e;
        if ((L(t, "model", n.id), y(t, n.entry_id, n.status))) return !1;
        let i = S.get(t) ?? A,
            r = D(i, "model", n.id),
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
        (R(t, n.entry_id, n.status), null != l) ? G(t, i, r, o) : N(t, i, o);
    },
});
