n.d(e, { Pd: () => l, UA: () => u, V3: () => r });
var s,
    i,
    o = n(890687),
    a = n(710969),
    u =
        (((s = {})[(s.UNENROLLED = 0)] = "UNENROLLED"),
        (s[(s.ENROLLED = 1)] = "ENROLLED"),
        (s[(s.INCOMPLETE = 2)] = "INCOMPLETE"),
        (s[(s.COMPLETED = 3)] = "COMPLETED"),
        (s[(s.CLAIMED = 4)] = "CLAIMED"),
        (s[(s.EXPIRED = 5)] = "EXPIRED"),
        (s[(s.EXPIRED_CLAIMABLE = 6)] = "EXPIRED_CLAIMABLE"),
        s);
function l(t) {
    let e = t.userStatus?.enrolledAt != null,
        n = t.userStatus?.completedAt != null,
        s = t.userStatus?.claimedAt != null,
        i = (0, o.fc)(t).percentComplete > 0;
    return (0, a.Ic)(t) ? ((0, a.if)(t) && n && !s ? 6 : 5) : s ? 4 : e && n ? 3 : e && i ? 2 : +!!e;
}
var r =
    (((i = {})[(i.QUEST_BAR_FOOTER = 1)] = "QUEST_BAR_FOOTER"),
    (i[(i.QUEST_HOME_TILE_FOOTER = 2)] = "QUEST_HOME_TILE_FOOTER"),
    (i[(i.QUEST_EMBED = 3)] = "QUEST_EMBED"),
    (i[(i.ACTIVITY_PANEL = 4)] = "ACTIVITY_PANEL"),
    (i[(i.VOICE_CALL_HEADER = 5)] = "VOICE_CALL_HEADER"),
    i);
