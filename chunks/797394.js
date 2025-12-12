n.d(t, {
    KF: () => o,
    Lb: () => s,
    Ni: () => c,
    m: () => p,
    v$: () => u,
    xy: () => a,
    zd: () => d,
}),
    n(388685);
var r,
    i,
    l = n(981631);
let a = 15,
    s = 3,
    o = "1312632705086787756";
var c =
    (((r = {})[(r.MESSAGE = 0)] = "MESSAGE"),
    (r[(r.ACTIVITY = 2)] = "ACTIVITY"),
    (r[(r.CUSTOM_STATUS = 3)] = "CUSTOM_STATUS"),
    (r[(r.GENERATED_CANDIDATE = 4)] = "GENERATED_CANDIDATE"),
    (r[(r.GUILD_EVENT = 5)] = "GUILD_EVENT"),
    (r[(r.RECOMMENDED_GUILDS = 6)] = "RECOMMENDED_GUILDS"),
    r);
function u(e) {
    switch (e.type) {
        case 0:
            var t;
            if (e.data.channel_type === l.d4z.GUILD_ANNOUNCEMENT) return "announcement";
            if ((null == (t = e.data.message_context) ? void 0 : t.external_content_application_id) != null)
                return "game_message";
            return "message";
        case 2:
            return "hotwheels_gaming_activity";
        case 3:
            return "hotwheels_custom_status";
        case 5:
            return "guild_event";
        case 6:
            return "recommended_guilds";
        case 4:
            return "generated_candidate";
    }
}
let d = new Set([0, 3, 4]);
l.hBH.IMAGE, l.hBH.GIFV;
var p = (((i = {})[(i.DEFAULT = 0)] = "DEFAULT"), (i[(i.BOOKMARKS = 2)] = "BOOKMARKS"), i);
