(n.d(t, { Bd: () => u, YF: () => o, iW: () => s, o_: () => d }), n(321073), n(134528), n(947204));
var i = n(935208),
    l = n(149987);
function s(e, t) {
    let {
            ts: n,
            id: i,
            userId: l,
            attachments: s,
            turnId: r,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        u = i ?? `m${++a}`;
    return {
        id: u,
        render_id: u,
        role: e,
        content: t,
        ...(null != l ? { user_id: l } : {}),
        ...(null != r ? { turn_id: r } : {}),
        steps: [],
        created_at: null != n ? Date.parse(n) : Date.now(),
        attachments: s,
    };
}
function r(e) {
    let t = s(e.role, e.content, { ts: e.ts, id: e.id, userId: e.user_id, attachments: e.attachments }),
        n = (function (e) {
            let t = e?.startsWith(d) === !0 ? e.slice(d.length) : e;
            if (null == t || !/^\d+$/.test(t)) return null;
            let n = i.default.extractTimestamp(t);
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
    null != e.project_event && (t.projectEvent = e.project_event),
    "context_boundary" === e.kind && (t.finished = !0),
    null != e.context_switch && (t.contextSwitch = e.context_switch),
    null != e.clarification && e.clarification.questions.length > 0 && (t.clarification = e.clarification),
    null != e.restore_proposal && (t.restoreProposal = e.restore_proposal),
    null != e.source_sha && (t.sourceSha = e.source_sha),
    null == e.steps && null == e.events && null != e.todos && e.todos.length > 0 && (t.todos = e.todos),
    null != e.steps
        ? (t.steps = (0, l.Zu)(e.steps))
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
function u(e) {
    let t = e.map(r),
        n = new Map(),
        i = [];
    for (let [r, u] of t.entries()) {
        var s;
        let o =
            ((s = e[r]),
            "publish_notice" === s.kind
                ? null != s.ts
                    ? u.created_at
                    : null
                : "user" === s.role
                  ? (s.steered_at ?? null)
                  : null);
        if (null != o) {
            i.push({ index: r, at: o });
            continue;
        }
        if (!u.id.startsWith(d)) continue;
        let a = u.settled_at ?? -1 / 0,
            f = i.filter((e) => u.created_at < e.at && e.at < a);
        i = [];
        let c = [...f].sort((e, t) => e.at - t.at),
            _ = c.map((e) => e.at),
            p =
                0 === c.length
                    ? null
                    : (function (e, t) {
                          if (null == e) return null;
                          let n = [[], ...t.map(() => [])],
                              i = 0;
                          for (let l of e) {
                              if (null == l.ts) return null;
                              for (; i < t.length && t[i] <= l.ts;) i++;
                              n[i].push(l);
                          }
                          return n;
                      })(e[r].steps, _);
        if (null == p || p.slice(0, -1).every((e) => 0 === e.length)) continue;
        let h = u.id.slice(d.length),
            g = u.created_at;
        for (let [e, i] of c.entries()) {
            let s = `${u.id}:${e}`,
                r = {
                    id: s,
                    render_id: s,
                    role: "assistant",
                    content: "",
                    turn_id: h,
                    steps: (0, l.Zu)(p[e]),
                    created_at: g,
                    continued: !0,
                    finished_at: i.at,
                };
            (n.set(f[e].index, p[e].length > 0 ? [r, t[i.index]] : [t[i.index]]), (g = i.at));
        }
        t[r] = { ...u, turn_id: h, steps: (0, l.Zu)(p[c.length]), created_at: g };
    }
    return 0 === n.size ? t : t.flatMap((e, t) => n.get(t) ?? [e]);
}
function o(e) {
    let t = new Map();
    for (let n of e) null != n.contextSwitch && t.set(n.contextSwitch.id, n.contextSwitch);
    if (0 === t.size) return e;
    let n = new Set();
    return e.flatMap((e) => {
        let i = e.contextSwitch?.id;
        if (null == i) return [e];
        if (n.has(i)) return [];
        n.add(i);
        let l = t.get(i);
        return l?.status === "undone" ? [] : [l === e.contextSwitch ? e : { ...e, contextSwitch: l }];
    });
}
let d = "turn:",
    a = 0;
