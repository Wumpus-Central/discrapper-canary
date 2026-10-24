(n.d(t, { Bd: () => u, YF: () => o, iW: () => s, o_: () => d }), n(321073), n(134528), n(947204));
var l = n(935208),
    i = n(149987);
function s(e, t) {
    let {
            ts: n,
            id: l,
            userId: i,
            attachments: s,
            turnId: r,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        u = l ?? `m${++a}`;
    return {
        id: u,
        render_id: u,
        role: e,
        content: t,
        ...(null != i ? { user_id: i } : {}),
        ...(null != r ? { turn_id: r } : {}),
        steps: [],
        created_at: null != n ? Date.parse(n) : Date.now(),
        attachments: s,
    };
}
function r(e) {
    var t;
    let n,
        r = s(e.role, e.content, { ts: e.ts, id: e.id, userId: e.user_id, attachments: e.attachments }),
        u =
            ((t = e.id),
            null != (n = t?.startsWith(d) === !0 ? t.slice(d.length) : t) && l.default.isProbablyAValidSnowflake(n)
                ? l.default.extractTimestamp(n)
                : null);
    if (
        (null != u && ("assistant" === e.role || null == e.ts) && (r.created_at = u),
        "assistant" === e.role && null != e.ts)
    ) {
        let t = Date.parse(e.ts);
        Number.isFinite(t) && (r.settled_at = t);
    }
    for (let t of (null != e.kind && (r.kind = e.kind),
    "interrupted" === e.kind && ((r.interrupted = !0), (r.content = ""), (r.finished = !0)),
    null != e.proposal && (r.proposal = e.proposal),
    null != e.ideas && e.ideas.length > 0 && (r.ideas = e.ideas),
    null != e.publish_cta && (r.publishCta = e.publish_cta),
    null != e.publish_notice && (r.publishNotice = e.publish_notice),
    null != e.project_event && (r.projectEvent = e.project_event),
    "context_boundary" === e.kind && (r.finished = !0),
    null != e.context_switch && (r.contextSwitch = e.context_switch),
    null != e.clarification && e.clarification.questions.length > 0 && (r.clarification = e.clarification),
    null != e.restore_proposal && (r.restoreProposal = e.restore_proposal),
    null != e.publish_schedule_proposal && (r.publishScheduleProposal = e.publish_schedule_proposal),
    null != e.app_build_request && (r.appBuildRequest = e.app_build_request),
    null != e.source_sha && (r.sourceSha = e.source_sha),
    null == e.steps && null == e.events && null != e.todos && e.todos.length > 0 && (r.todos = e.todos),
    null != e.steps
        ? (r.steps = (0, i.Zu)(e.steps))
        : null != e.events &&
          (r.steps = e.events.flatMap((e) =>
              "todos" === e.type ? [{ type: "step", kind: "todos", items: e.items }] : [],
          )),
    null != e.secret_request && e.secret_request.fields.length > 0 && (r.secretRequest = e.secret_request),
    null != e.settings_request && (r.settingsRequest = e.settings_request),
    null != e.intake && e.intake.questions.length > 0 && (r.intake = e.intake),
    e.steps ?? []))
        ("publish_schedule_proposal" === t.kind &&
            null != t.publish_schedule_proposal &&
            (r.publishScheduleProposal = t.publish_schedule_proposal),
            "awaiting_user" === t.kind && "secrets" === t.action && (r.awaitingUser = { action: t.action }));
    return r;
}
function u(e) {
    let t = e.map(r),
        n = new Map(),
        l = [];
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
            l.push({ index: r, at: o });
            continue;
        }
        if (!u.id.startsWith(d)) continue;
        let a = u.settled_at ?? -1 / 0,
            c = l.filter((e) => u.created_at < e.at && e.at < a);
        l = [];
        let f = [...c].sort((e, t) => e.at - t.at),
            _ = f.map((e) => e.at),
            p =
                0 === f.length
                    ? null
                    : (function (e, t) {
                          if (null == e) return null;
                          let n = [[], ...t.map(() => [])],
                              l = 0;
                          for (let i of e) {
                              if (null == i.ts) return null;
                              for (; l < t.length && t[l] <= i.ts;) l++;
                              n[l].push(i);
                          }
                          return n;
                      })(e[r].steps, _);
        if (null == p || p.slice(0, -1).every((e) => 0 === e.length)) continue;
        let h = u.id.slice(d.length),
            g = u.created_at;
        for (let [e, l] of f.entries()) {
            let s = `${u.id}:${e}`,
                r = {
                    id: s,
                    render_id: s,
                    role: "assistant",
                    content: "",
                    turn_id: h,
                    steps: (0, i.Zu)(p[e]),
                    created_at: g,
                    continued: !0,
                    finished_at: l.at,
                };
            (n.set(c[e].index, p[e].length > 0 ? [r, t[l.index]] : [t[l.index]]), (g = l.at));
        }
        t[r] = { ...u, turn_id: h, steps: (0, i.Zu)(p[f.length]), created_at: g };
    }
    return 0 === n.size ? t : t.flatMap((e, t) => n.get(t) ?? [e]);
}
function o(e) {
    let t = new Map();
    for (let n of e) null != n.contextSwitch && t.set(n.contextSwitch.id, n.contextSwitch);
    if (0 === t.size) return e;
    let n = new Set();
    return e.flatMap((e) => {
        let l = e.contextSwitch?.id;
        if (null == l) return [e];
        if (n.has(l)) return [];
        n.add(l);
        let i = t.get(l);
        return i?.status === "undone" ? [] : [i === e.contextSwitch ? e : { ...e, contextSwitch: i }];
    });
}
let d = "turn:",
    a = 0;
