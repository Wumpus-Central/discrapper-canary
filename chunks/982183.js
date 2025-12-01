n.d(t, {
    $J: () => l,
    AQ: () => u,
    H_: () => f,
    JP: () => s,
    KZ: () => p,
    Lr: () => d,
    V5: () => _,
    Vv: () => h,
    X: () => E,
    a7: () => g,
    fL: () => m,
    ib: () => c,
    ln: () => b,
    r0: () => y,
});
var r = n(70956),
    i = n(411198),
    a = n(981631),
    o = n(388032);
let s = "Notifications Inbox",
    l = 88,
    c = r.Z.Millis.WEEK,
    u = 50,
    d = "notifications-inbox";
function f(e) {
    return (0, i.yS)({
        id: a.STv,
        name: "bookmarks" === e ? o.intl.string(o.t["2pAkDA"]) : o.intl.string(o.t.HcoRu0),
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
    m = (function (e) {
        return (e.ALL_MESSAGES_CHANNEL = "ALL_MESSAGES_CHANNEL"), (e.MENTION = "MENTION"), (e.BOOKMARK = "BOOKMARK"), e;
    })({});
let h = {
    UNREAD: o.t.sRUdB8,
    TODAY: o.t.F4jZQs,
    YESTERDAY: o.t.gnv4pE,
    OLDER: o.t.exrPZv,
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
