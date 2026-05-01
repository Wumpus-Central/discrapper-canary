n.d(t, { AZ: () => R, Ay: () => L, Qn: () => g, cR: () => M }), n(321073);
var i,
    r = n(284009),
    a = n.n(r),
    l = n(636537),
    s = n(155718),
    E = n(58149),
    _ = n(626584),
    o = n(865116),
    u = n(322683),
    A = n(794691),
    d = n(495544),
    c = n(544180),
    I = n(927813),
    T = n(453771),
    N = n(513391),
    S = n(292348),
    O = n(743445),
    C = n(652215),
    p = n(381941),
    R =
        (((i = {})[(i.SEND = 0)] = "SEND"),
        (i[(i.EDIT = 1)] = "EDIT"),
        (i[(i.COMMAND = 2)] = "COMMAND"),
        (i[(i.SEND_ANNOUNCEMENT = 3)] = "SEND_ANNOUNCEMENT"),
        i);
let g = (e) => 1 === e.type,
    M = (e) => (0 === e.type || 3 === e.type ? e.message.nonce : g(e) ? e.message.messageId : e.message.data.id),
    h = [+I.A.Millis.MINUTE, 5 * I.A.Millis.MINUTE];
class m extends N.A {
    maxSize;
    requests = new Map();
    analyticsTimeouts = new Map();
    constructor(e = 5) {
        super(new _.A("MessageQueue")), (this.maxSize = e);
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
                (0, E.zV)(C.HAw.SEND_MESSAGE_QUEUED, { queued_duration_ms: e });
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
                (n.body.code === C.t02.SLOWMODE_RATE_LIMITED ||
                    n.body.code === C.t02.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED)
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
            s = (0, u.O)(),
            E = { mobile_network_type: c.A.getType(), ...r, ...(null != s && { signal_strength: s }) };
        if (o.Ay.get("send_fail_100")) {
            this.logger.log("Skipping message send because send_fail_100 is enabled"),
                t(null, { ok: !1, hasErr: !1, status: 500, headers: {}, body: "{}", text: "Simulated failure" });
            return;
        }
        let _ = this.createResponseHandler(e.nonce, t),
            d = new AbortController();
        this.startQueueMetricTimers(e.nonce),
            l.Bo.post(
                {
                    url: C.Rsh.MESSAGES(n),
                    body: E,
                    context: null != a ? { location: a } : void 0,
                    oldFormErrors: !0,
                    ...p.ZG,
                    signal: d.signal,
                    rejectWithError: !0,
                    onRequestCreated: () => {
                        null != e.nonce && this.requests.set(e.nonce, d);
                    },
                },
                _,
            );
    }
    handleSendAnnouncement(e, t) {
        let { channelId: n, analyticsLocation: i, ...r } = e,
            a = (0, A.A)() ?? i,
            s = (0, u.O)(),
            E = { mobile_network_type: c.A.getType(), ...r, ...(null != s && { signal_strength: s }) };
        if (o.Ay.get("send_fail_100")) {
            this.logger.log("Skipping message send because send_fail_100 is enabled"),
                t(null, { ok: !1, hasErr: !1, status: 500, headers: {}, body: "{}", text: "Simulated failure" });
            return;
        }
        let _ = this.createResponseHandler(e.nonce, t),
            d = new AbortController();
        this.startQueueMetricTimers(e.nonce),
            l.Bo.post(
                {
                    url: C.Rsh.MESSAGES_ANNOUNCEMENT(n),
                    body: E,
                    context: null != a ? { location: a } : void 0,
                    oldFormErrors: !0,
                    ...p.ZG,
                    signal: d.signal,
                    rejectWithError: !0,
                    onRequestCreated: () => {
                        null != e.nonce && this.requests.set(e.nonce, d);
                    },
                },
                _,
            );
    }
    handleEdit = (e, t) => {
        let { channelId: n, messageId: i, isCrossposted: r, ...a } = e,
            s = new AbortController(),
            E = this.createResponseHandler(i, t),
            _ = {
                url: C.Rsh.MESSAGE(n, i),
                body: a,
                retries: 1,
                oldFormErrors: !0,
                signal: s.signal,
                rejectWithError: !0,
                onRequestCreated: () => {
                    this.requests.set(i, s);
                },
            };
        r && (_.failImmediatelyWhenRateLimited = !0), l.Bo.patch(_, E);
    };
    handleCommand(e, t) {
        let {
                applicationId: n,
                guildId: i,
                channelId: r,
                data: E,
                nonce: _,
                attachments: o,
                maxSizeCallback: u,
                analytics_location: A,
                sectionName: c,
                source: I,
            } = e,
            N = {
                type: s.G4.APPLICATION_COMMAND,
                application_id: n,
                guild_id: i,
                channel_id: r,
                session_id: d.default.getSessionId(),
                data: E,
                nonce: _,
                analytics_location: A,
                section_name: c,
                source: I,
            };
        null != o &&
            (N.data.attachments = o.map(
                (e, t) => (
                    a()(e.status === O.jP.COMPLETED, "Uploads must be staged before trying to send a message"),
                    (0, S.OW)(e, t)
                ),
            ));
        let p = new AbortController();
        l.Bo.post(
            {
                url: C.Rsh.INTERACTIONS,
                body: N,
                signal: p.signal,
                rejectWithError: !0,
                onRequestCreated: (e) => {
                    this.requests.set(_, p),
                        e.on("progress", (e) => {
                            let { total: t } = e,
                                n = (0, T.o2)(i);
                            null != t && t > n && (this.cancelRequest(_), u?.(n));
                        });
                },
            },
            this.createResponseHandler(_, t),
        );
    }
}
let L = new m();
