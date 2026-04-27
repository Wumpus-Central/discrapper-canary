n.d(t, { A: () => d });
var r = n(64700),
    s = n(412703);
n(531443);
var a = n(118356);
n(141711), n(497329), new a.Vy("MobileCustomMuxIntegration"), new a.Vy("MobileMuxWrapper"), n(740644);
var i = n(829097),
    l = n(613373),
    u = n(859387),
    o = n(795068),
    c = n(654487);
function d(e) {
    let { videoAssetUrl: t, videoRef: n, hlsRef: a, videoAssetType: d } = e,
        { questConfig: E } = r.useContext(o.l),
        m = (0, i._)({ location: c.rE.VIDEO_MODAL }).externalAnalyticsEnabled && null != t,
        f = d === u.fY.VIDEO_PLAYER_VIDEO_HLS,
        _ = r.useMemo(
            () =>
                m && null != t
                    ? {
                          contentId: t,
                          videoStreamType: f ? "hls" : "mp4",
                          contentType: "quests",
                          title: E.taskConfigV2.tasks[s.n.WATCH_VIDEO]?.messages.videoTitle,
                          questId: E.id,
                          gameName: E.messages.gameTitle,
                      }
                    : void 0,
            [m, t, f, E],
        );
    (0, l.P8)({ videoRef: n, hlsRef: a, contentMetadata: _, isHls: f });
}
