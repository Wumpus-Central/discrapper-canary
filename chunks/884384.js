n.d(t, { AZ: () => g, Ay: () => f, Qn: () => R, cR: () => m }), n(321073);
var i,
    r = n(284009),
    a = n.n(r),
    l = n(636537),
    s = n(155718),
    o = n(58149),
    u = n(626584),
    _ = n(865116),
    E = n(322683),
    A = n(794691),
    c = n(495544),
    d = n(544180),
    I = n(927813),
    T = n(453771),
    N = n(513391),
    S = n(292348),
    p = n(743445),
    O = n(652215),
    C = n(381941),
    g =
        (((i = {})[(i.SEND = 0)] = "SEND"),
        (i[(i.EDIT = 1)] = "EDIT"),
        (i[(i.COMMAND = 2)] = "COMMAND"),
        (i[(i.SEND_ANNOUNCEMENT = 3)] = "SEND_ANNOUNCEMENT"),
        i);
let R = (e) => 1 === e.type,
    m = (e) => (0 === e.type || 3 === e.type ? e.message.nonce : R(e) ? e.message.messageId : e.message.data.id),
    h = [+I.A.Millis.MINUTE, 5 * I.A.Millis.MINUTE];
class M extends N.A {
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
            let i = this.queue.shift(),
                { message: r } = i;
            0 === r.type && r.message.channelId === e ? t.push(r.message) : n.push(i);
        }
        return this.queue.push(...n), this.logger.log("Cancel pending send requests", t.length), t;
    }
    startQueueMetricTimers(e) {
        let t = h.map((e) =>
            setTimeout(() => {
                (0, o.zV)(O.HAw.SEND_MESSAGE_QUEUED, { queued_duration_ms: e });
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
                (n.body.code === O.t02.SLOWMODE_RATE_LIMITED ||
                    n.body.code === O.t02.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED)
            )
                t(null, n);
            else if (429 === n.status) {
                let e = parseInt(n.headers["retry-after"]);
                isNaN(e) ? t(null, n) : t({ retryAfter: e * I.A.Millis.SECOND });
            } else t(null, n);
        };
    }
    handleSend(e, t) {
        let { channelId: n, analyticsLocation: i, ...r } = e,
            a = (0, A.A)() ?? i,
            s = (0, E.O)(),
            o = { mobile_network_type: d.A.getType(), ...r, ...(null != s && { signal_strength: s }) };
        if (_.Ay.get("send_fail_100")) {
            this.logger.log("Skipping message send because send_fail_100 is enabled"),
                t(null, { ok: !1, hasErr: !1, status: 500, headers: {}, body: "{}", text: "Simulated failure" });
            return;
        }
        let u = this.createResponseHandler(e.nonce, t),
            c = new AbortController();
        this.startQueueMetricTimers(e.nonce),
            l.Bo.post(
                {
                    url: O.Rsh.MESSAGES(n),
                    body: o,
                    context: null != a ? { location: a } : void 0,
                    oldFormErrors: !0,
                    ...C.ZG,
                    signal: c.signal,
                    rejectWithError: !0,
                    onRequestCreated: () => {
                        null != e.nonce && this.requests.set(e.nonce, c);
                    },
                },
                u,
            );
    }
    handleSendAnnouncement(e, t) {
        let { channelId: n, analyticsLocation: i, ...r } = e,
            a = (0, A.A)() ?? i,
            s = (0, E.O)(),
            o = { mobile_network_type: d.A.getType(), ...r, ...(null != s && { signal_strength: s }) };
        if (_.Ay.get("send_fail_100")) {
            this.logger.log("Skipping message send because send_fail_100 is enabled"),
                t(null, { ok: !1, hasErr: !1, status: 500, headers: {}, body: "{}", text: "Simulated failure" });
            return;
        }
        let u = this.createResponseHandler(e.nonce, t),
            c = new AbortController();
        this.startQueueMetricTimers(e.nonce),
            l.Bo.post(
                {
                    url: O.Rsh.MESSAGES_ANNOUNCEMENT(n),
                    body: o,
                    context: null != a ? { location: a } : void 0,
                    oldFormErrors: !0,
                    ...C.ZG,
                    signal: c.signal,
                    rejectWithError: !0,
                    onRequestCreated: () => {
                        null != e.nonce && this.requests.set(e.nonce, c);
                    },
                },
                u,
            );
    }
    handleEdit = (e, t) => {
        let { channelId: n, messageId: i, isCrossposted: r, ...a } = e,
            s = new AbortController(),
            o = this.createResponseHandler(i, t),
            u = {
                url: O.Rsh.MESSAGE(n, i),
                body: a,
                retries: 1,
                oldFormErrors: !0,
                signal: s.signal,
                rejectWithError: !0,
                onRequestCreated: () => {
                    this.requests.set(i, s);
                },
            };
        r && (u.failImmediatelyWhenRateLimited = !0), l.Bo.patch(u, o);
    };
    handleCommand(e, t) {
        let {
                applicationId: n,
                guildId: i,
                channelId: r,
                data: o,
                nonce: u,
                attachments: _,
                maxSizeCallback: E,
                analytics_location: A,
                sectionName: d,
                source: I,
            } = e,
            N = {
                type: s.G4.APPLICATION_COMMAND,
                application_id: n,
                guild_id: i,
                channel_id: r,
                session_id: c.default.getSessionId(),
                data: o,
                nonce: u,
                analytics_location: A,
                section_name: d,
                source: I,
            };
        null != _ &&
            (N.data.attachments = _.map(
                (e, t) => (
                    a()(e.status === p.jP.COMPLETED, "Uploads must be staged before trying to send a message"),
                    (0, S.OW)(e, t)
                ),
            ));
        let C = new AbortController();
        l.Bo.post(
            {
                url: O.Rsh.INTERACTIONS,
                body: N,
                signal: C.signal,
                rejectWithError: !0,
                onRequestCreated: (e) => {
                    this.requests.set(u, C),
                        e.on("progress", (e) => {
                            let { total: t } = e,
                                n = (0, T.o2)(i);
                            null != t && t > n && (this.cancelRequest(u), E?.(n));
                        });
                },
            },
            this.createResponseHandler(u, t),
        );
    }
}
let f = new M();
