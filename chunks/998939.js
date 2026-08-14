n.d(t, {
    Vm: () => H,
    r2: () => O,
    n6: () => V,
    Hc: () => M,
    PK: () => W,
    Ay: () => z,
    XZ: () => D,
    vX: () => B,
    dv: () => L,
}),
    n(321073),
    n(323874),
    n(14289),
    n(35956);
var l = n(158390),
    a = n(17928),
    r = n(636537),
    i = n(228366),
    s = n(195880),
    o = n(287809),
    c = n(673724),
    d = n(948230),
    u = n(927899);
class m {
    socket = null;
    open(e) {
        let { url: t, ticket: n, onEvent: l, onClose: a, onError: r } = e;
        this.close();
        let i = t.replace(/^https:/i, "wss:").replace(/^http:/i, "ws:"),
            s = new WebSocket(`${i}/agent/ws?ticket=${encodeURIComponent(n)}`);
        (this.socket = s),
            s.addEventListener("message", (e) => {
                let t;
                if (this.socket === s) {
                    try {
                        t = JSON.parse(e.data);
                    } catch (e) {
                        console.error("[vibegrations] ws frame parse failed", e);
                        return;
                    }
                    l(t);
                }
            }),
            s.addEventListener("error", (e) => {
                this.socket === s && r?.(e);
            }),
            s.addEventListener("close", () => {
                this.socket === s && a?.();
            });
    }
    sendUserMessage(e, t, n) {
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(JSON.stringify({ type: "user_message", content: e, nonce: t, attachment_ids: n }));
    }
    sendModelSettings(e) {
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(JSON.stringify({ type: "set_model_settings", settings: e }));
    }
    close() {
        this.socket?.close(), (this.socket = null);
    }
}
var h = n(208137),
    p = n(972786),
    f = n(652215),
    g = n(818085),
    x = n(375708);
let v = new Map(),
    b = new Map(),
    j = new Map();
function k(e, t) {
    i.h.dispatch({ type: "VIBEGRATIONS_CHAT_CONN_STATE", projectId: e, connState: t });
}
let w = { location: "connection", code: u.xA.SEND_FAILED },
    E = { location: "agent", code: u.xA.AGENT_ERROR };
function y(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : w;
    i.h.dispatch({
        type: "VIBEGRATIONS_CHAT_STEP_APPEND",
        projectId: e,
        step: { type: "step", kind: "terminal_error", message: t },
    }),
        (0, u.Z0)(e, { ...n, message: t });
}
function N(e) {
    return `optimistic:${e}`;
}
function _(e, t) {
    let { content: n, nonce: l, attachments: a } = t;
    i.h.dispatch({
        type: "VIBEGRATIONS_CHAT_MESSAGE_APPEND",
        projectId: e,
        content: n,
        id: N(l),
        userId: o.default.getCurrentUser()?.id,
        timestamp: new Date().toISOString(),
        attachments: a,
    });
}
function S(e, t, n) {
    let l = t.pendingSends;
    for (let a of ((t.pendingSends = []), l)) _(e, a), y(e, n);
}
let A = {
        build_error: { location: "build", code: u.xA.BUILD_FAILED },
        healthcheck_failed: { location: "healthcheck", code: u.xA.HEALTHCHECK_FAILED },
        error: { location: "agent", code: u.xA.AGENT_ERROR },
    },
    C = {
        web: { location: "runtime_frame", code: u.xA.RUNTIME_FRAME_ERROR },
        preview: { location: "runtime_worker", code: u.xA.RUNTIME_WORKER_ERROR },
    },
    R = new Map();
