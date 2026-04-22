"use strict";
n.d(t, { AZ: () => S, Ay: () => v, Qn: () => y, cR: () => N }), n(321073);
var r,
    i = n(284009),
    s = n.n(i),
    a = n(562465),
    o = n(155718),
    l = n(58149),
    u = n(626584),
    d = n(865116),
    c = n(322683),
    _ = n(794691),
    f = n(961350),
    E = n(544180),
    h = n(927813),
    p = n(453771),
    m = n(513391),
    g = n(292348),
    A = n(743445),
    I = n(652215),
    T = n(381941),
    S =
        (((r = {})[(r.SEND = 0)] = "SEND"),
        (r[(r.EDIT = 1)] = "EDIT"),
        (r[(r.COMMAND = 2)] = "COMMAND"),
        (r[(r.SEND_ANNOUNCEMENT = 3)] = "SEND_ANNOUNCEMENT"),
        r);
let y = (e) => 1 === e.type,
    N = (e) => (0 === e.type || 3 === e.type ? e.message.nonce : y(e) ? e.message.messageId : e.message.data.id),
    O = [+h.A.Millis.MINUTE, 5 * h.A.Millis.MINUTE];
class R extends m.A {
    maxSize;
    requests = new Map();
    analyticsTimeouts = new Map();
    constructor(e = 5) {
        super(new u.A("MessageQueue")), (this.maxSize = e);
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
        let t = O.map((e) =>
            setTimeout(() => {
                (0, l.zV)(I.HAw.SEND_MESSAGE_QUEUED, { queued_duration_ms: e });
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
                (n.body.code === I.t02.SLOWMODE_RATE_LIMITED ||
                    n.body.code === I.t02.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED)
            )
                t(null, n);
            else if (429 === n.status) {
                let e = parseInt(n.headers["retry-after"]);
                isNaN(e) ? t(null, n) : t({ retryAfter: e * h.A.Millis.SECOND });
            } else t(null, n);
        };
    }
    handleSend(e, t) {
        let { channelId: n, analyticsLocation: r, ...i } = e,
            s = (0, _.A)() ?? r,
            o = (0, c.O)(),
            l = { mobile_network_type: E.A.getType(), ...i, ...(null != o && { signal_strength: o }) };
        if (d.Ay.get("send_fail_100")) {
            this.logger.log("Skipping message send because send_fail_100 is enabled"),
                t(null, { ok: !1, hasErr: !1, status: 500, headers: {}, body: "{}", text: "Simulated failure" });
            return;
        }
        let u = this.createResponseHandler(e.nonce, t),
            f = new AbortController();
        this.startQueueMetricTimers(e.nonce),
            a.Bo.post(
                {
                    url: I.Rsh.MESSAGES(n),
                    body: l,
                    context: null != s ? { location: s } : void 0,
                    oldFormErrors: !0,
                    ...T.ZG,
                    signal: f.signal,
                    rejectWithError: !0,
                    onRequestCreated: () => {
                        null != e.nonce && this.requests.set(e.nonce, f);
                    },
                },
                u,
            );
    }
    handleSendAnnouncement(e, t) {
        let { channelId: n, analyticsLocation: r, ...i } = e,
            s = (0, _.A)() ?? r,
            o = (0, c.O)(),
            l = { mobile_network_type: E.A.getType(), ...i, ...(null != o && { signal_strength: o }) };
        if (d.Ay.get("send_fail_100")) {
            this.logger.log("Skipping message send because send_fail_100 is enabled"),
                t(null, { ok: !1, hasErr: !1, status: 500, headers: {}, body: "{}", text: "Simulated failure" });
            return;
        }
        let u = this.createResponseHandler(e.nonce, t),
            f = new AbortController();
        this.startQueueMetricTimers(e.nonce),
            a.Bo.post(
                {
                    url: I.Rsh.MESSAGES_ANNOUNCEMENT(n),
                    body: l,
                    context: null != s ? { location: s } : void 0,
                    oldFormErrors: !0,
                    ...T.ZG,
                    signal: f.signal,
                    rejectWithError: !0,
                    onRequestCreated: () => {
                        null != e.nonce && this.requests.set(e.nonce, f);
                    },
                },
                u,
            );
    }
    handleEdit = (e, t) => {
        let { channelId: n, messageId: r, isCrossposted: i, ...s } = e,
            o = new AbortController(),
            l = this.createResponseHandler(r, t),
            u = {
                url: I.Rsh.MESSAGE(n, r),
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
                channelId: i,
                data: l,
                nonce: u,
                attachments: d,
                maxSizeCallback: c,
                analytics_location: _,
                sectionName: E,
                source: h,
            } = e,
            m = {
                type: o.G4.APPLICATION_COMMAND,
                application_id: n,
                guild_id: r,
                channel_id: i,
                session_id: f.default.getSessionId(),
                data: l,
                nonce: u,
                analytics_location: _,
                section_name: E,
                source: h,
            };
        null != d &&
            (m.data.attachments = d.map(
                (e, t) => (
                    s()(e.status === A.jP.COMPLETED, "Uploads must be staged before trying to send a message"),
                    (0, g.OW)(e, t)
                ),
            ));
        let T = new AbortController();
        a.Bo.post(
            {
                url: I.Rsh.INTERACTIONS,
                body: m,
                signal: T.signal,
                rejectWithError: !0,
                onRequestCreated: (e) => {
                    this.requests.set(u, T),
                        e.on("progress", (e) => {
                            let { total: t } = e,
                                n = (0, p.o2)(r);
                            null != t && t > n && (this.cancelRequest(u), c?.(n));
                        });
                },
            },
            this.createResponseHandler(u, t),
        );
    }
}
let v = new R();
