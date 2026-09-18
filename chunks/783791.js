(n.d(t, { Ay: () => q, BL: () => I, bi: () => F }), n(667532), n(321073));
var i = n(17928),
    r = n(228366),
    l = n(695515),
    o = n(400492),
    s = n(885386),
    u = n(803224),
    a = n(309010),
    d = n(967198),
    c = n(461213),
    f = n(933294),
    p = n(972786),
    h = n(652215),
    _ = n(746080),
    g = n(50617),
    w = n(375708);
let m = "bit_message1",
    E = new Set(["reply", "plan_proposed", "terminal_error"]);
function I(e) {
    return (
        !0 === e.finished ||
        !0 === e.continued ||
        "" !== e.content ||
        null != e.proposal ||
        e.steps.some((e) => E.has(e.kind))
    );
}
let T = new Map(),
    A = new Map(),
    S = new Map(),
    v = [],
    y = new Map(),
    R = new Map(),
    O = new Set(),
    b = 0,
    k = [],
    N = 0;
function P(e, t) {
    let {
            ts: n,
            id: i,
            userId: r,
            attachments: l,
            turnId: o,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        s = i ?? `m${++N}`;
    return {
        id: s,
        render_id: s,
        role: e,
        content: t,
        ...(null != r ? { user_id: r } : {}),
        ...(null != o ? { turn_id: o } : {}),
        steps: [],
        created_at: null != n ? Date.parse(n) : Date.now(),
        attachments: l,
    };
}
function C(e) {
    let t = P(e.role, e.content, { ts: e.ts, id: e.id, userId: e.user_id, attachments: e.attachments });
    return (
        null != e.kind && (t.kind = e.kind),
        "interrupted" === e.kind && ((t.interrupted = !0), (t.content = ""), (t.finished = !0)),
        null != e.proposal && (t.proposal = e.proposal),
        null != e.ideas && e.ideas.length > 0 && (t.ideas = e.ideas),
        null != e.clarification && e.clarification.questions.length > 0 && (t.clarification = e.clarification),
        null == e.steps && null == e.events && null != e.todos && e.todos.length > 0 && (t.todos = e.todos),
        null != e.steps
            ? (t.steps = (function (e) {
                  let t = W();
                  for (let n of e) j(t, n);
                  return t.steps;
              })(e.steps))
            : null != e.events &&
              (t.steps = e.events.map((e) =>
                  "announcement" === e.type
                      ? { type: "step", kind: "announcement", message: e.message }
                      : { type: "step", kind: "todos", items: e.items },
              )),
        null != e.secret_request && e.secret_request.fields.length > 0 && (t.secretRequest = e.secret_request),
        null != e.settings_request && (t.settingsRequest = e.settings_request),
        t
    );
}
function M(e, t) {
    if (null == t) return -1;
    for (let n = e.length - 1; n >= 0; n--) if (e[n].turn_id === t) return n;
    return -1;
}
function B(e, t, n) {
    let i = T.get(e);
    if (null == i) return;
    let r = (function (e, t) {
        let n = M(e, t);
        if (-1 !== n) return n;
        for (let t = e.length - 1; t >= 0; t--) {
            let n = e[t];
            if (!("assistant" !== n.role || I(n)) && null == n.turn_id) return t;
        }
        return -1;
    })(i, t);
    if (-1 === r) return void T.set(e, [...i, n(P("assistant", "", null != t ? { turnId: t } : {}))]);
    let l = i[r],
        o = null != t && null == l.turn_id ? { ...l, turn_id: t } : l;
    T.set(e, [...i.slice(0, r), n(o), ...i.slice(r + 1)]);
}
function L(e) {
    if (null == e) return !1;
    let t = !1;
    for (let n = e.length - 1; n >= 0; n--) {
        let i = e[n];
        if (
            "assistant" === i.role &&
            "side_reply" !== i.kind &&
            ((!t && ((t = !0), !I(i))) || (null != i.turn_id && !I(i)))
        )
            return !0;
    }
    return !1;
}
function D(e) {
    return L(T.get(e));
}
function G(e) {
    let t = T.get(e);
    if (null == t) return null;
    for (let e = t.length - 1; e >= 0; e--) if ("assistant" === t[e].role && "side_reply" !== t[e].kind) return t[e];
    return null;
}
function V(e) {
    let t = S.get(e) ?? !1,
        n = D(e);
    if (t === n) return;
    S.set(e, n);
    let i = v.indexOf(e);
    if ((-1 !== i && v.splice(i, 1), v.unshift(e), n)) A.delete(e);
    else {
        let t;
        (null != (t = G(e)) &&
        ("" !== t.content.trim() ||
            null != t.proposal ||
            t.steps.some((e) => E.has(e.kind) && "terminal_error" !== e.kind))
            ? A.set(e, Date.now())
            : A.delete(e),
            (function (e) {
                let t = T.get(e);
                if (null != t)
                    for (let n = t.length - 1; n >= 0; n--) {
                        let i = t[n];
                        if ("assistant" === i.role) {
                            if (null != i.finished_at || !I(i)) return;
                            T.set(e, [...t.slice(0, n), { ...i, finished_at: Date.now() }, ...t.slice(n + 1)]);
                            return;
                        }
                    }
            })(e),
            (function (e) {
                let t = p.Ay.getProject(e);
                if (
                    null == t ||
                    f.A.areTurnNotificationsDisabled() ||
                    c.A.getStatus() === h.clD.DND ||
                    s.NO.getSetting() ||
                    l.A.isCurrentUserInRestrictedHours()
                )
                    return;
                let n = !u.A.isSoundDisabled("message1"),
                    i = d.A.getGuildId(),
                    r = null != i && p.Ay.getSelectedProjectId(i) === e ? i : null,
                    E = null != r && a.Ay.getChannelId() === _.VV.VIBEGRATIONS && f.A.isWindowFocused(),
                    I = r ?? t.guild_id ?? t.preview_guild_id,
                    T = (function (e) {
                        let t = G(e);
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
                            if ("preview_ready" === n.kind) return w.intl.string(g.default["78YNh7"]);
                        }
                        return null;
                    })(e);
                if (null == T) return;
                if (E) {
                    n && (0, o.Ak)(m, 0.4);
                    return;
                }
                let A = null == I ? null : h.BVt.CHANNEL(I, _.VV.VIBEGRATIONS, e);
                f.A.presentTurnNotification({
                    projectId: e,
                    guildId: I ?? null,
                    title: t.name,
                    body: T,
                    route: A,
                    sound: n ? m : void 0,
                    volume: 0.4,
                });
            })(e));
    }
}
function x(e) {
    let t = T.delete(e);
    U.delete(e);
    let n = A.delete(e),
        i = S.delete(e),
        r = y.delete(e),
        l = R.delete(e),
        o = O.delete(e),
        s = v.indexOf(e);
    return (-1 !== s && v.splice(s, 1), t || n || i || r || l || o || -1 !== s);
}
class H extends i.Ay.Store {
    initialize() {
        this.waitFor(l.A, u.A, a.Ay, d.A, c.A, p.Ay);
    }
    getMessages(e) {
        return T.get(e) ?? k;
    }
    hasPendingSettingsRequest(e) {
        let t = this.getMessages(e),
            n = t[t.length - 1];
        return null != n && "assistant" === n.role && null != n.settingsRequest;
    }
    isThinking(e) {
        return D(e);
    }
    hasLoadedHistory(e) {
        return U.has(e);
    }
    getFinishedAt(e) {
        return D(e) ? null : (A.get(e) ?? null);
    }
    getProjectUsage(e) {
        return y.get(e) ?? null;
    }
    getThinkingActivity(e) {
        return R.get(e) ?? null;
    }
    isCompacting(e) {
        return O.has(e);
    }
    getSidebarWidth() {
        return b;
    }
    getActivityOrderedProjectIds() {
        return v.slice();
    }
    isAnyThinking() {
        for (let e of T.keys()) if (this.isThinking(e)) return !0;
        return !1;
    }
}
let U = new Map();
function F(e) {
    return U.get(e) ?? null;
}
function W() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        t = new Set(),
        n = -1;
    for (let [i, r] of e.entries())
        (null != r.turn_seq && t.add(r.turn_seq), -1 === n && "todos" === r.kind && null == r.task_id && (n = i));
    return { steps: [...e], seenSeq: t, todosAt: n };
}
function j(e, t) {
    if (null != t.turn_seq && e.seenSeq.has(t.turn_seq)) return;
    if ("todos" !== t.kind || null != t.task_id) {
        (e.steps.push(t), null != t.turn_seq && e.seenSeq.add(t.turn_seq));
        return;
    }
    if (-1 === e.todosAt) {
        ((e.todosAt = e.steps.length), e.steps.push(t), null != t.turn_seq && e.seenSeq.add(t.turn_seq));
        return;
    }
    let n = e.steps[e.todosAt];
    (null != n.turn_seq && e.seenSeq.delete(n.turn_seq),
        (e.steps[e.todosAt] = t),
        null != t.turn_seq && e.seenSeq.add(t.turn_seq));
}
let q = new H(r.h, {
    LOGOUT: function () {
        if (
            0 === T.size &&
            0 === A.size &&
            0 === S.size &&
            0 === y.size &&
            0 === R.size &&
            0 === O.size &&
            0 === v.length &&
            0 === b
        )
            return !1;
        (T.clear(), A.clear(), S.clear(), y.clear(), R.clear(), O.clear(), (v.length = 0), (b = 0));
    },
    VIBEGRATIONS_CHAT_HISTORY_SET: function (e) {
        let { projectId: t, entries: n, cursor: i } = e;
        (U.set(t, i ?? null), R.delete(t), O.delete(t));
        let r = new Set(),
            l = n.filter((e) => null == e.id || (!r.has(e.id) && (r.add(e.id), !0)));
        (T.set(t, l.map(C)), V(t));
    },
    VIBEGRATIONS_CHAT_HISTORY_PREPEND: function (e) {
        let { projectId: t, entries: n, cursor: i } = e;
        if ((U.set(t, i), 0 === n.length)) return;
        let r = T.get(t) ?? [],
            l = n.map(C),
            o = new Set(r.flatMap((e) => (null == e.id ? [] : [e.id]))),
            s = l.filter((e) => null == e.id || !o.has(e.id));
        T.set(t, [...s, ...r]);
    },
    VIBEGRATIONS_CHAT_MESSAGE_APPEND: function (e) {
        let { projectId: t, content: n, id: i, optimisticId: r, userId: l, timestamp: o, attachments: s } = e,
            u = T.get(t) ?? [];
        if (u.some((e) => e.id === i)) return !1;
        let a = P("user", n, { ts: o, id: i, userId: l, attachments: s }),
            d = null == r ? -1 : u.findIndex((e) => e.id === r);
        if (-1 !== d) {
            ((a.render_id = u[d].render_id), T.set(t, [...u.slice(0, d), a, ...u.slice(d + 1)]), V(t));
            return;
        }
        let c = [...u, a];
        (L(c) || c.push(P("assistant", "")), T.set(t, c), V(t));
    },
    VIBEGRATIONS_CHAT_MESSAGE_DISPOSITION: function (e) {
        let { projectId: t, id: n, activeTurnId: i, disposition: r } = e,
            l = T.get(t);
        if (null == l) return !1;
        let o = l.findIndex((e) => e.id === n);
        if (-1 === o) return !1;
        let s = l[o].disposition === r ? l : [...l.slice(0, o), { ...l[o], disposition: r }, ...l.slice(o + 1)],
            u = "steered" === r ? M(s, i) : -1;
        if (-1 === u || u > o) return s !== l && void T.set(t, s);
        (T.set(t, [
            ...s.slice(0, u),
            { ...s[u], continued: !0, finished_at: s[u].finished_at ?? Date.now() },
            ...s.slice(u + 1),
            P("assistant", "", { turnId: i }),
        ]),
            V(t));
    },
    VIBEGRATIONS_CHAT_SIDE_REPLY: function (e) {
        let { projectId: t, id: n, inReplyTo: i, content: r, timestamp: l } = e,
            o = T.get(t);
        if (null == o || o.some((e) => e.id === n)) return !1;
        let s = P("assistant", r, { ts: l, id: n });
        ((s.kind = "side_reply"), (s.in_reply_to = i));
        let u = o.findIndex((e) => e.id === i);
        if (-1 === u) return void T.set(t, [...o, s]);
        let { disposition: a, ...d } = o[u];
        T.set(t, [...o.slice(0, u), d, s, ...o.slice(u + 1)]);
    },
    VIBEGRATIONS_CHAT_STEP_APPEND: function (e) {
        let { projectId: t, step: n, turnId: i } = e;
        (B(t, i, (e) => {
            var t;
            let i;
            return { ...e, steps: ((t = e.steps), j((i = W(t)), n), i.steps) };
        }),
            V(t));
    },
    VIBEGRATIONS_CHAT_TURN_FINISHED: function (e) {
        let { projectId: t, summary: n, turnId: i } = e,
            r = T.get(t);
        (null != r &&
            r.some((e) => null != e.disposition) &&
            T.set(
                t,
                r.map((e) => {
                    if (null == e.disposition) return e;
                    let { disposition: t, ...n } = e;
                    return n;
                }),
            ),
            B(t, i, (e) => ({
                ...e,
                finished: !0,
                finished_at: Date.now(),
                provisionalTodo: void 0,
                content: "" !== e.content ? e.content : (n ?? ""),
            })),
            D(t) || (R.delete(t), O.delete(t)),
            V(t));
    },
    VIBEGRATIONS_CHAT_INTERRUPTED: function (e) {
        let { projectId: t } = e,
            n = T.get(t);
        if (null == n) return !1;
        let i = P("assistant", "");
        ((i.finished = !0), (i.finished_at = Date.now()), (i.interrupted = !0), T.set(t, [...n, i]));
    },
    VIBEGRATIONS_CHAT_PROVISIONAL_TODO: function (e) {
        let { projectId: t, turnId: n, text: i } = e;
        if (
            !(function (e, t, n) {
                let i = T.get(e);
                if (null == i) return !1;
                let r = M(i, t);
                return -1 !== r && (T.set(e, [...i.slice(0, r), n(i[r]), ...i.slice(r + 1)]), !0);
            })(t, n, (e) => ({ ...e, provisionalTodo: i }))
        )
            return !1;
    },
    VIBEGRATIONS_CHAT_THINKING_SET: function (e) {
        let { projectId: t, activity: n } = e;
        if (null == n) return !!R.delete(t) && void 0;
        let i = R.get(t);
        if (null != i && n.session === i.session && n.seq <= i.seq) return !1;
        R.set(t, n);
    },
    VIBEGRATIONS_CHAT_COMPACTING_SET: function (e) {
        let { projectId: t, compacting: n } = e;
        if (n === O.has(t)) return !1;
        n ? O.add(t) : O.delete(t);
    },
    VIBEGRATIONS_CHAT_USAGE_SET: function (e) {
        let { projectId: t, project: n } = e;
        y.set(t, n);
    },
    VIBEGRATIONS_CHAT_SIDEBAR_WIDTH_SET: function (e) {
        let { width: t } = e;
        if (b === t) return !1;
        b = t;
    },
    VIBEGRATIONS_CHAT_TURN_PATCH: function (e) {
        let { projectId: t, patch: n, turnId: i } = e;
        (B(t, i, (e) => {
            let t = { ...e, ...n };
            return ("todos" in n && (t.provisionalTodo = void 0), t);
        }),
            V(t));
    },
    VIBEGRATIONS_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: n } = e;
        if ("closed" !== n && "failed" !== n) return !1;
        let i = O.delete(t),
            r = R.delete(t),
            l = T.get(t);
        if (null == l || !l.some((e) => "assistant" === e.role && !I(e))) return (!!r || !!i) && void 0;
        (T.set(
            t,
            l.map((e) => {
                if (null != e.disposition) {
                    let { disposition: t, ...n } = e;
                    return n;
                }
                return "assistant" !== e.role || I(e)
                    ? e
                    : {
                          ...e,
                          provisionalTodo: void 0,
                          steps: [
                              ...e.steps,
                              { type: "step", kind: "terminal_error", message: w.intl.string(g.default["wjWm+/"]) },
                          ],
                      };
            }),
        ),
            V(t));
    },
    VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        if (!x(t)) return !1;
    },
    VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function (e) {
        let t = new Set([...T.keys(), ...A.keys(), ...S.keys(), ...y.keys()]),
            n = !1;
        for (let e of t) null == p.Ay.getProject(e) && x(e) && (n = !0);
        if (!n) return !1;
    },
});
