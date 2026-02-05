n.d(t, { Pm: () => I, rS: () => C, rr: () => x, sW: () => f, yI: () => E });
var i = n(827734),
    l = n(322387),
    s = n(286035),
    a = n(289876),
    r = n(31687),
    o = n(441955),
    d = n(271764),
    c = n(790018),
    u = n(338943),
    h = n(478772),
    A = n(846500),
    g = n(784297),
    m = n(51213),
    p = n(194066),
    _ = n(211643);
let x = {
        MISSED_MESSAGES: g,
        FRIEND_REQUEST_REMINDER: u,
        SCHEDULED_GUILD_EVENT: d,
        TOP_MESSAGES: A,
        NOTIFICATION_CENTER: r,
        UPDATE_PROFILE: n(566213),
        FIND_FRIENDS: a,
        ADD_FRIEND: a,
        FIRST_MESSAGE: p,
    },
    f = (e) => {
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
    E = (e) => ("icHighlight" === e ? "TOP_MESSAGES" : "NOTIFICATION_CENTER"),
    C = (e) => {
        switch (e) {
            case l.hW.GO_LIVE_PUSH:
                return { icon: _, color: i.A.colors.BACKGROUND_MOD_STRONG };
            case l.hW.FRIEND_REQUEST_ACCEPTED:
            case l.hW.GAME_FRIEND_REQUEST_ACCEPTED:
                return { icon: o, color: i.A.colors.STATUS_POSITIVE_BACKGROUND };
            case l.hW.FRIEND_REQUEST_PENDING:
            case l.hW.FRIEND_SUGGESTION_CREATED:
                return { icon: c, color: i.A.colors.BACKGROUND_MOD_STRONG };
            case l.hW.DM_FRIEND_NUDGE:
                return { icon: m, color: i.A.colors.BACKGROUND_MOD_STRONG };
            case l.Uo.INCOMING_FRIEND_REQUESTS:
            case l.Uo.INCOMING_FRIEND_REQUESTS_ACCEPTED:
                return { icon: c, color: i.A.colors.BACKGROUND_MOD_STRONG };
            case l.Uo.INCOMING_GAME_FRIEND_REQUESTS:
            case l.Uo.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED:
                return { icon: h, color: i.A.colors.BACKGROUND_MOD_STRONG };
            default:
                return null;
        }
    },
    I = (e) => {
        switch (e.item_enum) {
            case l.r_.UPDATE_PROFILE:
                return s.Zp;
            case l.r_.ADD_FRIEND:
            case l.r_.FIND_FRIENDS:
                return s.k;
            case l.r_.FIRST_MESSAGE:
                return s.l0;
            default:
                return i.A.unsafe_rawColors.BRAND_500.css;
        }
    };
