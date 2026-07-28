"use strict";
n.d(t, { A: () => S, B: () => s });
var i = n(17928),
    r = n(228366);
let a = new Set(["preview_ready", "built", "error", "build_error", "healthcheck_failed"]);
function s(e) {
    return "" !== e.content || null != e.proposal || e.steps.some((e) => a.has(e.kind));
}
let l = new Map(),
    o = new Map(),
    d = new Map(),
    c = new Map(),
    u = 0,
    _ = null,
    E = [],
    A = 0;
function h(e, t, n) {
    return { id: `m${++A}`, role: e, content: t, steps: [], created_at: null != n ? Date.parse(n) : Date.now() };
}
function I(e) {
    let t = h(e.role, e.content, e.ts);
    return null != e.kind && (t.kind = e.kind), null != e.proposal && (t.proposal = e.proposal), t;
}
function f(e, t) {
    let n = l.get(e);
    if (null == n || 0 === n.length) return;
    let i = n[n.length - 1];
    "assistant" === i.role && l.set(e, [...n.slice(0, -1), t(i)]);
}
function p(e) {
    let t = l.get(e);
    if (null == t || 0 === t.length) return !1;
    let n = t[t.length - 1];
    return "assistant" === n.role && !s(n);
}
function T(e) {
    let t = d.get(e) ?? !1,
        n = p(e);
    t !== n && (d.set(e, n), n ? o.delete(e) : o.set(e, Date.now()));
}
function m(e) {
    let t = l.delete(e),
        n = o.delete(e),
        i = d.delete(e),
        r = c.delete(e);
    return t || n || i || r;
}
class g extends i.Ay.Store {
    getMessages(e) {
        return l.get(e) ?? E;
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
    getSidebarWidth() {
        return u;
    }
    getBuilderPreviewApplicationId() {
        return _;
    }
    isAnyThinking() {
        for (let e of l.keys()) if (this.isThinking(e)) return !0;
        return !1;
    }
}
let S = new g(r.h, {
    LOGOUT: function () {
        if (0 === l.size && 0 === o.size && 0 === d.size && 0 === c.size && 0 === u && null == _) return !1;
        l.clear(), o.clear(), d.clear(), c.clear(), (u = 0), (_ = null);
    },
    VIBEGRATIONS_CHAT_HISTORY_SET: function (e) {
        let { projectId: t, entries: n } = e;
        l.set(t, n.map(I)), T(t);
    },
    VIBEGRATIONS_CHAT_MESSAGE_APPEND: function (e) {
        let { projectId: t, content: n } = e,
            i = l.get(t) ?? [];
        l.set(t, [...i, h("user", n), h("assistant", "")]), T(t);
    },
    VIBEGRATIONS_CHAT_STEP_APPEND: function (e) {
        let { projectId: t, step: n } = e;
        f(t, (e) => ({ ...e, steps: [...e.steps, n] })), T(t);
    },
    VIBEGRATIONS_CHAT_USAGE_SET: function (e) {
        let { projectId: t, project: n } = e;
        c.set(t, n);
    },
    VIBEGRATIONS_CHAT_SIDEBAR_WIDTH_SET: function (e) {
        let { width: t } = e;
        if (u === t) return !1;
        u = t;
    },
    VIBEGRATIONS_BUILDER_PREVIEW_APPLICATION_SET: function (e) {
        let { applicationId: t } = e;
        if (_ === t) return !1;
        _ = t;
    },
    VIBEGRATIONS_CHAT_TURN_PATCH: function (e) {
        let { projectId: t, patch: n } = e;
        f(t, (e) => ({ ...e, ...n })), T(t);
    },
    VIBEGRATIONS_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: n } = e;
        if ("closed" !== n && "failed" !== n) return !1;
        let i = l.get(t);
        if (null == i || !i.some((e) => "assistant" === e.role && !s(e))) return !1;
        l.set(
            t,
            i.map((e) =>
                "assistant" !== e.role || s(e)
                    ? e
                    : { ...e, steps: [...e.steps, { type: "step", kind: "error", message: "Connection lost" }] },
            ),
        ),
            T(t);
    },
    VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        if (!m(t)) return !1;
    },
    VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function (e) {
        let { projects: t } = e,
            n = new Set(t.map((e) => e.id)),
            i = new Set([...l.keys(), ...o.keys(), ...d.keys(), ...c.keys()]),
            r = !1;
        for (let e of i) !n.has(e) && m(e) && (r = !0);
        if (!r) return !1;
    },
});
