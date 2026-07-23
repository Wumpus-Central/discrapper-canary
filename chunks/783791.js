n.d(t, { A: () => R, B: () => o });
var r = n(17928),
    l = n(228366);
let i = new Set(["preview_ready", "built", "error", "build_error", "healthcheck_failed"]);
function o(e) {
    return "" !== e.content || null != e.proposal || e.steps.some((e) => i.has(e.kind));
}
let s = new Map(),
    a = new Map(),
    c = new Map(),
    E = new Map(),
    u = [],
    S = 0;
function T(e, t, n) {
    return { id: `m${++S}`, role: e, content: t, steps: [], created_at: null != n ? Date.parse(n) : Date.now() };
}
function _(e) {
    let t = T(e.role, e.content, e.ts);
    return null != e.kind && (t.kind = e.kind), null != e.proposal && (t.proposal = e.proposal), t;
}
function p(e, t) {
    let n = s.get(e);
    if (null == n || 0 === n.length) return;
    let r = n[n.length - 1];
    "assistant" === r.role && s.set(e, [...n.slice(0, -1), t(r)]);
}
function A(e) {
    let t = s.get(e);
    if (null == t || 0 === t.length) return !1;
    let n = t[t.length - 1];
    return "assistant" === n.role && !o(n);
}
function d(e) {
    let t = c.get(e) ?? !1,
        n = A(e);
    t !== n && (c.set(e, n), n ? a.delete(e) : a.set(e, Date.now()));
}
function C(e) {
    let t = s.delete(e),
        n = a.delete(e),
        r = c.delete(e),
        l = E.delete(e);
    return t || n || r || l;
}
class I extends r.Ay.Store {
    getMessages(e) {
        return s.get(e) ?? u;
    }
    isThinking(e) {
        return A(e);
    }
    getFinishedAt(e) {
        return A(e) ? null : (a.get(e) ?? null);
    }
    getProjectUsage(e) {
        return E.get(e) ?? null;
    }
    isAnyThinking() {
        for (let e of s.keys()) if (this.isThinking(e)) return !0;
        return !1;
    }
}
let R = new I(l.h, {
    LOGOUT: function () {
        if (0 === s.size && 0 === a.size && 0 === c.size && 0 === E.size) return !1;
        s.clear(), a.clear(), c.clear(), E.clear();
    },
    VIBEGRATIONS_CHAT_HISTORY_SET: function (e) {
        let { projectId: t, entries: n } = e;
        s.set(t, n.map(_)), d(t);
    },
    VIBEGRATIONS_CHAT_MESSAGE_APPEND: function (e) {
        let { projectId: t, content: n } = e,
            r = s.get(t) ?? [];
        s.set(t, [...r, T("user", n), T("assistant", "")]), d(t);
    },
    VIBEGRATIONS_CHAT_STEP_APPEND: function (e) {
        let { projectId: t, step: n } = e;
        p(t, (e) => ({ ...e, steps: [...e.steps, n] })), d(t);
    },
    VIBEGRATIONS_CHAT_USAGE_SET: function (e) {
        let { projectId: t, project: n } = e;
        E.set(t, n);
    },
    VIBEGRATIONS_CHAT_TURN_PATCH: function (e) {
        let { projectId: t, patch: n } = e;
        p(t, (e) => ({ ...e, ...n })), d(t);
    },
    VIBEGRATIONS_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: n } = e;
        if ("closed" !== n && "failed" !== n) return !1;
        let r = s.get(t);
        if (null == r || !r.some((e) => "assistant" === e.role && !o(e))) return !1;
        s.set(
            t,
            r.map((e) =>
                "assistant" !== e.role || o(e)
                    ? e
                    : { ...e, steps: [...e.steps, { type: "step", kind: "error", message: "Connection lost" }] },
            ),
        ),
            d(t);
    },
    VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        if (!C(t)) return !1;
    },
    VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function (e) {
        let { projects: t } = e,
            n = new Set(t.map((e) => e.id)),
            r = new Set([...s.keys(), ...a.keys(), ...c.keys(), ...E.keys()]),
            l = !1;
        for (let e of r) !n.has(e) && C(e) && (l = !0);
        if (!l) return !1;
    },
});
