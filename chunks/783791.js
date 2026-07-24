n.d(t, { A: () => h, B: () => s });
var l = n(17928),
    i = n(228366);
let r = new Set(["preview_ready", "built", "error", "build_error", "healthcheck_failed"]);
function s(e) {
    return "" !== e.content || null != e.proposal || e.steps.some((e) => r.has(e.kind));
}
let a = new Map(),
    o = new Map(),
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
function d(e, t) {
    let n = a.get(e);
    if (null == n || 0 === n.length) return;
    let l = n[n.length - 1];
    "assistant" === l.role && a.set(e, [...n.slice(0, -1), t(l)]);
}
function p(e) {
    let t = a.get(e);
    if (null == t || 0 === t.length) return !1;
    let n = t[t.length - 1];
    return "assistant" === n.role && !s(n);
}
function A(e) {
    let t = u.get(e) ?? !1,
        n = p(e);
    t !== n && (u.set(e, n), n ? o.delete(e) : o.set(e, Date.now()));
}
function f(e) {
    let t = a.delete(e),
        n = o.delete(e),
        l = u.delete(e),
        i = c.delete(e);
    return t || n || l || i;
}
class C extends l.Ay.Store {
    getMessages(e) {
        return a.get(e) ?? E;
    }
    isThinking(e) {
        return p(e);
    }
    getFinishedAt(e) {
        return p(e) ? null : (o.get(e) ?? null);
    }
    getProjectUsage(e) {
        return c.get(e) ?? null;
    }
    isAnyThinking() {
        for (let e of a.keys()) if (this.isThinking(e)) return !0;
        return !1;
    }
}
let I = new C(i.h, {
        LOGOUT: function () {
            if (0 === a.size && 0 === o.size && 0 === u.size && 0 === c.size) return !1;
            a.clear(), o.clear(), u.clear(), c.clear();
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
            d(t, (e) => ({ ...e, steps: [...e.steps, n] })), A(t);
        },
        VIBEGRATIONS_CHAT_USAGE_SET: function (e) {
            let { projectId: t, project: n } = e;
            c.set(t, n);
        },
        VIBEGRATIONS_CHAT_TURN_PATCH: function (e) {
            let { projectId: t, patch: n } = e;
            d(t, (e) => ({ ...e, ...n })), A(t);
        },
        VIBEGRATIONS_CHAT_CONN_STATE: function (e) {
            let { projectId: t, connState: n } = e;
            if ("closed" !== n && "failed" !== n) return !1;
            let l = a.get(t);
            if (null == l || !l.some((e) => "assistant" === e.role && !s(e))) return !1;
            a.set(
                t,
                l.map((e) =>
                    "assistant" !== e.role || s(e)
                        ? e
                        : { ...e, steps: [...e.steps, { type: "step", kind: "error", message: "Connection lost" }] },
                ),
            ),
                A(t);
        },
        VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
            let { projectId: t } = e;
            if (!f(t)) return !1;
        },
        VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function (e) {
            let { projects: t } = e,
                n = new Set(t.map((e) => e.id)),
                l = new Set([...a.keys(), ...o.keys(), ...u.keys(), ...c.keys()]),
                i = !1;
            for (let e of l) !n.has(e) && f(e) && (i = !0);
            if (!i) return !1;
        },
    }),
    h = 21552 == n.j ? I : null;
