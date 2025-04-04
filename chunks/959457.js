let r, i;
n.d(t, { Z: () => X });
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
    g = n(450109),
    E = n(358085),
    b = n(199902),
    y = n(314897),
    v = n(131951),
    O = n(158776),
    I = n(19780),
    S = n(981631);
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
    w = S.hVg.THEATRE,
    D = {};
function L(e, t, n) {
    return (
        s()(null != r, 'Creating RTCConnection without session.'),
        new _.Z({
            sessionId: r,
            streamKey: e,
            serverId: t,
            initialLayout: w,
            analyticsContext: n,
            isStreamer: null != A[e],
            parentMediaSessionId: I.ZP.getMediaSessionId()
        })
    );
}
function x() {
    c().forEach(D, (e, t) => {
        e.destroy(e.isOwner ? 'sender-disconnect' : 'receiver-disconnect'), delete D[t];
    });
}
function M(e) {
    (r = e.sessionId), (i = null), x();
}
function k() {
    (r = null), (i = null), x();
}
function j(e) {
    let { streamType: t, guildId: n, channelId: r, appContext: i, pid: o, sourceId: a, nativePickerStyleUsed: s, goLiveModalDurationMs: l } = e,
        u = (0, p.V9)({
            streamType: t,
            guildId: n,
            channelId: r,
            ownerId: y.default.getId()
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
function U(e) {
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
function G(e) {
    let { streamKey: t, rtcServerId: n, region: r, viewerIds: o } = e;
    i = t;
    let a = D[t];
    if (null == a && null != n) {
        null == C[t] && (A[t] = null);
        let e = (0, p.my)(t);
        null == A[t] && null == R[t] && (A[t] = (0, h.L2)(e, O.Z));
        let i = new _.A({
            streamRegion: r,
            streamApplication: A[t],
            streamSourceType: q(R[t]),
            actionContext: N[t],
            numViewers: null != o ? o.length : 0,
            goLiveModalDurationMs: P[t]
        });
        (a = L(t, n, i)), (D[t] = a);
    }
    d.Z.dispatch({
        type: 'MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET',
        mediaEngineConnectionId: a.getMediaEngineConnectionId()
    });
}
function B(e) {
    let t = D[e.streamKey];
    if (null == t) return !1;
    t.connect(e.endpoint, e.token);
}
function V(e) {
    let { connectionStats: t } = e;
    c().forEach(D, (e, n) => {
        e.updateStats(t);
    });
}
function F(e) {
    let { streamKey: t, viewerIds: n, paused: r } = e,
        i = D[t];
    if (null == i) return !1;
    null != n && i.analyticsContext.trackViewerCount(n.length), i.streamUpdate(r);
}
function Z(e) {
    let { streamKey: t } = e,
        n = D[t];
    if (null == n) return !1;
    t === i && (i = null),
        d.Z.dispatch({
            type: 'MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET',
            mediaEngineConnectionId: n.getMediaEngineConnectionId()
        }),
        n.destroy('stream-end'),
        delete D[t];
}
function H(e) {
    let { layout: t } = e;
    (w = t), Object.values(D).forEach((e) => e.layoutChange(t));
}
function W() {
    return !0;
}
function Y(e) {
    return c().some(D, (t) => t === e.connection);
}
function K(e) {
    let { userId: t, context: n, quality: r } = e;
    c().forEach(D, (e) => {
        e.setSimulcastDebugOverride(t, n, r);
    });
}
function z(e) {
    let { streamId: t, width: n, height: r } = e;
    c().forEach(D, (e) => {
        null == e || e.setVideoSize(t, n, r);
    });
}
function q(e) {
    var t, n, r;
    if (null == e) return 'unknown';
    if (E.isPlatformEmbedded || (null == (t = platform) ? void 0 : t.name) === 'Chrome') {
        if (e.startsWith('web-contents-media-stream:')) return 'tab';
        else if (e.startsWith('window:')) return 'window';
        else if (e.startsWith('screen:')) return 'screen';
    } else if ((null == (n = platform) ? void 0 : n.name) === 'Firefox')
        if ('' !== e) return 'window';
        else return 'screen';
    else if ((null == (r = platform) ? void 0 : r.name) === 'Safari') return 'window';
    return 'unknown';
}
class Q extends (o = u.ZP.Store) {
    getActiveStreamKey() {
        return (0, m.Z)(v.Z) ? i : null;
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
        if (!(0, m.Z)(v.Z) || null == t) return null;
        let r = b.Z.getActiveStreamForUser(t, e);
        if (null == r || (n && 0 === b.Z.getViewerIds(r).length)) return null;
        let i = D[(0, p.V9)(r)];
        return null == i ? null : g.Z.getStatsHistory(i.getMediaEngineConnectionId()).map((e) => (n ? (0, I.ml)(e.stats.rtp.outbound) : (0, I.lx)(e.stats.rtp.inbound[t])));
    }
    getQuality() {
        if (!(0, m.Z)(v.Z)) return S.IE4.UNKNOWN;
        let e = this.getActiveStreamKey(),
            t = null != e ? D[e] : null;
        return null != t ? t.quality : S.IE4.UNKNOWN;
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
T(Q, 'displayName', 'StreamRTCConnectionStore');
let X = new Q(
    d.Z,
    !v.Z.isSupported() || __OVERLAY__
        ? {}
        : {
              CONNECTION_OPEN: M,
              CONNECTION_CLOSED: k,
              RTC_CONNECTION_STATE: W,
              RTC_CONNECTION_PING: W,
              RTC_CONNECTION_LOSS_RATE: W,
              RTC_CONNECTION_UPDATE_ID: Y,
              RTC_CONNECTION_SECURE_FRAMES_UPDATE: W,
              STREAM_START: j,
              STREAM_STOP: U,
              STREAM_CREATE: G,
              STREAM_SERVER_UPDATE: B,
              STREAM_UPDATE: F,
              STREAM_DELETE: Z,
              MEDIA_ENGINE_CONNECTION_STATS: V,
              STREAM_LAYOUT_UPDATE: H,
              RTC_DEBUG_SET_SIMULCAST_OVERRIDE: K,
              VIDEO_SIZE_UPDATE: z
          }
);
