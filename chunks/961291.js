n.d(t, {
    Pm: () => v,
    rS: () => j,
    rr: () => A,
    sW: () => y,
    yI: () => O,
});
var r = n(827734),
    l = n(322387),
    i = n(286035),
    a = n(289876),
    s = n(31687),
    o = n(441955),
    c = n(271764),
    u = n(790018),
    d = n(338943),
    f = n(478772),
    p = n(846500),
    h = n(784297),
    b = n(51213),
    g = n(194066),
    m = n(211643);
let A = {
        MISSED_MESSAGES: h,
        FRIEND_REQUEST_REMINDER: d,
        SCHEDULED_GUILD_EVENT: c,
        TOP_MESSAGES: p,
        NOTIFICATION_CENTER: s,
        UPDATE_PROFILE: n(566213),
        FIND_FRIENDS: a,
        ADD_FRIEND: a,
        FIRST_MESSAGE: g,
    },
    y = (e) => {
        switch (e.type) {
            case "lifecycle_item":
                switch (e.item_enum) {
                    case l.r_.ADD_FRIEND:
                        return "ADD_FRIEND";
                    case l.r_.FIND_FRIENDS:
                        return "FIND_FRIENDS";
                    case l.r_.FIRST_MESSAGE:
                        return "FIRST_MESSAGE";
                    case l.r_.UPDATE_PROFILE:
                        return "UPDATE_PROFILE";
                    default:
                        return "NOTIFICATION_CENTER";
                }
            case "missed_messages":
                return "MISSED_MESSAGES";
            case "friend_request_reminder":
                return "FRIEND_REQUEST_REMINDER";
            case "scheduled_guild_event_started":
                return "SCHEDULED_GUILD_EVENT";
            case "top_messages":
                return "TOP_MESSAGES";
            default:
                return "NOTIFICATION_CENTER";
        }
    },
    O = (e) => ("icHighlight" === e ? "TOP_MESSAGES" : "NOTIFICATION_CENTER"),
    j = (e) => {
        switch (e) {
            case l.hW.GO_LIVE_PUSH:
                return {
                    icon: m,
                    color: r.A.colors.BACKGROUND_MOD_STRONG,
                };
            case l.hW.FRIEND_REQUEST_ACCEPTED:
            case l.hW.GAME_FRIEND_REQUEST_ACCEPTED:
                return {
                    icon: o,
                    color: r.A.colors.STATUS_POSITIVE_BACKGROUND,
                };
            case l.hW.FRIEND_REQUEST_PENDING:
            case l.hW.FRIEND_SUGGESTION_CREATED:
                return {
                    icon: u,
                    color: r.A.colors.BACKGROUND_MOD_STRONG,
                };
            case l.hW.DM_FRIEND_NUDGE:
                return {
                    icon: b,
                    color: r.A.colors.BACKGROUND_MOD_STRONG,
                };
            case l.Uo.INCOMING_FRIEND_REQUESTS:
            case l.Uo.INCOMING_FRIEND_REQUESTS_ACCEPTED:
                return {
                    icon: u,
                    color: r.A.colors.BACKGROUND_MOD_STRONG,
                };
            case l.Uo.INCOMING_GAME_FRIEND_REQUESTS:
            case l.Uo.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED:
                return {
                    icon: f,
                    color: r.A.colors.BACKGROUND_MOD_STRONG,
                };
            default:
                return null;
        }
    },
    v = (e) => {
        switch (e.item_enum) {
            case l.r_.UPDATE_PROFILE:
                return i.Zp;
            case l.r_.ADD_FRIEND:
            case l.r_.FIND_FRIENDS:
                return i.k;
            case l.r_.FIRST_MESSAGE:
                return i.l0;
            default:
                return r.A.unsafe_rawColors.BRAND_500.css;
        }
    };
