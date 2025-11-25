n.d(t, {
    KF: () => o,
    Lb: () => s,
    Ni: () => u,
    m: () => h,
    v$: () => c,
    xy: () => i,
    zd: () => d,
}),
    n(388685);
var l,
    a,
    r = n(981631);
let i = 15,
    s = 3,
    o = "1312632705086787756";
var u =
    12633 == n.j
        ? (((l = {})[(l.MESSAGE = 0)] = "MESSAGE"),
          (l[(l.SUMMARY = 1)] = "SUMMARY"),
          (l[(l.ACTIVITY = 2)] = "ACTIVITY"),
          (l[(l.CUSTOM_STATUS = 3)] = "CUSTOM_STATUS"),
          (l[(l.GENERATED_CANDIDATE = 4)] = "GENERATED_CANDIDATE"),
          (l[(l.GUILD_EVENT = 5)] = "GUILD_EVENT"),
          (l[(l.RECOMMENDED_GUILDS = 6)] = "RECOMMENDED_GUILDS"),
          l)
        : null;
function c(e) {
    switch (e.type) {
        case 0:
            var t;
            if (e.data.channel_type === r.d4z.GUILD_ANNOUNCEMENT) return "announcement";
            if ((null == (t = e.data.message_context) ? void 0 : t.external_content_application_id) != null)
                return "game_message";
            return "message";
        case 1:
            return "summary";
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
let d = new Set([0, 1, 3, 4]);
r.hBH.IMAGE, r.hBH.GIFV;
var h = 12633 == n.j ? (((a = {})[(a.DEFAULT = 0)] = "DEFAULT"), (a[(a.BOOKMARKS = 2)] = "BOOKMARKS"), a) : null;
