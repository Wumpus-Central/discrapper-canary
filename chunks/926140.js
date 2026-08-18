"use strict";
n.d(t, { AT: () => d, X9: () => i, rD: () => o, vB: () => l });
class i {
    id;
    text;
    constructor(e) {
        (this.id = e), (this.text = e);
    }
}
var r,
    a,
    s,
    l = (((r = {}).UP = "UP"), (r.DOWN = "DOWN"), r),
    o =
        (((a = {}).GUILD = "GUILD"),
        (a.TEXT_CHANNEL = "TEXT_CHANNEL"),
        (a.GROUP_DM = "GROUP_DM"),
        (a.VOICE_CHANNEL = "VOICE_CHANNEL"),
        (a.USER = "USER"),
        (a.USER_GLOBAL = "USER_GLOBAL"),
        (a.HEADER = "HEADER"),
        (a.APPLICATION = "APPLICATION"),
        (a.GAME_PROFILE = "GAME_PROFILE"),
        (a.SKU = "SKU"),
        (a.LINK = "LINK"),
        (a.IN_APP_NAVIGATION = "IN_APP_NAVIGATION"),
        (a.DM = "DM"),
        a),
    d =
        (((s = {}).USER = "@"),
        (s.TEXT_CHANNEL = "#"),
        (s.VOICE_CHANNEL = "!"),
        (s.GUILD = "*"),
        (s.GAME_PROFILE = "$"),
        s);
