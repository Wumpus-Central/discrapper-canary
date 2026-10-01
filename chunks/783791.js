(n.d(t, { Ay: () => et, B0: () => H, BL: () => A, bi: () => Y }), n(667532), n(321073));
var i = n(17928),
    r = n(73153),
    l = n(695515),
    o = n(400492),
    s = n(885386),
    u = n(803224),
    a = n(309010),
    d = n(967198),
    c = n(461213),
    f = n(935208),
    h = n(933294),
    p = n(683180),
    _ = n(972786),
    w = n(652215),
    g = n(746080),
    E = n(50617),
    m = n(375708);
let I = "bit_message1",
    T = new Set(["reply", "plan_proposed", "terminal_error"]);
function A(e) {
    return (
        !0 === e.finished ||
        !0 === e.continued ||
        "" !== e.content ||
        null != e.proposal ||
        null != e.clarification ||
        null != e.intake ||
        e.steps.some((e) => T.has(e.kind))
    );
}
let S = new Map(),
    v = new Map(),
    y = new Map(),
    R = [],
    O = new Map(),
    b = new Map(),
    N = new Set(),
    C = new Map(),
    P = 0,
    M = [],
    k = 0;
function B(e, t) {
    let {
            ts: n,
            id: i,
            userId: r,
            attachments: l,
            turnId: o,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        s = i ?? `m${++k}`;
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
let L = "turn:";
function D(e) {
    let t = B(e.role, e.content, { ts: e.ts, id: e.id, userId: e.user_id, attachments: e.attachments }),
        n = (function (e) {
            let t = e?.startsWith(L) === !0 ? e.slice(L.length) : e;
            if (null == t || !/^\d+$/.test(t)) return null;
            let n = f.default.extractTimestamp(t);
            return Number.isFinite(n) && n > 0 ? n : null;
        })(e.id);
    for (let i of (null != n && ("assistant" === e.role || null == e.ts) && (t.created_at = n),
    null != e.kind && (t.kind = e.kind),
    "interrupted" === e.kind && ((t.interrupted = !0), (t.content = ""), (t.finished = !0)),
    null != e.proposal && (t.proposal = e.proposal),
    null != e.ideas && e.ideas.length > 0 && (t.ideas = e.ideas),
    null != e.publish_cta && (t.publishCta = e.publish_cta),
    null != e.publish_notice && (t.publishNotice = e.publish_notice),
    null != e.clarification && e.clarification.questions.length > 0 && (t.clarification = e.clarification),
    null != e.restore_proposal && (t.restoreProposal = e.restore_proposal),
    null != e.source_sha && (t.sourceSha = e.source_sha),
    null == e.steps && null == e.events && null != e.todos && e.todos.length > 0 && (t.todos = e.todos),
    null != e.steps
        ? (t.steps = (function (e) {
              let t = Z();
              for (let n of e) Q(t, n);
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
        "awaiting_user" === i.kind && "secrets" === i.action && (t.awaitingUser = { action: i.action });
    return t;
}
function G(e, t) {
    return e.turn_id === t || e.id === `${L}${t}`;
}
function V(e, t) {
    if (null == t) return -1;
    for (let n = e.length - 1; n >= 0; n--) if (G(e[n], t)) return n;
    return -1;
}
function H(e, t) {
    let n = e[t],
        i = n?.turn_id;
    if (null == n || "assistant" !== n.role || null == i || "" !== n.content || A(n)) return !1;
    for (let n = t - 1; n >= 0; n--) {
        let t = e[n];
        if ("user" === t.role) break;
        if (G(t, i)) return A(t);
    }
    return !1;
}
function x(e, t) {
    let n = V(e, t);
    if (-1 !== n) return n;
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if (!("assistant" !== n.role || A(n)) && null == n.turn_id) return t;
    }
    return -1;
}
function U(e, t, n) {
    let i = S.get(e);
    if (null == i) return;
    let r = x(i, t);
    if (-1 === r) return void S.set(e, [...i, n(B("assistant", "", null != t ? { turnId: t } : {}))]);
    let l = i[r],
        o = null == t || null != l.turn_id || G(l, t) ? l : { ...l, turn_id: t };
    S.set(e, [...i.slice(0, r), n(o), ...i.slice(r + 1)]);
}
function F(e) {
    return "side_reply" === e.kind || "publish_notice" === e.kind;
}
function W(e) {
    if (null == e) return !1;
    let t = !1;
    for (let n = e.length - 1; n >= 0; n--) {
        let i = e[n];
        if (!("assistant" !== i.role || F(i)) && ((!t && ((t = !0), !A(i))) || (null != i.turn_id && !A(i)))) return !0;
    }
    return !1;
}
function j(e) {
    return W(S.get(e));
}
function q(e, t, n, i, r) {
    if (null != r) {
        if (r <= (C.get(e) ?? 0)) return;
        C.set(e, r);
    }
    if (
        h.A.areTurnNotificationsDisabled() ||
        c.A.getStatus() === w.clD.DND ||
        s.NO.getSetting() ||
        l.A.isCurrentUserInRestrictedHours()
    )
        return;
    let f = !u.A.isSoundDisabled("message1"),
        E = d.A.getGuildId();
    if (
        null != E &&
        _.Ay.getSelectedProjectId(E) === e &&
        a.Ay.getChannelId() === g.VV.VIBEGRATIONS &&
        h.A.isWindowFocused()
    ) {
        f && (0, o.Ak)(I, 0.4);
        return;
    }
    let m = t ?? (0, p.$X)("VibegrationsChatStore");
    h.A.presentTurnNotification({
        projectId: e,
        guildId: m,
        title: n,
        body: i,
        route: null == m ? null : w.BVt.CHANNEL(m, g.VV.VIBEGRATIONS, e),
        sound: f ? I : void 0,
        volume: 0.4,
    });
}
function $(e) {
    let t = y.get(e) ?? !1,
        n = j(e);
    if (t === n) return;
    y.set(e, n);
    let i = R.indexOf(e);
    if ((-1 !== i && R.splice(i, 1), R.unshift(e), n)) v.delete(e);
    else {
        let t;
        (null !=
            (t = (function (e) {
                let t = S.get(e);
                if (null == t) return null;
                for (let e = t.length - 1; e >= 0; e--) if ("assistant" === t[e].role && !F(t[e])) return t[e];
                return null;
            })(e)) &&
        ("" !== t.content.trim() ||
            null != t.proposal ||
            null != t.clarification ||
            null != t.intake ||
            t.steps.some((e) => T.has(e.kind) && "terminal_error" !== e.kind))
            ? v.set(e, Date.now())
            : v.delete(e),
            !(function (e) {
                let t = S.get(e);
                if (null != t)
                    for (let n = t.length - 1; n >= 0; n--) {
                        let i = t[n];
                        if ("assistant" === i.role) {
                            if (null != i.finished_at || !A(i)) return;
                            S.set(e, [...t.slice(0, n), { ...i, finished_at: Date.now() }, ...t.slice(n + 1)]);
                            return;
                        }
                    }
            })(e));
    }
}
function J(e) {
    let t = S.delete(e),
        n = K.delete(e),
        i = X.delete(e),
        r = v.delete(e),
        l = y.delete(e),
        o = O.delete(e),
        s = b.delete(e),
        u = N.delete(e),
        a = R.indexOf(e);
    return (-1 !== a && R.splice(a, 1), t || n || i || r || l || o || s || u || -1 !== a);
}
class z extends i.Ay.Store {
    initialize() {
        this.waitFor(l.A, u.A, a.Ay, d.A, c.A, _.Ay);
    }
    getMessages(e) {
        return S.get(e) ?? M;
    }
    hasPendingSettingsRequest(e) {
        let t = this.getMessages(e),
            n = t[t.length - 1];
        return null != n && "assistant" === n.role && null != n.settingsRequest;
    }
    isThinking(e) {
        return j(e);
    }
    hasLoadedHistory(e) {
        return K.has(e);
    }
    isHistoryUnavailable(e) {
        return X.has(e);
    }
    getFinishedAt(e) {
        return j(e) ? null : (v.get(e) ?? null);
    }
    getProjectUsage(e) {
        return O.get(e) ?? null;
    }
    getThinkingActivity(e) {
        return b.get(e) ?? null;
    }
    isCompacting(e) {
        return N.has(e);
    }
    getSidebarWidth() {
        return P;
    }
    getActivityOrderedProjectIds() {
        return R.slice();
    }
    isAnyThinking() {
        for (let e of S.keys()) if (this.isThinking(e)) return !0;
        return !1;
    }
}
let K = new Map(),
    X = new Set();
function Y(e) {
    return K.get(e) ?? null;
}
function Z() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        t = new Set(),
        n = -1;
    for (let [i, r] of e.entries())
        (null != r.turn_seq && t.add(r.turn_seq), -1 === n && "todos" === r.kind && null == r.task_id && (n = i));
    return { steps: [...e], seenSeq: t, todosAt: n };
}
function Q(e, t) {
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
function ee(e) {
    return "assistant" === e.role && !F(e) && !A(e) && !0 !== e.stopRequested;
}
let et = new z(r.h, {
    LOGOUT: function () {
        if (
            (C.clear(),
            0 === S.size &&
                0 === v.size &&
                0 === y.size &&
                0 === O.size &&
                0 === b.size &&
                0 === N.size &&
                0 === K.size &&
                0 === X.size &&
                0 === R.length &&
                0 === P)
        )
            return !1;
        (S.clear(),
            v.clear(),
            y.clear(),
            O.clear(),
            b.clear(),
            N.clear(),
            K.clear(),
            X.clear(),
            (R.length = 0),
            (P = 0));
    },
    VIBEGRATIONS_CHAT_HISTORY_SET: function (e) {
        let { projectId: t, entries: n, cursor: i, degraded: r } = e;
        (K.set(t, i ?? null), !0 === r ? X.add(t) : X.delete(t), b.delete(t), N.delete(t));
        let l = new Set(),
            o = n.filter((e) => null == e.id || (!l.has(e.id) && (l.add(e.id), !0)));
        (S.set(t, o.map(D)), $(t));
    },
    VIBEGRATIONS_CHAT_HISTORY_PREPEND: function (e) {
        let { projectId: t, entries: n, cursor: i } = e;
        if ((K.set(t, i), 0 === n.length)) return;
        let r = S.get(t) ?? [],
            l = n.map(D),
            o = new Set(r.flatMap((e) => (null == e.id ? [] : [e.id]))),
            s = l.filter((e) => null == e.id || !o.has(e.id));
        S.set(t, [...s, ...r]);
    },
    VIBEGRATIONS_CHAT_MESSAGE_APPEND: function (e) {
        let { projectId: t, content: n, id: i, optimisticId: r, userId: l, timestamp: o, attachments: s } = e,
            u = S.get(t) ?? [];
        if (u.some((e) => e.id === i)) return !1;
        let a = B("user", n, { ts: o, id: i, userId: l, attachments: s }),
            d = null == r ? -1 : u.findIndex((e) => e.id === r);
        if (-1 !== d) {
            ((a.render_id = u[d].render_id), S.set(t, [...u.slice(0, d), a, ...u.slice(d + 1)]), $(t));
            return;
        }
        let c = [...u, a];
        (W(c) || c.push(B("assistant", "")), S.set(t, c), $(t));
    },
    VIBEGRATIONS_CHAT_MESSAGE_DISPOSITION: function (e) {
        let { projectId: t, id: n, activeTurnId: i, disposition: r } = e,
            l = S.get(t);
        if (null == l) return !1;
        let o = l.findIndex((e) => e.id === n);
        if (-1 === o) return !1;
        let s = l[o].disposition === r ? l : [...l.slice(0, o), { ...l[o], disposition: r }, ...l.slice(o + 1)],
            u = "steered" === r ? V(s, i) : -1;
        if ("steered" === r && -1 === u && null != i) {
            let e = x(s, i);
            if (-1 !== e && e < o) {
                let n = { ...s[e], turn_id: i };
                if (0 === n.steps.length) {
                    (S.set(t, [...s.slice(0, e), ...s.slice(e + 1, o + 1), n, ...s.slice(o + 1)]), $(t));
                    return;
                }
                ((s = [...s.slice(0, e), n, ...s.slice(e + 1)]), (u = e));
            }
        }
        if (-1 === u || u > o) return s !== l && void S.set(t, s);
        (S.set(t, [
            ...s.slice(0, u),
            { ...s[u], continued: !0, finished_at: s[u].finished_at ?? Date.now() },
            ...s.slice(u + 1, o + 1),
            B("assistant", "", { turnId: i }),
            ...s.slice(o + 1),
        ]),
            $(t));
    },
    VIBEGRATIONS_CHAT_SIDE_REPLY: function (e) {
        let { projectId: t, id: n, inReplyTo: i, content: r, timestamp: l } = e,
            o = S.get(t);
        if (null == o || o.some((e) => e.id === n)) return !1;
        let s = B("assistant", r, { ts: l, id: n });
        ((s.kind = "side_reply"), (s.in_reply_to = i));
        let u = o.findIndex((e) => e.id === i);
        if (-1 === u) return void S.set(t, [...o, s]);
        let { disposition: a, ...d } = o[u];
        S.set(t, [...o.slice(0, u), d, s, ...o.slice(u + 1)]);
    },
    VIBEGRATIONS_CHAT_PUBLISH_NOTICE: function (e) {
        let { projectId: t, id: n, content: i, timestamp: r, publishNotice: l } = e,
            o = S.get(t);
        if (null == o || o.some((e) => e.id === n)) return !1;
        let s = B("assistant", i, { ts: r, id: n });
        ((s.kind = "publish_notice"), (s.publishNotice = l), (s.finished = !0), S.set(t, [...o, s]));
    },
    VIBEGRATIONS_CHAT_STEP_APPEND: function (e) {
        let { projectId: t, step: n, turnId: i } = e;
        (U(t, i, (e) => {
            var t;
            let i;
            return { ...e, steps: ((t = e.steps), Q((i = Z(t)), n), i.steps) };
        }),
            $(t));
    },
    VIBEGRATIONS_CHAT_TURN_FINISHED: function (e) {
        let { projectId: t, summary: n, turnId: i } = e,
            r = S.get(t);
        (null != r &&
            r.some((e) => null != e.disposition) &&
            S.set(
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
            j(t) || (b.delete(t), N.delete(t)),
            $(t));
    },
    VIBEGRATIONS_CHAT_INTERRUPTED: function (e) {
        let { projectId: t } = e,
            n = S.get(t);
        if (null == n) return !1;
        let i = B("assistant", "");
        ((i.finished = !0), (i.finished_at = Date.now()), (i.interrupted = !0), S.set(t, [...n, i]));
    },
    VIBEGRATIONS_CHAT_STOP_REQUESTED: function (e) {
        let { projectId: t } = e,
            n = S.get(t);
        if (null == n || !n.some(ee)) return !1;
        S.set(
            t,
            n.map((e) => (ee(e) ? { ...e, stopRequested: !0 } : e)),
        );
    },
    VIBEGRATIONS_CHAT_PROVISIONAL_TODO: function (e) {
        let { projectId: t, turnId: n, text: i } = e;
        if (
            !(function (e, t, n) {
                let i = S.get(e);
                if (null == i) return !1;
                let r = V(i, t);
                return -1 !== r && (S.set(e, [...i.slice(0, r), n(i[r]), ...i.slice(r + 1)]), !0);
            })(t, n, (e) => ({ ...e, provisionalTodo: i }))
        )
            return !1;
    },
    VIBEGRATIONS_CHAT_SOURCE_CHECKPOINT: function (e) {
        let { projectId: t, turnId: n, sourceSha: i } = e,
            r = S.get(t);
        if (null == r) return !1;
        let l = r.map((e) => ("assistant" === e.role && e.sourceSha !== i && G(e, n) ? { ...e, sourceSha: i } : e));
        if (l.every((e, t) => e === r[t])) return !1;
        S.set(t, l);
    },
    VIBEGRATIONS_CHAT_THINKING_SET: function (e) {
        let { projectId: t, activity: n } = e;
        if (null == n) return !!b.delete(t) && void 0;
        let i = b.get(t);
        if (null != i && n.session === i.session && n.seq <= i.seq) return !1;
        b.set(t, n);
    },
    VIBEGRATIONS_CHAT_COMPACTING_SET: function (e) {
        let { projectId: t, compacting: n } = e;
        if (n === N.has(t)) return !1;
        n ? N.add(t) : N.delete(t);
    },
    VIBEGRATIONS_CHAT_USAGE_SET: function (e) {
        let { projectId: t, project: n } = e;
        O.set(t, n);
    },
    VIBEGRATIONS_CHAT_SIDEBAR_WIDTH_SET: function (e) {
        let { width: t } = e;
        if (P === t) return !1;
        P = t;
    },
    VIBEGRATIONS_CHAT_TURN_PATCH: function (e) {
        let { projectId: t, patch: n, turnId: i } = e;
        (U(t, i, (e) => {
            let t = { ...e, ...n };
            return ("todos" in n && (t.provisionalTodo = void 0), t);
        }),
            $(t));
    },
    VIBEGRATIONS_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: n } = e;
        if ("closed" !== n && "failed" !== n) return !1;
        let i = N.delete(t),
            r = b.delete(t),
            l = S.get(t);
        if (null == l || !l.some((e) => "assistant" === e.role && !A(e))) return (!!r || !!i) && void 0;
        (S.set(
            t,
            l.map((e) => {
                if (null != e.disposition) {
                    let { disposition: t, ...n } = e;
                    return n;
                }
                return "assistant" !== e.role || A(e)
                    ? e
                    : {
                          ...e,
                          provisionalTodo: void 0,
                          steps: [
                              ...e.steps,
                              { type: "step", kind: "terminal_error", message: m.intl.string(E.default["wjWm+/"]) },
                          ],
                      };
            }),
        ),
            $(t));
    },
    VIBEGRATIONS_PROJECT_CREATE_SUCCESS: function (e) {
        let { project: t } = e;
        if (K.has(t.id)) return !1;
        K.set(t.id, null);
    },
    VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        if (!J(t)) return !1;
    },
    VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function (e) {
        let t = new Set([...S.keys(), ...K.keys(), ...v.keys(), ...y.keys(), ...O.keys()]),
            n = !1;
        for (let e of t) null == _.Ay.getProject(e) && J(e) && (n = !0);
        if (!n) return !1;
    },
    VIBEGRATIONS_TURN_SETTLED: function (e) {
        let { projectId: t, guildId: n, title: i, body: r, nonce: l } = e;
        return (q(t, n, i, r, l), !1);
    },
    VIBEGRATIONS_TURN_NOTIFICATION: function (e) {
        let { projectId: t, body: n, nonce: i } = e,
            r = _.Ay.getProject(t);
        return (null != r && q(t, r.guild_id ?? r.preview_guild_id ?? null, r.name, n, i), !1);
    },
});
