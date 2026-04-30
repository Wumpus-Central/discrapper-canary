n.d(t, { dv: () => h, tW: () => T, fY: () => u, WV: () => m, Yt: () => f, UX: () => p, vm: () => S }),
    n(134528),
    n(947204);
var i,
    a = n(412703),
    r = n(440703),
    s = n(998218),
    l = n(835517),
    o = n(801365),
    d = n(654487),
    c = n(652215);
let _ = /\.([a-zA-Z0-9]+)$/,
    E = ["video/mp4", "video/webm"];
var u =
    (((i = {}).HERO = "hero"),
    (i.HERO_IMAGE = "hero_image"),
    (i.HERO_VIDEO = "hero_video"),
    (i.QUEST_BAR_HERO = "quest_bar_hero"),
    (i.QUEST_BAR_HERO_VIDEO = "quest_bar_hero_video"),
    (i.QUEST_BAR_HERO_IMAGE = "quest_bar_hero_image"),
    (i.REWARD = "reward"),
    (i.REWARD_IMAGE = "reward_image"),
    (i.GAME_TILE = "game_tile"),
    (i.LOGO_TYPE = "logo_type"),
    (i.COSPONSOR_LOGO_TYPE = "cosponsor_logo_type"),
    (i.VIDEO_PLAYER_VIDEO = "video_player_video"),
    (i.VIDEO_PLAYER_VIDEO_LOW_RES = "video_player_video_low_res"),
    (i.VIDEO_PLAYER_VIDEO_HLS = "video_player_video_hls"),
    (i.VIDEO_PLAYER_THUMBNAIL = "video_player_thumbnail"),
    (i.VIDEO_PLAYER_CAPTION = "video_player_caption"),
    (i.VIDEO_PLAYER_TRANSCRIPT = "video_player_transcript"),
    i);
