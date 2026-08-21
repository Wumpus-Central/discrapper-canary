"use strict";
n.d(t, { Ay: () => W, BL: () => m, bi: () => B }), n(667532), n(321073);
var i = n(17928),
    r = n(228366),
    a = n(695515),
    s = n(400492),
    l = n(885386),
    o = n(803224),
    d = n(309010),
    c = n(967198),
    u = n(461213),
    _ = n(148555),
    E = n(972786),
    A = n(652215),
    h = n(746080),
    I = n(295813),
    f = n(375708);
let p = "bit_message1",
    T = new Set(["reply", "plan_proposed", "terminal_error"]);
function m(e) {
    return (
        !0 === e.finished ||
        !0 === e.continued ||
        "" !== e.content ||
        null != e.proposal ||
        e.steps.some((e) => T.has(e.kind))
    );
}
let g = new Map(),
    S = new Map(),
    N = new Map(),
    C = [],
    O = new Map(),
    R = new Map(),
    L = new Set(),
    y = 0,
    D = [],
    v = 0;
function b(e, t) {
    let {
            ts: n,
            id: i,
            userId: r,
            attachments: a,
            turnId: s,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        l = i ?? `m${++v}`;
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
function M(e) {
    let t = b(e.role, e.content, { ts: e.ts, id: e.id, userId: e.user_id, attachments: e.attachments });
    return (
        null != e.kind && (t.kind = e.kind),
        null != e.proposal && (t.proposal = e.proposal),
        null != e.ideas && e.ideas.length > 0 && (t.ideas = e.ideas),
        null != e.clarification && e.clarification.questions.length > 0 && (t.clarification = e.clarification),
        null == e.steps && null == e.events && null != e.todos && e.todos.length > 0 && (t.todos = e.todos),
        null != e.steps
            ? (t.steps = (function (e) {
                  let t = H();
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
function P(e, t) {
    if (null == t) return -1;
    for (let n = e.length - 1; n >= 0; n--) if (e[n].turn_id === t) return n;
    return -1;
}
function U(e, t, n) {
    let i = g.get(e);
    if (null == i) return;
    let r = (function (e, t) {
        let n = P(e, t);
        if (-1 !== n) return n;
        for (let t = e.length - 1; t >= 0; t--) {
            let n = e[t];
            if (!("assistant" !== n.role || m(n)) && null == n.turn_id) return t;
        }
        return -1;
    })(i, t);
    if (-1 === r) return void g.set(e, [...i, n(b("assistant", "", null != t ? { turnId: t } : {}))]);
    let a = i[r],
        s = null != t && null == a.turn_id ? { ...a, turn_id: t } : a;
    g.set(e, [...i.slice(0, r), n(s), ...i.slice(r + 1)]);
}
function w(e) {
    let t = g.get(e);
    return null != t && t.some((e) => "assistant" === e.role && !m(e));
}
function G(e) {
    let t = g.get(e);
    if (null == t) return null;
    for (let e = t.length - 1; e >= 0; e--) if ("assistant" === t[e].role && "side_reply" !== t[e].kind) return t[e];
    return null;
}
function x(e) {
    let t = N.get(e) ?? !1,
        n = w(e);
    if (t === n) return;
    N.set(e, n);
    let i = C.indexOf(e);
    if ((-1 !== i && C.splice(i, 1), C.unshift(e), n)) S.delete(e);
    else {
        let t;
        null != (t = G(e)) &&
        ("" !== t.content.trim() ||
            null != t.proposal ||
            t.steps.some((e) => T.has(e.kind) && "terminal_error" !== e.kind))
            ? S.set(e, Date.now())
            : S.delete(e),
            (function (e) {
                let t = g.get(e);
                if (null != t)
                    for (let n = t.length - 1; n >= 0; n--) {
                        let i = t[n];
                        if ("assistant" === i.role) {
                            if (null != i.finished_at || !m(i)) return;
                            g.set(e, [...t.slice(0, n), { ...i, finished_at: Date.now() }, ...t.slice(n + 1)]);
                            return;
                        }
                    }
            })(e),
            (function (e) {
                let t = E.A.getProject(e);
                if (
                    null == t ||
                    _.A.areTurnNotificationsDisabled() ||
                    u.A.getStatus() === A.clD.DND ||
                    l.NO.getSetting() ||
                    a.A.isCurrentUserInRestrictedHours()
                )
                    return;
                let n = !o.A.isSoundDisabled("message1"),
                    i = c.A.getGuildId(),
                    r = null != i && E.A.getSelectedProjectId(i) === e ? i : null,
                    T = null != r && d.Ay.getChannelId() === h.VV.VIBEGRATIONS && _.A.isWindowFocused(),
                    m = r ?? t.guild_id ?? t.preview_guild_id,
                    g = (function (e) {
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
                            if ("preview_ready" === n.kind) return f.intl.string(I.default["78YNh7"]);
                        }
                        return null;
                    })(e);
                if (null == g) return;
                if (T) {
                    n && (0, s.Ak)(p, 0.4);
                    return;
                }
                let S = null == m ? null : A.BVt.CHANNEL(m, h.VV.VIBEGRATIONS, e);
                _.A.presentTurnNotification({
                    projectId: e,
                    guildId: m ?? null,
                    title: t.name,
                    body: g,
                    route: S,
                    sound: n ? p : void 0,
                    volume: 0.4,
                });
            })(e);
    }
}
function k(e) {
    let t = g.delete(e);
    V.delete(e);
    let n = S.delete(e),
        i = N.delete(e),
        r = O.delete(e),
        a = R.delete(e),
        s = L.delete(e),
        l = C.indexOf(e);
    return -1 !== l && C.splice(l, 1), t || n || i || r || a || s || -1 !== l;
}
class F extends i.Ay.Store {
    initialize() {
        this.waitFor(a.A, o.A, d.Ay, c.A, u.A, E.A);
    }
    getMessages(e) {
        return g.get(e) ?? D;
    }
    hasPendingSettingsRequest(e) {
        let t = this.getMessages(e),
            n = t[t.length - 1];
        return null != n && "assistant" === n.role && null != n.settingsRequest;
    }
    isThinking(e) {
        return w(e);
    }
    hasLoadedHistory(e) {
        return V.has(e);
    }
    getFinishedAt(e) {
        return w(e) ? null : (S.get(e) ?? null);
    }
    getProjectUsage(e) {
        return O.get(e) ?? null;
    }
    getThinkingActivity(e) {
        return R.get(e) ?? null;
    }
    isCompacting(e) {
        return L.has(e);
    }
    getSidebarWidth() {
        return y;
    }
    getActivityOrderedProjectIds() {
        return C.slice();
    }
    isAnyThinking() {
        for (let e of g.keys()) if (this.isThinking(e)) return !0;
        return !1;
    }
}
let V = new Map();
function B(e) {
    return V.get(e) ?? null;
}
function H() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        t = new Set(),
        n = -1;
    for (let [i, r] of e.entries())
        null != r.turn_seq && t.add(r.turn_seq), -1 === n && "todos" === r.kind && null == r.task_id && (n = i);
    return { steps: [...e], seenSeq: t, todosAt: n };
}
function j(e, t) {
    if (null != t.turn_seq && e.seenSeq.has(t.turn_seq)) return;
    if ("todos" !== t.kind || null != t.task_id) {
        e.steps.push(t), null != t.turn_seq && e.seenSeq.add(t.turn_seq);
        return;
    }
    if (-1 === e.todosAt) {
        (e.todosAt = e.steps.length), e.steps.push(t), null != t.turn_seq && e.seenSeq.add(t.turn_seq);
        return;
    }
    let n = e.steps[e.todosAt];
    null != n.turn_seq && e.seenSeq.delete(n.turn_seq),
        (e.steps[e.todosAt] = t),
        null != t.turn_seq && e.seenSeq.add(t.turn_seq);
}
let W = new F(r.h, {
    LOGOUT: function () {
        if (
            0 === g.size &&
            0 === S.size &&
            0 === N.size &&
            0 === O.size &&
            0 === R.size &&
            0 === L.size &&
            0 === C.length &&
            0 === y
        )
            return !1;
        g.clear(), S.clear(), N.clear(), O.clear(), R.clear(), L.clear(), (C.length = 0), (y = 0);
    },
    VIBEGRATIONS_CHAT_HISTORY_SET: function (e) {
        let { projectId: t, entries: n, cursor: i } = e;
        V.set(t, i ?? null), R.delete(t), L.delete(t), g.set(t, n.map(M)), x(t);
    },
    VIBEGRATIONS_CHAT_HISTORY_PREPEND: function (e) {
        let { projectId: t, entries: n, cursor: i } = e;
        if ((V.set(t, i), 0 === n.length)) return;
        let r = g.get(t) ?? [],
            a = n.map(M),
            s = new Set(r.flatMap((e) => (null == e.id ? [] : [e.id]))),
            l = a.filter((e) => null == e.id || !s.has(e.id));
        g.set(t, [...l, ...r]);
    },
    VIBEGRATIONS_CHAT_MESSAGE_APPEND: function (e) {
        let { projectId: t, content: n, id: i, optimisticId: r, userId: a, timestamp: s, attachments: l } = e,
            o = g.get(t) ?? [];
        if (o.some((e) => e.id === i)) return !1;
        let d = b("user", n, { ts: s, id: i, userId: a, attachments: l }),
            c = null == r ? -1 : o.findIndex((e) => e.id === r);
        if (-1 !== c) {
            (d.render_id = o[c].render_id), g.set(t, [...o.slice(0, c), d, ...o.slice(c + 1)]), x(t);
            return;
        }
        let u = [...o, d];
        u.some((e) => "assistant" === e.role && !m(e)) || u.push(b("assistant", "")), g.set(t, u), x(t);
    },
    VIBEGRATIONS_CHAT_MESSAGE_DISPOSITION: function (e) {
        let { projectId: t, id: n, activeTurnId: i, disposition: r } = e,
            a = g.get(t);
        if (null == a) return !1;
        let s = a.findIndex((e) => e.id === n);
        if (-1 === s) return !1;
        let l = a[s].disposition === r ? a : [...a.slice(0, s), { ...a[s], disposition: r }, ...a.slice(s + 1)],
            o = "steered" === r ? P(l, i) : -1;
        if (-1 === o || o > s) return l !== a && void g.set(t, l);
        g.set(t, [
            ...l.slice(0, o),
            { ...l[o], continued: !0, finished_at: l[o].finished_at ?? Date.now() },
            ...l.slice(o + 1),
            b("assistant", "", { turnId: i }),
        ]),
            x(t);
    },
    VIBEGRATIONS_CHAT_SIDE_REPLY: function (e) {
        let { projectId: t, id: n, inReplyTo: i, content: r, timestamp: a } = e,
            s = g.get(t);
        if (null == s || s.some((e) => e.id === n)) return !1;
        let l = b("assistant", r, { ts: a, id: n });
        (l.kind = "side_reply"), (l.in_reply_to = i);
        let o = s.findIndex((e) => e.id === i);
        if (-1 === o) return void g.set(t, [...s, l]);
        let { disposition: d, ...c } = s[o];
        g.set(t, [...s.slice(0, o), c, l, ...s.slice(o + 1)]);
    },
    VIBEGRATIONS_CHAT_STEP_APPEND: function (e) {
        let { projectId: t, step: n, turnId: i } = e;
        U(t, i, (e) => {
            var t;
            let i;
            return { ...e, steps: ((t = e.steps), j((i = H(t)), n), i.steps) };
        }),
            x(t);
    },
    VIBEGRATIONS_CHAT_TURN_FINISHED: function (e) {
        let { projectId: t, summary: n, turnId: i } = e,
            r = g.get(t);
        null != r &&
            r.some((e) => null != e.disposition) &&
            g.set(
                t,
                r.map((e) => {
                    if (null == e.disposition) return e;
                    let { disposition: t, ...n } = e;
                    return n;
                }),
            ),
            U(t, i, (e) => ({
                ...e,
                finished: !0,
                finished_at: Date.now(),
                provisionalTodo: void 0,
                content: "" !== e.content ? e.content : (n ?? ""),
            })),
            w(t) || (R.delete(t), L.delete(t)),
            x(t);
    },
    VIBEGRATIONS_CHAT_INTERRUPTED: function (e) {
        let { projectId: t } = e,
            n = g.get(t);
        if (null == n) return !1;
        let i = b("assistant", "");
        (i.finished = !0), (i.finished_at = Date.now()), (i.interrupted = !0), g.set(t, [...n, i]);
    },
    VIBEGRATIONS_CHAT_PROVISIONAL_TODO: function (e) {
        let { projectId: t, turnId: n, text: i } = e;
        if (
            !(function (e, t, n) {
                let i = g.get(e);
                if (null == i) return !1;
                let r = P(i, t);
                return -1 !== r && (g.set(e, [...i.slice(0, r), n(i[r]), ...i.slice(r + 1)]), !0);
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
        if (n === L.has(t)) return !1;
        n ? L.add(t) : L.delete(t);
    },
    VIBEGRATIONS_CHAT_USAGE_SET: function (e) {
        let { projectId: t, project: n } = e;
        O.set(t, n);
    },
    VIBEGRATIONS_CHAT_SIDEBAR_WIDTH_SET: function (e) {
        let { width: t } = e;
        if (y === t) return !1;
        y = t;
    },
    VIBEGRATIONS_CHAT_TURN_PATCH: function (e) {
        let { projectId: t, patch: n, turnId: i } = e;
        U(t, i, (e) => {
            let t = { ...e, ...n };
            return "todos" in n && (t.provisionalTodo = void 0), t;
        }),
            x(t);
    },
    VIBEGRATIONS_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: n } = e;
        if ("closed" !== n && "failed" !== n) return !1;
        let i = L.delete(t),
            r = R.delete(t),
            a = g.get(t);
        if (null == a || !a.some((e) => "assistant" === e.role && !m(e))) return (!!r || !!i) && void 0;
        g.set(
            t,
            a.map((e) => {
                if (null != e.disposition) {
                    let { disposition: t, ...n } = e;
                    return n;
                }
                return "assistant" !== e.role || m(e)
                    ? e
                    : {
                          ...e,
                          provisionalTodo: void 0,
                          steps: [
                              ...e.steps,
                              { type: "step", kind: "terminal_error", message: f.intl.string(I.default["wjWm+/"]) },
                          ],
                      };
            }),
        ),
            x(t);
    },
    VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        if (!k(t)) return !1;
    },
    VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function (e) {
        let t = new Set([...g.keys(), ...S.keys(), ...N.keys(), ...O.keys()]),
            n = !1;
        for (let e of t) null == E.A.getProject(e) && k(e) && (n = !0);
        if (!n) return !1;
    },
});
