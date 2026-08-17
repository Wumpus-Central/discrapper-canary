"use strict";
n.d(t, { A: () => V, B: () => S }), n(667532);
var i = n(17928),
    r = n(228366),
    a = n(264686),
    s = n(695515),
    l = n(976860),
    o = n(400492),
    d = n(885386),
    c = n(803224),
    u = n(309010),
    _ = n(967198),
    E = n(461213),
    A = n(148555),
    h = n(972786),
    I = n(652215),
    f = n(746080),
    p = n(818085),
    T = n(375708);
let m = "bit_message1",
    g = new Set(["reply", "plan_proposed", "terminal_error"]);
function S(e) {
    return !0 === e.finished || "" !== e.content || null != e.proposal || e.steps.some((e) => g.has(e.kind));
}
let N = new Map(),
    C = new Map(),
    R = new Map(),
    O = [],
    L = new Map(),
    D = new Map(),
    y = 0,
    v = null,
    b = [],
    M = 0;
function P(e, t) {
    let {
            ts: n,
            id: i,
            userId: r,
            attachments: a,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        s = i ?? `m${++M}`;
    return {
        id: s,
        render_id: s,
        role: e,
        content: t,
        ...(null != r ? { user_id: r } : {}),
        steps: [],
        created_at: null != n ? Date.parse(n) : Date.now(),
        attachments: a,
    };
}
function U(e) {
    let t = P(e.role, e.content, { ts: e.ts, id: e.id, userId: e.user_id, attachments: e.attachments });
    return (
        null != e.kind && (t.kind = e.kind),
        null != e.proposal && (t.proposal = e.proposal),
        null != e.ideas && e.ideas.length > 0 && (t.ideas = e.ideas),
        null != e.todos && e.todos.length > 0 && (t.todos = e.todos),
        t
    );
}
function w(e, t) {
    let n = N.get(e);
    if (null == n || 0 === n.length) return;
    let i = n[n.length - 1];
    "assistant" === i.role && N.set(e, [...n.slice(0, -1), t(i)]);
}
function G(e) {
    let t = N.get(e);
    if (null == t || 0 === t.length) return !1;
    let n = t[t.length - 1];
    return "assistant" === n.role && !S(n);
}
function x(e) {
    let t = R.get(e) ?? !1,
        i = G(e);
    if (t === i) return;
    R.set(e, i);
    let r = O.indexOf(e);
    if ((-1 !== r && O.splice(r, 1), O.unshift(e), i)) C.delete(e);
    else {
        let t, i;
        ((t = N.get(e)),
        (i = t?.[t.length - 1]),
        i?.role === "assistant" &&
            ("" !== i.content.trim() ||
                null != i.proposal ||
                i.steps.some((e) => g.has(e.kind) && "terminal_error" !== e.kind)))
            ? C.set(e, Date.now())
            : C.delete(e),
            !(function (e) {
                let t = h.A.getProject(e);
                if (
                    null == t ||
                    c.A.getDesktopType() === I.nRU.NEVER ||
                    E.A.getStatus() === I.clD.DND ||
                    d.NO.getSetting() ||
                    s.A.isCurrentUserInRestrictedHours()
                )
                    return;
                let i = !c.A.isSoundDisabled("message1"),
                    r = _.A.getGuildId(),
                    g = null != r && h.A.getSelectedProjectId(r) === e ? r : null,
                    S = null != g && u.Ay.getChannelId() === f.VV.VIBEGRATIONS && A.A.isWindowFocused(),
                    C = g ?? t.guild_id ?? t.preview_guild_id,
                    R = (function (e) {
                        let t = N.get(e);
                        if (null == t || 0 === t.length) return null;
                        let n = t[t.length - 1];
                        if ("assistant" !== n.role) return null;
                        if ("" !== n.content.trim()) return n.content;
                        if (null != n.proposal) return n.proposal.summary;
                        for (let e = n.steps.length - 1; e >= 0; e--) {
                            let t = n.steps[e];
                            if (
                                ("error" === t.kind ||
                                    "terminal_error" === t.kind ||
                                    "build_error" === t.kind ||
                                    "healthcheck_failed" === t.kind) &&
                                null != t.message &&
                                "" !== t.message
                            )
                                return t.message;
                            if ("preview_ready" === t.kind) return T.intl.string(p.default["78YNh7"]);
                        }
                        return null;
                    })(e);
                if (null == R) return;
                if (S) {
                    i && (0, o.Ak)(m, 0.4);
                    return;
                }
                let O = null == C ? null : I.BVt.CHANNEL(C, f.VV.VIBEGRATIONS, e);
                a.default.showNotification(
                    n(608598),
                    t.name,
                    R,
                    { notif_type: "VIBEGRATIONS_ASSISTANT_FINISHED" },
                    {
                        tag: `vibegrations-${e}`,
                        sound: i ? m : void 0,
                        volume: 0.4,
                        fallbackDeepLink: null == O ? void 0 : A.A.createNotificationDeepLink(O),
                        onClick: null == O ? void 0 : () => (0, l.pX)(O),
                        isUserAvatar: !1,
                    },
                );
            })(e);
    }
}
function k(e) {
    let t = N.delete(e),
        n = C.delete(e),
        i = R.delete(e),
        r = L.delete(e),
        a = D.delete(e),
        s = O.indexOf(e);
    return -1 !== s && O.splice(s, 1), t || n || i || r || a || -1 !== s;
}
class F extends i.Ay.Store {
    initialize() {
        this.waitFor(s.A, c.A, u.Ay, _.A, E.A, h.A);
    }
    getMessages(e) {
        return N.get(e) ?? b;
    }
    isThinking(e) {
        return G(e);
    }
    getFinishedAt(e) {
        return G(e) ? null : (C.get(e) ?? null);
    }
    getProjectUsage(e) {
        return L.get(e) ?? null;
    }
    getThinkingActivity(e) {
        return D.get(e) ?? null;
    }
    getSidebarWidth() {
        return y;
    }
    getBuilderPreviewApplicationId() {
        return v;
    }
    getActivityOrderedProjectIds() {
        return O.slice();
    }
    isAnyThinking() {
        for (let e of N.keys()) if (this.isThinking(e)) return !0;
        return !1;
    }
}
let V = new F(r.h, {
    LOGOUT: function () {
        if (
            0 === N.size &&
            0 === C.size &&
            0 === R.size &&
            0 === L.size &&
            0 === D.size &&
            0 === O.length &&
            0 === y &&
            null == v
        )
            return !1;
        N.clear(), C.clear(), R.clear(), L.clear(), D.clear(), (O.length = 0), (y = 0), (v = null);
    },
    VIBEGRATIONS_CHAT_HISTORY_SET: function (e) {
        let { projectId: t, entries: n } = e;
        D.delete(t), N.set(t, n.map(U)), x(t);
    },
    VIBEGRATIONS_CHAT_MESSAGE_APPEND: function (e) {
        let { projectId: t, content: n, id: i, optimisticId: r, userId: a, timestamp: s, attachments: l } = e,
            o = N.get(t) ?? [];
        if (o.some((e) => e.id === i)) return !1;
        let d = null == r ? -1 : o.findIndex((e) => e.id === r),
            c = d < 0 ? void 0 : o[d].render_id,
            u = d < 0 ? o : [...o.slice(0, d), ...o.slice(d + 1)],
            _ = P("user", n, { ts: s, id: i, userId: a, attachments: l });
        null != c && (_.render_id = c);
        let E = u[u.length - 1];
        E?.role !== "assistant" || S(E) ? N.set(t, [...u, _, P("assistant", "")]) : N.set(t, [...u.slice(0, -1), _, E]),
            x(t);
    },
    VIBEGRATIONS_CHAT_STEP_APPEND: function (e) {
        let { projectId: t, step: n } = e;
        w(t, (e) => ({ ...e, steps: [...e.steps, n] })), x(t);
    },
    VIBEGRATIONS_CHAT_TURN_FINISHED: function (e) {
        let { projectId: t, summary: n } = e;
        D.delete(t), w(t, (e) => ({ ...e, finished: !0, content: "" !== e.content ? e.content : (n ?? "") })), x(t);
    },
    VIBEGRATIONS_CHAT_THINKING_SET: function (e) {
        let { projectId: t, activity: n } = e;
        if (null == n) return !!D.delete(t) && void 0;
        let i = D.get(t);
        if (null != i && n.session === i.session && n.seq <= i.seq) return !1;
        D.set(t, n);
    },
    VIBEGRATIONS_CHAT_USAGE_SET: function (e) {
        let { projectId: t, project: n } = e;
        L.set(t, n);
    },
    VIBEGRATIONS_CHAT_SIDEBAR_WIDTH_SET: function (e) {
        let { width: t } = e;
        if (y === t) return !1;
        y = t;
    },
    VIBEGRATIONS_BUILDER_PREVIEW_APPLICATION_SET: function (e) {
        let { applicationId: t } = e;
        if (v === t) return !1;
        v = t;
    },
    VIBEGRATIONS_CHAT_TURN_PATCH: function (e) {
        let { projectId: t, patch: n } = e;
        w(t, (e) => ({ ...e, ...n })), x(t);
    },
    VIBEGRATIONS_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: n } = e;
        if ("closed" !== n && "failed" !== n) return !1;
        let i = D.delete(t),
            r = N.get(t);
        if (null == r || !r.some((e) => "assistant" === e.role && !S(e))) return !!i && void 0;
        N.set(
            t,
            r.map((e) =>
                "assistant" !== e.role || S(e)
                    ? e
                    : {
                          ...e,
                          steps: [
                              ...e.steps,
                              { type: "step", kind: "terminal_error", message: T.intl.string(p.default["wjWm+/"]) },
                          ],
                      },
            ),
        ),
            x(t);
    },
    VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        if (!k(t)) return !1;
    },
    VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function (e) {
        let { projects: t } = e,
            n = new Set(t.map((e) => e.id)),
            i = new Set([...N.keys(), ...C.keys(), ...R.keys(), ...L.keys()]),
            r = !1;
        for (let e of i) !n.has(e) && k(e) && (r = !0);
        if (!r) return !1;
    },
});
