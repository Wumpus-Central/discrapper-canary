n.d(t, { Hc: () => w, Ay: () => P, dv: () => I }), n(321073);
var s = n(158390),
    l = n(17928),
    a = n(562465),
    r = n(228366),
    i = n(673724),
    c = n(948230),
    o = n(927899),
    u = n(683180);
class d {
    socket = null;
    open(e) {
        let { url: t, ticket: n, onEvent: s, onClose: l, onError: a } = e;
        this.close();
        let r = t.replace(/^https:/i, "wss:").replace(/^http:/i, "ws:"),
            i = new WebSocket(`${r}/ws?ticket=${encodeURIComponent(n)}`);
        (this.socket = i),
            i.addEventListener("message", (e) => {
                let t;
                if (this.socket === i) {
                    try {
                        t = JSON.parse(e.data);
                    } catch (e) {
                        console.error("[vibegrations] ws frame parse failed", e);
                        return;
                    }
                    s(t);
                }
            }),
            i.addEventListener("error", (e) => {
                this.socket === i && a?.(e);
            }),
            i.addEventListener("close", () => {
                this.socket === i && l?.();
            });
    }
    sendUserMessage(e) {
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(JSON.stringify({ type: "user_message", content: e }));
    }
    close() {
        this.socket?.close(), (this.socket = null);
    }
}
var m = n(208137),
    p = n(972786),
    f = n(652215),
    h = n(818085),
    g = n(375708);
let x = new Map(),
    _ = new Map(),
    v = new Map();
function j(e, t) {
    r.h.dispatch({ type: "VIBEGRATIONS_CHAT_CONN_STATE", projectId: e, connState: t });
}
let E = { location: "connection", code: o.xA.SEND_FAILED },
    A = { location: "agent", code: o.xA.AGENT_ERROR };
function N(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E;
    r.h.dispatch({
        type: "VIBEGRATIONS_CHAT_STEP_APPEND",
        projectId: e,
        step: { type: "step", kind: "terminal_error", message: t },
    }),
        (0, o.Z0)(e, { ...n, message: t });
}
let k = {
        build_error: { location: "build", code: o.xA.BUILD_FAILED },
        healthcheck_failed: { location: "healthcheck", code: o.xA.HEALTHCHECK_FAILED },
        error: { location: "agent", code: o.xA.AGENT_ERROR },
    },
    b = {
        web: { location: "runtime_frame", code: o.xA.RUNTIME_FRAME_ERROR },
        preview: { location: "runtime_worker", code: o.xA.RUNTIME_WORKER_ERROR },
    },
    y = new Map();
