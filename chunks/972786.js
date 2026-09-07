n.d(e, { Ay: () => U, H_: () => _, PV: () => u, jf: () => s }), n(321073);
var l = n(17928),
    r = n(228366),
    i = n(287809),
    o = n(673724);
function u(t) {
    return t.owner_user_id === i.default.getCurrentUser()?.id;
}
function a(t) {
    return (0, o.XE)(t) && null != t.guild_id;
}
function s(t) {
    return u(t) || a(t);
}
function _(t) {
    return u(t) || (0, o.tr)(t) || a(t);
}
let c = new Map(),
    d = new Map(),
    E = new Map(),
    p = null,
    T = new Set(),
    I = [],
    f = new Map(),
    A = 0,
    R = new Map(),
    h = new Map(),
    S = [],
    g = new Map(),
    O = new Map();
function y(t, e, n) {
    return null != e && O.get(t)?.get(e) === n;
}
function C(t, e, n) {
    if (null == e) return;
    let l = O.get(t);
    for (null == l && ((l = new Map()), O.set(t, l)), l.set(e, n); l.size > 800; ) {
        let t = l.keys().next();
        if (!0 === t.done) break;
        l.delete(t.value);
    }
}
let w = { status: "idle", truncated: !1, count: 0 },
    k = new Map();
