n.d(t, { r2: () => R, Ay: () => O, XZ: () => I, Hc: () => T, dv: () => C }), n(321073);
var l = n(158390),
    s = n(17928),
    i = n(562465),
    a = n(228366),
    r = n(673724),
    o = n(948230),
    c = n(927899);
class d {
    socket = null;
    open(e) {
        let { url: t, ticket: n, onEvent: l, onClose: s, onError: i } = e;
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
                    l(t);
                }
            }),
            r.addEventListener("error", (e) => {
                this.socket === r && i?.(e);
            }),
            r.addEventListener("close", () => {
                this.socket === r && s?.();
            });
    }
    sendUserMessage(e) {
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(JSON.stringify({ type: "user_message", content: e }));
    }
    sendModelSettings(e) {
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(JSON.stringify({ type: "set_model_settings", settings: e }));
    }
    close() {
        this.socket?.close(), (this.socket = null);
    }
}
var u = n(208137),
    h = n(972786),
    m = n(652215),
    p = n(818085),
    g = n(375708);
let f = new Map(),
    x = new Map(),
    v = new Map();
function j(e, t) {
    a.h.dispatch({ type: "VIBEGRATIONS_CHAT_CONN_STATE", projectId: e, connState: t });
}
let b = { location: "connection", code: c.xA.SEND_FAILED },
    _ = { location: "agent", code: c.xA.AGENT_ERROR };
function k(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : b;
    a.h.dispatch({
        type: "VIBEGRATIONS_CHAT_STEP_APPEND",
        projectId: e,
        step: { type: "step", kind: "terminal_error", message: t },
    }),
        (0, c.Z0)(e, { ...n, message: t });
}
let E = {
        build_error: { location: "build", code: c.xA.BUILD_FAILED },
        healthcheck_failed: { location: "healthcheck", code: c.xA.HEALTHCHECK_FAILED },
        error: { location: "agent", code: c.xA.AGENT_ERROR },
    },
    N = {
        web: { location: "runtime_frame", code: c.xA.RUNTIME_FRAME_ERROR },
        preview: { location: "runtime_worker", code: c.xA.RUNTIME_WORKER_ERROR },
    },
    A = new Map();
