n.d(t, { P0: () => u, Pd: () => o, UA: () => a, V3: () => c, wX: () => d });
var i,
    l,
    r = n(309593),
    s = n(710969),
    a =
        (((i = {})[(i.UNENROLLED = 0)] = "UNENROLLED"),
        (i[(i.ENROLLED = 1)] = "ENROLLED"),
        (i[(i.INCOMPLETE = 2)] = "INCOMPLETE"),
        (i[(i.COMPLETED = 3)] = "COMPLETED"),
        (i[(i.CLAIMED = 4)] = "CLAIMED"),
        (i[(i.EXPIRED = 5)] = "EXPIRED"),
        (i[(i.EXPIRED_CLAIMABLE = 6)] = "EXPIRED_CLAIMABLE"),
        i);
function o(e) {
    let t = e.userStatus?.enrolledAt != null,
        n = e.userStatus?.completedAt != null,
        i = e.userStatus?.claimedAt != null,
        l = (0, r.fc)(e).percentComplete > 0;
    return (0, s.Ic)(e) ? ((0, s.if)(e) && n && !i ? 6 : 5) : i ? 4 : t && n ? 3 : t && l ? 2 : +!!t;
}
var c =
    (((l = {})[(l.QUEST_BAR_FOOTER = 1)] = "QUEST_BAR_FOOTER"),
    (l[(l.QUEST_HOME_TILE_FOOTER = 2)] = "QUEST_HOME_TILE_FOOTER"),
    (l[(l.QUEST_EMBED = 3)] = "QUEST_EMBED"),
    (l[(l.ACTIVITY_PANEL = 4)] = "ACTIVITY_PANEL"),
    (l[(l.VOICE_CALL_HEADER = 5)] = "VOICE_CALL_HEADER"),
    (l[(l.QUEST_HOME_TILE_V2_FOOTER = 6)] = "QUEST_HOME_TILE_V2_FOOTER"),
    l);
function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "primary";
    return 6 === e ? "overlay-primary" : t;
}
function u(e) {
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
