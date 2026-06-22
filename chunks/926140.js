"use strict";
n.d(t, { AT: () => u, X9: () => i, rD: () => l, vB: () => o });
class i {
    id;
    text;
    constructor(e) {
        (this.id = e), (this.text = e);
    }
}
var r,
    s,
    a,
    o = (((r = {}).UP = "UP"), (r.DOWN = "DOWN"), r),
    l =
        (((s = {}).GUILD = "GUILD"),
        (s.TEXT_CHANNEL = "TEXT_CHANNEL"),
        (s.GROUP_DM = "GROUP_DM"),
        (s.VOICE_CHANNEL = "VOICE_CHANNEL"),
        (s.USER = "USER"),
        (s.HEADER = "HEADER"),
        (s.APPLICATION = "APPLICATION"),
        (s.GAME_PROFILE = "GAME_PROFILE"),
        (s.SKU = "SKU"),
        (s.LINK = "LINK"),
        (s.IN_APP_NAVIGATION = "IN_APP_NAVIGATION"),
        (s.DM = "DM"),
        s),
    u =
        (((a = {}).USER = "@"),
        (a.TEXT_CHANNEL = "#"),
        (a.VOICE_CHANNEL = "!"),
        (a.GUILD = "*"),
        (a.GAME_PROFILE = "$"),
        a);
