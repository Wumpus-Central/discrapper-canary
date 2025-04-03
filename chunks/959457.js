let r, i;
n.d(t, { Z: () => et }), n(653041);
var o,
    a = n(512722),
    s = n.n(a),
    l = n(392711),
    c = n.n(l),
    u = n(442837),
    d = n(570140),
    f = n(594190),
    _ = n(444852),
    p = n(569545),
    h = n(687516),
    m = n(139656),
    g = n(358085),
    E = n(199902),
    b = n(314897),
    y = n(131951),
    v = n(158776),
    O = n(19780),
    I = n(981631),
    S = n(65154);
function T(e, t, n) {
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
let N = {},
    A = {},
    C = {},
    R = {},
    P = {},
    w = I.hVg.THEATRE,
    D = {},
    L = [],
    x = 30;
function M(e, t, n) {
    return (
        s()(null != r, 'Creating RTCConnection without session.'),
        new _.Z({
            sessionId: r,
            streamKey: e,
            serverId: t,
            initialLayout: w,
            analyticsContext: n,
            isStreamer: null != A[e],
            parentMediaSessionId: O.Z.getMediaSessionId()
        })
    );
}
function k() {
    c().forEach(D, (e, t) => {
        e.destroy(e.isOwner ? 'sender-disconnect' : 'receiver-disconnect'), delete D[t];
    });
}
function j(e) {
    (r = e.sessionId), (i = null), k();
}
function U() {
    (r = null), (i = null), k();
}
function G(e) {
    let { streamType: t, guildId: n, channelId: r, appContext: i, pid: o, sourceId: a, nativePickerStyleUsed: s, goLiveModalDurationMs: l } = e,
        u = (0, p.V9)({
            streamType: t,
            guildId: n,
            channelId: r,
            ownerId: b.default.getId()
        });
    if (
        ((N[u] = i),
        c().forEach(D, (e) => {
            let { analyticsContext: t, isOwner: n } = e;
            t.setActionContext(i), t.setNativePickerStyleUsed(s), n && t.trackStart();
        }),
        (R[u] = a),
        (C[u] = o),
        null != o)
    ) {
        let e = f.ZP.getGameForPID(o);
        null != e &&
            (A[u] = {
                name: e.name,
                id: e.id,
                exe: e.exeName,
                distributor: e.distributor
            });
    }
    null != l ? (P[u] = l) : delete P[u];
}
function B(e) {
    let { appContext: t, streamKey: n } = e;
    (N[n] = t),
        c().forEach(D, (e) => {
            let { analyticsContext: n, isOwner: r } = e;
            n.setActionContext(t), r && n.trackEnd();
        }),
        (R[n] = null),
        (C[n] = null),
        delete P[n];
}
function F(e) {
    let { streamKey: t, rtcServerId: n, region: r, viewerIds: o } = e;
    i = t;
    let a = D[t];
    if (null == a && null != n) {
        null == C[t] && (A[t] = null);
        let e = (0, p.my)(t);
        null == A[t] && null == R[t] && (A[t] = (0, h.L2)(e, v.Z));
        let i = new _.A({
            streamRegion: r,
            streamApplication: A[t],
            streamSourceType: $(R[t]),
            actionContext: N[t],
            numViewers: null != o ? o.length : 0,
            goLiveModalDurationMs: P[t]
        });
        (a = M(t, n, i)), (D[t] = a);
    }
    d.Z.dispatch({
        type: 'MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET',
        context: S.Yn.STREAM
    }),
        (L = []);
}
function V(e) {
    let t = D[e.streamKey];
    if (null == t) return !1;
    t.connect(e.endpoint, e.token);
}
function Z(e) {
    let { connectionStats: t } = e;
    c().forEach(D, (e, n) => {
        e.updateStats(t);
    }),
        t
            .filter((e) => {
                let { context: t } = e;
                return t === S.Yn.STREAM;
            })
            .forEach((e) => {
                let { stats: t } = e;
                L.push(t), L.length > x && L.shift();
            });
}
function H(e) {
    let { streamKey: t, viewerIds: n, paused: r } = e,
        i = D[t];
    if (null == i) return !1;
    null != n && i.analyticsContext.trackViewerCount(n.length), i.streamUpdate(r);
}
function W(e) {
    let { streamKey: t } = e,
        n = D[t];
    if (null == n) return !1;
    t === i && (i = null), n.destroy('stream-end'), delete D[t];
}
function Y(e) {
    let { layout: t } = e;
    (w = t), Object.values(D).forEach((e) => e.layoutChange(t));
}
function K() {
    return !0;
}
function z(e) {
    return c().some(D, (t) => t === e.connection);
}
function q(e) {
    let { userId: t, context: n, quality: r } = e;
    c().forEach(D, (e) => {
        e.setSimulcastDebugOverride(t, n, r);
    });
}
function Q(e) {
    let { streamId: t, width: n, height: r } = e;
    c().forEach(D, (e) => {
        null == e || e.setVideoSize(t, n, r);
    });
}
function X(e) {
    var t, n, r, i, o;
    let a = e.find((e) => 'video' === e.type);
    return null != a && 'video' === a.type
        ? {
              type: 'streamer',
              packetsSentOrReceived: null != (n = a.packetsSent) ? n : 0,
              packetsLost: null != (r = a.packetsLost) ? r : 0,
              frameRate: null != (i = a.frameRateEncode) ? i : 0,
              resolution: null != (o = null == (t = a.resolution) ? void 0 : t.height) ? o : 0,
              bitrate: 0
          }
        : null;
}
function J(e) {
    var t, n, r, i, o, a;
    if (null == e) return null;
    let s = e.find((e) => 'video' === e.type);
    return null != s && 'video' === s.type
        ? {
              type: 'spectator',
              packetsSentOrReceived: null != (n = s.packetsReceived) ? n : 0,
              packetsLost: null != (r = s.packetsLost) ? r : 0,
              frameRate: null != (i = s.frameRateDecode) ? i : 0,
              bitrate: null != (o = s.bitrate) ? o : 0,
              resolution: null != (a = null == (t = s.resolution) ? void 0 : t.height) ? a : 0
          }
        : null;
}
function $(e) {
    var t, n, r;
    if (null == e) return 'unknown';
    if (g.isPlatformEmbedded || (null == (t = platform) ? void 0 : t.name) === 'Chrome') {
        if (e.startsWith('web-contents-media-stream:')) return 'tab';
        else if (e.startsWith('window:')) return 'window';
        else if (e.startsWith('screen:')) return 'screen';
    } else if ((null == (n = platform) ? void 0 : n.name) === 'Firefox')
        if ('' !== e) return 'window';
        else return 'screen';
    else if ((null == (r = platform) ? void 0 : r.name) === 'Safari') return 'window';
    return 'unknown';
}
class ee extends (o = u.ZP.Store) {
    getActiveStreamKey() {
        return (0, m.Z)(y.Z) ? i : null;
    }
    getRTCConnections() {
        return D;
    }
    getAllActiveStreamKeys() {
        return Object.keys(D);
    }
    getRTCConnection(e) {
        return D[e];
    }
    getStatsHistory(e, t, n) {
        if (!(0, m.Z)(y.Z) || null == t) return null;
        if (n) {
            let n = E.Z.getActiveStreamForUser(t, e);
            if (null == n || 0 === E.Z.getViewerIds(n).length) return null;
        }
        return L.map((e) => (n ? X(e.rtp.outbound) : J(e.rtp.inbound[t])));
    }
    getQuality() {
        if (!(0, m.Z)(y.Z)) return I.IE4.UNKNOWN;
        let e = this.getActiveStreamKey(),
            t = null != e ? D[e] : null;
        return null != t ? t.quality : I.IE4.UNKNOWN;
    }
    getMediaSessionId(e) {
        if (null == e) return null;
        let t = D[e];
        if (null != t) return null != t ? t.getMediaSessionId() : null;
    }
    getRtcConnectionId(e) {
        if (null == e) return null;
        let t = D[e];
        if (null != t) return null != t ? t.getRTCConnectionId() : null;
    }
    getVideoStats(e) {
        if (null == e) return null;
        let t = D[e];
        return null != t ? t.getVideoStats() : null;
    }
    getHostname(e) {
        if (null == e) return '';
        let t = D[e];
        return null != t && null != t.hostname ? t.hostname : '';
    }
    getRegion(e) {
        if (null == e) return null;
        let t = D[e];
        return null != t ? t.getRegion() : null;
    }
    getMaxViewers(e) {
        if (null == e) return null;
        let t = D[e];
        return null != t ? t.getMaxViewers() : null;
    }
    getStreamSourceId(e) {
        return R[e];
    }
    getUserIds(e) {
        let t = D[e];
        return null == t ? void 0 : t.getUserIds();
    }
    isUserConnected(e, t) {
        let n = D[e];
        return null == n ? void 0 : n.getIsUserConnected(t);
    }
    getSecureFramesState(e) {
        let t = D[e];
        return null == t ? void 0 : t.getSecureFramesState();
    }
    getSecureFramesRosterMapEntry(e, t) {
        let n = D[e],
            r = null == n ? void 0 : n.getSecureFramesRosterMap();
        return null == r ? void 0 : r.get(t);
    }
}
T(ee, 'displayName', 'StreamRTCConnectionStore');
let et = new ee(
    d.Z,
    !y.Z.isSupported() || __OVERLAY__
        ? {}
        : {
              CONNECTION_OPEN: j,
              CONNECTION_CLOSED: U,
              RTC_CONNECTION_STATE: K,
              RTC_CONNECTION_PING: K,
              RTC_CONNECTION_LOSS_RATE: K,
              RTC_CONNECTION_UPDATE_ID: z,
              RTC_CONNECTION_SECURE_FRAMES_UPDATE: K,
              STREAM_START: G,
              STREAM_STOP: B,
              STREAM_CREATE: F,
              STREAM_SERVER_UPDATE: V,
              STREAM_UPDATE: H,
              STREAM_DELETE: W,
              MEDIA_ENGINE_CONNECTION_STATS: Z,
              STREAM_LAYOUT_UPDATE: Y,
              RTC_DEBUG_SET_SIMULCAST_OVERRIDE: q,
              VIDEO_SIZE_UPDATE: Q
          }
);
