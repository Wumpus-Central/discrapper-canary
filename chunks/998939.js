n.d(t, { Hc: () => S, Ay: () => C, dv: () => T }), n(321073);
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
    x = n(375708);
let g = new Map(),
    v = new Map();
function _(e, t) {
    r.h.dispatch({ type: "VIBEGRATIONS_CHAT_CONN_STATE", projectId: e, connState: t });
}
let j = { location: "connection", code: o.xA.SEND_FAILED },
    E = { location: "agent", code: o.xA.AGENT_ERROR };
function k(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : j;
    r.h.dispatch({
        type: "VIBEGRATIONS_CHAT_STEP_APPEND",
        projectId: e,
        step: { type: "step", kind: "terminal_error", message: t },
    }),
        (0, o.Z0)(e, { ...n, message: t });
}
let A = {
    build_error: { location: "build", code: o.xA.BUILD_FAILED },
    healthcheck_failed: { location: "healthcheck", code: o.xA.HEALTHCHECK_FAILED },
    error: { location: "agent", code: o.xA.AGENT_ERROR },
};
async function b(e, t) {
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
                        r.h.dispatch({ type: "VIBEGRATIONS_CHAT_HISTORY_SET", projectId: e, entries: s }), _(e, "open");
                        let l = t.pendingSends;
                        for (let n of ((t.pendingSends = []), l)) {
                            r.h.dispatch({ type: "VIBEGRATIONS_CHAT_MESSAGE_APPEND", projectId: e, content: n });
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
                                ? r.h.dispatch({
                                      type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                      projectId: e,
                                      patch: { content: t, kind: "message" },
                                  })
                                : k(e, x.intl.string(h.default.Z8Eo8I), E);
                        } else if ("plan_proposed" === n.kind)
                            null != n.proposal
                                ? r.h.dispatch({
                                      type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                      projectId: e,
                                      patch: { proposal: n.proposal, kind: "proposal" },
                                  })
                                : k(e, x.intl.string(h.default.IHCafX), E);
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
                        } else if ("turn_result" === n.kind) (0, o.Xv)(e, n);
                        else {
                            r.h.dispatch({ type: "VIBEGRATIONS_CHAT_STEP_APPEND", projectId: e, step: n });
                            let t = A[n.kind];
                            null != t && (0, o.Z0)(e, { ...t, message: n.message, details: n.stderr_tail }),
                                "preview_ready" === n.kind &&
                                    (0, u.gh)(e, { countAsDeploy: !0 !== n.rolled_back }).catch((t) => {
                                        console.error("[vibegrations] publish-preview failed", e, t);
                                    });
                        }
                    else r.h.dispatch({ type: "VIBEGRATIONS_LOG_APPEND", projectId: e, log: n });
                })(e, t, n),
            onClose: () => {
                t.disposed
                    ? _(e, "closed")
                    : t.helloSeen
                      ? ((t.reconnectPending = !0), _(e, "connecting"), t.backoff.fail(() => N(e)))
                      : (_(e, "closed"), (t.pendingSends = []));
            },
            onError: (e) => {
                console.error("[vibegrations] ws error", e);
            },
        });
    } catch (n) {
        if ((console.error("[vibegrations] ws open failed", n), t.disposed)) return;
        _(e, "failed"),
            (t.pendingSends = []),
            (0, o.Z0)(e, {
                location: "connection",
                code: o.xA.WS_OPEN_FAILED,
                message: n instanceof Error ? n.message : "ws open failed",
            });
    }
}
function N(e) {
    let t = g.get(e);
    null == t &&
        ((t = {
            ws: new d(),
            backoff: new s.A(1e3, 3e4),
            helloSeen: !1,
            disposed: !1,
            reconnectPending: !1,
            pendingSends: [],
        }),
        g.set(e, t));
    let n = t;
    (n.helloSeen = !1), (n.disposed = !1), (n.reconnectPending = !1), _(e, "connecting"), b(e, n);
}
function y(e) {
    let t = g.get(e);
    return null != t && ((t.disposed = !0), t.backoff.cancel(), t.ws.close(), g.delete(e), _(e, "closed"), !0);
}
function S(e) {
    let t = g.get(e);
    if (null == t) return void N(e);
    let n = v.get(e);
    ("closed" !== n && "failed" !== n) || t.reconnectPending || N(e);
}
function T(e, t) {
    let n = t.trim();
    if ("" === n) return;
    r.h.dispatch({ type: "VIBEGRATIONS_CHAT_MESSAGE_APPEND", projectId: e, content: n });
    let s = g.get(e);
    if (null != s && ("connecting" === v.get(e) || s.reconnectPending)) return void s.pendingSends.push(n);
    try {
        if (null == s) throw Error("Not connected");
        s.ws.sendUserMessage(n);
    } catch (t) {
        console.error("[vibegrations] send failed", t), k(e, t instanceof Error ? t.message : "send failed");
    }
}
class w extends l.Ay.Store {
    initialize() {
        this.waitFor(p.A);
    }
    getConnState(e) {
        return v.get(e) ?? "connecting";
    }
}
let C = new w(r.h, {
    VIBEGRATIONS_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: n } = e;
        if (v.get(t) === n) return !1;
        v.set(t, n);
    },
    VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        if (!y(t)) return !1;
    },
    VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function (e) {
        let { projects: t } = e,
            n = new Set(t.map((e) => e.id)),
            s = !1;
        for (let e of Array.from(g.keys())) !n.has(e) && y(e) && (s = !0);
        if (!s) return !1;
    },
    LOGOUT: function () {
        if (0 === g.size) return !1;
        for (let e of Array.from(g.keys())) y(e);
    },
});
