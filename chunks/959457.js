let r, i;
n.d(t, { Z: () => J });
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
    S = n(981631),
    T = n(65154);
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
let A = {},
    C = {},
    R = {},
    P = {},
    w = {},
    D = S.hVg.THEATRE,
    L = {};
function x(e, t, n) {
    return (
        s()(null != r, 'Creating RTCConnection without session.'),
        new _.Z({
            sessionId: r,
            streamKey: e,
            serverId: t,
            initialLayout: D,
            analyticsContext: n,
            isStreamer: null != C[e],
            parentMediaSessionId: I.ZP.getMediaSessionId()
        })
    );
}
function M() {
    c().forEach(L, (e, t) => {
        e.destroy(e.isOwner ? 'sender-disconnect' : 'receiver-disconnect'), delete L[t];
    });
}
function k(e) {
    (r = e.sessionId), (i = null), M();
}
function j() {
    (r = null), (i = null), M();
}
function U(e) {
    let { streamType: t, guildId: n, channelId: r, appContext: i, pid: o, sourceId: a, nativePickerStyleUsed: s, goLiveModalDurationMs: l } = e,
        u = (0, p.V9)({
            streamType: t,
            guildId: n,
            channelId: r,
            ownerId: y.default.getId()
        });
    if (
        ((A[u] = i),
        c().forEach(L, (e) => {
            let { analyticsContext: t, isOwner: n } = e;
            t.setActionContext(i), t.setNativePickerStyleUsed(s), n && t.trackStart();
        }),
        (P[u] = a),
        (R[u] = o),
        null != o)
    ) {
        let e = f.ZP.getGameForPID(o);
        null != e &&
            (C[u] = {
                name: e.name,
                id: e.id,
                exe: e.exeName,
                distributor: e.distributor
            });
    }
    null != l ? (w[u] = l) : delete w[u];
}
function G(e) {
    let { appContext: t, streamKey: n } = e;
    (A[n] = t),
        c().forEach(L, (e) => {
            let { analyticsContext: n, isOwner: r } = e;
            n.setActionContext(t), r && n.trackEnd();
        }),
        (P[n] = null),
        (R[n] = null),
        delete w[n];
}
function B(e) {
    let { streamKey: t, rtcServerId: n, region: r, viewerIds: o } = e;
    i = t;
    let a = L[t];
    if (null == a && null != n) {
        null == R[t] && (C[t] = null);
        let e = (0, p.my)(t);
        null == C[t] && null == P[t] && (C[t] = (0, h.L2)(e, O.Z));
        let i = new _.A({
            streamRegion: r,
            streamApplication: C[t],
            streamSourceType: Q(P[t]),
            actionContext: A[t],
            numViewers: null != o ? o.length : 0,
            goLiveModalDurationMs: w[t]
        });
        (a = x(t, n, i)), (L[t] = a);
    }
    d.Z.dispatch({
        type: 'MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET',
        context: T.Yn.STREAM
    });
}
function F(e) {
    let t = L[e.streamKey];
    if (null == t) return !1;
    t.connect(e.endpoint, e.token);
}
function V(e) {
    let { connectionStats: t } = e;
    c().forEach(L, (e, n) => {
        e.updateStats(t);
    });
}
function Z(e) {
    let { streamKey: t, viewerIds: n, paused: r } = e,
        i = L[t];
    if (null == i) return !1;
    null != n && i.analyticsContext.trackViewerCount(n.length), i.streamUpdate(r);
}
function H(e) {
    let { streamKey: t } = e,
        n = L[t];
    if (null == n) return !1;
    t === i && (i = null), n.destroy('stream-end'), delete L[t];
}
function W(e) {
    let { layout: t } = e;
    (D = t), Object.values(L).forEach((e) => e.layoutChange(t));
}
function Y() {
    return !0;
}
function K(e) {
    return c().some(L, (t) => t === e.connection);
}
function z(e) {
    let { userId: t, context: n, quality: r } = e;
    c().forEach(L, (e) => {
        e.setSimulcastDebugOverride(t, n, r);
    });
}
function q(e) {
    let { streamId: t, width: n, height: r } = e;
    c().forEach(L, (e) => {
        null == e || e.setVideoSize(t, n, r);
    });
}
function Q(e) {
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
class X extends (o = u.ZP.Store) {
    getActiveStreamKey() {
        return (0, m.Z)(v.Z) ? i : null;
    }
    getRTCConnections() {
        return L;
    }
    getAllActiveStreamKeys() {
        return Object.keys(L);
    }
    getRTCConnection(e) {
        return L[e];
    }
    getStatsHistory(e, t, n) {
        if (!(0, m.Z)(v.Z) || null == t) return null;
        if (n) {
            let n = b.Z.getActiveStreamForUser(t, e);
            if (null == n || 0 === b.Z.getViewerIds(n).length) return null;
        }
        return g.Z.getStatsHistory(T.Yn.STREAM).map((e) => (n ? (0, I.ml)(e.rtp.outbound) : (0, I.lx)(e.rtp.inbound[t])));
    }
    getQuality() {
        if (!(0, m.Z)(v.Z)) return S.IE4.UNKNOWN;
        let e = this.getActiveStreamKey(),
            t = null != e ? L[e] : null;
        return null != t ? t.quality : S.IE4.UNKNOWN;
    }
    getMediaSessionId(e) {
        if (null == e) return null;
        let t = L[e];
        if (null != t) return null != t ? t.getMediaSessionId() : null;
    }
    getRtcConnectionId(e) {
        if (null == e) return null;
        let t = L[e];
        if (null != t) return null != t ? t.getRTCConnectionId() : null;
    }
    getVideoStats(e) {
        if (null == e) return null;
        let t = L[e];
        return null != t ? t.getVideoStats() : null;
    }
    getHostname(e) {
        if (null == e) return '';
        let t = L[e];
        return null != t && null != t.hostname ? t.hostname : '';
    }
    getRegion(e) {
        if (null == e) return null;
        let t = L[e];
        return null != t ? t.getRegion() : null;
    }
    getMaxViewers(e) {
        if (null == e) return null;
        let t = L[e];
        return null != t ? t.getMaxViewers() : null;
    }
    getStreamSourceId(e) {
        return P[e];
    }
    getUserIds(e) {
        let t = L[e];
        return null == t ? void 0 : t.getUserIds();
    }
    isUserConnected(e, t) {
        let n = L[e];
        return null == n ? void 0 : n.getIsUserConnected(t);
    }
    getSecureFramesState(e) {
        let t = L[e];
        return null == t ? void 0 : t.getSecureFramesState();
    }
    getSecureFramesRosterMapEntry(e, t) {
        let n = L[e],
            r = null == n ? void 0 : n.getSecureFramesRosterMap();
        return null == r ? void 0 : r.get(t);
    }
}
N(X, 'displayName', 'StreamRTCConnectionStore');
let J = new X(
    d.Z,
    !v.Z.isSupported() || __OVERLAY__
        ? {}
        : {
              CONNECTION_OPEN: k,
              CONNECTION_CLOSED: j,
              RTC_CONNECTION_STATE: Y,
              RTC_CONNECTION_PING: Y,
              RTC_CONNECTION_LOSS_RATE: Y,
              RTC_CONNECTION_UPDATE_ID: K,
              RTC_CONNECTION_SECURE_FRAMES_UPDATE: Y,
              STREAM_START: U,
              STREAM_STOP: G,
              STREAM_CREATE: B,
              STREAM_SERVER_UPDATE: F,
              STREAM_UPDATE: Z,
              STREAM_DELETE: H,
              MEDIA_ENGINE_CONNECTION_STATS: V,
              STREAM_LAYOUT_UPDATE: W,
              RTC_DEBUG_SET_SIMULCAST_OVERRIDE: z,
              VIDEO_SIZE_UPDATE: q
          }
);
