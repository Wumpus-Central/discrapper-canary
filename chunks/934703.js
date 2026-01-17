n.d(t, { Z: () => v });
var r = n(473749),
    o = n(713447),
    l = n(286379),
    i = n(442837),
    a = n(797614),
    s = n(866960),
    c = n(617136),
    u = n(542347),
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
            videoAssetId: g,
            sourceQuestContent: E,
            logger: h,
            questId: C,
            isQuestCompleted: b,
            isFullEpisodeVideoQuest: S,
        } = e,
        O = (0, c._F)(),
        _ = (0, c.O5)(),
        x = (0, i.e7)([s.Z], () => s.Z.getEffectiveConnectionSpeed()),
        y = (0, r.useRef)(-1),
        j = r.useCallback(
            (e) => {
                null != t.current &&
                    O({
                        questId: C,
                        event: m.rMx.QUEST_VIDEO_LOADING_STARTED,
                        properties: f(
                            {
                                video_asset_id: g,
                                network_connection_speed: e,
                                video_session_id: v,
                                is_hls_supported: o.ZP.isSupported(),
                            },
                            p(n),
                        ),
                        sourceQuestContent: E,
                    });
            },
            [C, t, g, v, n, O, E],
        ),
        P = r.useCallback(
            (e) => {
                null != t.current &&
                    null != e &&
                    O({
                        questId: C,
                        event: m.rMx.QUEST_VIDEO_LOADING_ENDED,
                        properties: f(
                            {
                                video_asset_id: g,
                                network_connection_speed: x,
                                duration: e,
                                video_session_id: v,
                            },
                            p(n),
                        ),
                        sourceQuestContent: E,
                    });
            },
            [C, t, g, v, n, O, E, x],
        ),
        D = r.useCallback(
            (e) => {
                null != t.current &&
                    O({
                        questId: C,
                        event: m.rMx.QUEST_VIDEO_TIME_TO_FIRST_FRAME,
                        properties: f(
                            {
                                duration_ms: e,
                                video_session_id: v,
                                video_asset_id: g,
                            },
                            p(n),
                        ),
                        sourceQuestContent: E,
                    });
            },
            [C, t, g, v, n, O, E],
        ),
        T = r.useCallback(() => {
            null != t.current &&
                O({
                    questId: C,
                    event: m.rMx.QUEST_VIDEO_PROGRESSED,
                    properties: f(
                        {
                            progress: (0, u.bA)(t.current.currentTime, t.current.duration),
                            video_timestamp_seconds: t.current.currentTime,
                            video_session_id: v,
                            video_asset_id: g,
                        },
                        p(n),
                    ),
                    sourceQuestContent: E,
                });
        }, [C, t, v, n, O, g, E]),
        I = r.useCallback(
            (e) => {
                null != t.current &&
                    O({
                        questId: C,
                        event: m.rMx.QUEST_VIDEO_RESUMED,
                        properties: f(
                            {
                                video_timestamp_seconds: t.current.currentTime,
                                pause_reason: e,
                                video_session_id: v,
                                video_asset_id: g,
                            },
                            p(n),
                        ),
                        sourceQuestContent: E,
                    });
            },
            [C, t, v, n, O, g, E],
        ),
        N = r.useCallback(
            (e) => {
                null != t.current &&
                    null != e &&
                    O({
                        questId: C,
                        event: m.rMx.QUEST_VIDEO_PAUSED,
                        properties: f(
                            {
                                video_timestamp_seconds: t.current.currentTime,
                                reason: e,
                                video_session_id: v,
                                video_asset_id: g,
                            },
                            p(n),
                        ),
                        sourceQuestContent: E,
                    });
            },
            [C, t, v, n, O, g, E],
        ),
        w = r.useCallback(
            (e, n) => {
                null != t.current &&
                    O({
                        questId: C,
                        event: e ? m.rMx.QUEST_VIDEO_APP_FOCUSED : m.rMx.QUEST_VIDEO_APP_UNFOCUSED,
                        properties: {
                            video_timestamp_seconds: t.current.currentTime,
                            video_state: n,
                            video_session_id: v,
                            video_asset_id: g,
                        },
                        sourceQuestContent: E,
                    });
            },
            [C, t, v, O, g, E],
        ),
        k = r.useCallback(() => {
            null != t.current &&
                ((y.current += 1),
                O({
                    questId: C,
                    event: m.rMx.QUEST_VIDEO_BUFFERING_STARTED,
                    properties: f(
                        {
                            video_asset_id: g,
                            network_connection_speed: x,
                            buffer_index: y.current,
                            video_session_id: v,
                        },
                        p(n),
                    ),
                    sourceQuestContent: E,
                }));
        }, [C, t, g, v, n, O, E, x]),
        A = r.useCallback(
            (e) => {
                null != t.current &&
                    ((y.current += 1),
                    O({
                        questId: C,
                        event: m.rMx.QUEST_VIDEO_BUFFERING_ENDED,
                        properties: f(
                            {
                                video_asset_id: g,
                                network_connection_speed: x,
                                duration: e,
                                buffer_index: y.current,
                                video_session_id: v,
                            },
                            p(n),
                        ),
                        sourceQuestContent: E,
                    }));
            },
            [C, t, g, v, n, O, E, x],
        ),
        M = r.useCallback(
            (e, t) => {
                _({
                    questId: C,
                    questContent: e,
                    questContentCTA: t,
                    sourceQuestContent: E,
                });
            },
            [C, E, _],
        ),
        R = r.useCallback(
            (e) => {
                if (null != t.current) {
                    var r, o;
                    O({
                        questId: C,
                        event: m.rMx.QUEST_VIDEO_SEGMENT_WATCHED,
                        properties: f(
                            ((r = f({}, e)),
                            (o = o =
                                {
                                    video_asset_id: g,
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
                        sourceQuestContent: E,
                    });
                }
            },
            [O, C, g, b, v, n, t, E],
        ),
        L = r.useCallback(
            (e, r) => {
                var i, s;
                if (null == t.current) return;
                let c = null == (i = t.current) ? void 0 : i.error,
                    h = null == (s = t.current) ? void 0 : s.networkState,
                    b = null != t.current ? (0, u.bA)(t.current.currentTime, t.current.duration) : void 0,
                    _ =
                        null != r
                            ? {
                                  hls_error_subtype: r.errorDetails,
                                  hls_error_fatal: r.fatal,
                              }
                            : {};
                O({
                    questId: C,
                    event: m.rMx.QUEST_VIDEO_ERROR,
                    properties: f(
                        {
                            video_progress: b,
                            video_error_type: e,
                            video_asset_id: g,
                            network_connection_speed: x,
                            video_session_id: v,
                            video_error_code: null == c ? void 0 : c.code,
                            video_error_message: null == c ? void 0 : c.message,
                            video_network_state: h,
                            is_full_episode_video_quest: S,
                            is_hls_supported: o.ZP.isSupported(),
                        },
                        p(n),
                        _,
                    ),
                    sourceQuestContent: E,
                }),
                    (e === d.CY.SOURCE_ERROR || e === d.CY.NO_VALID_SOURCE) &&
                        a.Z.increment({
                            name: l.V.QUEST_VIDEO_ERROR,
                            tags: ["quest_id:".concat(C), "error_type:".concat(e)],
                        });
            },
            [C, t, g, v, n, O, E, x, S],
        ),
        V = r.useCallback(
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
                L(n, {
                    errorDetails: t.details,
                    fatal: t.fatal,
                });
            },
            [h, L],
        );
    r.useEffect(() => {
        if (null == n.current) return;
        let e = n.current;
        return (
            e.on(o.ZP.Events.ERROR, V),
            () => {
                e.off(o.ZP.Events.ERROR, V);
            }
        );
    }, [n, V]);
    let Z = r.useCallback(
            (e) => {
                null != t.current &&
                    O({
                        questId: C,
                        event: e ? m.rMx.QUEST_VIDEO_FULLSCREEN_ENTERED : m.rMx.QUEST_VIDEO_FULLSCREEN_EXITED,
                        properties: f(
                            {
                                video_session_id: v,
                                video_asset_id: g,
                            },
                            p(n),
                        ),
                        sourceQuestContent: E,
                    });
            },
            [C, t, v, n, O, g, E],
        ),
        F = r.useCallback(
            (e) => {
                null != t.current &&
                    O({
                        questId: C,
                        event: m.rMx.QUEST_VIDEO_VOLUME_CHANGED,
                        properties: f(
                            {
                                volume_threshold: e > 0 && e < 1 ? 0.5 : e,
                                video_session_id: v,
                                video_asset_id: g,
                            },
                            p(n),
                        ),
                        sourceQuestContent: E,
                    });
            },
            [C, t, g, v, n, O, E],
        );
    return {
        trackQuestVideoLoadingStarted: j,
        trackQuestVideoLoadingEnded: P,
        trackQuestVideoTimeToFirstFrame: D,
        trackQuestVideoProgressed: T,
        trackQuestVideoResumed: I,
        trackQuestVideoPaused: N,
        trackQuestVideoFocusChange: w,
        trackQuestContentClick: M,
        trackQuestVideoBufferingStarted: k,
        trackQuestVideoBufferingEnded: A,
        trackWatchTimeAnalytics: R,
        trackQuestVideoFullscreenChanged: Z,
        trackQuestVideoError: L,
        trackQuestVideoVolumeChanged: F,
    };
}
