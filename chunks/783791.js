n.d(t, { Ay: () => j, BL: () => v, bi: () => W }), n(667532), n(321073);
var l = n(17928),
    i = n(228366),
    r = n(695515),
    s = n(400492),
    o = n(885386),
    u = n(803224),
    a = n(309010),
    d = n(967198),
    c = n(461213),
    f = n(105810),
    p = n(972786),
    g = n(652215),
    h = n(746080),
    m = n(295813),
    w = n(375708);
let _ = "bit_message1",
    A = new Set(["reply", "plan_proposed", "terminal_error"]);
function v(e) {
    return (
        !0 === e.finished ||
        !0 === e.continued ||
        "" !== e.content ||
        null != e.proposal ||
        e.steps.some((e) => A.has(e.kind))
    );
}
let I = new Map(),
    T = new Map(),
    E = new Map(),
    S = [],
    b = new Map(),
    y = new Map(),
    N = new Set(),
    k = 0,
    O = [],
    C = 0;
function R(e, t) {
    let {
            ts: n,
            id: l,
            userId: i,
            attachments: r,
            turnId: s,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        o = l ?? `m${++C}`;
    return {
        id: o,
        render_id: o,
        role: e,
        content: t,
        ...(null != i ? { user_id: i } : {}),
        ...(null != s ? { turn_id: s } : {}),
        steps: [],
        created_at: null != n ? Date.parse(n) : Date.now(),
        attachments: r,
    };
}
function P(e) {
    let t = R(e.role, e.content, { ts: e.ts, id: e.id, userId: e.user_id, attachments: e.attachments });
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
function M(e, t) {
    if (null == t) return -1;
    for (let n = e.length - 1; n >= 0; n--) if (e[n].turn_id === t) return n;
    return -1;
}
function L(e, t, n) {
    let l = I.get(e);
    if (null == l) return;
    let i = (function (e, t) {
        let n = M(e, t);
        if (-1 !== n) return n;
        for (let t = e.length - 1; t >= 0; t--) {
            let n = e[t];
            if (!("assistant" !== n.role || v(n)) && null == n.turn_id) return t;
        }
        return -1;
    })(l, t);
    if (-1 === i) return void I.set(e, [...l, n(R("assistant", "", null != t ? { turnId: t } : {}))]);
    let r = l[i],
        s = null != t && null == r.turn_id ? { ...r, turn_id: t } : r;
    I.set(e, [...l.slice(0, i), n(s), ...l.slice(i + 1)]);
}
function D(e) {
    if (null == e) return !1;
    let t = !1;
    for (let n = e.length - 1; n >= 0; n--) {
        let l = e[n];
        if (
            "assistant" === l.role &&
            "side_reply" !== l.kind &&
            ((!t && ((t = !0), !v(l))) || (null != l.turn_id && !v(l)))
        )
            return !0;
    }
    return !1;
}
function B(e) {
    return D(I.get(e));
}
function V(e) {
    let t = I.get(e);
    if (null == t) return null;
    for (let e = t.length - 1; e >= 0; e--) if ("assistant" === t[e].role && "side_reply" !== t[e].kind) return t[e];
    return null;
}
function G(e) {
    let t = E.get(e) ?? !1,
        n = B(e);
    if (t === n) return;
    E.set(e, n);
    let l = S.indexOf(e);
    if ((-1 !== l && S.splice(l, 1), S.unshift(e), n)) T.delete(e);
    else {
        let t;
        null != (t = V(e)) &&
        ("" !== t.content.trim() ||
            null != t.proposal ||
            t.steps.some((e) => A.has(e.kind) && "terminal_error" !== e.kind))
            ? T.set(e, Date.now())
            : T.delete(e),
            (function (e) {
                let t = I.get(e);
                if (null != t)
                    for (let n = t.length - 1; n >= 0; n--) {
                        let l = t[n];
                        if ("assistant" === l.role) {
                            if (null != l.finished_at || !v(l)) return;
                            I.set(e, [...t.slice(0, n), { ...l, finished_at: Date.now() }, ...t.slice(n + 1)]);
                            return;
                        }
                    }
            })(e),
            (function (e) {
                let t = p.A.getProject(e);
                if (
                    null == t ||
                    f.A.areTurnNotificationsDisabled() ||
                    c.A.getStatus() === g.clD.DND ||
                    o.NO.getSetting() ||
                    r.A.isCurrentUserInRestrictedHours()
                )
                    return;
                let n = !u.A.isSoundDisabled("message1"),
                    l = d.A.getGuildId(),
                    i = null != l && p.A.getSelectedProjectId(l) === e ? l : null,
                    A = null != i && a.Ay.getChannelId() === h.VV.VIBEGRATIONS && f.A.isWindowFocused(),
                    v = i ?? t.guild_id ?? t.preview_guild_id,
                    I = (function (e) {
                        let t = V(e);
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
                            if ("preview_ready" === n.kind) return w.intl.string(m.default["78YNh7"]);
                        }
                        return null;
                    })(e);
                if (null == I) return;
                if (A) {
                    n && (0, s.Ak)(_, 0.4);
                    return;
                }
                let T = null == v ? null : g.BVt.CHANNEL(v, h.VV.VIBEGRATIONS, e);
                f.A.presentTurnNotification({
                    projectId: e,
                    guildId: v ?? null,
                    title: t.name,
                    body: I,
                    route: T,
                    sound: n ? _ : void 0,
                    volume: 0.4,
                });
            })(e);
    }
}
function H(e) {
    let t = I.delete(e);
    x.delete(e);
    let n = T.delete(e),
        l = E.delete(e),
        i = b.delete(e),
        r = y.delete(e),
        s = N.delete(e),
        o = S.indexOf(e);
    return -1 !== o && S.splice(o, 1), t || n || l || i || r || s || -1 !== o;
}
class q extends l.Ay.Store {
    initialize() {
        this.waitFor(r.A, u.A, a.Ay, d.A, c.A, p.A);
    }
    getMessages(e) {
        return I.get(e) ?? O;
    }
    hasPendingSettingsRequest(e) {
        let t = this.getMessages(e),
            n = t[t.length - 1];
        return null != n && "assistant" === n.role && null != n.settingsRequest;
    }
    isThinking(e) {
        return B(e);
    }
    hasLoadedHistory(e) {
        return x.has(e);
    }
    getFinishedAt(e) {
        return B(e) ? null : (T.get(e) ?? null);
    }
    getProjectUsage(e) {
        return b.get(e) ?? null;
    }
    getThinkingActivity(e) {
        return y.get(e) ?? null;
    }
    isCompacting(e) {
        return N.has(e);
    }
    getSidebarWidth() {
        return k;
    }
    getActivityOrderedProjectIds() {
        return S.slice();
    }
    isAnyThinking() {
        for (let e of I.keys()) if (this.isThinking(e)) return !0;
        return !1;
    }
}
let x = new Map();
function W(e) {
    return x.get(e) ?? null;
}
function $() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        t = new Set(),
        n = -1;
    for (let [l, i] of e.entries())
        null != i.turn_seq && t.add(i.turn_seq), -1 === n && "todos" === i.kind && null == i.task_id && (n = l);
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
let j = new q(i.h, {
    LOGOUT: function () {
        if (
            0 === I.size &&
            0 === T.size &&
            0 === E.size &&
            0 === b.size &&
            0 === y.size &&
            0 === N.size &&
            0 === S.length &&
            0 === k
        )
            return !1;
        I.clear(), T.clear(), E.clear(), b.clear(), y.clear(), N.clear(), (S.length = 0), (k = 0);
    },
    VIBEGRATIONS_CHAT_HISTORY_SET: function (e) {
        let { projectId: t, entries: n, cursor: l } = e;
        x.set(t, l ?? null), y.delete(t), N.delete(t);
        let i = new Set(),
            r = n.filter((e) => null == e.id || (!i.has(e.id) && (i.add(e.id), !0)));
        I.set(t, r.map(P)), G(t);
    },
    VIBEGRATIONS_CHAT_HISTORY_PREPEND: function (e) {
        let { projectId: t, entries: n, cursor: l } = e;
        if ((x.set(t, l), 0 === n.length)) return;
        let i = I.get(t) ?? [],
            r = n.map(P),
            s = new Set(i.flatMap((e) => (null == e.id ? [] : [e.id]))),
            o = r.filter((e) => null == e.id || !s.has(e.id));
        I.set(t, [...o, ...i]);
    },
    VIBEGRATIONS_CHAT_MESSAGE_APPEND: function (e) {
        let { projectId: t, content: n, id: l, optimisticId: i, userId: r, timestamp: s, attachments: o } = e,
            u = I.get(t) ?? [];
        if (u.some((e) => e.id === l)) return !1;
        let a = R("user", n, { ts: s, id: l, userId: r, attachments: o }),
            d = null == i ? -1 : u.findIndex((e) => e.id === i);
        if (-1 !== d) {
            (a.render_id = u[d].render_id), I.set(t, [...u.slice(0, d), a, ...u.slice(d + 1)]), G(t);
            return;
        }
        let c = [...u, a];
        D(c) || c.push(R("assistant", "")), I.set(t, c), G(t);
    },
    VIBEGRATIONS_CHAT_MESSAGE_DISPOSITION: function (e) {
        let { projectId: t, id: n, activeTurnId: l, disposition: i } = e,
            r = I.get(t);
        if (null == r) return !1;
        let s = r.findIndex((e) => e.id === n);
        if (-1 === s) return !1;
        let o = r[s].disposition === i ? r : [...r.slice(0, s), { ...r[s], disposition: i }, ...r.slice(s + 1)],
            u = "steered" === i ? M(o, l) : -1;
        if (-1 === u || u > s) return o !== r && void I.set(t, o);
        I.set(t, [
            ...o.slice(0, u),
            { ...o[u], continued: !0, finished_at: o[u].finished_at ?? Date.now() },
            ...o.slice(u + 1),
            R("assistant", "", { turnId: l }),
        ]),
            G(t);
    },
    VIBEGRATIONS_CHAT_SIDE_REPLY: function (e) {
        let { projectId: t, id: n, inReplyTo: l, content: i, timestamp: r } = e,
            s = I.get(t);
        if (null == s || s.some((e) => e.id === n)) return !1;
        let o = R("assistant", i, { ts: r, id: n });
        (o.kind = "side_reply"), (o.in_reply_to = l);
        let u = s.findIndex((e) => e.id === l);
        if (-1 === u) return void I.set(t, [...s, o]);
        let { disposition: a, ...d } = s[u];
        I.set(t, [...s.slice(0, u), d, o, ...s.slice(u + 1)]);
    },
    VIBEGRATIONS_CHAT_STEP_APPEND: function (e) {
        let { projectId: t, step: n, turnId: l } = e;
        L(t, l, (e) => {
            var t;
            let l;
            return { ...e, steps: ((t = e.steps), F((l = $(t)), n), l.steps) };
        }),
            G(t);
    },
    VIBEGRATIONS_CHAT_TURN_FINISHED: function (e) {
        let { projectId: t, summary: n, turnId: l } = e,
            i = I.get(t);
        null != i &&
            i.some((e) => null != e.disposition) &&
            I.set(
                t,
                i.map((e) => {
                    if (null == e.disposition) return e;
                    let { disposition: t, ...n } = e;
                    return n;
                }),
            ),
            L(t, l, (e) => ({
                ...e,
                finished: !0,
                finished_at: Date.now(),
                provisionalTodo: void 0,
                content: "" !== e.content ? e.content : (n ?? ""),
            })),
            B(t) || (y.delete(t), N.delete(t)),
            G(t);
    },
    VIBEGRATIONS_CHAT_INTERRUPTED: function (e) {
        let { projectId: t } = e,
            n = I.get(t);
        if (null == n) return !1;
        let l = R("assistant", "");
        (l.finished = !0), (l.finished_at = Date.now()), (l.interrupted = !0), I.set(t, [...n, l]);
    },
    VIBEGRATIONS_CHAT_PROVISIONAL_TODO: function (e) {
        let { projectId: t, turnId: n, text: l } = e;
        if (
            !(function (e, t, n) {
                let l = I.get(e);
                if (null == l) return !1;
                let i = M(l, t);
                return -1 !== i && (I.set(e, [...l.slice(0, i), n(l[i]), ...l.slice(i + 1)]), !0);
            })(t, n, (e) => ({ ...e, provisionalTodo: l }))
        )
            return !1;
    },
    VIBEGRATIONS_CHAT_THINKING_SET: function (e) {
        let { projectId: t, activity: n } = e;
        if (null == n) return !!y.delete(t) && void 0;
        let l = y.get(t);
        if (null != l && n.session === l.session && n.seq <= l.seq) return !1;
        y.set(t, n);
    },
    VIBEGRATIONS_CHAT_COMPACTING_SET: function (e) {
        let { projectId: t, compacting: n } = e;
        if (n === N.has(t)) return !1;
        n ? N.add(t) : N.delete(t);
    },
    VIBEGRATIONS_CHAT_USAGE_SET: function (e) {
        let { projectId: t, project: n } = e;
        b.set(t, n);
    },
    VIBEGRATIONS_CHAT_SIDEBAR_WIDTH_SET: function (e) {
        let { width: t } = e;
        if (k === t) return !1;
        k = t;
    },
    VIBEGRATIONS_CHAT_TURN_PATCH: function (e) {
        let { projectId: t, patch: n, turnId: l } = e;
        L(t, l, (e) => {
            let t = { ...e, ...n };
            return "todos" in n && (t.provisionalTodo = void 0), t;
        }),
            G(t);
    },
    VIBEGRATIONS_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: n } = e;
        if ("closed" !== n && "failed" !== n) return !1;
        let l = N.delete(t),
            i = y.delete(t),
            r = I.get(t);
        if (null == r || !r.some((e) => "assistant" === e.role && !v(e))) return (!!i || !!l) && void 0;
        I.set(
            t,
            r.map((e) => {
                if (null != e.disposition) {
                    let { disposition: t, ...n } = e;
                    return n;
                }
                return "assistant" !== e.role || v(e)
                    ? e
                    : {
                          ...e,
                          provisionalTodo: void 0,
                          steps: [
                              ...e.steps,
                              { type: "step", kind: "terminal_error", message: w.intl.string(m.default["wjWm+/"]) },
                          ],
                      };
            }),
        ),
            G(t);
    },
    VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        if (!H(t)) return !1;
    },
    VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function (e) {
        let t = new Set([...I.keys(), ...T.keys(), ...E.keys(), ...b.keys()]),
            n = !1;
        for (let e of t) null == p.A.getProject(e) && H(e) && (n = !0);
        if (!n) return !1;
    },
});