async function S(e, t) {
    t.ws.close();
    try {
        let { body: n } = await a.Bo.post({ url: f.Rsh.VIBEGRATIONS_PROJECT_WS_TICKET(e), rejectWithError: !1 });
        if (t.disposed) return;
        let s = (0, m.V)() ?? n.url;
        t.ws.open({
            url: s,
            ticket: n.ticket,
            onEvent: (n) =>
                (function (e, t, n) {
                    if ((console.debug("[vibegrations] ws event", n.type), "hello" === n.type))
                        (t.helloSeen = !0), t.backoff.succeed();
                    else if ("history" === n.type) {
                        let s = (n.messages ?? []).slice();
                        r.h.dispatch({ type: "VIBEGRATIONS_CHAT_HISTORY_SET", projectId: e, entries: s }), j(e, "open");
                        let l = t.pendingSends;
                        for (let n of ((t.pendingSends = []), l)) {
                            r.h.dispatch({ type: "VIBEGRATIONS_CHAT_MESSAGE_APPEND", projectId: e, content: n });
                            try {
                                t.ws.sendUserMessage(n);
                            } catch (t) {
                                console.error("[vibegrations] queued send failed", t),
                                    N(e, t instanceof Error ? t.message : "send failed");
                            }
                        }
                    } else if ("step" === n.type)
                        if ("reply" === n.kind) {
                            let t = n.message ?? "";
                            "" !== t
                                ? r.h.dispatch({
                                      type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                      projectId: e,
                                      patch: { content: t, kind: "message" },
                                  })
                                : N(e, g.intl.string(h.default.Z8Eo8I), A);
                        } else if ("plan_proposed" === n.kind)
                            null != n.proposal
                                ? r.h.dispatch({
                                      type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                      projectId: e,
                                      patch: { proposal: n.proposal, kind: "proposal" },
                                  })
                                : N(e, g.intl.string(h.default.IHCafX), A);
                        else if ("usage" === n.kind)
                            null != n.turn &&
                                null != n.project &&
                                r.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_USAGE_SET",
                                    projectId: e,
                                    turn: n.turn,
                                    project: n.project,
                                });
                        else if ("project_named" === n.kind) {
                            let t = n.name,
                                s = p.A.getProject(e)?.name?.trim(),
                                l = null == s || "" === s || s === i.Hz;
                            null != t &&
                                "" !== t &&
                                l &&
                                (0, c.oB)(e, t).catch((t) => {
                                    console.error("[vibegrations] rename from agent failed", e, t);
                                });
                        } else if ("turn_result" === n.kind)
                            (0, o.Xv)(e, n),
                                r.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_TURN_FINISHED",
                                    projectId: e,
                                    summary: n.summary,
                                });
                        else {
                            r.h.dispatch({ type: "VIBEGRATIONS_CHAT_STEP_APPEND", projectId: e, step: n });
                            let t = k[n.kind];
                            null != t && (0, o.Z0)(e, { ...t, message: n.message, details: n.stderr_tail }),
                                "preview_ready" === n.kind &&
                                    (r.h.dispatch({
                                        type: "VIBEGRATIONS_PREVIEW_RELOAD",
                                        projectId: e,
                                        ts: Date.now(),
                                    }),
                                    (0, u.gh)(e, { countAsDeploy: !0 !== n.rolled_back }).catch((t) => {
                                        console.error("[vibegrations] publish-preview failed", e, t);
                                    }));
                        }
                    else
                        r.h.dispatch({ type: "VIBEGRATIONS_LOG_APPEND", projectId: e, log: n }),
                            (function (e, t) {
                                if ("error" !== t.level) return;
                                let n = null != t.source ? b[t.source] : void 0;
                                if (null == n) return;
                                let s = y.get(e);
                                null == s && ((s = new Set()), y.set(e, s));
                                let l = `${t.source}:${t.message.replace(/\d+/g, "#").slice(0, 200)}`;
                                s.has(l) ||
                                    s.size >= 10 ||
                                    (s.add(l),
                                    (0, o.Z0)(e, {
                                        location: n.location,
                                        code: n.code,
                                        message: t.message,
                                        details: t.source,
                                    }));
                            })(e, n);
                })(e, t, n),
            onClose: () => {
                t.disposed
                    ? j(e, "closed")
                    : t.helloSeen
                      ? ((t.reconnectPending = !0), j(e, "connecting"), t.backoff.fail(() => T(e)))
                      : (j(e, "closed"), (t.pendingSends = []));
            },
            onError: (e) => {
                console.error("[vibegrations] ws error", e);
            },
        });
    } catch (n) {
        if ((console.error("[vibegrations] ws open failed", n), t.disposed)) return;
        j(e, "failed"),
            (t.pendingSends = []),
            (0, o.Z0)(e, {
                location: "connection",
                code: o.xA.WS_OPEN_FAILED,
                message: n instanceof Error ? n.message : "ws open failed",
            });
    }
}
function T(e) {
    let t = x.get(e);
    null == t &&
        ((t = {
            ws: new d(),
            backoff: new s.A(1e3, 3e4),
            helloSeen: !1,
            disposed: !1,
            reconnectPending: !1,
            pendingSends: [],
        }),
        x.set(e, t));
    let n = t;
    (n.helloSeen = !1), (n.disposed = !1), (n.reconnectPending = !1), j(e, "connecting"), S(e, n);
}
function R(e) {
    let t = x.get(e);
    return null != t && ((t.disposed = !0), t.backoff.cancel(), t.ws.close(), x.delete(e), j(e, "closed"), !0);
}
function w(e) {
    let t = x.get(e);
    if (null == t) return void T(e);
    let n = _.get(e);
    ("closed" !== n && "failed" !== n) || t.reconnectPending || T(e);
}
function I(e, t) {
    let n = t.trim();
    if ("" === n) return;
    r.h.dispatch({ type: "VIBEGRATIONS_CHAT_MESSAGE_APPEND", projectId: e, content: n });
    let s = x.get(e);
    if (null != s && ("connecting" === _.get(e) || s.reconnectPending)) return void s.pendingSends.push(n);
    try {
        if (null == s) throw Error("Not connected");
        s.ws.sendUserMessage(n);
    } catch (t) {
        console.error("[vibegrations] send failed", t), N(e, t instanceof Error ? t.message : "send failed");
    }
}
class C extends l.Ay.Store {
    initialize() {
        this.waitFor(p.A);
    }
    getConnState(e) {
        return _.get(e) ?? "connecting";
    }
    getPreviewTs(e) {
        return v.get(e) ?? null;
    }
}
let P = new C(r.h, {
    VIBEGRATIONS_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: n } = e;
        if (_.get(t) === n) return !1;
        _.set(t, n);
    },
    VIBEGRATIONS_PREVIEW_RELOAD: function (e) {
        let { projectId: t, ts: n } = e;
        v.set(t, n);
    },
    VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        if (!R(t)) return !1;
    },
    VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function (e) {
        let { projects: t } = e,
            n = new Set(t.map((e) => e.id)),
            s = !1;
        for (let e of Array.from(x.keys())) !n.has(e) && R(e) && (s = !0);
        if (!s) return !1;
    },
    LOGOUT: function () {
        if (0 === x.size) return !1;
        for (let e of Array.from(x.keys())) R(e);
    },
});