function A(e, t) {
    return null != e ? e : t;
}
let I = {
    video_player_video: { variant: "video", property: "url" },
    video_player_video_low_res: { variant: "videoLowRes", property: "url" },
    video_player_video_hls: { variant: "videoHls", property: "url" },
    video_player_thumbnail: { variant: "video", property: "thumbnail" },
    video_player_caption: { variant: "video", property: "caption" },
    video_player_transcript: { variant: "video", property: "transcript" },
};
function T(e, t, n, i) {
    var s;
    let l,
        c,
        _,
        u,
        T = !1,
        h = !1;
    switch (t) {
        case "hero":
            u = A(e.config.assets.heroVideo, e.config.assets.hero);
            break;
        case "hero_image":
            u = e.config.assets.hero;
            break;
        case "hero_video": {
            let t = e.config.assets.heroVideo;
            if (null == t) return null;
            u = t;
            break;
        }
        case "quest_bar_hero":
            u = A(e.config.assets.questBarHeroVideo, e.config.assets.questBarHero);
            break;
        case "quest_bar_hero_video": {
            let t = e.config.assets.questBarHeroVideo;
            if (null == t) return null;
            u = t;
            break;
        }
        case "quest_bar_hero_image":
            u = e.config.assets.questBarHero;
            break;
        case "reward": {
            let t = (0, o.sn)(e);
            if (t.type === r.l.VIRTUAL_CURRENCY)
                return i
                    ? {
                          url: "https://cdn.discordapp.com/assets/content/f763593591e9ac5ee5abab6d8cce6c395263fa51f6c1e30c07cbfc793cd877d2.mp4",
                          mimetype: "video/mp4",
                          isAnimated: !0,
                      }
                    : {
                          url: "https://cdn.discordapp.com/assets/content/fb761d9c206f93cd8c4e7301798abe3f623039a4054f2e7accd019e1bb059fc8.webm",
                          mimetype: "video/webm",
                          isAnimated: !0,
                      };
            u = A(t.assetVideo, t.asset);
            break;
        }
        case "reward_image": {
            let t = (0, o.sn)(e);
            if (t.type === r.l.VIRTUAL_CURRENCY) return null;
            u = t.asset;
            break;
        }
        case "game_tile":
            "dark" === n && null != e.config.assets.gameTileDark
                ? (u = e.config.assets.gameTileDark)
                : "light" === n && null != e.config.assets.gameTileLight
                  ? (u = e.config.assets.gameTileLight)
                  : ((u = e.config.assets.gameTile), (T = !0));
            break;
        case "logo_type":
            "dark" === n && null != e.config.assets.logotypeDark
                ? (u = e.config.assets.logotypeDark)
                : "light" === n && null != e.config.assets.logotypeLight
                  ? (u = e.config.assets.logotypeLight)
                  : ((u = e.config.assets.logotype), (T = !0));
            break;
        case "cosponsor_logo_type":
            if (null == e.config.cosponsorMetadata) return null;
            "dark" === n && null != e.config.cosponsorMetadata.logotypeDark
                ? (u = e.config.cosponsorMetadata.logotypeDark)
                : "light" === n && null != e.config.cosponsorMetadata.logotypeLight
                  ? (u = e.config.cosponsorMetadata.logotypeLight)
                  : ((u = e.config.cosponsorMetadata.logotype), (T = !0));
            break;
        case "video_player_video":
        case "video_player_video_low_res":
        case "video_player_video_hls":
        case "video_player_thumbnail":
        case "video_player_caption":
        case "video_player_transcript": {
            if (!("taskConfigV2" in e.config)) return null;
            let n = e.config.taskConfigV2.tasks[i ? a.n.WATCH_VIDEO_ON_MOBILE : a.n.WATCH_VIDEO],
                r = I[t],
                s = n?.assets[r.variant]?.[r.property];
            if (null == s) return null;
            (u = s), (h = !0);
        }
    }
    let N =
        ((l = (function (e, t, n) {
            if (t.startsWith("blob:")) return t.split("?", 1).at(0) ?? t;
            let i = d.CI;
            return t.includes("/") ? ((i = d.GD), `${i}${t}`) : `${i}${e}${n?.theme != null ? `/${n.theme}` : ""}/${t}`;
        })(e.id, (s = u), { theme: T ? n : void 0 })),
        (_ = null != (c = S(s)) && E.includes(c)),
        { url: l, mimetype: c, isAnimated: _ });
    return h && null == N.mimetype ? null : N;
}
function h(e) {
    if (null != e)
        return e.startsWith("http://") || e.startsWith("https://") || e.startsWith("blob:") ? e : `${d.GD}${e}`;
}
function S(e) {
    if (e.startsWith("blob:")) {
        let t = s.A.toURLSafe(e)?.searchParams.get("mimetype") ?? void 0;
        return null != t ? decodeURIComponent(t) : null;
    }
    let t = s.A.toURLSafe(e);
    switch (t?.searchParams.get("format")?.toLowerCase() ?? _.exec(e)?.[1]?.toLowerCase()) {
        case "webm":
            return "video/webm";
        case "mp4":
            return "video/mp4";
        case "webp":
            return "image/webp";
        case "jpg":
        case "jpeg":
            return "image/jpeg";
        case "png":
            return "image/png";
        case "gif":
            return "image/gif";
        case "svg":
            return "image/svg+xml";
        case "txt":
            return "text/plain";
        case "vtt":
            return "text/vtt";
        case "ts":
            return "video/mp2t";
        case "m3u8":
            return "application/x-mpegURL";
        default:
            return null;
    }
}
function N(e) {
    return Math.min(Math.ceil(e), c.uJv);
}
function f(e, t) {
    let n = (0, l.A)();
    return n < 3 ? { width: e, height: t } : { width: e * n, height: t * n };
}
function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (e.startsWith("blob:")) return e;
    let n = s.A.toURLSafe(e);
    return null == n
        ? e
        : (null != t.format && n.searchParams.set("format", t.format),
          null != t.width && n.searchParams.set("width", `${N(t.width)}`),
          null != t.height && n.searchParams.set("height", `${N(t.height)}`),
          n.toString());
}
function m(e, t) {
    if (e.startsWith("blob:")) return e;
    let n = s.A.toURLSafe(e);
    return null == n
        ? null
        : (n.searchParams.set("format", "webp"),
          null != t && (n.searchParams.set("width", `${N(t.width)}`), n.searchParams.set("height", `${N(t.height)}`)),
          n.toString());
}
