(n.d(t, { Ay: () => F, H_: () => d, PV: () => s, jf: () => a }), n(321073));
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
    _ = new Set(),
    p = new Set(),
    g = new Map(),
    w = new Set(),
    E = null,
    T = new Set(),
    I = new Map(),
    m = [],
    A = new Map(),
    S = 0,
    R = new Map(),
    O = new Map(),
    y = [],
    v = new Map(),
    b = new Map();
function C(e, t, n) {
    return null != t && b.get(e)?.get(t) === n;
}
function N(e, t, n) {
    if (null == t) return;
    let i = b.get(e);
    for (null == i && ((i = new Map()), b.set(e, i)), i.set(t, n); i.size > 800;) {
        let e = i.keys().next();
        if (!0 === e.done) break;
        i.delete(e.value);
    }
}
let P = { status: "idle", truncated: !1, count: 0 },
    k = new Map();
function M(e, t, n) {
    let i = k.get(e);
    (null == i && ((i = new Map()), k.set(e, i)), i.set(t, n));
}
function B(e, t, n) {
    let i = t.concat(n);
    v.set(e, i.length > 400 ? i.slice(-400) : i);
}
class L extends i.Ay.Store {
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
        return w.has(e);
    }
    getSelectedProjectId(e) {
        return g.get(e) ?? null;
    }
    getLogs(e) {
        return A.get(e) ?? m;
    }
    getUnreadLogErrorCount(e) {
        let t = A.get(e);
        if (null == t) return 0;
        let n = O.get(e) ?? 0,
            i = 0;
        for (let e of t) e.key > n && "error" === e.log.level && !0 !== e.log.historical && (i += 1);
        return i;
    }
    getTrace(e) {
        return v.get(e) ?? y;
    }
    getHistoryState(e, t) {
        return k.get(e)?.get(t) ?? P;
    }
    getProjectsFetchState() {
        return E;
    }
    hasFetchedGuildProjects(e) {
        return T.has(e);
    }
    getGuildProjectsFetchState(e) {
        return I.get(e) ?? "unattempted";
    }
    isVibegrationsProjectApplication(e) {
        return null != e && null != this.findProjectByApplicationId(e);
    }
}
function G(e) {
    let { project: t } = e;
    c.set(t.id, t);
}
let D = new Map();
function V(e, t) {
    return `${e}:${t}`;
}
function H(e, t, n) {
    D.get(e)?.touched.add(V(t, n));
}
function U(e, t, n) {
    return e.findIndex((e) => e.kind === t && e.id === n);
}
function x(e, t, n, i) {
    let r = t.slice();
    ((r[n] = i), v.set(e, r));
}
let F = new L(r.h, {
    LOGOUT: function () {
        if (
            0 === c.size &&
            0 === f.size &&
            0 === h.size &&
            0 === _.size &&
            0 === p.size &&
            0 === g.size &&
            0 === w.size &&
            0 === A.size &&
            0 === T.size &&
            0 === v.size &&
            0 === k.size &&
            0 === b.size &&
            null == E
        )
            return !1;
        (c.clear(),
            f.clear(),
            h.clear(),
            _.clear(),
            p.clear(),
            g.clear(),
            w.clear(),
            A.clear(),
            T.clear(),
            I.clear(),
            R.clear(),
            O.clear(),
            v.clear(),
            k.clear(),
            b.clear(),
            (E = null),
            D.clear());
    },
    VIBEGRATIONS_PROJECTS_FETCH_START: function (e) {
        let { guildId: t } = e;
        (null != t && I.set(t, "loading"), (E = { type: "loading" }));
    },
    VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function (e) {
        let { projects: t, guildId: n } = e,
            i = new Set(t.map((e) => e.id));
        for (let [e, t] of c) !i.has(e) && (s(t) || (null != n && t.guild_id === n)) && c.delete(e);
        for (let e of t) c.set(e.id, e);
        for (let e of (null != n && (T.add(n), I.set(n, "success")), f.keys())) c.has(e) || f.delete(e);
        for (let e of h.keys()) c.has(e) || h.delete(e);
        for (let [e, t] of g) c.has(t) || g.delete(e);
        E = { type: "success", fetchedAt: Date.now() };
    },
    VIBEGRATIONS_PROJECTS_FETCH_FAIL: function (e) {
        let { guildId: t } = e;
        (null != t && I.set(t, "error"), (E = { type: "error", fetchedAt: Date.now() }));
    },
    VIBEGRATIONS_PROJECT_CREATE_SUCCESS: G,
    VIBEGRATIONS_PROJECT_UPDATE_SUCCESS: G,
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
        w.add(t);
    },
    VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        for (let [e, n] of (w.delete(t),
        c.delete(t),
        f.delete(t),
        h.delete(t),
        _.delete(t),
        p.delete(t),
        A.delete(t),
        R.delete(t),
        O.delete(t),
        v.delete(t),
        k.delete(t),
        b.delete(t),
        g))
            n === t && g.delete(e);
    },
    VIBEGRATIONS_PROJECT_DELETE_FAIL: function (e) {
        let { projectId: t } = e;
        return w.delete(t);
    },
    VIBEGRATIONS_PROJECT_SELECT: function (e) {
        let { guildId: t, projectId: n } = e;
        if ((g.get(t) ?? null) === n) return !1;
        null == n ? g.delete(t) : g.set(t, n);
    },
    VIBEGRATIONS_TRACE_REPLAY_STARTING: function (e) {
        let { projectId: t } = e;
        D.set(t, { snapshot: new Set((v.get(t) ?? y).map((e) => V(e.kind, e.id))), touched: new Set() });
    },
    VIBEGRATIONS_HISTORY_LOAD_SETTLE: function (e) {
        let { projectId: t, scope: n, status: i, count: r, truncated: l } = e,
            o = "trace" === n ? D.get(t) : void 0;
        if (("trace" === n && D.delete(t), "failed" === i)) {
            let e = k.get(t)?.get(n);
            M(t, n, { status: "failed", truncated: e?.truncated ?? !1, count: e?.count ?? 0 });
            return;
        }
        if (null != o) {
            let e = v.get(t);
            null != e &&
                v.set(
                    t,
                    e.filter((e) => !o.snapshot.has(V(e.kind, e.id)) || o.touched.has(V(e.kind, e.id))),
                );
        }
        M(t, n, { status: "loaded", truncated: l, count: r });
    },
    VIBEGRATIONS_LOG_APPEND: function (e) {
        let { projectId: t, log: n } = e,
            i = n.seq;
        if (null != i) {
            let e = R.get(t);
            if (null != e && i <= e) return !1;
            R.set(t, i);
        }
        let r = { key: ++S, log: n },
            l = A.get(t),
            o = null == l ? [r] : l.concat(r);
        A.set(t, o.length > 500 ? o.slice(-500) : o);
    },
    VIBEGRATIONS_LOGS_SEEN: function (e) {
        let { projectId: t } = e,
            n = A.get(t),
            i = null == n || 0 === n.length ? 0 : n[n.length - 1].key;
        if ((O.get(t) ?? 0) >= i) return !1;
        O.set(t, i);
    },
    VIBEGRATIONS_TOOL_CALL_APPEND: function (e) {
        let { projectId: t, toolCall: n } = e;
        if ((H(t, "tool", n.id), C(t, n.entry_id, n.status))) return !1;
        let i = v.get(t) ?? y,
            r = U(i, "tool", n.id),
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
        (N(t, n.entry_id, n.status), null != l) ? x(t, i, r, f) : B(t, i, f);
    },
    VIBEGRATIONS_MODEL_CALL_APPEND: function (e) {
        let { projectId: t, modelCall: n } = e;
        if ((H(t, "model", n.id), C(t, n.entry_id, n.status))) return !1;
        let i = v.get(t) ?? y,
            r = U(i, "model", n.id),
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
        (N(t, n.entry_id, n.status), null != l) ? x(t, i, r, o) : B(t, i, o);
    },
});
