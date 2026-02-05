"use strict";
n.d(t, {
    EM: () => c,
    Io: () => p,
    Sp: () => l,
    Th: () => A,
    Ur: () => f,
    V$: () => u,
    VA: () => E,
    Ve: () => g,
    XU: () => o,
    Yw: () => _,
    j5: () => d,
    kR: () => I,
    v7: () => m,
    yL: () => h,
});
var r = n(927813),
    i = n(860689),
    a = n(652215),
    s = n(985018);
let o = "Notifications Inbox",
    l = 88,
    u = r.A.Millis.WEEK,
    c = 50,
    d = "notifications-inbox";
function _(e) {
    return (0, i.yF)({
        id: a.gNP,
        name: "bookmarks" === e ? s.intl.string(s.t["2pAkDA"]) : s.intl.string(s.t.HcoRu0),
        description: "",
        icon: void 0,
        features: [],
    });
}
var f = (function (e) {
        return (e.UNREAD = "UNREAD"), (e.TODAY = "TODAY"), (e.YESTERDAY = "YESTERDAY"), (e.OLDER = "OLDER"), e;
    })({}),
    p = (function (e) {
        return (e.ALL = "all"), (e.BOOKMARKS = "bookmarks"), e;
    })({}),
    h = (function (e) {
        return (e.ALL_MESSAGES_CHANNEL = "ALL_MESSAGES_CHANNEL"), (e.MENTION = "MENTION"), (e.BOOKMARK = "BOOKMARK"), e;
    })({});
let m = { UNREAD: s.t.sRUdB8, TODAY: s.t.F4jZQs, YESTERDAY: s.t.gnv4pE, OLDER: s.t.exrPZv };
var g = (function (e) {
        return (e.UNLOADED = "unloaded"), (e.LOADED = "loaded"), (e.LOADED_UNREAD = "loadedUnread"), e;
    })({}),
    E = (function (e) {
        return (
            (e.AUTO_LOAD = "auto_load"),
            (e.ON_OPEN = "on_open"),
            (e.FILL_SCROLLER = "fill_scroller"),
            (e.USER_SCROLL = "user_scroll"),
            (e.UNKNOWN = "unknown"),
            e
        );
    })({}),
    A = (function (e) {
        return (
            (e.MENTION = "MENTION"),
            (e.REPLY = "REPLY"),
            (e.REACTION = "REACTION"),
            (e.ANNOUNCEMENT = "ANNOUNCEMENT"),
            (e.MESSAGE = "MESSAGE"),
            e
        );
    })({}),
    I = (function (e) {
        return (e.ACK = "ACK"), (e.BOOKMARK = "BOOKMARK"), (e.SETTINGS = "SETTINGS"), e;
    })({});
