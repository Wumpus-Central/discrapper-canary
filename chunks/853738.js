"use strict";
n.d(t, { A: () => u });
var r = n(64700),
    i = n(412703),
    a = n(536968),
    s = n(579473),
    o = n(717415),
    l = n(654487);
function u(e) {
    let { videoAssetUrl: t, videoRef: n, hlsRef: u, videoAssetType: c } = e,
        { questConfig: d } = r.useContext(o.VideoQuestConfigContext),
        _ = r.useRef(null);
    r.useEffect(() => {
        if (
            null == t ||
            null == n.current ||
            (c === s.fY.VIDEO_PLAYER_VIDEO_HLS && null == u.current) ||
            !(0, a._o)({ location: l.rE.VIDEO_MODAL }).externalAnalyticsEnabled
        )
            return;
        let e = {
            debug: !1,
            videoElement: n.current,
            hlsInstance: c === s.fY.VIDEO_PLAYER_VIDEO_HLS ? (u.current ?? void 0) : void 0,
            feature: "quests",
            contentMetadata: {
                contentId: t,
                videoStreamType: c === s.fY.VIDEO_PLAYER_VIDEO_HLS ? "hls" : "mp4",
                contentType: "quests",
                durationSec: null == n.current.duration || isNaN(n.current.duration) ? 0 : n.current.duration,
                title: d.taskConfigV2.tasks[i.n.WATCH_VIDEO]?.messages.videoTitle,
                questId: d.id,
                gameName: d.messages.gameTitle,
            },
        };
        return (
            (_.current = new a.Gb(e)),
            _.current.initialize(),
            () => {
                null != _.current && (_.current.endSession(), _.current.destroy(), (_.current = null));
            }
        );
    }, [c, u, t, n, d]);
}
