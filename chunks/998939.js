n.d(t, {
    r2: () => W,
    $S: () => ei,
    n6: () => eh,
    ss: () => er,
    fu: () => V,
    Ay: () => em,
    aF: () => ed,
    uM: () => el,
    vX: () => et,
    Vm: () => ec,
    dv: () => q,
    TV: () => z,
    Hc: () => U,
    ST: () => Q,
    PK: () => eu,
    Lc: () => ea,
    y_: () => eo,
    XZ: () => K,
    nU: () => es,
    oB: () => J,
}),
    n(321073),
    n(323874),
    n(14289),
    n(35956);
var l = n(158390),
    a = n(17928),
    i = n(636537),
    s = n(228366),
    r = n(195880),
    o = n(287809),
    c = n(673724),
    d = n(948230),
    u = n(927899),
    h = n(148555);
class f {
    socket = null;
    open(e) {
        let { url: t, ticket: n, onEvent: l, onClose: a, onError: i } = e;
        this.close();
        let s = t.replace(/^https:/i, "wss:").replace(/^http:/i, "ws:"),
            r = new WebSocket(`${s}/agent/ws?ticket=${encodeURIComponent(n)}`);
        (this.socket = r),
            r.addEventListener("message", (e) => {
                let t;
                if (this.socket === r) {
                    try {
                        t = JSON.parse(e.data);
                    } catch (e) {
                        console.error("[vibegrations] ws frame parse failed", e);
                        return;
                    }
                    l(t);
                }
            }),
            r.addEventListener("error", (e) => {
                this.socket === r && i?.(e);
            }),
            r.addEventListener("close", () => {
                this.socket === r && a?.();
            });
    }
    sendUserMessage(e, t, n) {
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(JSON.stringify({ type: "user_message", content: e, nonce: t, attachment_ids: n }));
    }
    sendInterrupt() {
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(JSON.stringify({ type: "interrupt" }));
    }
    sendPublish() {
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(JSON.stringify({ type: "publish" }));
    }
    sendModelSettings(e) {
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(JSON.stringify({ type: "set_model_settings", settings: e }));
    }
    sendLoadHistory(e) {
        null != this.socket &&
            this.socket.readyState === WebSocket.OPEN &&
            this.socket.send(JSON.stringify({ type: "load_history", cursor: e }));
    }
    sendCaptureAck(e, t) {
        if (null != this.socket && this.socket.readyState === WebSocket.OPEN)
            try {
                this.socket.send(JSON.stringify({ type: "capture_ack", id: e, status: t }));
            } catch {}
    }
    close() {
        this.socket?.close(), (this.socket = null);
    }
}
var m = n(208137),
    g = n(783791),
    p = n(972786),
    x = n(652215),
    v = n(459864),
    b = n(375708);
function j(e, t) {
    let n = e.pendingPublish;
    null != n && ((e.pendingPublish = null), clearTimeout(n.timeout), n.reject(Error(t)));
}
let y = new Map(),
    w = new Map(),
    k = new Map(),
    N = new Set(),
    E = new Map(),
    A = new Map();
function S(e, t) {
    s.h.dispatch({ type: "VIBEGRATIONS_CHAT_CONN_STATE", projectId: e, connState: t });
}
let I = { location: "connection", code: u.xA.SEND_FAILED },
    T = { location: "agent", code: u.xA.AGENT_ERROR };
