let i, a;
var s,
    o = r(653041);
var l = r(512722),
    u = r.n(l),
    c = r(392711),
    d = r.n(c),
    f = r(442837),
    _ = r(46973),
    h = r(570140),
    p = r(594190),
    m = r(444852),
    g = r(569545),
    E = r(687516),
    v = r(139656),
    I = r(358085),
    T = r(199902),
    b = r(314897),
    y = r(131951),
    S = r(158776),
    A = r(19780),
    N = r(981631),
    C = r(65154);
function R(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let O = {},
    D = {},
    L = {},
    x = {},
    w = N.hVg.THEATRE,
    P = {},
    M = [],
    k = 30;
function U(e, n, r) {
    return (
        u()(null != i, 'Creating RTCConnection without session.'),
        new m.Z({
            sessionId: i,
            streamKey: e,
            serverId: n,
            initialLayout: w,
            analyticsContext: r,
            isStreamer: null != D[e],
            parentMediaSessionId: A.Z.getMediaSessionId()
        })
    );
}
function B() {
    d().forEach(P, (e, n) => {
        e.destroy(e.isOwner ? 'sender-disconnect' : 'receiver-disconnect'), delete P[n];
    });
}
function G(e) {
    d().forEach(P, (n, r) => {
        n.updateStats(e);
    }),
        e
            .filter((e) => {
                let { connection: n } = e;
                return n.context === C.Yn.STREAM;
            })
            .forEach((e) => {
                let { stats: n } = e;
                h.Z.dispatch({
                    type: 'STREAM_STATS_UPDATE',
                    stats: n
                });
            });
}
function Z(e) {
    (i = e.sessionId), (a = null), B();
}
function F() {
    (i = null), (a = null), B();
}
function V(e) {
    let { streamType: n, guildId: r, channelId: i, appContext: a, pid: s, sourceId: o } = e,
        l = (0, g.V9)({
            streamType: n,
            guildId: r,
            channelId: i,
            ownerId: b.default.getId()
        });
    if (
        ((O[l] = a),
        d().forEach(P, (e) => {
            let { analyticsContext: n } = e;
            n.setActionContext(a);
        }),
        (x[l] = o),
        (L[l] = s),
        null != s)
    ) {
        let e = p.ZP.getGameForPID(s);
        null != e &&
            (D[l] = {
                name: e.name,
                id: e.id,
                exe: e.exeName,
                distributor: e.distributor
            });
    }
}
function j(e) {
    let { appContext: n, streamKey: r } = e;
    (O[r] = n),
        d().forEach(P, (e) => {
            let { analyticsContext: r } = e;
            r.setActionContext(n);
        }),
        (x[r] = null),
        (L[r] = null);
}
function H(e) {
    let { streamKey: n, rtcServerId: r, region: i, viewerIds: s } = e;
    a = n;
    let o = P[n];
    if (null == o && null != r) {
        null == L[n] && (D[n] = null);
        let e = (0, g.my)(n);
        null == D[n] && null == x[n] && (D[n] = (0, E.L2)(e, S.Z));
        let a = new m.A({
            streamRegion: i,
            streamApplication: D[n],
            streamSourceType: en(x[n]),
            actionContext: O[n],
            numViewers: null != s ? s.length : 0
        });
        (o = U(n, r, a)), (P[n] = o);
    }
    (M = []), y.Z.getMediaEngine().on(_.aB.ConnectionStats, G);
}
function Y(e) {
    let n = P[e.streamKey];
    if (null == n) return !1;
    n.connect(e.endpoint, e.token);
}
function W(e) {
    let { stats: n } = e;
    if (null == n) return !1;
    M.push(n), M.length > k && M.shift();
}
function K(e) {
    let { streamKey: n, viewerIds: r, paused: i } = e,
        a = P[n];
    if (null == a) return !1;
    null != r && a.analyticsContext.trackViewerCount(r.length), a.streamUpdate(i);
}
function z(e) {
    let { streamKey: n } = e,
        r = P[n];
    if (null == r) return !1;
    n === a && ((a = null), y.Z.getMediaEngine().off(_.aB.ConnectionStats, G)), r.destroy('stream-end'), delete P[n];
}
function q(e) {
    let { layout: n } = e;
    (w = n), Object.values(P).forEach((e) => e.layoutChange(n));
}
function Q() {
    return !0;
}
function X(e) {
    return d().some(P, (n) => n === e.connection);
}
function J(e) {
    let { userId: n, context: r, quality: i } = e;
    d().forEach(P, (e) => {
        e.setSimulcastDebugOverride(n, r, i);
    });
}
function $(e) {
    let { streamId: n, width: r, height: i } = e;
    d().forEach(P, (e) => {
        null == e || e.setVideoSize(n, r, i);
    });
}
function ee(e) {
    var n, r, i, a, s;
    let o = e.find((e) => 'video' === e.type);
    return null != o && 'video' === o.type
        ? {
              type: 'streamer',
              packetsSentOrReceived: null !== (r = o.packetsSent) && void 0 !== r ? r : 0,
              packetsLost: null !== (i = o.packetsLost) && void 0 !== i ? i : 0,
              frameRate: null !== (a = o.frameRateEncode) && void 0 !== a ? a : 0,
              resolution: null !== (s = null === (n = o.resolution) || void 0 === n ? void 0 : n.height) && void 0 !== s ? s : 0,
              bitrate: 0
          }
        : null;
}
function et(e) {
    var n, r, i, a, s, o;
    if (null == e) return null;
    let l = e.find((e) => 'video' === e.type);
    return null != l && 'video' === l.type
        ? {
              type: 'spectator',
              packetsSentOrReceived: null !== (r = l.packetsReceived) && void 0 !== r ? r : 0,
              packetsLost: null !== (i = l.packetsLost) && void 0 !== i ? i : 0,
              frameRate: null !== (a = l.frameRateDecode) && void 0 !== a ? a : 0,
              bitrate: null !== (s = l.bitrate) && void 0 !== s ? s : 0,
              resolution: null !== (o = null === (n = l.resolution) || void 0 === n ? void 0 : n.height) && void 0 !== o ? o : 0
          }
        : null;
}
function en(e) {
    var n, r, i;
    if (null == e) return 'unknown';
    if (I.isPlatformEmbedded || (null === (n = platform) || void 0 === n ? void 0 : n.name) === 'Chrome') {
        if (e.startsWith('web-contents-media-stream:')) return 'tab';
        if (e.startsWith('window:')) return 'window';
        else if (e.startsWith('screen:')) return 'screen';
    } else if ((null === (r = platform) || void 0 === r ? void 0 : r.name) === 'Firefox') return '' !== e ? 'window' : 'screen';
    else if ((null === (i = platform) || void 0 === i ? void 0 : i.name) === 'Safari') return 'window';
    return 'unknown';
}
class er extends (s = f.ZP.Store) {
    getActiveStreamKey() {
        return (0, v.Z)(y.Z) ? a : null;
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
    getStatsHistory(e, n, r) {
        if (!(0, v.Z)(y.Z) || null == n) return null;
        if (r) {
            let r = T.Z.getActiveStreamForUser(n, e);
            if (null == r || 0 === T.Z.getViewerIds(r).length) return null;
        }
        return M.map((e) => (r ? ee(e.rtp.outbound) : et(e.rtp.inbound[n])));
    }
    getQuality() {
        if (!(0, v.Z)(y.Z)) return N.IE4.UNKNOWN;
        let e = this.getActiveStreamKey(),
            n = null != e ? P[e] : null;
        return null != n ? n.quality : N.IE4.UNKNOWN;
    }
    getMediaSessionId(e) {
        if (null == e) return null;
        let n = P[e];
        if (null != n) return null != n ? n.getMediaSessionId() : null;
    }
    getRtcConnectionId(e) {
        if (null == e) return null;
        let n = P[e];
        if (null != n) return null != n ? n.getRTCConnectionId() : null;
    }
    getVideoStats(e) {
        if (null == e) return null;
        let n = P[e];
        return null != n ? n.getVideoStats() : null;
    }
    getHostname(e) {
        if (null == e) return '';
        let n = P[e];
        return null != n ? (null != n.hostname ? n.hostname : '') : '';
    }
    getRegion(e) {
        if (null == e) return null;
        let n = P[e];
        return null != n ? n.getRegion() : null;
    }
    getMaxViewers(e) {
        if (null == e) return null;
        let n = P[e];
        return null != n ? n.getMaxViewers() : null;
    }
    getStreamSourceId(e) {
        return x[e];
    }
    getUserIds(e) {
        let n = P[e];
        return null == n ? void 0 : n.getUserIds();
    }
    isUserConnected(e, n) {
        let r = P[e];
        return null == r ? void 0 : r.getIsUserConnected(n);
    }
    getSecureFramesState(e) {
        let n = P[e];
        return null == n ? void 0 : n.getSecureFramesState();
    }
    getSecureFramesRosterMapEntry(e, n) {
        let r = P[e],
            i = null == r ? void 0 : r.getSecureFramesRosterMap();
        return null == i ? void 0 : i.get(n);
    }
}
R(er, 'displayName', 'StreamRTCConnectionStore'),
    (n.Z = new er(
        h.Z,
        !y.Z.isSupported() || __OVERLAY__
            ? {}
            : {
                  CONNECTION_OPEN: Z,
                  CONNECTION_CLOSED: F,
                  RTC_CONNECTION_STATE: Q,
                  RTC_CONNECTION_PING: Q,
                  RTC_CONNECTION_LOSS_RATE: Q,
                  RTC_CONNECTION_UPDATE_ID: X,
                  RTC_CONNECTION_SECURE_FRAMES_UPDATE: Q,
                  STREAM_START: V,
                  STREAM_STOP: j,
                  STREAM_CREATE: H,
                  STREAM_SERVER_UPDATE: Y,
                  STREAM_UPDATE: K,
                  STREAM_DELETE: z,
                  STREAM_STATS_UPDATE: W,
                  STREAM_LAYOUT_UPDATE: q,
                  RTC_DEBUG_SET_SIMULCAST_OVERRIDE: J,
                  VIDEO_SIZE_UPDATE: $
              }
    ));
