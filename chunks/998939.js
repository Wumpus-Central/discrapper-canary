n.d(t, {
    WN: () => $,
    dv: () => O,
    TV: () => D,
    gm: () => K,
    n6: () => Y,
    Hc: () => L,
    PK: () => X,
    r2: () => U,
    LJ: () => z,
    Ay: () => Z,
    XZ: () => G,
    vX: () => V,
    Vm: () => W,
}),
    n(321073),
    n(323874),
    n(14289),
    n(35956);
var l = n(158390),
    a = n(17928),
    i = n(636537),
    r = n(228366),
    s = n(195880),
    o = n(287809),
    c = n(673724),
    d = n(948230),
    u = n(927899);
class h {
    socket = null;
    open(e) {
        let { url: t, ticket: n, onEvent: l, onClose: a, onError: i } = e;
        this.close();
        let r = t.replace(/^https:/i, "wss:").replace(/^http:/i, "ws:"),
            s = new WebSocket(`${r}/agent/ws?ticket=${encodeURIComponent(n)}`);
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
                this.socket === s && i?.(e);
            }),
            s.addEventListener("close", () => {
                this.socket === s && a?.();
            });
    }
    sendUserMessage(e, t, n) {
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(JSON.stringify({ type: "user_message", content: e, nonce: t, attachment_ids: n }));
    }
    sendPublish() {
        if (null == this.socket || this.socket.readyState !== WebSocket.OPEN) throw Error("WebSocket not open");
        this.socket.send(JSON.stringify({ type: "publish" }));
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
    f = n(652215),
    g = n(818085),
    x = n(375708);
function v(e, t) {
    let n = e.pendingPublish;
    null != n && ((e.pendingPublish = null), clearTimeout(n.timeout), n.reject(Error(t)));
}
let b = new Map(),
    k = new Map(),
    j = new Map();
function w(e, t) {
    r.h.dispatch({ type: "VIBEGRATIONS_CHAT_CONN_STATE", projectId: e, connState: t });
}
let E = { location: "connection", code: u.xA.SEND_FAILED },
    y = { location: "agent", code: u.xA.AGENT_ERROR };
function N(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E;
    r.h.dispatch({
        type: "VIBEGRATIONS_CHAT_STEP_APPEND",
        projectId: e,
        step: { type: "step", kind: "terminal_error", message: t },
    }),
        (0, u.Z0)(e, { ...n, message: t });
}
function _(e) {
    return `optimistic:${e}`;
}
function S(e, t) {
    let { content: n, nonce: l, attachments: a } = t;
    r.h.dispatch({
        type: "VIBEGRATIONS_CHAT_MESSAGE_APPEND",
        projectId: e,
        content: n,
        id: _(l),
        userId: o.default.getCurrentUser()?.id,
        timestamp: new Date().toISOString(),
        attachments: a,
    });
}
function A(e, t, n) {
    let l = t.pendingSends;
    for (let a of ((t.pendingSends = []), l)) S(e, a), N(e, n);
}
let C = {
        build_error: { location: "build", code: u.xA.BUILD_FAILED },
        healthcheck_failed: { location: "healthcheck", code: u.xA.HEALTHCHECK_FAILED },
        error: { location: "agent", code: u.xA.AGENT_ERROR },
    },
    T = {
        web: { location: "runtime_frame", code: u.xA.RUNTIME_FRAME_ERROR },
        preview: { location: "runtime_worker", code: u.xA.RUNTIME_WORKER_ERROR },
    },
    R = new Map();
async function I(e, t) {
    t.ws.close();
    try {
        let { ticket: n, baseUrl: l } = await B(e);
        if (t.disposed) return;
        t.ws.open({
            url: l,
            ticket: n,
            onEvent: (n) =>
                (function e(t, n, l) {
                    if (
                        (console.debug("[vibegrations] ws event", l.type),
                        "hello" !== l.type && "history" !== l.type && "open" !== k.get(t))
                    )
                        return void n.pendingEvents.push(l);
                    if ("hello" === l.type) (n.helloSeen = !0), n.backoff.succeed();
                    else if ("history" === l.type) {
                        let a = (l.messages ?? []).slice();
                        r.h.dispatch({ type: "VIBEGRATIONS_CHAT_HISTORY_SET", projectId: t, entries: a });
                        let i = n.pendingEvents;
                        for (let l of ((n.pendingEvents = []), w(t, "open"), i)) e(t, n, l);
                        let s = n.pendingModelSettings;
                        if (((n.pendingModelSettings = null), null != s))
                            try {
                                n.ws.sendModelSettings(s);
                            } catch (e) {
                                console.error("[vibegrations] staged model settings send failed", e);
                            }
                        let o = n.pendingSends;
                        for (let e of ((n.pendingSends = []), o)) {
                            S(t, e);
                            try {
                                n.ws.sendUserMessage(
                                    e.content,
                                    e.nonce,
                                    e.attachments?.map((e) => e.id),
                                );
                            } catch (e) {
                                console.error("[vibegrations] queued send failed", e),
                                    N(t, e instanceof Error ? e.message : "send failed");
                            }
                        }
                    } else if ("user_message" === l.type)
                        r.h.dispatch({
                            type: "VIBEGRATIONS_CHAT_MESSAGE_APPEND",
                            projectId: t,
                            content: l.content,
                            id: l.id,
                            ...(null != l.nonce ? { optimisticId: _(l.nonce) } : {}),
                            userId: l.user_id,
                            timestamp: l.ts,
                            attachments: l.attachments,
                        });
                    else if ("step" === l.type)
                        if ("reply" === l.kind) {
                            let e = l.message ?? "";
                            "" !== e
                                ? r.h.dispatch({
                                      type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                      projectId: t,
                                      patch: { content: e, kind: "message" },
                                  })
                                : N(t, x.intl.string(g.default.Z8Eo8I), y);
                        } else if ("announcement" === l.kind) {
                            let e = l.message ?? "";
                            "" !== e &&
                                r.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                    projectId: t,
                                    patch: { announcement: e },
                                });
                        } else if ("plan_proposed" === l.kind)
                            null != l.proposal
                                ? r.h.dispatch({
                                      type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                      projectId: t,
                                      patch: { proposal: l.proposal, kind: "proposal" },
                                  })
                                : N(t, x.intl.string(g.default.IHCafX), y);
                        else if ("ideas" === l.kind)
                            null != l.ideas &&
                                l.ideas.length > 0 &&
                                r.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                    projectId: t,
                                    patch: { ideas: l.ideas },
                                });
                        else if ("usage" === l.kind)
                            null != l.turn &&
                                null != l.project &&
                                r.h.dispatch({
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
                        } else if ("publish_result" === l.kind) {
                            let e = n.pendingPublish;
                            (n.pendingPublish = null),
                                null != e && (clearTimeout(e.timeout), e.resolve(l)),
                                !0 !== l.ok && (0, d.Is)(t, l.error ?? "publish_result not ok", !1);
                        } else if ("turn_result" === l.kind)
                            (0, u.Xv)(t, l),
                                "deployed" === l.result &&
                                    r.h.dispatch({
                                        type: "VIBEGRATIONS_CHAT_TURN_PATCH",
                                        projectId: t,
                                        patch: { kind: "plan_implemented" },
                                    }),
                                r.h.dispatch({
                                    type: "VIBEGRATIONS_CHAT_TURN_FINISHED",
                                    projectId: t,
                                    summary: l.summary,
                                });
                        else {
                            r.h.dispatch({ type: "VIBEGRATIONS_CHAT_STEP_APPEND", projectId: t, step: l });
                            let e = C[l.kind];
                            null != e && (0, u.Z0)(t, { ...e, message: l.message, details: l.stderr_tail }),
                                "preview_ready" === l.kind &&
                                    (0, d.tZ)(t, { isPreview: !0 }).catch((e) => {
                                        console.error("[vibegrations] post-preview-publish refresh failed", t, e);
                                    });
                        }
                    else
                        "model_settings" === l.type
                            ? r.h.dispatch({
                                  type: "VIBEGRATIONS_MODEL_SETTINGS_SET",
                                  projectId: t,
                                  settings: l.settings,
                                  choices: l.choices,
                              })
                            : (r.h.dispatch({ type: "VIBEGRATIONS_LOG_APPEND", projectId: t, log: l }),
                              (function (e, t) {
                                  if ("error" !== t.level) return;
                                  let n = null != t.source ? T[t.source] : void 0;
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
                (v(t, "Connection closed before the publish result arrived"), t.disposed)
                    ? w(e, "closed")
                    : t.helloSeen
                      ? ((t.reconnectPending = !0), w(e, "connecting"), t.backoff.fail(() => P(e)))
                      : (w(e, "closed"),
                        A(e, t, "Connection closed before the message was sent"),
                        (t.pendingModelSettings = null));
            },
            onError: (e) => {
                console.error("[vibegrations] ws error", e);
            },
        });
    } catch (n) {
        if ((console.error("[vibegrations] ws open failed", n), t.disposed)) return;
        w(e, "failed"),
            A(e, t, n instanceof Error ? n.message : "ws open failed"),
            (t.pendingModelSettings = null),
            v(t, "Connection failed before the publish result arrived"),
            (0, u.Z0)(e, {
                location: "connection",
                code: u.xA.WS_OPEN_FAILED,
                message: n instanceof Error ? n.message : "ws open failed",
            });
    }
}
function P(e) {
    let t = b.get(e);
    null == t &&
        ((t = {
            ws: new h(),
            backoff: new l.A(1e3, 3e4),
            helloSeen: !1,
            disposed: !1,
            reconnectPending: !1,
            pendingSends: [],
            pendingEvents: [],
            pendingModelSettings: null,
            pendingPublish: null,
        }),
        b.set(e, t));
    let n = t;
    (n.pendingEvents = []),
        (n.helloSeen = !1),
        (n.disposed = !1),
        (n.reconnectPending = !1),
        w(e, "connecting"),
        I(e, n);
}
function M(e) {
    let t = b.get(e);
    return (
        null != t &&
        ((t.disposed = !0),
        t.backoff.cancel(),
        v(t, "Connection closed before the publish result arrived"),
        t.ws.close(),
        b.delete(e),
        w(e, "closed"),
        !0)
    );
}
function L(e) {
    let t = b.get(e);
    if (null == t) return void P(e);
    let n = k.get(e);
    ("closed" !== n && "failed" !== n) || t.reconnectPending || P(e);
}
function O(e, t, n) {
    let l = t.trim(),
        a = null != n && n.length > 0 ? n : void 0;
    if ("" === l && null == a) return;
    let i = { content: l, nonce: (0, s.m)(), attachments: a },
        r = b.get(e);
    if (null != r && ("connecting" === k.get(e) || r.reconnectPending)) return void r.pendingSends.push(i);
    S(e, i);
    try {
        if (null == r) throw Error("Not connected");
        r.ws.sendUserMessage(
            i.content,
            i.nonce,
            i.attachments?.map((e) => e.id),
        );
    } catch (t) {
        console.error("[vibegrations] send failed", t), N(e, t instanceof Error ? t.message : "send failed");
    }
}
function D(e) {
    return new Promise((t, n) => {
        let l = b.get(e);
        if (null == l) return void n(Error("Not connected"));
        if (null != l.pendingPublish) return void n(Error("Publish already in flight"));
        let a = setTimeout(() => {
            v(l, "Publish timed out");
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
function U(e, t) {
    let n = b.get(e);
    null == n
        ? console.error("[vibegrations] stageModelSettings with no connection \u2014 call ensureConnection first")
        : (n.pendingModelSettings = t);
}
function G(e, t) {
    let n = b.get(e);
    try {
        if (null == n) throw Error("Not connected");
        n.ws.sendModelSettings(t);
    } catch (e) {
        console.error("[vibegrations] model settings send failed", e);
    }
}
async function B(e) {
    let { body: t } = await i.Bo.post({ url: f.Rsh.VIBEGRATIONS_PROJECT_WS_TICKET(e), rejectWithError: !0 });
    return { ticket: t.ticket, baseUrl: (0, m.V)() ?? t.url };
}
function H(e, t) {
    return null == t ? `${e}/agent/attachments` : `${e}/agent/attachments/${encodeURIComponent(t)}`;
}
async function V(e, t) {
    let { ticket: n, baseUrl: l } = await B(e),
        a = new URLSearchParams({ ticket: n, name: t.name }),
        i = await fetch(`${H(l)}?${a}`, {
            method: "POST",
            headers: { "content-type": "" !== t.type ? t.type : "application/octet-stream" },
            body: t,
        });
    if (!i.ok) throw Error(`attachment upload failed (${i.status})`);
    return await i.json();
}
async function W(e, t) {
    let { ticket: n, baseUrl: l } = await B(e),
        a = new URLSearchParams({ ticket: n }),
        i = await fetch(`${H(l, t)}?${a}`, { method: "DELETE", keepalive: !0 });
    if (!i.ok) throw Error(`attachment cleanup failed (${i.status})`);
}
function F(e, t) {
    return `${e}/agent/${t}`;
}
class $ extends Error {
    status;
    constructor(e) {
        super(`vibegrations archive request failed (${e ?? "network"})`),
            (this.status = e),
            (this.name = "VibegrationsArchiveError");
    }
}
async function z(e, t) {
    let n,
        l,
        { ticket: a, baseUrl: i } = await B(e),
        r =
            ((l = t
                .trim()
                .replace(/[^\w.\- ]/g, "")
                .trim()
                .replace(/\s+/g, "-")),
            `${"" === l ? "vibegration" : l}.zip`),
        s = new URLSearchParams({ ticket: a, name: r });
    try {
        n = await fetch(`${F(i, "export")}?${s}`, { method: "GET" });
    } catch {
        throw new $(null);
    }
    if (!n.ok) throw new $(n.status);
    return { blob: await n.blob(), filename: r };
}
async function K(e, t) {
    let n,
        { ticket: l, baseUrl: a } = await B(e),
        i = new URLSearchParams({ ticket: l });
    try {
        n = await fetch(`${F(a, "import")}?${i}`, {
            method: "POST",
            headers: { "content-type": "" !== t.type ? t.type : "application/octet-stream" },
            body: t,
        });
    } catch {
        throw new $(null);
    }
    if (!n.ok) throw new $(n.status);
    return { fileCount: (await n.json()).file_count };
}
async function X(e, t) {
    let { download: n = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { ticket: l, baseUrl: a } = await B(e),
        i = new URLSearchParams({ ticket: l });
    return n && i.set("download", "1"), `${H(a, t)}?${i}`;
}
async function Y(e, t) {
    let n = await X(e, t),
        l = await fetch(n, { method: "HEAD" });
    if (404 === l.status) return !1;
    if (!l.ok) throw Error(`attachment availability check failed (${l.status})`);
    return !0;
}
class q extends a.Ay.Store {
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
let Z = new q(r.h, {
    VIBEGRATIONS_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: n } = e;
        if (k.get(t) === n) return !1;
        k.set(t, n);
    },
    VIBEGRATIONS_MODEL_SETTINGS_SET: function (e) {
        let { projectId: t, settings: n, choices: l } = e;
        j.set(t, { settings: n, choices: l });
    },
    VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        if (!M(t)) return !1;
    },
    VIBEGRATIONS_PROJECTS_FETCH_SUCCESS: function (e) {
        let { projects: t } = e,
            n = new Set(t.map((e) => e.id)),
            l = !1;
        for (let e of Array.from(b.keys())) !n.has(e) && M(e) && (l = !0);
        if (!l) return !1;
    },
    LOGOUT: function () {
        if (0 === b.size) return !1;
        for (let e of Array.from(b.keys())) M(e);
    },
});
