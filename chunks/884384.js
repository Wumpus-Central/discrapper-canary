n.d(t, {
    AZ: () => C,
    Ay: () => x,
    Qn: () => R,
    cR: () => w,
}),
    n(321073),
    n(896048);
var r = n(284009),
    i = n.n(r),
    a = n(562465),
    s = n(155718),
    o = n(58149),
    l = n(626584),
    c = n(865116),
    u = n(322683),
    d = n(794691),
    f = n(961350),
    p = n(544180),
    _ = n(927813),
    h = n(453771),
    m = n(513391),
    g = n(292348),
    E = n(743445),
    b = n(652215),
    y = n(381941);
function O(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                O(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = T(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
var C = (function (e) {
    return (
        (e[(e.SEND = 0)] = "SEND"),
        (e[(e.EDIT = 1)] = "EDIT"),
        (e[(e.COMMAND = 2)] = "COMMAND"),
        (e[(e.SEND_ANNOUNCEMENT = 3)] = "SEND_ANNOUNCEMENT"),
        e
    );
})({});
let N = (e) => 0 === e.type || 3 === e.type,
    R = (e) => 1 === e.type,
    w = (e) => (N(e) ? e.message.nonce : R(e) ? e.message.messageId : e.message.data.id),
    P = [+_.A.Millis.MINUTE, 5 * _.A.Millis.MINUTE];
class D extends m.A {
    isFull() {
        return this.queue.length >= this.maxSize;
    }
    drain(e, t) {
        switch ((this.logger.log("Draining Message Queue with: ", e.type), e.type)) {
            case 0:
                this.handleSend(e.message, t);
                break;
            case 3:
                this.handleSendAnnouncement(e.message, t);
                break;
            case 1:
                this.handleEdit(e.message, t);
                break;
            case 2:
                this.handleCommand(e.message, t);
        }
    }
    cancelRequest(e) {
        var t;
        this.logger.log("Cancel message send: ", e),
            null == (t = this.requests.get(e)) || t.abort(),
            this.requests.delete(e),
            this.cancelQueueMetricTimers(e);
    }
    cancelPendingSendRequests(e) {
        let t = [],
            n = [];
        for (; this.queue.length > 0; ) {
            let r = this.queue.shift(),
                { message: i } = r;
            0 === i.type && i.message.channelId === e ? t.push(i.message) : n.push(r);
        }
        return this.queue.push(...n), this.logger.log("Cancel pending send requests", t.length), t;
    }
    startQueueMetricTimers(e) {
        let t = P.map((e) =>
            setTimeout(() => {
                (0, o.zV)(b.HAw.SEND_MESSAGE_QUEUED, { queued_duration_ms: e });
            }, e),
        );
        this.analyticsTimeouts.set(e, t);
    }
    cancelQueueMetricTimers(e) {
        var t;
        null == (t = this.analyticsTimeouts.get(e)) || t.forEach(clearTimeout), this.analyticsTimeouts.delete(e);
    }
    createResponseHandler(e, t) {
        return (n) => {
            if ((null != e && (this.requests.delete(e), this.cancelQueueMetricTimers(e)), n.hasErr)) return t(null, n);
            if (
                null != n.body &&
                (n.body.code === b.t02.SLOWMODE_RATE_LIMITED ||
                    n.body.code === b.t02.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED)
            )
                t(null, n);
            else if (429 === n.status) {
                let e = parseInt(n.headers["retry-after"]);
                isNaN(e) ? t(null, n) : t({ retryAfter: e * _.A.Millis.SECOND });
            } else t(null, n);
        };
    }
    handleSend(e, t) {
        var n;
        let { channelId: r, analyticsLocation: i } = e,
            s = I(e, ["channelId", "analyticsLocation"]),
            o = null != (n = (0, d.A)()) ? n : i,
            l = null != o ? { location: o } : void 0,
            f = (0, u.O)(),
            _ = A({ mobile_network_type: p.A.getType() }, s, null != f && { signal_strength: f });
        if (c.Ay.get("send_fail_100")) {
            this.logger.log("Skipping message send because send_fail_100 is enabled"),
                t(null, {
                    ok: !1,
                    hasErr: !1,
                    status: 500,
                    headers: {},
                    body: "{}",
                    text: "Simulated failure",
                });
            return;
        }
        let h = this.createResponseHandler(e.nonce, t),
            m = new AbortController();
        this.startQueueMetricTimers(e.nonce),
            a.Bo.post(
                S(
                    A(
                        {
                            url: b.Rsh.MESSAGES(r),
                            body: _,
                            context: l,
                            oldFormErrors: !0,
                        },
                        y.ZG,
                    ),
                    {
                        signal: m.signal,
                        rejectWithError: !0,
                        onRequestCreated: () => {
                            null != e.nonce && this.requests.set(e.nonce, m);
                        },
                    },
                ),
                h,
            );
    }
    handleSendAnnouncement(e, t) {
        var n;
        let { channelId: r, analyticsLocation: i } = e,
            s = I(e, ["channelId", "analyticsLocation"]),
            o = null != (n = (0, d.A)()) ? n : i,
            l = null != o ? { location: o } : void 0,
            f = (0, u.O)(),
            _ = A({ mobile_network_type: p.A.getType() }, s, null != f && { signal_strength: f });
        if (c.Ay.get("send_fail_100")) {
            this.logger.log("Skipping message send because send_fail_100 is enabled"),
                t(null, {
                    ok: !1,
                    hasErr: !1,
                    status: 500,
                    headers: {},
                    body: "{}",
                    text: "Simulated failure",
                });
            return;
        }
        let h = this.createResponseHandler(e.nonce, t),
            m = new AbortController();
        this.startQueueMetricTimers(e.nonce),
            a.Bo.post(
                S(
                    A(
                        {
                            url: b.Rsh.MESSAGES_ANNOUNCEMENT(r),
                            body: _,
                            context: l,
                            oldFormErrors: !0,
                        },
                        y.ZG,
                    ),
                    {
                        signal: m.signal,
                        rejectWithError: !0,
                        onRequestCreated: () => {
                            null != e.nonce && this.requests.set(e.nonce, m);
                        },
                    },
                ),
                h,
            );
    }
    handleCommand(e, t) {
        let {
                applicationId: n,
                guildId: r,
                channelId: o,
                data: l,
                nonce: c,
                attachments: u,
                maxSizeCallback: d,
                analytics_location: p,
                sectionName: _,
                source: m,
            } = e,
            y = {
                type: s.G4.APPLICATION_COMMAND,
                application_id: n,
                guild_id: r,
                channel_id: o,
                session_id: f.default.getSessionId(),
                data: l,
                nonce: c,
                analytics_location: p,
                section_name: _,
                source: m,
            };
        null != u &&
            (y.data.attachments = u.map(
                (e, t) => (
                    i()(e.status === E.jP.COMPLETED, "Uploads must be staged before trying to send a message"),
                    (0, g.OW)(e, t)
                ),
            ));
        let O = new AbortController();
        a.Bo.post(
            {
                url: b.Rsh.INTERACTIONS,
                body: y,
                signal: O.signal,
                rejectWithError: !0,
                onRequestCreated: (e) => {
                    this.requests.set(c, O),
                        e.on("progress", (e) => {
                            let { total: t } = e,
                                n = (0, h.o2)(r);
                            null != t && t > n && (this.cancelRequest(c), null == d || d(n));
                        });
                },
            },
            this.createResponseHandler(c, t),
        );
    }
    constructor(e = 5) {
        super(new l.A("MessageQueue")),
            O(this, "maxSize", void 0),
            O(this, "requests", void 0),
            O(this, "analyticsTimeouts", void 0),
            O(this, "handleEdit", void 0),
            (this.maxSize = e),
            (this.requests = new Map()),
            (this.analyticsTimeouts = new Map()),
            (this.handleEdit = (e, t) => {
                let [n, ...r] = [e, t],
                    { channelId: i, messageId: s, isCrossposted: o } = n,
                    l = I(n, ["channelId", "messageId", "isCrossposted"]),
                    [c] = r,
                    u = new AbortController(),
                    d = this.createResponseHandler(s, c),
                    f = {
                        url: b.Rsh.MESSAGE(i, s),
                        body: l,
                        retries: 1,
                        oldFormErrors: !0,
                        signal: u.signal,
                        rejectWithError: !0,
                        onRequestCreated: () => {
                            this.requests.set(s, u);
                        },
                    };
                o && (f.failImmediatelyWhenRateLimited = !0), a.Bo.patch(f, d);
            });
    }
}
let x = new D();
