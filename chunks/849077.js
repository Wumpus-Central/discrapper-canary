n.d(t, {
    EM: () => S,
    Hy: () => I,
    Io: () => m,
    Sp: () => T,
    Th: () => L,
    Ur: () => p,
    V$: () => h,
    VA: () => g,
    Ve: () => R,
    XU: () => A,
    Yw: () => f,
    j5: () => N,
    kR: () => D,
    v7: () => C,
    yL: () => O,
});
var i,
    a,
    r,
    s,
    l,
    o,
    d,
    c = n(927813),
    _ = n(860689),
    E = n(652215),
    u = n(985018);
let A = "Notifications Inbox",
    I = "notifications_inbox_guild_id",
    T = 88,
    h = c.A.Millis.WEEK,
    S = 50,
    N = "notifications-inbox";
function f(e) {
    return (0, _.yF)({
        id: E.gNP,
        name: "bookmarks" === e ? u.intl.string(u.t["2pAkDA"]) : u.intl.string(u.t.HcoRu0),
        description: "",
        icon: void 0,
        features: [],
    });
}
var p = (((i = {}).UNREAD = "UNREAD"), (i.TODAY = "TODAY"), (i.YESTERDAY = "YESTERDAY"), (i.OLDER = "OLDER"), i),
    m = (((a = {}).ALL = "all"), (a.BOOKMARKS = "bookmarks"), a),
    O =
        (((r = {}).ALL_MESSAGES_CHANNEL = "ALL_MESSAGES_CHANNEL"),
        (r.MENTION = "MENTION"),
        (r.BOOKMARK = "BOOKMARK"),
        r);
let C = { UNREAD: u.t.sRUdB8, TODAY: u.t.F4jZQs, YESTERDAY: u.t.gnv4pE, OLDER: u.t.exrPZv };
var R = (((s = {}).UNLOADED = "unloaded"), (s.LOADED = "loaded"), (s.LOADED_UNREAD = "loadedUnread"), s),
    g =
        (((l = {}).AUTO_LOAD = "auto_load"),
        (l.ON_OPEN = "on_open"),
        (l.FILL_SCROLLER = "fill_scroller"),
        (l.USER_SCROLL = "user_scroll"),
        (l.UNKNOWN = "unknown"),
        l),
    L =
        (((o = {}).MENTION = "MENTION"),
        (o.REPLY = "REPLY"),
        (o.REACTION = "REACTION"),
        (o.ANNOUNCEMENT = "ANNOUNCEMENT"),
        (o.MESSAGE = "MESSAGE"),
        o),
    D = (((d = {}).ACK = "ACK"), (d.BOOKMARK = "BOOKMARK"), (d.SETTINGS = "SETTINGS"), d);
