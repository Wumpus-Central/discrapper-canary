n.d(t, { Z: () => c });
var r = n(473749),
    o = n(754700),
    l = n(707903),
    i = n(475595),
    a = n(215113),
    s = n(324805);
function c(e) {
    let { videoAssetUrl: t, videoRef: n, hlsRef: c, videoAssetType: u } = e,
        { questConfig: d } = r.useContext(a.VideoQuestConfigContext),
        m = r.useRef(null);
    r.useEffect(() => {
        var e, r;
        if (
            null == t ||
            null == n.current ||
            (u === i.eC.VIDEO_PLAYER_VIDEO_HLS && null == c.current) ||
            !(0, l.Zx)({ location: s.dr.VIDEO_MODAL }).externalAnalyticsEnabled
        )
            return;
        let a = {
            debug: !1,
            videoElement: n.current,
            hlsInstance: u === i.eC.VIDEO_PLAYER_VIDEO_HLS && null != (r = c.current) ? r : void 0,
            feature: "quests",
            contentMetadata: {
                contentId: t,
                videoStreamType: u === i.eC.VIDEO_PLAYER_VIDEO_HLS ? "hls" : "mp4",
                contentType: "quests",
                durationSec: null == n.current.duration || isNaN(n.current.duration) ? 0 : n.current.duration,
                title: null == (e = d.taskConfigV2.tasks[o.X.WATCH_VIDEO]) ? void 0 : e.messages.videoTitle,
                questId: d.id,
                gameName: d.messages.gameTitle,
            },
        };
        return (
            (m.current = new l.ci(a)),
            m.current.initialize(),
            () => {
                null != m.current && (m.current.endSession(), m.current.destroy(), (m.current = null));
            }
        );
    }, [u, c, t, n, d]);
}
