"use strict";
n.d(t, { Pd: () => u, UA: () => l, Ut: () => _, V3: () => c, wX: () => d });
var i,
    r,
    s = n(347135),
    a = n(710969),
    o = n(190107),
    l =
        (((i = {})[(i.UNENROLLED = 0)] = "UNENROLLED"),
        (i[(i.ENROLLED = 1)] = "ENROLLED"),
        (i[(i.INCOMPLETE = 2)] = "INCOMPLETE"),
        (i[(i.COMPLETED = 3)] = "COMPLETED"),
        (i[(i.CLAIMED = 4)] = "CLAIMED"),
        (i[(i.EXPIRED = 5)] = "EXPIRED"),
        (i[(i.EXPIRED_CLAIMABLE = 6)] = "EXPIRED_CLAIMABLE"),
        i);
function u(e) {
    let t = e.userStatus?.enrolledAt != null,
        n = e.userStatus?.completedAt != null,
        i = e.userStatus?.claimedAt != null,
        r = (0, s.fc)(e).percentComplete > 0;
    return (0, a.Ic)(e) ? ((0, a.if)(e) && n && !i ? 6 : 5) : i ? 4 : t && n ? 3 : t && r ? 2 : +!!t;
}
var c =
    (((r = {})[(r.QUEST_BAR_FOOTER = 1)] = "QUEST_BAR_FOOTER"),
    (r[(r.QUEST_HOME_TILE_FOOTER = 2)] = "QUEST_HOME_TILE_FOOTER"),
    (r[(r.QUEST_EMBED = 3)] = "QUEST_EMBED"),
    (r[(r.ACTIVITY_PANEL = 4)] = "ACTIVITY_PANEL"),
    (r[(r.VOICE_CALL_HEADER = 5)] = "VOICE_CALL_HEADER"),
    (r[(r.QUEST_HOME_TILE_V2_FOOTER = 6)] = "QUEST_HOME_TILE_V2_FOOTER"),
    r);
function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "primary";
    return 6 === e ? "overlay-primary" : t;
}
function _(e) {
    if (2 === e || 6 === e) return null;
    switch (e) {
        case 1:
            return o.rE.QUESTS_BAR;
        case 3:
            return o.rE.EMBED_DESKTOP;
        case 4:
            return o.rE.ACTIVITY_PANEL;
        case 5:
            return o.rE.QUEST_CHANNEL_CALL_HEADER;
        default:
            return null;
    }
}
