n.d(t, { Z: () => v });
var r = n(473749),
    o = n(713447),
    l = n(286379),
    i = n(442837),
    a = n(797614),
    s = n(866960),
    c = n(617136),
    u = n(509212),
    d = n(325916),
    m = n(981631);
function f(e) {
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
function p(e) {
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
    let {
            videoRef: t,
            hlsRef: n,
            videoSessionId: v,
            videoAssetId: E,
            sourceQuestContent: g,
            logger: O,
            questId: h,
            isQuestCompleted: b,
        } = e,
        C = (0, c._F)(),
        S = (0, c.O5)(),
        y = (0, i.e7)([s.Z], () => s.Z.getEffectiveConnectionSpeed()),
        _ = (0, r.useRef)(-1),
        x = r.useCallback(
            (e) => {
                null != t.current &&
                    C({
                        questId: h,
                        event: m.rMx.QUEST_VIDEO_LOADING_STARTED,
                        properties: f(
                            {
                                video_asset_id: E,
                                network_connection_speed: e,
                                video_session_id: v,
                                is_hls_supported: o.ZP.isSupported(),
                            },
                            p(n),
                        ),
                        sourceQuestContent: g,
                    });
            },
            [h, t, E, v, n, C, g],
        ),
        j = r.useCallback(
            (e) => {
                null != t.current &&
                    null != e &&
                    C({
                        questId: h,
                        event: m.rMx.QUEST_VIDEO_LOADING_ENDED,
                        properties: f(
                            {
                                video_asset_id: E,
                                network_connection_speed: y,
                                duration: e,
                                video_session_id: v,
                            },
                            p(n),
                        ),
                        sourceQuestContent: g,
                    });
            },
            [h, t, E, v, n, C, g, y],
        ),
        D = r.useCallback(
            (e) => {
                null != t.current &&
                    C({
                        questId: h,
                        event: m.rMx.QUEST_VIDEO_TIME_TO_FIRST_FRAME,
                        properties: f(
                            {
                                duration_ms: e,
                                video_session_id: v,
                                video_asset_id: E,
                            },
                            p(n),
                        ),
                        sourceQuestContent: g,
                    });
            },
            [h, t, E, v, n, C, g],
        ),
        P = r.useCallback(() => {
            null != t.current &&
                C({
                    questId: h,
                    event: m.rMx.QUEST_VIDEO_PROGRESSED,
                    properties: f(
                        {
                            progress: (0, u.bA)(t.current.currentTime, t.current.duration),
                            video_timestamp_seconds: t.current.currentTime,
                            video_session_id: v,
                            video_asset_id: E,
                        },
                        p(n),
                    ),
                    sourceQuestContent: g,
                });
        }, [h, t, v, n, C, E, g]),
        T = r.useCallback(
            (e) => {
                null != t.current &&
                    C({
                        questId: h,
                        event: m.rMx.QUEST_VIDEO_RESUMED,
                        properties: f(
                            {
                                video_timestamp_seconds: t.current.currentTime,
                                pause_reason: e,
                                video_session_id: v,
                                video_asset_id: E,
                            },
                            p(n),
                        ),
                        sourceQuestContent: g,
                    });
            },
            [h, t, v, n, C, E, g],
        ),
        R = r.useCallback(
            (e) => {
                null != t.current &&
                    null != e &&
                    C({
                        questId: h,
                        event: m.rMx.QUEST_VIDEO_PAUSED,
                        properties: f(
                            {
                                video_timestamp_seconds: t.current.currentTime,
                                reason: e,
                                video_session_id: v,
                                video_asset_id: E,
                            },
                            p(n),
                        ),
                        sourceQuestContent: g,
                    });
            },
            [h, t, v, n, C, E, g],
        ),
        I = r.useCallback(
            (e, n) => {
                null != t.current &&
                    C({
                        questId: h,
                        event: e ? m.rMx.QUEST_VIDEO_APP_FOCUSED : m.rMx.QUEST_VIDEO_APP_UNFOCUSED,
                        properties: {
                            video_timestamp_seconds: t.current.currentTime,
                            video_state: n,
                            video_session_id: v,
                            video_asset_id: E,
                        },
                        sourceQuestContent: g,
                    });
            },
            [h, t, v, C, E, g],
        ),
        N = r.useCallback(() => {
            null != t.current &&
                ((_.current += 1),
                C({
                    questId: h,
                    event: m.rMx.QUEST_VIDEO_BUFFERING_STARTED,
                    properties: f(
                        {
                            video_asset_id: E,
                            network_connection_speed: y,
                            buffer_index: _.current,
                            video_session_id: v,
                        },
                        p(n),
                    ),
                    sourceQuestContent: g,
                }));
        }, [h, t, E, v, n, C, g, y]),
        A = r.useCallback(
            (e) => {
                null != t.current &&
                    ((_.current += 1),
                    C({
                        questId: h,
                        event: m.rMx.QUEST_VIDEO_BUFFERING_ENDED,
                        properties: f(
                            {
                                video_asset_id: E,
                                network_connection_speed: y,
                                duration: e,
                                buffer_index: _.current,
                                video_session_id: v,
                            },
                            p(n),
                        ),
                        sourceQuestContent: g,
                    }));
            },
            [h, t, E, v, n, C, g, y],
        ),
        w = r.useCallback(
            (e, t) => {
                S({
                    questId: h,
                    questContent: e,
                    questContentCTA: t,
                    sourceQuestContent: g,
                });
            },
            [h, g, S],
        ),
        k = r.useCallback(
            (e) => {
                if (null != t.current) {
                    var r, o;
                    C({
                        questId: h,
                        event: m.rMx.QUEST_VIDEO_SEGMENT_WATCHED,
                        properties: f(
                            ((r = f({}, e)),
                            (o = o =
                                {
                                    video_asset_id: E,
                                    quest_completed: b,
                                    video_duration_sec: t.current.duration,
                                    video_progress: (0, u.bA)(e.segment_end_sec, t.current.duration),
                                    video_session_id: v,
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(o)).forEach(function (e) {
                                      Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e));
                                  }),
                            r),
                            p(n),
                        ),
                        sourceQuestContent: g,
                    });
                }
            },
            [C, h, E, b, v, n, t, g],
        ),
        M = r.useCallback(
            (e, r) => {
                var o, i;
                if (null == t.current) return;
                let s = null == (o = t.current) ? void 0 : o.error,
                    c = null == (i = t.current) ? void 0 : i.networkState,
                    O = null != t.current ? (0, u.bA)(t.current.currentTime, t.current.duration) : void 0,
                    b =
                        null != r
                            ? {
                                  hls_error_subtype: r.errorDetails,
                                  hls_error_fatal: r.fatal,
                              }
                            : {};
                C({
                    questId: h,
                    event: m.rMx.QUEST_VIDEO_ERROR,
                    properties: f(
                        {
                            video_progress: O,
                            video_error_type: e,
                            video_asset_id: E,
                            network_connection_speed: y,
                            video_session_id: v,
                            video_error_code: null == s ? void 0 : s.code,
                            video_error_message: null == s ? void 0 : s.message,
                            video_network_state: c,
                        },
                        p(n),
                        b,
                    ),
                    sourceQuestContent: g,
                }),
                    e === d.CY.SOURCE_ERROR &&
                        a.Z.increment({
                            name: l.V.QUEST_VIDEO_ERROR,
                            tags: ["quest_id:".concat(h), "error_type:".concat(e)],
                        });
            },
            [h, t, E, v, n, C, g, y],
        ),
        L = r.useCallback(
            (e, t) => {
                let n;
                switch (
                    (O.info(
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
                M(n, {
                    errorDetails: t.details,
                    fatal: t.fatal,
                });
            },
            [O, M],
        );
    r.useEffect(() => {
        if (null == n.current) return;
        let e = n.current;
        return (
            e.on(o.ZP.Events.ERROR, L),
            () => {
                e.off(o.ZP.Events.ERROR, L);
            }
        );
    }, [n, L]);
    let V = r.useCallback(
            (e) => {
                null != t.current &&
                    C({
                        questId: h,
                        event: e ? m.rMx.QUEST_VIDEO_FULLSCREEN_ENTERED : m.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                        properties: f(
                            {
                                video_session_id: v,
                                video_asset_id: E,
                            },
                            p(n),
                        ),
                        sourceQuestContent: g,
                    });
            },
            [h, t, v, n, C, E, g],
        ),
        Z = r.useCallback(
            (e) => {
                null != t.current &&
                    C({
                        questId: h,
                        event: m.rMx.QUEST_VIDEO_VOLUME_CHANGED,
                        properties: f(
                            {
                                volume_threshold: e > 0 && e < 1 ? 0.5 : e,
                                video_session_id: v,
                                video_asset_id: E,
                            },
                            p(n),
                        ),
                        sourceQuestContent: g,
                    });
            },
            [h, t, E, v, n, C, g],
        );
    return {
        trackQuestVideoLoadingStarted: x,
        trackQuestVideoLoadingEnded: j,
        trackQuestVideoTimeToFirstFrame: D,
        trackQuestVideoProgressed: P,
        trackQuestVideoResumed: T,
        trackQuestVideoPaused: R,
        trackQuestVideoFocusChange: I,
        trackQuestContentClick: w,
        trackQuestVideoBufferingStarted: N,
        trackQuestVideoBufferingEnded: A,
        trackWatchTimeAnalytics: k,
        trackQuestVideoFullscreenChanged: V,
        trackQuestVideoError: M,
        trackQuestVideoVolumeChanged: Z,
    };
}
