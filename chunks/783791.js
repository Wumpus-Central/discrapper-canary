n.d(t, { A: () => h, B: () => o });
var l = n(17928),
    r = n(228366);
let i = new Set(["preview_ready", "built", "error", "build_error", "healthcheck_failed"]);
function o(e) {
    return "" !== e.content || null != e.proposal || e.steps.some((e) => i.has(e.kind));
}
let a = new Map(),
    s = new Map(),
    u = new Map(),
    c = new Map(),
    E = [],
    T = 0;
function S(e, t, n) {
    return { id: `m${++T}`, role: e, content: t, steps: [], created_at: null != n ? Date.parse(n) : Date.now() };
}
function _(e) {
    let t = S(e.role, e.content, e.ts);
    return null != e.kind && (t.kind = e.kind), null != e.proposal && (t.proposal = e.proposal), t;
}
function p(e, t) {
    let n = a.get(e);
    if (null == n || 0 === n.length) return;
    let l = n[n.length - 1];
    "assistant" === l.role && a.set(e, [...n.slice(0, -1), t(l)]);
}
function d(e) {
    let t = a.get(e);
    if (null == t || 0 === t.length) return !1;
    let n = t[t.length - 1];
    return "assistant" === n.role && !o(n);
}
function A(e) {
    let t = u.get(e) ?? !1,
        n = d(e);
    t !== n && (u.set(e, n), n ? s.delete(e) : s.set(e, Date.now()));
}
function C(e) {
    let t = a.delete(e),
        n = s.delete(e),
        l = u.delete(e),
        r = c.delete(e);
    return t || n || l || r;
}
class I extends l.Ay.Store {
    getMessages(e) {
        return a.get(e) ?? E;
    }
    isThinking(e) {
        return d(e);
    }
    getFinishedAt(e) {
        return d(e) ? null : (s.get(e) ?? null);
    }
    getProjectUsage(e) {
        return c.get(e) ?? null;
    }
    isAnyThinking() {
        for (let e of a.keys()) if (this.isThinking(e)) return !0;
        return !1;
    }
}
let f = new I(r.h, {
        LOGOUT: function () {
            if (0 === a.size && 0 === s.size && 0 === u.size && 0 === c.size) return !1;
            a.clear(), s.clear(), u.clear(), c.clear();
        },
        VIBEGRATIONS_CHAT_HISTORY_SET: function (e) {
            let { projectId: t, entries: n } = e;
            a.set(t, n.map(_)), A(t);
        },
        VIBEGRATIONS_CHAT_MESSAGE_APPEND: function (e) {
            let { projectId: t, content: n } = e,
                l = a.get(t) ?? [];
            a.set(t, [...l, S("user", n), S("assistant", "")]), A(t);
        },
        VIBEGRATIONS_CHAT_STEP_APPEND: function (e) {
            let { projectId: t, step: n } = e;
            p(t, (e) => ({ ...e, steps: [...e.steps, n] })), A(t);
        },
        VIBEGRATIONS_CHAT_USAGE_SET: function (e) {
            let { projectId: t, project: n } = e;
            c.set(t, n);
        },
        VIBEGRATIONS_CHAT_TURN_PATCH: function (e) {
            let { projectId: t, patch: n } = e;
            p(t, (e) => ({ ...e, ...n })), A(t);
        },
        VIBEGRATIONS_CHAT_CONN_STATE: function (e) {
            let { projectId: t, connState: n } = e;
            if ("closed" !== n && "failed" !== n) return !1;
            let l = a.get(t);
            if (null == l || !l.some((e) => "assistant" === e.role && !o(e))) return !1;
            a.set(
                t,
                l.map((e) =>
                    "assistant" !== e.role || o(e)
                        ? e
                        : { ...e, steps: [...e.steps, { type: "step", kind: "error", message: "Connection lost" }] },
                ),
            ),
                A(t);
        },
        VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
            let { projectId: t } = e;
            if (!C(t)) return !1;
        },
        VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function (e) {
            let { projects: t } = e,
                n = new Set(t.map((e) => e.id)),
                l = new Set([...a.keys(), ...s.keys(), ...u.keys(), ...c.keys()]),
                r = !1;
            for (let e of l) !n.has(e) && C(e) && (r = !0);
            if (!r) return !1;
        },
    }),
    h = 21552 == n.j ? f : null;
