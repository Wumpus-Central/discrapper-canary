n.d(t, { Pd: () => o, UA: () => s, V3: () => d });
var i,
    l,
    a = n(890687),
    r = n(710969),
    s =
        (((i = {})[(i.UNENROLLED = 0)] = "UNENROLLED"),
        (i[(i.ENROLLED = 1)] = "ENROLLED"),
        (i[(i.INCOMPLETE = 2)] = "INCOMPLETE"),
        (i[(i.COMPLETED = 3)] = "COMPLETED"),
        (i[(i.CLAIMED = 4)] = "CLAIMED"),
        (i[(i.EXPIRED = 5)] = "EXPIRED"),
        i);
function o(e) {
    let t = e.userStatus?.enrolledAt != null,
        n = e.userStatus?.completedAt != null,
        i = e.userStatus?.claimedAt != null,
        l = (0, a.fc)(e).percentComplete > 0;
    return (0, r.Ic)(e) ? 5 : i ? 4 : t && n ? 3 : t && l ? 2 : +!!t;
}
var d =
    (((l = {})[(l.QUEST_BAR_FOOTER = 1)] = "QUEST_BAR_FOOTER"),
    (l[(l.QUEST_HOME_TILE_FOOTER = 2)] = "QUEST_HOME_TILE_FOOTER"),
    (l[(l.QUEST_EMBED = 3)] = "QUEST_EMBED"),
    (l[(l.ACTIVITY_PANEL = 4)] = "ACTIVITY_PANEL"),
    (l[(l.VOICE_CALL_HEADER = 5)] = "VOICE_CALL_HEADER"),
    l);
