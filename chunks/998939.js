n.d(t, { Hc: () => j, Ay: () => k, dv: () => v }), n(321073);
var s = n(158390),
    a = n(17928),
    l = n(562465),
    r = n(228366),
    i = n(948230);
class c {
    socket = null;
    open(e) {
        let { url: t, ticket: n, onEvent: s, onClose: a, onError: l } = e;
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
                this.socket === i && l?.(e);
            }),
            i.addEventListener("close", () => {
                this.socket === i && a?.();
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
var o = n(208137),
    d = n(652215);
let u = new Map(),
    m = new Map();
function p(e, t) {
    r.h.dispatch({ type: "VIBEGRATIONS_CHAT_CONN_STATE", projectId: e, connState: t });
}
function h(e, t) {
    r.h.dispatch({
        type: "VIBEGRATIONS_CHAT_STEP_APPEND",
        projectId: e,
        step: { type: "step", kind: "error", message: t },
    });
}
async function f(e, t) {
    t.ws.close();
    try {
        let { body: n } = await l.Bo.post({ url: d.Rsh.VIBEGRATIONS_PROJECT_WS_TICKET(e), rejectWithError: !1 });
        if (t.disposed) return;
        let s = (0, o.V)() ?? n.url;
        t.ws.open({
            url: s,
            ticket: n.ticket,
            onEvent: (n) =>
                (function (e, t, n) {
                    if ((console.debug("[vibegrations] ws event", n.type), "hello" === n.type))
                        (t.helloSeen = !0), t.backoff.succeed();
                    else if ("history" === n.type) {
                        let s = (n.messages ?? []).slice();
                        r.h.dispatch({ type: "VIBEGRATIONS_CHAT_HISTORY_SET", projectId: e, entries: s }), p(e, "open");
                        let a = t.pendingSends;
                        for (let n of ((t.pendingSends = []), a)) {
                            r.h.dispatch({ type: "VIBEGRATIONS_CHAT_MESSAGE_APPEND", projectId: e, content: n });
                            try {
                                t.ws.sendUserMessage(n);
                            } catch (t) {
                                console.error("[vibegrations] queued send failed", t),
                                    h(e, t instanceof Error ? t.message : "send failed");
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
                                : r.h.dispatch({
                                      type: "VIBEGRATIONS_CHAT_STEP_APPEND",
                                      projectId: e,
                                      step: { type: "step", kind: "error", message: "Agent reply was empty" },
                                  });
                        } else
                            "plan_proposed" === n.kind
                                ? null != n.proposal
                                    ? r.h.dispatch({
                                          type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                          projectId: e,
                                          patch: { proposal: n.proposal, kind: "proposal" },
                                      })
                                    : r.h.dispatch({
                                          type: "VIBEGRATIONS_CHAT_STEP_APPEND",
                                          projectId: e,
                                          step: { type: "step", kind: "error", message: "Plan proposal was empty" },
                                      })
                                : "usage" === n.kind
                                  ? null != n.turn &&
                                    null != n.project &&
                                    r.h.dispatch({
                                        type: "VIBEGRATIONS_CHAT_USAGE_SET",
                                        projectId: e,
                                        turn: n.turn,
                                        project: n.project,
                                    })
                                  : (r.h.dispatch({ type: "VIBEGRATIONS_CHAT_STEP_APPEND", projectId: e, step: n }),
                                    "preview_ready" === n.kind &&
                                        (0, i.ti)(e).catch((t) => {
                                            console.error("[vibegrations] publish-preview failed", e, t);
                                        }));
                    else r.h.dispatch({ type: "VIBEGRATIONS_LOG_APPEND", projectId: e, log: n });
                })(e, t, n),
            onClose: () => {
                t.disposed
                    ? p(e, "closed")
                    : t.helloSeen
                      ? ((t.reconnectPending = !0), p(e, "connecting"), t.backoff.fail(() => x(e)))
                      : (p(e, "closed"), (t.pendingSends = []));
            },
            onError: (e) => {
                console.error("[vibegrations] ws error", e);
            },
        });
    } catch (n) {
        if ((console.error("[vibegrations] ws open failed", n), t.disposed)) return;
        p(e, "failed"), (t.pendingSends = []);
    }
}
function x(e) {
    let t = u.get(e);
    null == t &&
        ((t = {
            ws: new c(),
            backoff: new s.A(1e3, 3e4),
            helloSeen: !1,
            disposed: !1,
            reconnectPending: !1,
            pendingSends: [],
        }),
        u.set(e, t));
    let n = t;
    (n.helloSeen = !1), (n.disposed = !1), (n.reconnectPending = !1), p(e, "connecting"), f(e, n);
}
function g(e) {
    let t = u.get(e);
    return null != t && ((t.disposed = !0), t.backoff.cancel(), t.ws.close(), u.delete(e), p(e, "closed"), !0);
}
function j(e) {
    let t = u.get(e);
    if (null == t) return void x(e);
    let n = m.get(e);
    ("closed" !== n && "failed" !== n) || t.reconnectPending || x(e);
}
function v(e, t) {
    let n = t.trim();
    if ("" === n) return;
    r.h.dispatch({ type: "VIBEGRATIONS_CHAT_MESSAGE_APPEND", projectId: e, content: n });
    let s = u.get(e);
    if (null != s && ("connecting" === m.get(e) || s.reconnectPending)) return void s.pendingSends.push(n);
    try {
        if (null == s) throw Error("Not connected");
        s.ws.sendUserMessage(n);
    } catch (t) {
        console.error("[vibegrations] send failed", t), h(e, t instanceof Error ? t.message : "send failed");
    }
}
class _ extends a.Ay.Store {
    getConnState(e) {
        return m.get(e) ?? "connecting";
    }
}
let k = new _(r.h, {
    VIBEGRATIONS_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: n } = e;
        if (m.get(t) === n) return !1;
        m.set(t, n);
    },
    VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        if (!g(t)) return !1;
    },
    VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function (e) {
        let { projects: t } = e,
            n = new Set(t.map((e) => e.id)),
            s = !1;
        for (let e of Array.from(u.keys())) !n.has(e) && g(e) && (s = !0);
        if (!s) return !1;
    },
    LOGOUT: function () {
        if (0 === u.size) return !1;
        for (let e of Array.from(u.keys())) g(e);
    },
});
