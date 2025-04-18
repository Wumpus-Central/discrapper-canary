let r, i;
n.d(t, { Z: () => q });
var a,
    o = n(512722),
    s = n.n(o),
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
    E = n(314897),
    b = n(131951),
    y = n(158776),
    v = n(19780),
    O = n(981631);
function I(e, t, n) {
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
let S = {},
    T = {},
    N = {},
    A = {},
    C = {},
    R = O.hVg.THEATRE,
    P = {};
function w(e, t, n) {
    return (
        s()(null != r, 'Creating RTCConnection without session.'),
        new _.Z({
            sessionId: r,
            streamKey: e,
            serverId: t,
            initialLayout: R,
            analyticsContext: n,
            isStreamer: null != T[e],
            parentMediaSessionId: v.Z.getMediaSessionId()
        })
    );
}
function D() {
    c().forEach(P, (e, t) => {
        e.destroy(e.isOwner ? 'sender-disconnect' : 'receiver-disconnect'), delete P[t];
    });
}
function L(e) {
    (r = e.sessionId), (i = null), D();
}
function x() {
    (r = null), (i = null), D();
}
function M(e) {
    let { streamType: t, guildId: n, channelId: r, appContext: i, pid: a, sourceId: o, nativePickerStyleUsed: s, goLiveModalDurationMs: l } = e,
        u = (0, p.V9)({
            streamType: t,
            guildId: n,
            channelId: r,
            ownerId: E.default.getId()
        });
    if (
        ((S[u] = i),
        c().forEach(P, (e) => {
            let { analyticsContext: t, isOwner: n } = e;
            t.setActionContext(i), t.setNativePickerStyleUsed(s), n && t.trackStart();
        }),
        (A[u] = o),
        (N[u] = a),
        null != a)
    ) {
        let e = f.ZP.getGameForPID(a);
        null != e &&
            (T[u] = {
                name: e.name,
                id: e.id,
                exe: e.exeName,
                distributor: e.distributor
            });
    }
    null != l ? (C[u] = l) : delete C[u];
}
function k(e) {
    let { appContext: t, streamKey: n } = e;
    (S[n] = t),
        c().forEach(P, (e) => {
            let { analyticsContext: n, isOwner: r } = e;
            n.setActionContext(t), r && n.trackEnd();
        }),
        (A[n] = null),
        (N[n] = null),
        delete C[n];
}
function j(e) {
    let { streamKey: t, rtcServerId: n, region: r, viewerIds: a } = e;
    i = t;
    let o = P[t];
    if (null == o && null != n) {
        null == N[t] && (T[t] = null);
        let e = (0, p.my)(t);
        null == T[t] && null == A[t] && (T[t] = (0, h.L2)(e, y.Z));
        let i = new _.A({
            streamRegion: r,
            streamApplication: T[t],
            streamSourceType: K(A[t]),
            actionContext: S[t],
            numViewers: null != a ? a.length : 0,
            goLiveModalDurationMs: C[t]
        });
        (o = w(t, n, i)), (P[t] = o);
    }
    d.Z.dispatch({
        type: 'MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET',
        mediaEngineConnectionId: o.getMediaEngineConnectionId()
    });
}
function U(e) {
    let t = P[e.streamKey];
    if (null == t) return !1;
    t.connect(e.endpoint, e.token);
}
function G(e) {
    let { connectionStats: t } = e;
    c().forEach(P, (e, n) => {
        e.updateStats(t);
    });
}
function B(e) {
    let { streamKey: t, viewerIds: n, paused: r } = e,
        i = P[t];
    if (null == i) return !1;
    null != n && i.analyticsContext.trackViewerCount(n.length), i.streamUpdate(r);
}
function F(e) {
    let { streamKey: t } = e,
        n = P[t];
    if (null == n) return !1;
    t === i && (i = null),
        d.Z.dispatch({
            type: 'MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET',
            mediaEngineConnectionId: n.getMediaEngineConnectionId()
        }),
        n.destroy('stream-end'),
        delete P[t];
}
function V(e) {
    let { layout: t } = e;
    (R = t), Object.values(P).forEach((e) => e.layoutChange(t));
}
function Z() {
    return !0;
}
function H(e) {
    return c().some(P, (t) => t === e.connection);
}
function W(e) {
    let { userId: t, context: n, quality: r } = e;
    c().forEach(P, (e) => {
        e.setSimulcastDebugOverride(t, n, r);
    });
}
function Y(e) {
    let { streamId: t, width: n, height: r } = e;
    c().forEach(P, (e) => {
        null == e || e.setVideoSize(t, n, r);
    });
}
function K(e) {
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
class z extends (a = u.ZP.Store) {
    getActiveStreamKey() {
        return (0, m.Z)(b.Z) ? i : null;
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
    getQuality() {
        if (!(0, m.Z)(b.Z)) return O.IE4.UNKNOWN;
        let e = this.getActiveStreamKey(),
            t = null != e ? P[e] : null;
        return null != t ? t.quality : O.IE4.UNKNOWN;
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
I(z, 'displayName', 'StreamRTCConnectionStore');
let q = new z(
    d.Z,
    !b.Z.isSupported() || __OVERLAY__
        ? {}
        : {
              CONNECTION_OPEN: L,
              CONNECTION_CLOSED: x,
              RTC_CONNECTION_STATE: Z,
              RTC_CONNECTION_PING: Z,
              RTC_CONNECTION_LOSS_RATE: Z,
              RTC_CONNECTION_UPDATE_ID: H,
              RTC_CONNECTION_SECURE_FRAMES_UPDATE: Z,
              STREAM_START: M,
              STREAM_STOP: k,
              STREAM_CREATE: j,
              STREAM_SERVER_UPDATE: U,
              STREAM_UPDATE: B,
              STREAM_DELETE: F,
              MEDIA_ENGINE_CONNECTION_STATS: G,
              STREAM_LAYOUT_UPDATE: V,
              RTC_DEBUG_SET_SIMULCAST_OVERRIDE: W,
              VIDEO_SIZE_UPDATE: Y
          }
);
