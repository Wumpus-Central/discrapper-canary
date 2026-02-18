"use strict";
n.d(t, {
    EM: () => d,
    Hy: () => l,
    Io: () => h,
    Sp: () => u,
    Th: () => I,
    Ur: () => p,
    V$: () => c,
    VA: () => A,
    Ve: () => g,
    XU: () => o,
    Yw: () => f,
    j5: () => _,
    kR: () => T,
    v7: () => E,
    yL: () => m,
});
var r = n(927813),
    i = n(860689),
    s = n(652215),
    a = n(985018);
let o = "Notifications Inbox",
    l = "notifications_inbox_guild_id",
    u = 88,
    c = r.A.Millis.WEEK,
    d = 50,
    _ = "notifications-inbox";
function f(e) {
    return (0, i.yF)({
        id: s.gNP,
        name: "bookmarks" === e ? a.intl.string(a.t["2pAkDA"]) : a.intl.string(a.t.HcoRu0),
        description: "",
        icon: void 0,
        features: [],
    });
}
var p = (function (e) {
        return (e.UNREAD = "UNREAD"), (e.TODAY = "TODAY"), (e.YESTERDAY = "YESTERDAY"), (e.OLDER = "OLDER"), e;
    })({}),
    h = (function (e) {
        return (e.ALL = "all"), (e.BOOKMARKS = "bookmarks"), e;
    })({}),
    m = (function (e) {
        return (e.ALL_MESSAGES_CHANNEL = "ALL_MESSAGES_CHANNEL"), (e.MENTION = "MENTION"), (e.BOOKMARK = "BOOKMARK"), e;
    })({});
let E = { UNREAD: a.t.sRUdB8, TODAY: a.t.F4jZQs, YESTERDAY: a.t.gnv4pE, OLDER: a.t.exrPZv };
var g = (function (e) {
        return (e.UNLOADED = "unloaded"), (e.LOADED = "loaded"), (e.LOADED_UNREAD = "loadedUnread"), e;
    })({}),
    A = (function (e) {
        return (
            (e.AUTO_LOAD = "auto_load"),
            (e.ON_OPEN = "on_open"),
            (e.FILL_SCROLLER = "fill_scroller"),
            (e.USER_SCROLL = "user_scroll"),
            (e.UNKNOWN = "unknown"),
            e
        );
    })({}),
    I = (function (e) {
        return (
            (e.MENTION = "MENTION"),
            (e.REPLY = "REPLY"),
            (e.REACTION = "REACTION"),
            (e.ANNOUNCEMENT = "ANNOUNCEMENT"),
            (e.MESSAGE = "MESSAGE"),
            e
        );
    })({}),
    T = (function (e) {
        return (e.ACK = "ACK"), (e.BOOKMARK = "BOOKMARK"), (e.SETTINGS = "SETTINGS"), e;
    })({});
