"use strict";
n.d(t, { Pd: () => l, UA: () => o, V3: () => u });
var i,
    r,
    s = n(31587),
    a = n(710969),
    o =
        (((i = {})[(i.UNENROLLED = 0)] = "UNENROLLED"),
        (i[(i.ENROLLED = 1)] = "ENROLLED"),
        (i[(i.INCOMPLETE = 2)] = "INCOMPLETE"),
        (i[(i.COMPLETED = 3)] = "COMPLETED"),
        (i[(i.CLAIMED = 4)] = "CLAIMED"),
        (i[(i.EXPIRED = 5)] = "EXPIRED"),
        (i[(i.EXPIRED_CLAIMABLE = 6)] = "EXPIRED_CLAIMABLE"),
        i);
function l(e) {
    let t = e.userStatus?.enrolledAt != null,
        n = e.userStatus?.completedAt != null,
        i = e.userStatus?.claimedAt != null,
        r = (0, s.fc)(e).percentComplete > 0;
    return (0, a.Ic)(e) ? ((0, a.if)(e) && n && !i ? 6 : 5) : i ? 4 : t && n ? 3 : t && r ? 2 : +!!t;
}
var u =
    (((r = {})[(r.QUEST_BAR_FOOTER = 1)] = "QUEST_BAR_FOOTER"),
    (r[(r.QUEST_HOME_TILE_FOOTER = 2)] = "QUEST_HOME_TILE_FOOTER"),
    (r[(r.QUEST_EMBED = 3)] = "QUEST_EMBED"),
    (r[(r.ACTIVITY_PANEL = 4)] = "ACTIVITY_PANEL"),
    (r[(r.VOICE_CALL_HEADER = 5)] = "VOICE_CALL_HEADER"),
    r);