async function S(e, t) {
    t.ws.close();
    try {
        let { body: n } = await i.Bo.post({ url: m.Rsh.VIBEGRATIONS_PROJECT_WS_TICKET(e), rejectWithError: !1 });
        if (t.disposed) return;
        let l = (0, u.V)() ?? n.url;
        t.ws.open({
            url: l,
            ticket: n.ticket,
            onEvent: (n) =>
                (function (e, t, n) {
                    if ((console.debug("[vibegrations] ws event", n.type), "hello" === n.type))
                        (t.helloSeen = !0), t.backoff.succeed();
                    else if ("history" === n.type) {
                        let l = (n.messages ?? []).slice();
                        a.h.dispatch({ type: "VIBEGRATIONS_CHAT_HISTORY_SET", projectId: e, entries: l }), j(e, "open");
                        let s = t.pendingModelSettings;
                        if (((t.pendingModelSettings = null), null != s))
                            try {
                                t.ws.sendModelSettings(s);
                            } catch (e) {
                                console.error("[vibegrations] staged model settings send failed", e);
                            }
                        let i = t.pendingSends;
                        for (let n of ((t.pendingSends = []), i)) {
                            a.h.dispatch({ type: "VIBEGRATIONS_CHAT_MESSAGE_APPEND", projectId: e, content: n });
                            try {
                                t.ws.sendUserMessage(n);
                            } catch (t) {
                                console.error("[vibegrations] queued send failed", t),
                                    k(e, t instanceof Error ? t.message : "send failed");
                            }
                        }
                    } else if ("step" === n.type)
                        if ("reply" === n.kind) {
                            let t = n.message ?? "";
                            "" !== t
                                ? a.h.dispatch({
                                      type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                      projectId: e,
                                      patch: { content: t, kind: "message" },
                                  })
                                : k(e, g.intl.string(p.default.Z8Eo8I), _);
                        } else if ("announcement" === n.kind) {
                            let t = n.message ?? "";
                            "" !== t &&
                                a.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                    projectId: e,
                                    patch: { announcement: t },
                                });
                        } else if ("plan_proposed" === n.kind)
                            null != n.proposal
                                ? a.h.dispatch({
                                      type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                      projectId: e,
                                      patch: { proposal: n.proposal, kind: "proposal" },
                                  })
                                : k(e, g.intl.string(p.default.IHCafX), _);
                        else if ("usage" === n.kind)
                            null != n.turn &&
                                null != n.project &&
                                a.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_USAGE_SET",
                                    projectId: e,
                                    turn: n.turn,
                                    project: n.project,
                                });
                        else if ("project_named" === n.kind) {
                            let t = n.name,
                                l = h.A.getProject(e)?.name?.trim(),
                                s = null == l || "" === l || l === r.Hz;
                            null != t &&
                                "" !== t &&
                                s &&
                                (0, o.oB)(e, t).catch((t) => {
                                    console.error("[vibegrations] rename from agent failed", e, t);
                                });
                        } else if ("turn_result" === n.kind)
                            (0, c.Xv)(e, n),
                                a.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_TURN_FINISHED",
                                    projectId: e,
                                    summary: n.summary,
                                });
                        else {
                            a.h.dispatch({ type: "VIBEGRATIONS_CHAT_STEP_APPEND", projectId: e, step: n });
                            let t = E[n.kind];
                            null != t && (0, c.Z0)(e, { ...t, message: n.message, details: n.stderr_tail }),
                                "preview_ready" === n.kind &&
                                    (0, o.ti)(e).catch((t) => {
                                        console.error("[vibegrations] publish-preview failed", e, t);
                                    });
                        }
                    else
                        "model_settings" === n.type
                            ? a.h.dispatch({
                                  type: "VIBEGRATIONS_MODEL_SETTINGS_SET",
                                  projectId: e,
                                  settings: n.settings,
                                  choices: n.choices,
                              })
                            : (a.h.dispatch({ type: "VIBEGRATIONS_LOG_APPEND", projectId: e, log: n }),
                              (function (e, t) {
                                  if ("error" !== t.level) return;
                                  let n = null != t.source ? N[t.source] : void 0;
                                  if (null == n) return;
                                  let l = A.get(e);
                                  null == l && ((l = new Set()), A.set(e, l));
                                  let s = `${t.source}:${t.message.replace(/\d+/g, "#").slice(0, 200)}`;
                                  l.has(s) ||
                                      l.size >= 10 ||
                                      (l.add(s),
                                      (0, c.Z0)(e, {
                                          location: n.location,
                                          code: n.code,
                                          message: t.message,
                                          details: t.source,
                                      }));
                              })(e, n));
                })(e, t, n),
            onClose: () => {
                t.disposed
                    ? j(e, "closed")
                    : t.helloSeen
                      ? ((t.reconnectPending = !0), j(e, "connecting"), t.backoff.fail(() => w(e)))
                      : (j(e, "closed"), (t.pendingSends = []), (t.pendingModelSettings = null));
            },
            onError: (e) => {
                console.error("[vibegrations] ws error", e);
            },
        });
    } catch (n) {
        if ((console.error("[vibegrations] ws open failed", n), t.disposed)) return;
        j(e, "failed"),
            (t.pendingSends = []),
            (t.pendingModelSettings = null),
            (0, c.Z0)(e, {
                location: "connection",
                code: c.xA.WS_OPEN_FAILED,
                message: n instanceof Error ? n.message : "ws open failed",
            });
    }
}
function w(e) {
    let t = f.get(e);
    null == t &&
        ((t = {
            ws: new d(),
            backoff: new l.A(1e3, 3e4),
            helloSeen: !1,
            disposed: !1,
            reconnectPending: !1,
            pendingSends: [],
            pendingModelSettings: null,
        }),
        f.set(e, t));
    let n = t;
    (n.helloSeen = !1), (n.disposed = !1), (n.reconnectPending = !1), j(e, "connecting"), S(e, n);
}
function y(e) {
    let t = f.get(e);
    return null != t && ((t.disposed = !0), t.backoff.cancel(), t.ws.close(), f.delete(e), j(e, "closed"), !0);
}
function T(e) {
    let t = f.get(e);
    if (null == t) return void w(e);
    let n = x.get(e);
    ("closed" !== n && "failed" !== n) || t.reconnectPending || w(e);
}
function C(e, t) {
    let n = t.trim();
    if ("" === n) return;
    a.h.dispatch({ type: "VIBEGRATIONS_CHAT_MESSAGE_APPEND", projectId: e, content: n });
    let l = f.get(e);
    if (null != l && ("connecting" === x.get(e) || l.reconnectPending)) return void l.pendingSends.push(n);
    try {
        if (null == l) throw Error("Not connected");
        l.ws.sendUserMessage(n);
    } catch (t) {
        console.error("[vibegrations] send failed", t), k(e, t instanceof Error ? t.message : "send failed");
    }
}
function R(e, t) {
    let n = f.get(e);
    null == n
        ? console.error("[vibegrations] stageModelSettings with no connection \u2014 call ensureConnection first")
        : (n.pendingModelSettings = t);
}
function I(e, t) {
    let n = f.get(e);
    try {
        if (null == n) throw Error("Not connected");
        n.ws.sendModelSettings(t);
    } catch (e) {
        console.error("[vibegrations] model settings send failed", e);
    }
}
class M extends s.Ay.Store {
    initialize() {
        this.waitFor(h.A);
    }
    getConnState(e) {
        return x.get(e) ?? "connecting";
    }
    getModelSettings(e) {
        return v.get(e) ?? null;
    }
}
let O = new M(a.h, {
    VIBEGRATIONS_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: n } = e;
        if (x.get(t) === n) return !1;
        x.set(t, n);
    },
    VIBEGRATIONS_MODEL_SETTINGS_SET: function (e) {
        let { projectId: t, settings: n, choices: l } = e;
        v.set(t, { settings: n, choices: l });
    },
    VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        if (!y(t)) return !1;
    },
    VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function (e) {
        let { projects: t } = e,
            n = new Set(t.map((e) => e.id)),
            l = !1;
        for (let e of Array.from(f.keys())) !n.has(e) && y(e) && (l = !0);
        if (!l) return !1;
    },
    LOGOUT: function () {
        if (0 === f.size) return !1;
        for (let e of Array.from(f.keys())) y(e);
    },
});
