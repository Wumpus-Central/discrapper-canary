(n.d(t, { Ay: () => X, BL: () => A, bi: () => $ }), n(667532), n(321073));
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
    _ = n(683180),
    p = n(972786),
    g = n(652215),
    w = n(746080),
    E = n(50617),
    T = n(375708);
let I = "bit_message1",
    m = new Set(["reply", "plan_proposed", "terminal_error"]);
function A(e) {
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
let S = new Map(),
    R = new Map(),
    O = new Map(),
    y = [],
    v = new Map(),
    b = new Map(),
    C = new Set(),
    N = 0,
    P = [],
    k = 0;
function M(e, t) {
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
let B = "turn:";
function L(e) {
    let t = M(e.role, e.content, { ts: e.ts, id: e.id, userId: e.user_id, attachments: e.attachments }),
        n = (function (e) {
            let t = e?.startsWith(B) === !0 ? e.slice(B.length) : e;
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
              let t = z();
              for (let n of e) K(t, n);
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
    if (null == t) return -1;
    for (let n = e.length - 1; n >= 0; n--) if (e[n].turn_id === t) return n;
    return -1;
}
function D(e, t) {
    let n = G(e, t);
    if (-1 !== n) return n;
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if (!("assistant" !== n.role || A(n)) && null == n.turn_id) return t;
    }
    return -1;
}
function V(e, t, n) {
    let i = S.get(e);
    if (null == i) return;
    let r = D(i, t);
    if (-1 === r) return void S.set(e, [...i, n(M("assistant", "", null != t ? { turnId: t } : {}))]);
    let l = i[r],
        o = null != t && null == l.turn_id ? { ...l, turn_id: t } : l;
    S.set(e, [...i.slice(0, r), n(o), ...i.slice(r + 1)]);
}
function H(e) {
    return "side_reply" === e.kind || "publish_notice" === e.kind;
}
function U(e) {
    if (null == e) return !1;
    let t = !1;
    for (let n = e.length - 1; n >= 0; n--) {
        let i = e[n];
        if (!("assistant" !== i.role || H(i)) && ((!t && ((t = !0), !A(i))) || (null != i.turn_id && !A(i)))) return !0;
    }
    return !1;
}
function x(e) {
    return U(S.get(e));
}
function F(e) {
    let t = O.get(e) ?? !1,
        n = x(e);
    if (t === n) return;
    O.set(e, n);
    let i = y.indexOf(e);
    if ((-1 !== i && y.splice(i, 1), y.unshift(e), n)) R.delete(e);
    else {
        let t;
        (null !=
            (t = (function (e) {
                let t = S.get(e);
                if (null == t) return null;
                for (let e = t.length - 1; e >= 0; e--) if ("assistant" === t[e].role && !H(t[e])) return t[e];
                return null;
            })(e)) &&
        ("" !== t.content.trim() ||
            null != t.proposal ||
            null != t.clarification ||
            null != t.intake ||
            t.steps.some((e) => m.has(e.kind) && "terminal_error" !== e.kind))
            ? R.set(e, Date.now())
            : R.delete(e),
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
function j(e) {
    let t = S.delete(e),
        n = q.delete(e),
        i = J.delete(e),
        r = R.delete(e),
        l = O.delete(e),
        o = v.delete(e),
        s = b.delete(e),
        u = C.delete(e),
        a = y.indexOf(e);
    return (-1 !== a && y.splice(a, 1), t || n || i || r || l || o || s || u || -1 !== a);
}
class W extends i.Ay.Store {
    initialize() {
        this.waitFor(l.A, u.A, a.Ay, d.A, c.A, p.Ay);
    }
    getMessages(e) {
        return S.get(e) ?? P;
    }
    hasPendingSettingsRequest(e) {
        let t = this.getMessages(e),
            n = t[t.length - 1];
        return null != n && "assistant" === n.role && null != n.settingsRequest;
    }
    isThinking(e) {
        return x(e);
    }
    hasLoadedHistory(e) {
        return q.has(e);
    }
    isHistoryUnavailable(e) {
        return J.has(e);
    }
    getFinishedAt(e) {
        return x(e) ? null : (R.get(e) ?? null);
    }
    getProjectUsage(e) {
        return v.get(e) ?? null;
    }
    getThinkingActivity(e) {
        return b.get(e) ?? null;
    }
    isCompacting(e) {
        return C.has(e);
    }
    getSidebarWidth() {
        return N;
    }
    getActivityOrderedProjectIds() {
        return y.slice();
    }
    isAnyThinking() {
        for (let e of S.keys()) if (this.isThinking(e)) return !0;
        return !1;
    }
}
let q = new Map(),
    J = new Set();
function $(e) {
    return q.get(e) ?? null;
}
function z() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        t = new Set(),
        n = -1;
    for (let [i, r] of e.entries())
        (null != r.turn_seq && t.add(r.turn_seq), -1 === n && "todos" === r.kind && null == r.task_id && (n = i));
    return { steps: [...e], seenSeq: t, todosAt: n };
}
function K(e, t) {
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
function Y(e) {
    return "assistant" === e.role && !H(e) && !A(e) && !0 !== e.stopRequested;
}
let X = new W(r.h, {
    LOGOUT: function () {
        if (
            0 === S.size &&
            0 === R.size &&
            0 === O.size &&
            0 === v.size &&
            0 === b.size &&
            0 === C.size &&
            0 === q.size &&
            0 === J.size &&
            0 === y.length &&
            0 === N
        )
            return !1;
        (S.clear(),
            R.clear(),
            O.clear(),
            v.clear(),
            b.clear(),
            C.clear(),
            q.clear(),
            J.clear(),
            (y.length = 0),
            (N = 0));
    },
    VIBEGRATIONS_CHAT_HISTORY_SET: function (e) {
        let { projectId: t, entries: n, cursor: i, degraded: r } = e;
        (q.set(t, i ?? null), !0 === r ? J.add(t) : J.delete(t), b.delete(t), C.delete(t));
        let l = new Set(),
            o = n.filter((e) => null == e.id || (!l.has(e.id) && (l.add(e.id), !0)));
        (S.set(t, o.map(L)), F(t));
    },
    VIBEGRATIONS_CHAT_HISTORY_PREPEND: function (e) {
        let { projectId: t, entries: n, cursor: i } = e;
        if ((q.set(t, i), 0 === n.length)) return;
        let r = S.get(t) ?? [],
            l = n.map(L),
            o = new Set(r.flatMap((e) => (null == e.id ? [] : [e.id]))),
            s = l.filter((e) => null == e.id || !o.has(e.id));
        S.set(t, [...s, ...r]);
    },
    VIBEGRATIONS_CHAT_MESSAGE_APPEND: function (e) {
        let { projectId: t, content: n, id: i, optimisticId: r, userId: l, timestamp: o, attachments: s } = e,
            u = S.get(t) ?? [];
        if (u.some((e) => e.id === i)) return !1;
        let a = M("user", n, { ts: o, id: i, userId: l, attachments: s }),
            d = null == r ? -1 : u.findIndex((e) => e.id === r);
        if (-1 !== d) {
            ((a.render_id = u[d].render_id), S.set(t, [...u.slice(0, d), a, ...u.slice(d + 1)]), F(t));
            return;
        }
        let c = [...u, a];
        (U(c) || c.push(M("assistant", "")), S.set(t, c), F(t));
    },
    VIBEGRATIONS_CHAT_MESSAGE_DISPOSITION: function (e) {
        let { projectId: t, id: n, activeTurnId: i, disposition: r } = e,
            l = S.get(t);
        if (null == l) return !1;
        let o = l.findIndex((e) => e.id === n);
        if (-1 === o) return !1;
        let s = l[o].disposition === r ? l : [...l.slice(0, o), { ...l[o], disposition: r }, ...l.slice(o + 1)],
            u = "steered" === r ? G(s, i) : -1;
        if ("steered" === r && -1 === u && null != i) {
            let e = D(s, i);
            if (-1 !== e && e < o) {
                let n = { ...s[e], turn_id: i };
                if (0 === n.steps.length) {
                    (S.set(t, [...s.slice(0, e), ...s.slice(e + 1, o + 1), n, ...s.slice(o + 1)]), F(t));
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
            M("assistant", "", { turnId: i }),
            ...s.slice(o + 1),
        ]),
            F(t));
    },
    VIBEGRATIONS_CHAT_SIDE_REPLY: function (e) {
        let { projectId: t, id: n, inReplyTo: i, content: r, timestamp: l } = e,
            o = S.get(t);
        if (null == o || o.some((e) => e.id === n)) return !1;
        let s = M("assistant", r, { ts: l, id: n });
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
        let s = M("assistant", i, { ts: r, id: n });
        ((s.kind = "publish_notice"), (s.publishNotice = l), (s.finished = !0), S.set(t, [...o, s]));
    },
    VIBEGRATIONS_CHAT_STEP_APPEND: function (e) {
        let { projectId: t, step: n, turnId: i } = e;
        (V(t, i, (e) => {
            var t;
            let i;
            return { ...e, steps: ((t = e.steps), K((i = z(t)), n), i.steps) };
        }),
            F(t));
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
            V(t, i, (e) => ({
                ...e,
                finished: !0,
                finished_at: Date.now(),
                provisionalTodo: void 0,
                content: "" !== e.content ? e.content : (n ?? ""),
            })),
            x(t) || (b.delete(t), C.delete(t)),
            F(t));
    },
    VIBEGRATIONS_CHAT_INTERRUPTED: function (e) {
        let { projectId: t } = e,
            n = S.get(t);
        if (null == n) return !1;
        let i = M("assistant", "");
        ((i.finished = !0), (i.finished_at = Date.now()), (i.interrupted = !0), S.set(t, [...n, i]));
    },
    VIBEGRATIONS_CHAT_STOP_REQUESTED: function (e) {
        let { projectId: t } = e,
            n = S.get(t);
        if (null == n || !n.some(Y)) return !1;
        S.set(
            t,
            n.map((e) => (Y(e) ? { ...e, stopRequested: !0 } : e)),
        );
    },
    VIBEGRATIONS_CHAT_PROVISIONAL_TODO: function (e) {
        let { projectId: t, turnId: n, text: i } = e;
        if (
            !(function (e, t, n) {
                let i = S.get(e);
                if (null == i) return !1;
                let r = G(i, t);
                return -1 !== r && (S.set(e, [...i.slice(0, r), n(i[r]), ...i.slice(r + 1)]), !0);
            })(t, n, (e) => ({ ...e, provisionalTodo: i }))
        )
            return !1;
    },
    VIBEGRATIONS_CHAT_SOURCE_CHECKPOINT: function (e) {
        let { projectId: t, turnId: n, sourceSha: i } = e,
            r = S.get(t);
        if (null == r) return !1;
        let l = r.map((e) =>
            "assistant" !== e.role || e.sourceSha === i || (e.turn_id !== n && e.id !== `turn:${n}`)
                ? e
                : { ...e, sourceSha: i },
        );
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
        if (n === C.has(t)) return !1;
        n ? C.add(t) : C.delete(t);
    },
    VIBEGRATIONS_CHAT_USAGE_SET: function (e) {
        let { projectId: t, project: n } = e;
        v.set(t, n);
    },
    VIBEGRATIONS_CHAT_SIDEBAR_WIDTH_SET: function (e) {
        let { width: t } = e;
        if (N === t) return !1;
        N = t;
    },
    VIBEGRATIONS_CHAT_TURN_PATCH: function (e) {
        let { projectId: t, patch: n, turnId: i } = e;
        (V(t, i, (e) => {
            let t = { ...e, ...n };
            return ("todos" in n && (t.provisionalTodo = void 0), t);
        }),
            F(t));
    },
    VIBEGRATIONS_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: n } = e;
        if ("closed" !== n && "failed" !== n) return !1;
        let i = C.delete(t),
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
                              { type: "step", kind: "terminal_error", message: T.intl.string(E.default["wjWm+/"]) },
                          ],
                      };
            }),
        ),
            F(t));
    },
    VIBEGRATIONS_PROJECT_CREATE_SUCCESS: function (e) {
        let { project: t } = e;
        if (q.has(t.id)) return !1;
        q.set(t.id, null);
    },
    VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        if (!j(t)) return !1;
    },
    VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function (e) {
        let t = new Set([...S.keys(), ...q.keys(), ...R.keys(), ...O.keys(), ...v.keys()]),
            n = !1;
        for (let e of t) null == p.Ay.getProject(e) && j(e) && (n = !0);
        if (!n) return !1;
    },
    VIBEGRATIONS_TURN_SETTLED: function (e) {
        let { projectId: t, guildId: n, title: i, body: r } = e;
        if (
            h.A.areTurnNotificationsDisabled() ||
            c.A.getStatus() === g.clD.DND ||
            s.NO.getSetting() ||
            l.A.isCurrentUserInRestrictedHours()
        )
            return !1;
        let f = !u.A.isSoundDisabled("message1"),
            E = d.A.getGuildId();
        if (
            null != E &&
            p.Ay.getSelectedProjectId(E) === t &&
            a.Ay.getChannelId() === w.VV.VIBEGRATIONS &&
            h.A.isWindowFocused()
        )
            return (f && (0, o.Ak)(I, 0.4), !1);
        let T = n ?? (0, _.$X)("VibegrationsChatStore");
        return (
            h.A.presentTurnNotification({
                projectId: t,
                guildId: T,
                title: i,
                body: r,
                route: null == T ? null : g.BVt.CHANNEL(T, w.VV.VIBEGRATIONS, t),
                sound: f ? I : void 0,
                volume: 0.4,
            }),
            !1
        );
    },
});
