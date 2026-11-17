var i,
    r,
    a,
    s,
    l,
    o,
    d,
    c = n(927813),
    u = n(537975),
    _ = n(652215),
    E = n(792996);
let A = c.A.Millis.WEEK;
var f = (((i = {}).UNREAD = "UNREAD"), (i.TODAY = "TODAY"), (i.YESTERDAY = "YESTERDAY"), (i.OLDER = "OLDER"), i),
    h = (((r = {}).ALL = "all"), (r.MENTIONS = "mentions"), (r.BOOKMARKS = "bookmarks"), r),
    I =
        (((a = {}).ALL_MESSAGES_CHANNEL = "ALL_MESSAGES_CHANNEL"),
        (a.MENTION = "MENTION"),
        (a.BOOKMARK = "BOOKMARK"),
        a);
let p = { UNREAD: E.t.sRUdB8, TODAY: E.t.F4jZQs, YESTERDAY: E.t.gnv4pE, OLDER: E.t.exrPZv };
var m = (((s = {}).UNLOADED = "unloaded"), (s.LOADED = "loaded"), (s.LOADED_UNREAD = "loadedUnread"), s),
    g =
        (((l = {}).AUTO_LOAD = "auto_load"),
        (l.ON_OPEN = "on_open"),
        (l.FILL_SCROLLER = "fill_scroller"),
        (l.USER_SCROLL = "user_scroll"),
        (l.UNKNOWN = "unknown"),
        l),
    T =
        (((o = {}).MENTION = "MENTION"),
        (o.REPLY = "REPLY"),
        (o.REACTION = "REACTION"),
        (o.ANNOUNCEMENT = "ANNOUNCEMENT"),
        (o.MESSAGE = "MESSAGE"),
        o),
    S = (((d = {}).ACK = "ACK"), (d.BOOKMARK = "BOOKMARK"), (d.SETTINGS = "SETTINGS"), d);
n.d(
    t,
    {},
    {
        Hy: "notifications_inbox_guild_id",
        Io: h,
        Th: T,
        Ur: f,
        V$: A,
        VA: g,
        Ve: m,
        XU: "Notifications Inbox",
        Yw: function (e) {
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
        },
        j5: "notifications-inbox",
        kR: S,
        v7: p,
        yL: I,
    },
);
