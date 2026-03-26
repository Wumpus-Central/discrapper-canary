n.d(t, { A: () => c });
var r = n(64700),
    l = n(412703),
    a = n(536968),
    i = n(892358),
    s = n(579473),
    o = n(795068),
    u = n(654487);
function c(e) {
    let { videoAssetUrl: t, videoRef: n, hlsRef: c, videoAssetType: d } = e,
        { questConfig: m } = r.useContext(o.l),
        p = (0, a._o)({ location: u.rE.VIDEO_MODAL }).externalAnalyticsEnabled && null != t,
        E = d === s.fY.VIDEO_PLAYER_VIDEO_HLS,
        f = r.useMemo(
            () => ({
                contentId: t ?? "",
                videoStreamType: E ? "hls" : "mp4",
                contentType: "quests",
                title: m.taskConfigV2.tasks[l.n.WATCH_VIDEO]?.messages.videoTitle,
                questId: m.id,
                gameName: m.messages.gameTitle,
            }),
            [t, E, m],
        );
    (0, i.P8)({ videoRef: n, hlsRef: c, enabled: p, contentMetadata: f, isHls: E });
}
