"use strict";
n.d(t, { AZ: () => T, Ay: () => N, Qn: () => S, cR: () => v }), n(321073);
var r = n(284009),
    i = n.n(r),
    a = n(562465),
    s = n(155718),
    o = n(58149),
    l = n(626584),
    u = n(865116),
    c = n(322683),
    d = n(794691),
    _ = n(961350),
    f = n(544180),
    p = n(927813),
    h = n(453771),
    m = n(513391),
    g = n(292348),
    E = n(743445),
    A = n(652215),
    I = n(381941),
    T = (function (e) {
        return (
            (e[(e.SEND = 0)] = "SEND"),
            (e[(e.EDIT = 1)] = "EDIT"),
            (e[(e.COMMAND = 2)] = "COMMAND"),
            (e[(e.SEND_ANNOUNCEMENT = 3)] = "SEND_ANNOUNCEMENT"),
            e
        );
    })({});
let y = (e) => 0 === e.type || 3 === e.type,
    S = (e) => 1 === e.type,
    v = (e) => (y(e) ? e.message.nonce : S(e) ? e.message.messageId : e.message.data.id),
    C = [+p.A.Millis.MINUTE, 5 * p.A.Millis.MINUTE];
class b extends m.A {
    maxSize;
    requests = new Map();
    analyticsTimeouts = new Map();
    constructor(e = 5) {
        super(new l.A("MessageQueue")), (this.maxSize = e);
    }
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
        this.logger.log("Cancel message send: ", e),
            this.requests.get(e)?.abort(),
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
        let t = C.map((e) =>
            setTimeout(() => {
                (0, o.zV)(A.HAw.SEND_MESSAGE_QUEUED, { queued_duration_ms: e });
            }, e),
        );
        this.analyticsTimeouts.set(e, t);
    }
    cancelQueueMetricTimers(e) {
        this.analyticsTimeouts.get(e)?.forEach(clearTimeout), this.analyticsTimeouts.delete(e);
    }
    createResponseHandler(e, t) {
        return (n) => {
            if ((null != e && (this.requests.delete(e), this.cancelQueueMetricTimers(e)), n.hasErr)) return t(null, n);
            if (
                null != n.body &&
                (n.body.code === A.t02.SLOWMODE_RATE_LIMITED ||
                    n.body.code === A.t02.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED)
            )
                t(null, n);
            else if (429 === n.status) {
                let e = parseInt(n.headers["retry-after"]);
                isNaN(e) ? t(null, n) : t({ retryAfter: e * p.A.Millis.SECOND });
            } else t(null, n);
        };
    }
    handleSend(e, t) {
        let { channelId: n, analyticsLocation: r, ...i } = e,
            s = (0, d.A)() ?? r,
            o = null != s ? { location: s } : void 0,
            l = (0, c.O)(),
            _ = { mobile_network_type: f.A.getType(), ...i, ...(null != l && { signal_strength: l }) };
        if (u.Ay.get("send_fail_100")) {
            this.logger.log("Skipping message send because send_fail_100 is enabled"),
                t(null, { ok: !1, hasErr: !1, status: 500, headers: {}, body: "{}", text: "Simulated failure" });
            return;
        }
        let p = this.createResponseHandler(e.nonce, t),
            h = new AbortController();
        this.startQueueMetricTimers(e.nonce),
            a.Bo.post(
                {
                    url: A.Rsh.MESSAGES(n),
                    body: _,
                    context: o,
                    oldFormErrors: !0,
                    ...I.ZG,
                    signal: h.signal,
                    rejectWithError: !0,
                    onRequestCreated: () => {
                        null != e.nonce && this.requests.set(e.nonce, h);
                    },
                },
                p,
            );
    }
    handleSendAnnouncement(e, t) {
        let { channelId: n, analyticsLocation: r, ...i } = e,
            s = (0, d.A)() ?? r,
            o = null != s ? { location: s } : void 0,
            l = (0, c.O)(),
            _ = { mobile_network_type: f.A.getType(), ...i, ...(null != l && { signal_strength: l }) };
        if (u.Ay.get("send_fail_100")) {
            this.logger.log("Skipping message send because send_fail_100 is enabled"),
                t(null, { ok: !1, hasErr: !1, status: 500, headers: {}, body: "{}", text: "Simulated failure" });
            return;
        }
        let p = this.createResponseHandler(e.nonce, t),
            h = new AbortController();
        this.startQueueMetricTimers(e.nonce),
            a.Bo.post(
                {
                    url: A.Rsh.MESSAGES_ANNOUNCEMENT(n),
                    body: _,
                    context: o,
                    oldFormErrors: !0,
                    ...I.ZG,
                    signal: h.signal,
                    rejectWithError: !0,
                    onRequestCreated: () => {
                        null != e.nonce && this.requests.set(e.nonce, h);
                    },
                },
                p,
            );
    }
    handleEdit = (e, t) => {
        let { channelId: n, messageId: r, isCrossposted: i, ...s } = e,
            o = new AbortController(),
            l = this.createResponseHandler(r, t),
            u = {
                url: A.Rsh.MESSAGE(n, r),
                body: s,
                retries: 1,
                oldFormErrors: !0,
                signal: o.signal,
                rejectWithError: !0,
                onRequestCreated: () => {
                    this.requests.set(r, o);
                },
            };
        i && (u.failImmediatelyWhenRateLimited = !0), a.Bo.patch(u, l);
    };
    handleCommand(e, t) {
        let {
                applicationId: n,
                guildId: r,
                channelId: o,
                data: l,
                nonce: u,
                attachments: c,
                maxSizeCallback: d,
                analytics_location: f,
                sectionName: p,
                source: m,
            } = e,
            I = {
                type: s.G4.APPLICATION_COMMAND,
                application_id: n,
                guild_id: r,
                channel_id: o,
                session_id: _.default.getSessionId(),
                data: l,
                nonce: u,
                analytics_location: f,
                section_name: p,
                source: m,
            };
        null != c &&
            (I.data.attachments = c.map(
                (e, t) => (
                    i()(e.status === E.jP.COMPLETED, "Uploads must be staged before trying to send a message"),
                    (0, g.OW)(e, t)
                ),
            ));
        let T = new AbortController();
        a.Bo.post(
            {
                url: A.Rsh.INTERACTIONS,
                body: I,
                signal: T.signal,
                rejectWithError: !0,
                onRequestCreated: (e) => {
                    this.requests.set(u, T),
                        e.on("progress", (e) => {
                            let { total: t } = e,
                                n = (0, h.o2)(r);
                            null != t && t > n && (this.cancelRequest(u), d?.(n));
                        });
                },
            },
            this.createResponseHandler(u, t),
        );
    }
}
let N = new b();
