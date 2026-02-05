n.d(t, { A: () => u });
var r = n(64700),
    s = n(412703),
    i = n(536968),
    l = n(579473),
    a = n(717415),
    o = n(654487);
function u(e) {
    let { videoAssetUrl: t, videoRef: n, hlsRef: u, videoAssetType: c } = e,
        { questConfig: d } = r.useContext(a.VideoQuestConfigContext),
        m = r.useRef(null);
    r.useEffect(() => {
        if (
            null == t ||
            null == n.current ||
            (c === l.fY.VIDEO_PLAYER_VIDEO_HLS && null == u.current) ||
            !(0, i._o)({ location: o.rE.VIDEO_MODAL }).externalAnalyticsEnabled
        )
            return;
        let e = {
            debug: !1,
            videoElement: n.current,
            hlsInstance: c === l.fY.VIDEO_PLAYER_VIDEO_HLS ? (u.current ?? void 0) : void 0,
            feature: "quests",
            contentMetadata: {
                contentId: t,
                videoStreamType: c === l.fY.VIDEO_PLAYER_VIDEO_HLS ? "hls" : "mp4",
                contentType: "quests",
                durationSec: null == n.current.duration || isNaN(n.current.duration) ? 0 : n.current.duration,
                title: d.taskConfigV2.tasks[s.n.WATCH_VIDEO]?.messages.videoTitle,
                questId: d.id,
                gameName: d.messages.gameTitle,
            },
        };
        return (
            (m.current = new i.Gb(e)),
            m.current.initialize(),
            () => {
                null != m.current && (m.current.endSession(), m.current.destroy(), (m.current = null));
            }
        );
    }, [c, u, t, n, d]);
}
