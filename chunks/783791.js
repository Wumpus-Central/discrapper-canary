(n.d(t, { Ay: () => J, BL: () => T, bi: () => W }), n(667532), n(321073));
var r = n(17928),
    i = n(228366),
    l = n(695515),
    o = n(400492),
    s = n(885386),
    u = n(803224),
    a = n(309010),
    d = n(967198),
    c = n(461213),
    f = n(933294),
    h = n(972786),
    p = n(652215),
    _ = n(746080),
    g = n(50617),
    w = n(375708);
let E = "bit_message1",
    m = new Set(["reply", "plan_proposed", "terminal_error"]);
function T(e) {
    return (
        !0 === e.finished ||
        !0 === e.continued ||
        "" !== e.content ||
        null != e.proposal ||
        null != e.clarification ||
        null != e.intake ||
        e.steps.some((e) => m.has(e.kind))
    );
}
let I = new Map(),
    A = new Map(),
    S = new Map(),
    R = [],
    y = new Map(),
    v = new Map(),
    O = new Set(),
    b = 0,
    k = [],
    C = 0;
function N(e, t) {
    let {
            ts: n,
            id: r,
            userId: i,
            attachments: l,
            turnId: o,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        s = r ?? `m${++C}`;
    return {
        id: s,
        render_id: s,
        role: e,
        content: t,
        ...(null != i ? { user_id: i } : {}),
        ...(null != o ? { turn_id: o } : {}),
        steps: [],
        created_at: null != n ? Date.parse(n) : Date.now(),
        attachments: l,
    };
}
function P(e) {
    let t = N(e.role, e.content, { ts: e.ts, id: e.id, userId: e.user_id, attachments: e.attachments });
    for (let n of (null != e.kind && (t.kind = e.kind),
    "interrupted" === e.kind && ((t.interrupted = !0), (t.content = ""), (t.finished = !0)),
    null != e.proposal && (t.proposal = e.proposal),
    null != e.ideas && e.ideas.length > 0 && (t.ideas = e.ideas),
    null != e.clarification && e.clarification.questions.length > 0 && (t.clarification = e.clarification),
    null != e.restore_proposal && (t.restoreProposal = e.restore_proposal),
    null != e.source_sha && (t.sourceSha = e.source_sha),
    null == e.steps && null == e.events && null != e.todos && e.todos.length > 0 && (t.todos = e.todos),
    null != e.steps
        ? (t.steps = (function (e) {
              let t = j();
              for (let n of e) q(t, n);
              return t.steps;
          })(e.steps))
        : null != e.events &&
          (t.steps = e.events.flatMap((e) =>
              "todos" === e.type ? [{ type: "step", kind: "todos", items: e.items }] : [],
          )),
    null != e.secret_request && e.secret_request.fields.length > 0 && (t.secretRequest = e.secret_request),
    null != e.settings_request && (t.settingsRequest = e.settings_request),
    null != e.intake && e.intake.questions.length > 0 && (t.intake = e.intake),
    e.steps ?? []))
        "awaiting_user" === n.kind && "secrets" === n.action && (t.awaitingUser = { action: n.action });
    return t;
}
function M(e, t) {
    if (null == t) return -1;
    for (let n = e.length - 1; n >= 0; n--) if (e[n].turn_id === t) return n;
    return -1;
}
function B(e, t, n) {
    let r = I.get(e);
    if (null == r) return;
    let i = (function (e, t) {
        let n = M(e, t);
        if (-1 !== n) return n;
        for (let t = e.length - 1; t >= 0; t--) {
            let n = e[t];
            if (!("assistant" !== n.role || T(n)) && null == n.turn_id) return t;
        }
        return -1;
    })(r, t);
    if (-1 === i) return void I.set(e, [...r, n(N("assistant", "", null != t ? { turnId: t } : {}))]);
    let l = r[i],
        o = null != t && null == l.turn_id ? { ...l, turn_id: t } : l;
    I.set(e, [...r.slice(0, i), n(o), ...r.slice(i + 1)]);
}
function L(e) {
    if (null == e) return !1;
    let t = !1;
    for (let n = e.length - 1; n >= 0; n--) {
        let r = e[n];
        if (
            "assistant" === r.role &&
            "side_reply" !== r.kind &&
            ((!t && ((t = !0), !T(r))) || (null != r.turn_id && !T(r)))
        )
            return !0;
    }
    return !1;
}
function D(e) {
    return L(I.get(e));
}
function G(e) {
    let t = I.get(e);
    if (null == t) return null;
    for (let e = t.length - 1; e >= 0; e--) if ("assistant" === t[e].role && "side_reply" !== t[e].kind) return t[e];
    return null;
}
function V(e) {
    let t = S.get(e) ?? !1,
        n = D(e);
    if (t === n) return;
    S.set(e, n);
    let r = R.indexOf(e);
    if ((-1 !== r && R.splice(r, 1), R.unshift(e), n)) A.delete(e);
    else {
        let t;
        (null != (t = G(e)) &&
        ("" !== t.content.trim() ||
            null != t.proposal ||
            null != t.clarification ||
            null != t.intake ||
            t.steps.some((e) => m.has(e.kind) && "terminal_error" !== e.kind))
            ? A.set(e, Date.now())
            : A.delete(e),
            (function (e) {
                let t = I.get(e);
                if (null != t)
                    for (let n = t.length - 1; n >= 0; n--) {
                        let r = t[n];
                        if ("assistant" === r.role) {
                            if (null != r.finished_at || !T(r)) return;
                            I.set(e, [...t.slice(0, n), { ...r, finished_at: Date.now() }, ...t.slice(n + 1)]);
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
                    s.NO.getSetting() ||
                    l.A.isCurrentUserInRestrictedHours()
                )
                    return;
                let n = !u.A.isSoundDisabled("message1"),
                    r = d.A.getGuildId(),
                    i = null != r && h.Ay.getSelectedProjectId(r) === e ? r : null,
                    m = null != i && a.Ay.getChannelId() === _.VV.VIBEGRATIONS && f.A.isWindowFocused(),
                    T = i ?? t.guild_id ?? t.preview_guild_id,
                    I = (function (e) {
                        let t = G(e);
                        if (null == t) return null;
                        if ("" !== t.content.trim()) return t.content;
                        if (null != t.proposal) return t.proposal.summary;
                        if (null != t.clarification) return t.clarification.questions[0]?.question ?? null;
                        if (null != t.intake) return t.intake.intro.lead;
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
                if (null == I) return;
                if (m) {
                    n && (0, o.Ak)(E, 0.4);
                    return;
                }
                let A = null == T ? null : p.BVt.CHANNEL(T, _.VV.VIBEGRATIONS, e);
                f.A.presentTurnNotification({
                    projectId: e,
                    guildId: T ?? null,
                    title: t.name,
                    body: I,
                    route: A,
                    sound: n ? E : void 0,
                    volume: 0.4,
                });
            })(e));
    }
}
function H(e) {
    let t = I.delete(e),
        n = U.delete(e),
        r = F.delete(e),
        i = A.delete(e),
        l = S.delete(e),
        o = y.delete(e),
        s = v.delete(e),
        u = O.delete(e),
        a = R.indexOf(e);
    return (-1 !== a && R.splice(a, 1), t || n || r || i || l || o || s || u || -1 !== a);
}
class x extends r.Ay.Store {
    initialize() {
        this.waitFor(l.A, u.A, a.Ay, d.A, c.A, h.Ay);
    }
    getMessages(e) {
        return I.get(e) ?? k;
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
    isHistoryUnavailable(e) {
        return F.has(e);
    }
    getFinishedAt(e) {
        return D(e) ? null : (A.get(e) ?? null);
    }
    getProjectUsage(e) {
        return y.get(e) ?? null;
    }
    getThinkingActivity(e) {
        return v.get(e) ?? null;
    }
    isCompacting(e) {
        return O.has(e);
    }
    getSidebarWidth() {
        return b;
    }
    getActivityOrderedProjectIds() {
        return R.slice();
    }
    isAnyThinking() {
        for (let e of I.keys()) if (this.isThinking(e)) return !0;
        return !1;
    }
}
let U = new Map(),
    F = new Set();
function W(e) {
    return U.get(e) ?? null;
}
function j() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        t = new Set(),
        n = -1;
    for (let [r, i] of e.entries())
        (null != i.turn_seq && t.add(i.turn_seq), -1 === n && "todos" === i.kind && null == i.task_id && (n = r));
    return { steps: [...e], seenSeq: t, todosAt: n };
}
function q(e, t) {
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
function $(e) {
    return "assistant" === e.role && "side_reply" !== e.kind && !T(e) && !0 !== e.stopRequested;
}
let J = new x(i.h, {
    LOGOUT: function () {
        if (
            0 === I.size &&
            0 === A.size &&
            0 === S.size &&
            0 === y.size &&
            0 === v.size &&
            0 === O.size &&
            0 === U.size &&
            0 === F.size &&
            0 === R.length &&
            0 === b
        )
            return !1;
        (I.clear(),
            A.clear(),
            S.clear(),
            y.clear(),
            v.clear(),
            O.clear(),
            U.clear(),
            F.clear(),
            (R.length = 0),
            (b = 0));
    },
    VIBEGRATIONS_CHAT_HISTORY_SET: function (e) {
        let { projectId: t, entries: n, cursor: r, degraded: i } = e;
        (U.set(t, r ?? null), !0 === i ? F.add(t) : F.delete(t), v.delete(t), O.delete(t));
        let l = new Set(),
            o = n.filter((e) => null == e.id || (!l.has(e.id) && (l.add(e.id), !0)));
        (I.set(t, o.map(P)), V(t));
    },
    VIBEGRATIONS_CHAT_HISTORY_PREPEND: function (e) {
        let { projectId: t, entries: n, cursor: r } = e;
        if ((U.set(t, r), 0 === n.length)) return;
        let i = I.get(t) ?? [],
            l = n.map(P),
            o = new Set(i.flatMap((e) => (null == e.id ? [] : [e.id]))),
            s = l.filter((e) => null == e.id || !o.has(e.id));
        I.set(t, [...s, ...i]);
    },
    VIBEGRATIONS_CHAT_MESSAGE_APPEND: function (e) {
        let { projectId: t, content: n, id: r, optimisticId: i, userId: l, timestamp: o, attachments: s } = e,
            u = I.get(t) ?? [];
        if (u.some((e) => e.id === r)) return !1;
        let a = N("user", n, { ts: o, id: r, userId: l, attachments: s }),
            d = null == i ? -1 : u.findIndex((e) => e.id === i);
        if (-1 !== d) {
            ((a.render_id = u[d].render_id), I.set(t, [...u.slice(0, d), a, ...u.slice(d + 1)]), V(t));
            return;
        }
        let c = [...u, a];
        (L(c) || c.push(N("assistant", "")), I.set(t, c), V(t));
    },
    VIBEGRATIONS_CHAT_MESSAGE_DISPOSITION: function (e) {
        let { projectId: t, id: n, activeTurnId: r, disposition: i } = e,
            l = I.get(t);
        if (null == l) return !1;
        let o = l.findIndex((e) => e.id === n);
        if (-1 === o) return !1;
        let s = l[o].disposition === i ? l : [...l.slice(0, o), { ...l[o], disposition: i }, ...l.slice(o + 1)],
            u = "steered" === i ? M(s, r) : -1;
        if (-1 === u || u > o) return s !== l && void I.set(t, s);
        (I.set(t, [
            ...s.slice(0, u),
            { ...s[u], continued: !0, finished_at: s[u].finished_at ?? Date.now() },
            ...s.slice(u + 1),
            N("assistant", "", { turnId: r }),
        ]),
            V(t));
    },
    VIBEGRATIONS_CHAT_SIDE_REPLY: function (e) {
        let { projectId: t, id: n, inReplyTo: r, content: i, timestamp: l } = e,
            o = I.get(t);
        if (null == o || o.some((e) => e.id === n)) return !1;
        let s = N("assistant", i, { ts: l, id: n });
        ((s.kind = "side_reply"), (s.in_reply_to = r));
        let u = o.findIndex((e) => e.id === r);
        if (-1 === u) return void I.set(t, [...o, s]);
        let { disposition: a, ...d } = o[u];
        I.set(t, [...o.slice(0, u), d, s, ...o.slice(u + 1)]);
    },
    VIBEGRATIONS_CHAT_STEP_APPEND: function (e) {
        let { projectId: t, step: n, turnId: r } = e;
        (B(t, r, (e) => {
            var t;
            let r;
            return { ...e, steps: ((t = e.steps), q((r = j(t)), n), r.steps) };
        }),
            V(t));
    },
    VIBEGRATIONS_CHAT_TURN_FINISHED: function (e) {
        let { projectId: t, summary: n, turnId: r } = e,
            i = I.get(t);
        (null != i &&
            i.some((e) => null != e.disposition) &&
            I.set(
                t,
                i.map((e) => {
                    if (null == e.disposition) return e;
                    let { disposition: t, ...n } = e;
                    return n;
                }),
            ),
            B(t, r, (e) => ({
                ...e,
                finished: !0,
                finished_at: Date.now(),
                provisionalTodo: void 0,
                content: "" !== e.content ? e.content : (n ?? ""),
            })),
            D(t) || (v.delete(t), O.delete(t)),
            V(t));
    },
    VIBEGRATIONS_CHAT_INTERRUPTED: function (e) {
        let { projectId: t } = e,
            n = I.get(t);
        if (null == n) return !1;
        let r = N("assistant", "");
        ((r.finished = !0), (r.finished_at = Date.now()), (r.interrupted = !0), I.set(t, [...n, r]));
    },
    VIBEGRATIONS_CHAT_STOP_REQUESTED: function (e) {
        let { projectId: t } = e,
            n = I.get(t);
        if (null == n || !n.some($)) return !1;
        I.set(
            t,
            n.map((e) => ($(e) ? { ...e, stopRequested: !0 } : e)),
        );
    },
    VIBEGRATIONS_CHAT_PROVISIONAL_TODO: function (e) {
        let { projectId: t, turnId: n, text: r } = e;
        if (
            !(function (e, t, n) {
                let r = I.get(e);
                if (null == r) return !1;
                let i = M(r, t);
                return -1 !== i && (I.set(e, [...r.slice(0, i), n(r[i]), ...r.slice(i + 1)]), !0);
            })(t, n, (e) => ({ ...e, provisionalTodo: r }))
        )
            return !1;
    },
    VIBEGRATIONS_CHAT_SOURCE_CHECKPOINT: function (e) {
        let { projectId: t, turnId: n, sourceSha: r } = e,
            i = I.get(t);
        if (null == i) return !1;
        let l = i.map((e) =>
            "assistant" !== e.role || e.sourceSha === r || (e.turn_id !== n && e.id !== `turn:${n}`)
                ? e
                : { ...e, sourceSha: r },
        );
        if (l.every((e, t) => e === i[t])) return !1;
        I.set(t, l);
    },
    VIBEGRATIONS_CHAT_THINKING_SET: function (e) {
        let { projectId: t, activity: n } = e;
        if (null == n) return !!v.delete(t) && void 0;
        let r = v.get(t);
        if (null != r && n.session === r.session && n.seq <= r.seq) return !1;
        v.set(t, n);
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
        let { projectId: t, patch: n, turnId: r } = e;
        (B(t, r, (e) => {
            let t = { ...e, ...n };
            return ("todos" in n && (t.provisionalTodo = void 0), t);
        }),
            V(t));
    },
    VIBEGRATIONS_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: n } = e;
        if ("closed" !== n && "failed" !== n) return !1;
        let r = O.delete(t),
            i = v.delete(t),
            l = I.get(t);
        if (null == l || !l.some((e) => "assistant" === e.role && !T(e))) return (!!i || !!r) && void 0;
        (I.set(
            t,
            l.map((e) => {
                if (null != e.disposition) {
                    let { disposition: t, ...n } = e;
                    return n;
                }
                return "assistant" !== e.role || T(e)
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
    VIBEGRATIONS_PROJECT_CREATE_SUCCESS: function (e) {
        let { project: t } = e;
        if (U.has(t.id)) return !1;
        U.set(t.id, null);
    },
    VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        if (!H(t)) return !1;
    },
    VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function (e) {
        let t = new Set([...I.keys(), ...U.keys(), ...A.keys(), ...S.keys(), ...y.keys()]),
            n = !1;
        for (let e of t) null == h.Ay.getProject(e) && H(e) && (n = !0);
        if (!n) return !1;
    },
});
