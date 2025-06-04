let r;
n.d(t, { Z: () => z });
var i,
    a = n(512722),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(442837),
    u = n(570140),
    d = n(594190),
    f = n(444852),
    _ = n(569545),
    p = n(687516),
    h = n(139656),
    m = n(358085),
    g = n(314897),
    E = n(131951),
    b = n(158776),
    y = n(19780),
    O = n(981631);
function v(e, t, n) {
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
let I = {},
    S = {},
    T = {},
    A = {},
    N = {},
    C = O.hVg.THEATRE,
    P = {};
function R(e, t, n) {
    return (
        o()(null != r, 'Creating RTCConnection without session.'),
        new f.Z({
            sessionId: r,
            streamKey: e,
            serverId: t,
            initialLayout: C,
            analyticsContext: n,
            isStreamer: null != S[e],
            parentMediaSessionId: y.Z.getMediaSessionId()
        })
    );
}
function w() {
    l().forEach(P, (e, t) => {
        e.destroy(e.isOwner ? 'sender-disconnect' : 'receiver-disconnect'), delete P[t];
    });
}
function D(e) {
    (r = e.sessionId), w();
}
function L() {
    (r = null), w();
}
function x(e) {
    let { streamType: t, guildId: n, channelId: r, appContext: i, pid: a, sourceId: o, nativePickerStyleUsed: s, goLiveModalDurationMs: c } = e,
        u = (0, _.V9)({
            streamType: t,
            guildId: n,
            channelId: r,
            ownerId: g.default.getId()
        });
    if (
        ((I[u] = i),
        l().forEach(P, (e) => {
            let { analyticsContext: t, isOwner: n } = e;
            t.setActionContext(i), t.setNativePickerStyleUsed(s), n && t.trackStart();
        }),
        (A[u] = o),
        (T[u] = a),
        null != a)
    ) {
        let e = d.ZP.getGameForPID(a);
        null != e &&
            (S[u] = {
                name: e.name,
                id: e.id,
                exe: e.exeName,
                distributor: e.distributor
            });
    }
    null != c ? (N[u] = c) : delete N[u];
}
function k(e) {
    let { appContext: t, streamKey: n } = e;
    (I[n] = t),
        l().forEach(P, (e) => {
            let { analyticsContext: n, isOwner: r } = e;
            n.setActionContext(t), r && n.trackEnd();
        }),
        (A[n] = null),
        (T[n] = null),
        delete N[n];
}
function M(e) {
    let { streamKey: t, rtcServerId: n, region: r, viewerIds: i } = e,
        a = P[t];
    if (null == a && null != n) {
        null == T[t] && (S[t] = null);
        let e = (0, _.my)(t);
        null == S[t] && null == A[t] && (S[t] = (0, p.L2)(e, b.Z));
        let o = new f.A({
            streamRegion: r,
            streamApplication: S[t],
            streamSourceType: W(A[t]),
            actionContext: I[t],
            numViewers: null != i ? i.length : 0,
            goLiveModalDurationMs: N[t]
        });
        (a = R(t, n, o)), (P[t] = a);
    }
    u.Z.dispatch({
        type: 'MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET',
        mediaEngineConnectionId: a.getMediaEngineConnectionId()
    });
}
function j(e) {
    let t = P[e.streamKey];
    if (null == t) return !1;
    t.connect(e.endpoint, e.token);
}
function U(e) {
    let { connectionStats: t } = e;
    l().forEach(P, (e, n) => {
        e.updateStats(t);
    });
}
function G(e) {
    let { streamKey: t, viewerIds: n, paused: r } = e,
        i = P[t];
    if (null == i) return !1;
    null != n && i.analyticsContext.trackViewerCount(n.length), i.streamUpdate(r);
}
function B(e) {
    let { streamKey: t } = e,
        n = P[t];
    if (null == n) return !1;
    u.Z.dispatch({
        type: 'MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET',
        mediaEngineConnectionId: n.getMediaEngineConnectionId()
    }),
        n.destroy('stream-end'),
        delete P[t];
}
function F(e) {
    let { layout: t } = e;
    (C = t), Object.values(P).forEach((e) => e.layoutChange(t));
}
function V() {
    return !0;
}
function Z(e) {
    return l().some(P, (t) => t === e.connection);
}
function H(e) {
    let { userId: t, context: n, quality: r } = e;
    l().forEach(P, (e) => {
        e.setSimulcastDebugOverride(t, n, r);
    });
}
function Y(e) {
    let { streamId: t, width: n, height: r } = e;
    l().forEach(P, (e) => {
        null == e || e.setVideoSize(t, n, r);
    });
}
function W(e) {
    var t, n, r;
    if (null == e) return 'unknown';
    if (m.isPlatformEmbedded || (null == (t = platform) ? void 0 : t.name) === 'Chrome') {
        if (e.startsWith('web-contents-media-stream:')) return 'tab';
        else if (e.startsWith('window:')) return 'window';
        else if (e.startsWith('screen:')) return 'screen';
    } else if ((null == (n = platform) ? void 0 : n.name) === 'Firefox')
        if ('' !== e) return 'window';
        else return 'screen';
    else if ((null == (r = platform) ? void 0 : r.name) === 'Safari') return 'window';
    return 'unknown';
}
class K extends (i = c.ZP.Store) {
    getRTCConnections() {
        return P;
    }
    getAllActiveStreamKeys() {
        return Object.keys(P);
    }
    getRTCConnection(e) {
        return P[e];
    }
    getQuality(e) {
        var t, n;
        return (0, h.Z)(E.Z) && null != e && null != (n = null == (t = P[e]) ? void 0 : t.quality) ? n : O.IE4.UNKNOWN;
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
        return A[e];
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
            r = null == n ? void 0 : n.getSecureFramesRosterMap();
        return null == r ? void 0 : r.get(t);
    }
}
v(K, 'displayName', 'StreamRTCConnectionStore');
let z = new K(
    u.Z,
    !E.Z.isSupported() || __OVERLAY__
        ? {}
        : {
              CONNECTION_OPEN: D,
              CONNECTION_CLOSED: L,
              RTC_CONNECTION_STATE: V,
              RTC_CONNECTION_PING: V,
              RTC_CONNECTION_LOSS_RATE: V,
              RTC_CONNECTION_UPDATE_ID: Z,
              RTC_CONNECTION_SECURE_FRAMES_UPDATE: V,
              STREAM_START: x,
              STREAM_STOP: k,
              STREAM_CREATE: M,
              STREAM_SERVER_UPDATE: j,
              STREAM_UPDATE: G,
              STREAM_DELETE: B,
              MEDIA_ENGINE_CONNECTION_STATS: U,
              STREAM_LAYOUT_UPDATE: F,
              RTC_DEBUG_SET_SIMULCAST_OVERRIDE: H,
              VIDEO_SIZE_UPDATE: Y
          }
);
