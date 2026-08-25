"use strict";
n.d(t, {
    EM: () => p,
    Hy: () => h,
    Io: () => S,
    Sp: () => I,
    Th: () => L,
    Ur: () => g,
    V$: () => f,
    VA: () => O,
    Ve: () => R,
    XU: () => A,
    Yw: () => m,
    j5: () => T,
    kR: () => y,
    v7: () => C,
    yL: () => N,
});
var i,
    r,
    a,
    s,
    l,
    o,
    d,
    c = n(927813),
    u = n(149790),
    _ = n(652215),
    E = n(375708);
let A = "Notifications Inbox",
    h = "notifications_inbox_guild_id",
    I = 88,
    f = c.A.Millis.WEEK,
    p = 50,
    T = "notifications-inbox";
function m(e) {
    let t;
    return (
        (t =
            "bookmarks" === e
                ? E.intl.string(E.t["2pAkDA"])
                : "mentions" === e
                  ? E.intl.string(E.t.jbV6MM)
                  : E.intl.string(E.t.HcoRu0)),
        (0, u.yF)({ id: _.gNP, name: t, description: "", icon: void 0, features: [] })
    );
}
var g = (((i = {}).UNREAD = "UNREAD"), (i.TODAY = "TODAY"), (i.YESTERDAY = "YESTERDAY"), (i.OLDER = "OLDER"), i),
    S = (((r = {}).ALL = "all"), (r.MENTIONS = "mentions"), (r.BOOKMARKS = "bookmarks"), r),
    N =
        (((a = {}).ALL_MESSAGES_CHANNEL = "ALL_MESSAGES_CHANNEL"),
        (a.MENTION = "MENTION"),
        (a.BOOKMARK = "BOOKMARK"),
        a);
let C = { UNREAD: E.t.sRUdB8, TODAY: E.t.F4jZQs, YESTERDAY: E.t.gnv4pE, OLDER: E.t.exrPZv };
var R = (((s = {}).UNLOADED = "unloaded"), (s.LOADED = "loaded"), (s.LOADED_UNREAD = "loadedUnread"), s),
    O =
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
    y = (((d = {}).ACK = "ACK"), (d.BOOKMARK = "BOOKMARK"), (d.SETTINGS = "SETTINGS"), d);
