n.d(t, { Gu: () => _, NW: () => d, OA: () => f, Un: () => u, tp: () => g });
var r = n(73153),
    s = n(975189),
    o = n(371169),
    i = n(385081),
    l = n(187308),
    a = n(248675),
    c = n(105292);
let d = {
        message_disposition(e, t) {
            var n;
            let { projectId: s } = t;
            ((n = e.disposition),
                Object.prototype.hasOwnProperty.call(y, n) &&
                    r.h.dispatch({
                        type: "CONJURE_CHAT_MESSAGE_DISPOSITION",
                        projectId: s,
                        id: e.id,
                        activeTurnId: e.active_turn_id,
                        disposition: e.disposition,
                    }));
        },
        message_cancelled(e, t) {
            let { projectId: n } = t;
            r.h.dispatch({ type: "CONJURE_CHAT_MESSAGE_CANCELLED", projectId: n, id: e.id });
        },
        app_removed: S,
        bot_removed: S,
        preview_bot_removed: S,
        app_channel_deleted: S,
        remixed: S,
        voice_channel_pin: S,
        side_reply(e, t) {
            let { projectId: n } = t;
            r.h.dispatch({
                type: "CONJURE_CHAT_SIDE_REPLY",
                projectId: n,
                id: e.id,
                inReplyTo: e.in_reply_to,
                content: e.content,
                timestamp: e.ts,
            });
        },
        source_checkpoint(e, t) {
            let { projectId: n } = t;
            r.h.dispatch({
                type: "CONJURE_CHAT_SOURCE_CHECKPOINT",
                projectId: n,
                turnId: e.turn_id,
                sourceSha: e.source_sha,
            });
        },
        turn_notification(e, t) {
            let { projectId: n } = t;
            r.h.dispatch({ type: "CONJURE_TURN_NOTIFICATION", projectId: n, body: e.summary, nonce: e.nonce });
        },
        provisional_todo(e, t) {
            let { projectId: n } = t;
            r.h.dispatch({ type: "CONJURE_CHAT_PROVISIONAL_TODO", projectId: n, turnId: e.turn_id, text: e.text });
        },
    },
    u = {
        reaction(e, t) {
            let { projectId: n } = t,
                s = (0, l.xN)(e);
            null != e.message_id &&
                null != s &&
                r.h.dispatch({ type: "CONJURE_CHAT_MESSAGE_REACTION", projectId: n, id: e.message_id, reaction: s });
        },
        reply(e, t) {
            let { projectId: n } = t,
                s = e.message ?? "";
            "" !== s
                ? r.h.dispatch({
                      type: "CONJURE_CHAT_TURN_PATCH",
                      projectId: n,
                      turnId: e.turn_id,
                      patch: { content: s, kind: "message" },
                  })
                : _(n, c.intl.string(a.default["913RMa"]), h);
        },
        thinking_lifecycle(e, t) {
            let { projectId: n } = t,
                { phase: s, session: o, seq: i, ticks: l, elapsed_ms: a, text: c } = e;
            null != s &&
                null != i &&
                null != o &&
                r.h.dispatch({
                    type: "CONJURE_CHAT_THINKING_SET",
                    projectId: n,
                    activity: { phase: s, session: o, seq: i, ticks: l ?? 0, elapsedMs: a ?? 0, text: c ?? "" },
                });
        },
        compaction(e, t) {
            let { projectId: n } = t;
            ("start" === e.phase || "end" === e.phase) &&
                r.h.dispatch({ type: "CONJURE_CHAT_COMPACTING_SET", projectId: n, compacting: "start" === e.phase });
        },
        saving(e, t) {
            let { projectId: n } = t;
            ("start" === e.phase || "end" === e.phase) &&
                r.h.dispatch({ type: "CONJURE_CHAT_SAVING_SET", projectId: n, saving: "start" === e.phase });
        },
        todos(e, t) {
            let { projectId: n } = t,
                s = e.items ?? [];
            s.length > 0 &&
                (r.h.dispatch({
                    type: "CONJURE_CHAT_TURN_PATCH",
                    projectId: n,
                    turnId: e.turn_id,
                    patch: { todos: s },
                }),
                f(n, e));
        },
        plan_proposed(e, t) {
            let { projectId: n } = t;
            null != e.proposal
                ? r.h.dispatch({
                      type: "CONJURE_CHAT_TURN_PATCH",
                      projectId: n,
                      turnId: e.turn_id,
                      patch: { proposal: e.proposal, kind: "proposal" },
                  })
                : _(n, c.intl.string(a.default["0+RUWx"]), h);
        },
        ideas(e, t) {
            let { projectId: n } = t;
            null != e.ideas &&
                e.ideas.length > 0 &&
                r.h.dispatch({
                    type: "CONJURE_CHAT_TURN_PATCH",
                    projectId: n,
                    turnId: e.turn_id,
                    patch: { ideas: e.ideas },
                });
        },
        restore_proposal(e, t) {
            let { projectId: n } = t;
            null != e.restore_proposal &&
                r.h.dispatch({
                    type: "CONJURE_CHAT_TURN_PATCH",
                    projectId: n,
                    turnId: e.turn_id,
                    patch: { restoreProposal: e.restore_proposal },
                });
        },
        publish_schedule_proposal(e, t) {
            let { projectId: n } = t;
            null != e.publish_schedule_proposal &&
                r.h.dispatch({
                    type: "CONJURE_CHAT_TURN_PATCH",
                    projectId: n,
                    turnId: e.turn_id,
                    patch: { publishScheduleProposal: e.publish_schedule_proposal },
                });
        },
        clarification(e, t) {
            let { projectId: n } = t;
            null != e.clarification &&
                (e.clarification.questions?.length ?? 0) > 0 &&
                r.h.dispatch({
                    type: "CONJURE_CHAT_TURN_PATCH",
                    projectId: n,
                    turnId: e.turn_id,
                    patch: { clarification: e.clarification },
                });
        },
        attachment(e, t) {
            let { projectId: n } = t;
            null != e.attachments &&
                e.attachments.length > 0 &&
                r.h.dispatch({
                    type: "CONJURE_CHAT_TURN_PATCH",
                    projectId: n,
                    turnId: e.turn_id,
                    patch: { attachments: e.attachments },
                });
        },
        collect_secrets(e, t) {
            let { projectId: n } = t,
                s = e.fields ?? [];
            s.length > 0 &&
                r.h.dispatch({
                    type: "CONJURE_CHAT_TURN_PATCH",
                    projectId: n,
                    turnId: e.turn_id,
                    patch: {
                        secretRequest: {
                            request_id: e.request_id,
                            over_mcp: e.over_mcp,
                            fields: s,
                            note: e.note,
                            copy_values: e.copy_values,
                        },
                    },
                });
        },
        collect_settings(e, t) {
            let { projectId: n } = t;
            r.h.dispatch({
                type: "CONJURE_CHAT_TURN_PATCH",
                projectId: n,
                turnId: e.turn_id,
                patch: { settingsRequest: { keys: e.keys, note: e.note } },
            });
        },
        awaiting_user(e, t) {
            let { projectId: n } = t;
            "secrets" === e.action &&
                r.h.dispatch({
                    type: "CONJURE_CHAT_TURN_PATCH",
                    projectId: n,
                    turnId: e.turn_id,
                    patch: { awaitingUser: { action: e.action } },
                });
        },
        intake(e, t) {
            let { projectId: n } = t;
            null != e.intake &&
                (e.intake.questions?.length ?? 0) > 0 &&
                r.h.dispatch({
                    type: "CONJURE_CHAT_TURN_PATCH",
                    projectId: n,
                    turnId: e.turn_id,
                    patch: { intake: e.intake },
                });
        },
        usage(e, t) {
            let { projectId: n } = t;
            null != e.turn &&
                null != e.project &&
                r.h.dispatch({ type: "CONJURE_CHAT_USAGE_SET", projectId: n, turn: e.turn, project: e.project });
        },
        build_error: E,
        healthcheck_failed: E,
        error: E,
    },
    p = { location: "connection", code: i.xf.SEND_FAILED },
    h = { location: "agent", code: i.xf.AGENT_ERROR };
