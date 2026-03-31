n.d(t, { Pm: () => C, rS: () => I, rr: () => f, sW: () => x, yI: () => E });
var i = n(827734),
    l = n(322387),
    s = n(286035),
    a = n(289876),
    r = n(31687),
    o = n(441955),
    c = n(271764),
    d = n(790018),
    u = n(338943),
    h = n(478772),
    A = n(846500),
    _ = n(784297),
    m = n(51213),
    g = n(194066),
    p = n(211643);
let f = {
        MISSED_MESSAGES: _,
        FRIEND_REQUEST_REMINDER: u,
        SCHEDULED_GUILD_EVENT: c,
        TOP_MESSAGES: A,
        NOTIFICATION_CENTER: r,
        UPDATE_PROFILE: n(566213),
        FIND_FRIENDS: a,
        ADD_FRIEND: a,
        FIRST_MESSAGE: g,
    },
    x = (e) => {
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
            case "referral_program_entrypoint_reminder":
            default:
                return "NOTIFICATION_CENTER";
            case "scheduled_guild_event_started":
                return "SCHEDULED_GUILD_EVENT";
            case "top_messages":
                return "TOP_MESSAGES";
        }
    },
    E = (e) => ("icHighlight" === e ? "TOP_MESSAGES" : "NOTIFICATION_CENTER"),
    I = (e) => {
        switch (e) {
            case l.hW.GO_LIVE_PUSH:
                return { icon: p, color: i.A.colors.BACKGROUND_MOD_STRONG };
            case l.hW.FRIEND_REQUEST_ACCEPTED:
            case l.hW.GAME_FRIEND_REQUEST_ACCEPTED:
                return { icon: o, color: i.A.colors.STATUS_POSITIVE_BACKGROUND };
            case l.hW.FRIEND_REQUEST_PENDING:
            case l.hW.FRIEND_SUGGESTION_CREATED:
                return { icon: d, color: i.A.colors.BACKGROUND_MOD_STRONG };
            case l.hW.DM_FRIEND_NUDGE:
                return { icon: m, color: i.A.colors.BACKGROUND_MOD_STRONG };
            case l.Uo.INCOMING_FRIEND_REQUESTS:
            case l.Uo.INCOMING_FRIEND_REQUESTS_ACCEPTED:
                return { icon: d, color: i.A.colors.BACKGROUND_MOD_STRONG };
            case l.Uo.INCOMING_GAME_FRIEND_REQUESTS:
            case l.Uo.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED:
                return { icon: h, color: i.A.colors.BACKGROUND_MOD_STRONG };
            default:
                return null;
        }
    },
    C = (e) => {
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
