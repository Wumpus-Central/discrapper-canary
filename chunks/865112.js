n.d(t, {
    RB: () => O,
    VH: () => y,
    Vi: () => N,
    Vu: () => j,
    q7: () => v
});
var r = n(692547),
    i = n(497089),
    a = n(650473),
    l = n(389765),
    o = n(137492),
    s = n(387661),
    c = n(659953),
    u = n(319707),
    d = n(584914),
    p = n(962575),
    m = n(334702),
    f = n(333722),
    h = n(549931),
    g = n(178561),
    _ = n(39863),
    b = n(130312);
let x = {
        CHECKED: s,
        FRIENDS: u,
        SHARE_SCREEN: _,
        NEW_MESSAGE: h,
        GAME_RELATIONSHIP: p
    },
    y = {
        MISSED_MESSAGES: f,
        FRIEND_REQUEST_REMINDER: d,
        SCHEDULED_GUILD_EVENT: c,
        TOP_MESSAGES: m,
        NOTIFICATION_CENTER: o,
        UPDATE_PROFILE: b,
        FIND_FRIENDS: l,
        ADD_FRIEND: l,
        FIRST_MESSAGE: g
    },
    E = (e) => {
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
    v = (e) => {
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
    O = (e) => ('icHighlight' === e ? 'TOP_MESSAGES' : 'NOTIFICATION_CENTER'),
    N = (e) => {
        switch (e) {
            case i.DY.GO_LIVE_PUSH:
                return {
                    icon: x.SHARE_SCREEN,
                    color: r.Z.colors.BACKGROUND_ACCENT
                };
            case i.DY.FRIEND_REQUEST_ACCEPTED:
            case i.DY.GAME_FRIEND_REQUEST_ACCEPTED:
                return {
                    icon: x.CHECKED,
                    color: r.Z.colors.STATUS_POSITIVE_BACKGROUND
                };
            case i.DY.FRIEND_REQUEST_PENDING:
            case i.DY.FRIEND_SUGGESTION_CREATED:
                return {
                    icon: x.FRIENDS,
                    color: r.Z.colors.BACKGROUND_ACCENT
                };
            case i.DY.DM_FRIEND_NUDGE:
                return {
                    icon: x.NEW_MESSAGE,
                    color: r.Z.colors.BACKGROUND_ACCENT
                };
            case i.O7.INCOMING_FRIEND_REQUESTS:
            case i.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED:
                return {
                    icon: x.FRIENDS,
                    color: r.Z.colors.BACKGROUND_ACCENT
                };
            case i.O7.INCOMING_GAME_FRIEND_REQUESTS:
            case i.O7.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED:
                return {
                    icon: x.GAME_RELATIONSHIP,
                    color: r.Z.colors.BACKGROUND_ACCENT
                };
            default:
                return null;
        }
    },
    j = (e) => {
        switch (e.item_enum) {
            case i.AM.UPDATE_PROFILE:
                return a.Y9;
            case i.AM.ADD_FRIEND:
            case i.AM.FIND_FRIENDS:
                return a.AZ;
            case i.AM.FIRST_MESSAGE:
                return a.bj;
            default:
                return r.Z.unsafe_rawColors.BRAND_500.css;
        }
    };
