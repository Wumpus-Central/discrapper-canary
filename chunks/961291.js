"use strict";
n.d(t, { Pm: () => I, rS: () => E, rr: () => f, sW: () => x, yI: () => C });
var i = n(827734),
    s = n(322387),
    l = n(286035),
    r = n(289876),
    a = n(31687),
    o = n(441955),
    c = n(271764),
    d = n(790018),
    u = n(338943),
    h = n(478772),
    A = n(846500),
    m = n(784297),
    p = n(51213),
    g = n(194066),
    _ = n(211643);
let f = {
        MISSED_MESSAGES: m,
        FRIEND_REQUEST_REMINDER: u,
        SCHEDULED_GUILD_EVENT: c,
        TOP_MESSAGES: A,
        NOTIFICATION_CENTER: a,
        UPDATE_PROFILE: n(566213),
        FIND_FRIENDS: r,
        ADD_FRIEND: r,
        FIRST_MESSAGE: g,
    },
    x = (e) => {
        switch (e.type) {
            case "lifecycle_item":
                switch (e.item_enum) {
                    case s.r_.ADD_FRIEND:
                        return "ADD_FRIEND";
                    case s.r_.FIND_FRIENDS:
                        return "FIND_FRIENDS";
                    case s.r_.FIRST_MESSAGE:
                        return "FIRST_MESSAGE";
                    case s.r_.UPDATE_PROFILE:
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
    C = (e) => ("icHighlight" === e ? "TOP_MESSAGES" : "NOTIFICATION_CENTER"),
    E = (e) => {
        switch (e) {
            case s.hW.GO_LIVE_PUSH:
                return { icon: _, color: i.A.colors.BACKGROUND_MOD_STRONG };
            case s.hW.FRIEND_REQUEST_ACCEPTED:
            case s.hW.GAME_FRIEND_REQUEST_ACCEPTED:
                return { icon: o, color: i.A.colors.STATUS_POSITIVE_BACKGROUND };
            case s.hW.FRIEND_REQUEST_PENDING:
            case s.hW.FRIEND_SUGGESTION_CREATED:
                return { icon: d, color: i.A.colors.BACKGROUND_MOD_STRONG };
            case s.hW.DM_FRIEND_NUDGE:
                return { icon: p, color: i.A.colors.BACKGROUND_MOD_STRONG };
            case s.Uo.INCOMING_FRIEND_REQUESTS:
            case s.Uo.INCOMING_FRIEND_REQUESTS_ACCEPTED:
                return { icon: d, color: i.A.colors.BACKGROUND_MOD_STRONG };
            case s.Uo.INCOMING_GAME_FRIEND_REQUESTS:
            case s.Uo.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED:
                return { icon: h, color: i.A.colors.BACKGROUND_MOD_STRONG };
            default:
                return null;
        }
    },
    I = (e) => {
        switch (e.item_enum) {
            case s.r_.UPDATE_PROFILE:
                return l.Zp;
            case s.r_.ADD_FRIEND:
            case s.r_.FIND_FRIENDS:
                return l.k;
            case s.r_.FIRST_MESSAGE:
                return l.l0;
            default:
                return i.A.unsafe_rawColors.BRAND_500.css;
        }
    };
