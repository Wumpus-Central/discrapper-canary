let r;
n.d(t, { Z: () => $ }), n(388685);
var i,
    a = n(512722),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(442837),
    u = n(46973),
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
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let S = {},
    A = {},
    C = {},
    N = {},
    R = {},
    P = {},
    D = v.hVg.THEATRE,
    w = {};
function x(e, t, n, i) {
    return (
        o()(null != r, "Creating RTCConnection without session."),
        new _.Z({
            sessionId: r,
            streamKey: e,
            serverId: t,
            channelId: n,
            initialLayout: D,
            analyticsContext: i,
            isStreamer: null != A[e],
            parentMediaSessionId: O.Z.getMediaSessionId(),
        })
    );
}
function L() {
    l().forEach(w, (e, t) => {
        e.destroy(e.isOwner ? "sender-disconnect" : "receiver-disconnect"), delete w[t], delete P[t];
    });
}
function M(e) {
    (r = e.sessionId), L();
}
function j() {
    (r = null), L();
}
function k(e) {
    let {
            streamType: t,
            guildId: n,
            channelId: r,
            appContext: i,
            pid: a,
            sourceId: o,
            sourcePid: s,
            nativePickerStyleUsed: c,
            goLiveModalDurationMs: u,
            analyticsLocations: d,
        } = e,
        _ = (0, p.V9)({
            streamType: t,
            guildId: n,
            channelId: r,
            ownerId: E.default.getId(),
        });
    if (
        ((S[_] = {
            appContext: i,
            analyticsLocations: d,
        }),
        l().forEach(w, (e) => {
            let { analyticsContext: t, isOwner: n } = e;
            t.setActionContext(i), t.setNativePickerStyleUsed(c), n && t.trackStart();
        }),
        null == a && (a = s),
        (N[_] = o),
        (C[_] = a),
        null != a)
    ) {
        let e = f.ZP.getGameForPID(a);
        null != e &&
            (A[_] = {
                name: e.name,
                id: e.id,
                exe: e.exeName,
                distributor: e.distributor,
                sku: e.sku,
                gameMetadata: e.gameMetadata,
            });
    }
    null != u ? (R[_] = u) : delete R[_];
}
function U(e) {
    let { appContext: t, streamKey: n } = e;
    (S[n] = {
        appContext: t,
        analyticsLocations: void 0,
    }),
        l().forEach(w, (e) => {
            let { analyticsContext: n, isOwner: r } = e;
            n.setActionContext(t), r && n.trackEnd();
        }),
        (N[n] = null),
        (C[n] = null),
        delete R[n];
}
function G(e) {
    let { streamKey: t, rtcServerId: n, rtcChannelId: r, region: i, viewerIds: a } = e,
        o = w[t],
        s = (0, p.my)(t);
    if (null == o && null != n) {
        var l, c;
        null == C[t] && (A[t] = null), null == A[t] && null == N[t] && (A[t] = (0, h.L2)(s, y.Z));
        let e = new _.A({
            streamRegion: i,
            streamApplication: A[t],
            streamSourceType: Q(N[t]),
            actionContext: null == (l = S[t]) ? void 0 : l.appContext,
            numViewers: null != a ? a.length : 0,
            goLiveModalDurationMs: R[t],
            analyticsLocations: null == (c = S[t]) ? void 0 : c.analyticsLocations,
        });
        (o = x(t, n, r, e)), (w[t] = o);
    }
    delete P[t],
        d.Z.dispatch({
            type: "MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET",
            mediaEngineConnectionId: o.getMediaEngineConnectionId(),
        });
}
function B(e) {
    let t = w[e.streamKey];
    if (null == t) return !1;
    t.connect(e.endpoint, e.token);
}
function Z(e) {
    let { connectionStats: t } = e;
    l().forEach(w, (e, n) => {
        e.updateStats(t);
    });
}
function F(e) {
    let { streamKey: t, viewerIds: n, paused: r } = e,
        i = w[t];
    if (null == i) return !1;
    null != n && i.analyticsContext.trackViewerCount(n.length), i.streamUpdate(r);
}
function V(e) {
    let { streamKey: t } = e,
        n = w[t];
    if (null == n) return !1;
    d.Z.dispatch({
        type: "MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET",
        mediaEngineConnectionId: n.getMediaEngineConnectionId(),
    }),
        n.destroy("stream-end"),
        delete w[t];
}
function H(e) {
    let { layout: t } = e;
    (D = t), Object.values(w).forEach((e) => e.layoutChange(t));
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
            ownerId: r,
        });
    if (
        t !== u.Yn.STREAM ||
        null == w[o] ||
        !Object.entries(n).some((e) => {
            let [t, n] = e;
            return "any" !== t && 0 !== n;
        })
    )
        return !1;
    P[o] = performance.now();
}
function K(e) {
    return l().some(w, (t) => t === e.connection);
}
function z(e) {
    let { userId: t, context: n, quality: r } = e;
    l().forEach(w, (e) => {
        e.setSimulcastDebugOverride(t, n, r);
    });
}
function q(e) {
    let { streamId: t, width: n, height: r } = e;
    l().forEach(w, (e) => {
        null == e || e.setVideoSize(t, n, r);
    });
}
function X(e) {
    let { streamId: t, zoom: n } = e;
    l().forEach(w, (e) => {
        null == e || e.setVideoZoom(t, n);
    });
}
function Q(e) {
    var t, n, r;
    if (null == e) return "unknown";
    if (g.isPlatformEmbedded || (null == (t = platform) ? void 0 : t.name) === "Chrome") {
        if (e.startsWith("web-contents-media-stream:")) return "tab";
        else if (e.startsWith("window:")) return "window";
        else if (e.startsWith("screen:")) return "screen";
    } else if ((null == (n = platform) ? void 0 : n.name) === "Firefox")
        if ("" !== e) return "window";
        else return "screen";
    else if ((null == (r = platform) ? void 0 : r.name) === "Safari") return "window";
    return "unknown";
}
class J extends (i = c.ZP.Store) {
    initialize() {
        this.waitFor(E.default, b.Z, O.Z, f.ZP);
    }
    getRTCConnections() {
        return w;
    }
    getAllActiveStreamKeys() {
        return Object.keys(w);
    }
    getRTCConnection(e) {
        return w[e];
    }
    getQuality(e) {
        var t, n;
        return (0, m.Z)(b.Z) && null != e && null != (n = null == (t = w[e]) ? void 0 : t.quality) ? n : v.IE4.UNKNOWN;
    }
    getMediaSessionId(e) {
        if (null == e) return null;
        let t = w[e];
        if (null != t) return null != t ? t.getMediaSessionId() : null;
    }
    getRtcConnectionId(e) {
        if (null == e) return null;
        let t = w[e];
        if (null != t) return null != t ? t.getRTCConnectionId() : null;
    }
    getVideoStats(e) {
        if (null == e) return null;
        let t = w[e];
        return null != t ? t.getVideoStats() : null;
    }
    getHostname(e) {
        if (null == e) return "";
        let t = w[e];
        return null != t && null != t.hostname ? t.hostname : "";
    }
    getRegion(e) {
        if (null == e) return null;
        let t = w[e];
        return null != t ? t.getRegion() : null;
    }
    getMaxViewers(e) {
        if (null == e) return null;
        let t = w[e];
        return null != t ? t.getMaxViewers() : null;
    }
    getStreamSourceId(e) {
        return N[e];
    }
    getLastNonZeroRemoteVideoSinkWantsTime(e) {
        return P[e];
    }
    getUserIds(e) {
        let t = w[e];
        return null == t ? void 0 : t.getUserIds();
    }
    isUserConnected(e, t) {
        let n = w[e];
        return null == n ? void 0 : n.getIsUserConnected(t);
    }
    getSecureFramesState(e) {
        let t = w[e];
        return null == t ? void 0 : t.getSecureFramesState();
    }
    getSecureFramesRosterMapEntry(e, t) {
        let n = w[e],
            r = null == n ? void 0 : n.getSecureFramesRosterMap();
        return null == r ? void 0 : r.get(t);
    }
}
T(J, "displayName", "StreamRTCConnectionStore");
let $ = new J(
    d.Z,
    !b.Z.isSupported() || __OVERLAY__
        ? {}
        : {
              CONNECTION_OPEN: M,
              CONNECTION_CLOSED: j,
              RTC_CONNECTION_STATE: Y,
              RTC_CONNECTION_PING: Y,
              RTC_CONNECTION_LOSS_RATE: Y,
              RTC_CONNECTION_UPDATE_ID: K,
              RTC_CONNECTION_SECURE_FRAMES_UPDATE: Y,
              RTC_CONNECTION_REMOTE_VIDEO_SINK_WANTS: W,
              STREAM_START: k,
              STREAM_STOP: U,
              STREAM_CREATE: G,
              STREAM_SERVER_UPDATE: B,
              STREAM_UPDATE: F,
              STREAM_DELETE: V,
              MEDIA_ENGINE_CONNECTION_STATS: Z,
              STREAM_LAYOUT_UPDATE: H,
              RTC_DEBUG_SET_SIMULCAST_OVERRIDE: z,
              VIDEO_SIZE_UPDATE: q,
              VIDEO_ZOOM_UPDATE: X,
          },
);
