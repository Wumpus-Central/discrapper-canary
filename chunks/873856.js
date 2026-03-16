n.d(t, { A: () => c });
var r = n(64700),
    l = n(412703),
    i = n(536968),
    s = n(892358),
    a = n(579473),
    o = n(752231),
    u = n(654487);
function c(e) {
    let { videoAssetUrl: t, videoRef: n, hlsRef: c, videoAssetType: d } = e,
        { questConfig: m } = r.useContext(o.VideoQuestConfigContext),
        p = (0, i._o)({ location: u.rE.VIDEO_MODAL }).externalAnalyticsEnabled && null != t,
        f = d === a.fY.VIDEO_PLAYER_VIDEO_HLS,
        E = r.useMemo(
            () => ({
                contentId: t ?? "",
                videoStreamType: f ? "hls" : "mp4",
                contentType: "quests",
                title: m.taskConfigV2.tasks[l.n.WATCH_VIDEO]?.messages.videoTitle,
                questId: m.id,
                gameName: m.messages.gameTitle,
            }),
            [t, f, m],
        );
    (0, s.P8)({ videoRef: n, hlsRef: c, enabled: p, contentMetadata: E, isHls: f });
}
