n.d(t, { Hc: () => _, Ay: () => b, dv: () => E }), n(321073);
var s = n(158390),
    l = n(17928),
    a = n(562465),
    r = n(228366),
    i = n(683180);
class c {
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
var o = n(208137),
    u = n(652215),
    d = n(818085),
    m = n(375708);
let p = new Map(),
    f = new Map();
function h(e, t) {
    r.h.dispatch({ type: "VIBEGRATIONS_CHAT_CONN_STATE", projectId: e, connState: t });
}
function x(e, t) {
    r.h.dispatch({
        type: "VIBEGRATIONS_CHAT_STEP_APPEND",
        projectId: e,
        step: { type: "step", kind: "terminal_error", message: t },
    });
}
async function g(e, t) {
    t.ws.close();
    try {
        let { body: n } = await a.Bo.post({ url: u.Rsh.VIBEGRATIONS_PROJECT_WS_TICKET(e), rejectWithError: !1 });
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
                        r.h.dispatch({ type: "VIBEGRATIONS_CHAT_HISTORY_SET", projectId: e, entries: s }), h(e, "open");
                        let l = t.pendingSends;
                        for (let n of ((t.pendingSends = []), l)) {
                            r.h.dispatch({ type: "VIBEGRATIONS_CHAT_MESSAGE_APPEND", projectId: e, content: n });
                            try {
                                t.ws.sendUserMessage(n);
                            } catch (t) {
                                console.error("[vibegrations] queued send failed", t),
                                    x(e, t instanceof Error ? t.message : "send failed");
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
                                : x(e, m.intl.string(d.default.Z8Eo8I));
                        } else
                            "plan_proposed" === n.kind
                                ? null != n.proposal
                                    ? r.h.dispatch({
                                          type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                          projectId: e,
                                          patch: { proposal: n.proposal, kind: "proposal" },
                                      })
                                    : x(e, m.intl.string(d.default.IHCafX))
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
                                        (0, i.gh)(e).catch((t) => {
                                            console.error("[vibegrations] publish-preview failed", e, t);
                                        }));
                    else r.h.dispatch({ type: "VIBEGRATIONS_LOG_APPEND", projectId: e, log: n });
                })(e, t, n),
            onClose: () => {
                t.disposed
                    ? h(e, "closed")
                    : t.helloSeen
                      ? ((t.reconnectPending = !0), h(e, "connecting"), t.backoff.fail(() => v(e)))
                      : (h(e, "closed"), (t.pendingSends = []));
            },
            onError: (e) => {
                console.error("[vibegrations] ws error", e);
            },
        });
    } catch (n) {
        if ((console.error("[vibegrations] ws open failed", n), t.disposed)) return;
        h(e, "failed"), (t.pendingSends = []);
    }
}
function v(e) {
    let t = p.get(e);
    null == t &&
        ((t = {
            ws: new c(),
            backoff: new s.A(1e3, 3e4),
            helloSeen: !1,
            disposed: !1,
            reconnectPending: !1,
            pendingSends: [],
        }),
        p.set(e, t));
    let n = t;
    (n.helloSeen = !1), (n.disposed = !1), (n.reconnectPending = !1), h(e, "connecting"), g(e, n);
}
function j(e) {
    let t = p.get(e);
    return null != t && ((t.disposed = !0), t.backoff.cancel(), t.ws.close(), p.delete(e), h(e, "closed"), !0);
}
function _(e) {
    let t = p.get(e);
    if (null == t) return void v(e);
    let n = f.get(e);
    ("closed" !== n && "failed" !== n) || t.reconnectPending || v(e);
}
function E(e, t) {
    let n = t.trim();
    if ("" === n) return;
    r.h.dispatch({ type: "VIBEGRATIONS_CHAT_MESSAGE_APPEND", projectId: e, content: n });
    let s = p.get(e);
    if (null != s && ("connecting" === f.get(e) || s.reconnectPending)) return void s.pendingSends.push(n);
    try {
        if (null == s) throw Error("Not connected");
        s.ws.sendUserMessage(n);
    } catch (t) {
        console.error("[vibegrations] send failed", t), x(e, t instanceof Error ? t.message : "send failed");
    }
}
class k extends l.Ay.Store {
    getConnState(e) {
        return f.get(e) ?? "connecting";
    }
}
let b = new k(r.h, {
    VIBEGRATIONS_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: n } = e;
        if (f.get(t) === n) return !1;
        f.set(t, n);
    },
    VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        if (!j(t)) return !1;
    },
    VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function (e) {
        let { projects: t } = e,
            n = new Set(t.map((e) => e.id)),
            s = !1;
        for (let e of Array.from(p.keys())) !n.has(e) && j(e) && (s = !0);
        if (!s) return !1;
    },
    LOGOUT: function () {
        if (0 === p.size) return !1;
        for (let e of Array.from(p.keys())) j(e);
    },
});
