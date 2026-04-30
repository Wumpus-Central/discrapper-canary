"use strict";
n.d(t, { AZ: () => N, Ay: () => R, Qn: () => y, cR: () => C }), n(321073);
var i,
    r = n(284009),
    s = n.n(r),
    a = n(636537),
    o = n(155718),
    l = n(95561),
    u = n(626584),
    c = n(865116),
    d = n(322683),
    _ = n(607399),
    f = n(652215);
function h() {
    if (_.Fr) return null;
    let { default: e } = n(773371),
        { default: t } = n(184809),
        { DEV_PID: i, getPID: r } = n(9302),
        s = e.isFocusedPidOutOfProcess() || e.isCurrentPidOutOfProcess(),
        a = t.isPinned(f.uss.TEXT);
    switch (!0) {
        case __OVERLAY__ && t.isInstanceLocked():
            return f.Xmn.OVERLAY_LOCKED_ACTIVATED;
        case __OVERLAY__ && a:
            return f.Xmn.OVERLAY_UNLOCKED_PINNED;
        case __OVERLAY__ && !t.isInstanceLocked():
            return f.Xmn.OVERLAY_UNLOCKED;
        case s && e.isFocusedPidInputLocked():
            return f.Xmn.OVERLAY_LOCKED_ACTIVATED;
        case s && !e.isFocusedPidInputLocked():
            return f.Xmn.OVERLAY_UNLOCKED;
        default:
            return null;
    }
}
var p = n(495544),
    E = n(544180),
    m = n(927813),
    g = n(453771),
    A = n(513391),
    I = n(292348),
    T = n(417325),
    S = n(381941),
    N =
        (((i = {})[(i.SEND = 0)] = "SEND"),
        (i[(i.EDIT = 1)] = "EDIT"),
        (i[(i.COMMAND = 2)] = "COMMAND"),
        (i[(i.SEND_ANNOUNCEMENT = 3)] = "SEND_ANNOUNCEMENT"),
        i);
let y = (e) => 1 === e.type,
    C = (e) => (0 === e.type || 3 === e.type ? e.message.nonce : y(e) ? e.message.messageId : e.message.data.id),
    v = [+m.A.Millis.MINUTE, 5 * m.A.Millis.MINUTE];
class O extends A.A {
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
        let t = v.map((e) =>
            setTimeout(() => {
                (0, l.zV)(f.HAw.SEND_MESSAGE_QUEUED, { queued_duration_ms: e });
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
                (n.body.code === f.t02.SLOWMODE_RATE_LIMITED ||
                    n.body.code === f.t02.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED)
            )
                t(null, n);
            else if (429 === n.status) {
                let e = parseInt(n.headers["retry-after"]);
                isNaN(e) ? t(null, n) : t({ retryAfter: e * m.A.Millis.SECOND });
            } else t(null, n);
        };
    }
    handleSend(e, t) {
        let { channelId: n, analyticsLocation: i, ...r } = e,
            s = h() ?? i,
            o = (0, d.O)(),
            l = { mobile_network_type: E.A.getType(), ...r, ...(null != o && { signal_strength: o }) };
        if (c.Ay.get("send_fail_100")) {
            this.logger.log("Skipping message send because send_fail_100 is enabled"),
                t(null, { ok: !1, hasErr: !1, status: 500, headers: {}, body: "{}", text: "Simulated failure" });
            return;
        }
        let u = this.createResponseHandler(e.nonce, t),
            _ = new AbortController();
        this.startQueueMetricTimers(e.nonce),
            a.Bo.post(
                {
                    url: f.Rsh.MESSAGES(n),
                    body: l,
                    context: null != s ? { location: s } : void 0,
                    oldFormErrors: !0,
                    ...S.ZG,
                    signal: _.signal,
                    rejectWithError: !0,
                    onRequestCreated: () => {
                        null != e.nonce && this.requests.set(e.nonce, _);
                    },
                },
                u,
            );
    }
    handleSendAnnouncement(e, t) {
        let { channelId: n, analyticsLocation: i, ...r } = e,
            s = h() ?? i,
            o = (0, d.O)(),
            l = { mobile_network_type: E.A.getType(), ...r, ...(null != o && { signal_strength: o }) };
        if (c.Ay.get("send_fail_100")) {
            this.logger.log("Skipping message send because send_fail_100 is enabled"),
                t(null, { ok: !1, hasErr: !1, status: 500, headers: {}, body: "{}", text: "Simulated failure" });
            return;
        }
        let u = this.createResponseHandler(e.nonce, t),
            _ = new AbortController();
        this.startQueueMetricTimers(e.nonce),
            a.Bo.post(
                {
                    url: f.Rsh.MESSAGES_ANNOUNCEMENT(n),
                    body: l,
                    context: null != s ? { location: s } : void 0,
                    oldFormErrors: !0,
                    ...S.ZG,
                    signal: _.signal,
                    rejectWithError: !0,
                    onRequestCreated: () => {
                        null != e.nonce && this.requests.set(e.nonce, _);
                    },
                },
                u,
            );
    }
    handleEdit = (e, t) => {
        let { channelId: n, messageId: i, isCrossposted: r, ...s } = e,
            o = new AbortController(),
            l = this.createResponseHandler(i, t),
            u = {
                url: f.Rsh.MESSAGE(n, i),
                body: s,
                retries: 1,
                oldFormErrors: !0,
                signal: o.signal,
                rejectWithError: !0,
                onRequestCreated: () => {
                    this.requests.set(i, o);
                },
            };
        r && (u.failImmediatelyWhenRateLimited = !0), a.Bo.patch(u, l);
    };
    handleCommand(e, t) {
        let {
                applicationId: n,
                guildId: i,
                channelId: r,
                data: l,
                nonce: u,
                attachments: c,
                maxSizeCallback: d,
                analytics_location: _,
                sectionName: h,
                source: E,
            } = e,
            m = {
                type: o.G4.APPLICATION_COMMAND,
                application_id: n,
                guild_id: i,
                channel_id: r,
                session_id: p.default.getSessionId(),
                data: l,
                nonce: u,
                analytics_location: _,
                section_name: h,
                source: E,
            };
        null != c &&
            (m.data.attachments = c.map(
                (e, t) => (
                    s()(e.status === T.jP.COMPLETED, "Uploads must be staged before trying to send a message"),
                    (0, I.OW)(e, t)
                ),
            ));
        let A = new AbortController();
        a.Bo.post(
            {
                url: f.Rsh.INTERACTIONS,
                body: m,
                signal: A.signal,
                rejectWithError: !0,
                onRequestCreated: (e) => {
                    this.requests.set(u, A),
                        e.on("progress", (e) => {
                            let { total: t } = e,
                                n = (0, g.o2)(i);
                            null != t && t > n && (this.cancelRequest(u), d?.(n));
                        });
                },
            },
            this.createResponseHandler(u, t),
        );
    }
}
let R = new O();
