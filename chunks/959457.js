let i, r;
n.d(t, { Z: () => ei }), n(653041);
var a,
    s = n(512722),
    o = n.n(s),
    l = n(392711),
    u = n.n(l),
    c = n(442837),
    d = n(46973),
    f = n(570140),
    _ = n(594190),
    p = n(444852),
    h = n(569545),
    m = n(687516),
    g = n(139656),
    E = n(358085),
    v = n(199902),
    y = n(314897),
    I = n(131951),
    b = n(158776),
    T = n(19780),
    S = n(981631),
    A = n(65154);
function N(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let C = {},
    R = {},
    O = {},
    D = {},
    x = {},
    L = S.hVg.THEATRE,
    P = {},
    w = [],
    M = 30;
function k(e, t, n) {
    return (
        o()(null != i, 'Creating RTCConnection without session.'),
        new p.Z({
            sessionId: i,
            streamKey: e,
            serverId: t,
            initialLayout: L,
            analyticsContext: n,
            isStreamer: null != R[e],
            parentMediaSessionId: T.Z.getMediaSessionId()
        })
    );
}
function U() {
    u().forEach(P, (e, t) => {
        e.destroy(e.isOwner ? 'sender-disconnect' : 'receiver-disconnect'), delete P[t];
    });
}
function G(e) {
    u().forEach(P, (t, n) => {
        t.updateStats(e);
    }),
        e
            .filter((e) => {
                let { connection: t } = e;
                return t.context === A.Yn.STREAM;
            })
            .forEach((e) => {
                let { stats: t } = e;
                f.Z.dispatch({
                    type: 'STREAM_STATS_UPDATE',
                    stats: t
                });
            });
}
function B(e) {
    (i = e.sessionId), (r = null), U();
}
function Z() {
    (i = null), (r = null), U();
}
function F(e) {
    let { streamType: t, guildId: n, channelId: i, appContext: r, pid: a, sourceId: s, nativePickerStyleUsed: o, goLiveModalDurationMs: l } = e,
        c = (0, h.V9)({
            streamType: t,
            guildId: n,
            channelId: i,
            ownerId: y.default.getId()
        });
    if (
        ((C[c] = r),
        u().forEach(P, (e) => {
            let { analyticsContext: t, isOwner: n } = e;
            t.setActionContext(r), t.setNativePickerStyleUsed(o), n && t.trackStart();
        }),
        (D[c] = s),
        (O[c] = a),
        null != a)
    ) {
        let e = _.ZP.getGameForPID(a);
        null != e &&
            (R[c] = {
                name: e.name,
                id: e.id,
                exe: e.exeName,
                distributor: e.distributor
            });
    }
    null != l ? (x[c] = l) : delete x[c];
}
function V(e) {
    let { appContext: t, streamKey: n } = e;
    (C[n] = t),
        u().forEach(P, (e) => {
            let { analyticsContext: n, isOwner: i } = e;
            n.setActionContext(t), i && n.trackEnd();
        }),
        (D[n] = null),
        (O[n] = null),
        delete x[n];
}
function j(e) {
    let { streamKey: t, rtcServerId: n, region: i, viewerIds: a } = e;
    r = t;
    let s = P[t];
    if (null == s && null != n) {
        null == O[t] && (R[t] = null);
        let e = (0, h.my)(t);
        null == R[t] && null == D[t] && (R[t] = (0, m.L2)(e, b.Z));
        let r = new p.A({
            streamRegion: i,
            streamApplication: R[t],
            streamSourceType: et(D[t]),
            actionContext: C[t],
            numViewers: null != a ? a.length : 0,
            goLiveModalDurationMs: x[t]
        });
        (s = k(t, n, r)), (P[t] = s);
    }
    (w = []), I.Z.getMediaEngine().on(d.aB.ConnectionStats, G);
}
function H(e) {
    let t = P[e.streamKey];
    if (null == t) return !1;
    t.connect(e.endpoint, e.token);
}
function Y(e) {
    let { stats: t } = e;
    if (null == t) return !1;
    w.push(t), w.length > M && w.shift();
}
function W(e) {
    let { streamKey: t, viewerIds: n, paused: i } = e,
        r = P[t];
    if (null == r) return !1;
    null != n && r.analyticsContext.trackViewerCount(n.length), r.streamUpdate(i);
}
function K(e) {
    let { streamKey: t } = e,
        n = P[t];
    if (null == n) return !1;
    t === r && ((r = null), I.Z.getMediaEngine().off(d.aB.ConnectionStats, G)), n.destroy('stream-end'), delete P[t];
}
function z(e) {
    let { layout: t } = e;
    (L = t), Object.values(P).forEach((e) => e.layoutChange(t));
}
function q() {
    return !0;
}
function Q(e) {
    return u().some(P, (t) => t === e.connection);
}
function X(e) {
    let { userId: t, context: n, quality: i } = e;
    u().forEach(P, (e) => {
        e.setSimulcastDebugOverride(t, n, i);
    });
}
function J(e) {
    let { streamId: t, width: n, height: i } = e;
    u().forEach(P, (e) => {
        null == e || e.setVideoSize(t, n, i);
    });
}
function $(e) {
    var t, n, i, r, a;
    let s = e.find((e) => 'video' === e.type);
    return null != s && 'video' === s.type
        ? {
              type: 'streamer',
              packetsSentOrReceived: null !== (n = s.packetsSent) && void 0 !== n ? n : 0,
              packetsLost: null !== (i = s.packetsLost) && void 0 !== i ? i : 0,
              frameRate: null !== (r = s.frameRateEncode) && void 0 !== r ? r : 0,
              resolution: null !== (a = null === (t = s.resolution) || void 0 === t ? void 0 : t.height) && void 0 !== a ? a : 0,
              bitrate: 0
          }
        : null;
}
function ee(e) {
    var t, n, i, r, a, s;
    if (null == e) return null;
    let o = e.find((e) => 'video' === e.type);
    return null != o && 'video' === o.type
        ? {
              type: 'spectator',
              packetsSentOrReceived: null !== (n = o.packetsReceived) && void 0 !== n ? n : 0,
              packetsLost: null !== (i = o.packetsLost) && void 0 !== i ? i : 0,
              frameRate: null !== (r = o.frameRateDecode) && void 0 !== r ? r : 0,
              bitrate: null !== (a = o.bitrate) && void 0 !== a ? a : 0,
              resolution: null !== (s = null === (t = o.resolution) || void 0 === t ? void 0 : t.height) && void 0 !== s ? s : 0
          }
        : null;
}
function et(e) {
    var t, n, i;
    if (null == e) return 'unknown';
    if (E.isPlatformEmbedded || (null === (t = platform) || void 0 === t ? void 0 : t.name) === 'Chrome') {
        if (e.startsWith('web-contents-media-stream:')) return 'tab';
        if (e.startsWith('window:')) return 'window';
        if (e.startsWith('screen:')) return 'screen';
    } else if ((null === (n = platform) || void 0 === n ? void 0 : n.name) === 'Firefox') return '' !== e ? 'window' : 'screen';
    else if ((null === (i = platform) || void 0 === i ? void 0 : i.name) === 'Safari') return 'window';
    return 'unknown';
}
class en extends (a = c.ZP.Store) {
    getActiveStreamKey() {
        return (0, g.Z)(I.Z) ? r : null;
    }
    getRTCConnections() {
        return P;
    }
    getAllActiveStreamKeys() {
        return Object.keys(P);
    }
    getRTCConnection(e) {
        return P[e];
    }
    getStatsHistory(e, t, n) {
        if (!(0, g.Z)(I.Z) || null == t) return null;
        if (n) {
            let n = v.Z.getActiveStreamForUser(t, e);
            if (null == n || 0 === v.Z.getViewerIds(n).length) return null;
        }
        return w.map((e) => (n ? $(e.rtp.outbound) : ee(e.rtp.inbound[t])));
    }
    getQuality() {
        if (!(0, g.Z)(I.Z)) return S.IE4.UNKNOWN;
        let e = this.getActiveStreamKey(),
            t = null != e ? P[e] : null;
        return null != t ? t.quality : S.IE4.UNKNOWN;
    }
    getMediaSessionId(e) {
        if (null == e) return null;
        let t = P[e];
        if (null != t) return null != t ? t.getMediaSessionId() : null;
    }
    getRtcConnectionId(e) {
        if (null == e) return null;
        let t = P[e];
        if (null != t) return null != t ? t.getRTCConnectionId() : null;
    }
    getVideoStats(e) {
        if (null == e) return null;
        let t = P[e];
        return null != t ? t.getVideoStats() : null;
    }
    getHostname(e) {
        if (null == e) return '';
        let t = P[e];
        return null != t && null != t.hostname ? t.hostname : '';
    }
    getRegion(e) {
        if (null == e) return null;
        let t = P[e];
        return null != t ? t.getRegion() : null;
    }
    getMaxViewers(e) {
        if (null == e) return null;
        let t = P[e];
        return null != t ? t.getMaxViewers() : null;
    }
    getStreamSourceId(e) {
        return D[e];
    }
    getUserIds(e) {
        let t = P[e];
        return null == t ? void 0 : t.getUserIds();
    }
    isUserConnected(e, t) {
        let n = P[e];
        return null == n ? void 0 : n.getIsUserConnected(t);
    }
    getSecureFramesState(e) {
        let t = P[e];
        return null == t ? void 0 : t.getSecureFramesState();
    }
    getSecureFramesRosterMapEntry(e, t) {
        let n = P[e],
            i = null == n ? void 0 : n.getSecureFramesRosterMap();
        return null == i ? void 0 : i.get(t);
    }
}
N(en, 'displayName', 'StreamRTCConnectionStore');
let ei = new en(
    f.Z,
    !I.Z.isSupported() || __OVERLAY__
        ? {}
        : {
              CONNECTION_OPEN: B,
              CONNECTION_CLOSED: Z,
              RTC_CONNECTION_STATE: q,
              RTC_CONNECTION_PING: q,
              RTC_CONNECTION_LOSS_RATE: q,
              RTC_CONNECTION_UPDATE_ID: Q,
              RTC_CONNECTION_SECURE_FRAMES_UPDATE: q,
              STREAM_START: F,
              STREAM_STOP: V,
              STREAM_CREATE: j,
              STREAM_SERVER_UPDATE: H,
              STREAM_UPDATE: W,
              STREAM_DELETE: K,
              STREAM_STATS_UPDATE: Y,
              STREAM_LAYOUT_UPDATE: z,
              RTC_DEBUG_SET_SIMULCAST_OVERRIDE: X,
              VIDEO_SIZE_UPDATE: J
          }
);
