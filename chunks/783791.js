n.d(t, { A: () => p, B: () => s });
var l = n(17928),
    r = n(228366);
let i = new Set(["preview_ready", "built", "error", "build_error", "healthcheck_failed"]);
function s(e) {
    return "" !== e.content || null != e.proposal || e.steps.some((e) => i.has(e.kind));
}
let o = new Map(),
    a = new Map(),
    u = new Map(),
    c = new Map(),
    T = 0,
    d = null,
    E = [],
    I = 0;
function A(e, t, n) {
    return { id: `m${++I}`, role: e, content: t, steps: [], created_at: null != n ? Date.parse(n) : Date.now() };
}
function _(e) {
    let t = A(e.role, e.content, e.ts);
    return null != e.kind && (t.kind = e.kind), null != e.proposal && (t.proposal = e.proposal), t;
}
function f(e, t) {
    let n = o.get(e);
    if (null == n || 0 === n.length) return;
    let l = n[n.length - 1];
    "assistant" === l.role && o.set(e, [...n.slice(0, -1), t(l)]);
}
function h(e) {
    let t = o.get(e);
    if (null == t || 0 === t.length) return !1;
    let n = t[t.length - 1];
    return "assistant" === n.role && !s(n);
}
function N(e) {
    let t = u.get(e) ?? !1,
        n = h(e);
    t !== n && (u.set(e, n), n ? a.delete(e) : a.set(e, Date.now()));
}
function C(e) {
    let t = o.delete(e),
        n = a.delete(e),
        l = u.delete(e),
        r = c.delete(e);
    return t || n || l || r;
}
class S extends l.Ay.Store {
    getMessages(e) {
        return o.get(e) ?? E;
    }
    isThinking(e) {
        return h(e);
    }
    getFinishedAt(e) {
        return h(e) ? null : (a.get(e) ?? null);
    }
    getProjectUsage(e) {
        return c.get(e) ?? null;
    }
    getSidebarWidth() {
        return T;
    }
    getBuilderPreviewApplicationId() {
        return d;
    }
    isAnyThinking() {
        for (let e of o.keys()) if (this.isThinking(e)) return !0;
        return !1;
    }
}
let g = new S(r.h, {
        LOGOUT: function () {
            if (0 === o.size && 0 === a.size && 0 === u.size && 0 === c.size && 0 === T && null == d) return !1;
            o.clear(), a.clear(), u.clear(), c.clear(), (T = 0), (d = null);
        },
        VIBEGRATIONS_CHAT_HISTORY_SET: function (e) {
            let { projectId: t, entries: n } = e;
            o.set(t, n.map(_)), N(t);
        },
        VIBEGRATIONS_CHAT_MESSAGE_APPEND: function (e) {
            let { projectId: t, content: n } = e,
                l = o.get(t) ?? [];
            o.set(t, [...l, A("user", n), A("assistant", "")]), N(t);
        },
        VIBEGRATIONS_CHAT_STEP_APPEND: function (e) {
            let { projectId: t, step: n } = e;
            f(t, (e) => ({ ...e, steps: [...e.steps, n] })), N(t);
        },
        VIBEGRATIONS_CHAT_USAGE_SET: function (e) {
            let { projectId: t, project: n } = e;
            c.set(t, n);
        },
        VIBEGRATIONS_CHAT_SIDEBAR_WIDTH_SET: function (e) {
            let { width: t } = e;
            if (T === t) return !1;
            T = t;
        },
        VIBEGRATIONS_BUILDER_PREVIEW_APPLICATION_SET: function (e) {
            let { applicationId: t } = e;
            if (d === t) return !1;
            d = t;
        },
        VIBEGRATIONS_CHAT_TURN_PATCH: function (e) {
            let { projectId: t, patch: n } = e;
            f(t, (e) => ({ ...e, ...n })), N(t);
        },
        VIBEGRATIONS_CHAT_CONN_STATE: function (e) {
            let { projectId: t, connState: n } = e;
            if ("closed" !== n && "failed" !== n) return !1;
            let l = o.get(t);
            if (null == l || !l.some((e) => "assistant" === e.role && !s(e))) return !1;
            o.set(
                t,
                l.map((e) =>
                    "assistant" !== e.role || s(e)
                        ? e
                        : { ...e, steps: [...e.steps, { type: "step", kind: "error", message: "Connection lost" }] },
                ),
            ),
                N(t);
        },
        VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
            let { projectId: t } = e;
            if (!C(t)) return !1;
        },
        VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function (e) {
            let { projects: t } = e,
                n = new Set(t.map((e) => e.id)),
                l = new Set([...o.keys(), ...a.keys(), ...u.keys(), ...c.keys()]),
                r = !1;
            for (let e of l) !n.has(e) && C(e) && (r = !0);
            if (!r) return !1;
        },
    }),
    p = /^(14256|21552)$/.test(n.j) ? g : null;
