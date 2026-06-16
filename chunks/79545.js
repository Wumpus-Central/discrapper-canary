n.d(e, { Pd: () => u, UA: () => r, Ut: () => E, V3: () => c, wX: () => C });
var s,
    i,
    a = n(347135),
    l = n(710969),
    o = n(190107),
    r =
        (((s = {})[(s.UNENROLLED = 0)] = "UNENROLLED"),
        (s[(s.ENROLLED = 1)] = "ENROLLED"),
        (s[(s.INCOMPLETE = 2)] = "INCOMPLETE"),
        (s[(s.COMPLETED = 3)] = "COMPLETED"),
        (s[(s.CLAIMED = 4)] = "CLAIMED"),
        (s[(s.EXPIRED = 5)] = "EXPIRED"),
        (s[(s.EXPIRED_CLAIMABLE = 6)] = "EXPIRED_CLAIMABLE"),
        s);
function u(t) {
    let e = t.userStatus?.enrolledAt != null,
        n = t.userStatus?.completedAt != null,
        s = t.userStatus?.claimedAt != null,
        i = (0, a.fc)(t).percentComplete > 0;
    return (0, l.Ic)(t) ? ((0, l.if)(t) && n && !s ? 6 : 5) : s ? 4 : e && n ? 3 : e && i ? 2 : +!!e;
}
var c =
    (((i = {})[(i.QUEST_BAR_FOOTER = 1)] = "QUEST_BAR_FOOTER"),
    (i[(i.QUEST_HOME_TILE_FOOTER = 2)] = "QUEST_HOME_TILE_FOOTER"),
    (i[(i.QUEST_EMBED = 3)] = "QUEST_EMBED"),
    (i[(i.ACTIVITY_PANEL = 4)] = "ACTIVITY_PANEL"),
    (i[(i.VOICE_CALL_HEADER = 5)] = "VOICE_CALL_HEADER"),
    (i[(i.QUEST_HOME_TILE_V2_FOOTER = 6)] = "QUEST_HOME_TILE_V2_FOOTER"),
    i);
function C(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "primary";
    return 6 === t ? "overlay-primary" : e;
}
function E(t) {
    if (2 === t || 6 === t) return null;
    switch (t) {
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
