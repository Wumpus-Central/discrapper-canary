"use strict";
n.d(t, { AT: () => s, X9: () => r, rD: () => a, vB: () => i });
class r {
    id;
    text;
    constructor(e) {
        (this.id = e), (this.text = e);
    }
}
var i = (function (e) {
        return (e.UP = "UP"), (e.DOWN = "DOWN"), e;
    })({}),
    a = (function (e) {
        return (
            (e.GUILD = "GUILD"),
            (e.TEXT_CHANNEL = "TEXT_CHANNEL"),
            (e.GROUP_DM = "GROUP_DM"),
            (e.VOICE_CHANNEL = "VOICE_CHANNEL"),
            (e.USER = "USER"),
            (e.HEADER = "HEADER"),
            (e.APPLICATION = "APPLICATION"),
            (e.SKU = "SKU"),
            (e.LINK = "LINK"),
            (e.IN_APP_NAVIGATION = "IN_APP_NAVIGATION"),
            (e.DM = "DM"),
            e
        );
    })({}),
    s = (function (e) {
        return (
            (e.USER = "@"), (e.TEXT_CHANNEL = "#"), (e.VOICE_CHANNEL = "!"), (e.GUILD = "*"), (e.APPLICATION = "$"), e
        );
    })({});
