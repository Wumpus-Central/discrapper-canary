n.d(t, { AZ: () => N, Ay: () => D, Qn: () => O, cR: () => R }), n(321073);
var i,
    r = n(284009),
    a = n.n(r),
    s = n(636537),
    l = n(155718),
    o = n(95561),
    d = n(626584),
    c = n(865116),
    u = n(322683),
    _ = n(607399),
    E = n(652215);
function A() {
    if (_.Fr) return null;
    let { default: e } = n(773371),
        { default: t } = n(184809),
        { DEV_PID: i, getPID: r } = n(9302),
        a = e.isFocusedPidOutOfProcess() || e.isCurrentPidOutOfProcess(),
        s = t.isPinned(E.uss.TEXT);
    switch (!0) {
        case __OVERLAY__ && t.isInstanceLocked():
            return E.Xmn.OVERLAY_LOCKED_ACTIVATED;
        case __OVERLAY__ && s:
            return E.Xmn.OVERLAY_UNLOCKED_PINNED;
        case __OVERLAY__ && !t.isInstanceLocked():
            return E.Xmn.OVERLAY_UNLOCKED;
        case a && e.isFocusedPidInputLocked():
            return E.Xmn.OVERLAY_LOCKED_ACTIVATED;
        case a && !e.isFocusedPidInputLocked():
            return E.Xmn.OVERLAY_UNLOCKED;
        default:
            return null;
    }
}
var h = n(280450),
    I = n(544180),
    f = n(927813),
    p = n(453771),
    T = n(513391),
    m = n(292348),
    g = n(280889),
    S = n(381941),
    N =
        (((i = {})[(i.SEND = 0)] = "SEND"),
        (i[(i.EDIT = 1)] = "EDIT"),
        (i[(i.COMMAND = 2)] = "COMMAND"),
        (i[(i.SEND_ANNOUNCEMENT = 3)] = "SEND_ANNOUNCEMENT"),
        i);
function C(e) {
    return 0 === e.type || 3 === e.type;
}
function O(e) {
    return 1 === e.type;
}
function R(e) {
    return C(e) ? e.message.nonce : O(e) ? e.message.messageId : e.message.data.id;
}
let L = [+f.A.Millis.MINUTE, 5 * f.A.Millis.MINUTE];
class y extends T.A {
    maxSize;
    requests = new Map();
    analyticsTimeouts = new Map();
    constructor(e = 5) {
        super(new d.A("MessageQueue")), (this.maxSize = e);
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
            this.cancelQueueMetricTimers(e),
            this.remove((t) => (C(t) || 2 === t.type) && t.message.nonce === e);
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
    clear() {
        this.requests.forEach((e) => e.abort()),
            this.requests.clear(),
            this.analyticsTimeouts.forEach((e, t) => this.cancelQueueMetricTimers(t)),
            super.clear();
    }
    startQueueMetricTimers(e) {
        let t = L.map((e) =>
            setTimeout(() => {
                (0, o.zV)(E.HAw.SEND_MESSAGE_QUEUED, { queued_duration_ms: e });
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
                (n.body.code === E.t02.SLOWMODE_RATE_LIMITED ||
                    n.body.code === E.t02.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED)
            )
                t(null, n);
            else if (429 === n.status) {
                let e = parseInt(n.headers["retry-after"]);
                isNaN(e) ? t(null, n) : t({ retryAfter: e * f.A.Millis.SECOND });
            } else t(null, n);
        };
    }
    handleSend(e, t) {
        let { channelId: n, analyticsLocation: i, ...r } = e,
            a = A() ?? i,
            l = (0, u.O)(),
            o = { mobile_network_type: I.A.getType(), ...r, ...(null != l && { signal_strength: l }) };
        if (c.Ay.get("send_fail_100")) {
            this.logger.log("Skipping message send because send_fail_100 is enabled"),
                t(null, { ok: !1, hasErr: !1, status: 500, headers: {}, body: "{}", text: "Simulated failure" });
            return;
        }
        let d = this.createResponseHandler(e.nonce, t),
            _ = new AbortController();
        null != e.nonce && this.requests.set(e.nonce, _),
            this.startQueueMetricTimers(e.nonce),
            s.Bo.post(
                {
                    url: E.Rsh.MESSAGES(n),
                    body: o,
                    context: null != a ? { location: a } : void 0,
                    oldFormErrors: !0,
                    ...S.ZG,
                    signal: _.signal,
                    rejectWithError: !0,
                },
                d,
            );
    }
    handleSendAnnouncement(e, t) {
        let { channelId: n, analyticsLocation: i, ...r } = e,
            a = A() ?? i,
            l = (0, u.O)(),
            o = { mobile_network_type: I.A.getType(), ...r, ...(null != l && { signal_strength: l }) };
        if (c.Ay.get("send_fail_100")) {
            this.logger.log("Skipping message send because send_fail_100 is enabled"),
                t(null, { ok: !1, hasErr: !1, status: 500, headers: {}, body: "{}", text: "Simulated failure" });
            return;
        }
        let d = this.createResponseHandler(e.nonce, t),
            _ = new AbortController();
        null != e.nonce && this.requests.set(e.nonce, _),
            this.startQueueMetricTimers(e.nonce),
            s.Bo.post(
                {
                    url: E.Rsh.MESSAGES_ANNOUNCEMENT(n),
                    body: o,
                    context: null != a ? { location: a } : void 0,
                    oldFormErrors: !0,
                    ...S.ZG,
                    signal: _.signal,
                    rejectWithError: !0,
                },
                d,
            );
    }
    handleEdit = (e, t) => {
        let { channelId: n, messageId: i, isCrossposted: r, ...a } = e,
            l = new AbortController(),
            o = this.createResponseHandler(i, t),
            d = {
                url: E.Rsh.MESSAGE(n, i),
                body: a,
                retries: 1,
                oldFormErrors: !0,
                signal: l.signal,
                rejectWithError: !0,
                onRequestCreated: () => {
                    this.requests.set(i, l);
                },
            };
        r && (d.failImmediatelyWhenRateLimited = !0), s.Bo.patch(d, o);
    };
    handleCommand(e, t) {
        let {
                applicationId: n,
                guildId: i,
                channelId: r,
                data: o,
                nonce: d,
                attachments: c,
                maxSizeCallback: u,
                analytics_location: _,
                sectionName: A,
                source: I,
            } = e,
            f = {
                type: l.G4.APPLICATION_COMMAND,
                application_id: n,
                guild_id: i,
                channel_id: r,
                session_id: h.default.getSessionId(),
                data: o,
                nonce: d,
                analytics_location: _,
                section_name: A,
                source: I,
            };
        null != c &&
            (f.data.attachments = c.map(
                (e, t) => (
                    a()(e.status === g.jP.COMPLETED, "Uploads must be staged before trying to send a message"),
                    (0, m.OW)(e, t)
                ),
            ));
        let T = new AbortController();
        this.requests.set(d, T),
            s.Bo.post(
                {
                    url: E.Rsh.INTERACTIONS,
                    body: f,
                    signal: T.signal,
                    rejectWithError: !0,
                    onRequestCreated: (e) => {
                        e.on("progress", (e) => {
                            let { total: t } = e,
                                n = (0, p.o2)(i);
                            null != t && t > n && (this.cancelRequest(d), u?.(n));
                        });
                    },
                },
                this.createResponseHandler(d, t),
            );
    }
}
let D = new y();
