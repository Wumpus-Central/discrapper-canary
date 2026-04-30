"use strict";
n.d(t, { dv: () => m, tW: () => E, fY: () => f, WV: () => S, Yt: () => I, UX: () => T, vm: () => g }),
    n(134528),
    n(947204);
var i,
    r = n(412703),
    s = n(440703),
    a = n(998218),
    o = n(835517),
    l = n(801365),
    u = n(190107),
    c = n(652215);
let d = /\.([a-zA-Z0-9]+)$/,
    _ = ["video/mp4", "video/webm"];
var f =
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
function h(e, t) {
    return null != e ? e : t;
}
let p = {
    video_player_video: { variant: "video", property: "url" },
    video_player_video_low_res: { variant: "videoLowRes", property: "url" },
    video_player_video_hls: { variant: "videoHls", property: "url" },
    video_player_thumbnail: { variant: "video", property: "thumbnail" },
    video_player_caption: { variant: "video", property: "caption" },
    video_player_transcript: { variant: "video", property: "transcript" },
};
function E(e, t, n, i) {
    var a;
    let o,
        c,
        d,
        f,
        E = !1,
        m = !1;
    switch (t) {
        case "hero":
            f = h(e.config.assets.heroVideo, e.config.assets.hero);
            break;
        case "hero_image":
            f = e.config.assets.hero;
            break;
        case "hero_video": {
            let t = e.config.assets.heroVideo;
            if (null == t) return null;
            f = t;
            break;
        }
        case "quest_bar_hero":
            f = h(e.config.assets.questBarHeroVideo, e.config.assets.questBarHero);
            break;
        case "quest_bar_hero_video": {
            let t = e.config.assets.questBarHeroVideo;
            if (null == t) return null;
            f = t;
            break;
        }
        case "quest_bar_hero_image":
            f = e.config.assets.questBarHero;
            break;
        case "reward": {
            let t = (0, l.sn)(e);
            if (t.type === s.l.VIRTUAL_CURRENCY)
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
            f = h(t.assetVideo, t.asset);
            break;
        }
        case "reward_image": {
            let t = (0, l.sn)(e);
            if (t.type === s.l.VIRTUAL_CURRENCY) return null;
            f = t.asset;
            break;
        }
        case "game_tile":
            "dark" === n && null != e.config.assets.gameTileDark
                ? (f = e.config.assets.gameTileDark)
                : "light" === n && null != e.config.assets.gameTileLight
                  ? (f = e.config.assets.gameTileLight)
                  : ((f = e.config.assets.gameTile), (E = !0));
            break;
        case "logo_type":
            "dark" === n && null != e.config.assets.logotypeDark
                ? (f = e.config.assets.logotypeDark)
                : "light" === n && null != e.config.assets.logotypeLight
                  ? (f = e.config.assets.logotypeLight)
                  : ((f = e.config.assets.logotype), (E = !0));
            break;
        case "cosponsor_logo_type":
            if (null == e.config.cosponsorMetadata) return null;
            "dark" === n && null != e.config.cosponsorMetadata.logotypeDark
                ? (f = e.config.cosponsorMetadata.logotypeDark)
                : "light" === n && null != e.config.cosponsorMetadata.logotypeLight
                  ? (f = e.config.cosponsorMetadata.logotypeLight)
                  : ((f = e.config.cosponsorMetadata.logotype), (E = !0));
            break;
        case "video_player_video":
        case "video_player_video_low_res":
        case "video_player_video_hls":
        case "video_player_thumbnail":
        case "video_player_caption":
        case "video_player_transcript": {
            if (!("taskConfigV2" in e.config)) return null;
            let n = e.config.taskConfigV2.tasks[i ? r.n.WATCH_VIDEO_ON_MOBILE : r.n.WATCH_VIDEO],
                s = p[t],
                a = n?.assets[s.variant]?.[s.property];
            if (null == a) return null;
            (f = a), (m = !0);
        }
    }
    let A =
        ((o = (function (e, t, n) {
            if (t.startsWith("blob:")) return t.split("?", 1).at(0) ?? t;
            let i = u.CI;
            return t.includes("/") ? ((i = u.GD), `${i}${t}`) : `${i}${e}${n?.theme != null ? `/${n.theme}` : ""}/${t}`;
        })(e.id, (a = f), { theme: E ? n : void 0 })),
        (d = null != (c = g(a)) && _.includes(c)),
        { url: o, mimetype: c, isAnimated: d });
    return m && null == A.mimetype ? null : A;
}
function m(e) {
    if (null != e)
        return e.startsWith("http://") || e.startsWith("https://") || e.startsWith("blob:") ? e : `${u.GD}${e}`;
}
function g(e) {
    if (e.startsWith("blob:")) {
        let t = a.A.toURLSafe(e)?.searchParams.get("mimetype") ?? void 0;
        return null != t ? decodeURIComponent(t) : null;
    }
    let t = a.A.toURLSafe(e);
    switch (t?.searchParams.get("format")?.toLowerCase() ?? d.exec(e)?.[1]?.toLowerCase()) {
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
function A(e) {
    return Math.min(Math.ceil(e), c.uJv);
}
function I(e, t) {
    let n = (0, o.A)();
    return n < 3 ? { width: e, height: t } : { width: e * n, height: t * n };
}
function T(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (e.startsWith("blob:")) return e;
    let n = a.A.toURLSafe(e);
    return null == n
        ? e
        : (null != t.format && n.searchParams.set("format", t.format),
          null != t.width && n.searchParams.set("width", `${A(t.width)}`),
          null != t.height && n.searchParams.set("height", `${A(t.height)}`),
          n.toString());
}
function S(e, t) {
    if (e.startsWith("blob:")) return e;
    let n = a.A.toURLSafe(e);
    return null == n
        ? null
        : (n.searchParams.set("format", "webp"),
          null != t && (n.searchParams.set("width", `${A(t.width)}`), n.searchParams.set("height", `${A(t.height)}`)),
          n.toString());
}
