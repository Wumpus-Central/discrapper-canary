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
    p = n(444852),
    _ = n(569545),
    m = n(687516),
    h = n(139656),
    g = n(358085),
    E = n(314897),
    b = n(131951),
    y = n(158776),
    O = n(19780),
    v = n(981631),
    S = n(70722);
function I(e, t, n) {
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
let T = {},
    C = {},
    A = {},
    N = {},
    P = {},
    R = {},
    D = v.hVg.THEATRE,
    w = {};
function x(e, t, n, i) {
    return (
        o()(null != r, "Creating RTCConnection without session."),
        new p.Z({
            sessionId: r,
            streamKey: e,
            serverId: t,
            channelId: n,
            initialLayout: D,
            analyticsContext: i,
            parentMediaSessionId: O.Z.getMediaSessionId(),
        })
    );
}
function L() {
    l().forEach(w, (e, t) => {
        e.destroy(e.isOwner ? "sender-disconnect" : "receiver-disconnect"), delete w[t], delete R[t];
    });
}
function j(e) {
    (r = e.sessionId), L();
}
function M() {
    (r = null), L();
}
function k(e) {
    var t, n;
    let {
            streamType: r,
            guildId: i,
            channelId: a,
            appContext: o,
            pid: s,
            sourceId: c,
            sourcePid: u,
            nativePickerStyleUsed: d,
            goLiveModalDurationMs: p,
            analyticsLocations: m,
        } = e,
        h = (0, _.V9)({
            streamType: r,
            guildId: i,
            channelId: a,
            ownerId: E.default.getId(),
        });
    if (
        ((T[h] = {
            appContext: o,
            analyticsLocations: m,
        }),
        l().forEach(w, (e) => {
            let { analyticsContext: t, isOwner: n } = e;
            t.setActionContext(o), t.setNativePickerStyleUsed(d), n && t.trackStart();
        }),
        null == s && (s = u),
        (N[h] = c),
        (A[h] = s),
        null != s)
    ) {
        let e = f.ZP.getGameForPID(s);
        null != e &&
            (C[h] = {
                name: e.name,
                id: e.id,
                exe: e.exeName,
                distributor: e.distributor,
                sku: e.sku,
                gameMetadata: e.gameMetadata,
            }),
            null == (t = w[h]) || t.analyticsContext.updateStreamApplication(C[h]);
    } else null == (n = w[h]) || n.analyticsContext.updateStreamApplication(null);
    null != p ? (P[h] = p) : delete P[h];
}
function U(e) {
    let { appContext: t, streamKey: n } = e;
    (T[n] = {
        appContext: t,
        analyticsLocations: void 0,
    }),
        l().forEach(w, (e) => {
            let { analyticsContext: n, isOwner: r } = e;
            n.setActionContext(t), r && n.trackEnd();
        }),
        (N[n] = null),
        (A[n] = null),
        delete P[n];
}
function G(e) {
    let { streamKey: t, rtcServerId: n, rtcChannelId: r, region: i, viewerIds: a } = e,
        o = w[t],
        s = (0, _.my)(t);
    if (null == o && null != n) {
        var l, c;
        null == A[t] && (C[t] = null), null == C[t] && null == N[t] && (C[t] = (0, m.L2)(s, y.Z));
        let e = new p.A({
            streamRegion: i,
            streamApplication: C[t],
            streamSourceType: X(N[t]),
            actionContext: null == (l = T[t]) ? void 0 : l.appContext,
            numViewers: null != a ? a.length : 0,
            goLiveModalDurationMs: P[t],
            analyticsLocations: null == (c = T[t]) ? void 0 : c.analyticsLocations,
        });
        (o = x(t, n, r, e)), (w[t] = o);
    }
    delete R[t],
        d.Z.dispatch({
            type: "MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET",
            mediaEngineConnectionId: o.getMediaEngineConnectionId(),
        });
}
function Z(e) {
    let t = w[e.streamKey];
    if (null == t) return !1;
    t.connect(e.endpoint, e.token);
}
function B(e) {
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
        o = (0, _.V9)({
            streamType: null == i ? S.lo.CALL : S.lo.GUILD,
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
    R[o] = performance.now();
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
function Q(e) {
    let { streamId: t, zoom: n } = e;
    l().forEach(w, (e) => {
        null == e || e.setVideoZoom(t, n);
    });
}
function X(e) {
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
        return (0, h.Z)(b.Z) && null != e && null != (n = null == (t = w[e]) ? void 0 : t.quality) ? n : v.IE4.UNKNOWN;
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
        return R[e];
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
I(J, "displayName", "StreamRTCConnectionStore");
let $ = new J(
    d.Z,
    !b.Z.isSupported() || __OVERLAY__
        ? {}
        : {
              CONNECTION_OPEN: j,
              CONNECTION_CLOSED: M,
              RTC_CONNECTION_STATE: Y,
              RTC_CONNECTION_PING: Y,
              RTC_CONNECTION_LOSS_RATE: Y,
              RTC_CONNECTION_UPDATE_ID: K,
              RTC_CONNECTION_SECURE_FRAMES_UPDATE: Y,
              RTC_CONNECTION_REMOTE_VIDEO_SINK_WANTS: W,
              STREAM_START: k,
              STREAM_STOP: U,
              STREAM_CREATE: G,
              STREAM_SERVER_UPDATE: Z,
              STREAM_UPDATE: F,
              STREAM_DELETE: V,
              MEDIA_ENGINE_CONNECTION_STATS: B,
              STREAM_LAYOUT_UPDATE: H,
              RTC_DEBUG_SET_SIMULCAST_OVERRIDE: z,
              VIDEO_SIZE_UPDATE: q,
              VIDEO_ZOOM_UPDATE: Q,
          },
);
