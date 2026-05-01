"use strict";
n.d(t, {
    EM: () => g,
    Hy: () => p,
    Io: () => S,
    Sp: () => E,
    Th: () => O,
    Ur: () => T,
    V$: () => m,
    VA: () => v,
    Ve: () => C,
    XU: () => h,
    Yw: () => I,
    j5: () => A,
    kR: () => R,
    v7: () => y,
    yL: () => N,
});
var i,
    r,
    s,
    a,
    o,
    l,
    u,
    c = n(927813),
    d = n(860689),
    _ = n(652215),
    f = n(375708);
let h = "Notifications Inbox",
    p = "notifications_inbox_guild_id",
    E = 88,
    m = c.A.Millis.WEEK,
    g = 50,
    A = "notifications-inbox";
function I(e) {
    let t;
    return (
        (t =
            "bookmarks" === e
                ? f.intl.string(f.t["2pAkDA"])
                : "mentions" === e
                  ? f.intl.string(f.t.jbV6MM)
                  : f.intl.string(f.t.HcoRu0)),
        (0, d.yF)({ id: _.gNP, name: t, description: "", icon: void 0, features: [] })
    );
}
var T = (((i = {}).UNREAD = "UNREAD"), (i.TODAY = "TODAY"), (i.YESTERDAY = "YESTERDAY"), (i.OLDER = "OLDER"), i),
    S = (((r = {}).ALL = "all"), (r.MENTIONS = "mentions"), (r.BOOKMARKS = "bookmarks"), r),
    N =
        (((s = {}).ALL_MESSAGES_CHANNEL = "ALL_MESSAGES_CHANNEL"),
        (s.MENTION = "MENTION"),
        (s.BOOKMARK = "BOOKMARK"),
        s);
let y = { UNREAD: f.t.sRUdB8, TODAY: f.t.F4jZQs, YESTERDAY: f.t.gnv4pE, OLDER: f.t.exrPZv };
var C = (((a = {}).UNLOADED = "unloaded"), (a.LOADED = "loaded"), (a.LOADED_UNREAD = "loadedUnread"), a),
    v =
        (((o = {}).AUTO_LOAD = "auto_load"),
        (o.ON_OPEN = "on_open"),
        (o.FILL_SCROLLER = "fill_scroller"),
        (o.USER_SCROLL = "user_scroll"),
        (o.UNKNOWN = "unknown"),
        o),
    O =
        (((l = {}).MENTION = "MENTION"),
        (l.REPLY = "REPLY"),
        (l.REACTION = "REACTION"),
        (l.ANNOUNCEMENT = "ANNOUNCEMENT"),
        (l.MESSAGE = "MESSAGE"),
        l),
    R = (((u = {}).ACK = "ACK"), (u.BOOKMARK = "BOOKMARK"), (u.SETTINGS = "SETTINGS"), u);
