n.d(t, { r2: () => I, Ay: () => P, XZ: () => M, Hc: () => C, dv: () => R }), n(321073);
var l = n(158390),
    i = n(17928),
    s = n(562465),
    a = n(228366),
    r = n(673724),
    o = n(948230),
    c = n(927899);
class d {
    socket = null;
    open(e) {
        let { url: t, ticket: n, onEvent: l, onClose: i, onError: s } = e;
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
                this.socket === r && s?.(e);
            }),
            r.addEventListener("close", () => {
                this.socket === r && i?.();
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
    p = n(652215),
    m = n(818085),
    g = n(375708);
let f = new Map(),
    x = new Map(),
    v = new Map(),
    j = new Map();
function _(e, t) {
    a.h.dispatch({ type: "VIBEGRATIONS_CHAT_CONN_STATE", projectId: e, connState: t });
}
let b = { location: "connection", code: c.xA.SEND_FAILED },
    E = { location: "agent", code: c.xA.AGENT_ERROR };
function k(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : b;
    a.h.dispatch({
        type: "VIBEGRATIONS_CHAT_STEP_APPEND",
        projectId: e,
        step: { type: "step", kind: "terminal_error", message: t },
    }),
        (0, c.Z0)(e, { ...n, message: t });
}
let A = {
        build_error: { location: "build", code: c.xA.BUILD_FAILED },
        healthcheck_failed: { location: "healthcheck", code: c.xA.HEALTHCHECK_FAILED },
        error: { location: "agent", code: c.xA.AGENT_ERROR },
    },
    N = {
        web: { location: "runtime_frame", code: c.xA.RUNTIME_FRAME_ERROR },
        preview: { location: "runtime_worker", code: c.xA.RUNTIME_WORKER_ERROR },
    },
    S = new Map();
async function w(e, t) {
    t.ws.close();
    try {
        let { body: n } = await s.Bo.post({ url: p.Rsh.VIBEGRATIONS_PROJECT_WS_TICKET(e), rejectWithError: !1 });
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
                        a.h.dispatch({ type: "VIBEGRATIONS_CHAT_HISTORY_SET", projectId: e, entries: l }), _(e, "open");
                        let i = t.pendingModelSettings;
                        if (((t.pendingModelSettings = null), null != i))
                            try {
                                t.ws.sendModelSettings(i);
                            } catch (e) {
                                console.error("[vibegrations] staged model settings send failed", e);
                            }
                        let s = t.pendingSends;
                        for (let n of ((t.pendingSends = []), s)) {
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
                                : k(e, g.intl.string(m.default.Z8Eo8I), E);
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
                                : k(e, g.intl.string(m.default.IHCafX), E);
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
                                i = null == l || "" === l || l === r.Hz;
                            null != t &&
                                "" !== t &&
                                i &&
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
                            let t = A[n.kind];
                            null != t && (0, c.Z0)(e, { ...t, message: n.message, details: n.stderr_tail }),
                                "preview_ready" === n.kind &&
                                    (a.h.dispatch({
                                        type: "VIBEGRATIONS_PREVIEW_RELOAD",
                                        projectId: e,
                                        ts: Date.now(),
                                    }),
                                    (0, o.ti)(e).catch((t) => {
                                        console.error("[vibegrations] publish-preview failed", e, t);
                                    }));
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
                                  let l = S.get(e);
                                  null == l && ((l = new Set()), S.set(e, l));
                                  let i = `${t.source}:${t.message.replace(/\d+/g, "#").slice(0, 200)}`;
                                  l.has(i) ||
                                      l.size >= 10 ||
                                      (l.add(i),
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
                    ? _(e, "closed")
                    : t.helloSeen
                      ? ((t.reconnectPending = !0), _(e, "connecting"), t.backoff.fail(() => y(e)))
                      : (_(e, "closed"), (t.pendingSends = []), (t.pendingModelSettings = null));
            },
            onError: (e) => {
                console.error("[vibegrations] ws error", e);
            },
        });
    } catch (n) {
        if ((console.error("[vibegrations] ws open failed", n), t.disposed)) return;
        _(e, "failed"),
            (t.pendingSends = []),
            (t.pendingModelSettings = null),
            (0, c.Z0)(e, {
                location: "connection",
                code: c.xA.WS_OPEN_FAILED,
                message: n instanceof Error ? n.message : "ws open failed",
            });
    }
}
function y(e) {
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
    (n.helloSeen = !1), (n.disposed = !1), (n.reconnectPending = !1), _(e, "connecting"), w(e, n);
}
function T(e) {
    let t = f.get(e);
    return null != t && ((t.disposed = !0), t.backoff.cancel(), t.ws.close(), f.delete(e), _(e, "closed"), !0);
}
function C(e) {
    let t = f.get(e);
    if (null == t) return void y(e);
    let n = x.get(e);
    ("closed" !== n && "failed" !== n) || t.reconnectPending || y(e);
}
function R(e, t) {
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
function I(e, t) {
    let n = f.get(e);
    null == n
        ? console.error("[vibegrations] stageModelSettings with no connection \u2014 call ensureConnection first")
        : (n.pendingModelSettings = t);
}
function M(e, t) {
    let n = f.get(e);
    try {
        if (null == n) throw Error("Not connected");
        n.ws.sendModelSettings(t);
    } catch (e) {
        console.error("[vibegrations] model settings send failed", e);
    }
}
class O extends i.Ay.Store {
    initialize() {
        this.waitFor(h.A);
    }
    getConnState(e) {
        return x.get(e) ?? "connecting";
    }
    getPreviewTs(e) {
        return v.get(e) ?? null;
    }
    getModelSettings(e) {
        return j.get(e) ?? null;
    }
}
let P = new O(a.h, {
    VIBEGRATIONS_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: n } = e;
        if (x.get(t) === n) return !1;
        x.set(t, n);
    },
    VIBEGRATIONS_PREVIEW_RELOAD: function (e) {
        let { projectId: t, ts: n } = e;
        v.set(t, n);
    },
    VIBEGRATIONS_MODEL_SETTINGS_SET: function (e) {
        let { projectId: t, settings: n, choices: l } = e;
        j.set(t, { settings: n, choices: l });
    },
    VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        if (!T(t)) return !1;
    },
    VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function (e) {
        let { projects: t } = e,
            n = new Set(t.map((e) => e.id)),
            l = !1;
        for (let e of Array.from(f.keys())) !n.has(e) && T(e) && (l = !0);
        if (!l) return !1;
    },
    LOGOUT: function () {
        if (0 === f.size) return !1;
        for (let e of Array.from(f.keys())) T(e);
    },
});
