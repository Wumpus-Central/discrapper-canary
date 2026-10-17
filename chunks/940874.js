n.d(t, { Gu: () => _, NW: () => s, OA: () => h, Un: () => u, tp: () => f });
var r = n(73153),
    a = n(975189),
    o = n(371169),
    i = n(385081),
    l = n(261425),
    c = n(105292);
let s = {
        message_disposition(e, t) {
            var n;
            let { projectId: a } = t;
            ((n = e.disposition),
                Object.prototype.hasOwnProperty.call(g, n) &&
                    r.h.dispatch({
                        type: "CONJURE_CHAT_MESSAGE_DISPOSITION",
                        projectId: a,
                        id: e.id,
                        activeTurnId: e.active_turn_id,
                        disposition: e.disposition,
                    }));
        },
        message_cancelled(e, t) {
            let { projectId: n } = t;
            r.h.dispatch({ type: "CONJURE_CHAT_MESSAGE_CANCELLED", projectId: n, id: e.id });
        },
        app_removed: y,
        bot_removed: y,
        preview_bot_removed: y,
        app_channel_deleted: y,
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
        reply(e, t) {
            let { projectId: n } = t,
                a = e.message ?? "";
            "" !== a
                ? r.h.dispatch({
                      type: "CONJURE_CHAT_TURN_PATCH",
                      projectId: n,
                      turnId: e.turn_id,
                      patch: { content: a, kind: "message" },
                  })
                : _(n, c.intl.string(l.default["913RMa"]), p);
        },
        thinking_lifecycle(e, t) {
            let { projectId: n } = t,
                { phase: a, session: o, seq: i, ticks: l, elapsed_ms: c, text: s } = e;
            null != a &&
                null != i &&
                null != o &&
                r.h.dispatch({
                    type: "CONJURE_CHAT_THINKING_SET",
                    projectId: n,
                    activity: { phase: a, session: o, seq: i, ticks: l ?? 0, elapsedMs: c ?? 0, text: s ?? "" },
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
                a = e.items ?? [];
            a.length > 0 &&
                (r.h.dispatch({
                    type: "CONJURE_CHAT_TURN_PATCH",
                    projectId: n,
                    turnId: e.turn_id,
                    patch: { todos: a },
                }),
                h(n, e));
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
                : _(n, c.intl.string(l.default["0+RUWx"]), p);
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
                a = e.fields ?? [];
            a.length > 0 &&
                r.h.dispatch({
                    type: "CONJURE_CHAT_TURN_PATCH",
                    projectId: n,
                    turnId: e.turn_id,
                    patch: {
                        secretRequest: {
                            request_id: e.request_id,
                            over_mcp: e.over_mcp,
                            fields: a,
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
        build_error: C,
        healthcheck_failed: C,
        error: C,
    },
    d = { location: "connection", code: i.xf.SEND_FAILED },
    p = { location: "agent", code: i.xf.AGENT_ERROR };
function _(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d;
    (r.h.dispatch({
        type: "CONJURE_CHAT_STEP_APPEND",
        projectId: e,
        step: { type: "step", kind: "terminal_error", message: t },
    }),
        (0, i.Hy)(e, { ...n, message: t }));
}
function h(e, t) {
    r.h.dispatch({ type: "CONJURE_CHAT_STEP_APPEND", projectId: e, turnId: t.turn_id, step: t });
}
function f(e, t, n) {
    try {
        let r = (0, a.KY)(e);
        if (null == r) throw Error("Not connected");
        r.sendQueuedMessageAction(n, t);
    } catch (e) {
        console.error(`[conjure] ${n} queued message failed`, e);
    }
}
function C(e, t) {
    let { projectId: n } = t;
    (h(n, e),
        (0, i.Hy)(n, {
            ...T[e.kind],
            message: e.message,
            details: "build_error" === e.kind ? e.stderr_tail : void 0,
            turnId: e.turn_id,
        }));
}
function y(e, t) {
    let { projectId: n } = t;
    (r.h.dispatch({ type: "CONJURE_CHAT_PROJECT_EVENT", projectId: n, event: e }),
        "app_channel_deleted" !== e.type && (0, o.GO)(n));
}
let T = {
        build_error: { location: "build", code: i.xf.BUILD_FAILED },
        healthcheck_failed: { location: "healthcheck", code: i.xf.HEALTHCHECK_FAILED },
        error: { location: "agent", code: i.xf.AGENT_ERROR },
    },
    g = { steered: !0, queued: !0, restarting: !0, answered: !0 };
