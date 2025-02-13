n.d(t, {
    RB: () => N,
    VH: () => v,
    Vi: () => S,
    Vu: () => T,
    q7: () => I
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
    m = n(962575),
    _ = n(334702),
    h = n(333722),
    p = n(549931),
    g = n(178561),
    f = n(39863),
    x = n(130312);
let C = {
        CHECKED: o,
        FRIENDS: d,
        SHARE_SCREEN: f,
        NEW_MESSAGE: p,
        GAME_RELATIONSHIP: m
    },
    v = {
        MISSED_MESSAGES: h,
        FRIEND_REQUEST_REMINDER: u,
        SCHEDULED_GUILD_EVENT: c,
        TOP_MESSAGES: _,
        NOTIFICATION_CENTER: s,
        UPDATE_PROFILE: x,
        FIND_FRIENDS: r,
        ADD_FRIEND: r,
        FIRST_MESSAGE: g
    },
    E = (e) => {
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
    I = (e) => {
        switch (e.type) {
            case 'lifecycle_item':
                return E(e);
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
    N = (e) => ('icHighlight' === e ? 'TOP_MESSAGES' : 'NOTIFICATION_CENTER'),
    S = (e) => {
        switch (e) {
            case l.DY.GO_LIVE_PUSH:
                return {
                    icon: C.SHARE_SCREEN,
                    color: i.Z.colors.BACKGROUND_ACCENT
                };
            case l.DY.FRIEND_REQUEST_ACCEPTED:
                return {
                    icon: C.CHECKED,
                    color: i.Z.colors.STATUS_POSITIVE_BACKGROUND
                };
            case l.DY.FRIEND_REQUEST_PENDING:
            case l.DY.FRIEND_SUGGESTION_CREATED:
                return {
                    icon: C.FRIENDS,
                    color: i.Z.colors.BACKGROUND_ACCENT
                };
            case l.DY.DM_FRIEND_NUDGE:
                return {
                    icon: C.NEW_MESSAGE,
                    color: i.Z.colors.BACKGROUND_ACCENT
                };
            case l.O7.INCOMING_FRIEND_REQUESTS:
            case l.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED:
                return {
                    icon: C.FRIENDS,
                    color: i.Z.colors.BACKGROUND_ACCENT
                };
            case l.O7.INCOMING_GAME_FRIEND_REQUESTS:
            case l.O7.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED:
                return {
                    icon: C.GAME_RELATIONSHIP,
                    color: i.Z.colors.BACKGROUND_ACCENT
                };
            default:
                return null;
        }
    },
    T = (e) => {
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
