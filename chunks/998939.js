n.d(t, { r2: () => L, Ay: () => H, XZ: () => G, Hc: () => O, dv: () => P }), n(321073);
var s = n(158390),
    i = n(17928),
    l = n(636537),
    a = n(228366),
    r = n(195880),
    o = n(287809),
    c = n(673724),
    d = n(948230),
    u = n(927899);
class h {
    socket = null;
    open(e) {
        let { url: t, ticket: n, onEvent: s, onClose: i, onError: l } = e;
        this.close();
        let a = t.replace(/^https:/i, "wss:").replace(/^http:/i, "ws:"),
            r = new WebSocket(`${a}/ws?ticket=${encodeURIComponent(n)}`);
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
                    s(t);
                }
            }),
            r.addEventListener("error", (e) => {
                this.socket === r && l?.(e);
            }),
            r.addEventListener("close", () => {
                this.socket === r && i?.();
            });
    }
    sendUserMessage(e, t) {
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(JSON.stringify({ type: "user_message", content: e, nonce: t }));
    }
    sendModelSettings(e) {
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(JSON.stringify({ type: "set_model_settings", settings: e }));
    }
    close() {
        this.socket?.close(), (this.socket = null);
    }
}
var m = n(208137),
    p = n(972786),
    g = n(652215),
    f = n(818085),
    x = n(375708);
let v = new Map(),
    k = new Map(),
    j = new Map();
function b(e, t) {
    a.h.dispatch({ type: "VIBEGRATIONS_CHAT_CONN_STATE", projectId: e, connState: t });
}
let _ = { location: "connection", code: u.xA.SEND_FAILED },
    E = { location: "agent", code: u.xA.AGENT_ERROR };
function N(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _;
    a.h.dispatch({
        type: "VIBEGRATIONS_CHAT_STEP_APPEND",
        projectId: e,
        step: { type: "step", kind: "terminal_error", message: t },
    }),
        (0, u.Z0)(e, { ...n, message: t });
}
function A(e) {
    return `optimistic:${e}`;
}
function S(e, t) {
    let { content: n, nonce: s } = t;
    a.h.dispatch({
        type: "VIBEGRATIONS_CHAT_MESSAGE_APPEND",
        projectId: e,
        content: n,
        id: A(s),
        userId: o.default.getCurrentUser()?.id,
        timestamp: new Date().toISOString(),
    });
}
function w(e, t, n) {
    let s = t.pendingSends;
    for (let i of ((t.pendingSends = []), s)) S(e, i), N(e, n);
}
let y = {
        build_error: { location: "build", code: u.xA.BUILD_FAILED },
        healthcheck_failed: { location: "healthcheck", code: u.xA.HEALTHCHECK_FAILED },
        error: { location: "agent", code: u.xA.AGENT_ERROR },
    },
    T = {
        web: { location: "runtime_frame", code: u.xA.RUNTIME_FRAME_ERROR },
        preview: { location: "runtime_worker", code: u.xA.RUNTIME_WORKER_ERROR },
    },
    C = new Map();