function C(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : I;
    s.h.dispatch({
        type: "VIBEGRATIONS_CHAT_STEP_APPEND",
        projectId: e,
        step: { type: "step", kind: "terminal_error", message: t },
    }),
        (0, u.Z0)(e, { ...n, message: t });
}
function _(e) {
    return `optimistic:${e}`;
}
function R(e, t) {
    let { content: n, nonce: l, attachments: a } = t;
    s.h.dispatch({
        type: "VIBEGRATIONS_CHAT_MESSAGE_APPEND",
        projectId: e,
        content: n,
        id: _(l),
        userId: o.default.getCurrentUser()?.id,
        timestamp: new Date().toISOString(),
        attachments: a,
    });
}
let P = { steered: !0, queued: !0, restarting: !0, answered: !0 };
function M(e, t, n) {
    let l = t.pendingSends;
    for (let a of ((t.pendingSends = []), l)) R(e, a), C(e, n);
}
function L(e, t) {
    if (!0 === k.get(e)) return;
    let n = t.pendingSends;
    for (let l of ((t.pendingSends = []), n)) {
        R(e, l);
        try {
            t.ws.sendUserMessage(
                l.content,
                l.nonce,
                l.attachments?.map((e) => e.id),
            );
        } catch (t) {
            console.error("[vibegrations] queued send failed", t), C(e, t instanceof Error ? t.message : "send failed");
        }
    }
}
let O = {
        build_error: { location: "build", code: u.xA.BUILD_FAILED },
        healthcheck_failed: { location: "healthcheck", code: u.xA.HEALTHCHECK_FAILED },
        error: { location: "agent", code: u.xA.AGENT_ERROR },
    },
    D = {
        web: { location: "runtime_frame", code: u.xA.RUNTIME_FRAME_ERROR },
        preview: { location: "runtime_worker", code: u.xA.RUNTIME_WORKER_ERROR },
    },
    $ = new Map();
