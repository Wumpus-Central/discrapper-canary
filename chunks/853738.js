n.d(t, {
    A: () => c,
});
var r = n(64700),
    l = n(412703),
    o = n(536968),
    i = n(579473),
    s = n(717415),
    a = n(654487);

function c(e) {
    let { videoAssetUrl: t, videoRef: n, hlsRef: c, videoAssetType: u } = e,
        { questConfig: d } = r.useContext(s.VideoQuestConfigContext),
        f = r.useRef(null);
    r.useEffect(() => {
        var e, r;
        if (
            null == t ||
            null == n.current ||
            (u === i.fY.VIDEO_PLAYER_VIDEO_HLS && null == c.current) ||
            !(0, o._o)({
                location: a.rE.VIDEO_MODAL,
            }).externalAnalyticsEnabled
        )
            return;
        let s = {
            debug: !1,
            videoElement: n.current,
            hlsInstance: u === i.fY.VIDEO_PLAYER_VIDEO_HLS && null != (e = c.current) ? e : void 0,
            feature: "quests",
            contentMetadata: {
                contentId: t,
                videoStreamType: u === i.fY.VIDEO_PLAYER_VIDEO_HLS ? "hls" : "mp4",
                contentType: "quests",
                durationSec: null == n.current.duration || isNaN(n.current.duration) ? 0 : n.current.duration,
                title: null == (r = d.taskConfigV2.tasks[l.n.WATCH_VIDEO]) ? void 0 : r.messages.videoTitle,
                questId: d.id,
                gameName: d.messages.gameTitle,
            },
        };
        return (
            (f.current = new o.Gb(s)),
            f.current.initialize(),
            () => {
                null != f.current && (f.current.endSession(), f.current.destroy(), (f.current = null));
            }
        );
    }, [u, c, t, n, d]);
}