async function T(e, t) {
    t.ws.close();
    try {
        let { ticket: n, baseUrl: l } = await U(e);
        if (t.disposed) return;
        t.ws.open({
            url: l,
            ticket: n,
            onEvent: (n) =>
                (function e(t, n, l) {
                    if (
                        (console.debug("[vibegrations] ws event", l.type),
                        "hello" !== l.type && "history" !== l.type && "open" !== b.get(t))
                    )
                        return void n.pendingEvents.push(l);
                    if ("hello" === l.type) (n.helloSeen = !0), n.backoff.succeed();
                    else if ("history" === l.type) {
                        let a = (l.messages ?? []).slice();
                        i.h.dispatch({ type: "VIBEGRATIONS_CHAT_HISTORY_SET", projectId: t, entries: a });
                        let r = n.pendingEvents;
                        for (let l of ((n.pendingEvents = []), k(t, "open"), r)) e(t, n, l);
                        let s = n.pendingModelSettings;
                        if (((n.pendingModelSettings = null), null != s))
                            try {
                                n.ws.sendModelSettings(s);
                            } catch (e) {
                                console.error("[vibegrations] staged model settings send failed", e);
                            }
                        let o = n.pendingSends;
                        for (let e of ((n.pendingSends = []), o)) {
                            _(t, e);
                            try {
                                n.ws.sendUserMessage(
                                    e.content,
                                    e.nonce,
                                    e.attachments?.map((e) => e.id),
                                );
                            } catch (e) {
                                console.error("[vibegrations] queued send failed", e),
                                    y(t, e instanceof Error ? e.message : "send failed");
                            }
                        }
                    } else if ("user_message" === l.type)
                        i.h.dispatch({
                            type: "VIBEGRATIONS_CHAT_MESSAGE_APPEND",
                            projectId: t,
                            content: l.content,
                            id: l.id,
                            ...(null != l.nonce ? { optimisticId: N(l.nonce) } : {}),
                            userId: l.user_id,
                            timestamp: l.ts,
                            attachments: l.attachments,
                        });
                    else if ("step" === l.type)
                        if ("reply" === l.kind) {
                            let e = l.message ?? "";
                            "" !== e
                                ? i.h.dispatch({
                                      type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                      projectId: t,
                                      patch: { content: e, kind: "message" },
                                  })
                                : y(t, x.intl.string(g.default.Z8Eo8I), E);
                        } else if ("announcement" === l.kind) {
                            let e = l.message ?? "";
                            "" !== e &&
                                i.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                    projectId: t,
                                    patch: { announcement: e },
                                });
                        } else if ("plan_proposed" === l.kind)
                            null != l.proposal
                                ? i.h.dispatch({
                                      type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                      projectId: t,
                                      patch: { proposal: l.proposal, kind: "proposal" },
                                  })
                                : y(t, x.intl.string(g.default.IHCafX), E);
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
                                n = p.A.getProject(t)?.name?.trim(),
                                a = null == n || "" === n || n === c.Hz;
                            null != e &&
                                "" !== e &&
                                a &&
                                (0, d.oB)(t, e).catch((e) => {
                                    console.error("[vibegrations] rename from agent failed", t, e);
                                });
                        } else if ("turn_result" === l.kind)
                            (0, u.Xv)(t, l),
                                i.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_TURN_FINISHED",
                                    projectId: t,
                                    summary: l.summary,
                                });
                        else {
                            i.h.dispatch({ type: "VIBEGRATIONS_CHAT_STEP_APPEND", projectId: t, step: l });
                            let e = A[l.kind];
                            null != e && (0, u.Z0)(t, { ...e, message: l.message, details: l.stderr_tail }),
                                "preview_ready" === l.kind &&
                                    (0, d.ti)(t).catch((e) => {
                                        console.error("[vibegrations] publish-preview failed", t, e);
                                    });
                        }
                    else
                        "model_settings" === l.type
                            ? i.h.dispatch({
                                  type: "VIBEGRATIONS_MODEL_SETTINGS_SET",
                                  projectId: t,
                                  settings: l.settings,
                                  choices: l.choices,
                              })
                            : (i.h.dispatch({ type: "VIBEGRATIONS_LOG_APPEND", projectId: t, log: l }),
                              (function (e, t) {
                                  if ("error" !== t.level) return;
                                  let n = null != t.source ? C[t.source] : void 0;
                                  if (null == n) return;
                                  let l = R.get(e);
                                  null == l && ((l = new Set()), R.set(e, l));
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
                t.disposed
                    ? k(e, "closed")
                    : t.helloSeen
                      ? ((t.reconnectPending = !0), k(e, "connecting"), t.backoff.fail(() => I(e)))
                      : (k(e, "closed"),
                        S(e, t, "Connection closed before the message was sent"),
                        (t.pendingModelSettings = null));
            },
            onError: (e) => {
                console.error("[vibegrations] ws error", e);
            },
        });
    } catch (n) {
        if ((console.error("[vibegrations] ws open failed", n), t.disposed)) return;
        k(e, "failed"),
            S(e, t, n instanceof Error ? n.message : "ws open failed"),
            (t.pendingModelSettings = null),
            (0, u.Z0)(e, {
                location: "connection",
                code: u.xA.WS_OPEN_FAILED,
                message: n instanceof Error ? n.message : "ws open failed",
            });
    }
}
function I(e) {
    let t = v.get(e);
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
        }),
        v.set(e, t));
    let n = t;
    (n.pendingEvents = []),
        (n.helloSeen = !1),
        (n.disposed = !1),
        (n.reconnectPending = !1),
        k(e, "connecting"),
        T(e, n);
}
function P(e) {
    let t = v.get(e);
    return null != t && ((t.disposed = !0), t.backoff.cancel(), t.ws.close(), v.delete(e), k(e, "closed"), !0);
}
function M(e) {
    let t = v.get(e);
    if (null == t) return void I(e);
    let n = b.get(e);
    ("closed" !== n && "failed" !== n) || t.reconnectPending || I(e);
}
function L(e, t, n) {
    let l = t.trim(),
        a = null != n && n.length > 0 ? n : void 0;
    if ("" === l && null == a) return;
    let r = { content: l, nonce: (0, s.m)(), attachments: a },
        i = v.get(e);
    if (null != i && ("connecting" === b.get(e) || i.reconnectPending)) return void i.pendingSends.push(r);
    _(e, r);
    try {
        if (null == i) throw Error("Not connected");
        i.ws.sendUserMessage(
            r.content,
            r.nonce,
            r.attachments?.map((e) => e.id),
        );
    } catch (t) {
        console.error("[vibegrations] send failed", t), y(e, t instanceof Error ? t.message : "send failed");
    }
}
function O(e, t) {
    let n = v.get(e);
    null == n
        ? console.error("[vibegrations] stageModelSettings with no connection \u2014 call ensureConnection first")
        : (n.pendingModelSettings = t);
}
function D(e, t) {
    let n = v.get(e);
    try {
        if (null == n) throw Error("Not connected");
        n.ws.sendModelSettings(t);
    } catch (e) {
        console.error("[vibegrations] model settings send failed", e);
    }
}
async function U(e) {
    let { body: t } = await r.Bo.post({ url: f.Rsh.VIBEGRATIONS_PROJECT_WS_TICKET(e), rejectWithError: !0 });
    return { ticket: t.ticket, baseUrl: (0, h.V)() ?? t.url };
}
function G(e, t) {
    return null == t ? `${e}/agent/attachments` : `${e}/agent/attachments/${encodeURIComponent(t)}`;
}
async function B(e, t) {
    let { ticket: n, baseUrl: l } = await U(e),
        a = new URLSearchParams({ ticket: n, name: t.name }),
        r = await fetch(`${G(l)}?${a}`, {
            method: "POST",
            headers: { "content-type": "" !== t.type ? t.type : "application/octet-stream" },
            body: t,
        });
    if (!r.ok) throw Error(`attachment upload failed (${r.status})`);
    return await r.json();
}
async function H(e, t) {
    let { ticket: n, baseUrl: l } = await U(e),
        a = new URLSearchParams({ ticket: n }),
        r = await fetch(`${G(l, t)}?${a}`, { method: "DELETE", keepalive: !0 });
    if (!r.ok) throw Error(`attachment cleanup failed (${r.status})`);
}
async function W(e, t) {
    let { download: n = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { ticket: l, baseUrl: a } = await U(e),
        r = new URLSearchParams({ ticket: l });
    return n && r.set("download", "1"), `${G(a, t)}?${r}`;
}
async function V(e, t) {
    let n = await W(e, t),
        l = await fetch(n, { method: "HEAD" });
    if (404 === l.status) return !1;
    if (!l.ok) throw Error(`attachment availability check failed (${l.status})`);
    return !0;
}
class F extends a.Ay.Store {
    initialize() {
        this.waitFor(o.default, p.A);
    }
    getConnState(e) {
        return b.get(e) ?? "connecting";
    }
    getModelSettings(e) {
        return j.get(e) ?? null;
    }
}
let z = new F(i.h, {
    VIBEGRATIONS_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: n } = e;
        if (b.get(t) === n) return !1;
        b.set(t, n);
    },
    VIBEGRATIONS_MODEL_SETTINGS_SET: function (e) {
        let { projectId: t, settings: n, choices: l } = e;
        j.set(t, { settings: n, choices: l });
    },
    VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        if (!P(t)) return !1;
    },
    VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function (e) {
        let { projects: t } = e,
            n = new Set(t.map((e) => e.id)),
            l = !1;
        for (let e of Array.from(v.keys())) !n.has(e) && P(e) && (l = !0);
        if (!l) return !1;
    },
    LOGOUT: function () {
        if (0 === v.size) return !1;
        for (let e of Array.from(v.keys())) P(e);
    },
});
