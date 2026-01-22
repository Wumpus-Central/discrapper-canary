n.d(t, {
    EM: () => u,
    Io: () => _,
    Sp: () => l,
    Th: () => b,
    Ur: () => p,
    V$: () => c,
    VA: () => E,
    Ve: () => g,
    XU: () => o,
    Yw: () => f,
    j5: () => d,
    kR: () => y,
    v7: () => m,
    yL: () => h,
});
var r = n(927813),
    i = n(860689),
    a = n(652215),
    s = n(985018);
let o = "Notifications Inbox",
    l = 88,
    c = r.A.Millis.WEEK,
    u = 50,
    d = "notifications-inbox";

function f(e) {
    return (0, i.yF)({
        id: a.gNP,
        name: "bookmarks" === e ? s.intl.string(s.t["2pAkDA"]) : s.intl.string(s.t.HcoRu0),
        description: "",
        icon: void 0,
        features: [],
    });
}
var p = (function (e) {
        return (e.UNREAD = "UNREAD"), (e.TODAY = "TODAY"), (e.YESTERDAY = "YESTERDAY"), (e.OLDER = "OLDER"), e;
    })({}),
    _ = (function (e) {
        return (e.ALL = "all"), (e.BOOKMARKS = "bookmarks"), e;
    })({}),
    h = (function (e) {
        return (e.ALL_MESSAGES_CHANNEL = "ALL_MESSAGES_CHANNEL"), (e.MENTION = "MENTION"), (e.BOOKMARK = "BOOKMARK"), e;
    })({});
let m = {
    UNREAD: s.t.sRUdB8,
    TODAY: s.t.F4jZQs,
    YESTERDAY: s.t.gnv4pE,
    OLDER: s.t.exrPZv,
};
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
    b = (function (e) {
        return (
            (e.MENTION = "MENTION"),
            (e.REPLY = "REPLY"),
            (e.REACTION = "REACTION"),
            (e.ANNOUNCEMENT = "ANNOUNCEMENT"),
            (e.MESSAGE = "MESSAGE"),
            e
        );
    })({}),
    y = (function (e) {
        return (e.ACK = "ACK"), (e.BOOKMARK = "BOOKMARK"), (e.SETTINGS = "SETTINGS"), e;
    })({});
