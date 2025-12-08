n.d(t, { v: () => r });
class r {
    static mapDiscordToMuxMetadata(e, t) {
        var n, r, o, l;
        return {
            env_key: "1qd16mdmdjasipqg3irobln4u",
            session_id: t,
            player_name: "discord",
            player_version: "1.0.0",
            video_id: e.contentMetadata.contentId,
            video_title: e.contentMetadata.title,
            video_duration: null != (o = e.contentMetadata.durationMs) ? o : 1000 * e.contentMetadata.durationSec,
            video_content_type: e.contentMetadata.contentType,
            video_series: e.contentMetadata.questId,
            video_producer: e.contentMetadata.gameId,
            video_brand: null != (l = e.contentMetadata.gameName) ? l : "Discord",
            video_cdn: "Cloudflare",
            video_stream_type: e.contentMetadata.videoStreamType,
            view_client_application_name: this.getBuildChannel(),
            view_client_application_version: this.getAppVersion(),
            viewer_user_id: null == (n = e.userContext) ? void 0 : n.userId,
            viewer_plan: null == (r = e.userContext) ? void 0 : r.userTier,
        };
    }
    static getAppVersion() {
        try {
            var e;
            return ((e = "477243"), void 0 !== e) ? e : "unknown";
        } catch (e) {
            return "unknown";
        }
    }
    static getBuildChannel() {
        try {
            var e, t;
            return null != (t = null == (e = window.GLOBAL_ENV) ? void 0 : e.RELEASE_CHANNEL) ? t : "stable";
        } catch (e) {
            return "stable";
        }
    }
}