async function R(e, t) {
    t.ws.close();
    try {
        let { body: n } = await l.Bo.post({ url: g.Rsh.VIBEGRATIONS_PROJECT_WS_TICKET(e), rejectWithError: !1 });
        if (t.disposed) return;
        let s = (0, m.V)() ?? n.url;
        t.ws.open({
            url: s,
            ticket: n.ticket,
            onEvent: (n) =>
                (function e(t, n, s) {
                    if (
                        (console.debug("[vibegrations] ws event", s.type),
                        "hello" !== s.type && "history" !== s.type && "open" !== k.get(t))
                    )
                        return void n.pendingEvents.push(s);
                    if ("hello" === s.type) (n.helloSeen = !0), n.backoff.succeed();
                    else if ("history" === s.type) {
                        let i = (s.messages ?? []).slice();
                        a.h.dispatch({ type: "VIBEGRATIONS_CHAT_HISTORY_SET", projectId: t, entries: i });
                        let l = n.pendingEvents;
                        for (let s of ((n.pendingEvents = []), b(t, "open"), l)) e(t, n, s);
                        let r = n.pendingModelSettings;
                        if (((n.pendingModelSettings = null), null != r))
                            try {
                                n.ws.sendModelSettings(r);
                            } catch (e) {
                                console.error("[vibegrations] staged model settings send failed", e);
                            }
                        let o = n.pendingSends;
                        for (let e of ((n.pendingSends = []), o)) {
                            S(t, e);
                            try {
                                n.ws.sendUserMessage(e.content, e.nonce);
                            } catch (e) {
                                console.error("[vibegrations] queued send failed", e),
                                    N(t, e instanceof Error ? e.message : "send failed");
                            }
                        }
                    } else if ("user_message" === s.type)
                        a.h.dispatch({
                            type: "VIBEGRATIONS_CHAT_MESSAGE_APPEND",
                            projectId: t,
                            content: s.content,
                            id: s.id,
                            ...(null != s.nonce ? { optimisticId: A(s.nonce) } : {}),
                            userId: s.user_id,
                            timestamp: s.ts,
                        });
                    else if ("step" === s.type)
                        if ("reply" === s.kind) {
                            let e = s.message ?? "";
                            "" !== e
                                ? a.h.dispatch({
                                      type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                      projectId: t,
                                      patch: { content: e, kind: "message" },
                                  })
                                : N(t, x.intl.string(f.default.Z8Eo8I), E);
                        } else if ("announcement" === s.kind) {
                            let e = s.message ?? "";
                            "" !== e &&
                                a.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                    projectId: t,
                                    patch: { announcement: e },
                                });
                        } else if ("plan_proposed" === s.kind)
                            null != s.proposal
                                ? a.h.dispatch({
                                      type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                      projectId: t,
                                      patch: { proposal: s.proposal, kind: "proposal" },
                                  })
                                : N(t, x.intl.string(f.default.IHCafX), E);
                        else if ("usage" === s.kind)
                            null != s.turn &&
                                null != s.project &&
                                a.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_USAGE_SET",
                                    projectId: t,
                                    turn: s.turn,
                                    project: s.project,
                                });
                        else if ("project_named" === s.kind) {
                            let e = s.name,
                                n = p.A.getProject(t)?.name?.trim(),
                                i = null == n || "" === n || n === c.Hz;
                            null != e &&
                                "" !== e &&
                                i &&
                                (0, d.oB)(t, e).catch((e) => {
                                    console.error("[vibegrations] rename from agent failed", t, e);
                                });
                        } else if ("turn_result" === s.kind)
                            (0, u.Xv)(t, s),
                                a.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_TURN_FINISHED",
                                    projectId: t,
                                    summary: s.summary,
                                });
                        else {
                            a.h.dispatch({ type: "VIBEGRATIONS_CHAT_STEP_APPEND", projectId: t, step: s });
                            let e = y[s.kind];
                            null != e && (0, u.Z0)(t, { ...e, message: s.message, details: s.stderr_tail }),
                                "preview_ready" === s.kind &&
                                    (0, d.ti)(t).catch((e) => {
                                        console.error("[vibegrations] publish-preview failed", t, e);
                                    });
                        }
                    else
                        "model_settings" === s.type
                            ? a.h.dispatch({
                                  type: "VIBEGRATIONS_MODEL_SETTINGS_SET",
                                  projectId: t,
                                  settings: s.settings,
                                  choices: s.choices,
                              })
                            : (a.h.dispatch({ type: "VIBEGRATIONS_LOG_APPEND", projectId: t, log: s }),
                              (function (e, t) {
                                  if ("error" !== t.level) return;
                                  let n = null != t.source ? T[t.source] : void 0;
                                  if (null == n) return;
                                  let s = C.get(e);
                                  null == s && ((s = new Set()), C.set(e, s));
                                  let i = `${t.source}:${t.message.replace(/\d+/g, "#").slice(0, 200)}`;
                                  s.has(i) ||
                                      s.size >= 10 ||
                                      (s.add(i),
                                      (0, u.Z0)(e, {
                                          location: n.location,
                                          code: n.code,
                                          message: t.message,
                                          details: t.source,
                                      }));
                              })(t, s));
                })(e, t, n),
            onClose: () => {
                t.disposed
                    ? b(e, "closed")
                    : t.helloSeen
                      ? ((t.reconnectPending = !0), b(e, "connecting"), t.backoff.fail(() => I(e)))
                      : (b(e, "closed"),
                        w(e, t, "Connection closed before the message was sent"),
                        (t.pendingModelSettings = null));
            },
            onError: (e) => {
                console.error("[vibegrations] ws error", e);
            },
        });
    } catch (n) {
        if ((console.error("[vibegrations] ws open failed", n), t.disposed)) return;
        b(e, "failed"),
            w(e, t, n instanceof Error ? n.message : "ws open failed"),
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
            ws: new h(),
            backoff: new s.A(1e3, 3e4),
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
        b(e, "connecting"),
        R(e, n);
}
function M(e) {
    let t = v.get(e);
    return null != t && ((t.disposed = !0), t.backoff.cancel(), t.ws.close(), v.delete(e), b(e, "closed"), !0);
}
function O(e) {
    let t = v.get(e);
    if (null == t) return void I(e);
    let n = k.get(e);
    ("closed" !== n && "failed" !== n) || t.reconnectPending || I(e);
}
function P(e, t) {
    let n = t.trim();
    if ("" === n) return;
    let s = { content: n, nonce: (0, r.m)() },
        i = v.get(e);
    if (null != i && ("connecting" === k.get(e) || i.reconnectPending)) return void i.pendingSends.push(s);
    S(e, s);
    try {
        if (null == i) throw Error("Not connected");
        i.ws.sendUserMessage(s.content, s.nonce);
    } catch (t) {
        console.error("[vibegrations] send failed", t), N(e, t instanceof Error ? t.message : "send failed");
    }
}
function L(e, t) {
    let n = v.get(e);
    null == n
        ? console.error("[vibegrations] stageModelSettings with no connection \u2014 call ensureConnection first")
        : (n.pendingModelSettings = t);
}
function G(e, t) {
    let n = v.get(e);
    try {
        if (null == n) throw Error("Not connected");
        n.ws.sendModelSettings(t);
    } catch (e) {
        console.error("[vibegrations] model settings send failed", e);
    }
}
class D extends i.Ay.Store {
    initialize() {
        this.waitFor(o.default, p.A);
    }
    getConnState(e) {
        return k.get(e) ?? "connecting";
    }
    getModelSettings(e) {
        return j.get(e) ?? null;
    }
}
let H = new D(a.h, {
    VIBEGRATIONS_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: n } = e;
        if (k.get(t) === n) return !1;
        k.set(t, n);
    },
    VIBEGRATIONS_MODEL_SETTINGS_SET: function (e) {
        let { projectId: t, settings: n, choices: s } = e;
        j.set(t, { settings: n, choices: s });
    },
    VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        if (!M(t)) return !1;
    },
    VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function (e) {
        let { projects: t } = e,
            n = new Set(t.map((e) => e.id)),
            s = !1;
        for (let e of Array.from(v.keys())) !n.has(e) && M(e) && (s = !0);
        if (!s) return !1;
    },
    LOGOUT: function () {
        if (0 === v.size) return !1;
        for (let e of Array.from(v.keys())) M(e);
    },
});
