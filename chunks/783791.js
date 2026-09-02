n.d(t, { Ay: () => U, BL: () => b, bi: () => q }), n(667532), n(321073);
var i = n(17928),
    r = n(228366),
    l = n(695515),
    s = n(400492),
    o = n(885386),
    a = n(803224),
    u = n(309010),
    d = n(967198),
    c = n(461213),
    f = n(692200),
    h = n(972786),
    p = n(652215),
    g = n(746080),
    w = n(50617),
    m = n(375708);
let _ = "bit_message1",
    v = new Set(["reply", "plan_proposed", "terminal_error"]);
function b(e) {
    return (
        !0 === e.finished ||
        !0 === e.continued ||
        "" !== e.content ||
        null != e.proposal ||
        e.steps.some((e) => v.has(e.kind))
    );
}
let A = new Map(),
    I = new Map(),
    T = new Map(),
    y = [],
    S = new Map(),
    E = new Map(),
    M = new Set(),
    k = 0,
    O = [],
    N = 0;
function C(e, t) {
    let {
            ts: n,
            id: i,
            userId: r,
            attachments: l,
            turnId: s,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        o = i ?? `m${++N}`;
    return {
        id: o,
        render_id: o,
        role: e,
        content: t,
        ...(null != r ? { user_id: r } : {}),
        ...(null != s ? { turn_id: s } : {}),
        steps: [],
        created_at: null != n ? Date.parse(n) : Date.now(),
        attachments: l,
    };
}
function R(e) {
    let t = C(e.role, e.content, { ts: e.ts, id: e.id, userId: e.user_id, attachments: e.attachments });
    return (
        null != e.kind && (t.kind = e.kind),
        "interrupted" === e.kind && ((t.interrupted = !0), (t.content = ""), (t.finished = !0)),
        null != e.proposal && (t.proposal = e.proposal),
        null != e.ideas && e.ideas.length > 0 && (t.ideas = e.ideas),
        null != e.clarification && e.clarification.questions.length > 0 && (t.clarification = e.clarification),
        null == e.steps && null == e.events && null != e.todos && e.todos.length > 0 && (t.todos = e.todos),
        null != e.steps
            ? (t.steps = (function (e) {
                  let t = $();
                  for (let n of e) F(t, n);
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
function x(e, t, n) {
    let i = A.get(e);
    if (null == i) return;
    let r = (function (e, t) {
        let n = P(e, t);
        if (-1 !== n) return n;
        for (let t = e.length - 1; t >= 0; t--) {
            let n = e[t];
            if (!("assistant" !== n.role || b(n)) && null == n.turn_id) return t;
        }
        return -1;
    })(i, t);
    if (-1 === r) return void A.set(e, [...i, n(C("assistant", "", null != t ? { turnId: t } : {}))]);
    let l = i[r],
        s = null != t && null == l.turn_id ? { ...l, turn_id: t } : l;
    A.set(e, [...i.slice(0, r), n(s), ...i.slice(r + 1)]);
}
function D(e) {
    if (null == e) return !1;
    let t = !1;
    for (let n = e.length - 1; n >= 0; n--) {
        let i = e[n];
        if (
            "assistant" === i.role &&
            "side_reply" !== i.kind &&
            ((!t && ((t = !0), !b(i))) || (null != i.turn_id && !b(i)))
        )
            return !0;
    }
    return !1;
}
function L(e) {
    return D(A.get(e));
}
function B(e) {
    let t = A.get(e);
    if (null == t) return null;
    for (let e = t.length - 1; e >= 0; e--) if ("assistant" === t[e].role && "side_reply" !== t[e].kind) return t[e];
    return null;
}
function V(e) {
    let t = T.get(e) ?? !1,
        n = L(e);
    if (t === n) return;
    T.set(e, n);
    let i = y.indexOf(e);
    if ((-1 !== i && y.splice(i, 1), y.unshift(e), n)) I.delete(e);
    else {
        let t;
        null != (t = B(e)) &&
        ("" !== t.content.trim() ||
            null != t.proposal ||
            t.steps.some((e) => v.has(e.kind) && "terminal_error" !== e.kind))
            ? I.set(e, Date.now())
            : I.delete(e),
            (function (e) {
                let t = A.get(e);
                if (null != t)
                    for (let n = t.length - 1; n >= 0; n--) {
                        let i = t[n];
                        if ("assistant" === i.role) {
                            if (null != i.finished_at || !b(i)) return;
                            A.set(e, [...t.slice(0, n), { ...i, finished_at: Date.now() }, ...t.slice(n + 1)]);
                            return;
                        }
                    }
            })(e),
            (function (e) {
                let t = h.Ay.getProject(e);
                if (
                    null == t ||
                    f.A.areTurnNotificationsDisabled() ||
                    c.A.getStatus() === p.clD.DND ||
                    o.NO.getSetting() ||
                    l.A.isCurrentUserInRestrictedHours()
                )
                    return;
                let n = !a.A.isSoundDisabled("message1"),
                    i = d.A.getGuildId(),
                    r = null != i && h.Ay.getSelectedProjectId(i) === e ? i : null,
                    v = null != r && u.Ay.getChannelId() === g.VV.VIBEGRATIONS && f.A.isWindowFocused(),
                    b = r ?? t.guild_id ?? t.preview_guild_id,
                    A = (function (e) {
                        let t = B(e);
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
                            if ("preview_ready" === n.kind) return m.intl.string(w.default["78YNh7"]);
                        }
                        return null;
                    })(e);
                if (null == A) return;
                if (v) {
                    n && (0, s.Ak)(_, 0.4);
                    return;
                }
                let I = null == b ? null : p.BVt.CHANNEL(b, g.VV.VIBEGRATIONS, e);
                f.A.presentTurnNotification({
                    projectId: e,
                    guildId: b ?? null,
                    title: t.name,
                    body: A,
                    route: I,
                    sound: n ? _ : void 0,
                    volume: 0.4,
                });
            })(e);
    }
}
function H(e) {
    let t = A.delete(e);
    G.delete(e);
    let n = I.delete(e),
        i = T.delete(e),
        r = S.delete(e),
        l = E.delete(e),
        s = M.delete(e),
        o = y.indexOf(e);
    return -1 !== o && y.splice(o, 1), t || n || i || r || l || s || -1 !== o;
}
class W extends i.Ay.Store {
    initialize() {
        this.waitFor(l.A, a.A, u.Ay, d.A, c.A, h.Ay);
    }
    getMessages(e) {
        return A.get(e) ?? O;
    }
    hasPendingSettingsRequest(e) {
        let t = this.getMessages(e),
            n = t[t.length - 1];
        return null != n && "assistant" === n.role && null != n.settingsRequest;
    }
    isThinking(e) {
        return L(e);
    }
    hasLoadedHistory(e) {
        return G.has(e);
    }
    getFinishedAt(e) {
        return L(e) ? null : (I.get(e) ?? null);
    }
    getProjectUsage(e) {
        return S.get(e) ?? null;
    }
    getThinkingActivity(e) {
        return E.get(e) ?? null;
    }
    isCompacting(e) {
        return M.has(e);
    }
    getSidebarWidth() {
        return k;
    }
    getActivityOrderedProjectIds() {
        return y.slice();
    }
    isAnyThinking() {
        for (let e of A.keys()) if (this.isThinking(e)) return !0;
        return !1;
    }
}
let G = new Map();
function q(e) {
    return G.get(e) ?? null;
}
function $() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        t = new Set(),
        n = -1;
    for (let [i, r] of e.entries())
        null != r.turn_seq && t.add(r.turn_seq), -1 === n && "todos" === r.kind && null == r.task_id && (n = i);
    return { steps: [...e], seenSeq: t, todosAt: n };
}
function F(e, t) {
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
let U = new W(r.h, {
    LOGOUT: function () {
        if (
            0 === A.size &&
            0 === I.size &&
            0 === T.size &&
            0 === S.size &&
            0 === E.size &&
            0 === M.size &&
            0 === y.length &&
            0 === k
        )
            return !1;
        A.clear(), I.clear(), T.clear(), S.clear(), E.clear(), M.clear(), (y.length = 0), (k = 0);
    },
    VIBEGRATIONS_CHAT_HISTORY_SET: function (e) {
        let { projectId: t, entries: n, cursor: i } = e;
        G.set(t, i ?? null), E.delete(t), M.delete(t);
        let r = new Set(),
            l = n.filter((e) => null == e.id || (!r.has(e.id) && (r.add(e.id), !0)));
        A.set(t, l.map(R)), V(t);
    },
    VIBEGRATIONS_CHAT_HISTORY_PREPEND: function (e) {
        let { projectId: t, entries: n, cursor: i } = e;
        if ((G.set(t, i), 0 === n.length)) return;
        let r = A.get(t) ?? [],
            l = n.map(R),
            s = new Set(r.flatMap((e) => (null == e.id ? [] : [e.id]))),
            o = l.filter((e) => null == e.id || !s.has(e.id));
        A.set(t, [...o, ...r]);
    },
    VIBEGRATIONS_CHAT_MESSAGE_APPEND: function (e) {
        let { projectId: t, content: n, id: i, optimisticId: r, userId: l, timestamp: s, attachments: o } = e,
            a = A.get(t) ?? [];
        if (a.some((e) => e.id === i)) return !1;
        let u = C("user", n, { ts: s, id: i, userId: l, attachments: o }),
            d = null == r ? -1 : a.findIndex((e) => e.id === r);
        if (-1 !== d) {
            (u.render_id = a[d].render_id), A.set(t, [...a.slice(0, d), u, ...a.slice(d + 1)]), V(t);
            return;
        }
        let c = [...a, u];
        D(c) || c.push(C("assistant", "")), A.set(t, c), V(t);
    },
    VIBEGRATIONS_CHAT_MESSAGE_DISPOSITION: function (e) {
        let { projectId: t, id: n, activeTurnId: i, disposition: r } = e,
            l = A.get(t);
        if (null == l) return !1;
        let s = l.findIndex((e) => e.id === n);
        if (-1 === s) return !1;
        let o = l[s].disposition === r ? l : [...l.slice(0, s), { ...l[s], disposition: r }, ...l.slice(s + 1)],
            a = "steered" === r ? P(o, i) : -1;
        if (-1 === a || a > s) return o !== l && void A.set(t, o);
        A.set(t, [
            ...o.slice(0, a),
            { ...o[a], continued: !0, finished_at: o[a].finished_at ?? Date.now() },
            ...o.slice(a + 1),
            C("assistant", "", { turnId: i }),
        ]),
            V(t);
    },
    VIBEGRATIONS_CHAT_SIDE_REPLY: function (e) {
        let { projectId: t, id: n, inReplyTo: i, content: r, timestamp: l } = e,
            s = A.get(t);
        if (null == s || s.some((e) => e.id === n)) return !1;
        let o = C("assistant", r, { ts: l, id: n });
        (o.kind = "side_reply"), (o.in_reply_to = i);
        let a = s.findIndex((e) => e.id === i);
        if (-1 === a) return void A.set(t, [...s, o]);
        let { disposition: u, ...d } = s[a];
        A.set(t, [...s.slice(0, a), d, o, ...s.slice(a + 1)]);
    },
    VIBEGRATIONS_CHAT_STEP_APPEND: function (e) {
        let { projectId: t, step: n, turnId: i } = e;
        x(t, i, (e) => {
            var t;
            let i;
            return { ...e, steps: ((t = e.steps), F((i = $(t)), n), i.steps) };
        }),
            V(t);
    },
    VIBEGRATIONS_CHAT_TURN_FINISHED: function (e) {
        let { projectId: t, summary: n, turnId: i } = e,
            r = A.get(t);
        null != r &&
            r.some((e) => null != e.disposition) &&
            A.set(
                t,
                r.map((e) => {
                    if (null == e.disposition) return e;
                    let { disposition: t, ...n } = e;
                    return n;
                }),
            ),
            x(t, i, (e) => ({
                ...e,
                finished: !0,
                finished_at: Date.now(),
                provisionalTodo: void 0,
                content: "" !== e.content ? e.content : (n ?? ""),
            })),
            L(t) || (E.delete(t), M.delete(t)),
            V(t);
    },
    VIBEGRATIONS_CHAT_INTERRUPTED: function (e) {
        let { projectId: t } = e,
            n = A.get(t);
        if (null == n) return !1;
        let i = C("assistant", "");
        (i.finished = !0), (i.finished_at = Date.now()), (i.interrupted = !0), A.set(t, [...n, i]);
    },
    VIBEGRATIONS_CHAT_PROVISIONAL_TODO: function (e) {
        let { projectId: t, turnId: n, text: i } = e;
        if (
            !(function (e, t, n) {
                let i = A.get(e);
                if (null == i) return !1;
                let r = P(i, t);
                return -1 !== r && (A.set(e, [...i.slice(0, r), n(i[r]), ...i.slice(r + 1)]), !0);
            })(t, n, (e) => ({ ...e, provisionalTodo: i }))
        )
            return !1;
    },
    VIBEGRATIONS_CHAT_THINKING_SET: function (e) {
        let { projectId: t, activity: n } = e;
        if (null == n) return !!E.delete(t) && void 0;
        let i = E.get(t);
        if (null != i && n.session === i.session && n.seq <= i.seq) return !1;
        E.set(t, n);
    },
    VIBEGRATIONS_CHAT_COMPACTING_SET: function (e) {
        let { projectId: t, compacting: n } = e;
        if (n === M.has(t)) return !1;
        n ? M.add(t) : M.delete(t);
    },
    VIBEGRATIONS_CHAT_USAGE_SET: function (e) {
        let { projectId: t, project: n } = e;
        S.set(t, n);
    },
    VIBEGRATIONS_CHAT_SIDEBAR_WIDTH_SET: function (e) {
        let { width: t } = e;
        if (k === t) return !1;
        k = t;
    },
    VIBEGRATIONS_CHAT_TURN_PATCH: function (e) {
        let { projectId: t, patch: n, turnId: i } = e;
        x(t, i, (e) => {
            let t = { ...e, ...n };
            return "todos" in n && (t.provisionalTodo = void 0), t;
        }),
            V(t);
    },
    VIBEGRATIONS_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: n } = e;
        if ("closed" !== n && "failed" !== n) return !1;
        let i = M.delete(t),
            r = E.delete(t),
            l = A.get(t);
        if (null == l || !l.some((e) => "assistant" === e.role && !b(e))) return (!!r || !!i) && void 0;
        A.set(
            t,
            l.map((e) => {
                if (null != e.disposition) {
                    let { disposition: t, ...n } = e;
                    return n;
                }
                return "assistant" !== e.role || b(e)
                    ? e
                    : {
                          ...e,
                          provisionalTodo: void 0,
                          steps: [
                              ...e.steps,
                              { type: "step", kind: "terminal_error", message: m.intl.string(w.default["wjWm+/"]) },
                          ],
                      };
            }),
        ),
            V(t);
    },
    VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        if (!H(t)) return !1;
    },
    VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function (e) {
        let t = new Set([...A.keys(), ...I.keys(), ...T.keys(), ...S.keys()]),
            n = !1;
        for (let e of t) null == h.Ay.getProject(e) && H(e) && (n = !0);
        if (!n) return !1;
    },
});
