n.d(t, { P0: () => c, Pd: () => o, UA: () => a, V3: () => u, wX: () => d });
var l,
    i,
    r = n(347135),
    s = n(710969),
    a =
        (((l = {})[(l.UNENROLLED = 0)] = "UNENROLLED"),
        (l[(l.ENROLLED = 1)] = "ENROLLED"),
        (l[(l.INCOMPLETE = 2)] = "INCOMPLETE"),
        (l[(l.COMPLETED = 3)] = "COMPLETED"),
        (l[(l.CLAIMED = 4)] = "CLAIMED"),
        (l[(l.EXPIRED = 5)] = "EXPIRED"),
        (l[(l.EXPIRED_CLAIMABLE = 6)] = "EXPIRED_CLAIMABLE"),
        l);
function o(e) {
    let t = e.userStatus?.enrolledAt != null,
        n = e.userStatus?.completedAt != null,
        l = e.userStatus?.claimedAt != null,
        i = (0, r.fc)(e).percentComplete > 0;
    return (0, s.Ic)(e) ? ((0, s.if)(e) && n && !l ? 6 : 5) : l ? 4 : t && n ? 3 : t && i ? 2 : +!!t;
}
var u =
    (((i = {})[(i.QUEST_BAR_FOOTER = 1)] = "QUEST_BAR_FOOTER"),
    (i[(i.QUEST_HOME_TILE_FOOTER = 2)] = "QUEST_HOME_TILE_FOOTER"),
    (i[(i.QUEST_EMBED = 3)] = "QUEST_EMBED"),
    (i[(i.ACTIVITY_PANEL = 4)] = "ACTIVITY_PANEL"),
    (i[(i.VOICE_CALL_HEADER = 5)] = "VOICE_CALL_HEADER"),
    (i[(i.QUEST_HOME_TILE_V2_FOOTER = 6)] = "QUEST_HOME_TILE_V2_FOOTER"),
    i);
function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "primary";
    return 6 === e ? "overlay-primary" : t;
}
function c(e) {
    if (2 === e || 6 === e) return !1;
    switch (e) {
        case 1:
        case 3:
        case 4:
        case 5:
            return !0;
        default:
            return !1;
    }
}