function _(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : p;
    (r.h.dispatch({
        type: "CONJURE_CHAT_STEP_APPEND",
        projectId: e,
        step: { type: "step", kind: "terminal_error", message: t },
    }),
        (0, i.Hy)(e, { ...n, message: t }));
}
function f(e, t) {
    r.h.dispatch({ type: "CONJURE_CHAT_STEP_APPEND", projectId: e, turnId: t.turn_id, step: t });
}
function g(e, t, n) {
    try {
        let r = (0, s.KY)(e);
        if (null == r) throw Error("Not connected");
        r.sendQueuedMessageAction(n, t);
    } catch (e) {
        console.error(`[conjure] ${n} queued message failed`, e);
    }
}
function E(e, t) {
    let { projectId: n } = t;
    (f(n, e),
        (0, i.Hy)(n, {
            ...m[e.kind],
            message: e.message,
            details: "build_error" === e.kind ? e.stderr_tail : void 0,
            turnId: e.turn_id,
        }));
}
function S(e, t) {
    let { projectId: n } = t;
    (r.h.dispatch({ type: "CONJURE_CHAT_PROJECT_EVENT", projectId: n, event: e }),
        "app_channel_deleted" !== e.type && "remixed" !== e.type && "voice_channel_pin" !== e.type && (0, o.GO)(n));
}
let m = {
        build_error: { location: "build", code: i.xf.BUILD_FAILED },
        healthcheck_failed: { location: "healthcheck", code: i.xf.HEALTHCHECK_FAILED },
        error: { location: "agent", code: i.xf.AGENT_ERROR },
    },
    y = { steered: !0, queued: !0, restarting: !0, answered: !0 };
