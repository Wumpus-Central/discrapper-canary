n.d(t, { Gu: () => h, NW: () => d, OA: () => C, Un: () => u, tp: () => T });
var i = n(73153),
    a = n(975189),
    r = n(371169),
    o = n(385081),
    c = n(187308),
    s = n(248675),
    l = n(105292);
let d = {
        message_disposition(e, t) {
            var n;
            let { projectId: a } = t;
            ((n = e.disposition),
                Object.prototype.hasOwnProperty.call(g, n) &&
                    i.h.dispatch({
                        type: "CONJURE_CHAT_MESSAGE_DISPOSITION",
                        projectId: a,
                        id: e.id,
                        activeTurnId: e.active_turn_id,
                        disposition: e.disposition,
                    }));
        },
        message_cancelled(e, t) {
            let { projectId: n } = t;
            i.h.dispatch({ type: "CONJURE_CHAT_MESSAGE_CANCELLED", projectId: n, id: e.id });
        },
        app_removed: y,
        bot_removed: y,
        preview_bot_removed: y,
        app_channel_deleted: y,
        remixed: y,
        side_reply(e, t) {
            let { projectId: n } = t;
            i.h.dispatch({
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
            i.h.dispatch({
                type: "CONJURE_CHAT_SOURCE_CHECKPOINT",
                projectId: n,
                turnId: e.turn_id,
                sourceSha: e.source_sha,
            });
        },
        turn_notification(e, t) {
            let { projectId: n } = t;
            i.h.dispatch({ type: "CONJURE_TURN_NOTIFICATION", projectId: n, body: e.summary, nonce: e.nonce });
        },
        provisional_todo(e, t) {
            let { projectId: n } = t;
            i.h.dispatch({ type: "CONJURE_CHAT_PROVISIONAL_TODO", projectId: n, turnId: e.turn_id, text: e.text });
        },
    },
    u = {
        reaction(e, t) {
            let { projectId: n } = t,
                a = (0, c.xN)(e);
            null != e.message_id &&
                null != a &&
                i.h.dispatch({ type: "CONJURE_CHAT_MESSAGE_REACTION", projectId: n, id: e.message_id, reaction: a });
        },
        reply(e, t) {
            let { projectId: n } = t,
                a = e.message ?? "";
            "" !== a
                ? i.h.dispatch({
                      type: "CONJURE_CHAT_TURN_PATCH",
                      projectId: n,
                      turnId: e.turn_id,
                      patch: { content: a, kind: "message" },
                  })
                : h(n, l.intl.string(s.default["913RMa"]), _);
        },
        thinking_lifecycle(e, t) {
            let { projectId: n } = t,
                { phase: a, session: r, seq: o, ticks: c, elapsed_ms: s, text: l } = e;
            null != a &&
                null != o &&
                null != r &&
                i.h.dispatch({
                    type: "CONJURE_CHAT_THINKING_SET",
                    projectId: n,
                    activity: { phase: a, session: r, seq: o, ticks: c ?? 0, elapsedMs: s ?? 0, text: l ?? "" },
                });
        },
        compaction(e, t) {
            let { projectId: n } = t;
            ("start" === e.phase || "end" === e.phase) &&
                i.h.dispatch({ type: "CONJURE_CHAT_COMPACTING_SET", projectId: n, compacting: "start" === e.phase });
        },
        saving(e, t) {
            let { projectId: n } = t;
            ("start" === e.phase || "end" === e.phase) &&
                i.h.dispatch({ type: "CONJURE_CHAT_SAVING_SET", projectId: n, saving: "start" === e.phase });
        },
        todos(e, t) {
            let { projectId: n } = t,
                a = e.items ?? [];
            a.length > 0 &&
                (i.h.dispatch({
                    type: "CONJURE_CHAT_TURN_PATCH",
                    projectId: n,
                    turnId: e.turn_id,
                    patch: { todos: a },
                }),
                C(n, e));
        },
        plan_proposed(e, t) {
            let { projectId: n } = t;
            null != e.proposal
                ? i.h.dispatch({
                      type: "CONJURE_CHAT_TURN_PATCH",
                      projectId: n,
                      turnId: e.turn_id,
                      patch: { proposal: e.proposal, kind: "proposal" },
                  })
                : h(n, l.intl.string(s.default["0+RUWx"]), _);
        },
        ideas(e, t) {
            let { projectId: n } = t;
            null != e.ideas &&
                e.ideas.length > 0 &&
                i.h.dispatch({
                    type: "CONJURE_CHAT_TURN_PATCH",
                    projectId: n,
                    turnId: e.turn_id,
                    patch: { ideas: e.ideas },
                });
        },
        restore_proposal(e, t) {
            let { projectId: n } = t;
            null != e.restore_proposal &&
                i.h.dispatch({
                    type: "CONJURE_CHAT_TURN_PATCH",
                    projectId: n,
                    turnId: e.turn_id,
                    patch: { restoreProposal: e.restore_proposal },
                });
        },
        publish_schedule_proposal(e, t) {
            let { projectId: n } = t;
            null != e.publish_schedule_proposal &&
                i.h.dispatch({
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
                i.h.dispatch({
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
                i.h.dispatch({
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
                i.h.dispatch({
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
            i.h.dispatch({
                type: "CONJURE_CHAT_TURN_PATCH",
                projectId: n,
                turnId: e.turn_id,
                patch: { settingsRequest: { keys: e.keys, note: e.note } },
            });
        },
        awaiting_user(e, t) {
            let { projectId: n } = t;
            "secrets" === e.action &&
                i.h.dispatch({
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
                i.h.dispatch({
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
                i.h.dispatch({ type: "CONJURE_CHAT_USAGE_SET", projectId: n, turn: e.turn, project: e.project });
        },
        build_error: f,
        healthcheck_failed: f,
        error: f,
    },
    p = { location: "connection", code: o.xf.SEND_FAILED },
    _ = { location: "agent", code: o.xf.AGENT_ERROR };
function h(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : p;
    (i.h.dispatch({
        type: "CONJURE_CHAT_STEP_APPEND",
        projectId: e,
        step: { type: "step", kind: "terminal_error", message: t },
    }),
        (0, o.Hy)(e, { ...n, message: t }));
}
function C(e, t) {
    i.h.dispatch({ type: "CONJURE_CHAT_STEP_APPEND", projectId: e, turnId: t.turn_id, step: t });
}
function T(e, t, n) {
    try {
        let i = (0, a.KY)(e);
        if (null == i) throw Error("Not connected");
        i.sendQueuedMessageAction(n, t);
    } catch (e) {
        console.error(`[conjure] ${n} queued message failed`, e);
    }
}
function f(e, t) {
    let { projectId: n } = t;
    (C(n, e),
        (0, o.Hy)(n, {
            ...A[e.kind],
            message: e.message,
            details: "build_error" === e.kind ? e.stderr_tail : void 0,
            turnId: e.turn_id,
        }));
}
function y(e, t) {
    let { projectId: n } = t;
    (i.h.dispatch({ type: "CONJURE_CHAT_PROJECT_EVENT", projectId: n, event: e }),
        "app_channel_deleted" !== e.type && "remixed" !== e.type && (0, r.GO)(n));
}
let A = {
        build_error: { location: "build", code: o.xf.BUILD_FAILED },
        healthcheck_failed: { location: "healthcheck", code: o.xf.HEALTHCHECK_FAILED },
        error: { location: "agent", code: o.xf.AGENT_ERROR },
    },
    g = { steered: !0, queued: !0, restarting: !0, answered: !0 };
