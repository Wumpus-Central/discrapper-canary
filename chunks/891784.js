(n(321073), n(134528), n(947204));
var i = n(811091),
    r = n(149987);
function a(e, t) {
    let {
            ts: n,
            id: i,
            userId: r,
            attachments: a,
            turnId: s,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        l = i ?? `m${++o}`;
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
function s(e) {
    var t;
    let n,
        s = a(e.role, e.content, { ts: e.ts, id: e.id, userId: e.user_id, attachments: e.attachments }),
        o =
            ((t = e.id),
            null != (n = t?.startsWith(l) === !0 ? t.slice(l.length) : t) && i.default.isProbablyAValidSnowflake(n)
                ? i.default.extractTimestamp(n)
                : null);
    if (
        (null != o && ("assistant" === e.role || null == e.ts) && (s.created_at = o),
        "assistant" === e.role && null != e.ts)
    ) {
        let t = Date.parse(e.ts);
        Number.isFinite(t) && (s.settled_at = t);
    }
    for (let t of (null != e.kind && (s.kind = e.kind),
    "interrupted" === e.kind && ((s.interrupted = !0), (s.content = ""), (s.finished = !0)),
    null != e.proposal && (s.proposal = e.proposal),
    null != e.ideas && e.ideas.length > 0 && (s.ideas = e.ideas),
    null != e.publish_cta && (s.publishCta = e.publish_cta),
    null != e.publish_notice && (s.publishNotice = e.publish_notice),
    null != e.project_event && (s.projectEvent = e.project_event),
    "context_boundary" === e.kind && (s.finished = !0),
    null != e.context_switch && (s.contextSwitch = e.context_switch),
    null != e.clarification && e.clarification.questions.length > 0 && (s.clarification = e.clarification),
    null != e.restore_proposal && (s.restoreProposal = e.restore_proposal),
    null != e.publish_schedule_proposal && (s.publishScheduleProposal = e.publish_schedule_proposal),
    null != e.app_build_request && (s.appBuildRequest = e.app_build_request),
    null != e.source_sha && (s.sourceSha = e.source_sha),
    null == e.steps && null == e.events && null != e.todos && e.todos.length > 0 && (s.todos = e.todos),
    null != e.steps
        ? (s.steps = (0, r.Zu)(e.steps))
        : null != e.events &&
          (s.steps = e.events.flatMap((e) =>
              "todos" === e.type ? [{ type: "step", kind: "todos", items: e.items }] : [],
          )),
    null != e.secret_request && e.secret_request.fields.length > 0 && (s.secretRequest = e.secret_request),
    null != e.settings_request && (s.settingsRequest = e.settings_request),
    null != e.intake && e.intake.questions.length > 0 && (s.intake = e.intake),
    e.steps ?? []))
        ("publish_schedule_proposal" === t.kind &&
            null != t.publish_schedule_proposal &&
            (s.publishScheduleProposal = t.publish_schedule_proposal),
            "awaiting_user" === t.kind && "secrets" === t.action && (s.awaitingUser = { action: t.action }));
    return s;
}
let l = "turn:",
    o = 0;
n.d(
    t,
    {},
    {
        Bd: function (e) {
            let t = e.map(s),
                n = new Map(),
                i = [];
            for (let [s, o] of t.entries()) {
                var a;
                let d =
                    ((a = e[s]),
                    "publish_notice" === a.kind
                        ? null != a.ts
                            ? o.created_at
                            : null
                        : "user" === a.role
                          ? (a.steered_at ?? null)
                          : null);
                if (null != d) {
                    i.push({ index: s, at: d });
                    continue;
                }
                if (!o.id.startsWith(l)) continue;
                let c = o.settled_at ?? -1 / 0,
                    u = i.filter((e) => o.created_at < e.at && e.at < c);
                i = [];
                let _ = [...u].sort((e, t) => e.at - t.at),
                    E = _.map((e) => e.at),
                    A =
                        0 === _.length
                            ? null
                            : (function (e, t) {
                                  if (null == e) return null;
                                  let n = [[], ...t.map(() => [])],
                                      i = 0;
                                  for (let r of e) {
                                      if (null == r.ts) return null;
                                      for (; i < t.length && t[i] <= r.ts;) i++;
                                      n[i].push(r);
                                  }
                                  return n;
                              })(e[s].steps, E);
                if (null == A || A.slice(0, -1).every((e) => 0 === e.length)) continue;
                let f = o.id.slice(l.length),
                    h = o.created_at;
                for (let [e, i] of _.entries()) {
                    let a = `${o.id}:${e}`,
                        s = {
                            id: a,
                            render_id: a,
                            role: "assistant",
                            content: "",
                            turn_id: f,
                            steps: (0, r.Zu)(A[e]),
                            created_at: h,
                            continued: !0,
                            finished_at: i.at,
                        };
                    (n.set(u[e].index, A[e].length > 0 ? [s, t[i.index]] : [t[i.index]]), (h = i.at));
                }
                t[s] = { ...o, turn_id: f, steps: (0, r.Zu)(A[_.length]), created_at: h };
            }
            return 0 === n.size ? t : t.flatMap((e, t) => n.get(t) ?? [e]);
        },
        YF: function (e) {
            let t = new Map();
            for (let n of e) null != n.contextSwitch && t.set(n.contextSwitch.id, n.contextSwitch);
            if (0 === t.size) return e;
            let n = new Set();
            return e.flatMap((e) => {
                let i = e.contextSwitch?.id;
                if (null == i) return [e];
                if (n.has(i)) return [];
                n.add(i);
                let r = t.get(i);
                return r?.status === "undone" ? [] : [r === e.contextSwitch ? e : { ...e, contextSwitch: r }];
            });
        },
        iW: a,
    },
);
