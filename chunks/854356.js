n.d(t, { A: () => d });
var r = n(64700),
    l = n(412703);
n(531443);
var i = n(941426);
n(141711), n(497329), new i.Vy("MobileCustomMuxIntegration"), new i.Vy("MobileMuxWrapper"), n(740644);
var a = n(829097),
    s = n(613373),
    u = n(46948),
    o = n(795068),
    c = n(190107);
function d(e) {
    let { videoAssetUrl: t, videoRef: n, hls: i, videoAssetType: d } = e,
        { questConfig: E } = r.useContext(o.l),
        f = (0, a._)({ location: c.rE.VIDEO_MODAL }).externalAnalyticsEnabled && null != t,
        _ = d === u.fY.VIDEO_PLAYER_VIDEO_HLS,
        m = r.useMemo(
            () =>
                f && null != t
                    ? {
                          contentId: t,
                          videoStreamType: _ ? "hls" : "mp4",
                          contentType: "quests",
                          title: E.taskConfigV2.tasks[l.n.WATCH_VIDEO]?.messages.videoTitle,
                          questId: E.id,
                          gameName: E.messages.gameTitle,
                      }
                    : void 0,
            [f, t, _, E],
        );
    (0, s.P8)({ videoRef: n, hls: i, contentMetadata: m, isHls: _ });
}
