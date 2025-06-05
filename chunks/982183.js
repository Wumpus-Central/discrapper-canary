e.d(n, {
    $J: () => o,
    F7: () => E,
    KZ: () => g,
    V5: () => c,
    Vv: () => O,
    by: () => D,
    fL: () => T,
    ib: () => p,
    xM: () => I,
    yG: () => u
});
var i,
    l,
    r,
    d,
    a = e(601964),
    s = e(70956),
    _ = e(388032);
let u = 'notifications_inbox_guild_id',
    o = 88,
    p = s.Z.Millis.WEEK,
    E = new a.ZP({
        id: u,
        name: _.intl.string(_.t.HcoRu7),
        description: ''
    });
var g = 12633 == e.j ? (((i = {}).UNREAD = 'UNREAD'), (i.TODAY = 'TODAY'), (i.YESTERDAY = 'YESTERDAY'), (i.OLDER = 'OLDER'), i) : null,
    c = 12633 == e.j ? (((l = {}).ALL = 'all'), (l.ANNOUNCEMENTS = 'announcements'), (l.MENTIONS = 'mentions'), (l.BOOKMARKS = 'bookmarks'), l) : null,
    I = 12633 == e.j ? (((r = {}).READ = 'READ'), (r.UNREAD = 'UNREAD'), r) : null,
    T = 12633 == e.j ? (((d = {}).ALL_MESSAGES_CHANNEL = 'ALL_MESSAGES_CHANNEL'), (d.MENTION = 'MENTION'), (d.BOOKMARK = 'BOOKMARK'), d) : null;
let O = {
        UNREAD: _.t['f1tf/v'],
        TODAY: _.t.F4jZQk,
        YESTERDAY: _.t.gnv4pK,
        OLDER: _.t.exrPZm
    },
    D = {
        all: _.intl.string(_.t.nsv3q6),
        bookmarks: _.intl.string(_.t['+rlGYW']),
        announcements: _.intl.string(_.t['2qyUOz']),
        mentions: _.intl.string(_.t['GRZF9/'])
    };
