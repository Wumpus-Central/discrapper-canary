n.d(t, {
    RB: () => j,
    VH: () => y,
    Vi: () => E,
    Vu: () => x,
    q7: () => C
});
var r = n(692547),
    i = n(497089),
    l = n(650473),
    o = n(389765),
    a = n(137492),
    s = n(387661),
    c = n(659953),
    u = n(319707),
    d = n(584914),
    h = n(962575),
    p = n(334702),
    f = n(333722),
    g = n(549931),
    m = n(178561),
    b = n(39863),
    _ = n(130312);
let O = {
        CHECKED: s,
        FRIENDS: u,
        SHARE_SCREEN: b,
        NEW_MESSAGE: g,
        GAME_RELATIONSHIP: h
    },
    y = {
        MISSED_MESSAGES: f,
        FRIEND_REQUEST_REMINDER: d,
        SCHEDULED_GUILD_EVENT: c,
        TOP_MESSAGES: p,
        NOTIFICATION_CENTER: a,
        UPDATE_PROFILE: _,
        FIND_FRIENDS: o,
        ADD_FRIEND: o,
        FIRST_MESSAGE: m
    },
    v = (e) => {
        switch (e.item_enum) {
            case i.AM.ADD_FRIEND:
                return 'ADD_FRIEND';
            case i.AM.FIND_FRIENDS:
                return 'FIND_FRIENDS';
            case i.AM.FIRST_MESSAGE:
                return 'FIRST_MESSAGE';
            case i.AM.UPDATE_PROFILE:
                return 'UPDATE_PROFILE';
            default:
                return 'NOTIFICATION_CENTER';
        }
    },
    C = (e) => {
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
    j = (e) => ('icHighlight' === e ? 'TOP_MESSAGES' : 'NOTIFICATION_CENTER'),
    E = (e) => {
        switch (e) {
            case i.DY.GO_LIVE_PUSH:
                return {
                    icon: O.SHARE_SCREEN,
                    color: r.Z.colors.BACKGROUND_ACCENT
                };
            case i.DY.FRIEND_REQUEST_ACCEPTED:
            case i.DY.GAME_FRIEND_REQUEST_ACCEPTED:
                return {
                    icon: O.CHECKED,
                    color: r.Z.colors.STATUS_POSITIVE_BACKGROUND
                };
            case i.DY.FRIEND_REQUEST_PENDING:
            case i.DY.FRIEND_SUGGESTION_CREATED:
                return {
                    icon: O.FRIENDS,
                    color: r.Z.colors.BACKGROUND_ACCENT
                };
            case i.DY.DM_FRIEND_NUDGE:
                return {
                    icon: O.NEW_MESSAGE,
                    color: r.Z.colors.BACKGROUND_ACCENT
                };
            case i.O7.INCOMING_FRIEND_REQUESTS:
            case i.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED:
                return {
                    icon: O.FRIENDS,
                    color: r.Z.colors.BACKGROUND_ACCENT
                };
            case i.O7.INCOMING_GAME_FRIEND_REQUESTS:
            case i.O7.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED:
                return {
                    icon: O.GAME_RELATIONSHIP,
                    color: r.Z.colors.BACKGROUND_ACCENT
                };
            default:
                return null;
        }
    },
    x = (e) => {
        switch (e.item_enum) {
            case i.AM.UPDATE_PROFILE:
                return l.Y9;
            case i.AM.ADD_FRIEND:
            case i.AM.FIND_FRIENDS:
                return l.AZ;
            case i.AM.FIRST_MESSAGE:
                return l.bj;
            default:
                return r.Z.unsafe_rawColors.BRAND_500.css;
        }
    };
