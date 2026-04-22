"use strict";
n.d(t, {
    EM: () => g,
    Hy: () => h,
    Io: () => S,
    Sp: () => p,
    Th: () => v,
    Ur: () => T,
    V$: () => m,
    VA: () => R,
    Ve: () => O,
    XU: () => E,
    Yw: () => I,
    j5: () => A,
    kR: () => C,
    v7: () => N,
    yL: () => y,
});
var r,
    i,
    s,
    a,
    o,
    l,
    u,
    d = n(927813),
    c = n(860689),
    _ = n(652215),
    f = n(985018);
let E = "Notifications Inbox",
    h = "notifications_inbox_guild_id",
    p = 88,
    m = d.A.Millis.WEEK,
    g = 50,
    A = "notifications-inbox";
function I(e) {
    return (0, c.yF)({
        id: _.gNP,
        name: "bookmarks" === e ? f.intl.string(f.t["2pAkDA"]) : f.intl.string(f.t.HcoRu0),
        description: "",
        icon: void 0,
        features: [],
    });
}
var T = (((r = {}).UNREAD = "UNREAD"), (r.TODAY = "TODAY"), (r.YESTERDAY = "YESTERDAY"), (r.OLDER = "OLDER"), r),
    S = (((i = {}).ALL = "all"), (i.BOOKMARKS = "bookmarks"), i),
    y =
        (((s = {}).ALL_MESSAGES_CHANNEL = "ALL_MESSAGES_CHANNEL"),
        (s.MENTION = "MENTION"),
        (s.BOOKMARK = "BOOKMARK"),
        s);
let N = { UNREAD: f.t.sRUdB8, TODAY: f.t.F4jZQs, YESTERDAY: f.t.gnv4pE, OLDER: f.t.exrPZv };
var O = (((a = {}).UNLOADED = "unloaded"), (a.LOADED = "loaded"), (a.LOADED_UNREAD = "loadedUnread"), a),
    R =
        (((o = {}).AUTO_LOAD = "auto_load"),
        (o.ON_OPEN = "on_open"),
        (o.FILL_SCROLLER = "fill_scroller"),
        (o.USER_SCROLL = "user_scroll"),
        (o.UNKNOWN = "unknown"),
        o),
    v =
        (((l = {}).MENTION = "MENTION"),
        (l.REPLY = "REPLY"),
        (l.REACTION = "REACTION"),
        (l.ANNOUNCEMENT = "ANNOUNCEMENT"),
        (l.MESSAGE = "MESSAGE"),
        l),
    C = (((u = {}).ACK = "ACK"), (u.BOOKMARK = "BOOKMARK"), (u.SETTINGS = "SETTINGS"), u);
