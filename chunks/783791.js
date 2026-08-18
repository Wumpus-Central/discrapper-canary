"use strict";
n.d(t, { A: () => H, B: () => S }), n(667532), n(321073);
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
    return (
        !0 === e.finished ||
        !0 === e.continued ||
        "" !== e.content ||
        null != e.proposal ||
        e.steps.some((e) => g.has(e.kind))
    );
}
let N = new Map(),
    C = new Map(),
    O = new Map(),
    R = [],
    L = new Map(),
    y = new Map(),
    D = new Set(),
    v = 0,
    b = [],
    M = 0;
function P(e, t) {
    let {
            ts: n,
            id: i,
            userId: r,
            attachments: a,
            turnId: s,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        l = i ?? `m${++M}`;
    return {
        id: l,
        render_id: l,
        role: e,
        content: t,
        ...(null != r ? { user_id: r } : {}),
        ...(null != s ? { turn_id: s } : {}),
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
        null == e.events && null != e.todos && e.todos.length > 0 && (t.todos = e.todos),
        null != e.events &&
            (t.steps = e.events.map((e) =>
                "announcement" === e.type
                    ? { type: "step", kind: "announcement", message: e.message }
                    : { type: "step", kind: "todos", items: e.items },
            )),
        null != e.secret_request &&
            (e.secret_request.fields.length > 0 || null != e.secret_request.connection) &&
            (t.secretRequest = e.secret_request),
        t
    );
}
function w(e, t) {
    if (null == t) return -1;
    for (let n = e.length - 1; n >= 0; n--) if (e[n].turn_id === t) return n;
    return -1;
}
function G(e, t, n) {
    let i = N.get(e);
    if (null == i) return;
    let r = (function (e, t) {
        let n = w(e, t);
        if (-1 !== n) return n;
        for (let t = e.length - 1; t >= 0; t--) {
            let n = e[t];
            if (!("assistant" !== n.role || S(n)) && null == n.turn_id) return t;
        }
        return -1;
    })(i, t);
    if (-1 === r) return void N.set(e, [...i, n(P("assistant", "", null != t ? { turnId: t } : {}))]);
    let a = i[r],
        s = null != t && null == a.turn_id ? { ...a, turn_id: t } : a;
    N.set(e, [...i.slice(0, r), n(s), ...i.slice(r + 1)]);
}
function x(e) {
    let t = N.get(e);
    return null != t && t.some((e) => "assistant" === e.role && !S(e));
}
function k(e) {
    let t = N.get(e);
    if (null == t) return null;
    for (let e = t.length - 1; e >= 0; e--) if ("assistant" === t[e].role) return t[e];
    return null;
}
function F(e) {
    let t = O.get(e) ?? !1,
        i = x(e);
    if (t === i) return;
    O.set(e, i);
    let r = R.indexOf(e);
    if ((-1 !== r && R.splice(r, 1), R.unshift(e), i)) C.delete(e);
    else {
        let t;
        null != (t = k(e)) &&
        ("" !== t.content.trim() ||
            null != t.proposal ||
            t.steps.some((e) => g.has(e.kind) && "terminal_error" !== e.kind))
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
                    N = g ?? t.guild_id ?? t.preview_guild_id,
                    C = (function (e) {
                        let t = k(e);
                        if (null == t) return null;
                        if ("" !== t.content.trim()) return t.content;
                        if (null != t.proposal) return t.proposal.summary;
                        for (let e = t.steps.length - 1; e >= 0; e--) {
                            let n = t.steps[e];
                            if (
                                ("error" === n.kind ||
                                    "terminal_error" === n.kind ||
                                    "build_error" === n.kind ||
                                    "healthcheck_failed" === n.kind) &&
                                null != n.message &&
                                "" !== n.message
                            )
                                return n.message;
                            if ("preview_ready" === n.kind) return T.intl.string(p.default["78YNh7"]);
                        }
                        return null;
                    })(e);
                if (null == C) return;
                if (S) {
                    i && (0, o.Ak)(m, 0.4);
                    return;
                }
                let O = null == N ? null : I.BVt.CHANNEL(N, f.VV.VIBEGRATIONS, e);
                a.default.showNotification(
                    n(608598),
                    t.name,
                    C,
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
function V(e) {
    let t = N.delete(e),
        n = C.delete(e),
        i = O.delete(e),
        r = L.delete(e),
        a = y.delete(e),
        s = D.delete(e),
        l = R.indexOf(e);
    return -1 !== l && R.splice(l, 1), t || n || i || r || a || s || -1 !== l;
}
class B extends i.Ay.Store {
    initialize() {
        this.waitFor(s.A, c.A, u.Ay, _.A, E.A, h.A);
    }
    getMessages(e) {
        return N.get(e) ?? b;
    }
    isThinking(e) {
        return x(e);
    }
    getFinishedAt(e) {
        return x(e) ? null : (C.get(e) ?? null);
    }
    getProjectUsage(e) {
        return L.get(e) ?? null;
    }
    getThinkingActivity(e) {
        return y.get(e) ?? null;
    }
    isCompacting(e) {
        return D.has(e);
    }
    getSidebarWidth() {
        return v;
    }
    getActivityOrderedProjectIds() {
        return R.slice();
    }
    isAnyThinking() {
        for (let e of N.keys()) if (this.isThinking(e)) return !0;
        return !1;
    }
}
let H = new B(r.h, {
    LOGOUT: function () {
        if (
            0 === N.size &&
            0 === C.size &&
            0 === O.size &&
            0 === L.size &&
            0 === y.size &&
            0 === D.size &&
            0 === R.length &&
            0 === v
        )
            return !1;
        N.clear(), C.clear(), O.clear(), L.clear(), y.clear(), D.clear(), (R.length = 0), (v = 0);
    },
    VIBEGRATIONS_CHAT_HISTORY_SET: function (e) {
        let { projectId: t, entries: n } = e;
        y.delete(t), D.delete(t), N.set(t, n.map(U)), F(t);
    },
    VIBEGRATIONS_CHAT_MESSAGE_APPEND: function (e) {
        let { projectId: t, content: n, id: i, optimisticId: r, userId: a, timestamp: s, attachments: l } = e,
            o = N.get(t) ?? [];
        if (o.some((e) => e.id === i)) return !1;
        let d = P("user", n, { ts: s, id: i, userId: a, attachments: l }),
            c = null == r ? -1 : o.findIndex((e) => e.id === r);
        if (-1 !== c) {
            (d.render_id = o[c].render_id), N.set(t, [...o.slice(0, c), d, ...o.slice(c + 1)]), F(t);
            return;
        }
        let u = [...o, d];
        u.some((e) => "assistant" === e.role && !S(e)) || u.push(P("assistant", "")), N.set(t, u), F(t);
    },
    VIBEGRATIONS_CHAT_MESSAGE_DISPOSITION: function (e) {
        let { projectId: t, id: n, activeTurnId: i, disposition: r } = e,
            a = N.get(t);
        if (null == a) return !1;
        let s = a.findIndex((e) => e.id === n);
        if (-1 === s) return !1;
        let l = a[s].disposition === r ? a : [...a.slice(0, s), { ...a[s], disposition: r }, ...a.slice(s + 1)],
            o = "steered" === r ? w(l, i) : -1;
        if (-1 === o || o > s) return l !== a && void N.set(t, l);
        N.set(t, [...l.slice(0, o), { ...l[o], continued: !0 }, ...l.slice(o + 1), P("assistant", "", { turnId: i })]),
            F(t);
    },
    VIBEGRATIONS_CHAT_STEP_APPEND: function (e) {
        let { projectId: t, step: n, turnId: i } = e;
        G(t, i, (e) => ({
            ...e,
            steps: (function (e, t) {
                if ("todos" !== t.kind || null != t.task_id) return [...e, t];
                let n = e.findIndex((e) => "todos" === e.kind && null == e.task_id);
                return -1 === n ? [...e, t] : [...e.slice(0, n), t, ...e.slice(n + 1)];
            })(e.steps, n),
        })),
            F(t);
    },
    VIBEGRATIONS_CHAT_TURN_FINISHED: function (e) {
        let { projectId: t, summary: n, turnId: i } = e,
            r = N.get(t);
        null != r &&
            r.some((e) => null != e.disposition) &&
            N.set(
                t,
                r.map((e) => {
                    if (null == e.disposition) return e;
                    let { disposition: t, ...n } = e;
                    return n;
                }),
            ),
            G(t, i, (e) => ({
                ...e,
                finished: !0,
                provisionalTodo: void 0,
                content: "" !== e.content ? e.content : (n ?? ""),
            })),
            x(t) || (y.delete(t), D.delete(t)),
            F(t);
    },
    VIBEGRATIONS_CHAT_INTERRUPTED: function (e) {
        let { projectId: t } = e,
            n = N.get(t);
        if (null == n) return !1;
        let i = P("assistant", "");
        (i.finished = !0), (i.interrupted = !0), N.set(t, [...n, i]);
    },
    VIBEGRATIONS_CHAT_PROVISIONAL_TODO: function (e) {
        let { projectId: t, turnId: n, text: i } = e;
        if (
            !(function (e, t, n) {
                let i = N.get(e);
                if (null == i) return !1;
                let r = w(i, t);
                return -1 !== r && (N.set(e, [...i.slice(0, r), n(i[r]), ...i.slice(r + 1)]), !0);
            })(t, n, (e) => ({ ...e, provisionalTodo: i }))
        )
            return !1;
    },
    VIBEGRATIONS_CHAT_THINKING_SET: function (e) {
        let { projectId: t, activity: n } = e;
        if (null == n) return !!y.delete(t) && void 0;
        let i = y.get(t);
        if (null != i && n.session === i.session && n.seq <= i.seq) return !1;
        y.set(t, n);
    },
    VIBEGRATIONS_CHAT_COMPACTING_SET: function (e) {
        let { projectId: t, compacting: n } = e;
        if (n === D.has(t)) return !1;
        n ? D.add(t) : D.delete(t);
    },
    VIBEGRATIONS_CHAT_USAGE_SET: function (e) {
        let { projectId: t, project: n } = e;
        L.set(t, n);
    },
    VIBEGRATIONS_CHAT_SIDEBAR_WIDTH_SET: function (e) {
        let { width: t } = e;
        if (v === t) return !1;
        v = t;
    },
    VIBEGRATIONS_CHAT_TURN_PATCH: function (e) {
        let { projectId: t, patch: n, turnId: i } = e;
        G(t, i, (e) => {
            let t = { ...e, ...n };
            return "todos" in n && (t.provisionalTodo = void 0), t;
        }),
            F(t);
    },
    VIBEGRATIONS_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: n } = e;
        if ("closed" !== n && "failed" !== n) return !1;
        let i = D.delete(t),
            r = y.delete(t),
            a = N.get(t);
        if (null == a || !a.some((e) => "assistant" === e.role && !S(e))) return (!!r || !!i) && void 0;
        N.set(
            t,
            a.map((e) => {
                if (null != e.disposition) {
                    let { disposition: t, ...n } = e;
                    return n;
                }
                return "assistant" !== e.role || S(e)
                    ? e
                    : {
                          ...e,
                          provisionalTodo: void 0,
                          steps: [
                              ...e.steps,
                              { type: "step", kind: "terminal_error", message: T.intl.string(p.default["wjWm+/"]) },
                          ],
                      };
            }),
        ),
            F(t);
    },
    VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        if (!V(t)) return !1;
    },
    VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function (e) {
        let { projects: t } = e,
            n = new Set(t.map((e) => e.id)),
            i = new Set([...N.keys(), ...C.keys(), ...O.keys(), ...L.keys()]),
            r = !1;
        for (let e of i) !n.has(e) && V(e) && (r = !0);
        if (!r) return !1;
    },
});
