n.d(t, { v: () => o });
let r = "1.0.0";
class o {
    static mapDiscordToMuxMetadata(e, t) {
        var n, o, a, l, i, s;
        let c = null != (l = null == (n = window.GLOBAL_ENV) ? void 0 : n.MUX_ENV_KEY) ? l : null;
        return null == c || 0 === c.length
            ? {
                  env_key: null,
                  session_id: t,
                  player_name: "discord",
                  player_version: r,
              }
            : {
                  env_key: c,
                  session_id: t,
                  player_name: "discord",
                  player_version: r,
                  video_id: e.contentMetadata.contentId,
                  video_title: e.contentMetadata.title,
                  video_duration: null != (i = e.contentMetadata.durationMs) ? i : 1000 * e.contentMetadata.durationSec,
                  video_content_type: e.contentMetadata.contentType,
                  video_series: e.contentMetadata.questId,
                  video_producer: e.contentMetadata.gameId,
                  video_brand: null != (s = e.contentMetadata.gameName) ? s : "Discord",
                  video_cdn: "Cloudflare",
                  video_stream_type: e.contentMetadata.videoStreamType,
                  view_client_application_name: this.getBuildChannel(),
                  view_client_application_version: this.getAppVersion(),
                  viewer_user_id: null == (o = e.userContext) ? void 0 : o.userId,
                  viewer_plan: null == (a = e.userContext) ? void 0 : a.userTier,
              };
    }
    static getAppVersion() {
        try {
            var e;
            return ((e = "444448"), void 0 !== e) ? e : "unknown";
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
