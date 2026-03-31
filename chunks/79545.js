n.d(t, { Pd: () => o, UA: () => s, V3: () => d });
var i,
    a,
    r = n(890687),
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
        a = (0, r.fc)(e).percentComplete > 0;
    return (0, l.Ic)(e) ? 5 : i ? 4 : t && n ? 3 : t && a ? 2 : +!!t;
}
var d =
    (((a = {})[(a.QUEST_BAR_FOOTER = 1)] = "QUEST_BAR_FOOTER"),
    (a[(a.QUEST_HOME_TILE_FOOTER = 2)] = "QUEST_HOME_TILE_FOOTER"),
    (a[(a.QUEST_EMBED = 3)] = "QUEST_EMBED"),
    (a[(a.ACTIVITY_PANEL = 4)] = "ACTIVITY_PANEL"),
    (a[(a.VOICE_CALL_HEADER = 5)] = "VOICE_CALL_HEADER"),
    a);
