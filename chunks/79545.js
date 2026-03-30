n.d(t, { Pd: () => o, UA: () => s, V3: () => d });
var i,
    r,
    a = n(890687),
    l = n(710969),
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
        r = (0, a.fc)(e).percentComplete > 0;
    return (0, l.Ic)(e) ? 5 : i ? 4 : t && n ? 3 : t && r ? 2 : +!!t;
}
var d =
    (((r = {})[(r.QUEST_BAR_FOOTER = 1)] = "QUEST_BAR_FOOTER"),
    (r[(r.QUEST_HOME_TILE_FOOTER = 2)] = "QUEST_HOME_TILE_FOOTER"),
    (r[(r.QUEST_EMBED = 3)] = "QUEST_EMBED"),
    (r[(r.ACTIVITY_PANEL = 4)] = "ACTIVITY_PANEL"),
    (r[(r.VOICE_CALL_HEADER = 5)] = "VOICE_CALL_HEADER"),
    (r[(r.QUEST_EMBED_CARD = 6)] = "QUEST_EMBED_CARD"),
    r);
