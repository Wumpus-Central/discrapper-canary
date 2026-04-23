n.d(t, { Pm: () => C, rS: () => I, rr: () => E, sW: () => N, yI: () => p });
var s = n(827734),
    a = n(322387),
    l = n(286035),
    i = n(289876),
    r = n(31687),
    o = n(441955),
    d = n(271764),
    c = n(790018),
    u = n(338943),
    h = n(478772),
    _ = n(846500),
    A = n(784297),
    m = n(51213),
    g = n(194066),
    f = n(211643);
let E = {
        MISSED_MESSAGES: A,
        FRIEND_REQUEST_REMINDER: u,
        SCHEDULED_GUILD_EVENT: d,
        TOP_MESSAGES: _,
        NOTIFICATION_CENTER: r,
        UPDATE_PROFILE: n(566213),
        FIND_FRIENDS: i,
        ADD_FRIEND: i,
        FIRST_MESSAGE: g,
    },
    N = (e) => {
        switch (e.type) {
            case "lifecycle_item":
                switch (e.item_enum) {
                    case a.r_.ADD_FRIEND:
                        return "ADD_FRIEND";
                    case a.r_.FIND_FRIENDS:
                        return "FIND_FRIENDS";
                    case a.r_.FIRST_MESSAGE:
                        return "FIRST_MESSAGE";
                    case a.r_.UPDATE_PROFILE:
                        return "UPDATE_PROFILE";
                    default:
                        return "NOTIFICATION_CENTER";
                }
            case "missed_messages":
                return "MISSED_MESSAGES";
            case "friend_request_reminder":
                return "FRIEND_REQUEST_REMINDER";
            case "referral_program_entrypoint_reminder":
            default:
                return "NOTIFICATION_CENTER";
            case "scheduled_guild_event_started":
                return "SCHEDULED_GUILD_EVENT";
            case "top_messages":
                return "TOP_MESSAGES";
        }
    },
    p = (e) => ("icHighlight" === e ? "TOP_MESSAGES" : "NOTIFICATION_CENTER"),
    I = (e) => {
        switch (e) {
            case a.hW.GO_LIVE_PUSH:
                return { icon: f, color: s.A.colors.BACKGROUND_MOD_STRONG };
            case a.hW.FRIEND_REQUEST_ACCEPTED:
            case a.hW.GAME_FRIEND_REQUEST_ACCEPTED:
                return { icon: o, color: s.A.colors.STATUS_POSITIVE_BACKGROUND };
            case a.hW.FRIEND_REQUEST_PENDING:
            case a.hW.FRIEND_SUGGESTION_CREATED:
                return { icon: c, color: s.A.colors.BACKGROUND_MOD_STRONG };
            case a.hW.DM_FRIEND_NUDGE:
                return { icon: m, color: s.A.colors.BACKGROUND_MOD_STRONG };
            case a.Uo.INCOMING_FRIEND_REQUESTS:
            case a.Uo.INCOMING_FRIEND_REQUESTS_ACCEPTED:
                return { icon: c, color: s.A.colors.BACKGROUND_MOD_STRONG };
            case a.Uo.INCOMING_GAME_FRIEND_REQUESTS:
            case a.Uo.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED:
                return { icon: h, color: s.A.colors.BACKGROUND_MOD_STRONG };
            default:
                return null;
        }
    },
    C = (e) => {
        switch (e.item_enum) {
            case a.r_.UPDATE_PROFILE:
                return l.Zp;
            case a.r_.ADD_FRIEND:
            case a.r_.FIND_FRIENDS:
                return l.k;
            case a.r_.FIRST_MESSAGE:
                return l.l0;
            default:
                return s.A.unsafe_rawColors.BRAND_500.css;
        }
    };
