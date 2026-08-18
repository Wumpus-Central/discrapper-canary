n.d(t, {
    dv: () => B,
    r2: () => F,
    TV: () => V,
    n6: () => Q,
    Hc: () => H,
    PK: () => J,
    fu: () => U,
    Lc: () => q,
    Ay: () => et,
    aF: () => Z,
    uM: () => K,
    XZ: () => W,
    vX: () => X,
    Vm: () => Y,
}),
    n(321073),
    n(323874),
    n(14289),
    n(35956);
var l = n(158390),
    a = n(17928),
    s = n(636537),
    i = n(228366),
    r = n(195880),
    o = n(287809),
    c = n(673724),
    d = n(948230),
    u = n(927899),
    h = n(148555);
class m {
    socket = null;
    open(e) {
        let { url: t, ticket: n, onEvent: l, onClose: a, onError: s } = e;
        this.close();
        let i = t.replace(/^https:/i, "wss:").replace(/^http:/i, "ws:"),
            r = new WebSocket(`${i}/agent/ws?ticket=${encodeURIComponent(n)}`);
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
                this.socket === r && s?.(e);
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
    k = n(375708);
function b(e, t) {
    let n = e.pendingPublish;
    null != n && ((e.pendingPublish = null), clearTimeout(n.timeout), n.reject(Error(t)));
}
let j = new Map(),
    y = new Map(),
    _ = new Set(),
    N = new Map();
function E(e, t) {
    i.h.dispatch({ type: "VIBEGRATIONS_CHAT_CONN_STATE", projectId: e, connState: t });
}
let w = { location: "connection", code: u.xA.SEND_FAILED },
    S = { location: "agent", code: u.xA.AGENT_ERROR };
function A(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : w;
    i.h.dispatch({
        type: "VIBEGRATIONS_CHAT_STEP_APPEND",
        projectId: e,
        step: { type: "step", kind: "terminal_error", message: t },
    }),
        (0, u.Z0)(e, { ...n, message: t });
}
function C(e) {
    return `optimistic:${e}`;
}
function I(e, t) {
    let { content: n, nonce: l, attachments: a } = t;
    i.h.dispatch({
        type: "VIBEGRATIONS_CHAT_MESSAGE_APPEND",
        projectId: e,
        content: n,
        id: C(l),
        userId: o.default.getCurrentUser()?.id,
        timestamp: new Date().toISOString(),
        attachments: a,
    });
}
function T(e, t, n) {
    let l = t.pendingSends;
    for (let a of ((t.pendingSends = []), l)) I(e, a), A(e, n);
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
    O = new Map();
async function M(e, t, n) {
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
        let { ticket: n, baseUrl: l } = await z(e);
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
                        i.h.dispatch({ type: "VIBEGRATIONS_CHAT_HISTORY_SET", projectId: t, entries: a });
                        let s = n.pendingEvents;
                        for (let l of ((n.pendingEvents = []), E(t, "open"), s)) e(t, n, l);
                        let r = n.pendingModelSettings;
                        if (((n.pendingModelSettings = null), null != r))
                            try {
                                n.ws.sendModelSettings(r);
                            } catch (e) {
                                console.error("[vibegrations] staged model settings send failed", e);
                            }
                        let o = n.pendingSends;
                        for (let e of ((n.pendingSends = []), o)) {
                            I(t, e);
                            try {
                                n.ws.sendUserMessage(
                                    e.content,
                                    e.nonce,
                                    e.attachments?.map((e) => e.id),
                                );
                            } catch (e) {
                                console.error("[vibegrations] queued send failed", e),
                                    A(t, e instanceof Error ? e.message : "send failed");
                            }
                        }
                    } else if ("user_message" === l.type)
                        i.h.dispatch({
                            type: "VIBEGRATIONS_CHAT_MESSAGE_APPEND",
                            projectId: t,
                            content: l.content,
                            id: l.id,
                            ...(null != l.nonce ? { optimisticId: C(l.nonce) } : {}),
                            userId: l.user_id,
                            timestamp: l.ts,
                            attachments: l.attachments,
                        });
                    else if ("message_disposition" === l.type)
                        i.h.dispatch({
                            type: "VIBEGRATIONS_CHAT_MESSAGE_DISPOSITION",
                            projectId: t,
                            id: l.id,
                            disposition: l.disposition,
                        });
                    else if ("provisional_todo" === l.type)
                        i.h.dispatch({ type: "VIBEGRATIONS_CHAT_PROVISIONAL_TODO", projectId: t, text: l.text });
                    else if ("step" === l.type)
                        if ("reply" === l.kind) {
                            let e = l.message ?? "";
                            "" !== e
                                ? i.h.dispatch({
                                      type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                      projectId: t,
                                      patch: { content: e, kind: "message" },
                                  })
                                : A(t, k.intl.string(v.default.Z8Eo8I), S);
                        } else if ("announcement" === l.kind) {
                            let e = l.message ?? "";
                            "" !== e &&
                                i.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                    projectId: t,
                                    patch: { announcement: e },
                                });
                        } else if ("thinking_lifecycle" === l.kind) {
                            let { phase: e, session: n, seq: a, ticks: s, elapsed_ms: r, text: o } = l;
                            null != e &&
                                null != a &&
                                null != n &&
                                i.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_THINKING_SET",
                                    projectId: t,
                                    activity: {
                                        phase: e,
                                        session: n,
                                        seq: a,
                                        ticks: s ?? 0,
                                        elapsedMs: r ?? 0,
                                        text: o ?? "",
                                    },
                                });
                        } else if ("compaction" === l.kind)
                            ("start" === l.phase || "end" === l.phase) &&
                                i.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_COMPACTING_SET",
                                    projectId: t,
                                    compacting: "start" === l.phase,
                                });
                        else if ("todos" === l.kind) {
                            let e = l.items ?? [];
                            e.length > 0 &&
                                i.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                    projectId: t,
                                    patch: { todos: e },
                                });
                        } else if ("plan_proposed" === l.kind)
                            null != l.proposal
                                ? i.h.dispatch({
                                      type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                      projectId: t,
                                      patch: { proposal: l.proposal, kind: "proposal" },
                                  })
                                : A(t, k.intl.string(v.default.IHCafX), S);
                        else if ("ideas" === l.kind)
                            null != l.ideas &&
                                l.ideas.length > 0 &&
                                i.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                    projectId: t,
                                    patch: { ideas: l.ideas },
                                });
                        else if ("attachment" === l.kind)
                            null != l.attachments &&
                                l.attachments.length > 0 &&
                                i.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                    projectId: t,
                                    patch: { attachments: l.attachments },
                                });
                        else if ("usage" === l.kind)
                            null != l.turn &&
                                null != l.project &&
                                i.h.dispatch({
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
                                    i.h.dispatch({
                                        type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                        projectId: t,
                                        patch: { kind: "plan_implemented" },
                                    }),
                                i.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_TURN_FINISHED",
                                    projectId: t,
                                    summary: l.summary,
                                }),
                                _.delete(t) &&
                                    "cancelled" === l.result &&
                                    i.h.dispatch({ type: "VIBEGRATIONS_CHAT_INTERRUPTED", projectId: t });
                        else {
                            i.h.dispatch({ type: "VIBEGRATIONS_CHAT_STEP_APPEND", projectId: t, step: l });
                            let e = R[l.kind];
                            null != e && (0, u.Z0)(t, { ...e, message: l.message, details: l.stderr_tail }),
                                "preview_ready" === l.kind &&
                                    (0, d.tZ)(t, { isPreview: !0 }).catch((e) => {
                                        console.error("[vibegrations] post-preview-publish refresh failed", t, e);
                                    });
                        }
                    else
                        "capture_preview" === l.type
                            ? M(t, n, l).catch(() => {})
                            : "model_settings" === l.type
                              ? i.h.dispatch({
                                    type: "VIBEGRATIONS_MODEL_SETTINGS_SET",
                                    projectId: t,
                                    settings: l.settings,
                                    choices: l.choices,
                                })
                              : (i.h.dispatch({ type: "VIBEGRATIONS_LOG_APPEND", projectId: t, log: l }),
                                (function (e, t) {
                                    if ("error" !== t.level) return;
                                    let n = null != t.source ? P[t.source] : void 0;
                                    if (null == n) return;
                                    let l = O.get(e);
                                    null == l && ((l = new Set()), O.set(e, l));
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
                (b(t, "Connection closed before the publish result arrived"), t.disposed)
                    ? E(e, "closed")
                    : t.helloSeen
                      ? ((t.reconnectPending = !0), E(e, "connecting"), t.backoff.fail(() => G(e)))
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
            b(t, "Connection failed before the publish result arrived"),
            (0, u.Z0)(e, {
                location: "connection",
                code: u.xA.WS_OPEN_FAILED,
                message: n instanceof Error ? n.message : "ws open failed",
            });
    }
}
function G(e) {
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
function D(e) {
    let t = j.get(e);
    return (
        null != t &&
        ((t.disposed = !0),
        t.backoff.cancel(),
        b(t, "Connection closed before the publish result arrived"),
        t.ws.close(),
        j.delete(e),
        E(e, "closed"),
        !0)
    );
}
function H(e) {
    let t = j.get(e);
    if (null == t) return void G(e);
    let n = y.get(e);
    ("closed" !== n && "failed" !== n) || t.reconnectPending || G(e);
}
function B(e, t, n) {
    let l = t.trim(),
        a = null != n && n.length > 0 ? n : void 0;
    if ("" === l && null == a) return;
    let s = { content: l, nonce: (0, r.m)(), attachments: a },
        i = j.get(e);
    if (null != i && ("connecting" === y.get(e) || i.reconnectPending)) return void i.pendingSends.push(s);
    I(e, s);
    try {
        if (null == i) throw Error("Not connected");
        i.ws.sendUserMessage(
            s.content,
            s.nonce,
            s.attachments?.map((e) => e.id),
        );
    } catch (t) {
        console.error("[vibegrations] send failed", t), A(e, t instanceof Error ? t.message : "send failed");
    }
}
function U(e) {
    let t = j.get(e);
    try {
        if (null == t) throw Error("Not connected");
        t.ws.sendInterrupt(), f.A.isThinking(e) && _.add(e);
    } catch (e) {
        console.error("[vibegrations] interrupt send failed", e);
    }
}
function V(e) {
    return new Promise((t, n) => {
        let l = j.get(e);
        if (null == l) return void n(Error("Not connected"));
        if (null != l.pendingPublish) return void n(Error("Publish already in flight"));
        let a = setTimeout(() => {
            b(l, "Publish timed out");
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
async function z(e) {
    let { body: t } = await s.Bo.post({ url: x.Rsh.VIBEGRATIONS_PROJECT_WS_TICKET(e), rejectWithError: !0 });
    return { ticket: t.ticket, baseUrl: (0, p.V)() ?? t.url };
}
function $(e, t) {
    return null == t ? `${e}/agent/attachments` : `${e}/agent/attachments/${encodeURIComponent(t)}`;
}
async function X(e, t) {
    let { ticket: n, baseUrl: l } = await z(e),
        a = new URLSearchParams({ ticket: n, name: t.name }),
        s = await fetch(`${$(l)}?${a}`, {
            method: "POST",
            headers: { "content-type": "" !== t.type ? t.type : "application/octet-stream" },
            body: t,
        });
    if (!s.ok) throw Error(`attachment upload failed (${s.status})`);
    return await s.json();
}
class K extends Error {
    status;
    constructor(e) {
        super(`fork failed (${e})`), (this.status = e);
    }
}
async function q(e, t) {
    let [n, l] = await Promise.all([z(e), z(t)]),
        a = new URLSearchParams({ ticket: n.ticket }),
        s = await fetch(`${n.baseUrl}/agent/fork?${a}`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ dest_ticket: l.ticket }),
        });
    if (!s.ok) throw new K(s.status);
}
async function Y(e, t) {
    let { ticket: n, baseUrl: l } = await z(e),
        a = new URLSearchParams({ ticket: n }),
        s = await fetch(`${$(l, t)}?${a}`, { method: "DELETE", keepalive: !0 });
    if (!s.ok) throw Error(`attachment cleanup failed (${s.status})`);
}
async function Z(e, t) {
    let { ticket: n, baseUrl: l } = await z(e),
        a = new URLSearchParams({ ticket: n });
    return `${l}/agent/screenshots/${encodeURIComponent(t)}?${a}`;
}
async function J(e, t) {
    let { download: n = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { ticket: l, baseUrl: a } = await z(e),
        s = new URLSearchParams({ ticket: l });
    return n && s.set("download", "1"), `${$(a, t)}?${s}`;
}
async function Q(e, t) {
    let n = await J(e, t),
        l = await fetch(n, { method: "HEAD" });
    if (404 === l.status) return !1;
    if (!l.ok) throw Error(`attachment availability check failed (${l.status})`);
    return !0;
}
class ee extends a.Ay.Store {
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
let et = new ee(i.h, {
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
        if (!D(t)) return !1;
    },
    VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function (e) {
        let { projects: t } = e,
            n = new Set(t.map((e) => e.id)),
            l = !1;
        for (let e of Array.from(j.keys())) !n.has(e) && D(e) && (l = !0);
        if (!l) return !1;
    },
    LOGOUT: function () {
        if (0 === j.size) return !1;
        for (let e of Array.from(j.keys())) D(e);
    },
});
