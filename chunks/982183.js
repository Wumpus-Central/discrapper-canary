n.d(t, {
    $J: () => l,
    AQ: () => u,
    H_: () => f,
    JP: () => s,
    KZ: () => _,
    Lr: () => d,
    V5: () => p,
    Vv: () => m,
    X: () => E,
    a7: () => g,
    fL: () => h,
    ib: () => c,
    ln: () => b,
    r0: () => y,
});
var r = n(70956),
    i = n(411198),
    o = n(981631),
    a = n(388032);
let s = "Notifications Inbox",
    l = 88,
    c = r.Z.Millis.WEEK,
    u = 50,
    d = "notifications-inbox";
function f(e) {
    return (0, i.yS)({
        id: o.STv,
        name: "bookmarks" === e ? a.intl.string(a.t["2pAkDA"]) : a.intl.string(a.t.HcoRu7),
        description: "",
        icon: void 0,
        features: [],
    });
}
var _ = (function (e) {
        return (e.UNREAD = "UNREAD"), (e.TODAY = "TODAY"), (e.YESTERDAY = "YESTERDAY"), (e.OLDER = "OLDER"), e;
    })({}),
    p = (function (e) {
        return (e.ALL = "all"), (e.BOOKMARKS = "bookmarks"), e;
    })({}),
    h = (function (e) {
        return (e.ALL_MESSAGES_CHANNEL = "ALL_MESSAGES_CHANNEL"), (e.MENTION = "MENTION"), (e.BOOKMARK = "BOOKMARK"), e;
    })({});
let m = {
    UNREAD: a.t.sRUdBw,
    TODAY: a.t.F4jZQk,
    YESTERDAY: a.t.gnv4pK,
    OLDER: a.t.exrPZm,
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
