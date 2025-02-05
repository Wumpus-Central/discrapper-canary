n.d(t, {
    RB: () => I,
    VH: () => C,
    Vi: () => N,
    Vu: () => S,
    q7: () => E
});
var i = n(692547),
    l = n(497089),
    a = n(650473),
    r = n(389765),
    s = n(137492),
    o = n(387661),
    c = n(659953),
    d = n(319707),
    u = n(584914),
    m = n(334702),
    _ = n(333722),
    h = n(549931),
    p = n(178561),
    g = n(39863),
    f = n(130312);
let x = {
        CHECKED: o,
        FRIENDS: d,
        SHARE_SCREEN: g,
        NEW_MESSAGE: h
    },
    C = {
        MISSED_MESSAGES: _,
        FRIEND_REQUEST_REMINDER: u,
        SCHEDULED_GUILD_EVENT: c,
        TOP_MESSAGES: m,
        NOTIFICATION_CENTER: s,
        UPDATE_PROFILE: f,
        FIND_FRIENDS: r,
        ADD_FRIEND: r,
        FIRST_MESSAGE: p
    },
    v = (e) => {
        switch (e.item_enum) {
            case l.AM.ADD_FRIEND:
                return 'ADD_FRIEND';
            case l.AM.FIND_FRIENDS:
                return 'FIND_FRIENDS';
            case l.AM.FIRST_MESSAGE:
                return 'FIRST_MESSAGE';
            case l.AM.UPDATE_PROFILE:
                return 'UPDATE_PROFILE';
            default:
                return 'NOTIFICATION_CENTER';
        }
    },
    E = (e) => {
        switch (e.type) {
            case 'lifecycle_item':
                return v(e);
            case 'missed_messages':
                return 'MISSED_MESSAGES';
            case 'friend_request_reminder':
                return 'FRIEND_REQUEST_REMINDER';
            case 'scheduled_guild_event_started':
                return 'SCHEDULED_GUILD_EVENT';
            case 'top_messages':
                return 'TOP_MESSAGES';
            default:
                return 'NOTIFICATION_CENTER';
        }
    },
    I = (e) => ('icHighlight' === e ? 'TOP_MESSAGES' : 'NOTIFICATION_CENTER'),
    N = (e) => {
        switch (e) {
            case l.DY.GO_LIVE_PUSH:
                return {
                    icon: x.SHARE_SCREEN,
                    color: i.Z.colors.BACKGROUND_ACCENT
                };
            case l.DY.FRIEND_REQUEST_ACCEPTED:
                return {
                    icon: x.CHECKED,
                    color: i.Z.colors.STATUS_POSITIVE_BACKGROUND
                };
            case l.DY.FRIEND_REQUEST_PENDING:
            case l.DY.FRIEND_SUGGESTION_CREATED:
                return {
                    icon: x.FRIENDS,
                    color: i.Z.colors.BACKGROUND_ACCENT
                };
            case l.DY.DM_FRIEND_NUDGE:
                return {
                    icon: x.NEW_MESSAGE,
                    color: i.Z.colors.BACKGROUND_ACCENT
                };
            case l.O7.INCOMING_FRIEND_REQUESTS:
            case l.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED:
                return {
                    icon: x.FRIENDS,
                    color: i.Z.colors.BACKGROUND_ACCENT
                };
            default:
                return null;
        }
    },
    S = (e) => {
        switch (e.item_enum) {
            case l.AM.UPDATE_PROFILE:
                return a.Y9;
            case l.AM.ADD_FRIEND:
            case l.AM.FIND_FRIENDS:
                return a.AZ;
            case l.AM.FIRST_MESSAGE:
                return a.bj;
            default:
                return i.Z.unsafe_rawColors.BRAND_500.css;
        }
    };
