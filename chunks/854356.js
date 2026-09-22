n.d(t, { A: () => d });
var r = n(582128),
    l = n(412703);
n(531443);
var i = n(941426);
(n(141711), n(497329), new i.Vy("MobileCustomMuxIntegration"), new i.Vy("MobileMuxWrapper"), n(740644));
var s = n(829097),
    u = n(613373),
    a = n(291749),
    o = n(795068),
    c = n(190107);
function d(e) {
    let { videoAssetUrl: t, videoRef: n, hls: i, videoAssetType: d } = e,
        { questConfig: E } = r.useContext(o.l),
        _ = (0, s._)({ location: c.rE.VIDEO_MODAL }).externalAnalyticsEnabled && null != t,
        f = d === a.fY.VIDEO_PLAYER_VIDEO_HLS,
        p = r.useMemo(
            () =>
                _ && null != t
                    ? {
                          contentId: t,
                          videoStreamType: f ? "hls" : "mp4",
                          contentType: "quests",
                          title: E.taskConfigV2.tasks[l.n.WATCH_VIDEO]?.messages.videoTitle,
                          questId: E.id,
                          gameName: E.messages.gameTitle,
                      }
                    : void 0,
            [_, t, f, E],
        );
    (0, u.P8)({ videoRef: n, hls: i, contentMetadata: p, isHls: f });
}
