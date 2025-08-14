let r;
n.d(t, { Z: () => ee }), n(388685);
var i,
    o = n(512722),
    a = n.n(o),
    s = n(392711),
    l = n.n(s),
    c = n(442837),
    u = n(46973),
    d = n(570140),
    f = n(872810),
    _ = n(594190),
    p = n(992817),
    h = n(444852),
    m = n(569545),
    g = n(687516),
    E = n(139656),
    b = n(358085),
    y = n(314897),
    O = n(131951),
    v = n(158776),
    I = n(19780),
    T = n(981631),
    S = n(70722);
function A(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let N = {},
    C = {},
    R = {},
    P = {},
    w = {},
    D = {},
    L = T.hVg.THEATRE,
    x = {};
function M(e, t, n, i) {
    return (
        a()(null != r, "Creating RTCConnection without session."),
        new h.Z({
            sessionId: r,
            streamKey: e,
            serverId: t,
            channelId: n,
            initialLayout: L,
            analyticsContext: i,
            isStreamer: null != C[e],
            parentMediaSessionId: I.Z.getMediaSessionId(),
        })
    );
}
function j() {
    l().forEach(x, (e, t) => {
        e.destroy(e.isOwner ? "sender-disconnect" : "receiver-disconnect"), delete x[t], delete D[t];
    });
}
function k(e) {
    (r = e.sessionId), j();
}
function U() {
    (r = null), j();
}
function G(e) {
    let {
            streamType: t,
            guildId: n,
            channelId: r,
            appContext: i,
            pid: o,
            sourceId: a,
            nativePickerStyleUsed: s,
            goLiveModalDurationMs: c,
            analyticsLocations: u,
        } = e,
        d = (0, m.V9)({
            streamType: t,
            guildId: n,
            channelId: r,
            ownerId: y.default.getId(),
        });
    if (
        ((N[d] = {
            appContext: i,
            analyticsLocations: u,
        }),
        l().forEach(x, (e) => {
            let { analyticsContext: t, isOwner: n } = e;
            t.setActionContext(i), t.setNativePickerStyleUsed(s), n && t.trackStart();
        }),
        (P[d] = a),
        (R[d] = o),
        null != o)
    ) {
        let e = _.ZP.getGameForPID(o);
        null != e &&
            (C[d] = {
                name: e.name,
                id: e.id,
                exe: e.exeName,
                distributor: e.distributor,
                sku: e.sku,
                gameMetadata: e.gameMetadata,
            });
    }
    null != c ? (w[d] = c) : delete w[d];
}
function B(e) {
    let { appContext: t, streamKey: n } = e;
    (N[n] = {
        appContext: t,
        analyticsLocations: void 0,
    }),
        l().forEach(x, (e) => {
            let { analyticsContext: n, isOwner: r } = e;
            n.setActionContext(t), r && n.trackEnd();
        }),
        (P[n] = null),
        (R[n] = null),
        delete w[n];
}
function Z(e) {
    var t, n, r;
    let { streamKey: i, rtcServerId: o, rtcChannelId: a, region: s, viewerIds: l } = e,
        c = x[i],
        u = (0, m.my)(i);
    if (null == c && null != o) {
        null == R[i] && (C[i] = null), null == C[i] && null == P[i] && (C[i] = (0, g.L2)(u, v.Z));
        let e = new h.A({
            streamRegion: s,
            streamApplication: C[i],
            streamSourceType: J(P[i]),
            actionContext: null == (t = N[i]) ? void 0 : t.appContext,
            numViewers: null != l ? l.length : 0,
            goLiveModalDurationMs: w[i],
            analyticsLocations: null == (n = N[i]) ? void 0 : n.analyticsLocations,
        });
        (c = M(i, o, a, e)), (x[i] = c);
    }
    delete D[i],
        d.Z.dispatch({
            type: "MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET",
            mediaEngineConnectionId: c.getMediaEngineConnectionId(),
        }),
        (0, p.Bx)({
            guildId: u.guildId,
            location: "StreamRTCConnectionStore",
        }) &&
            u.ownerId === y.default.getId() &&
            (0, f.zf)(i, null == (r = C[i]) ? void 0 : r.id);
}
function F(e) {
    let t = x[e.streamKey];
    if (null == t) return !1;
    t.connect(e.endpoint, e.token);
}
function V(e) {
    let { connectionStats: t } = e;
    l().forEach(x, (e, n) => {
        e.updateStats(t);
    });
}
function H(e) {
    let { streamKey: t, viewerIds: n, paused: r } = e,
        i = x[t];
    if (null == i) return !1;
    null != n && i.analyticsContext.trackViewerCount(n.length), i.streamUpdate(r);
}
function Y(e) {
    let { streamKey: t } = e,
        n = x[t];
    if (null == n) return !1;
    d.Z.dispatch({
        type: "MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET",
        mediaEngineConnectionId: n.getMediaEngineConnectionId(),
    }),
        n.destroy("stream-end"),
        delete x[t];
}
function W(e) {
    let { layout: t } = e;
    (L = t), Object.values(x).forEach((e) => e.layoutChange(t));
}
function K() {
    return !0;
}
function z(e) {
    let { context: t, wants: n, userId: r, guildId: i, channelId: o } = e,
        a = (0, m.V9)({
            streamType: null == i ? S.lo.CALL : S.lo.GUILD,
            guildId: i,
            channelId: o,
            ownerId: r,
        });
    if (
        t !== u.Yn.STREAM ||
        null == x[a] ||
        !Object.entries(n).some((e) => {
            let [t, n] = e;
            return "any" !== t && 0 !== n;
        })
    )
        return !1;
    D[a] = performance.now();
}
function q(e) {
    return l().some(x, (t) => t === e.connection);
}
function X(e) {
    let { userId: t, context: n, quality: r } = e;
    l().forEach(x, (e) => {
        e.setSimulcastDebugOverride(t, n, r);
    });
}
function Q(e) {
    let { streamId: t, width: n, height: r } = e;
    l().forEach(x, (e) => {
        null == e || e.setVideoSize(t, n, r);
    });
}
function J(e) {
    var t, n, r;
    if (null == e) return "unknown";
    if (b.isPlatformEmbedded || (null == (t = platform) ? void 0 : t.name) === "Chrome") {
        if (e.startsWith("web-contents-media-stream:")) return "tab";
        else if (e.startsWith("window:")) return "window";
        else if (e.startsWith("screen:")) return "screen";
    } else if ((null == (n = platform) ? void 0 : n.name) === "Firefox")
        if ("" !== e) return "window";
        else return "screen";
    else if ((null == (r = platform) ? void 0 : r.name) === "Safari") return "window";
    return "unknown";
}
class $ extends (i = c.ZP.Store) {
    getRTCConnections() {
        return x;
    }
    getAllActiveStreamKeys() {
        return Object.keys(x);
    }
    getRTCConnection(e) {
        return x[e];
    }
    getQuality(e) {
        var t, n;
        return (0, E.Z)(O.Z) && null != e && null != (n = null == (t = x[e]) ? void 0 : t.quality) ? n : T.IE4.UNKNOWN;
    }
    getMediaSessionId(e) {
        if (null == e) return null;
        let t = x[e];
        if (null != t) return null != t ? t.getMediaSessionId() : null;
    }
    getRtcConnectionId(e) {
        if (null == e) return null;
        let t = x[e];
        if (null != t) return null != t ? t.getRTCConnectionId() : null;
    }
    getVideoStats(e) {
        if (null == e) return null;
        let t = x[e];
        return null != t ? t.getVideoStats() : null;
    }
    getHostname(e) {
        if (null == e) return "";
        let t = x[e];
        return null != t && null != t.hostname ? t.hostname : "";
    }
    getRegion(e) {
        if (null == e) return null;
        let t = x[e];
        return null != t ? t.getRegion() : null;
    }
    getMaxViewers(e) {
        if (null == e) return null;
        let t = x[e];
        return null != t ? t.getMaxViewers() : null;
    }
    getStreamSourceId(e) {
        return P[e];
    }
    getLastNonZeroRemoteVideoSinkWantsTime(e) {
        return D[e];
    }
    getUserIds(e) {
        let t = x[e];
        return null == t ? void 0 : t.getUserIds();
    }
    isUserConnected(e, t) {
        let n = x[e];
        return null == n ? void 0 : n.getIsUserConnected(t);
    }
    getSecureFramesState(e) {
        let t = x[e];
        return null == t ? void 0 : t.getSecureFramesState();
    }
    getSecureFramesRosterMapEntry(e, t) {
        let n = x[e],
            r = null == n ? void 0 : n.getSecureFramesRosterMap();
        return null == r ? void 0 : r.get(t);
    }
}
A($, "displayName", "StreamRTCConnectionStore");
let ee = new $(
    d.Z,
    !O.Z.isSupported() || __OVERLAY__
        ? {}
        : {
              CONNECTION_OPEN: k,
              CONNECTION_CLOSED: U,
              RTC_CONNECTION_STATE: K,
              RTC_CONNECTION_PING: K,
              RTC_CONNECTION_LOSS_RATE: K,
              RTC_CONNECTION_UPDATE_ID: q,
              RTC_CONNECTION_SECURE_FRAMES_UPDATE: K,
              RTC_CONNECTION_REMOTE_VIDEO_SINK_WANTS: z,
              STREAM_START: G,
              STREAM_STOP: B,
              STREAM_CREATE: Z,
              STREAM_SERVER_UPDATE: F,
              STREAM_UPDATE: H,
              STREAM_DELETE: Y,
              MEDIA_ENGINE_CONNECTION_STATS: V,
              STREAM_LAYOUT_UPDATE: W,
              RTC_DEBUG_SET_SIMULCAST_OVERRIDE: X,
              VIDEO_SIZE_UPDATE: Q,
          },
);
