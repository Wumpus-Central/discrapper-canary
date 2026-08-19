n.d(t, {
    r2: () => F,
    $S: () => Y,
    n6: () => ee,
    fu: () => B,
    Ay: () => en,
    aF: () => J,
    uM: () => X,
    vX: () => z,
    dv: () => V,
    Vm: () => Z,
    TV: () => U,
    Hc: () => G,
    PK: () => Q,
    Lc: () => K,
    XZ: () => W,
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
class m {
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
var p = n(208137),
    f = n(783791),
    g = n(972786),
    x = n(652215),
    v = n(818085),
    b = n(375708);
function k(e, t) {
    let n = e.pendingPublish;
    null != n && ((e.pendingPublish = null), clearTimeout(n.timeout), n.reject(Error(t)));
}
let j = new Map(),
    y = new Map(),
    _ = new Set(),
    N = new Map();
function E(e, t) {
    s.h.dispatch({ type: "VIBEGRATIONS_CHAT_CONN_STATE", projectId: e, connState: t });
}
let w = { location: "connection", code: u.xA.SEND_FAILED },
    A = { location: "agent", code: u.xA.AGENT_ERROR };
function S(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : w;
    s.h.dispatch({
        type: "VIBEGRATIONS_CHAT_STEP_APPEND",
        projectId: e,
        step: { type: "step", kind: "terminal_error", message: t },
    }),
        (0, u.Z0)(e, { ...n, message: t });
}
function I(e) {
    return `optimistic:${e}`;
}
function C(e, t) {
    let { content: n, nonce: l, attachments: a } = t;
    s.h.dispatch({
        type: "VIBEGRATIONS_CHAT_MESSAGE_APPEND",
        projectId: e,
        content: n,
        id: I(l),
        userId: o.default.getCurrentUser()?.id,
        timestamp: new Date().toISOString(),
        attachments: a,
    });
}
function T(e, t, n) {
    let l = t.pendingSends;
    for (let a of ((t.pendingSends = []), l)) C(e, a), S(e, n);
}
let R = {
        build_error: { location: "build", code: u.xA.BUILD_FAILED },
        healthcheck_failed: { location: "healthcheck", code: u.xA.HEALTHCHECK_FAILED },
        error: { location: "agent", code: u.xA.AGENT_ERROR },
    },
    P = {
        web: { location: "runtime_frame", code: u.xA.RUNTIME_FRAME_ERROR },
        preview: { location: "runtime_worker", code: u.xA.RUNTIME_WORKER_ERROR },
    },
    M = new Map();
async function O(e, t, n) {
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
async function L(e, t) {
    t.ws.close();
    try {
        let { ticket: n, baseUrl: l } = await $(e);
        if (t.disposed) return;
        t.ws.open({
            url: l,
            ticket: n,
            onEvent: (n) =>
                (function e(t, n, l) {
                    if (
                        (console.debug("[vibegrations] ws event", l.type),
                        "hello" !== l.type &&
                            "history" !== l.type &&
                            "capture_preview" !== l.type &&
                            "open" !== y.get(t))
                    )
                        return void n.pendingEvents.push(l);
                    if ("hello" === l.type) (n.helloSeen = !0), n.backoff.succeed();
                    else if ("history" === l.type) {
                        let a = (l.messages ?? []).slice();
                        s.h.dispatch({ type: "VIBEGRATIONS_CHAT_HISTORY_SET", projectId: t, entries: a });
                        let i = n.pendingEvents;
                        for (let l of ((n.pendingEvents = []), E(t, "open"), i)) e(t, n, l);
                        let r = n.pendingModelSettings;
                        if (((n.pendingModelSettings = null), null != r))
                            try {
                                n.ws.sendModelSettings(r);
                            } catch (e) {
                                console.error("[vibegrations] staged model settings send failed", e);
                            }
                        let o = n.pendingSends;
                        for (let e of ((n.pendingSends = []), o)) {
                            C(t, e);
                            try {
                                n.ws.sendUserMessage(
                                    e.content,
                                    e.nonce,
                                    e.attachments?.map((e) => e.id),
                                );
                            } catch (e) {
                                console.error("[vibegrations] queued send failed", e),
                                    S(t, e instanceof Error ? e.message : "send failed");
                            }
                        }
                    } else if ("user_message" === l.type)
                        s.h.dispatch({
                            type: "VIBEGRATIONS_CHAT_MESSAGE_APPEND",
                            projectId: t,
                            content: l.content,
                            id: l.id,
                            ...(null != l.nonce ? { optimisticId: I(l.nonce) } : {}),
                            userId: l.user_id,
                            timestamp: l.ts,
                            attachments: l.attachments,
                        });
                    else if ("message_disposition" === l.type)
                        s.h.dispatch({
                            type: "VIBEGRATIONS_CHAT_MESSAGE_DISPOSITION",
                            projectId: t,
                            id: l.id,
                            activeTurnId: l.active_turn_id,
                            disposition: l.disposition,
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
                                : S(t, b.intl.string(v.default.Z8Eo8I), A);
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
                                : S(t, b.intl.string(v.default.IHCafX), A);
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
                            (e.length > 0 || null != l.connection) &&
                                s.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                    projectId: t,
                                    turnId: l.turn_id,
                                    patch: { secretRequest: { fields: e, connection: l.connection, note: l.note } },
                                });
                        } else if ("usage" === l.kind)
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
                                n = g.A.getProject(t)?.name?.trim(),
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
                                _.delete(t) &&
                                    "cancelled" === l.result &&
                                    s.h.dispatch({ type: "VIBEGRATIONS_CHAT_INTERRUPTED", projectId: t });
                        else {
                            s.h.dispatch({
                                type: "VIBEGRATIONS_CHAT_STEP_APPEND",
                                projectId: t,
                                turnId: l.turn_id,
                                step: l,
                            });
                            let e = R[l.kind];
                            null != e && (0, u.Z0)(t, { ...e, message: l.message, details: l.stderr_tail }),
                                "preview_ready" === l.kind &&
                                    (0, d.tZ)(t, { isPreview: !0 }).catch((e) => {
                                        console.error("[vibegrations] post-preview-publish refresh failed", t, e);
                                    });
                        }
                    else
                        "capture_preview" === l.type
                            ? O(t, n, l).catch(() => {})
                            : "model_settings" === l.type
                              ? s.h.dispatch({
                                    type: "VIBEGRATIONS_MODEL_SETTINGS_SET",
                                    projectId: t,
                                    settings: l.settings,
                                    choices: l.choices,
                                })
                              : (s.h.dispatch({ type: "VIBEGRATIONS_LOG_APPEND", projectId: t, log: l }),
                                (function (e, t) {
                                    if ("error" !== t.level) return;
                                    let n = null != t.source ? P[t.source] : void 0;
                                    if (null == n) return;
                                    let l = M.get(e);
                                    null == l && ((l = new Set()), M.set(e, l));
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
                (k(t, "Connection closed before the publish result arrived"), t.disposed)
                    ? E(e, "closed")
                    : t.helloSeen
                      ? ((t.reconnectPending = !0), E(e, "connecting"), t.backoff.fail(() => D(e)))
                      : (E(e, "closed"),
                        T(e, t, "Connection closed before the message was sent"),
                        (t.pendingModelSettings = null));
            },
            onError: (e) => {
                console.error("[vibegrations] ws error", e);
            },
        });
    } catch (n) {
        if ((console.error("[vibegrations] ws open failed", n), t.disposed)) return;
        E(e, "failed"),
            T(e, t, n instanceof Error ? n.message : "ws open failed"),
            (t.pendingModelSettings = null),
            k(t, "Connection failed before the publish result arrived"),
            (0, u.Z0)(e, {
                location: "connection",
                code: u.xA.WS_OPEN_FAILED,
                message: n instanceof Error ? n.message : "ws open failed",
            });
    }
}
function D(e) {
    let t = j.get(e);
    null == t &&
        ((t = {
            ws: new m(),
            backoff: new l.A(1e3, 3e4),
            helloSeen: !1,
            disposed: !1,
            reconnectPending: !1,
            pendingSends: [],
            pendingEvents: [],
            pendingModelSettings: null,
            pendingPublish: null,
        }),
        j.set(e, t));
    let n = t;
    (n.pendingEvents = []),
        (n.helloSeen = !1),
        (n.disposed = !1),
        (n.reconnectPending = !1),
        E(e, "connecting"),
        L(e, n);
}
function H(e) {
    let t = j.get(e);
    return (
        null != t &&
        ((t.disposed = !0),
        t.backoff.cancel(),
        k(t, "Connection closed before the publish result arrived"),
        t.ws.close(),
        j.delete(e),
        E(e, "closed"),
        !0)
    );
}
function G(e) {
    let t = j.get(e);
    if (null == t) return void D(e);
    let n = y.get(e);
    ("closed" !== n && "failed" !== n) || t.reconnectPending || D(e);
}
function V(e, t, n) {
    let l = t.trim(),
        a = null != n && n.length > 0 ? n : void 0;
    if ("" === l && null == a) return;
    let i = { content: l, nonce: (0, r.m)(), attachments: a },
        s = j.get(e);
    if (null != s && ("connecting" === y.get(e) || s.reconnectPending)) return void s.pendingSends.push(i);
    C(e, i);
    try {
        if (null == s) throw Error("Not connected");
        s.ws.sendUserMessage(
            i.content,
            i.nonce,
            i.attachments?.map((e) => e.id),
        );
    } catch (t) {
        console.error("[vibegrations] send failed", t), S(e, t instanceof Error ? t.message : "send failed");
    }
}
function B(e) {
    let t = j.get(e);
    try {
        if (null == t) throw Error("Not connected");
        t.ws.sendInterrupt(), f.A.isThinking(e) && _.add(e);
    } catch (e) {
        console.error("[vibegrations] interrupt send failed", e);
    }
}
function U(e) {
    return new Promise((t, n) => {
        let l = j.get(e);
        if (null == l) return void n(Error("Not connected"));
        if (null != l.pendingPublish) return void n(Error("Publish already in flight"));
        let a = setTimeout(() => {
            k(l, "Publish timed out");
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
function F(e, t) {
    let n = j.get(e);
    null == n
        ? console.error("[vibegrations] stageModelSettings with no connection \u2014 call ensureConnection first")
        : (n.pendingModelSettings = t);
}
function W(e, t) {
    let n = j.get(e);
    try {
        if (null == n) throw Error("Not connected");
        n.ws.sendModelSettings(t);
    } catch (e) {
        console.error("[vibegrations] model settings send failed", e);
    }
}
async function $(e) {
    let { body: t } = await i.Bo.post({ url: x.Rsh.VIBEGRATIONS_PROJECT_WS_TICKET(e), rejectWithError: !0 });
    return { ticket: t.ticket, baseUrl: (0, p.V)() ?? t.url };
}
function q(e, t) {
    return null == t ? `${e}/agent/attachments` : `${e}/agent/attachments/${encodeURIComponent(t)}`;
}
async function z(e, t) {
    let { ticket: n, baseUrl: l } = await $(e),
        a = new URLSearchParams({ ticket: n, name: t.name }),
        i = await fetch(`${q(l)}?${a}`, {
            method: "POST",
            headers: { "content-type": "" !== t.type ? t.type : "application/octet-stream" },
            body: t,
        });
    if (!i.ok) throw Error(`attachment upload failed (${i.status})`);
    return await i.json();
}
class X extends Error {
    status;
    constructor(e) {
        super(`fork failed (${e})`), (this.status = e);
    }
}
async function K(e, t) {
    let [n, l] = await Promise.all([$(e), $(t)]),
        a = new URLSearchParams({ ticket: n.ticket }),
        i = await fetch(`${n.baseUrl}/agent/fork?${a}`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ dest_ticket: l.ticket }),
        });
    if (!i.ok) throw new X(i.status);
}
async function Y(e, t) {
    let { ticket: n, baseUrl: l } = await $(e),
        a = new URLSearchParams({ ticket: n }),
        i = await fetch(`${l}/agent/secrets?${a}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(t),
        });
    if (!i.ok) throw Error(`secret submission failed (${i.status})`);
}
async function Z(e, t) {
    let { ticket: n, baseUrl: l } = await $(e),
        a = new URLSearchParams({ ticket: n }),
        i = await fetch(`${q(l, t)}?${a}`, { method: "DELETE", keepalive: !0 });
    if (!i.ok) throw Error(`attachment cleanup failed (${i.status})`);
}
async function J(e, t) {
    let { ticket: n, baseUrl: l } = await $(e),
        a = new URLSearchParams({ ticket: n });
    return `${l}/agent/screenshots/${encodeURIComponent(t)}?${a}`;
}
async function Q(e, t) {
    let { download: n = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { ticket: l, baseUrl: a } = await $(e),
        i = new URLSearchParams({ ticket: l });
    return n && i.set("download", "1"), `${q(a, t)}?${i}`;
}
async function ee(e, t) {
    let n = await Q(e, t),
        l = await fetch(n, { method: "HEAD" });
    if (404 === l.status) return !1;
    if (!l.ok) throw Error(`attachment availability check failed (${l.status})`);
    return !0;
}
class et extends a.Ay.Store {
    initialize() {
        this.waitFor(o.default, f.A, g.A);
    }
    getConnState(e) {
        return y.get(e) ?? "connecting";
    }
    getModelSettings(e) {
        return N.get(e) ?? null;
    }
}
let en = new et(s.h, {
    VIBEGRATIONS_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: n } = e;
        if (y.get(t) === n) return !1;
        y.set(t, n), ("closed" === n || "failed" === n) && _.delete(t);
    },
    VIBEGRATIONS_MODEL_SETTINGS_SET: function (e) {
        let { projectId: t, settings: n, choices: l } = e;
        N.set(t, { settings: n, choices: l });
    },
    VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        if (!H(t)) return !1;
    },
    VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function (e) {
        let { projects: t } = e,
            n = new Set(t.map((e) => e.id)),
            l = !1;
        for (let e of Array.from(j.keys())) !n.has(e) && H(e) && (l = !0);
        if (!l) return !1;
    },
    LOGOUT: function () {
        if (0 === j.size) return !1;
        for (let e of Array.from(j.keys())) H(e);
    },
});