function P(t, e, n) {
    let l = k.get(t);
    null == l && ((l = new Map()), k.set(t, l)), l.set(e, n);
}
function N(t, e, n) {
    let l = e.concat(n);
    g.set(t, l.length > 400 ? l.slice(-400) : l);
}
class B extends l.Ay.Store {
    initialize() {
        this.waitFor(i.default);
    }
    getOwnedProjects() {
        return Array.from(c.values()).filter(u);
    }
    getProject(t) {
        return c.get(t) ?? null;
    }
    findProjectByApplicationId(t) {
        for (let e of c.values()) if (e.application_id === t || e.preview_application_id === t) return e;
        return null;
    }
    getSharedProjects(t) {
        let e = [];
        for (let n of c.values()) u(n) || n.guild_id !== t || e.push(n);
        return e;
    }
    getIntegrationStatus(t) {
        return d.get(t) ?? null;
    }
    getSelectedProjectId(t) {
        return E.get(t) ?? null;
    }
    getLogs(t) {
        return f.get(t) ?? I;
    }
    getUnreadLogErrorCount(t) {
        let e = f.get(t);
        if (null == e) return 0;
        let n = h.get(t) ?? 0,
            l = 0;
        for (let t of e) t.key > n && "error" === t.log.level && !0 !== t.log.historical && (l += 1);
        return l;
    }
    getTrace(t) {
        return g.get(t) ?? S;
    }
    getHistoryState(t, e) {
        return k.get(t)?.get(e) ?? w;
    }
    getProjectsFetchState() {
        return p;
    }
    hasFetchedGuildProjects(t) {
        return T.has(t);
    }
    isVibegrationsProjectApplication(t) {
        return null != t && null != this.findProjectByApplicationId(t);
    }
}
function m(t) {
    let { project: e } = t;
    c.set(e.id, e);
}
let G = new Map();
function L(t, e) {
    return `${t}:${e}`;
}
function V(t, e, n) {
    G.get(t)?.touched.add(L(e, n));
}
function v(t, e, n) {
    return t.findIndex((t) => t.kind === e && t.id === n);
}
function D(t, e, n, l) {
    let r = e.slice();
    (r[n] = l), g.set(t, r);
}
let U = new B(r.h, {
    LOGOUT: function () {
        if (
            0 === c.size &&
            0 === d.size &&
            0 === E.size &&
            0 === f.size &&
            0 === T.size &&
            0 === g.size &&
            0 === k.size &&
            0 === O.size &&
            null == p
        )
            return !1;
        c.clear(),
            d.clear(),
            E.clear(),
            f.clear(),
            T.clear(),
            R.clear(),
            h.clear(),
            g.clear(),
            k.clear(),
            O.clear(),
            (p = null),
            G.clear();
    },
    VIBEGRATIONS_PROJECTS_FETCH_START: function (t) {
        p = { type: "loading" };
    },
    VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function (t) {
        let { projects: e, guildId: n } = t,
            l = new Set(e.map((t) => t.id));
        for (let [t, e] of c) !l.has(t) && (u(e) || (null != n && e.guild_id === n)) && c.delete(t);
        for (let t of e) c.set(t.id, t);
        for (let t of (null != n && T.add(n), d.keys())) c.has(t) || d.delete(t);
        for (let [t, e] of E) c.has(e) || E.delete(t);
        p = { type: "success", fetchedAt: Date.now() };
    },
    VIBEGRATIONS_PROJECTS_FETCH_FAIL: function (t) {
        p = { type: "error", fetchedAt: Date.now() };
    },
    VIBEGRATIONS_PROJECT_CREATE_SUCCESS: m,
    VIBEGRATIONS_PROJECT_UPDATE_SUCCESS: m,
    VIBEGRATIONS_PROJECT_INTEGRATION_STATUS_UPDATE: function (t) {
        let { projectId: e, integrationStatus: n } = t;
        d.set(e, n);
    },
    VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (t) {
        let { projectId: e } = t;
        for (let [t, n] of (c.delete(e),
        d.delete(e),
        f.delete(e),
        R.delete(e),
        h.delete(e),
        g.delete(e),
        k.delete(e),
        O.delete(e),
        E))
            n === e && E.delete(t);
    },
    VIBEGRATIONS_PROJECT_SELECT: function (t) {
        let { guildId: e, projectId: n } = t;
        if ((E.get(e) ?? null) === n) return !1;
        null == n ? E.delete(e) : E.set(e, n);
    },
    VIBEGRATIONS_TRACE_REPLAY_STARTING: function (t) {
        let { projectId: e } = t;
        G.set(e, { snapshot: new Set((g.get(e) ?? S).map((t) => L(t.kind, t.id))), touched: new Set() });
    },
    VIBEGRATIONS_HISTORY_LOAD_SETTLE: function (t) {
        let { projectId: e, scope: n, status: l, count: r, truncated: i } = t,
            o = "trace" === n ? G.get(e) : void 0;
        if (("trace" === n && G.delete(e), "failed" === l)) {
            let t = k.get(e)?.get(n);
            P(e, n, { status: "failed", truncated: t?.truncated ?? !1, count: t?.count ?? 0 });
            return;
        }
        if (null != o) {
            let t = g.get(e);
            null != t &&
                g.set(
                    e,
                    t.filter((t) => !o.snapshot.has(L(t.kind, t.id)) || o.touched.has(L(t.kind, t.id))),
                );
        }
        P(e, n, { status: "loaded", truncated: i, count: r });
    },
    VIBEGRATIONS_LOG_APPEND: function (t) {
        let { projectId: e, log: n } = t,
            l = n.seq;
        if (null != l) {
            let t = R.get(e);
            if (null != t && l <= t) return !1;
            R.set(e, l);
        }
        let r = { key: ++A, log: n },
            i = f.get(e),
            o = null == i ? [r] : i.concat(r);
        f.set(e, o.length > 500 ? o.slice(-500) : o);
    },
    VIBEGRATIONS_LOGS_SEEN: function (t) {
        let { projectId: e } = t,
            n = f.get(e),
            l = null == n || 0 === n.length ? 0 : n[n.length - 1].key;
        if ((h.get(e) ?? 0) >= l) return !1;
        h.set(e, l);
    },
    VIBEGRATIONS_TOOL_CALL_APPEND: function (t) {
        let { projectId: e, toolCall: n } = t;
        if ((V(e, "tool", n.id), y(e, n.entry_id, n.status))) return !1;
        let l = g.get(e) ?? S,
            r = v(l, "tool", n.id),
            i = -1 === r ? null : l[r],
            o = n.summary ?? i?.summary,
            u = n.fields ?? i?.fields,
            a = n.schema ?? i?.schema,
            s = n.detail_id ?? i?.detailId,
            _ = n.turn_id ?? i?.turnId,
            c = n.parent_id ?? i?.parentId,
            d = {
                kind: "tool",
                id: n.id,
                ...(null != _ ? { turnId: _ } : {}),
                ...(null != c ? { parentId: c } : {}),
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
        (C(e, n.entry_id, n.status), null != i) ? D(e, l, r, d) : N(e, l, d);
    },
    VIBEGRATIONS_MODEL_CALL_APPEND: function (t) {
        let { projectId: e, modelCall: n } = t;
        if ((V(e, "model", n.id), y(e, n.entry_id, n.status))) return !1;
        let l = g.get(e) ?? S,
            r = v(l, "model", n.id),
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
        (C(e, n.entry_id, n.status), null != i) ? D(e, l, r, o) : N(e, l, o);
    },
});
