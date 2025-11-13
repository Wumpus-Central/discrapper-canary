n.d(t, { Z: () => v });
var r = n(647438),
    o = n(713447),
    l = n(286379),
    i = n(442837),
    a = n(797614),
    s = n(866960),
    c = n(617136),
    u = n(509212),
    d = n(325916),
    m = n(981631);
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function f(e) {
    return null == e.current || e.current.currentLevel < 0 || e.current.levels.length <= e.current.currentLevel
        ? {
              hls_level_index: -100,
              hls_segment_res_width: -100,
              hls_segment_res_height: -100,
          }
        : {
              hls_level_index: e.current.currentLevel,
              hls_segment_res_width: e.current.levels[e.current.currentLevel].width,
              hls_segment_res_height: e.current.levels[e.current.currentLevel].height,
          };
}
function v(e) {
    var t;
    let { quest: n, videoRef: v, hlsRef: g, videoSessionId: E, videoAssetId: O, sourceQuestContent: b, logger: h } = e,
        S = (0, c._F)(),
        C = (0, c.O5)(),
        y = (0, i.e7)([s.Z], () => s.Z.getEffectiveConnectionSpeed()),
        _ = (0, r.useRef)(-1),
        x = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null,
        j = n.id,
        D = r.useCallback(
            (e) => {
                null != v.current &&
                    S({
                        questId: j,
                        event: m.rMx.QUEST_VIDEO_LOADING_STARTED,
                        properties: p(
                            {
                                video_asset_id: O,
                                network_connection_speed: e,
                                video_session_id: E,
                                is_hls_supported: o.ZP.isSupported(),
                            },
                            f(g),
                        ),
                        sourceQuestContent: b,
                    });
            },
            [j, v, O, E, g, S, b],
        ),
        T = r.useCallback(
            (e) => {
                null != v.current &&
                    null != e &&
                    S({
                        questId: j,
                        event: m.rMx.QUEST_VIDEO_LOADING_ENDED,
                        properties: p(
                            {
                                video_asset_id: O,
                                network_connection_speed: y,
                                duration: e,
                                video_session_id: E,
                            },
                            f(g),
                        ),
                        sourceQuestContent: b,
                    });
            },
            [j, v, O, E, g, S, b, y],
        ),
        P = r.useCallback(
            (e) => {
                null != v.current &&
                    S({
                        questId: j,
                        event: m.rMx.QUEST_VIDEO_TIME_TO_FIRST_FRAME,
                        properties: p(
                            {
                                duration_ms: e,
                                video_session_id: E,
                                video_asset_id: O,
                            },
                            f(g),
                        ),
                        sourceQuestContent: b,
                    });
            },
            [j, v, O, E, g, S, b],
        ),
        R = r.useCallback(() => {
            null != v.current &&
                S({
                    questId: j,
                    event: m.rMx.QUEST_VIDEO_PROGRESSED,
                    properties: p(
                        {
                            progress: (0, u.bA)(v.current.currentTime, v.current.duration),
                            video_timestamp_seconds: v.current.currentTime,
                            video_session_id: E,
                            video_asset_id: O,
                        },
                        f(g),
                    ),
                    sourceQuestContent: b,
                });
        }, [j, v, E, g, S, O, b]),
        I = r.useCallback(
            (e) => {
                null != v.current &&
                    S({
                        questId: j,
                        event: m.rMx.QUEST_VIDEO_RESUMED,
                        properties: p(
                            {
                                video_timestamp_seconds: v.current.currentTime,
                                pause_reason: e,
                                video_session_id: E,
                                video_asset_id: O,
                            },
                            f(g),
                        ),
                        sourceQuestContent: b,
                    });
            },
            [j, v, E, g, S, O, b],
        ),
        N = r.useCallback(
            (e) => {
                null != v.current &&
                    null != e &&
                    S({
                        questId: j,
                        event: m.rMx.QUEST_VIDEO_PAUSED,
                        properties: p(
                            {
                                video_timestamp_seconds: v.current.currentTime,
                                reason: e,
                                video_session_id: E,
                                video_asset_id: O,
                            },
                            f(g),
                        ),
                        sourceQuestContent: b,
                    });
            },
            [j, v, E, g, S, O, b],
        ),
        w = r.useCallback(
            (e, t) => {
                null != v.current &&
                    S({
                        questId: j,
                        event: e ? m.rMx.QUEST_VIDEO_APP_FOCUSED : m.rMx.QUEST_VIDEO_APP_UNFOCUSED,
                        properties: {
                            video_timestamp_seconds: v.current.currentTime,
                            video_state: t,
                            video_session_id: E,
                            video_asset_id: O,
                        },
                        sourceQuestContent: b,
                    });
            },
            [j, v, E, S, O, b],
        ),
        A = r.useCallback(() => {
            null != v.current &&
                ((_.current += 1),
                S({
                    questId: j,
                    event: m.rMx.QUEST_VIDEO_BUFFERING_STARTED,
                    properties: p(
                        {
                            video_asset_id: O,
                            network_connection_speed: y,
                            buffer_index: _.current,
                            video_session_id: E,
                        },
                        f(g),
                    ),
                    sourceQuestContent: b,
                }));
        }, [j, v, O, E, g, S, b, y]),
        k = r.useCallback(
            (e) => {
                null != v.current &&
                    ((_.current += 1),
                    S({
                        questId: j,
                        event: m.rMx.QUEST_VIDEO_BUFFERING_ENDED,
                        properties: p(
                            {
                                video_asset_id: O,
                                network_connection_speed: y,
                                duration: e,
                                buffer_index: _.current,
                                video_session_id: E,
                            },
                            f(g),
                        ),
                        sourceQuestContent: b,
                    }));
            },
            [j, v, O, E, g, S, b, y],
        ),
        M = r.useCallback(
            (e, t) => {
                C({
                    questId: j,
                    questContent: e,
                    questContentCTA: t,
                    sourceQuestContent: b,
                });
            },
            [j, b, C],
        ),
        L = r.useCallback(
            (e) => {
                if (null != v.current) {
                    var t, n;
                    S({
                        questId: j,
                        event: m.rMx.QUEST_VIDEO_SEGMENT_WATCHED,
                        properties: p(
                            ((t = p({}, e)),
                            (n = n =
                                {
                                    video_asset_id: O,
                                    quest_completed: x,
                                    video_duration_sec: v.current.duration,
                                    video_progress: (0, u.bA)(e.segment_end_sec, v.current.duration),
                                    video_session_id: E,
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(n)).forEach(function (e) {
                                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                  }),
                            t),
                            f(g),
                        ),
                        sourceQuestContent: b,
                    });
                }
            },
            [S, j, O, x, E, g, v, b],
        ),
        V = r.useCallback(
            (e, t) => {
                var n, r;
                if (null == v.current) return;
                let o = null == (n = v.current) ? void 0 : n.error,
                    i = null == (r = v.current) ? void 0 : r.networkState,
                    s = null != v.current ? (0, u.bA)(v.current.currentTime, v.current.duration) : void 0,
                    c =
                        null != t
                            ? {
                                  hls_error_subtype: t.errorDetails,
                                  hls_error_fatal: t.fatal,
                              }
                            : {};
                S({
                    questId: j,
                    event: m.rMx.QUEST_VIDEO_ERROR,
                    properties: p(
                        {
                            video_progress: s,
                            video_error_type: e,
                            video_asset_id: O,
                            network_connection_speed: y,
                            video_session_id: E,
                            video_error_code: null == o ? void 0 : o.code,
                            video_error_message: null == o ? void 0 : o.message,
                            video_network_state: i,
                        },
                        f(g),
                        c,
                    ),
                    sourceQuestContent: b,
                }),
                    e === d.CY.SOURCE_ERROR &&
                        a.Z.increment({
                            name: l.V.QUEST_VIDEO_ERROR,
                            tags: ["quest_id:".concat(j), "error_type:".concat(e)],
                        });
            },
            [j, v, O, E, g, S, b, y],
        ),
        Z = r.useCallback(
            (e, t) => {
                let n;
                switch (
                    (h.info(
                        "[QV] | HLS Error: type="
                            .concat(t.type, ", details=")
                            .concat(t.details, ", fatal=")
                            .concat(t.fatal),
                    ),
                    t.type)
                ) {
                    case o.ZP.ErrorTypes.NETWORK_ERROR:
                        n = d.CY.HLS_NETWORK_ERROR;
                        break;
                    case o.ZP.ErrorTypes.MEDIA_ERROR:
                        n = d.CY.HLS_MEDIA_ERROR;
                        break;
                    case o.ZP.ErrorTypes.MUX_ERROR:
                        n = d.CY.HLS_MUX_ERROR;
                        break;
                    case o.ZP.ErrorTypes.KEY_SYSTEM_ERROR:
                        n = d.CY.HLS_KEY_SYSTEM_ERROR;
                        break;
                    default:
                        n = d.CY.HLS_OTHER_ERROR;
                }
                V(n, {
                    errorDetails: t.details,
                    fatal: t.fatal,
                });
            },
            [h, V],
        );
    r.useEffect(() => {
        if (null == g.current) return;
        let e = g.current;
        return (
            e.on(o.ZP.Events.ERROR, Z),
            () => {
                e.off(o.ZP.Events.ERROR, Z);
            }
        );
    }, [g, Z]);
    let F = r.useCallback(
            (e) => {
                null != v.current &&
                    S({
                        questId: j,
                        event: e ? m.rMx.QUEST_VIDEO_FULLSCREEN_ENTERED : m.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                        properties: p(
                            {
                                video_session_id: E,
                                video_asset_id: O,
                            },
                            f(g),
                        ),
                        sourceQuestContent: b,
                    });
            },
            [j, v, E, g, S, O, b],
        ),
        B = r.useCallback(
            (e) => {
                null != v.current &&
                    S({
                        questId: j,
                        event: m.rMx.QUEST_VIDEO_VOLUME_CHANGED,
                        properties: p(
                            {
                                volume_threshold: e > 0 && e < 1 ? 0.5 : e,
                                video_session_id: E,
                                video_asset_id: O,
                            },
                            f(g),
                        ),
                        sourceQuestContent: b,
                    });
            },
            [j, v, O, E, g, S, b],
        );
    return {
        trackQuestVideoLoadingStarted: D,
        trackQuestVideoLoadingEnded: T,
        trackQuestVideoTimeToFirstFrame: P,
        trackQuestVideoProgressed: R,
        trackQuestVideoResumed: I,
        trackQuestVideoPaused: N,
        trackQuestVideoFocusChange: w,
        trackQuestContentClick: M,
        trackQuestVideoBufferingStarted: A,
        trackQuestVideoBufferingEnded: k,
        trackWatchTimeAnalytics: L,
        trackQuestVideoFullscreenChanged: F,
        trackQuestVideoError: V,
        trackQuestVideoVolumeChanged: B,
    };
}
