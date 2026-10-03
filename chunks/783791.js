(n.d(t, { Ay: () => er, B0: () => U, BL: () => R, bi: () => Z }), n(667532), n(321073));
var i = n(17928),
    r = n(73153),
    l = n(695515),
    o = n(400492),
    s = n(885386),
    u = n(617617),
    a = n(803224),
    d = n(309010),
    c = n(967198),
    f = n(461213),
    h = n(935208),
    p = n(933294),
    _ = n(683180),
    g = n(313007),
    w = n(972786),
    E = n(652215),
    m = n(746080),
    I = n(50617),
    T = n(375708);
let A = "bit_message1",
    S = new Set(["reply", "plan_proposed", "terminal_error"]);
function R(e) {
    return (
        !0 === e.finished ||
        !0 === e.continued ||
        "" !== e.content ||
        null != e.proposal ||
        null != e.clarification ||
        null != e.intake ||
        e.steps.some((e) => S.has(e.kind))
    );
}
let v = new Map(),
    y = new Map(),
    O = new Map(),
    b = [],
    N = new Map(),
    C = new Map(),
    M = new Set(),
    P = new Map(),
    k = 0,
    B = [],
    L = 0;
function D(e, t) {
    let {
            ts: n,
            id: i,
            userId: r,
            attachments: l,
            turnId: o,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        s = i ?? `m${++L}`;
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
let G = "turn:";
function V(e) {
    let t = D(e.role, e.content, { ts: e.ts, id: e.id, userId: e.user_id, attachments: e.attachments }),
        n = (function (e) {
            let t = e?.startsWith(G) === !0 ? e.slice(G.length) : e;
            if (null == t || !/^\d+$/.test(t)) return null;
            let n = h.default.extractTimestamp(t);
            return Number.isFinite(n) && n > 0 ? n : null;
        })(e.id);
    if (
        (null != n && ("assistant" === e.role || null == e.ts) && (t.created_at = n),
        "assistant" === e.role && null != e.ts)
    ) {
        let n = Date.parse(e.ts);
        Number.isFinite(n) && (t.settled_at = n);
    }
    for (let n of (null != e.kind && (t.kind = e.kind),
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
              let t = et();
              for (let n of e) en(t, n);
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
function H(e, t) {
    return e.turn_id === t || e.id === `${G}${t}`;
}
function x(e, t) {
    if (null == t) return -1;
    for (let n = e.length - 1; n >= 0; n--) if (H(e[n], t)) return n;
    return -1;
}
function U(e, t) {
    let n = e[t],
        i = n?.turn_id;
    if (null == n || "assistant" !== n.role || null == i || "" !== n.content || R(n)) return !1;
    for (let n = t - 1; n >= 0; n--) {
        let t = e[n];
        if ("user" === t.role) break;
        if (H(t, i)) return R(t);
    }
    return !1;
}
function F(e, t) {
    let n = x(e, t);
    if (-1 !== n) return n;
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if (!("assistant" !== n.role || R(n)) && null == n.turn_id) return t;
    }
    return -1;
}
function W(e, t, n) {
    let i = v.get(e);
    if (null == i) return;
    let r = F(i, t);
    if (-1 === r) return void v.set(e, [...i, n(D("assistant", "", null != t ? { turnId: t } : {}))]);
    let l = i[r],
        o = null == t || null != l.turn_id || H(l, t) ? l : { ...l, turn_id: t };
    v.set(e, [...i.slice(0, r), n(o), ...i.slice(r + 1)]);
}
function j(e) {
    return "side_reply" === e.kind || "publish_notice" === e.kind;
}
function q(e) {
    if (null == e) return !1;
    let t = !1;
    for (let n = e.length - 1; n >= 0; n--) {
        let i = e[n];
        if (!("assistant" !== i.role || j(i)) && ((!t && ((t = !0), !R(i))) || (null != i.turn_id && !R(i)))) return !0;
    }
    return !1;
}
function $(e) {
    return q(v.get(e));
}
function J(e, t, n, i, r) {
    if (null != r) {
        if (r <= (P.get(e) ?? 0)) return;
        P.set(e, r);
    }
    if (
        p.A.areTurnNotificationsDisabled() ||
        f.A.getStatus() === E.clD.DND ||
        s.NO.getSetting() ||
        l.A.isCurrentUserInRestrictedHours() ||
        (0, g.cI)(u.A.settings, e)
    )
        return;
    let h = !a.A.isSoundDisabled("message1"),
        I = c.A.getGuildId();
    if (
        null != I &&
        w.Ay.getSelectedProjectId(I) === e &&
        d.Ay.getChannelId() === m.VV.VIBEGRATIONS &&
        p.A.isWindowFocused()
    ) {
        h && (0, o.Ak)(A, 0.4);
        return;
    }
    let T = t ?? (0, _.$X)("VibegrationsChatStore");
    p.A.presentTurnNotification({
        projectId: e,
        guildId: T,
        title: n,
        body: i,
        route: null == T ? null : E.BVt.CHANNEL(T, m.VV.VIBEGRATIONS, e),
        sound: h ? A : void 0,
        volume: 0.4,
    });
}
function z(e) {
    let t = O.get(e) ?? !1,
        n = $(e);
    if (t === n) return;
    O.set(e, n);
    let i = b.indexOf(e);
    if ((-1 !== i && b.splice(i, 1), b.unshift(e), n)) y.delete(e);
    else {
        let t;
        (null !=
            (t = (function (e) {
                let t = v.get(e);
                if (null == t) return null;
                for (let e = t.length - 1; e >= 0; e--) if ("assistant" === t[e].role && !j(t[e])) return t[e];
                return null;
            })(e)) &&
        ("" !== t.content.trim() ||
            null != t.proposal ||
            null != t.clarification ||
            null != t.intake ||
            t.steps.some((e) => S.has(e.kind) && "terminal_error" !== e.kind))
            ? y.set(e, Date.now())
            : y.delete(e),
            !(function (e) {
                let t = v.get(e);
                if (null != t)
                    for (let n = t.length - 1; n >= 0; n--) {
                        let i = t[n];
                        if ("assistant" === i.role) {
                            if (null != i.finished_at || !R(i)) return;
                            v.set(e, [...t.slice(0, n), { ...i, finished_at: Date.now() }, ...t.slice(n + 1)]);
                            return;
                        }
                    }
            })(e));
    }
}
function K(e) {
    let t = v.delete(e),
        n = X.delete(e),
        i = Y.delete(e),
        r = y.delete(e),
        l = O.delete(e),
        o = N.delete(e),
        s = C.delete(e),
        u = M.delete(e),
        a = b.indexOf(e);
    return (-1 !== a && b.splice(a, 1), t || n || i || r || l || o || s || u || -1 !== a);
}
class Q extends i.Ay.Store {
    initialize() {
        this.waitFor(l.A, a.A, d.Ay, c.A, f.A, u.A, w.Ay);
    }
    getMessages(e) {
        return v.get(e) ?? B;
    }
    hasPendingSettingsRequest(e) {
        let t = this.getMessages(e),
            n = t[t.length - 1];
        return null != n && "assistant" === n.role && null != n.settingsRequest;
    }
    isThinking(e) {
        return $(e);
    }
    hasLoadedHistory(e) {
        return X.has(e);
    }
    isHistoryUnavailable(e) {
        return Y.has(e);
    }
    getFinishedAt(e) {
        return $(e) ? null : (y.get(e) ?? null);
    }
    getProjectUsage(e) {
        return N.get(e) ?? null;
    }
    getThinkingActivity(e) {
        return C.get(e) ?? null;
    }
    isCompacting(e) {
        return M.has(e);
    }
    getSidebarWidth() {
        return k;
    }
    getActivityOrderedProjectIds() {
        return b.slice();
    }
    isAnyThinking() {
        for (let e of v.keys()) if (this.isThinking(e)) return !0;
        return !1;
    }
}
let X = new Map(),
    Y = new Set();
function Z(e) {
    return X.get(e) ?? null;
}
function ee(e) {
    let t = new Map();
    for (let n of e)
        if ("assistant" === n.role)
            for (let e of n.steps)
                "reaction" === e.kind &&
                    null != e.message_id &&
                    null != e.emoji &&
                    "" !== e.emoji &&
                    t.set(e.message_id, e.emoji);
    return 0 === t.size
        ? e
        : e.map((e) => {
              let n = "user" === e.role && null != e.id ? t.get(e.id) : void 0;
              return null == n || e.agentReaction === n ? e : { ...e, agentReaction: n };
          });
}
function et() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        t = new Set(),
        n = -1;
    for (let [i, r] of e.entries())
        (null != r.turn_seq && t.add(r.turn_seq), -1 === n && "todos" === r.kind && null == r.task_id && (n = i));
    return { steps: [...e], seenSeq: t, todosAt: n };
}
function en(e, t) {
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
function ei(e) {
    return "assistant" === e.role && !j(e) && !R(e) && !0 !== e.stopRequested;
}
let er = new Q(r.h, {
    LOGOUT: function () {
        if (
            (P.clear(),
            0 === v.size &&
                0 === y.size &&
                0 === O.size &&
                0 === N.size &&
                0 === C.size &&
                0 === M.size &&
                0 === X.size &&
                0 === Y.size &&
                0 === b.length &&
                0 === k)
        )
            return !1;
        (v.clear(),
            y.clear(),
            O.clear(),
            N.clear(),
            C.clear(),
            M.clear(),
            X.clear(),
            Y.clear(),
            (b.length = 0),
            (k = 0));
    },
    VIBEGRATIONS_CHAT_HISTORY_SET: function (e) {
        let { projectId: t, entries: n, cursor: i, degraded: r } = e;
        (X.set(t, i ?? null), !0 === r ? Y.add(t) : Y.delete(t), C.delete(t), M.delete(t));
        let l = new Set(),
            o = n.filter((e) => null == e.id || (!l.has(e.id) && (l.add(e.id), !0)));
        (v.set(t, ee(o.map(V))), z(t));
    },
    VIBEGRATIONS_CHAT_HISTORY_PREPEND: function (e) {
        let { projectId: t, entries: n, cursor: i } = e;
        if ((X.set(t, i), 0 === n.length)) return;
        let r = v.get(t) ?? [],
            l = n.map(V),
            o = new Set(r.flatMap((e) => (null == e.id ? [] : [e.id]))),
            s = l.filter((e) => null == e.id || !o.has(e.id));
        v.set(t, ee([...s, ...r]));
    },
    VIBEGRATIONS_CHAT_MESSAGE_APPEND: function (e) {
        let { projectId: t, content: n, id: i, optimisticId: r, userId: l, timestamp: o, attachments: s } = e,
            u = v.get(t) ?? [];
        if (u.some((e) => e.id === i)) return !1;
        let a = D("user", n, { ts: o, id: i, userId: l, attachments: s }),
            d = null == r ? -1 : u.findIndex((e) => e.id === r);
        if (-1 !== d) {
            ((a.render_id = u[d].render_id), v.set(t, [...u.slice(0, d), a, ...u.slice(d + 1)]), z(t));
            return;
        }
        let c = [...u, a];
        (q(c) || c.push(D("assistant", "")), v.set(t, c), z(t));
    },
    VIBEGRATIONS_CHAT_MESSAGE_DISPOSITION: function (e) {
        let { projectId: t, id: n, activeTurnId: i, disposition: r } = e,
            l = v.get(t);
        if (null == l) return !1;
        let o = l.findIndex((e) => e.id === n);
        if (-1 === o) return !1;
        let s = l[o].disposition === r ? l : [...l.slice(0, o), { ...l[o], disposition: r }, ...l.slice(o + 1)],
            u = "steered" === r ? x(s, i) : -1;
        if ("steered" === r && -1 === u && null != i) {
            let e = F(s, i);
            if (-1 !== e && e < o) {
                let n = { ...s[e], turn_id: i };
                if (0 === n.steps.length) {
                    (v.set(t, [...s.slice(0, e), ...s.slice(e + 1, o + 1), n, ...s.slice(o + 1)]), z(t));
                    return;
                }
                ((s = [...s.slice(0, e), n, ...s.slice(e + 1)]), (u = e));
            }
        }
        if (-1 === u || u > o) return s !== l && void v.set(t, s);
        (v.set(t, [
            ...s.slice(0, u),
            { ...s[u], continued: !0, finished_at: s[u].finished_at ?? Date.now() },
            ...s.slice(u + 1, o + 1),
            D("assistant", "", { turnId: i }),
            ...s.slice(o + 1),
        ]),
            z(t));
    },
    VIBEGRATIONS_CHAT_MESSAGE_REACTION: function (e) {
        let { projectId: t, id: n, emoji: i } = e,
            r = v.get(t);
        if (null == r) return !1;
        let l = r.findIndex((e) => "user" === e.role && e.id === n);
        if (-1 === l || r[l].agentReaction === i) return !1;
        v.set(t, [...r.slice(0, l), { ...r[l], agentReaction: i }, ...r.slice(l + 1)]);
    },
    VIBEGRATIONS_CHAT_SIDE_REPLY: function (e) {
        let { projectId: t, id: n, inReplyTo: i, content: r, timestamp: l } = e,
            o = v.get(t);
        if (null == o || o.some((e) => e.id === n)) return !1;
        let s = D("assistant", r, { ts: l, id: n });
        ((s.kind = "side_reply"), (s.in_reply_to = i));
        let u = o.findIndex((e) => e.id === i);
        if (-1 === u) return void v.set(t, [...o, s]);
        let { disposition: a, ...d } = o[u];
        (null != a && (s.acknowledges = a), v.set(t, [...o.slice(0, u), d, s, ...o.slice(u + 1)]));
    },
    VIBEGRATIONS_CHAT_PUBLISH_NOTICE: function (e) {
        let { projectId: t, id: n, content: i, timestamp: r, publishNotice: l } = e,
            o = v.get(t);
        if (null == o || o.some((e) => e.id === n)) return !1;
        let s = D("assistant", i, { ts: r, id: n });
        ((s.kind = "publish_notice"), (s.publishNotice = l), (s.finished = !0), v.set(t, [...o, s]));
    },
    VIBEGRATIONS_CHAT_STEP_APPEND: function (e) {
        let { projectId: t, step: n, turnId: i } = e;
        if ("preview_ready" === n.kind && null == i && !$(t)) return !1;
        (W(t, i, (e) => {
            var t;
            let i;
            return { ...e, steps: ((t = e.steps), en((i = et(t)), n), i.steps) };
        }),
            z(t));
    },
    VIBEGRATIONS_CHAT_TURN_FINISHED: function (e) {
        let { projectId: t, summary: n, turnId: i } = e,
            r = v.get(t);
        (null != r &&
            r.some((e) => null != e.disposition) &&
            v.set(
                t,
                r.map((e) => {
                    if (null == e.disposition) return e;
                    let { disposition: t, ...n } = e;
                    return n;
                }),
            ),
            W(t, i, (e) => ({
                ...e,
                finished: !0,
                finished_at: Date.now(),
                provisionalTodo: void 0,
                content: "" !== e.content ? e.content : (n ?? ""),
            })),
            $(t) || (C.delete(t), M.delete(t)),
            z(t));
    },
    VIBEGRATIONS_CHAT_INTERRUPTED: function (e) {
        let { projectId: t } = e,
            n = v.get(t);
        if (null == n) return !1;
        let i = D("assistant", "");
        ((i.finished = !0), (i.finished_at = Date.now()), (i.interrupted = !0), v.set(t, [...n, i]));
    },
    VIBEGRATIONS_CHAT_STOP_REQUESTED: function (e) {
        let { projectId: t } = e,
            n = v.get(t);
        if (null == n || !n.some(ei)) return !1;
        v.set(
            t,
            n.map((e) => (ei(e) ? { ...e, stopRequested: !0 } : e)),
        );
    },
    VIBEGRATIONS_CHAT_PROVISIONAL_TODO: function (e) {
        let { projectId: t, turnId: n, text: i } = e;
        if (
            !(function (e, t, n) {
                let i = v.get(e);
                if (null == i) return !1;
                let r = x(i, t);
                return -1 !== r && (v.set(e, [...i.slice(0, r), n(i[r]), ...i.slice(r + 1)]), !0);
            })(t, n, (e) => ({ ...e, provisionalTodo: i }))
        )
            return !1;
    },
    VIBEGRATIONS_CHAT_SOURCE_CHECKPOINT: function (e) {
        let { projectId: t, turnId: n, sourceSha: i } = e,
            r = v.get(t);
        if (null == r) return !1;
        let l = r.map((e) => ("assistant" === e.role && e.sourceSha !== i && H(e, n) ? { ...e, sourceSha: i } : e));
        if (l.every((e, t) => e === r[t])) return !1;
        v.set(t, l);
    },
    VIBEGRATIONS_CHAT_THINKING_SET: function (e) {
        let { projectId: t, activity: n } = e;
        if (null == n) return !!C.delete(t) && void 0;
        let i = C.get(t);
        if (null != i && n.session === i.session && n.seq <= i.seq) return !1;
        C.set(t, n);
    },
    VIBEGRATIONS_CHAT_COMPACTING_SET: function (e) {
        let { projectId: t, compacting: n } = e;
        if (n === M.has(t)) return !1;
        n ? M.add(t) : M.delete(t);
    },
    VIBEGRATIONS_CHAT_USAGE_SET: function (e) {
        let { projectId: t, project: n } = e;
        N.set(t, n);
    },
    VIBEGRATIONS_CHAT_SIDEBAR_WIDTH_SET: function (e) {
        let { width: t } = e;
        if (k === t) return !1;
        k = t;
    },
    VIBEGRATIONS_CHAT_TURN_PATCH: function (e) {
        let { projectId: t, patch: n, turnId: i } = e;
        (W(t, i, (e) => {
            let t = { ...e, ...n };
            return ("todos" in n && (t.provisionalTodo = void 0), t);
        }),
            z(t));
    },
    VIBEGRATIONS_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: n } = e;
        if ("closed" !== n && "failed" !== n) return !1;
        let i = M.delete(t),
            r = C.delete(t),
            l = v.get(t);
        if (null == l || !l.some((e) => "assistant" === e.role && !R(e))) return (!!r || !!i) && void 0;
        (v.set(
            t,
            l.map((e) => {
                if (null != e.disposition) {
                    let { disposition: t, ...n } = e;
                    return n;
                }
                return "assistant" !== e.role || R(e)
                    ? e
                    : {
                          ...e,
                          provisionalTodo: void 0,
                          steps: [
                              ...e.steps,
                              { type: "step", kind: "terminal_error", message: T.intl.string(I.default["wjWm+/"]) },
                          ],
                      };
            }),
        ),
            z(t));
    },
    VIBEGRATIONS_PROJECT_CREATE_SUCCESS: function (e) {
        let { project: t } = e;
        if (X.has(t.id)) return !1;
        X.set(t.id, null);
    },
    VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        if (!K(t)) return !1;
    },
    VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function (e) {
        let t = new Set([...v.keys(), ...X.keys(), ...y.keys(), ...O.keys(), ...N.keys()]),
            n = !1;
        for (let e of t) null == w.Ay.getProject(e) && K(e) && (n = !0);
        if (!n) return !1;
    },
    VIBEGRATIONS_TURN_SETTLED: function (e) {
        let { projectId: t, guildId: n, title: i, body: r, nonce: l } = e;
        return (J(t, n, i, r, l), !1);
    },
    VIBEGRATIONS_TURN_NOTIFICATION: function (e) {
        let { projectId: t, body: n, nonce: i } = e,
            r = w.Ay.getProject(t);
        return (null != r && J(t, r.guild_id ?? r.preview_guild_id ?? null, r.name, n, i), !1);
    },
});
