let r;
(n.d(t, { Z: () => J }), n(388685));
var i,
    a = n(512722),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(442837),
    u = n(46973),
    d = n(570140),
    _ = n(594190),
    f = n(444852),
    p = n(569545),
    h = n(687516),
    m = n(139656),
    g = n(358085),
    E = n(314897),
    b = n(131951),
    y = n(158776),
    O = n(19780),
    v = n(981631),
    I = n(70722);
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
let S = {},
    A = {},
    N = {},
    C = {},
    R = {},
    P = {},
    w = v.hVg.THEATRE,
    D = {};
function L(e, t, n, i) {
    return (
        o()(null != r, 'Creating RTCConnection without session.'),
        new f.Z({
            sessionId: r,
            streamKey: e,
            serverId: t,
            channelId: n,
            initialLayout: w,
            analyticsContext: i,
            isStreamer: null != A[e],
            parentMediaSessionId: O.Z.getMediaSessionId()
        })
    );
}
function x() {
    l().forEach(D, (e, t) => {
        (e.destroy(e.isOwner ? 'sender-disconnect' : 'receiver-disconnect'), delete D[t], delete P[t]);
    });
}
function M(e) {
    ((r = e.sessionId), x());
}
function k() {
    ((r = null), x());
}
function j(e) {
    let { streamType: t, guildId: n, channelId: r, appContext: i, pid: a, sourceId: o, nativePickerStyleUsed: s, goLiveModalDurationMs: c } = e,
        u = (0, p.V9)({
            streamType: t,
            guildId: n,
            channelId: r,
            ownerId: E.default.getId()
        });
    if (
        ((S[u] = i),
        l().forEach(D, (e) => {
            let { analyticsContext: t, isOwner: n } = e;
            (t.setActionContext(i), t.setNativePickerStyleUsed(s), n && t.trackStart());
        }),
        (C[u] = o),
        (N[u] = a),
        null != a)
    ) {
        let e = _.ZP.getGameForPID(a);
        null != e &&
            (A[u] = {
                name: e.name,
                id: e.id,
                exe: e.exeName,
                distributor: e.distributor,
                sku: e.sku,
                gameMetadata: e.gameMetadata
            });
    }
    null != c ? (R[u] = c) : delete R[u];
}
function U(e) {
    let { appContext: t, streamKey: n } = e;
    ((S[n] = t),
        l().forEach(D, (e) => {
            let { analyticsContext: n, isOwner: r } = e;
            (n.setActionContext(t), r && n.trackEnd());
        }),
        (C[n] = null),
        (N[n] = null),
        delete R[n]);
}
function G(e) {
    let { streamKey: t, rtcServerId: n, rtcChannelId: r, region: i, viewerIds: a } = e,
        o = D[t];
    if (null == o && null != n) {
        null == N[t] && (A[t] = null);
        let e = (0, p.my)(t);
        null == A[t] && null == C[t] && (A[t] = (0, h.L2)(e, y.Z));
        let s = new f.A({
            streamRegion: i,
            streamApplication: A[t],
            streamSourceType: X(C[t]),
            actionContext: S[t],
            numViewers: null != a ? a.length : 0,
            goLiveModalDurationMs: R[t]
        });
        ((o = L(t, n, r, s)), (D[t] = o));
    }
    (delete P[t],
        d.Z.dispatch({
            type: 'MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET',
            mediaEngineConnectionId: o.getMediaEngineConnectionId()
        }));
}
function B(e) {
    let t = D[e.streamKey];
    if (null == t) return !1;
    t.connect(e.endpoint, e.token);
}
function V(e) {
    let { connectionStats: t } = e;
    l().forEach(D, (e, n) => {
        e.updateStats(t);
    });
}
function F(e) {
    let { streamKey: t, viewerIds: n, paused: r } = e,
        i = D[t];
    if (null == i) return !1;
    (null != n && i.analyticsContext.trackViewerCount(n.length), i.streamUpdate(r));
}
function Z(e) {
    let { streamKey: t } = e,
        n = D[t];
    if (null == n) return !1;
    (d.Z.dispatch({
        type: 'MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET',
        mediaEngineConnectionId: n.getMediaEngineConnectionId()
    }),
        n.destroy('stream-end'),
        delete D[t]);
}
function H(e) {
    let { layout: t } = e;
    ((w = t), Object.values(D).forEach((e) => e.layoutChange(t)));
}
function Y() {
    return !0;
}
function W(e) {
    let { context: t, wants: n, userId: r, guildId: i, channelId: a } = e,
        o = (0, p.V9)({
            streamType: null == i ? I.lo.CALL : I.lo.GUILD,
            guildId: i,
            channelId: a,
            ownerId: r
        });
    if (
        t !== u.Yn.STREAM ||
        null == D[o] ||
        !Object.entries(n).some((e) => {
            let [t, n] = e;
            return 'any' !== t && 0 !== n;
        })
    )
        return !1;
    P[o] = performance.now();
}
function K(e) {
    return l().some(D, (t) => t === e.connection);
}
function z(e) {
    let { userId: t, context: n, quality: r } = e;
    l().forEach(D, (e) => {
        e.setSimulcastDebugOverride(t, n, r);
    });
}
function q(e) {
    let { streamId: t, width: n, height: r } = e;
    l().forEach(D, (e) => {
        null == e || e.setVideoSize(t, n, r);
    });
}
function X(e) {
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
class Q extends (i = c.ZP.Store) {
    getRTCConnections() {
        return D;
    }
    getAllActiveStreamKeys() {
        return Object.keys(D);
    }
    getRTCConnection(e) {
        return D[e];
    }
    getQuality(e) {
        var t, n;
        return (0, m.Z)(b.Z) && null != e && null != (n = null == (t = D[e]) ? void 0 : t.quality) ? n : v.IE4.UNKNOWN;
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
        return C[e];
    }
    getLastNonZeroRemoteVideoSinkWantsTime(e) {
        return P[e];
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
let J = new Q(
    d.Z,
    !b.Z.isSupported() || __OVERLAY__
        ? {}
        : {
              CONNECTION_OPEN: M,
              CONNECTION_CLOSED: k,
              RTC_CONNECTION_STATE: Y,
              RTC_CONNECTION_PING: Y,
              RTC_CONNECTION_LOSS_RATE: Y,
              RTC_CONNECTION_UPDATE_ID: K,
              RTC_CONNECTION_SECURE_FRAMES_UPDATE: Y,
              RTC_CONNECTION_REMOTE_VIDEO_SINK_WANTS: W,
              STREAM_START: j,
              STREAM_STOP: U,
              STREAM_CREATE: G,
              STREAM_SERVER_UPDATE: B,
              STREAM_UPDATE: F,
              STREAM_DELETE: Z,
              MEDIA_ENGINE_CONNECTION_STATS: V,
              STREAM_LAYOUT_UPDATE: H,
              RTC_DEBUG_SET_SIMULCAST_OVERRIDE: z,
              VIDEO_SIZE_UPDATE: q
          }
);