async function G(e, t, n) {
    let l,
        a = Date.now();
    console.debug("[vibegrations] capture request received", { id: n.id, build: n.build, probe: n.probe });
    try {
        l = await h.A.relayPreviewCapture(e, n.id, n.probe);
    } catch (e) {
        console.error("[vibegrations] preview capture relay failed", e), (l = "failed");
    }
    console.debug("[vibegrations] capture relay answered", { id: n.id, status: l, ms: Date.now() - a }),
        t.ws.sendCaptureAck(n.id, l);
}
async function F(e, t) {
    t.ws.close();
    try {
        let { ticket: n, baseUrl: l } = await Z(e);
        if (t.disposed) return;
        t.ws.open({
            url: l,
            ticket: n,
            onEvent: (n) =>
                (function e(t, n, l) {
                    var a, i;
                    if (
                        (console.debug("[vibegrations] ws event", l.type),
                        "hello" !== l.type &&
                            "history" !== l.type &&
                            "capture_preview" !== l.type &&
                            "open" !== w.get(t))
                    )
                        return void n.pendingEvents.push(l);
                    if ("history_page" === l.type) {
                        let e = Y.get(t);
                        if ((null != e && l.requested !== e) || (Y.delete(t), !0 === l.failed)) return;
                        s.h.dispatch({
                            type: "VIBEGRATIONS_CHAT_HISTORY_PREPEND",
                            projectId: t,
                            entries: (l.messages ?? []).slice(),
                            cursor: !0 === l.has_more ? (l.cursor ?? null) : null,
                        }),
                            X(t);
                        return;
                    }
                    if ("hello" === l.type) (n.helloSeen = !0), n.backoff.succeed();
                    else if ("history" === l.type) {
                        let a = (l.messages ?? []).slice();
                        s.h.dispatch({
                            type: "VIBEGRATIONS_CHAT_HISTORY_SET",
                            projectId: t,
                            entries: a,
                            cursor: !0 === l.has_more ? (l.cursor ?? null) : null,
                        }),
                            Y.delete(t),
                            (i = t),
                            X(i);
                        let r = n.pendingEvents;
                        for (let l of ((n.pendingEvents = []), S(t, "open"), r)) e(t, n, l);
                        let o = n.pendingModelSettings;
                        if (((n.pendingModelSettings = null), null != o))
                            try {
                                n.ws.sendModelSettings(o);
                            } catch (e) {
                                console.error("[vibegrations] staged model settings send failed", e);
                            }
                        L(t, n);
                    } else if ("chat_state" === l.type)
                        s.h.dispatch({ type: "VIBEGRATIONS_CHAT_STOPPED_SET", projectId: t, stopped: l.stopped }),
                            l.stopped || "open" !== w.get(t) || L(t, n);
                    else if ("user_message" === l.type)
                        s.h.dispatch({
                            type: "VIBEGRATIONS_CHAT_MESSAGE_APPEND",
                            projectId: t,
                            content: l.content,
                            id: l.id,
                            ...(null != l.nonce ? { optimisticId: _(l.nonce) } : {}),
                            userId: l.user_id,
                            timestamp: l.ts,
                            attachments: l.attachments,
                        });
                    else if ("message_disposition" === l.type)
                        (a = l.disposition),
                            Object.prototype.hasOwnProperty.call(P, a) &&
                                s.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_MESSAGE_DISPOSITION",
                                    projectId: t,
                                    id: l.id,
                                    activeTurnId: l.active_turn_id,
                                    disposition: l.disposition,
                                });
                    else if ("side_reply" === l.type)
                        s.h.dispatch({
                            type: "VIBEGRATIONS_CHAT_SIDE_REPLY",
                            projectId: t,
                            id: l.id,
                            inReplyTo: l.in_reply_to,
                            content: l.content,
                            timestamp: l.ts,
                        });
                    else if ("provisional_todo" === l.type)
                        s.h.dispatch({
                            type: "VIBEGRATIONS_CHAT_PROVISIONAL_TODO",
                            projectId: t,
                            turnId: l.turn_id,
                            text: l.text,
                        });
                    else if ("step" === l.type)
                        if ("reply" === l.kind) {
                            let e = l.message ?? "";
                            "" !== e
                                ? s.h.dispatch({
                                      type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                      projectId: t,
                                      turnId: l.turn_id,
                                      patch: { content: e, kind: "message" },
                                  })
                                : C(t, b.intl.string(v.default.Z8Eo8I), T);
                        } else if ("announcement" === l.kind) {
                            let e = l.message ?? "";
                            "" !== e &&
                                (s.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                    projectId: t,
                                    turnId: l.turn_id,
                                    patch: { announcement: e },
                                }),
                                s.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_STEP_APPEND",
                                    projectId: t,
                                    turnId: l.turn_id,
                                    step: l,
                                }));
                        } else if ("thinking_lifecycle" === l.kind) {
                            let { phase: e, session: n, seq: a, ticks: i, elapsed_ms: r, text: o } = l;
                            null != e &&
                                null != a &&
                                null != n &&
                                s.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_THINKING_SET",
                                    projectId: t,
                                    activity: {
                                        phase: e,
                                        session: n,
                                        seq: a,
                                        ticks: i ?? 0,
                                        elapsedMs: r ?? 0,
                                        text: o ?? "",
                                    },
                                });
                        } else if ("compaction" === l.kind)
                            ("start" === l.phase || "end" === l.phase) &&
                                s.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_COMPACTING_SET",
                                    projectId: t,
                                    compacting: "start" === l.phase,
                                });
                        else if ("todos" === l.kind) {
                            let e = l.items ?? [];
                            e.length > 0 &&
                                (s.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                    projectId: t,
                                    turnId: l.turn_id,
                                    patch: { todos: e },
                                }),
                                s.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_STEP_APPEND",
                                    projectId: t,
                                    turnId: l.turn_id,
                                    step: l,
                                }));
                        } else if ("plan_proposed" === l.kind)
                            null != l.proposal
                                ? s.h.dispatch({
                                      type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                      projectId: t,
                                      turnId: l.turn_id,
                                      patch: { proposal: l.proposal, kind: "proposal" },
                                  })
                                : C(t, b.intl.string(v.default.IHCafX), T);
                        else if ("ideas" === l.kind)
                            null != l.ideas &&
                                l.ideas.length > 0 &&
                                s.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                    projectId: t,
                                    turnId: l.turn_id,
                                    patch: { ideas: l.ideas },
                                });
                        else if ("clarification" === l.kind)
                            null != l.clarification &&
                                (l.clarification.questions?.length ?? 0) > 0 &&
                                s.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                    projectId: t,
                                    turnId: l.turn_id,
                                    patch: { clarification: l.clarification },
                                });
                        else if ("attachment" === l.kind)
                            null != l.attachments &&
                                l.attachments.length > 0 &&
                                s.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                    projectId: t,
                                    turnId: l.turn_id,
                                    patch: { attachments: l.attachments },
                                });
                        else if ("collect_secrets" === l.kind) {
                            let e = l.fields ?? [];
                            e.length > 0 &&
                                s.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                    projectId: t,
                                    turnId: l.turn_id,
                                    patch: { secretRequest: { fields: e, note: l.note, copy_values: l.copy_values } },
                                });
                        } else if ("collect_settings" === l.kind)
                            s.h.dispatch({
                                type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                projectId: t,
                                turnId: l.turn_id,
                                patch: { settingsRequest: { keys: l.keys, note: l.note } },
                            });
                        else if ("usage" === l.kind)
                            null != l.turn &&
                                null != l.project &&
                                s.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_USAGE_SET",
                                    projectId: t,
                                    turn: l.turn,
                                    project: l.project,
                                });
                        else if ("project_named" === l.kind) {
                            let e = l.name,
                                n = p.A.getProject(t)?.name?.trim(),
                                a = null == n || "" === n || n === c.Hz;
                            null != e &&
                                "" !== e &&
                                a &&
                                (0, d.oB)(t, e).catch((e) => {
                                    console.error("[vibegrations] rename from agent failed", t, e);
                                });
                        } else if ("publish_result" === l.kind) {
                            let e = n.pendingPublish;
                            (n.pendingPublish = null),
                                null != e && (clearTimeout(e.timeout), e.resolve(l)),
                                !0 !== l.ok && (0, d.Is)(t, l.error ?? "publish_result not ok", !1);
                        } else if ("turn_result" === l.kind)
                            (0, u.Xv)(t, l),
                                "deployed" === l.result &&
                                    s.h.dispatch({
                                        type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                        projectId: t,
                                        turnId: l.turn_id,
                                        patch: { kind: "plan_implemented" },
                                    }),
                                s.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_TURN_FINISHED",
                                    projectId: t,
                                    turnId: l.turn_id,
                                    summary: l.summary,
                                }),
                                N.delete(t) &&
                                    "cancelled" === l.result &&
                                    s.h.dispatch({ type: "VIBEGRATIONS_CHAT_INTERRUPTED", projectId: t });
                        else {
                            s.h.dispatch({
                                type: "VIBEGRATIONS_CHAT_STEP_APPEND",
                                projectId: t,
                                turnId: l.turn_id,
                                step: l,
                            });
                            let e = O[l.kind];
                            null != e && (0, u.Z0)(t, { ...e, message: l.message, details: l.stderr_tail }),
                                "preview_ready" === l.kind &&
                                    (0, d.tZ)(t, { isPreview: !0 }).catch((e) => {
                                        console.error("[vibegrations] post-preview-publish refresh failed", t, e);
                                    });
                        }
                    else
                        "capture_preview" === l.type
                            ? G(t, n, l).catch(() => {})
                            : "model_settings" === l.type
                              ? s.h.dispatch({
                                    type: "VIBEGRATIONS_MODEL_SETTINGS_SET",
                                    projectId: t,
                                    settings: l.settings,
                                    choices: l.choices,
                                })
                              : "settings" === l.type
                                ? s.h.dispatch({
                                      type: "VIBEGRATIONS_SETTINGS_SET",
                                      projectId: t,
                                      settings: { schema: l.schema, values: l.values, secrets: l.secrets },
                                  })
                                : (s.h.dispatch({ type: "VIBEGRATIONS_LOG_APPEND", projectId: t, log: l }),
                                  (function (e, t) {
                                      if ("error" !== t.level) return;
                                      let n = null != t.source ? D[t.source] : void 0;
                                      if (null == n) return;
                                      let l = $.get(e);
                                      null == l && ((l = new Set()), $.set(e, l));
                                      let a = `${t.source}:${t.message.replace(/\d+/g, "#").slice(0, 200)}`;
                                      l.has(a) ||
                                          l.size >= 10 ||
                                          (l.add(a),
                                          (0, u.Z0)(e, {
                                              location: n.location,
                                              code: n.code,
                                              message: t.message,
                                              details: t.source,
                                          }));
                                  })(t, l));
                })(e, t, n),
            onClose: () => {
                (j(t, "Connection closed before the publish result arrived"), t.disposed)
                    ? S(e, "closed")
                    : t.helloSeen
                      ? ((t.reconnectPending = !0), S(e, "connecting"), t.backoff.fail(() => H(e)))
                      : (S(e, "closed"),
                        M(e, t, "Connection closed before the message was sent"),
                        (t.pendingModelSettings = null));
            },
            onError: (e) => {
                console.error("[vibegrations] ws error", e);
            },
        });
    } catch (n) {
        if ((console.error("[vibegrations] ws open failed", n), t.disposed)) return;
        S(e, "failed"),
            M(e, t, n instanceof Error ? n.message : "ws open failed"),
            (t.pendingModelSettings = null),
            j(t, "Connection failed before the publish result arrived"),
            (0, u.Z0)(e, {
                location: "connection",
                code: u.xA.WS_OPEN_FAILED,
                message: n instanceof Error ? n.message : "ws open failed",
            });
    }
}
function H(e) {
    let t = y.get(e);
    null == t &&
        ((t = {
            ws: new f(),
            backoff: new l.A(1e3, 3e4),
            helloSeen: !1,
            disposed: !1,
            reconnectPending: !1,
            pendingSends: [],
            pendingEvents: [],
            pendingModelSettings: null,
            pendingPublish: null,
        }),
        y.set(e, t));
    let n = t;
    (n.pendingEvents = []),
        (n.helloSeen = !1),
        (n.disposed = !1),
        (n.reconnectPending = !1),
        S(e, "connecting"),
        F(e, n);
}
function B(e) {
    var t;
    let n = y.get(e);
    return (
        null != n &&
        ((n.disposed = !0),
        n.backoff.cancel(),
        j(n, "Connection closed before the publish result arrived"),
        n.ws.close(),
        y.delete(e),
        (t = e),
        Y.delete(t),
        S(e, "closed"),
        !0)
    );
}
function U(e) {
    let t = y.get(e);
    if (null == t) return void H(e);
    let n = w.get(e);
    ("closed" !== n && "failed" !== n) || t.reconnectPending || H(e);
}
function q(e, t, n) {
    let l = t.trim(),
        a = null != n && n.length > 0 ? n : void 0;
    if ("" === l && null == a) return;
    let i = { content: l, nonce: (0, r.m)(), attachments: a },
        s = y.get(e);
    if (null != s && ("connecting" === w.get(e) || s.reconnectPending)) return void s.pendingSends.push(i);
    R(e, i);
    try {
        if (null == s) throw Error("Not connected");
        s.ws.sendUserMessage(
            i.content,
            i.nonce,
            i.attachments?.map((e) => e.id),
        );
    } catch (t) {
        console.error("[vibegrations] send failed", t), C(e, t instanceof Error ? t.message : "send failed");
    }
}
function V(e) {
    let t = y.get(e);
    try {
        if (null == t) throw Error("Not connected");
        t.ws.sendInterrupt(), g.Ay.isThinking(e) && N.add(e);
    } catch (e) {
        console.error("[vibegrations] interrupt send failed", e);
    }
}
function z(e) {
    return new Promise((t, n) => {
        let l = y.get(e);
        if (null == l) return void n(Error("Not connected"));
        if (null != l.pendingPublish) return void n(Error("Publish already in flight"));
        let a = setTimeout(() => {
            j(l, "Publish timed out");
        }, 12e4);
        l.pendingPublish = { resolve: t, reject: n, timeout: a };
        try {
            l.ws.sendPublish();
        } catch (e) {
            (l.pendingPublish = null), clearTimeout(a), n(e instanceof Error ? e : Error("publish send failed"));
        }
    }).catch((t) => {
        throw ((0, d.Is)(e, t instanceof Error ? t.message : "publish failed", !1), t);
    });
}
function W(e, t) {
    let n = y.get(e);
    null == n
        ? console.error("[vibegrations] stageModelSettings with no connection \u2014 call ensureConnection first")
        : (n.pendingModelSettings = t);
}
function K(e, t) {
    let n = y.get(e);
    try {
        if (null == n) throw Error("Not connected");
        n.ws.sendModelSettings(t);
    } catch (e) {
        console.error("[vibegrations] model settings send failed", e);
    }
}
let Y = new Map();
function X(e) {
    let t = (0, g.bi)(e);
    if (null == t) return !1;
    if (Y.get(e) === t) return !0;
    let n = y.get(e);
    return null != n && (Y.set(e, t), n.ws.sendLoadHistory(t), !0);
}
async function Z(e) {
    let { body: t } = await i.Bo.post({ url: x.Rsh.VIBEGRATIONS_PROJECT_WS_TICKET(e), rejectWithError: !0 });
    return { ticket: t.ticket, baseUrl: (0, m.V)() ?? t.url };
}
async function Q(e) {
    let { ticket: t, baseUrl: n } = await Z(e),
        l = new URLSearchParams({ ticket: t }),
        a = await fetch(`${n}/agent/source-history?${l}`);
    if (!a.ok) throw Error(`version history failed (${a.status})`);
    let i = await a.json();
    return Array.isArray(i.entries) ? i.entries : [];
}
async function J(e, t) {
    let { ticket: n, baseUrl: l } = await Z(e),
        a = new URLSearchParams({ ticket: n }),
        i = await fetch(`${l}/agent/source-history/${encodeURIComponent(t)}/restore?${a}`, { method: "POST" });
    if (!i.ok) {
        let e = (await i.text()).trim();
        throw Error(`version restore failed (${i.status})${"" === e ? "" : `: ${e}`}`);
    }
    let s = await i.json();
    if (null == s.entry) throw Error("version restore returned no commit");
    return (
        (0, d.tZ)(e, { isPreview: !0 }).catch((t) => {
            console.error("[vibegrations] post-version-restore refresh failed", e, t);
        }),
        s.entry
    );
}
function ee(e, t) {
    return null == t ? `${e}/agent/attachments` : `${e}/agent/attachments/${encodeURIComponent(t)}`;
}
function et(e, t) {
    return en(e, t, t.name, t.type);
}
async function en(e, t, n, l) {
    let { ticket: a, baseUrl: i } = await Z(e),
        s = new URLSearchParams({ ticket: a, name: n }),
        r = await fetch(`${ee(i)}?${s}`, {
            method: "POST",
            headers: { "content-type": "" !== l ? l : "application/octet-stream" },
            body: t,
        });
    if (!r.ok) throw Error(`attachment upload failed (${r.status})`);
    return await r.json();
}
class el extends Error {
    status;
    constructor(e) {
        super(`fork failed (${e})`), (this.status = e);
    }
}
async function ea(e, t) {
    let [n, l] = await Promise.all([Z(e), Z(t)]),
        a = new URLSearchParams({ ticket: n.ticket }),
        i = await fetch(`${n.baseUrl}/agent/fork?${a}`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ dest_ticket: l.ticket }),
        });
    if (!i.ok) throw new el(i.status);
}
async function ei(e, t) {
    let { ticket: n, baseUrl: l } = await Z(e),
        a = new URLSearchParams({ ticket: n }),
        i = await fetch(`${l}/agent/secrets?${a}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(t),
        });
    if (!i.ok) throw Error(`secret submission failed (${i.status})`);
}
async function es(e, t) {
    let { ticket: n, baseUrl: l } = await Z(e),
        a = new URLSearchParams({ ticket: n }),
        i = await fetch(`${l}/agent/settings?${a}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(t),
        });
    if (!i.ok) throw Error(`settings submission failed (${i.status})`);
    let s = await i.json().catch(() => null);
    return { rebuildRequired: s?.rebuild_required === !0 };
}
function er(e) {
    (async function () {
        let { ticket: t, baseUrl: n } = await Z(e),
            l = new URLSearchParams({ ticket: t }),
            a = await fetch(`${n}/agent/rebuild?${l}`, { method: "POST" });
        a.ok || console.warn("[vibegrations] settings rebuild request failed", e, a.status);
    })().catch((t) => {
        console.warn("[vibegrations] settings rebuild request failed", e, t);
    });
}
async function eo(e) {
    let { regenerate: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { ticket: n, baseUrl: l } = await Z(e),
        a = new URLSearchParams({ ticket: n });
    t && a.set("regenerate", "1");
    let i = await fetch(`${l}/agent/mcp-token?${a}`, { method: "POST" });
    if (!i.ok) throw Error(`mcp token failed (${i.status})`);
    let s = await i.json();
    return { url: s.url, token: s.token, expiresAt: s.expires_at };
}
async function ec(e, t) {
    let { ticket: n, baseUrl: l } = await Z(e),
        a = new URLSearchParams({ ticket: n }),
        i = await fetch(`${ee(l, t)}?${a}`, { method: "DELETE", keepalive: !0 });
    if (!i.ok) throw Error(`attachment cleanup failed (${i.status})`);
}
async function ed(e, t) {
    let { ticket: n, baseUrl: l } = await Z(e),
        a = new URLSearchParams({ ticket: n });
    return `${l}/agent/screenshots/${encodeURIComponent(t)}?${a}`;
}
async function eu(e, t) {
    let { download: n = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { ticket: l, baseUrl: a } = await Z(e),
        i = new URLSearchParams({ ticket: l });
    return n && i.set("download", "1"), `${ee(a, t)}?${i}`;
}
async function eh(e, t) {
    let n = await eu(e, t),
        l = await fetch(n, { method: "HEAD" });
    if (404 === l.status) return !1;
    if (!l.ok) throw Error(`attachment availability check failed (${l.status})`);
    return !0;
}
class ef extends a.Ay.Store {
    initialize() {
        this.waitFor(o.default, g.Ay, p.A);
    }
    getConnState(e) {
        return w.get(e) ?? "connecting";
    }
    isChatStopped(e) {
        return k.get(e) ?? !1;
    }
    getModelSettings(e) {
        return E.get(e) ?? null;
    }
    getSettings(e) {
        return A.get(e) ?? null;
    }
}
let em = new ef(s.h, {
    VIBEGRATIONS_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: n } = e;
        if (w.get(t) === n) return !1;
        w.set(t, n), ("closed" === n || "failed" === n) && N.delete(t);
    },
    VIBEGRATIONS_CHAT_STOPPED_SET: function (e) {
        let { projectId: t, stopped: n } = e;
        if ((k.get(t) ?? !1) === n) return !1;
        k.set(t, n);
    },
    VIBEGRATIONS_MODEL_SETTINGS_SET: function (e) {
        let { projectId: t, settings: n, choices: l } = e;
        E.set(t, { settings: n, choices: l });
    },
    VIBEGRATIONS_SETTINGS_SET: function (e) {
        let { projectId: t, settings: n } = e;
        A.set(t, n);
    },
    VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        if (!B(t)) return !1;
    },
    VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function (e) {
        let t = !1;
        for (let e of Array.from(y.keys())) null == p.A.getProject(e) && B(e) && (t = !0);
        if (!t) return !1;
    },
    LOGOUT: function () {
        if (0 === y.size) return !1;
        for (let e of Array.from(y.keys())) B(e);
        k.clear();
    },
});
